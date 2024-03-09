# XML Comments and Docs

Contributing to Stride not only involves code changes but also requires keeping the [documentation](https://doc.stride3d.net/latest/en/index.html), including the [API Docs](https://doc.stride3d.net/latest/en/api/index.html) and [Manual](https://doc.stride3d.net/latest/en/manual/index.html), current and comprehensive.

## Enforcing Documentation Updates

The Stride team prioritizes documentation as part of the PR review process to maintain the accuracy and completeness of information. Ensuring documentation updates with every change helps users and contributors alike understand and utilize Stride's features effectively.

## API Documentation

For the benefit of both IDE users and those utilizing the generated API Docs, it's crucial that any `public` interfaces, classes, methods, properties in C# are thoroughly documented with [XML comments](https://dotnet.github.io/docfx/docs/basic-concepts.html). This practice allows users to receive contextual information within their IDEs and aids in generating comprehensive API documentation.

**Key Points for API Documentation:**

- **XML Comments:** All `public` members intended for use should include descriptive XML comments. These comments are integral to generating useful API documentation and provide essential guidance directly in the IDE.
- **Descriptive Information:** Comments should clearly describe the purpose, parameters, return values, and any exceptions thrown by the method or property. This information is invaluable for developers integrating these features into their projects.
- **Use `<remarks></remarks>`:** For additional context or usage examples, the `<remarks>` tag can be used within XML comments to provide supplementary information. This can enhance understanding and demonstrate practical applications of API elements.

## Updating the Manual
Significant changes, such as the introduction of new features or modifications to existing ones, necessitate updates to the Stride user manual. It's essential that these updates accurately reflect the changes to provide users with the latest information on utilizing Stride's capabilities.

It's up to the Stride team, alongside our amazing contributors, to make sure that any new contributions bring along updates to the manual. This teamwork between the contributors and our review team helps keep our documentation a rich and invaluable resource for everyone in our community.

## ReleaseNotesNext.md

The [ReleaseNotesNext.md](https://doc.stride3d.net/latest/en/ReleaseNotes/ReleaseNotesNext.html) file is a crucial document that should be continuously updated with summaries of important/major PRs that have been merged and are noteworthy for the community, such as new features.

This document serves as a running log of all significant changes slated for inclusion in the next release. Keeping this document current is vital for ensuring that the release notes are both accurate and exhaustive, thereby **streamlining the release process**.