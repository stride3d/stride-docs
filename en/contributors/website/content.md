# Website Content

- [Content Updates](#content-updates)
  - [Small Updates](#small-updates)
  - [Major Updates](#major-updates)
  - [Updating Wiki](#updating-wiki)
- [Creating New Post](#creating-new-post)
  - [Post Naming Convention](#post-naming-convention)
  - [Post Front Matter](#post-front-matter)
  - [Post Content](#post-content)
  - [Excerpt](#excerpt)
- [Creating New Page](#creating-new-page)
  - [Page Front Matter](#page-front-matter)
- [Shortcodes and Includes](#shortcodes-and-includes)
  - [Alert](#alert)
  - [Alert Banner](#alert-banner)
  - [Image](#image)
  - [Video](#video)
- [Web Assets](#web-assets)
- [Styling](#styling)
  - [Bootstrap Customization](#bootstrap-customization)
  - [CSS Guidelines](#css-guidelines)
- [Submitting your Changes](#submitting-your-changes)

# Content Updates

If you want to contribute and update the website, please follow the instructions below.

Small updates can be done directly in the GitHub web interface, for bigger updates the local development environment is required, which is described in the [Installation](Installation) section.

You can use any text editor to make changes. If you are using **Visual Studio**, you can open `Stride.Web.sln` solution file in the root of the repository and start making your updates directly from this IDE.

You are always welcome to create an issue to discuss your changes before you start working on them. 

## Small Updates

Creating an issue is not required for small updates, but it is recommended to let others know what you are working on. If you are not sure whether your update is small or not, please create an issue first.

### What is a small update?

We can define small updates as changes to the content of the website:

- Update the content of an existing page
- Update the content of an existing blog post
- Add a [new page](#creating-new-page) or [blog post](#creating-new-post)
- Fix a typo
- Minor navigation or footer update
    - This will update all pages containing the navigation or footer

### Steps

**Note:** This guide assumes you are already familiar with updating files in GitHub.

1. Go to the [Stride Website GitHub](https://github.com/stride3d/stride-website) repository
1. Locate the file you wish to edit
1. Click the `Edit this file` (pencil) icon in the top right corner
1. If prompted, fork the repository by clicking `Fork this repository`
1. Make your changes to the file, then write a brief commit message describing the changes
1. Click on the `Propose changes` button
1. On the next screen, click the `Create pull request` button
1. Provide a title and description for your pull request, and click on `Create pull request` again
1. Wait for the review and merge

## Major Updates

[Creating an issue](https://github.com/stride3d/stride-website/issues) is **required** for major updates, so that others can comment on your changes and provide feedback.

We can define bigger updates as changes to the design of the website, where you would like to see the impact of your changes beforehand to assess the desired result:

- Add new Eleventy shortcodes and Liquid includes
- Update Bootstrap library or other libraries
- Update layouts

You would start with the local development environment, which is described in the [Installation](Installation) section.

Then you would make your changes and test them locally. Once you are happy with the result, you can create a pull request to merge your changes into the `master` branch.

## Updating Wiki

While wiki pages can be updated directly in the GitHub web interface, this feature is restricted only to contributors who can edit the wiki directly. We have decided to move our wiki pages to a regular folder in this repository called [wiki](https://github.com/stride3d/stride-website/tree/master/wiki), allowing us to use the same process as we do for the website content. If any changes are made directly on the wiki pages, they will be overwritten by the next wiki deployment.

Wiki pages are deployed through a separate GitHub action, `stride-web-wiki.yml`, which is triggered by updates in the `wiki` folder or can be triggered manually. The `wiki` folder is ignored by the Eleventy build process, ensuring that the wiki pages are not deployed to the website. Additionally, any pushes to the `wiki` folder will not trigger the website deployment.

You can update the wiki pages as any other content pages, by following the steps in the [Small Updates](#small-updates) section.

⚠️**Important:** If you are updating any headers in the wiki pages, please make sure to update the *Table of Contents* at the top of the page, [Home](https://github.com/stride3d/stride-website/blob/master/wiki/Home.md) page and [_Sidebar.md](https://github.com/stride3d/stride-website/blob/master/wiki/_Sidebar.md). Also, you might need to search for all the links to the updated header and update them as well.

# Creating New Post

To create a new blog post, you can follow one of these methods:

1. Copy an existing post and update the front matter and content. This is the fastest way to get started with a new post
1. Alternatively, create a new file in the `posts` folder, ensuring that the file name follows the appropriate naming convention

Either method will allow you to create a new blog post, so choose the one that best suits your needs.

## Post Naming Convention

`YYYY-MM-DD-post-title.md`

Replace `YYYY-MM-DD` with the date of the post and `post-title` with the title of the post.

⚠️**Important SEO Note:** Ensure the file title includes essential keywords related to your post's content. This is crucial as the file title dictates the URL of the post, which plays a significant role in search engine optimization (SEO).

## Post Front Matter

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

### Image

The image specified in the front matter serves dual purposes: It appears in the blog listing at [Stride Blog](https://www.stride3d.net/blog/) and is used as the **og:image** meta tag for social sharing. Here are three ways to specify this image:

- Not including an image in the front matter will use the default image
- Including an image in the front matter will override the default image. The size of the image should be minimum **1200 x 600px** e.g. `image: /images/blog/2023-04/new-home-page.webp`
- External image URL e.g. `image: https://i.imgur.com/7GVEiSR.jpg`
- If you are looking for Stride specific logo's or icons, have a look at the [Figma](figma.md) options.

## Post Content

Check the previous posts for an example of the post content. Ideally you should use the same format as the previous posts to preserve the consistency of the blog.

You can use shortcodes and includes which are described in the [Shortcodes and Includes](#shortcodes-and-includes) section.

You can also use majority of the Bootstrap classes in your content if you combine HTML and Markdown.

💡**Tip:** We have a folder called `_drafts` where you can store your drafts. These files are not published. Once you are ready to publish your post, you can move it to the `posts` folder.

## Excerpt

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

# Creating New Page

To create a new page, create a new file in the root folder or create a new folder and add an `index.md` file to it. You can use any templating language supported by Eleventy. We use Markup, html, nunjacks.

## Page Front Matter

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

# Shortcodes and Includes

You can see examples here https://www.stride3d.net/blog/examples/.

## Alert

To add an alert, use the following include, where:

- `type` is one of the following: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Using these types will automatically include a relevant icon
- `icon` is a Font Awesome icon, which is optional. You can use any free icon, e.g., fa-check.
- `title` is the title of the alert

```liquid
# This will render as a green box without the icon
{% include _alert.html type:'success' icon:'' title:'No icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

# This will render as a green box with a check icon
{% include _alert.html type:'success' title:'No icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

# This will render as a green box with a custom icon
{% include _alert.html type:'success' icon:'fa-face-smile' title:'No icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}
```

## Alert Banner

A global alert banner can be used for promotional purposes. The banner can be activated in `site.json`.

```json
"alert-banner": true
```

The HTML can be updated in the `/_includes/alert-banner.html` file.

## Image

Add responsive images using shortcodes. Be sure to include a descriptive title, as it will improve your post's search engine visibility. Also, if possible, use the **webp** format for images, which can also be used for transparent images. This will improve the performance of your site.

To add a responsive image, use the following shortcode:

`{% img 'title' 'url' %}`

Replace `title` with a descriptive title for the image and `url` with the image URL. This shortcode renders as:

```html
<img alt="title" src="url" class="img-fluid mb-2" loading="lazy" data-src="url">
```

To add a responsive image with a clickable link that opens the image in full size, use the following shortcode:

`{% img-click 'title' 'url' %}`

Replace `title` with a descriptive title for the image and `url` with the image URL. This shortcode renders as:

```html
<a href="url" title="title" class="mb-2"><img alt="title" src="url" class="img-fluid" loading="lazy" data-src="url"></a>
```

To add a responsive image with a clickable link that directs users to a custom destination, use the following shortcode:

`{% img-click 'title' 'url' 'destinationUrl' %}`

Replace `title` with a descriptive title for the image, `url` with the image URL, and `destinationUrl` with the target URL when the image is clicked. This shortcode renders as:

```html
<a href="destinationUrl" title="title" class="mb-2"><img alt="title" src="url" class="img-fluid" loading="lazy" data-src="url"></a>
```

## Video

We should consider hosting our videos on YouTube whenever possible. 

To embed a **YouTube video**, use the following shortcode:

`{% youtube 'id' %}`

Replace `id` with the YouTube video ID. This shortcode renders as:

```html
<div class="ratio ratio-16x9 mb-2"><iframe src="https://www.youtube.com/embed/id" title="YouTube video" allowfullscreen></iframe></div>
```

To embed a **YouTube playlist**, use the following shortcode:

`{% youtube-playlist 'id' %}`

Replace `id` with the YouTube playlist ID. This shortcode renders as:

```html
<div class="ratio ratio-16x9 mb-2"><iframe src="https://www.youtube.com/embed/videoseries?list=id" title="YouTube video" allowfullscreen></iframe></div>
```

To embed a video hosted elsewhere, use the following shortcode:

### Hosting our own videos

`{% video 'url' %}`

Replace `url` with the video URL (e.g., .mp4 file). Make sure you have a matching .jpg file with the same name as the .mp4 file for the poster attribute. This shortcode renders as:

```html
<!-- jpgUrl = url.replace(".mp4", ".jpg") // make sure you have a pair .mp4 and .jpg -->
<div class="ratio ratio-16x9 mb-2"><video autoplay loop class="responsive-video" poster="jpgUrl"><source src="url" type="video/mp4"></video></div>
```

### How to encode videos

Videos can be generated by many software in various formats & size, so they might end up being incompatible with web browsers or mobile, or simply be way too large.
It is better to stick to a format with low requirements such as H264 baseline profile (works almost everywhere).

To do so, process the file using [fmpeg](https://ffmpeg.org/download.html):

```
ffmpeg -i myvideo_original.mp4 -profile:v baseline -level 3.0 -an myvideo.mp4
```

Also, generate a static thumbnail so that people can preview it before downloading the video (very important on mobile):

ToDo: Check if webp can be generated from ffmpeg

```
ffmpeg -i myvideo.mp4 -vframes 1 -f image2 -y myvideo.jpg
```

ToDo: Maybe we could provide a simple tool to do that without using command line.


# Web Assets

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


# Styling

## Bootstrap Customization

Our website uses the [Bootstrap](https://getbootstrap.com/) framework, version **5.3**.

⚠️**Important:** Prioritize the use of Bootstrap's inherent styling before integrating any custom styles. You should be familiar with [Bootstrap Utilities](https://getbootstrap.com/docs/5.3/utilities/api/) which help you to achieve most of the styling requirements.

## CSS Guidelines

Our goal is to write as little CSS as possible to ensure the website remains lightweight. We maximize the utilization of the Bootstrap framework to achieve this. 

Further, we are using also [FontAwesome](https://fontawesome.com/) free icons. The icons are loaded in the `src/_includes/css/main.css` file.

# Submitting your Changes

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