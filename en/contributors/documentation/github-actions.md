# GitHub Actions

Stride Docs is built and published by [GitHub Actions](https://github.com/stride3d/stride-docs/tree/master/.github/workflows). Every workflow does the same fundamental thing — run [`BuildDocs.ps1`](documentation-generation-pipeline.md) to render the documentation into the `_site` folder — and they differ only in **what triggers them** and **where the output goes**.

You don't need to touch these workflows to contribute content. This page is here so that, when you open the **Actions** tab and see a run, you understand what it is doing and why.

| Workflow file | Name in the Actions tab | Trigger | Target |
| --- | --- | --- | --- |
| [stride-docs-release-azure.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-release-azure.yml) | Build Stride Docs for Azure Web App Release 🚀 | Push to `release`, or manual | Azure Web App `stride-doc`, slot **Production** → [doc.stride3d.net](https://doc.stride3d.net/) |
| [stride-docs-release-fast-track-azure.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-release-fast-track-azure.yml) | Build Stride Docs (Fast Track) for Azure Web App Release 🚀 | Manual only | Same as above, without the artifact step |
| [stride-docs-staging-azure.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-staging-azure.yml) | Build Stride Docs for Azure Web App Staging | Push to `staging`, or manual | Azure Web App `stride-doc`, slot **staging** → [stride-doc-staging.azurewebsites.net](https://stride-doc-staging.azurewebsites.net/latest/en/index.html) |
| [stride-docs-staging-fast-track-azure.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-staging-fast-track-azure.yml) | Build Stride Docs (Fast Track) for Azure Web App Staging | Manual only | Same as above, without the artifact step |
| [stride-docs-github.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-github.yml) | Build Stride Docs for GitHub Staging | Manual only | GitHub Pages in your own fork |
| [stride-docs-test-build.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-test-build.yml) | Build Stride Docs - Test Build | Manual only | Nothing — build artifact only |

## The big picture

``` mermaid
flowchart LR
    PR[Pull request] --> master[master branch]
    master -->|merge| staging[staging branch]
    master -->|merge| release[release branch]

    staging --> WS[stride-docs-staging-azure.yml]
    release --> WR[stride-docs-release-azure.yml]
    master -.->|manual dispatch only| WG[stride-docs-github.yml]
    master -.->|manual dispatch only| WT[stride-docs-test-build.yml]

    WS --> AS[Azure slot: staging]
    WR --> AP[Azure slot: Production]
    WG --> GH[GitHub Pages]
    WT --> AR[Artifact only, no deployment]

    AS --> URLS[stride-doc-staging.azurewebsites.net]
    AP --> URLP[doc.stride3d.net]
```

`master` is the default branch and the target for pull requests. **Nothing is deployed from `master` automatically.** A deployment happens only when work is merged from `master` into `staging` or `release`, which is what makes those two branches the release control points.

The two **Fast Track** workflows are not shown above because they are never triggered by a push — they are manual variants of the release and staging deployments.

## Who can run these workflows

On the [stride3d/stride-docs](https://github.com/stride3d/stride-docs) repository, running a workflow requires write access, so in practice **only maintainers can trigger a deployment**. If you don't have write access you can watch the runs, read the logs and download the build artifacts, but the **Run workflow** button won't be available to you.

Opening a pull request doesn't deploy anything either. None of the workflows declare a `pull_request` trigger, so your PR is reviewed from the diff and from whatever preview you provide yourself.

All four Azure workflows guard every job with a repository check:

```yaml
if: github.repository == 'stride3d/stride-docs'
```

This means that in a fork they don't merely fail — the jobs are **skipped entirely** and the run finishes grey rather than red. Deploying to Azure from a fork would require your own Azure Web App, your own publish profile secrets and removing that guard, which is described in [Setting up a new Azure Web App](deployment-azure.md#setting-up-a-new-azure-web-app).

The two workflows without that guard, `stride-docs-github.yml` and `stride-docs-test-build.yml`, are the ones intended for contributors:

| Workflow | In your fork | What it needs |
| --- | --- | --- |
| `stride-docs-github.yml` | ✅ Publishes to your GitHub Pages | Pages enabled with the **GitHub Actions** source |
| `stride-docs-test-build.yml` | ✅ Builds and gives you an artifact | Nothing |
| The four Azure workflows | ⏭️ Jobs are skipped | Your own Azure infrastructure |

> [!TIP]
> **Deploying to GitHub Pages is by far the easier route** and is what we recommend for showing off a change. It is free, needs no Azure account, and the setup is a one-time repository setting. Follow [Deployment to GitHub Pages](deployment-azure.md#deployment-to-github-pages) and share the resulting link in your pull request.

Note that GitHub disables Actions on newly forked repositories by default. The first time you open the **Actions** tab in your fork you'll need to confirm that you want to enable them before any **Run workflow** button appears.

## The shared build

Every workflow — all six — performs its build through the same composite action, [`.github/actions/setup-stride`](https://github.com/stride3d/stride-docs/blob/master/.github/actions/setup-stride/action.yml). Keeping the build in one place means the six workflows stay in sync automatically; if you need to change how the documentation is built, that file is almost always the one to edit.

All builds run on a **Windows** runner (`windows-2025-vs2026`). Windows is required because the build compiles the Stride solution to extract the API documentation.

``` mermaid
flowchart TD
    A[Checkout stride-docs<br/>with Git LFS] --> B[setup-stride composite action]

    subgraph B[setup-stride]
      direction TB
      B1[Install .NET 10 SDK] --> B2["Stamp VERSION into en/docfx.json"]
      B2 --> B3[Checkout stride3d/stride<br/>with Git LFS]
      B3 --> B4[Restore NuGet cache]
      B4 --> B5[Checkout and build<br/>the custom DocFX fork]
      B5 --> B6[Install DocFX 2.9-stride]
      B6 --> B7["build-all.bat<br/>(runs BuildDocs.ps1)"]
    end

    B --> C[_site folder]
```

Step by step:

1. **Checkout Stride Docs** into a `stride-docs` folder, with `lfs: true` so that images and other large assets are fetched rather than left as pointer files
1. **Install the .NET 10 SDK**
1. **Stamp the version** — the placeholder `2.0.0.x` in `en/docfx.json` is replaced with `2.0.0.<run number>`, so every build is traceable back to the run that produced it
1. **Checkout [stride3d/stride](https://github.com/stride3d/stride)** into a sibling folder, also with Git LFS. The engine source is needed to generate the API reference
1. **Restore the NuGet cache** keyed on the project files, which saves a substantial amount of time on repeat builds
1. **Build DocFX from a fork** — the build currently uses [VaclavElias/docfx](https://github.com/VaclavElias/docfx) (branch `temp-fix`), packs it as version `2.9-stride` and installs it as a global tool. This is a temporary measure until the required fixes land in an official DocFX release
1. **Build the documentation** by running `build-all.bat`, which drives `BuildDocs.ps1` in non-interactive mode and writes the result into `_site`

For what happens inside that last step — languages, versions, API metadata and the post-processing passes — see [Generation Pipeline](documentation-generation-pipeline.md).

> [!NOTE]
> Because the build compiles Stride and generates the full API reference, it is considerably heavier than a typical static-site build. This is why the PDF and API steps can be skipped, as described below.

### Manual run inputs

Every workflow that can be dispatched manually offers the same three inputs:

| Input | Default | Effect |
| --- | --- | --- |
| **Skip PDF building** | `true` | Passes `-SkipPdfBuilding`, omitting the PDF generation pass |
| **Skip API building** | `true` | Passes `-SkipApiBuilding`, omitting the Stride API reference |
| **Stride branch to checkout** | `master` | Which branch of `stride3d/stride` the API reference is generated from |

Both skip options default to `true` because they are the slowest parts of the build. Leave them on for a quick content preview; turn them off when you specifically need to check the API reference or the PDF output.

## Azure workflows

The four Azure workflows all deploy to the same Azure Web App, `stride-doc`, and differ in the slot they target and whether they hand the build off through an artifact.

| | Release | Staging |
| --- | --- | --- |
| Branch | `release` | `staging` |
| `app-name` | `stride-doc` | `stride-doc` |
| `slot-name` | `Production` | `staging` |
| Publish profile | `AZUREAPPSERVICE_PUBLISHPROFILE_4803638D…` | `AZUREAPPSERVICE_PUBLISHPROFILE_32FCD402…` |
| GitHub environment | `Production` | `Production` |

> [!NOTE]
> Both workflows report to a GitHub environment named `Production`, including the staging one. That is only the label shown on the run page — the actual target is determined by `slot-name`, so the staging workflow really does deploy to the staging slot.

For how the Azure Web App itself is configured, see [Deployment](deployment-azure.md).

### Standard versus Fast Track

``` mermaid
flowchart TD
    subgraph Standard["Standard (2 jobs)"]
      direction TB
      S1[build job] --> S2[Upload artifact 'DocFX-app']
      S2 -->|needs: build| S3[deploy job]
      S3 --> S4[Download artifact]
      S4 --> S5[Deploy to Azure]
    end

    subgraph Fast["Fast Track (1 job)"]
      direction TB
      F1[build-deploy job] --> F2[Deploy to Azure directly]
    end
```

The **standard** workflows split the work into a `build` job and a `deploy` job, handing the site over as an artifact named `DocFX-app`. The benefit is that the built documentation is retained on the run page, so you can download and inspect exactly what was published.

The **Fast Track** workflows collapse both into a single `build-deploy` job that deploys straight from the working directory. Compressing, uploading and re-downloading a full documentation build is slow, so skipping it saves a meaningful amount of time — at the cost of leaving no downloadable artifact behind. They are manual-only and exist for when you need a deployment out quickly.

### GitHub Release

The release workflow has one extra step that the others don't: after a successful build it creates a **draft** GitHub Release tagged `2.0.0.<run number>`. This is why that workflow requests `contents: write` permission while the rest only need `contents: read`.

### Which pushes are ignored

Pushes to `release` and `staging` are ignored when they only touch documentation or repository plumbing:

```yaml
paths-ignore:
  - 'README.md'
  - 'Stride.Docs.sln'
  - 'BuildDocs.ps1'
  - 'wiki/**'
  - .gitignore
  - '.github/**'
```

So editing a workflow file on `release` will **not** redeploy the production site. If you need a run anyway, start one manually from the Actions tab.

> [!CAUTION]
> `BuildDocs.ps1` is on that list, so changing the build script alone does not trigger a deployment even though it directly affects the output. After changing it, run the workflow manually.

## GitHub Pages workflow

``` mermaid
flowchart TD
    D[workflow_dispatch only] --> A[Checkout + setup-stride]
    A --> B["upload-pages-artifact<br/>path: stride-docs/_site"]
    B -->|needs: build| C[deploy job]
    C --> E[actions/deploy-pages]
    E --> F[GitHub Pages]
```

This workflow uses GitHub's **native Pages deployment**: `actions/upload-pages-artifact` packages `_site`, and `actions/deploy-pages` publishes it directly to the Pages service.

> [!IMPORTANT]
> There is **no `gh-pages` branch** involved. Nothing is committed to your repository, so don't go looking for a branch after the run — the site is served straight from the uploaded artifact. In your fork, set **Settings** → **Pages** → **Source** to **GitHub Actions** rather than *Deploy from a branch*.

Two details make this workflow distinctive:

- It declares `pages: write` and `id-token: write` permissions, which the Pages deployment requires in order to authenticate without any stored secret
- It sets `concurrency: group: pages` with `cancel-in-progress: true`, so starting a new run cancels any deployment still in flight and the last run always wins

Because documentation is published under a version and language folder, your site will be at `https://[your-username].github.io/stride-docs/4.4/en` rather than at the root. See [Deployment to GitHub Pages](deployment-azure.md#deployment-to-github-pages) for the full walkthrough.

## Test build workflow

`stride-docs-test-build.yml` is the simplest of the six: a single `build` job that runs the shared setup and uploads the `DocFX-app` artifact. There is no deployment step at all.

Use it when you want to confirm that a change actually builds — particularly one touching `BuildDocs.ps1`, `docfx.json` or the table of contents — without publishing anything anywhere. Download the artifact from the run page to inspect the generated HTML.

## Running a workflow manually

1. Go to the repository **Actions** tab
1. Pick the workflow in the left sidebar
1. Click **Run workflow**, choose the branch, adjust the inputs if needed, and confirm

> [!CAUTION]
> For the Azure workflows, choose the branch that matches the target. Running the release workflow from a feature branch would build that branch's content and publish it straight to [doc.stride3d.net](https://doc.stride3d.net/).

## Related pages

- [Deployment](deployment-azure.md) — setting up the Azure Web App and deploying to GitHub Pages
- [Generation Pipeline](documentation-generation-pipeline.md) — what `BuildDocs.ps1` does during the build
- [Installation](installation.md) — running the same build on your machine
- [Major Release Workflow](major-release-workflow.md) — how documentation releases are coordinated
