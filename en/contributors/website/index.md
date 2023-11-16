# Contributing to the Stride website
This documentation serves as a comprehensive guide to help you navigate and contribute to the **Stride website**.

If you're looking to make minor changes, such as adding or updating a post or page, or fixing a typo, you can jump straight to the [Content Updates](content.md#content-updates) section.

For more extensive updates 🤯🤦‍♂️ and a deeper understanding of the website project, we recommend exploring all the sections provided. Happy browsing and contributing!

Technologies we use to build our website:

- [Eleventy](https://www.11ty.dev/docs/) (static site generator)
- Markdown
- Mainly [Liquid](https://shopify.github.io/liquid/) and a bit Nunjucks (template engines)
- Bootstrap
- Font Awesome
- HTML, JavaScript, CSS, SCSS, and JSON
- GitHub Actions (CI/CD) - Don't worry, this is already set up, you don't need to worry about it.

## Important Links

- https://www.stride3d.net/legal/privacy-policy/
    - This links is used in the Stride Installer
- https://www.stride3d.net/feed.xml
    - This feed is loaded in the Stride Launcher

## Major Version Release Instructions

1. Create a release blog post
1. Update `_data\site.json` with these settings, which are used in multiple places on the website:
   - `version`: Increase the version number
   - `download-version`: Update the version number for downloads
   - `csharp-version`: Update to the current C# version being used
   - `dotnet-version`: Update to the current .NET version being used

## Table of Contents

- [Installation](installation.md)
    - [Prerequisites](installation.md#prerequisites)
    - [Installation Steps](installation.md#installation-steps)
    - [Running the Development Server](installation.md#running-the-development-server)
    - [ASP.NET Core](installation.md#aspnet-core)
- [Content](content.md)
    - [Content Updates](content.md#content-updates)
        - [Small Updates](content.md#small-updates)
        - [Major Updates](content.md#major-updates)
    - [Creating New Post](content.md#creating-new-post)
        - [Post Naming Convention](content.md#post-naming-convention)
        - [Post Front Matter](content.md#post-front-matter)
        - [Post Content](content.md#post-content)
        - [Excerpt](content.md#excerpt)
    - [Creating New Page](content.md#creating-new-page)
        - [Page Front Matter](content.md#page-front-matter)
    - [Shortcodes and Includes](content.md#shortcodes-and-includes)
        - [Alert](content.md#alert)
        - [Alert Banner](content.md#alert-banner)
        - [Image](content.md#image)
        - [Video](content.md#video)
    - [Web Assets](content.md#web-assets)
    - [Styling](content.md#styling)
        - [Bootstrap Customization](content.md#bootstrap-customization)
        - [CSS Guidelines](content.md#css-guidelines)
    - [Submitting your Changes](content.md#submitting-your-changes)
- [Roadmap](roadmap.md)
- [Eleventy](eleventy.md)
    - [Packages and Dependencies](eleventy.md#packages-and-dependencies)
    - [Configuration](eleventy.md#configuration)
    - [Global Data](eleventy.md#global-data)
    - [Folder Structure](eleventy.md#folder-structure)
    - [Layouts](eleventy.md#layouts)
    - [Includes](eleventy.md#includes)
    - [Advanced Topics](eleventy.md#advanced-topics)
        - [Creating Custom Shortcodes and Includes](eleventy.md#creating-custom-shortcodes-and-includes)
- [Deployment](deployment.md)
    - [Azure Web Apps](deployment.md#azure-web-apps)
        - [Deploying with .NET Framework](deployment.md#deploying-with-net-framework)
    - [Deployment To Wiki](deployment.md#deployment-to-wiki)
- [Troubleshooting and FAQ](troubleshooting-and-faq.md)
    - [Known Issues](troubleshooting-and-faq.md#known-issues)
    - [Common Issues and Solutions](troubleshooting-and-faq.md#common-issues-and-solutions)
    - [Frequently Asked Questions](troubleshooting-and-faq.md#frequently-asked-questions)