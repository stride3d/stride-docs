# Generation Pipeline

## Introduction

As of now, **Docfx** does not natively support the generation of multi-language and multi-version documentation. To address this limitation, the Stride team has developed a PowerShell script. Initially, separate scripts were created for each language; however, these have since been consolidated into a single script named [`BuildDocs.ps1`](https://github.com/stride3d/stride-docs/blob/staging/BuildDocs.ps1). This unified script is capable of generating documentation in all supported languages.

The script serves two main purposes:

- It features a non-interactive mode, utilized by the Continuous Integration/Continuous Deployment (CI/CD) pipeline to automatically generate documentation for all languages and the most recent version, eliminating the need for user intervention.
- It also offers an interactive command-line UI, allowing users to select which languages they wish to generate documentation for.

## A Simplified Overview

Here's a straightforward explanation of how the documentation generation process works.

The `/en` folder serves as the repository for the primary documentation files. When documentation for another language (e.g., Japanese) is built, the files from `/en` are copied over to a temporary folder, for example, `/jp-tmp`. This ensures that the non-English versions will contain all the files present in the `/en` folder. Files that have been translated (found in folders like `/jp`) will overwrite their English counterparts in the temp folder `/jp-tmp`.

Docfx is invoked multiple times, once for each language, to create the documentation. The generated documents are stored in the `_site` folder, organized according to the latest version information obtained from `version.json`. For example:

```
/_site/4.1/en
/_site/4.1/jp
```

### Docfx Files Processed

This section outlines the file processing carried out by Docfx during the documentation generation:

- **Table of Contents (TOC) Files:** 7 files processed
- **Assets:** 1620 items (images, videos, etc.) included
- **Conceptual Files:** 358 files processed, resulting in 304 HTML files
- **Warnings (No API Metadata):** 44 instances encountered
- **Warnings (API Metadata):** 200 instances of missing or incorrect references
- **API Files:** 2825 files processed, resulting in 2133 HTML files

## Script Structure

`BuildDocs.ps1` is the entry point and holds the parameters, the transcript and the overall
orchestration. The individual build steps live in the `build` folder and are dot-sourced by the
entry point:

| File | Responsibility |
| --- | --- |
| `build/Settings.ps1` | All paths, file names, URLs and tokens, derived from a few root values |
| `build/Languages.ps1` | Reads and filters `languages.json` |
| `build/Console.ps1` | Menu, prompts, progress messages and error exits |
| `build/FileUtility.ps1` | Relative paths and file rewriting helpers |
| `build/DocFx.ps1` | Every `docfx` invocation, plus API metadata management |
| `build/ArchitectureDocs.ps1` | Imports the engine architecture docs and generates their `toc.yml` |
| `build/PostProcessing.ps1` | Fixes up the generated site and copies deployment extras |
| `build/Build.ps1` | The per-language build steps |

## Docs Build Workflow

In this part, we elaborate on the individual steps involved in the documentation build workflow for the Stride Docs project.

- **Start**
  - Initiates the workflow by reading the `$BuildAll` parameter.
    - If set to 'Yes', it proceeds to generate all languages and the Stride API automatically, which is particularly useful for CI/CD.
    - If set to 'No', it will prompt the user to select languages through an interactive command-line UI.
  - Sets the `$Version` parameter based on the `-Version` command-line argument or fetches the highest entry from `versions.json` if the argument is not provided.
- **Read-LanguageConfiguration**
  - Reads `languages.json` to identify which languages should be generated.
- **BuildAll**
  - Pre-configures some variables for non-interactive mode, effectively skipping the `Read-BuildOption` step.
- **Read-BuildOption**
  - In interactive mode, this step prompts the user to choose the languages to generate, as well as whether to launch a local web server. Only languages marked `Enabled` in `languages.json` are offered and accepted.
- **Confirm-Choice**
  - A single yes/no prompt used for all interactive questions: whether to include the Stride API, whether to re-use already generated Stride API yml files, and whether to refresh the engine architecture docs.
- **Start-LocalWebsite**
  - If selected, launches a local web server to host the generated website.
- **New-ApiMetadata**
  - Executes `docfx.exe` to generate the metadata needed for the Stride API documentation.
- **Remove-ApiDocumentation**
  - Removes the generated API metadata.
- **Engine Architecture Docs**
  - Copy-ArchitectureDocs
    - Mirrors the `docs` folder of the sibling [stride](https://github.com/stride3d/stride) repository into `en/contributors/engine/architecture`, rewriting links and renaming `README.md` files to `index.md`. The step is skipped with a warning when the engine repository is not checked out next to `stride-docs`.
  - New-ArchitectureDocsToc
    - Generates `toc.yml` for the imported folder, taking each entry's title from the document's first heading.
- **Build-EnglishDoc**
  - Uses `docfx.exe` to build the English documentation, incorporating the Stride API documentation if metadata is available, and then builds the PDF unless `-SkipPdfBuilding` was passed.
- **PostProcessing Steps**
  - Update-Sitemap
    - Adjusts the `sitemap.xml` to use '/latest/en' paths, allowing the most current version to maintain a consistent URL.
  - Update-NotFoundPage
    - Modifies asset (CSS, JS, ) paths in `404.html` to be absolute, as required by IIS for 404 page.
  - Copy-ExtraItem
    - Copies additional items like `versions.json`, `web.config`, `ReleaseNotes.md` and `robots.txt`, while also updating the `%deployment_version%` parameter in the `web.config` file.
- **Build-AllLanguagesDoc**
  - Iterates over all enabled non-English languages and triggers the `Build-NonEnglishDoc` function for each. If any language fails, the build stops and reports that language's exit code.
- **Build-NonEnglishDoc**
  - Executes `docfx.exe` to compile non-English documentation, incorporating Stride API documentation if metadata is present.
- **Update-DocFxDocUrl**
  - Adjusts HTML tags and GitHub links, removing any `_tmp` suffixes. Also updates GitHub links to English if the translation is unavailable.

## Workflow Diagram


``` mermaid
%% Define styles

%% Main Graph
graph TB

%% Nodes
    Start[Start]
    A[Read-LanguageConfiguration]
    B{BuildAll}
    C[Read-BuildOption]
    D[New-ApiMetadata]
    E{Confirm-Choice: include API}
    E1{Confirm-Choice: reuse API metadata}
    E2{Confirm-Choice: architecture docs}
    End[End]
    F[Start-LocalWebsite]
    G[Cancel]
    H[Remove-ApiDocumentation]
    I[Copy-ArchitectureDocs]
    I1[New-ArchitectureDocsToc]
    M{isPrimaryLanguage or isAllLanguages}
    N[Build-EnglishDoc]
    O[Update-Sitemap]
    O1[Update-NotFoundPage]
    P[Copy-ExtraItem]
    R{isAllLanguages}
    S[Build-AllLanguagesDoc]
    T[Build-NonEnglishDoc]
    Y[Update-DocFxDocUrl]
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
    E1 -->|Yes| E2
    H --> E2
    subgraph Documentation Generation
    D --> D1{{docfx metadata}} --> E2
    E2 -->|Yes| I --> I1 --> M
    E2 -->|No| M
    M -->|Yes| N
    M -->|No| R
    N --> DocFX{{docfx build}} --> X1{{docfx pdf}} --> O --> O1--> P
    P --> R
    R -->|Yes| S
    R -->|No| T
    S --> T
    T --> X{{docfx build}}
    X --> Y
    Y --> Z
    end
```