# Table of Contents

- [Introduction](#introduction)
- [A Simplified Overview](#a-simplified-overview)
- [Docs Build Workflow](#docs-build-workflow)
- [Workflow Diagram](#workflow-diagram)

# Introduction
As of now, **DocFX** does not natively support the generation of multi-language and multi-version documentation. To address this limitation, the Stride team has developed a PowerShell script. Initially, separate scripts were created for each language; however, these have since been consolidated into a single script named [`BuildDocs.ps1`](https://github.com/stride3d/stride-docs/blob/staging/BuildDocs.ps1). This unified script is capable of generating documentation in all supported languages.

The script serves two main purposes:

- It features a non-interactive mode, utilized by the Continuous Integration/Continuous Deployment (CI/CD) pipeline to automatically generate documentation for all languages and the most recent version, eliminating the need for user intervention.
- It also offers an interactive command-line UI, allowing users to select which languages they wish to generate documentation for.

# A Simplified Overview

Here's a straightforward explanation of how the documentation generation process works.

The `/en` folder serves as the repository for the primary documentation files. When documentation for another language (e.g., Japanese) is built, the files from `/en` are copied over to a temporary folder, for example, `/jp-tmp`. This ensures that the non-English versions will contain all the files present in the `/en` folder. Files that have been translated (found in folders like `/jp`) will overwrite their English counterparts in the temp folder.

DocFX is invoked multiple times, once for each language, to create the documentation. The generated documents are stored in the `_site` folder, organized according to the latest version information obtained from `version.json`. For example:

```
/_site/4.1/en
/_site/4.1/jp
```

## DocFX Files Processed

This section outlines the file processing carried out by DocFX during the documentation generation:

- **Table of Contents (TOC) Files:** 4 files processed
- **Assets:** 1607 items (images, videos, etc.) included
- **Conceptual Files:** 304 files processed, resulting in 304 HTML files
- **Warnings (No API Metadata):** 44 instances encountered
- **Warnings (API Metadata):** 200 instances of missing or incorrect references
- **API Files:** 2821 files processed, resulting in 2133 HTML files

# Docs Build Workflow

In this part, we elaborate on the individual steps involved in the documentation build workflow for the Stride Docs project.

- **Start**
  - Initiates the workflow by reading the `$BuildAll` parameter.
    - If set to 'Yes', it proceeds to generate all languages and the Stride API automatically, which is particularly useful for CI/CD.
    - If set to 'No', it will prompt the user to select languages through an interactive command-line UI.
  - Sets the `$Version` parameter based on the `-Version` command-line argument or fetches it from `version.json` if the argument is not provided.
- **Read-LanguageConfigurations**
  - Reads `languages.json` to identify which languages should be generated.
- **BuildAll**
  - Pre-configures some variables for non-interactive mode, effectively skipping the `Get-UserInput` step.
- **Get-UserInput**
  - In interactive mode, this step prompts the user to choose the languages to generate, as well as whether to launch a local web server.
- **Ask-IncludeAPI**
  - Further queries if the user wants the Stride API included in the documentation build.
- **Ask-UseExistingAPI**
  - Queries if the user wants to re-use already generated Stride API yml files.
- **Start-LocalWebsite**
  - If selected, launches a local web server to host the generated website.
- **Generate-APIDoc**
  - Executes `docfx.exe` to generate the metadata needed for the Stride API documentation.
- **Remove-APIDoc**
  - Removes the generated API metadata.
- **Build-EnglishDoc**
  - Uses `docfx.exe` to build the English documentation, incorporating the Stride API documentation if metadata is available.
- **PostProcessing Steps**
  - PostProcessing-FixingSitemap
    - Adjusts the `sitemap.xml` to use '/latest/en' paths, allowing the most current version to maintain a consistent URL.
  - PostProcessing-Fixing404AbsolutePath
    - Modifies asset (CSS, JS, ) paths in `404.html` to be absolute, as required by IIS for 404 page.
  - Copy-ExtraItems
    - Copies additional items like `versions.json`, `web.config`, `ReleaseNotes.md` and `robots.txt`, while also updating the `%deployment_version%` parameter in the `web.config` file.
- **Build-AllLanguagesDocs**
  - Iterates over all selected languages and triggers the `Build-NonEnglishDoc` function for each.
- **Build-NonEnglishDoc**
  - Executes `docfx.exe` to compile non-English documentation, incorporating Stride API documentation if metadata is present.
- **PostProcessing-DocFxDocUrl**
  - Adjusts HTML tags and GitHub links, removing any `_tmp` suffixes. Also updates GitHub links to English if the translation is unavailable.

# Workflow Diagram


``` mermaid
%% Define styles

%% Main Graph
graph TB

%% Nodes
    Start[Start]
    A[Read-LanguageConfigurations]
    B{BuildAll}
    C[Get-UserInput]
    D[Generate-APIDoc]
    E{Ask-IncludeAPI}
    E1{Ask-UseExistingAPI}
    End[End]
    F[Start-LocalWebsite]
    G[Cancel]
    H[Remove-APIDoc]
    M{isEnLanguage or isAllLanguages}
    N[Build-EnglishDoc]
    O[PostProcessing-FixingSitemap]
    O1[PostProcessing-Fixing404AbsolutePath]
    P[Copy-ExtraItems]
    R{isAllLanguages}
    S[Build-AllLanguagesDocs]
    T[Build-NonEnglishDoc]
    Y[PostProcessing-DocFxDocUrl]
    Z[End]

%% Edges
    Start --> A --> B
    B -->|Yes| D
    B -->|No| C
    subgraph User Interaction
    C --> E
    E -->|Yes| E1
    E -->|No| H
    C --> F --> F1{{docfx serve}}
    C --> G
    end
    F1 --> End
    G --> End
    E1 -->|No| D
    E1 -->|Yes| M
    subgraph Documentation Generation
    H --> M
    D --> D1{{docfx metadata}} --> M
    M -->|Yes| N
    M -->|No| R
    N --> DocFX{{docfx build}} --> O --> O1--> P
    P --> R
    R -->|Yes| S
    R -->|No| T
    S --> T
    T --> X{{docfx build}}
    X --> Y
    Y --> Z
    end
```