# DocFX
[docfx](https://www.11ty.dev/) is a static site generator that uses JavaScript as its templating language. It is a very powerful tool that allows us to create a website with a lot of flexibility and customization. It is also very easy to use and learn. This section will cover the basics of Eleventy configuration on the Stride website. Creating and updating the content is described in our [Content](content.md) section.

We used to use **Jekyll** as our static site generator, but we decided to switch to Eleventy because of its flexibility and ease of use. We also wanted to use a tool that is more widely used and supported, which is why we decided to switch to Eleventy.

# Table of Contents
- [Packages and Dependencies](#packages-and-dependencies)
- [Configuration](#configuration)
- [Global Data](#global-data)
- [Folder Structure](#folder-structure)
- [Layouts](#layouts)
- [Includes](#includes)
- [Advanced Topics](#advanced-topics)
  - [Creating Custom Shortcodes and Includes](#creating-custom-shortcodes-and-includes)
  
# Packages and Dependencies
Eleventy is a **Node.js** application. Please follow our [installation](installation.md) guide to install Node.js and all the required dependencies.

Packages we currently use:

- Dev Dependencies
  - `@11ty/eleventy` v2.0 - Main package for the static site generator
  - `@11ty/eleventy-plugin-rss` - RSS feed plugin
  - `@11ty/eleventy-plugin-syntaxhighlight` - Syntax highlighting plugin (dark and light theme in `/css/syntax-highlighting.scss`)
- Dependencies
  - `@11ty/eleventy-fetch` - Fetch plugin
  - `@fortawesome/fontawesome-free` - Font Awesome with a variety of awesome icons 😃🤩
  - `bootstrap` - Bootstrap 5.3
  - `lunr` - Lunr search plugin that consumes local `search.json (/search.liquid)` and remote `index.json` from the docs website; the script is in `/assets/scripts/search.liquid`
  - `markdown-it-anchor` - Anchor plugin for markdown-it
  - `markdown-it-table-of-contents` - Table of contents plugin for markdown-it, used mainly in blog posts as `[[TOC]]`
  - `sass` - Sass compiler for our `/css/*.scss` files

# Configuration
The Eleventy configuration is located in the `.eleventy.js` file at the root of the project. This file contains all the configuration settings for the Eleventy build process. As it is a JavaScript file, you can utilize all JavaScript features and syntax within it.

**What do you find in this file?**

- plugins configuration - All the plugins we use
- pass through files - Files that are copied to the output folder without any processing
- custom collections - Custom collections used in the templates like `tagList` and `yearList`
- filters - Custom filters used in the templates
- custom shortcodes - Custom [shortcodes](content.md#shortcodes-and-includes) used in the templates, pages or blog posts.

The file is well-commented and should be self-explanatory. If you need to add a new configuration, please follow the existing structure and include a comment to explain the new configuration.

# Global Data

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

# Folder Structure

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

**Files**

- `/posts/posts.json` - Blog post defaults so they don't have to be repeated in the front matter
- `*.html` - HTML content pages
- `*.liquid` - Liquid content pages
- `*.md` - Markdown content pages
- `*.njk` - Nunjucks content pages
- `.eleventy.js` - Eleventy configuration file
- `.eleventyignore` - Lists files and folders not to be processed by Eleventy
- `package.json` - Eleventy project metadata used by `npm`

**Non Eleventy files:**

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


**Note:** This project includes ASP.NET Core solution and files, as they can be used seamlessly with Eleventy. Read more about this in our [Installation](installation.md#asp-net-core.md) section.


# Layouts

All the layouts are located in the `/_layouts` folder. The `default` layout is the main layout page and is used by all the other layouts. 

- `default` - Main layout page
- `container` - Used by some pages
- `page` - Used by most of the pages
- `post` - Used by blog posts

# Includes

All the includes are located in the `/_includes` folder. The includes are reusable code snippets that can be included in multiple pages.

Some includes are used solely by the layouts, while others are used by the content pages.

# Advanced Topics

## Creating Custom Shortcodes and Includes

If you need to create a custom shortcode or include, please follow the existing structure and [include a comment](content.md#shortcodes-and-includes) to explain the new shortcode or include.

The shortcodes are defined in the `.eleventy.js` file, while the includes are located in the `/_includes` folder.

You can explore the existing shortcodes and includes to get a better understanding of how they work and how to create new ones.

## Performance Optimization

ToDo: Remove this section if not needed
