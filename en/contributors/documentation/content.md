# Documentation content

## Content Updates

If you want to contribute and update the website, please follow the instructions below.

Small updates can be done directly in the GitHub web interface, for bigger updates the local development environment is required, which is described in the [Installation](installation.md) section.

You can use any text editor to make changes. If you are using **Visual Studio**, you can open `Stride.Docs.sln` solution file in the root of the repository and start making your updates directly from this IDE.

You are always welcome to [create an issue](https://github.com/stride3d/stride-docs/issues) to discuss your changes before you start working on them. 

### Small Updates

Creating an issue is not required for small updates, but it is recommended to let others know what you are working on. If you are not sure whether your update is small or not, please create an issue first.

#### What is a small update?

We can define small updates as changes to the content of the website:

- Update the content of an existing page (manual, tutorial or release note, ..)
- Add a [new manual](#creating-new-manual-page) or [tutorial](#creating-new-tutorial-page) or any new content
- Fix a typo

#### Steps

> [!NOTE]
> This guide assumes that you are already familiar with updating files on GitHub.

For the following instructions, use the [Stride Docs GitHub repository](https://github.com/stride3d/stride-docs):

[!INCLUDE [small-updates](../../includes/small-update-instructions.md)]

### Major Updates

[Creating an issue](https://github.com/stride3d/stride-docs/issues) is **required** for major updates, so that others can comment on your changes and provide feedback.

Major updates can be defined as significant changes to the website's design, where it's beneficial to preview the impact of your changes to ensure they achieve the desired result. This may include:

- Update Docfx version
- Modifying layouts
- Revamping design elements

Start by setting up your local development environment, as described in the [Installation](installation.md) section. After making and testing your changes locally, you should create a pull request to merge your changes into the `master` branch.

When submitting a pull request, especially for substantial changes, it's recommended to include **screenshots** or a link to your local deployment. This approach helps maintainers visualize and assess your proposed changes more effectively. If you prefer to use GitHub infrastructure for your demonstrations, refer to our [Deployment to GitHub Pages guide](deployment-azure.md#deployment-to-github-pages) for instructions on deploying via GitHub Actions.

## Manual

These pages contain information about how to use Stride, an open-source C# game engine.

> [!IMPORTANT]
> **SEO Note:** Ensure that the file name includes essential keywords related to the content of the article. This is crucial because the file name dictates the URL of the content page, which plays a significant role in search engine optimization (SEO).

### Creating New Manual Page

1. Create a new file in the `manual` folder, in the already existing folders (e.g. animation, audio, ..) or create a new folder in the `manual` folder.
   - If you created a new folder, make sue that you create also `index.md` file in this folder.
1. Use any existing page as a template for the new page.
1. Update `toc.yml` (or `toc.md`) file in the `manual` folder to include the new page or folder. The `toc.yml` file contains the table of contents for the manual pages, which is displayed on the left side of the manual pages. These pages are also included in the optionally generated PDF file.

### Naming Convention

Observe existing pages and folders for the naming convention.

### Media

You can observe that existing folders might have a `media` folder. This folder contains images and videos used in the manual pages. You can use this folder or create a new one in your folder. If possible make sure that images are `.webp` format and videos are `.mp4` format.

## Tutorial

These pages contain tutorials on how to use Stride, an open-source C# game engine.

### Creating New Tutorial Page

1. Create a new tutorial folder in the `tutorial` folder.
1. Create a new `index.md` file in this folder. Observe existing tutorials for the content of this file.
1. Create markdown files for each step of the tutorial. Observe existing tutorials structure for the content of these files.
1. Update `toc.yml` file in the `tutorial` folder to include the new tutorial folder. The `toc.yml` file contains the table of contents for the tutorial pages, which is displayed on the left side of the tutorial pages.

### Naming Convention

Observe existing pages and folders for the naming convention.

### Media

You can observe that existing tutorials have a `media` folder. This folder contains images. If possible make sure that images are `.webp` format. The videos should be uploaded to YouTube and embedded in the tutorial pages.

## Other Sections

In addition to the Manual and Tutorial sections mentioned above, the same principles apply to both existing and new sections. Follow the established formats and conventions to ensure consistency and clarity throughout the documentation.

## Shortcodes and Includes

Docfx supports additional markdown syntax to enrich content. These syntaxes are specific to Docfx and **may not render** correctly on other platforms, like GitHub.

For more information, read the Docfx documentation on [markdown, shortcodes and includes](https://dotnet.github.io/docfx/docs/markdown.html?tabs=linux%2Cdotnet). Some commonly used features include:

- **Alert**: These are block quotes that render with distinct colors and icons, highlighting the importance or nature of the content
- **Video**: Embed video content directly into your documentation
- **Image**: Insert images to enhance the visual aspect of the documentation
- **Math Expressions**: Integrate mathematical notations and expressions
- **Mermaid Diagrams**: Embed [mermaid diagrams](https://mermaid.js.org/) for flowcharts and other graphical representations
- **Include Markdown Files**: Include content from other markdown files seamlessly
- **Code Snippet**: Insert code snippets for better clarity and demonstration
- **Tabs**: Organize content into tabbed sections for improved readability

## Web Assets

Our main web assets include:

- `template/partials/affix.tmpl.partial` - Currently not functioning
- `template/partials/footer.tmpl.partial` - Currently not functioning
- `template/public/main.css` - Contains minor Bootstrap CSS overrides
- `template/public/main.js`:
   - Sets the top navigation icons, such as GitHub, Discord, Twitter
   - Injects the Stride Docs version selection above the filter in the side navigation
   - Injects the Stride Docs language selection into the top navigation
- `docfx.json` - The HTML footer is included in the `_appFooter` section

## Styling

### Bootstrap Customization

We utilize the `modern` template provided by Docfx, which employs the [Bootstrap](https://getbootstrap.com/) framework, version **5.3**. This includes the dark theme, enabled by Docfx.

> [!IMPORTANT]
> Prioritize the use of Bootstrap's inherent styling before integrating any custom styles. You should be familiar with [Bootstrap Utilities](https://getbootstrap.com/docs/5.3/utilities/api/) which help you to achieve most of the styling requirements.

### CSS Guidelines

Our goal is to write minimal CSS code to keep the website lightweight, leveraging the Bootstrap framework to the fullest extent possible.

## Submitting your Changes

[!INCLUDE [submitting-changes](../../includes/submitting-changes.md)]