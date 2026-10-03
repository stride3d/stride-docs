# GitHub Actions

Stride Docs is built and published by [GitHub Actions](https://github.com/stride3d/stride-docs/tree/master/.github/workflows). Every workflow does the same fundamental thing, run [`BuildDocs.ps1`](documentation-generation-pipeline.md) to render the documentation into the `_site` folder, and they differ only in **what triggers them** and **where the output goes**.

You don't need to touch these workflows to contribute content. This page is here so that, when you open the **Actions** tab and see a run, you understand what it is doing and why.

| Workflow file | Name in the Actions tab | Trigger | Target |
| --- | --- | --- | --- |
| [stride-docs-deploy-azure.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-deploy-azure.yml) | Deploy Stride Docs version to Azure Web App 🚀 | Manual only, from the branch of the version | The version folder (i.e. `4.4/`) of the Azure Web App `stride-doc`, slot **staging** or **Production** |
| [stride-docs-site-root-azure.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-site-root-azure.yml) | Deploy Stride Docs site root to Azure Web App 🚀 | Push to `master` changing the root files (staging), or manual | `versions.json`, `web.config` and `robots.txt` of the Azure Web App `stride-doc`, slot **staging** or **Production** |
| [stride-docs-github.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-github.yml) | Build Stride Docs for GitHub Staging | Manual only | GitHub Pages in your own fork |
| [stride-docs-test-build.yml](https://github.com/stride3d/stride-docs/blob/master/.github/workflows/stride-docs-test-build.yml) | Build Stride Docs - Test Build | Manual only | Nothing, build artifact only |

## The big picture

``` mermaid
flowchart LR
    PR[Pull request] --> master[master branch]
    master -.->|manual| WD[stride-docs-deploy-azure.yml]
    old[master-4.3, ... branches] -.->|manual| WD
    master -->|push changing root files, or manual| WR[stride-docs-site-root-azure.yml]
    master -.->|manual dispatch only| WG[stride-docs-github.yml]
    master -.->|manual dispatch only| WT[stride-docs-test-build.yml]

    WD --> AV["Azure: version folder (4.4/, 4.3/, ...)"]
    WR --> AR["Azure: versions.json, web.config, robots.txt"]
    WG --> GH[GitHub Pages]
    WT --> AA[Artifact only, no deployment]
```

The site hosts the documentation of several versions, each in its own folder (`4.4/`, `4.3/`, ...), and a few files at its root shared by all versions:

- `versions.json` lists the versions shown in the version selector and which one is the latest
- `web.config` serves `/latest/` from the latest version folder, and holds the redirection rules
- `robots.txt`

Each version is deployed from its own branch (`master` for the version in development, `master-4.3` for 4.3, ...) and only replaces its own folder. The root files are always deployed from `master`, so deploying an older version never changes which version is the latest. Making a version the latest one is a change to `versions.json` followed by a run of the site root workflow, without rebuilding any documentation.

`master` is the default branch and the target for pull requests. **The documentation isn't deployed from `master` automatically**, a maintainer runs the deployment manually from the **Actions** tab, choosing the branch and the Azure slot (staging or production). Only changes to the root files on `master` are deployed automatically, to staging.

## Who can run these workflows

On the [stride3d/stride-docs](https://github.com/stride3d/stride-docs) repository, running a workflow requires write access, so in practice **only maintainers can trigger a deployment**. If you don't have write access you can watch the runs, read the logs and download the build artifacts, but the **Run workflow** button won't be available to you.

Opening a pull request doesn't deploy anything either. None of the workflows declare a `pull_request` trigger, so your PR is reviewed from the diff and from whatever preview you provide yourself.

Both Azure workflows guard every job with a repository check:

```yaml
if: github.repository == 'stride3d/stride-docs'
```

This means that in a fork they don't merely fail, the jobs are **skipped entirely** and the run finishes grey rather than red. Deploying to Azure from a fork would require your own Azure Web App, your own publish profile secrets and removing that guard, which is described in [Setting up a new Azure Web App](deployment-azure.md#setting-up-a-new-azure-web-app).

The two workflows without that guard, `stride-docs-github.yml` and `stride-docs-test-build.yml`, are the ones intended for contributors:

| Workflow | In your fork | What it needs |
| --- | --- | --- |
| `stride-docs-github.yml` | ✅ Publishes to your GitHub Pages | Pages enabled with the **GitHub Actions** source |
| `stride-docs-test-build.yml` | ✅ Builds and gives you an artifact | Nothing |
| The two Azure workflows | ⏭️ Jobs are skipped | Your own Azure infrastructure |

> [!TIP]
> **Deploying to GitHub Pages is by far the easier route** and is what we recommend for showing off a change. It is free, needs no Azure account, and the setup is a one-time repository setting. Follow [Deployment to GitHub Pages](deployment-azure.md#deployment-to-github-pages) and share the resulting link in your pull request. Optionally, run it locally, using [Installation](installation.md) and share screenshots of the local preview.

Note that GitHub disables Actions on newly forked repositories by default. The first time you open the **Actions** tab in your fork you'll need to confirm that you want to enable them before any **Run workflow** button appears.

## The shared build

Every workflow building the documentation (all of them except the site root one) performs its build through the same composite action, [`.github/actions/setup-stride`](https://github.com/stride3d/stride-docs/blob/master/.github/actions/setup-stride/action.yml). Keeping the build in one place means these workflows stay in sync automatically; if you need to change how the documentation is built, that file is almost always the one to edit.

All builds run on a **Windows** runner (`windows-2025-vs2026`). Windows is required because the build compiles the Stride solution to extract the API documentation.

``` mermaid
flowchart TD
    A[Checkout stride-docs<br/>with Git LFS] --> B[setup-stride composite action]

    subgraph B[setup-stride]
      direction TB
      B1[Install .NET 10 SDK] --> B3[Checkout stride3d/stride<br/>with Git LFS]
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
1. **Checkout [stride3d/stride](https://github.com/stride3d/stride)** into a sibling folder, also with Git LFS. The engine source is needed to generate the API reference
1. **Restore the NuGet cache** keyed on the project files, which saves a substantial amount of time on repeat builds
1. **Build DocFX from a fork**, the build currently uses [VaclavElias/docfx](https://github.com/VaclavElias/docfx) (branch `temp-fix`), packs it as version `2.9-stride` and installs it as a global tool. This is a temporary measure until the required fixes land in an official DocFX release
1. **Build the documentation** by running `build-all.bat`, which drives `BuildDocs.ps1` in non-interactive mode and writes the result into `_site`

Every build is traceable back to its sources: the footer of each page links to the stride-docs and stride commits it was built from, and `build.json` in the version folder (i.e. [/4.4/build.json](https://doc.stride3d.net/4.4/build.json)) lists them with their branches, the build date and the GitHub Actions run.

For what happens inside that last step, languages, versions, API metadata and the post-processing passes, see [Generation Pipeline](documentation-generation-pipeline.md).

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

Both Azure workflows deploy to the same Azure Web App, `stride-doc`. The **slot** input chooses where:

| | Production | Staging |
| --- | --- | --- |
| `app-name` | `stride-doc` | `stride-doc` |
| `slot-name` | `Production` | `staging` |
| GitHub environment | `Production` | `Staging` |
| Publish profile | Secret `AZURE_PUBLISH_PROFILE` of the `Production` environment | Secret `AZURE_PUBLISH_PROFILE` of the `Staging` environment |
| URL | [doc.stride3d.net](https://doc.stride3d.net/) | [stride-doc-staging.azurewebsites.net](https://stride-doc-staging.azurewebsites.net/latest/en/index.html) |

Each publish profile is a secret of its environment, so only jobs running in that environment can use it. Required reviewers and deployment branches (i.e. `master` and `master-*`) can be set on the `Production` environment in the repository settings, so that production deployments wait for an approval.

Both use [Azure Web Apps Deploy v3](https://github.com/Azure/webapps-deploy) with a `target-path`, which deploys only into that path of the site. Nothing outside of it is removed, so the other versions and the root files stay untouched.

For how the Azure Web App itself is configured, see [Deployment](deployment-azure.md).

### Version deployment

`stride-docs-deploy-azure.yml` runs from the branch of the version to deploy, for example `master` for the version in development or `master-4.3` for 4.3:

1. Builds the documentation, the version folder in `_site` (i.e. `4.4/`) being the highest version of the branch's `versions.json`
1. Deploys only that folder to `/home/site/wwwroot/4.4` with `clean: true`, which replaces its whole content, so pages removed from the documentation are removed from the site too. The site root files generated next to it aren't deployed
1. For production, creates a **draft** GitHub Release tagged `2.0.0.<run number>`, which is why this workflow requests `contents: write` permission

The documentation of a version not released yet (a beta) can be deployed to production as well: it's available in its own folder, without being the latest. The Stride Launcher and Game Studio load its release notes and getting started links from there.

### Site root deployment

`stride-docs-site-root-azure.yml` runs [`BuildSiteRoot.ps1`](documentation-generation-pipeline.md) to generate the root files from `master`, and deploys each of them on its own:

- `versions.json`, as is. The version selector of every version reads it, including old versions that can't be updated anymore, so its format can only gain fields
- `web.config`, with `%deployment_version%` replaced by the latest version of `versions.json`
- `robots.txt`

A push to `master` changing one of these files deploys them to staging. Deploying them to production is manual, and only allowed from `master`.

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
> There is **no `gh-pages` branch** involved. Nothing is committed to your repository, so don't go looking for a branch after the run, the site is served straight from the uploaded artifact. In your fork, set **Settings** → **Pages** → **Source** to **GitHub Actions** rather than *Deploy from a branch*.

Two details make this workflow distinctive:

- It declares `pages: write` and `id-token: write` permissions, which the Pages deployment requires in order to authenticate without any stored secret
- It sets `concurrency: group: pages` with `cancel-in-progress: true`, so starting a new run cancels any deployment still in flight and the last run always wins

Because documentation is published under a version and language folder, your site will be at `https://[your-username].github.io/stride-docs/4.4/en` rather than at the root. See [Deployment to GitHub Pages](deployment-azure.md#deployment-to-github-pages) for the full walkthrough.

## Test build workflow

`stride-docs-test-build.yml` is the simplest of the workflows building the documentation: a single `build` job that runs the shared setup and uploads the `DocFX-app` artifact. There is no deployment step at all.

Use it when you want to confirm that a change actually builds, particularly one touching `BuildDocs.ps1`, `docfx.json` or the table of contents, without publishing anything anywhere. Download the artifact from the run page to inspect the generated HTML.

## Running a workflow manually

1. Go to the repository **Actions** tab
1. Pick the workflow in the left sidebar
1. Click **Run workflow**, choose the branch, adjust the inputs if needed, and confirm

> [!CAUTION]
> For the version deployment, choose the branch of the version to deploy. Running it from a feature branch with the **production** slot would build that branch's content and publish it straight to [doc.stride3d.net](https://doc.stride3d.net/), replacing the version folder it documents.

## Related pages

- [Deployment](deployment-azure.md) - setting up the Azure Web App and deploying to GitHub Pages
- [Generation Pipeline](documentation-generation-pipeline.md) - what `BuildDocs.ps1` does during the build
- [Installation](installation.md) - running the same build on your machine
- [Major Release Workflow](major-release-workflow.md) - how documentation releases are coordinated
