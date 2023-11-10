# Website deployment
We tested five different deployment methods (GitHub Pages, Azure Web App Windows/Linux IIS/Kestrel, Azure Static Web Apps) and chose to continue with the existing Azure Web Apps IIS ASP.NET 4.8 infrastructure.

- [Azure Web Apps](#azure-web-apps)
  - [Deploying with .NET Framework](#deploying-with-net-framework)
- [Deployment To Wiki](#deployment-to-wiki)
- [Deployment Tests](#deployment-tests)

# Azure Web Apps

## Deploying with .NET Framework

The .NET Framework uses IIS to host the website, which serves any static files.

The [web.config](https://github.com/stride3d/stride-website/blob/master/web.config) file is used to configure IIS, including:

- Mime types for static files
- Redirects
- Gzip compression
- Static file caching
- Custom Headers
- Custom 404
- Caching

The GitHub action [stride-website-release-azure.yml](https://github.com/stride3d/stride-website/blob/master/.github/workflows/stride-website-release-azure.yml) builds the website and deploys it to Azure Web Apps.

[Step-by-Step Deployment Guide for Azure Web Apps (Windows) with IIS and Stride Website](deployment-azure.md).

# Deployment To Wiki

While the GitHub wiki offers a convenient way to document a project, it has some drawbacks, such as not being part of the repository by default and restricting edits to collaborators. To address these issues and allow community editing, we have implemented an alternative approach.

We created a `wiki` folder within the repository, which contains all wiki pages. The GitHub action `stride-web-wiki.yml` deploys the `wiki` folder to the GitHub wiki.

The GitHub action [stride-website-wiki.yml](https://github.com/stride3d/stride-website/blob/master/.github/workflows/stride-website-wiki.yml) is triggered when:

1. A push/merge is made to the `master` branch of the `stride-website` repository
1. The action is manually triggered

You can manually trigger the action by navigating to the **Actions** tab and clicking the **Run workflow** button.

This GitHub action only monitors changes to the `wiki` folder. Any modifications made to the `wiki` folder will be deployed to the GitHub wiki. Note that changes to the `wiki` folder will not trigger other GitHub actions.

We use the [Wiki Page Creator GitHub Action](https://github.com/marketplace/actions/wiki-page-creator-action) to deploy the `wiki` folder to the GitHub wiki.

**Note**: ⚠️ A GitHub personal access fine-grained token (GH_PAT) is required for authentication. This token is stored as a secret in the repository settings.⚠️

# Deployment Tests

Tests were discussed here https://github.com/stride3d/stride-website/issues/71

The basic **load tests** we conducted by measuring the `/blog/` page for different deployment scenarios. We only performed 1-2 tests, as this process is time-consuming and likely unnecessary:

- Hardware for Azure App Service: Basic B1, 1 CPU, 1.75 Memory, CPU type unknown, most likely different for Windows and Linux
- Hardware for GitHub Pages: Unknown
- Test was running 60 seconds, 2 threads

**Results**

1. GitHup Pages - **737 req/sec**
   - We have no control over various aspects, including security headers, redirects, and caching.
1. ASP.NET 4.8 with IIS - **186 req/sec**
   - We have full control of everything through `web.config`, including security headers, redirects, caching, ..
1. SWA (Static Web App - Paid) - **160 req/sec**
   - No familiar with but should be fair enough control through `staticwebapp.config.json`
1. .NET 7 (Windows) with IIS (in-process) - **127 req/sec**
   - We have full control of everything through `web.config`, including security headers, redirects, caching, ..
1. .NET 7 (Windows) with Kestrel (out-of-process) - **88 req/sec**
   - We have full control of everything through ASP.NET Core middleware, including security headers, redirects, caching, .. 
 1. .NET 7 (Linux) with Kestrel - ***38 req/sec**
    - We have full control of everything through ASP.NET Core middleware, including security headers, redirects, caching, .. 

**\*** I believe that Linux was slow due to the Azure App Service configuration, where Linux performance is purposely lower but also cheaper.

**Recommendation**

1. **ASP.NET 4.8 with IIS** for Staging
1. **ASP.NET 4.8 with IIS** for Release