# Website Content

## Content Updates

If you want to contribute and update the website, please follow the instructions below.

Small updates can be done directly in the GitHub web interface, for bigger updates the local development environment is required, which is described in the [Installation](installation.md) section.

You can use any text editor to make changes. If you are using **Visual Studio**, you can open `Stride.Web.sln` solution file in the root of the repository and start making your updates directly from this IDE.

You are always welcome to create an issue to discuss your changes before you start working on them. 

### Small Updates

Creating an issue is not required for small updates, but it is recommended to let others know what you are working on. If you are not sure whether your update is small or not, please create an issue first.

#### What is a small update?

We can define small updates as changes to the content of the website:

- Update the content of an existing page
- Update the content of an existing blog post
- Add a [new page](#creating-new-page) or [blog post](#creating-new-post)
- Fix a typo
- Minor navigation or footer update
    - This will update all pages containing the navigation or footer

#### Steps

> [!NOTE]
> This guide assumes you are already familiar with updating files in GitHub.

1. Go to the [Stride Website GitHub](https://github.com/stride3d/stride-website) repository
1. Locate the file you wish to edit
1. Click the `Edit this file` (pencil) icon in the top right corner
1. If prompted, fork the repository by clicking `Fork this repository`
1. Make your changes to the file, then write a brief commit message describing the changes
1. Click on the `Propose changes` button
1. On the next screen, click the `Create pull request` button
1. Provide a title and description for your pull request, and click on `Create pull request` again
1. Wait for the review and merge

### Major Updates

[Creating an issue](https://github.com/stride3d/stride-website/issues) is **required** for major updates, so that others can comment on your changes and provide feedback.

Major updates can be defined as significant changes to the website's design, where it's beneficial to preview the impact of your changes to ensure they achieve the desired result. This may include:

- Adding new Eleventy shortcodes and Liquid includes
- Updating the Bootstrap library or other libraries
- Modifying layouts
- Revamping design elements

Start by setting up your local development environment, as described in the [Installation](installation.md) section. After making and testing your changes locally, you should create a pull request to merge your changes into the `master` branch.

When submitting a pull request, especially for substantial changes, it's recommended to include **screenshots** or a link to your local deployment. This approach helps maintainers visualize and assess your proposed changes more effectively. If you prefer to use GitHub infrastructure for your demonstrations, refer to our [Deployment to GitHub Pages guide](deployment-azure.md#deployment-to-github-pages) for instructions on deploying via GitHub Actions.

## Creating New Post

To create a new blog post, you can follow one of these methods:

1. Copy an existing post and update the front matter and content. This is the fastest way to get started with a new post
1. Alternatively, create a new file in the `posts` folder, ensuring that the file name follows the appropriate naming convention

Either method will allow you to create a new blog post, so choose the one that best suits your needs.

### Post Naming Convention

`YYYY-MM-DD-post-title.md`

Replace `YYYY-MM-DD` with the date of the post and `post-title` with the title of the post.

> [!IMPORTANT]
> **SEO Note:** Ensure the file title includes essential keywords related to your post's content. This is crucial as the file title dictates the URL of the post, which plays a significant role in search engine optimization (SEO).

### Post Front Matter

The file should start with the following front matter:

```yaml
---
title: 'Post title'
# author's id, defined in the _data/site.json
author: vaclav
# optional, if not set, the default tags will be used, tags are merged with the default tags
# you can find all tags in the live site in the /tags/ page
tags: ['Announcement']
# optional, if not set, the default image will be used
# use webp format for best performance, images should be located in the /images/blog/YYYY-MM-DD-post-title folder
image: /images/blog/2023-04/new-home-page.webp
# optional, if true, the post will be featured in the popular section
pupular: true
# permlink is automatically generated based on the file name, but you can override it here
permalink: /blog/2023-04/my-custom-link/ # this is a custom link
---
```

The same example, without the comments:

```yaml
---
title: 'Post title'
author: vaclav
tags: ['Announcement']
image: /images/blog/2023-04/new-home-page.webp
pupular: true
permalink: /blog/2023-04/my-custom-link/
---

```

Default front matter, which is used for all posts, can be found in the `posts/posts.json` file.

```json
{
  "layout": "post",
  "eleventyComputed": {
    "year": "{{ page.date | date: '%Y' }}",
    "modified": "Last Modified"
  },
  "permalink": "/blog/{{ page.fileSlug }}/",
  "tags": [ "blog", "search" ]
}
```

#### Image

The image specified in the front matter serves dual purposes: It appears in the blog listing at [Stride Blog](https://www.stride3d.net/blog/) and is used as the **og:image** meta tag for social sharing. Here are three ways to specify this image:

- Not including an image in the front matter will use the default image
- Including an image in the front matter will override the default image. The size of the image should be minimum **1200 x 600px** e.g. `image: /images/blog/2023-04/new-home-page.webp`
- External image URL e.g. `image: https://i.imgur.com/7GVEiSR.jpg`
- If you are looking for Stride specific logo's or icons, have a look at the [Figma](figma.md) options

### Post Content

Check the previous posts for an example of the post content. Ideally you should use the same format as the previous posts to preserve the consistency of the blog.

You can use shortcodes and includes which are described in the [Shortcodes and Includes](#shortcodes-and-includes) section.

You can also use majority of the Bootstrap classes in your content if you combine HTML and Markdown.

> [!TIP]
> We have a folder called `_drafts` where you can store your drafts. These files are not published. Once you are ready to publish your post, you can move it to the `posts` folder.

### Excerpt

The excerpt is the first paragraph of the post. Separated from the rest of the content by three dashes `---`. The excerpt is used in the blog post list, meta description and in the RSS feed.

**Example**

```yaml
---
title: 'Stride 4.1 is Now Live'
author: aggror
tags: ['Tutorials','Release', 'Graphics']
---

Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10. That means you can now head to the download page and start developing your games using the latest .NET technologies.

---

Additional content goes here...

```

## Creating New Page

To create a new page, create a new file in the root folder or create a new folder and add an `index.md` file to it. You can use any templating language supported by Eleventy. We use Markup, HTML, Nunjucks.

### Page Front Matter

The page front matter works the same way as the post front matter. The only difference is that the `layout` property is required.

**Example:** file `features.html`

```yaml
---
layout: default
title: Features
description: 'Stride supports an extensive list of features: Scene Editor, Physically Based Rendering, Particles, UI Editor, Prefabs, DX12 & Vulkan, C# Scripting, etc...'
# permlink is automatically generated based on the file name, but you can override it here
permalink: /my-features/ # otherwise it would be /features/
---
```

## Shortcodes and Includes

To enhance the quality and functionality of the content, both pages and posts can incorporate [shortcodes and includes](content-shortcodes-and-includes.md). These tools offer a versatile way to enrich the presentation and interactivity of the content on the Stride website.

## Web Assets

Our main web assets are:

- `css/custom-bootstrap.scss` - Slightly modified Bootstrap theme
  - Some Bootstrap variables are overridden
  - Some Bootstrap parts are disabled so they don't bloat the website (e.g. button-group, breadcrumb, ..)
- `css/styles.scss` - Main stylesheet
  - Styles also Dark Mode
- `css/syntax-highlighting.scss` - Imported prismjs styling, Light and Dark Mode
- `assets/search.liquid` - Script for search
- `assets/site.liquid` - Not used
- `assets/theme-selector.liquid` - Script for Ligth and Dark Mode selection
- `search.liquid` - Renders as `search.json` contains search meta


## Styling

### Bootstrap Customization

Our website uses the [Bootstrap](https://getbootstrap.com/) framework, version **5.3**.

> [!IMPORTANT]
> Prioritize the use of Bootstrap's inherent styling before integrating any custom styles. You should be familiar with [Bootstrap Utilities](https://getbootstrap.com/docs/5.3/utilities/api/) which help you to achieve most of the styling requirements.

### CSS Guidelines

Our goal is to write as little CSS as possible to ensure the website remains lightweight. We maximize the utilization of the Bootstrap framework to achieve this. 

Further, we are using also [FontAwesome](https://fontawesome.com/) free icons. The icons are loaded in the `src/_includes/css/main.css` file.

## Submitting your Changes

Assuming you have made all necessary changes and tested them on the development server, you can submit a pull request to the `master` branch. The pull request will be reviewed and merged by the website maintainers.

Steps to contribute your updates:

1. Commit your changes to your forked repository:
   - Commit the changes with a meaningful message
   - Push the changes to your forked repository
1. Create a pull request to the main repository:
   - You can create a pull request from your forked repository by navigating to Pull requests page and click **New pull request** button
   - Select the **master** branch as the base branch and your branch as the compare branch
   - Click **Create pull request** button

Once your pull request has been reviewed and approved, your changes will be merged into the main repository and deployed to the website.