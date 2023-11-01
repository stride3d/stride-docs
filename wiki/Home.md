Welcome to the Stride Docs Wiki.

This wiki serves as a comprehensive guide to help you navigate and contribute to the **Stride Docs** website.

If you're looking to make minor changes, such as adding or updating a manual, tutorial or page, or fixing a typo, feel free to jump straight to the [Content Updates](Content#content-updates) section.

For more extensive updates 🤯🤦‍♂️ or for a deeper understanding of the docs website project, we recommend exploring all the sections provided. Happy browsing and contributing!

Here are the technologies we use to build our website:

- [docfx](https://dotnet.github.io/docfx/index.html) (static site generator)
- Markdown
- [Mustache](https://mustache.github.io/) template engine (docfx dropped Liquid template engine support)
- Bootstrap
- Emojis (because why not? 😎)
- GitHub Wiki
- HTML, JavaScript, CSS, JSON
- PowerShell scripts
- GitHub Actions (CI/CD) - Don't worry, this is already set up, you don't need to worry about it.

## Table of Contents

- [Understanding the Stride Documentation Generation Pipeline](Understanding-the-Stride-Documentation-Generation-Pipeline)
  - [Introduction](Understanding-the-Stride-Documentation-Generation-Pipeline#introduction)
  - [A Simplified Overview](Understanding-the-Stride-Documentation-Generation-Pipeline#a-simplified-overview)
  - [Docs Build Workflow](Understanding-the-Stride-Documentation-Generation-Pipeline#docs-build-workflow)
  - [Workflow Diagram](Understanding-the-Stride-Documentation-Generation-Pipeline#workflow-diagram)
- [Installation](installation.md)
  - [Prerequisites](Installation#prerequisites)
  - [Installation Steps](Installation#installation-steps)
  - [Running the Development Server](Installation#running-the-development-server)
- [Content](Content)
  - [Content Updates](Content#content-updates)
    - [Small Updates](Content#small-updates)
    - [Major Updates](Content#major-updates)
    - [Updating Wiki](Content#updating-wiki)
  - [Manual](Content#manual)
    - [Creating New Page](Content#creating-new-manual-page)
  - [Tutorial](Content#tutorial)
    - [Creating New Tutorial](Content#creating-new-tutorial-page)
  - [Creating New Post](Content#creating-new-post)
    - [Post Naming Convention](Content#post-naming-convention)
    - [Post Front Matter](Content#post-front-matter)
    - [Post Content](Content#post-content)
    - [Excerpt](Content#excerpt)
  - [Creating New Page](Content#creating-new-page)
    - [Page Front Matter](Content#page-front-matter)
  - [Shortcodes and Includes](Content#shortcodes-and-includes)
    - [Alert](Content#alert)
    - [Alert Banner](Content#alert-banner)
    - [Image](Content#image)
    - [Video](Content#video)
  - [Web Assets](Content#web-assets)
  - [Styling](Content#styling)
    - [Bootstrap Customization](Content#bootstrap-customization)
    - [CSS Guidelines](Content#css-guidlines)
  - [Submitting your Changes](Content#submitting-your-changes)
- [New Language](New-Language)
   - [Adding a New Language](New-Language#adding-a-new-language)
- [Roadmap](Roadmap)
- [DocFX](DocFX)
  - [Packages and Dependencies](Eleventy#packages-and-dependencies)
  - [Configuration](Eleventy#configuration)
  - [Global Data](Eleventy#global-data)
  - [Folder Structure](Eleventy#folder-structure)
  - [Layouts](Eleventy#layouts)
  - [Includes](Eleventy#includes)
  - [Advanced Topics](Eleventy#advanced-topics)
    - [Creating Custom Shortcodes and Includes](Eleventy#creating-custom-shortcodes-and-includes)
- [Deployment](Deployment)
  - [GitHub Pages](Deployment#github-pages)
  - [Azure Web Apps](Deployment#azure-web-apps)
  - [Deployment To Wiki](Deployment#deployment-to-wiki) 
- [Troubleshooting and FAQ](Troubleshooting-and-FAQ)
  - [Known Issues](Troubleshooting-and-FAQ#known-issues)
  - [Common Issues and Solutions](Troubleshooting-and-FAQ#common-issues-and-solutions)
  - [Frequently Asked Questions](Troubleshooting-and-FAQ#frequently-asked-questions)