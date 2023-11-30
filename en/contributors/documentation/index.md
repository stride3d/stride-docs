# Contributing to documentation

This documentation serves as a comprehensive guide to help you navigate and contribute to the **Stride Docs** website.

If you're looking to make minor changes, such as adding or updating a manual, tutorial or page, or fixing a typo, feel free to jump straight to the [Content Updates](content.md#content-updates) section.

For more extensive updates 🤯🤦‍♂️ or for a deeper understanding of the docs website project, we recommend exploring all the sections provided. Happy browsing and contributing!

Here are the technologies we use to build our website:

- [docfx](https://dotnet.github.io/docfx/index.html) (static site generator)
  - A specific version of docfx is utilized in GitHub Actions, one that has been thoroughly tested. Should you wish to upgrade this version, please ensure it is properly tested before implementation.
- Markdown
- [Mustache](https://mustache.github.io/) template engine (docfx dropped Liquid template engine support)
- Bootstrap
- Emojis (because why not? 😎)
- HTML, JavaScript, CSS, JSON
- PowerShell scripts
- GitHub Actions (CI/CD)
  - Our [GitHub Actions](https://github.com/stride3d/stride-docs/tree/master/.github/workflows) are already configured for deploying to both staging and release environments.
  - For personal testing or demonstration purposes, you may need to set up your own GitHub Actions. This is especially useful for showcasing proposed changes to maintainers for their approval. For guidance on this, refer to our [Deployment to GitHub Pages guide](deployment-azure.md#deployment-to-github-pages).

## Dependencies

Various Stride systems rely on content fetched and processed from either the Stride website or the Stride Docs website. It's crucial to ensure that the following links remain active and accessible. Please refrain from removing or altering these links unless the dependent systems have been updated accordingly to accommodate any changes.

1. https://doc.stride3d.net/latest/en/index.json
   - This JSON file is crucial for integrating the Stride Docs search functionality with the Stride Website. It ensures that search results are comprehensive, including relevant information from both the Stride website and Stride Docs.
1. https://doc.stride3d.net/latest/en/ReleaseNotes/ReleaseNotes.md
   - The **Stride Launcher** utilizes this file when you click a release notes button.