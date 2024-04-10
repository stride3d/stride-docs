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

- `breaking-change` label: If the PR introduces a breaking change, it should be labelled as such.
- `enhancement` label: If the PR introduces a new feature or improvement, it should be labelled accordingly.
- `bug-fix` label: If the PR fixes a bug, it should be labelled as such.

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

> [!NOTE]
> If multiple labels are applied, the release automation will prioritize the generic category first, followed by the Stride-specific category. This means that only one label will be automatically applied to the release notes.

## Examples

Example of a generated PR titles. Note the different prefixes for generic and Stride-specific categories:

### 💥 Breaking Changes
- [Physics] Bepu codebase refactoring and clean-up

### 🎉 New Features
- [Input] Add haptic support to OpenVR and Oculus runtimes

### 🐞 Bug Fixes

- [Audio] fix: Audio emitter multiple references to same asset bugfix

### 🔧 Engineering

- feat: Add editor settings for the camera speed increase/decrease hotkeys

### ⌨️ Input

- fix: Fixes mouse release for Winforms
- fix: Fixes detecting WinForms right shift key (fixes #754, fixes #929)

### ⚙️ Physics

- fix: Fixes inconsistent box2D collision, see #1707 and #2019
- feat: Add ray test flags

## Squashing

When merging a pull request, the Stride team might squash the commits into a single commit. This is to keep the git history clean and to make it easier to understand the changes that were made in the future.