# Docfx

[Docfx](https://dotnet.github.io/docfx/index.html) is a static site generator that uses C# as its templating language. It is an exceptionally powerful tool, offering immense flexibility and customization options for creating a documentation website. Moreover, Docfx is user-friendly and easy to learn. This section covers the basics of Docfx configuration for the Stride Docs website, while the creation and updating of content are detailed in our [Content](content.md) section.

After reviewing various static site generator options, we decided to continue using Docfx, particularly in light of the release of the new `modern` Docfx template. This template leverages Bootstrap 5.3 and has recently introduced a dark theme feature.

## Packages and Dependencies

Currently, we are not utilizing any additional packages.

## Configuration

The configuration for Docfx is located in the `en\docfx.json` file. This file contains all the necessary settings for the Docfx build process.

Contents of the Configuration File:

- **API Sources**: Specifies the Stride path and selected projects for API documentation generation
- **Global Metadata**: Contains global configuration settings for the documentation build
- **File Metadata**: Defines folder sections to be processed for documentation generation, such as Manuals, Tutorials, etc.
- **Resource - Pass Through Files**: Lists files that are copied directly to the output folder without processing
- **Other Configuration**: Explore the file for additional configuration options

For more details on configuration options, visit the [Docfx Configuration Documentation](https://dotnet.github.io/docfx/docs/config.html).

## Global Data

Docfx currently does not support global data like 11ty. At present, *Mustache* can only be used in templates.

## Folder Structure

The folder structure plays a vital role in the documentation generation process, as it determines the output of the build. The structure is organized as follows:

### Folders

- `.github`: Contains GitHub Action workflows
- `_site`: The output build folder (excluded in `.gitignore` and used for deployment)
- `en`: Contains the English language documentation
- `en\api`: Automatically generated folder from the Stride API
- `en\contributors`: Documentation for contributors
- `en\diagnostics`: Diagnostic pages referenced by Stride solution warnings in the IDE
- `en\examples`: Additional content for C# XML comments, which are merged into API documentation and linked by **uids**
- `en\includes`: Markdown files whose content can be included in multiple `.md` files across the documentation.
- `en\manual`: Documentation for the manual
- `en\media`: Main media assets
- `en\ReleaseNotes`: Documentation for release notes
- `en\template`: Docfx assets for minor template customization, including CSS and JS files
- `en\tutorials`: Documentation for tutorials
- `jp`: Japanese language documentation, translated from the English version (currently not updated)
- `wiki`: GitHub wiki content - Excluded from the build process and used only for wiki deployment. This section will be decommissioned as the content has been moved to Stride Docs.

### Files

- `en\*.md`: Markdown content pages
- `en\*.yml`: Table of content files
- `en\.nojekyll`: A flag file for GitHub Actions
- `en\docfx.json`: Docfx configuration file
- `en\filterConfig.yml`: Rules for API exclusion
- `en\languages.json`: Configuration file for languages

### Non Docfx Files

- `appsettings.json`: Configuration file for ASP.NET Core.
- `appsettings.Development.json`: Development-specific configuration file for ASP.NET Core.
- `build-all.bat`: Batch file used in GitHub Actions CI/CD to build all documentation using `BuildDocs.ps1`.
- `BuildDocs.ps1`: PowerShell script responsible for building documentation. Refer to [pipeline](documentation-generation-pipeline.md) for details.
- `OldDocsFix.ps1`: Temporary PowerShell script for fixing old documentation.
- `Program.cs`: Startup file for ASP.NET Core.
- `run.bat`: Batch file to run `BuildDocs.ps1` in interactive mode.
- `run-fix.bat`: Temporary batch file to run `OldDocsFix.ps1`.
- `Stride.Docs.csproj`: ASP.NET Core project file.
- `Stride.Docs.sln`: ASP.NET Core solution file.
- `Stride.Docs.csproj.user`: User-specific ASP.NET Core project file.
- `versions.json`: Configuration file managing versions of Stride documentation.
- `web.config`: Configuration file for IIS deployment.

> [!NOTE]
> This project includes the Visual Studio solution `Stride.Docs.sln`, allowing you to edit the files using the Visual Studio IDE.

## Layouts

We utilize the default layout provided by the `modern` template, as specified in `docfx.json`.

## Includes

All includes are located in the `/_includes` folder. These are reusable markdown snippets that can be incorporated into multiple pages.