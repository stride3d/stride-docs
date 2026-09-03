# Stride 4.4 release notes

Stride 4.4 is one of the largest updates the engine has received in years, with roughly **2700 commits** since the previous version!

The main focus of this release was on **modernization and reach**, which includes much more stable **Vulkan** and **Direct3D 12** backends, support for **non-Windows platforms** no longer being experimental and an overhaul of the shader compiler.

This update also includes many exciting new features, such as a **CLI tool**, ability to **replace read-only assets** and much more.

## ✨ Highlights

Here are a few of the stand-out changes:

### 📱 Platform support

Up to this point, Stride was a mostly-Windows engine, forcing you to create and release your games on it for the best experience. This update changes that.

**All platforms have been brought back into shape** and the test suite for them has been expanded to make sure they won't fall behind again.

Additionally, with changes to the asset compiler, **building projects on Linux and macOS** now works the same **as it does on Windows**. 

![A Stride sample running on a physical iPhone.](media/ReleaseNotes-4.4/ios.webp)

For Linux users: this release removed some legacy code which made it now possible to **use Game Studio on Linux via Proton/Wine**. The experience isn't as great as on the native Windows version, but it's still a bit step-forward for Linux compatibility. If you'd like to try it out, we have created a dedicated tutorial

![Game Studio running on Linux.](media/ReleaseNotes-4.4/stride-proton.webp)

> [!NOTE]
> **Game Studio** is being rewritten to be cross-platform.

### ⌨️ The new `stride` CLI tool

Some tasks that previously required the use of **Game Studio** or the **launcher** can now be done directly **from the command-line!** By using the CLI tool you can install and manage versions of Stride, create new projects and launch Game Studio with simple commands.

For more information, visit the [Stride CLI](../manual/get-started/stride-cli.md) page of our documentation.

```bash
dotnet tool install -g stride.cli      # Install Stride CLI
stride sdk install                     # Install the latest version of Stride
stride new topdownrpg && cd TopDownRPG # Create a project from a template
stride studio                          # Open it in Game Studio
```

`dotnet new` templates are also available if you'd rather use the standard .NET tooling directly:

```bash
dotnet new install Stride.Templates
dotnet new stride-game -n MyGame
```

### 🎮 Vulkan & Direct3D 12

Both APIs have **received a large overhaul**. They're now solid enough that **we have plans** to make one of them **the editor default** and potentially **remove Direct3D 11** in the next major release. 

GPU crashes are also far easier to track down now. Stride can now pinpoint the exact rendering step that caused a device hang.

> [!NOTE]
> If you write custom low-level rendering code, note that D3D12 and Vulkan now use an **explicit barrier/layout model**. D3D12 also requires **Enhanced Barriers**.

Also, you can now pick the graphics API right from the UI for both your project and the editor. Game Studio can be configured in **Settings > Environment > Graphics API** (takes effect after a restart) and the game in the properties of the Windows package.

![Selecting a Windows project package's graphics API from the Property grid](media/ReleaseNotes-4.4/game-graphics-api-selector.webp)

### 🎨 A brand-new SDSL shader compiler

The biggest internal change in 4.4 is a **complete rewrite of the SDSL shader compiler**, now built around a modern **SPIR-V**-centric pipeline.

Instead of parsing and stitching shaders together as text, Stride now works in **SPIR-V bytecode** end to end:

* Each `.sdsl` shader is parsed **once** and compiled into its own **SPIR-S** module (SPIR-Stride, Stride's extended SPIR-V dialect).
* Effects (`.sdfx`) then **mix and compose** those modules **directly as bytecode**, converting the result to standard **SPIR-V** for the GPU backend.
* Crucially, text parsing happens **only at that first step**: recombining a new shader variation from already-compiled SPIR-S needs no re-parsing.

What this means for you:

* **Much faster shader handling.** Generating the many shader permutations a game needs now works directly with byte-code, without a need to re-parse any text.
* **Improved stability.** Stride now uses battle-tested tools in order to handle conversion between different Graphics APIs.
* **Far better support for advanced features.** Direct3D 12 and Vulkan now handle things like **tessellation** and **compute shaders** much more reliably.
* **A future-proof foundation.** With a real SPIR-V pipeline in place, adding modern GPU features such as **ray tracing**, **mesh shaders/meshlets** and **wave intrinsics** becomes much easier going forward.

> [!WARNING]
> Because the entire shader compiler was replaced, custom `.sdsl` shaders may need minor adjustments to compile cleanly. If you encounter any problems, please [open an issue on GitHub](https://github.com/stride3d/stride/issues) so we can fix it.

![The new SDSL shader pipeline: many .sdsl shaders are parsed once into per-shader SPIR-S bytecode, .sdfx effects mix and compose them into standard SPIR-V, which feeds Vulkan natively and Direct3D and Metal via SPIRV-Cross](media/ReleaseNotes-4.4/sdsl-pipeline.svg)

*Huge thanks to **[Youness Kafia](https://github.com/ykafia)**, whose early prototyping and experimentation laid the foundation for the new SDSL pipeline.*

### ⚡ NativeAOT & trimming support

The engine is now **NativeAOT and trimming-friendly**. This unlocks smaller, faster-starting, self-contained game builds. For more information on how to use this, visit the [documentation](../manual/files-and-folders/building-the-game/native-aot.md).

### 📦 Improved assets and content workflow

Stride 4.4 makes it easier to work with assets through code thanks to the automatically generated `Assets` class, which provides strongly typed URL constants for all assets in your project. Now when you rename an asset, you will get build errors instead of a "content not found" message during runtime.

```csharp
// Old approach
var playerModel = Content.Load<Model>("Models/Player");

// New approach
var playerModel = Content.Load(Assets.Models.Player);
```

**Asset paths from external packages now begin with a namespace**, to ensure there are no conflicts between different libraries. This won't break your existing projects, as the paths will be **automatically changed in your code during the upgrade**.

Additionally, Stride now allows you to create **replacement assets**, which can be used to override assets from external packages or even the engine itself. For more information, visit their dedicated page in the [documentation](../manual/assets/replacement-assets.md).

![Replacement assets can be used to override the default font used by Stride.](media/ReleaseNotes-4.4/replacement-assets.webp)

### 🧰 Build, tooling & project system

* **Much faster asset builds.** Assets compile **2x** faster for a typical game, and up to **10×** faster for Stride's own tests, thanks to a new asset-build cache.
* **`.slnx` is the new default solution format.** Existing `.sln` solutions still open and save normally.
* **Dropped support for 32-bit.** The engine now only targets modern 64-bit systems.

### ⚙️ Changes to the physics `CharacterComponent`

While our integration of the Bepu physics engine is definitely mature enough by now, the `CharacterComponent` we introduced was not as well put together as it ought to have been.

* The gravity you may set would be mutated internally to prevent the body from sliding down slopes.
* Moving surfaces would not carry the character along with them.
* Moving past a slope would cause the character to fly off.
* Forces applied to bodies, and especially constraints, required unintuitive tweaks to work.

We looked at Bepu's own character example to solve these issues. Unfortunately, we could not avoid introducing a fair amount of breaking changes. *Fortunately*, we added a couple of sections in [Characters](../manual/physics/characters.md) to describe the new features and properties.

### 📖 Documentation

Since 4.3, our documentation has received a lot of changes. This is a part of an **ongoing effort to bring the documentation up-to-date** and restructure it to provide space for future content.

![Documentation changelog is available in the manual](media/ReleaseNotes-4.4/docs.webp)

* [Get started](../manual/get-started/index.md) and [Platforms](../manual/platforms/index.md) have been **rewritten from scratch**.
* **New sections:** [Assets](../manual/assets/index.md), [Install and update](../manual/install-and-update/index.md) and [Project](../manual/files-and-folders/index.md).
* **New pages for new features:** [NativeAOT](../manual/files-and-folders/building-the-game/native-aot.md), [Replacement assets](../manual/assets/replacement-assets.md) and [Stride CLI](../manual/get-started/stride-cli.md?tabs=powershell).
* Brand new guide on **how to build and publish games** ([link](../manual/files-and-folders/building-the-game/index.md)).
* Updated instructions on **publishing custom external packages** ([link](../manual/files-and-folders/external-packages/publish-a-nuget-package.md)).
* Removed outdated sections and pages.

We have also started documenting parts of Stride's internal architecture in the main [engine repository](https://github.com/stride3d/stride/tree/master/docs) to help other contributors navigate this large codebase. A copy of these pages is available on the [documentation website](../contributors/engine/architecture/index.md).

### 🧪 Quality & CI

*Mostly under the hood, but it directly changes how confidently you can contribute back to the engine.*

Stride 4.4's test suite has been greatly expanded. Where earlier versions used to only be invoked on a slice of possible configurations, **every change now runs the entire test matrix across all platforms and graphics APIs in one pipeline:** engine builds, game and Game Studio tests, end-to-end sample/packaging builds and **GPU image-comparison**.

![The CI pipeline: a single run building and testing every platform and graphics API (Windows D3D11/D3D12/Vulkan, Linux, macOS, Android, iOS), all green](media/ReleaseNotes-4.4/ci-run.webp)

Breakage on any platform or backend is now caught automatically before any change gets merged. **For contributors, that's the real win**: you can open a pull request and **trust CI to prove it works everywhere**, instead of testing each platform by hand, which makes contributing a feature back to the engine far less daunting.

A **gold-image generation workflow** runs **directly on CI**, so you no longer have to regenerate reference images by hand on every platform. Golds are produced and promoted straight from [the CI workflow](https://github.com/stride3d/stride/actions/workflows/test-gold-gen.yml).

The new **CompareGold** tool makes reviewing these tests painless: visualize difference failures against their gold images, promote the ones you accept, and even pull results **directly from any CI run** or fork. For more information, check out [GPU Regression Testing](https://github.com/stride3d/stride/blob/master/tests/GPU-TESTING.md) in the engine repository docs.

![CompareGold reviewing differences between pre-rendered and newly created images.](media/ReleaseNotes-4.4/compare-gold.webp)

## 💥 Breaking changes

* **Custom shaders:** the SDSL compiler was rewritten, so you might want to review how your custom shaders render. If you have a shader that no longer compiles or behaves differently, please [open an issue on GitHub](https://github.com/stride3d/stride/issues) so we can fix it.
* **Low-level graphics:** **Direct3D 12** now requires **Enhanced Barriers**. The legacy barrier path has been removed.
* **Vulkan updated to 1.3:** this might break support for older devices and users with outdated drivers.
* **Convex hulls:** the library we use to generate convex hulls (V-HACD) was updated. This new version improves on speed and accuracy, but has a wildly different set of configurable parameters, so you may want to validate them for accuracy.
* **Bepu `CharacterController` was reworked:** existing character setups will behave differently and need adjustment. See [⚙️ Changes to the physics `CharacterComponent`](#-changes-to-the-physics-charactercomponent).
* **Removed the ability to override Game Settings:** the feature was partially broken and not really that useful, which is why it was decided to remove it altogether. If you want to change settings depending on a user's platform/device, consider creating a **custom Game class**.
* **`GameSettings.Configuration.Get<T>()` is now `GameSettings.GetOrCreateConfiguration<T>()`:** this was caused by other changes to Game Settings (see previous point).
* **`ScrollViewer::ScrollOfInternal` is no private:** the property was mistakenly made public, which as its name suggests, shouldn't have been the case.
* Dropped support for **32-bit** systems.

## 🙏 Contributors

Thanks to everyone who contributed to this release:

- [Acissathar](https://github.com/Acissathar)
- [azeno](https://github.com/azeno)
- [Basewq](https://github.com/Basewq)
- [D4rkDuck](https://github.com/D4rkDuck)
- [Doprez](https://github.com/Doprez)
- [ds5678](https://github.com/ds5678)
- [Eideren](https://github.com/Eideren)
- [Ethereal77](https://github.com/Ethereal77)
- [Feralnex](https://github.com/Feralnex)
- [Henr1k80](https://github.com/Henr1k80)
- [JeroMiya](https://github.com/JeroMiya)
- [Jklawreszuk](https://github.com/Jklawreszuk)
- [johang88](https://github.com/johang88)
- [kjnorris1205](https://github.com/kjnorris1205)
- [Kryptos-FR](https://github.com/Kryptos-FR)
- [laske185](https://github.com/laske185)
- [luca-domenichini](https://github.com/luca-domenichini)
- [MsEpsilon](https://github.com/MsEpsilon)
- [Nicogo1705](https://github.com/Nicogo1705)
- [rafzi](https://github.com/rafzi)
- [Redwarx008](https://github.com/Redwarx008)
- [sasvdw](https://github.com/sasvdw)
- [Spajker7](https://github.com/Spajker7)
- [steveberdy](https://github.com/steveberdy)
- [VaclavElias](https://github.com/VaclavElias)
- [w0wca7a](https://github.com/w0wca7a)
- [xen2](https://github.com/xen2)
- [ykafia](https://github.com/ykafia)

Welcome to our new contributors, who made their first contribution to the [stride3d/stride](https://github.com/stride3d/stride) repository in this release:

- [JeroMiya](https://github.com/JeroMiya) made their first contribution in https://github.com/stride3d/stride/pull/3022
- [D4rkDuck](https://github.com/D4rkDuck) made their first contribution in https://github.com/stride3d/stride/pull/3011
- [ds5678](https://github.com/ds5678) made their first contribution in https://github.com/stride3d/stride/pull/3075
- [rafzi](https://github.com/rafzi) made their first contribution in https://github.com/stride3d/stride/pull/3087
- [MsEpsilon](https://github.com/MsEpsilon) made their first contribution in https://github.com/stride3d/stride/pull/3098
- [Redwarx008](https://github.com/Redwarx008) made their first contribution in https://github.com/stride3d/stride/pull/3093
- [kjnorris1205](https://github.com/kjnorris1205) made their first contribution in https://github.com/stride3d/stride/pull/3118
- [luca-domenichini](https://github.com/luca-domenichini) made their first contribution in https://github.com/stride3d/stride/pull/3089
- [steveberdy](https://github.com/steveberdy) made their first contribution in https://github.com/stride3d/stride/pull/3079
- [Henr1k80](https://github.com/Henr1k80) made their first contribution in https://github.com/stride3d/stride/pull/3156

...and everyone who reported issues, tested builds and helped on the community channels. 💙
