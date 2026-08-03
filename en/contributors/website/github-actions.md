# GitHub Actions

The Stride website is built and published by [GitHub Actions](https://github.com/stride3d/stride-website/tree/master/.github/workflows). Every workflow does the same fundamental thing, build the [Eleventy](https://www.11ty.dev/) site into the `_site` folder, and they differ only in **what triggers them** and **where the output goes**.

You don't need to touch these workflows to contribute content. This page is here so that, when you open the **Actions** tab and see a run, you understand what it is doing and why.

| Workflow file | Name in the Actions tab | Trigger | Target |
| --- | --- | --- | --- |
| [stride-website-release-azure.yml](https://github.com/stride3d/stride-website/blob/master/.github/workflows/stride-website-release-azure.yml) | Build Stride Web for Azure Web App Release 🚀 | Push to `release`, or manual | Azure Web App `stride-website`, slot **Production** → [www.stride3d.net](https://www.stride3d.net/) |
| [stride-website-staging-azure.yml](https://github.com/stride3d/stride-website/blob/master/.github/workflows/stride-website-staging-azure.yml) | Build Stride Web for Azure Web App Staging | Push to `staging`, or manual | Azure Web App `stride-website`, slot **staging** → [stride-website-staging.azurewebsites.net](https://stride-website-staging.azurewebsites.net/) |
| [stride-website-github.yml](https://github.com/stride3d/stride-website/blob/master/.github/workflows/stride-website-github.yml) | Build Stride Web for GitHub Staging | Manual only | The `gh-pages` branch of your fork (GitHub Pages) |

## The big picture

``` mermaid
flowchart LR
    PR[Pull request] --> master[master branch]
    master -->|merge| staging[staging branch]
    master -->|merge| release[release branch]

    staging --> WS[stride-website-staging-azure.yml]
    release --> WR[stride-website-release-azure.yml]
    master -.->|manual dispatch only| WG[stride-website-github.yml]

    WS --> AS[Azure slot: staging]
    WR --> AP[Azure slot: Production]
    WG --> GH[gh-pages branch]

    AS --> URLS[stride-website-staging.azurewebsites.net]
    AP --> URLP[www.stride3d.net]
    GH --> URLG[GitHub Pages site]
```

`master` is the default branch and the target for pull requests. **Nothing is deployed from `master` automatically.** A deployment happens only when work is merged from `master` into `staging` or `release`, which is what makes those two branches the release control points. Optionally, a maintainer can run any of the workflows manually from the **Actions** tab.

## Who can run these workflows

On the [stride3d/stride-website](https://github.com/stride3d/stride-website) repository, running a workflow requires write access, so in practice **only maintainers can trigger a deployment**. If you don't have write access you can watch the runs, read the logs and download the build artifacts, but the **Run workflow** button won't be available to you.

Opening a pull request doesn't deploy anything either. None of the workflows declare a `pull_request` trigger, so your PR is reviewed from the diff and from whatever preview you provide yourself.

That is where your own fork comes in. All three workflow files are copied along with the fork, but they are not equally usable:

| Workflow | In your fork | What it needs |
| --- | --- | --- |
| `stride-website-github.yml` | ✅ Works | One repository setting, then **Run workflow** |
| `stride-website-release-azure.yml` | ❌ Fails at deploy | Your own Azure Web App, App Service Plan and publish profile secret |
| `stride-website-staging-azure.yml` | ❌ Fails at deploy | Your own Azure Web App, App Service Plan and publish profile secret |

The Azure workflows reference publish profile secrets that exist only in the Stride repository. In a fork those secrets are empty, so the `build` job still succeeds but the `deploy` job fails with an authentication error. Making them work means standing up your own Azure infrastructure and paying for it, which is described in [Setting up a new Azure Web App](deployment-azure.md#setting-up-a-new-azure-web-app).

> [!TIP]
> **Deploying to GitHub Pages is by far the easier route** and is what we recommend for showing off a change. It is free, needs no Azure account, and the only setup is switching **Settings** → **Actions** → **General** → **Workflow permissions** to **Read and write permissions** before you run the workflow. Follow [Deployment to GitHub Pages](deployment-azure.md#deployment-to-github-pages) and share the resulting link in your pull request. Optionally, run it locally, using [Installation](installation.md) and share screenshots of the local preview.

Note that GitHub disables Actions on newly forked repositories by default. The first time you open the **Actions** tab in your fork you'll need to confirm that you want to enable them before any **Run workflow** button appears.

## The shared build

Both Azure workflows run an identical `build` job on `ubuntu-latest`:

1. `actions/checkout@v6` clones the repository
1. `actions/setup-node@v6` installs Node **24.x**
1. `npm install`, then `npm run build --if-present` and `npm run test --if-present`
   - `build` runs `npx @11ty/eleventy`, which renders the site into `_site`, the same command you run locally, described in [Local installation](installation.md)
   - There is no `test` script in `package.json`, so `--if-present` makes that step a silent no-op
1. `actions/upload-artifact@v7` uploads the contents of `./_site` as an artifact named `node-app`

A separate `deploy` job then downloads that artifact and pushes it to Azure. Splitting build from deploy has two benefits: the deploy job needs no source checkout, and the built site is retained as a downloadable artifact on the run page, so you can inspect exactly what was published.

``` mermaid
flowchart TD
    subgraph Trigger
      T1[push to release / staging] --> J1
      T2[workflow_dispatch] --> J1
    end

    subgraph "job: build (ubuntu-latest)"
      J1[checkout] --> J2[setup-node 24.x]
      J2 --> J3["npm install<br/>npm run build<br/>npm run test"]
      J3 --> J4["upload-artifact 'node-app' from ./_site"]
    end

    J4 -->|needs: build| J5

    subgraph "job: deploy (ubuntu-latest)"
      J5["download-artifact 'node-app'"] --> J6[azure/webapps-deploy]
      J6 --> J7[Environment URL published on the run page]
    end
```

## Azure workflows

The release and staging workflows are the same file except for the trigger branch, the Azure slot and the publish profile secret.

| | Release | Staging |
| --- | --- | --- |
| Branch | `release` | `staging` |
| `app-name` | `stride-website` | `stride-website` |
| `slot-name` | `Production` | `staging` |
| Publish profile | `AZUREAPPSERVICE_PUBLISHPROFILE_0EC7AAA1…` | `AZUREAPPSERVICE_PUBLISHPROFILE_987D5D58…` |
| GitHub environment | `Production` | `Production` |

Both use `package: .`, meaning the working directory holding the downloaded artifact contents.

> [!NOTE]
> Both workflows report to a GitHub environment named `Production`, including the staging one. That is only the label shown on the run page, the actual target is determined by `slot-name`, so the staging workflow really does deploy to the staging slot.

For how the Azure Web App itself is configured, see [Deployment](deployment-azure.md).

### Which pushes are ignored

Pushes are ignored when they only touch documentation or repository plumbing:

```yaml
paths-ignore:
  - 'README.md'
  - 'Stride.Web.sln'
  - 'Stride.Web.slnx'
  - 'wiki/**'
  - '_drafts/**'
  - .gitignore
  - '.github/**'
```

So editing a draft post or a workflow file on `release` will **not** redeploy the production site. If you need a run anyway, start one manually from the Actions tab, both workflows also declare `workflow_dispatch`.

### Publish profiles

The publish profiles are stored as repository secrets. If one is rotated in the Azure portal (**Get publish profile** on the app or the slot), the matching secret in the repository settings has to be updated too, otherwise deployments start failing with an authentication error.

## GitHub Pages workflow

``` mermaid
flowchart TD
    D[workflow_dispatch only] --> A[checkout]
    A --> B["setup-node<br/>matrix: 24.x"]
    B --> C["npm install<br/>npm run build"]
    C --> E["peaceiris/actions-gh-pages<br/>publish_dir: ./_site"]
    E --> F[gh-pages branch]
```

This workflow is a single job with no artifact hand-off, it builds and publishes in place using [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages), pushing `_site` to the `gh-pages` branch with the automatic `GITHUB_TOKEN`. It never runs on push; someone has to start it from the Actions tab.

It exists as a free preview target that is independent of Azure, which makes it the recommended way to show maintainers a design change before it is merged. See [Deployment to GitHub Pages](deployment-azure.md#deployment-to-github-pages) for the full walkthrough, including the repository permissions you need to enable in your fork first.

> [!TIP]
> The `strategy.matrix.node-version: [24.x]` in this workflow is a single-entry matrix, so it produces exactly one job. It gives no parallelism, it only names a variable.

## Running a workflow manually

1. Go to the repository **Actions** tab
1. Pick the workflow in the left sidebar
1. Click **Run workflow**, choose the branch, and confirm

> [!CAUTION]
> For the Azure workflows, choose the branch that matches the target. Running the release workflow from a feature branch would build that branch's content and publish it straight to [www.stride3d.net](https://www.stride3d.net/).

## Related pages

- [Deployment](deployment-azure.md), setting up the Azure Web App and deploying to GitHub Pages
- [Local installation](installation.md), running the same build on your machine
- [Major Release Workflow](major-release-workflow.md), how website releases are coordinated
