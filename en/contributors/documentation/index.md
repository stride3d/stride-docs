# Contributing to documentation
This documentation serves as a comprehensive guide to help you navigate and contribute to the **Stride Docs** website.

If you're looking to make minor changes, such as adding or updating a manual, tutorial or page, or fixing a typo, feel free to jump straight to the [Content Updates](content.md#content-updates) section.

For more extensive updates 🤯🤦‍♂️ or for a deeper understanding of the docs website project, we recommend exploring all the sections provided. Happy browsing and contributing!

Here are the technologies we use to build our website:

- [docfx](https://dotnet.github.io/docfx/index.html) (static site generator)
- Markdown
- [Mustache](https://mustache.github.io/) template engine (docfx dropped Liquid template engine support)
- Bootstrap
- Emojis (because why not? 😎)
- HTML, JavaScript, CSS, JSON
- PowerShell scripts
- GitHub Actions (CI/CD) - Don't worry, this is already set up, you don't need to worry about it.

## Table of Contents

- [Understanding the Stride Documentation Generation Pipeline](documentation-generation-pipeline.md)
    - [Introduction](documentation-generation-pipeline.md#introduction)
    - [A Simplified Overview](documentation-generation-pipeline.md#a-simplified-overview)
    - [Docs Build Workflow](documentation-generation-pipeline.md#docs-build-workflow)
    - [Workflow Diagram](documentation-generation-pipeline.md#workflow-diagram)
- [Installation](installation.md)
    - [Prerequisites](installation.md#prerequisites)
    - [Installation Steps](installation.md#installation-steps)
    - [Running the Development Server](installation.md#running-the-development-server)
- [Content Updates](content.md#content-updates)
    - [Small Updates](content.md#small-updates)
    - [Major Updates](content.md#major-updates)
    - [Manual](content.md#manual)
      - [Creating New Page](content.md#creating-new-manual-page)
    - [Tutorial](content.md#tutorial)
      - [Creating New Tutorial](content.md#creating-new-tutorial-page)
    - [Shortcodes and Includes](content.md#shortcodes-and-includes)
      - [Alert](content.md#alert)
      - [Video](content.md#video)
    - [Web Assets](content.md#web-assets)
    - [Styling](content.md#styling)
      - [Bootstrap Customization](content.md#bootstrap-customization)
      - [CSS Guidelines](content.md#css-guidelines)
    - [Submitting your Changes](content.md#submitting-your-changes)
- [New Language](new-language.md)
    - [Adding a New Language](new-language.md#adding-a-new-language)
- [Roadmap](roadmap.md)
- [DocFX](docfx.md)
    - [Packages and Dependencies](docfx.md#packages-and-dependencies)
    - [Configuration](docfx.md#configuration)
    - [Global Data](docfx.md#global-data)
    - [Folder Structure](docfx.md#folder-structure)
    - [Layouts](docfx.md#layouts)
    - [Includes](docfx.md#includes)
    - [Advanced Topics](docfx.md#advanced-topics)
        - [Creating Custom Shortcodes and Includes](docfx.md#creating-custom-shortcodes-and-includes)
- [Deployment](deployment.md)
    - [GitHub Pages](deployment.md#github-pages)
    - [Azure Web Apps](deployment.md#azure-web-apps)
- [Troubleshooting and FAQ](troubleshooting-and-faq.md)
    - [Known Issues](troubleshooting-and-faq.md#known-issues)
    - [Common Issues and Solutions](troubleshooting-and-faq.md#common-issues-and-solutions)
    - [Frequently Asked Questions](troubleshooting-and-faq.md#frequently-asked-questions)