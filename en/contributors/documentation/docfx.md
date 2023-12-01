# Docfx

[Docfx](https://dotnet.github.io/docfx/index.html) is a static site generator that uses C# as its templating language. It is an exceptionally powerful tool, offering immense flexibility and customization options for creating a documentation website. Moreover, Docfx is user-friendly and easy to learn. This section covers the basics of Docfx configuration for the Stride Docs website, while the creation and updating of content are detailed in our [Content](content.md) section.

After reviewing various static site generator options, we decided to continue using Docfx, particularly in light of the release of the new `modern` Docfx template. This template leverages Bootstrap 5.3 and has recently introduced a dark theme feature.

## Packages and Dependencies

Currently, we are not utilizing any additional packages.

## Configuration

The configuration for Docfx is located in the `en\docfx.json` file. This file contains all the settings necessary for the Docfx build process.

**What do you find in this file?**

- plugins configuration - All the plugins we use
- pass through files - Files that are copied to the output folder without any processing
- custom collections - Custom collections used in the templates like `tagList` and `yearList`
- filters - Custom filters used in the templates
- custom shortcodes - Custom [shortcodes](content.md#shortcodes-and-includes) used in the templates, pages or blog posts.

The file is well-commented and should be self-explanatory. If you need to add a new configuration, please follow the existing structure and include a comment to explain the new configuration.

## Global Data

Global data is located in the `/_data` folder. It contains all the global data that is accessible in all the templates. Currently, we have these JSON files:

- `site.json` - Contains all the global data for the website, used in the templates and shortcodes.
- `features.json` - Contains all the data for the features page and its features sections.
- `sponsors.json` - Contains sponsor information used in multiple places on the website.

Our `site.json` file contains these main properties, with only some listed below:

- `dark-mode` - Dark mode toggle `true|false`
- `alert-banner` - Global banner below navigation `true|false`
- `docs-search` - Includes docs website content in the search `true|false`
- `links` - Contains all the main links used across the website (social media, docs, GitHub, etc.)
- `authors` - Contains all the authors used in the blog posts
- repeated data - like `csharp-version`, `dotnet-version`, `download-version` which are used in multiple places on the website and are updated with every release

## Folder Structure

The folder structure is crucial for Eleventy, as it determines the output of the build process. The folder structure is organized as follows:

**Folders**

- `/_data` - Global data
- `/_drafts` - Draft blog posts (excluded from the build process)
- `/_includes` - Reusable code snippets that can be included in multiple pages
- `/_layouts` -  Main layout pages (`container`, `page`, `post`) using the primary layout page `default`
- `/_site` - Output build folder (excluded in `.gitignore` and used for deployment) 
- `/assets` - Additional assets, such as scripts
- `/blog` - Blog content page
- `/css` - Website stylesheets
- `/files` - Stride installer files
- `/images` - Images and MP4 files used on the website
- `/legal` - Content page
- `/posts` - Blog posts
- `/posts/2014-2021` - Old blog posts which are merged to the same output folder as `/posts`
  - this folder is only for convenience to easily access new posts

### Files

- `/posts/posts.json` - Blog post defaults so they don't have to be repeated in the front matter
- `*.html` - HTML content pages
- `*.liquid` - Liquid content pages
- `*.md` - Markdown content pages
- `*.njk` - Nunjucks content pages
- `.eleventy.js` - Eleventy configuration file
- `.eleventyignore` - Lists files and folders not to be processed by Eleventy
- `package.json` - Eleventy project metadata used by `npm`

### Non Eleventy files

- `.nojekyll` - Special file for GitHub Pages
- `CNAME` - Custom domain for GitHub Pages
- `appsettings.json` - ASP.NET Core configuration file
- `appsettings.Development.json` - ASP.NET Core configuration file
- `Program.cs` - ASP.NET Core startup file
- `Stride.Web.csproj` - ASP.NET Core project file
- `Stride.Web.sln` - ASP.NET Core solution file
- `Stride.Web.csproj.user` - ASP.NET Core project file
- `web.config` - Configuration file for IIS deployment
- `web.Release.config` - Configuration file for Windows ASP.NET Core deployment

> [!NOTE]
> This project includes Visual Studio solution and files so you can edit the files from the Visual Studio project.

## Layouts

All the layouts are located in the `/_layouts` folder. The `default` layout is the main layout page and is used by all the other layouts. 

- `default` - Main layout page
- `container` - Used by some pages
- `page` - Used by most of the pages
- `post` - Used by blog posts

## Includes

All the includes are located in the `/_includes` folder. The includes are reusable code snippets that can be included in multiple pages.

Some includes are used solely by the layouts, while others are used by the content pages.

## Advanced Topics

### Creating Custom Shortcodes and Includes

If you need to create a custom shortcode or include, please follow the existing structure and [include a comment](content.md#shortcodes-and-includes) to explain the new shortcode or include.

The shortcodes are defined in the `.eleventy.js` file, while the includes are located in the `/_includes` folder.

You can explore the existing shortcodes and includes to get a better understanding of how they work and how to create new ones.

### Performance Optimization

ToDo: Remove this section if not needed