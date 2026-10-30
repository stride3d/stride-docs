# AI policy

This page contains the guidelines for using AI when contributing to Stride, including the engine, documentation and website.

## Respect the license

All tools that you use when contributing to the project (including AI tools) need to be compatible with Stride's [MIT license](https://github.com/stride3d/stride/blob/master/LICENSE.md).

## AI-assisted code

We allow submitting code written with AI-assistance as long as:

* You **completely understand** how the generated code works and what it does
* You are able to **take full responsibility** for the code
* Your contribution reaches the **expected level of quality**
* Your contribution is submitted by you and **not a bot**

> [!NOTE]
> Samples and demos have different rules for AI-assisted code. See [Samples and demos](#samples-and-demos).

## Documentation and website content

* AI-generated text cannot be featured on any page
  * We allow using AI-powered autocorrect to write content
  * We allow using AI for research purposes, summarizing parts of the engine or creating initial drafts, as long as its output isn't directly used in content
  * [Engine architecture documentation](../engine/architecture/index.md) that is hosted in the [`docs/` folder](https://github.com/stride3d/stride/tree/master/docs) in the `stride` repository is excluded from these rules and is allowed to feature AI-written content
* AI cannot be used for creating any media content such as screenshots or visualizations
  * Screenshots cannot feature AI-generated assets such as images or models
* We allow using AI for maintenance work (e.g. updating formatting or bulk-removing sections)
* We allow using LLM models in accessibility features, such as translating pages to unsupported languages
  * Every place where users may face AI-generated content must be explicitly stated

## Art assets

**We reserve the right to remove art assets created with generative AI** such as textures, sprites, sound effects, music or animations. This includes assets created for samples, demos, documentation and other parts of Stride. If your contribution needs one of those, consider using free resources online that are compatible with Stride's [MIT license](https://github.com/stride3d/stride/blob/master/LICENSE.md).

Using minor AI-powered tools (e.g. a denoising tool) as well as scripts or software created with AI to make art assets is allowed.

## Samples and demos

**Using AI when contributing to samples or demos is not allowed, including AI-assisted code** with exceptions:

* We allow using AI for maintenance work (e.g. formatting changes, updating old APIs, etc.)
* We allow using AI-powered autocorrect or other small tools that may utilize the technology
