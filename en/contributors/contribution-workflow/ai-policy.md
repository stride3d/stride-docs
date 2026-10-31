# AI policy

This page contains guidelines for using AI when contributing to [`stride3d/stride`](https://github.com/stride3d/stride), [`stride3d/stride-docs`](https://github.com/stride3d/stride-docs), [`stride3d/stride-website`](https://github.com/stride3d/stride-website), as well as other official reposiories associated with the project.

## Introduction

Generative AI is a useful tool, but it also creates a risk of code and content degradation. While we partially allow using AI-assistance when contributing to certain areas of the project, we have created a set of rules that you need to follow in order for your contribution to be accepted.

We understand that not all of these rules are enforceable. The goal of this policy is to create a baseline for maintainers to determine which PRs can be closed, as well as provide guidelines for contributors that want to ensure their work gets merged.

## Respect the license

All tools that you use when contributing to the project (including AI tools) need to be compatible with Stride's [MIT license](https://github.com/stride3d/stride/blob/master/LICENSE.md).

## Disclose how AI is used

We ask that you include information in the descriptions of pull requests about how AI was used in them. Reviewers are bound to find this out by themselves, but by disclosing you help everyone save time.

## AI-assisted code

We allow submitting code written with AI-assistance as long as:

* You **completely understand** how the generated code works and what it does
* You are able to **take full responsibility** for the code
* Your contribution reaches the **expected level of quality**
* Your contribution is submitted by you and **not a bot**

API documentation should follow the rules for [documentation and website content](#documentation-and-website-content).

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

## Communication

We ask that you don't use AI to write messages for you under issues and PRs. **We want to talk with you, not a chatbot!** Exceptions to this include:

* Using AI autocorrect
* Using AI to translate text from other languages (please disclose that you are using a translator in your message)
* Using AI for creating visualizations or comparisons (e.g. before and after table)
