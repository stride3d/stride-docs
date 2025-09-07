# Copilot Guidance for Stride Documentation

These repository instructions guide GitHub Copilot (and similar AI assistants) when updating the Stride game engine documentation.

## Do not build or run this repository
> [!IMPORTANT]
> This is a documentation-only repository. Do not try to build, run, or test it. Do not use IDE build features, build/output windows, or commands such as `dotnet build`, `dotnet run`, or `npm` scripts. Avoid looking for compiler warnings/errors or attempting to fix build issues.

## Repository scope and layout
- Primary content: Markdown under `en/`.
- Navigation/ToC: `en/manual/toc.yml`.
- Glossary: `en/manual/glossary/index.md`.
- Code samples/snippets may appear in articles but are illustrative; they are not compiled from this repo.

## Editing conventions
- Use DocFX-style admonitions: `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`.
- One H1 (`#`) title per page at the top; use sentence case for headings.
- Prefer concise, task-focused writing; avoid redundancy.
- Use fenced code blocks with language hints (e.g., ```csharp, ```yaml, ```json).
- Use relative links within the repo; avoid absolute site URLs.
- Place images alongside content (e.g., a sibling `media/` folder) and reference with relative paths.
- When adding/moving pages, update `en/manual/toc.yml` accordingly.

## Allowed tasks for Copilot
- Create or update Markdown files under `en/`.
- Update `en/manual/toc.yml` to reflect navigation changes.
- Add or correct links, anchors, code fences, and admonitions.
- Improve clarity, grammar, and consistency while preserving technical accuracy.

## Disallowed tasks for Copilot
- Building, running, or testing the repository.
- Using IDE build/output logs to guide changes.
- Modifying `.csproj` or adding packages/dependencies.
- Creating or altering non-docs code projects.

## Maintenance
> [!IMPORTANT]
> Keep this document current (structural changes, new sections, deprecations) so AI assistance stays accurate.

- Update when folder structure, naming conventions, or tooling changes.
- Prune outdated or redundant guidelines.

---
If something here becomes outdated or ambiguous, update it promptly. Concise, accurate guidance improves AI output quality and reduces maintenance overhead.