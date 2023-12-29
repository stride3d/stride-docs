# Local installation
This guide will walk you through the steps to install the Stride Docs website on your local machine for development purposes. Although we use the Windows operating system for development, the steps should be similar for other operating systems.

[Minor updates](content.md#small-updates) can be made directly on GitHub. However, for [more significant updates](content.md#major-updates) that affect multiple pages, we recommend using a local development environment so you can see the impact of your changes beforehand. This is because we use the [Docfx](https://dotnet.github.io/docfx/index.html) static site generator, and in some cases, all pages need to be regenerated. This approach helps you assess your changes before submitting a pull request.

This guide assumes you have a basic understanding of the technologies used in the Stride docs website.

## Prerequisites

Before updating the Stride Docs, ensure you are familiar with the following prerequisites:

[!INCLUDE [docs-prerequisites](../../includes/docs-prerequisites.md)]

## Installation Steps

1. ❓You might want to create an issue so we can track your contribution and avoid duplicate work. If you're unsure whether your contribution is needed, feel free to create an issue and ask
1. 🍴 Fork the repository by navigating to the [Stride Docs repository](https://github.com/stride3d/stride-docs) and clicking the **Fork** button in the top-right corner
1. 📥 Clone your forked repository using the following command, replacing `your-username` with your GitHub username: `git clone https://github.com/your-username/stride-docs.git`
   - 💡**Tip:** It's a good idea to create a new branch for each feature or bug fix you work on. This helps keep your forked repository organized and makes it easier to manage multiple pull requests
1. Make sure you have also Stride repo cloned on **the same level** as stride-docs, read more about it [here](https://github.com/stride3d/stride)
   - This repo is needed for API documentation generation
1. 📁 Go to the project folder `cd stride-docs`
1. 🚀 Let's start with the **Docfx**

Enter the following command to install the latest docfx

```
dotnet tool install -g docfx
```

Or check the installed version is at least `2.74.1`

```
docfx --version
```

**Other options**

Update to the latest Docfx

```
dotnet tool update -g docfx
```

Install a specific version of Docfx

```
dotnet tool update -g docfx --version 2.74.1
```

Uninstall Docfx if you need to downgrade

```
dotnet tool uninstall -g docfx
```

## Running the Development Server

We've created a PowerShell script [BuildDocs.ps1](https://github.com/stride3d/stride-docs/blob/master/BuildDocs.ps1) with a context menu where you can select the language, include the API build, and run the development server.

1. 🚀 Run `run.bat` in the command line to start the script
1. 📋 You will see the following self-explanatory menu:
    ```
    Please select an option:

      [en] Build English documentation
      [jp] Build Japanese documentation
      [all] Build documentation in all available languages
      [r] Run local website
      [c] Cancel

    Your choice:
    ```
1. 🌐 Choose to build the documentation in the language of your preference
   - Select `[n]` for no API build
1. 🖥️ If you select `[r]`, the documentation site will open automatically in your browser `http://localhost:8080/en/index.html`
     - If you built the documentation in a language other than English, you'll need to manually change the language in the URL
1. 💻 Open the project in Visual Studio by opening the `Stride.Docs.sln` solution file, or use the IDE of your choice 
1. 🔄 After saving the updated file, you will need to rebuild the documentation by running the script again
1. 😃 Happy coding!

Let's [update the content](content.md) now!