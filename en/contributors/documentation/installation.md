# Local installation
This guide will walk you through the steps to install the Stride Docs website on your local machine for development purposes. Although we use the Windows operating system for development, the steps should be similar for other operating systems.

[Minor updates](Content#small-updates) can be made directly on GitHub. However, for [more significant updates](Content#major-updates) that affect multiple pages, we recommend using a local development environment so you can see the impact of your changes beforehand. This is because we use the **docfx** static site generator, and in some cases, all pages need to be regenerated. This approach helps you assess your changes before submitting a pull request.

This guide assumes you have a basic understanding of the technologies used in the Stride docs website.

# Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Running the Development Server](#running-the-development-server)

# Prerequisites

Before updating the Stride Docs, ensure you are familiar with the following prerequisites:

1. Familiarity with the command line
1. **.NET SDK 6.0 or higher:** You can download the installer from the [.NET SDK website](https://dotnet.microsoft.com/en-us/download)
   - If .NET SDK is already installed, ensure you have version 6.0 or higher. You can check your version by running `dotnet --info` in a terminal.
1. **Git installed:** You will need Git for version control. If you don't have Git installed, you can download it from the [Git website](https://git-scm.com/downloads)
1. **Development IDE of choice:** Choose an Integrated Development Environment (IDE) that you're comfortable with for development. Although there are various popular choices, such as Visual Studio, Visual Studio Code, and others, this guide will focus on using **Visual Studio**, as it is the primary IDE for the Stride project, and as of writing, we use **Visual Studio 2022**. You can download the free Community edition from the [Visual Studio website](https://visualstudio.microsoft.com/downloads/)

# Installation Steps

1. ❓You might want to create an issue so we can track your contribution and avoid duplicate work. If you're unsure whether your contribution is needed, feel free to create an issue and ask
1. 🍴 Fork the repository by navigating to the [Stride Docs repository](https://github.com/stride3d/stride-docs) and clicking the **Fork** button in the top-right corner
1. 📥 Clone your forked repository using the following command, replacing `your-username` with your GitHub username: `git clone https://github.com/your-username/stride-docs.git`
   - 💡**Tip:** It's a good idea to create a new branch for each feature or bug fix you work on. This helps keep your forked repository organized and makes it easier to manage multiple pull requests
1. Make sure you have also Stride repo cloned on **the same level** as stride-docs, read more about it [here](https://github.com/stride3d/stride)
   - This repo is needed for API documentation generation
1. 📁 Go to the project folder `cd stride-docs`
1. 🚀 Let's start with the **docfx**

Enter the following command to install the latest docfx

```
dotnet tool install -g docfx
```

Or check the inslalled version is at least `2.67.0`

```
docfx --version
```

**Other options**

Update to the latest docfx

```
dotnet tool update -g docfx
```

Install a specific version of docfx

```
dotnet tool update -g docfx --version 2.67.0
```

Uninstall docfx if you need to downgrade


```
dotnet tool uninstall -g docfx
```

# Running the Development Server

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

Let's [update the content](Content) now!