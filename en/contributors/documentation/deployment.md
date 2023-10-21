# Deployment
We tested five different deployment methods and chose Azure Web Apps IIS ASP.NET 4.8.

- [GitHub Pages](#github-pages)
- [Azure Web Apps](#azure-web-apps)
  - [Deploying with .NET Framework](#deploying-with-net-framework)

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

**Recommendation**

1. **ASP.NET 4.8 with IIS** for Staging
2. **ASP.NET 4.8 with IIS** for Release