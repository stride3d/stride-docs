# GitHub Pull Request Guidelines

This guide assumes familiarity with the basics of Git and GitHub, focusing on providing instructions for creating pull requests (PRs) that are straightforward for the Stride team to review and merge.

For a suggested workflow on contributing to Stride, please check our [Contribution Workflow](index.md).

When submitting a pull request, you'll use a [template](https://github.com/stride3d/stride/blob/master/.github/pull_request_template.md) that guides you through providing all the necessary details for a smooth review process. The template includes sections for a concise summary of your changes, a detailed description, any related issues, the motivation behind the changes, and the types of changes being proposed.

A crucial part of this template is the checklist, which includes verifying documentation needs, adding tests for new features, ensuring all tests pass, and notably, confirming that you have **built and run the editor** to test your changes personally. This step is especially important as it demonstrates due diligence in testing your contribution, significantly aiding the review process by ensuring functionality and reducing potential integration issues.

The template is structured to cover:
- **Summary**: A brief overview of the changes.
- **Description**: An in-depth explanation of what has been changed or added.
- **Related Issue**: Linking to discussions or bug reports related to the PR.
- **Motivation and Context**: The reasoning behind the changes.
- **Types of Changes**: Categorizing the nature of the changes.
- **Checklist**: A series of verification steps to ensure the PR is comprehensive and tested.

This systematic approach helps streamline the review process, making it easier for the Stride team to understand, review, and merge your contributions efficiently.

## Merging Pull Requests

### Title Prefixing

When merging a pull request, the title should be prefixed based on the label:

- For generic labels, use square brackets to state the Stride category the PR belongs to, e.g., `[Assets]`, `[OpenXR]`, `[Tests]`, `[Graphics]`, `[Physics]`, `[UI]`, `[Audio]`, `[Input]`, `[Launcher]`, `[GameStudio]`, `[Build]`, `[Doc]`, `[Samples]`, `[Shaders]`, `[Performance]`, `[Engineering]`, or any category the maintainer sees fit.
- For Stride-specific labels, the prefix should follow the commit convention, e.g., `feat:`, `fix:`, `perf:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`, or any designation the maintainer sees fit.

### Labelling

Once the PR is merged, the Stride team will apply a label **(only one per PR)** to categorize the PR based on the type of changes it introduces. These labels are utilized by GitHub Releases automation to sort changes in the changelog.

The categorization is set in the [release.yml](https://github.com/stride3d/stride/blob/master/.github/release.yml).

The community has agreed to use a hybrid categorization based on generic categories and Stride-specific categories.

Labels should be applied based on the following rules and order of priority:

**Generic categories:**

- `breaking-change` label: If the PR introduces a breaking change, it should be labeled as such.
- `enhancement` label: If the PR introduces a new feature or improvement, it should be labeled accordingly.
- `bug-fix` label: If the PR fixes a bug, it should be labeled as such.

**Stride-specific categories:**

- `performance`
- `engineering`
- `area-Asset`
- `area-Audio`
- `area-Build`
- `area-Doc`
- `area-GameStudio`
- `area-Graphics`
- `area-Input`
- `area-Launcher`
- `area-Physics`
- `area-Samples`
- `area-Shaders`
- `area-UI`
- `area-Rendering`

PRs with other labels or those that are unlabelled will automatically fall under the **Other Changes** category.

### Squashing

When merging a pull request, the Stride team might squash the commits into a single commit. This is to keep the git history clean and to make it easier to understand the changes that were made in the future.

## Documentation

Contributing to Stride not only involves code changes but also requires keeping the [documentation](https://doc.stride3d.net/latest/en/index.html), including the [API Docs](https://doc.stride3d.net/latest/en/api/index.html) and [Manual](https://doc.stride3d.net/latest/en/manual/index.html), current and comprehensive.

### Enforcing Documentation Updates

The Stride team prioritizes documentation as part of the PR review process to maintain the accuracy and completeness of information. Ensuring documentation updates with every change helps users and contributors alike understand and utilize Stride's features effectively.

### API Documentation

For the benefit of both IDE users and those utilizing the generated API Docs, it's crucial that any `public` interfaces, classes, methods, properties in C# are thoroughly documented with [XML comments](https://dotnet.github.io/docfx/docs/basic-concepts.html). This practice allows users to receive contextual information within their IDEs and aids in generating comprehensive API documentation.

**Key Points for API Documentation:**

- **XML Comments:** All `public` members intended for use should include descriptive XML comments. These comments are integral to generating useful API documentation and provide essential guidance directly in the IDE.
- **Descriptive Information:** Comments should clearly describe the purpose, parameters, return values, and any exceptions thrown by the method or property. This information is invaluable for developers integrating these features into their projects.
- **Use `<remarks></remarks>`:** For additional context or usage examples, the `<remarks>` tag can be used within XML comments to provide supplementary information. This can enhance understanding and demonstrate practical applications of API elements.

### Updating the Manual
Significant changes, such as the introduction of new features or modifications to existing ones, necessitate updates to the Stride user manual. It's essential that these updates accurately reflect the changes to provide users with the latest information on utilizing Stride's capabilities.

It's up to the Stride team, alongside our amazing contributors, to make sure that any new contributions bring along updates to the manual. This teamwork between the contributors and our review team helps keep our documentation a rich and invaluable resource for everyone in our community.

### ReleaseNotesNext.md

The [ReleaseNotesNext.md](https://doc.stride3d.net/latest/en/ReleaseNotes/ReleaseNotesNext.html) file is a crucial document that should be continuously updated with summaries of important/major PRs that have been merged and are noteworthy for the community, such as new features.

This document serves as a running log of all significant changes slated for inclusion in the next release. Keeping this document current is vital for ensuring that the release notes are both accurate and exhaustive, thereby **streamlining the release process**.