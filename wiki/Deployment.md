# Table of Contents

We tested five different deployment methods and chose Azure Web Apps IIS ASP.NET 4.8.

- [GitHub Pages](#github-pages)
- [Azure Web Apps](#azure-web-apps)
  - [Deploying with .NET Framework](#deploying-with-net-framework)
- [Deployment To Wiki](#deployment-to-wiki)

# GitHub Pages

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub, optionally processes the files through a build process, and publishes a website. It is an excellent way to host a website for free and serves as an effective method for testing a website before deploying it to a paid hosting service.

We use GitHub Pages to test our website. Any content pushed to the `staging` branch of the `stride-website` repository is automatically deployed to the `gh-pages` branch, from which GitHub Pages builds and publishes the website.

To manage the build and deployment process, we use the GitHub action `stride-web-staging-github.yml`. This action is triggered when:

1. A push is made to the staging branch
1. The action is manually triggered

You can manually trigger the action by navigating to the **Actions** tab and clicking the **Run workflow** button.

The `gh-pages` branch is a special branch used by GitHub Pages to host the website and should not be edited directly. Any changes made to the `gh-pages` branch will be overwritten by the subsequent `staging` branch deployment.

The GitHub action `stride-web-staging-github.yml` works as follows:

1. The action is triggered when:
   - A push is made to the staging branch
   - The action is manually triggered
1. `paths-ignore` is used to ignore specific changes to the `staging` branch
   - Current exclusions: `README.md`, `wiki/**`, `.github/**`
1. The remaining steps in the action are self-explanatory

# Azure Web Apps

## Deploying with .NET Framework

The .NET Framework uses IIS to host the website, which serves any static files.

The `web.config` file is used to configure IIS, including:

- Mime types for static files
- Redirects
- Gzip compression
- Static file caching
- Custom Headers
- Custom 404

The GitHub action `stride-website-staging-azure` builds the website and deploys it to Azure Web Apps.

[Step-by-Step Deployment Guide for Azure Web Apps (Windows) with IIS and Stride Website](Deployment-Azure).

# Deployment To Wiki

While the GitHub wiki offers a convenient way to document a project, it has some drawbacks, such as not being part of the repository by default and restricting edits to collaborators. To address these issues and allow community editing, we have implemented an alternative approach.

We created a `wiki` folder within the repository, which contains all wiki pages. The GitHub action `stride-web-wiki.yml` deploys the `wiki` folder to the GitHub wiki.

The GitHub action `stride-web-wiki.yml` is triggered when:

1. A push is made to the `master` branch of the `stride-website` repository
1. The action is manually triggered

You can manually trigger the action by navigating to the **Actions** tab and clicking the **Run workflow** button.

This GitHub action only monitors changes to the `wiki` folder. Any modifications made to the `wiki` folder will be deployed to the GitHub wiki. Note that changes to the `wiki` folder will not trigger other GitHub actions.

We use the [Wiki Page Creator GitHub Action](https://github.com/marketplace/actions/wiki-page-creator-action) to deploy the `wiki` folder to the GitHub wiki.

**Note**: ⚠️ A GitHub personal access token (GH_PAT) is required for authentication. This token is stored as a secret in the repository settings.⚠️

**Recommendation**

1. **ASP.NET 4.8 with IIS** for Staging
1. **ASP.NET 4.8 with IIS** for Release