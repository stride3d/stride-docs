# Documentation content
- [Content Updates](#content-updates)
  - [Small Updates](#small-updates)
  - [Major Updates](#major-updates)
- [Manual](#manual)
  - [Creating New Page](#creating-new-manual-page)
- [Tutorial](#tutorial)
  - [Creating New Tutorial](#creating-new-tutorial-page)
- [Shortcodes and Includes](#shortcodes-and-includes)
  - [Alert](#alert)
  - [Video](#video)
- [Web Assets](#web-assets)
- [Styling](#styling)
  - [Bootstrap Customization](#bootstrap-customization)
  - [CSS Guidelines](#css-guidelines)
- [Submitting your Changes](#submitting-your-changes)

# Content Updates

If you want to contribute and update the website, please follow the instructions below.

Small updates can be done directly in the GitHub web interface, for bigger updates the local development environment is required, which is described in the [Installation](Installation) section.

You can use any text editor to make changes. If you are using **Visual Studio**, you can open `Stride.Docs.sln` solution file in the root of the repository and start making your updates directly from this IDE.

You are always welcome to create an issue to discuss your changes before you start working on them. 

## Small Updates

Creating an issue is not required for small updates, but it is recommended to let others know what you are working on. If you are not sure whether your update is small or not, please create an issue first.

### What is a small update?

We can define small updates as changes to the content of the website:

- Update the content of an existing page (manual, tutorial or release note)
- Add a [new manual](#creating-new-manual-page) or [tutorial](#creating-new-tutorial-page)
- Fix a typo

### Steps

**Note:** This guide assumes you are already familiar with updating files in GitHub.

1. Go to the [Stride Docs GitHub](https://github.com/stride3d/stride-docs) repository.
1. Locate the file you wish to edit.
1. Click the `Edit this file` (pencil) icon in the top right corner.
1. If prompted, fork the repository by clicking `Fork this repository`.
1. Make your changes to the file, then write a brief commit message describing the changes.
1. Click on the `Propose changes` button.
1. On the next screen, click the `Create pull request` button.
1. Provide a title and description for your pull request, and click on `Create pull request` again.
1. Wait for the review and merge.

## Major Updates

[Creating an issue](https://github.com/stride3d/stride-docs/issues) is **required** for major updates, so that others can comment on your changes and provide feedback.

We can define bigger updates as changes to the design of the website, where you would like to see the impact of your changes beforehand to assess the desired result:

- Update docfx version
- Update layouts

You would start with the local development environment, which is described in the [Installation](Installation) section.

Then you would make your changes and test them locally. Once you are happy with the result, you can create a pull request to merge your changes into the `master` branch.

# Manual

These pages contain information about how to use Stride, an open-source C# game engine.

## Creating New Manual Page

1. Create a new file in the `manual` folder, in the already existing folders (e.g. animation, audio, ..) or create a new folder in the `manual` folder.
   - If you created a new folder, make sue that you create also index.md file in this folder.
1. Use any existing page as a template for the new page.
1. Update `toc.md` file in the `manual` folder to include the new page or folder. The `toc.md` file contains the table of contents for the manual pages, which is displayed on the left side of the manual pages.

## Naming Convention

Observe existing pages and folders for the naming convention.

## Media

You can observe that existing folders might have a `media` folder. This folder contains images and videos used in the manual pages. You can use this folder or create a new one in your folder. If possible make sure that images are `.webp` format and videos are `.mp4` format.

# Tutorial

These pages contain tutorials on how to use Stride, an open-source C# game engine.

## Creating New Tutorial Page

1. Create a new tutorial folder in the `tutorial` folder.
1. Create a new index.md file in this folder. Observe existing tutorials for the content of this file.
1. Create markdown files for each step of the tutorial. Observe existing tutorials structure for the content of these files.
1. Update `toc.md` file in the `tutorial` folder to include the new tutorial folder. The `toc.md` file contains the table of contents for the tutorial pages, which is displayed on the left side of the tutorial pages.

## Naming Convention

Observe existing pages and folders for the naming convention.

## Media

You can observe that existing tutorials have a `media` folder. This folder contains images. If possible make sure that images are `.webp` format. The videos should be uploaded to YouTube and embedded in the tutorial pages.

# Shortcodes and Includes

Read docfx documentation about [shortcodes and inludes](https://dotnet.github.io/docfx/docs/markdown.html?tabs=linux%2Cdotnet). Some of them are briefly described below.

## Alert

```liquid
> [!NOTE]
> Information the user should notice even if skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Essential information required for user success.

> [!CAUTION]
> Negative potential consequences of an action.

> [!WARNING]
> Dangerous certain consequences of an action.
```

## Video

We should consider hosting our videos on YouTube whenever possible. 

You can embed a video by using the following Markdown syntax:

`> [!Video embed_link]`

Replace `embed_link` with the YouTube video link. This shortcode renders as:

Example:
```md
> [!Video https://www.youtube.com/embed/-IXw64hZAqg]
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

Prioritize using Bootstrap styling before introducing any custom styles. 

## CSS Guidelines

We aim to write minimum CSS code to keep the website lightweight and use the Bootstrap framework as much as possible. 

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