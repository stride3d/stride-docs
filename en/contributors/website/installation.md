# Local installation
This guide will walk you through the steps to install the Stride website on your local machine for development purposes. Although we use the Windows operating system for development, the steps should be similar for other operating systems.

[Minor updates](Content#small-updates) can be made directly on GitHub. However, for [more significant updates](Content#major-updates) that affect multiple pages, we recommend using a local development environment so you can see the impact of your changes beforehand. This is because we use the **Eleventy** static site generator, and in some cases, all pages need to be regenerated. This approach helps you assess your changes before submitting a pull request.

This guide assumes you have a basic understanding of the technologies used in the Stride website.

# Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Running the Development Server](#running-the-development-server)
- [ASP.NET Core](#aspnet-core)

# Prerequisites

Before updating the Stride website, ensure you are familiar with the following prerequisites:

1. **Node.js 16+ (including npm) installed:** You can download the installer from the [Node.js website](https://nodejs.org/en/download)
   - If Node.js is already installed, ensure you have version 16 or higher. You can check your version by running `node -v` in a terminal. Note that `npm`, the package manager for Node.js, is included with the installation
1. **Git installed:** You will need Git for version control. If you don't have Git installed, you can download it from the [Git website](https://git-scm.com/downloads)
1. **Development IDE of choice:** Choose an Integrated Development Environment (IDE) that you're comfortable with for development. Although there are various popular choices, such as Visual Studio, Visual Studio Code, and others, this guide will focus on using **Visual Studio**, as it is the primary IDE for the Stride project, and as of writing, we use **Visual Studio 2022**. You can download the free Community edition from the [Visual Studio website](https://visualstudio.microsoft.com/downloads/)

# Installation Steps

1. ❓You might want to create an issue so we can track your contribution and avoid duplicate work. If you're unsure whether your contribution is needed, feel free to create an issue and ask
1. 🍴 Fork the repository by navigating to the [Stride website repository](https://github.com/stride3d/stride-website) and clicking the **Fork** button in the top-right corner
1. 📥 Clone your forked repository using the following command, replacing `your-username` with your GitHub username: `git clone https://github.com/your-username/stride-website.git`
   - 💡**Tip:** It's a good idea to create a new branch for each feature or bug fix you work on. This helps keep your forked repository organized and makes it easier to manage multiple pull requests
1. 📁 Go to the project folder `cd stride-website`
1. 🚀 Run `npm install` to install all dependencies

# Running the Development Server

1. 🚀 Run `npm start` (`npx @11ty/eleventy --serve`) in the command line to start the development server
1. 📋 You should see many logs in the command line, indicating the progress and displaying any errors
   - ⚠️ A Windows Security warning may appear on the first run (Allow Node.js JavaScript Runtime to communicate on these networks). Click **Allow access**
1. 🌐 Open the site in your browser by navigating to `http://localhost:8080/`
1. 💻 Open the project in Visual Studio by opening the `Stride.Web.sln` solution file, or use the IDE of your choice 
1. 🔄 Once you save the updated file, the website will automatically refresh in the browser
1. 😃 Happy coding!

*ToDo: Attach a screenshot of the command line output*

Let's [update the content](Content) now!

# ASP.NET Core

This static website can also be hosted using ASP.NET Core.

Although we're not currently using the ASP.NET Core website, it remains available for future use. If necessary, we can integrate dynamic ASP.NET Core pages with the static pages generated by Eleventy.

To edit the website through Visual Studio, open the `Stride.Web.sln` solution, which will load the website in the IDE. You can then modify the pages and content and run the website directly from Visual Studio.

During the Visual Studio build process, `npm run build` is executed, generating the static website in the same `_site` folder as previously described. The ASP.NET Core website uses this folder instead of the default `wwwroot`. This customization is specified in the `Program.cs` file.

```csharp
var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    WebRootPath = "_site" // Set the folder where the static files are located (e.g., Eleventy output folder)
});
```