# Stride 4.4 release notes

Stride 4.4 is one of the largest engine updates in years, with roughly **2400 commits** since 4.3.

The focus of this release is on **modernization and reach**, with much more stable **Vulkan** and **Direct3D 12** backends,
full platform coverage across **Windows**, **Linux**, **macOS**, **Android** and **iOS** (all continuously tested on CI), an improved shader compiler and
a new CLI tool providing an alternative to some of Game Studio's functions.

## ✨ Highlights

Here are a few of the stand-out changes:

### 📱 Platform support

Stride 4.4 widens both where you can *build* games and where they *run*.

**Build anywhere:** with changes to the asset compiler, projects can now be built on **Linux** and **macOS**, not just Windows.

**Run everywhere:** non-Windows platforms were brought back into shape, while the test suite for them was expanded to ensure they are kept that way.

![A Stride sample running on a physical iPhone](media/ReleaseNotes-4.4/ios.webp)

### ⌨️ A command-line workflow: Stride CLI + `dotnet new` templates

You can now create, build and run Stride games entirely from the command line, with no Game Studio install required thanks to our new cli tool. For more information on how to install and use it, visit the [Stride CLI](../manual/get-started/stride-cli.md) page of our documentation.

```bash
dotnet tool install -g stride.cli      # install the Stride CLI
stride sdk install                     # install the latest Stride
stride new topdownrpg && cd TopDownRPG # create a project from a template
stride studio                          # open it in Game Studio
```

`dotnet new` templates are also available as a lightweight fallback if you'd rather use the standard .NET tooling directly:

```bash
dotnet new install Stride.Templates
dotnet new stride-game -n MyGame
```

### 🎮 Vulkan & Direct3D 12

Both backends got a big **overhaul and stability pass** and are in a much better shape. They're now solid enough that we expect to make a modern backend the editor default before long and **Direct3D 11 is a candidate for removal in the next major release**. GPU crashes are also far easier to track down: Stride can now pinpoint the exact rendering step that caused a device hang.

> [!NOTE]
> If you write custom low-level rendering code, note that D3D12 and Vulkan now use an **explicit barrier/layout model** (and D3D12 requires **Enhanced Barriers** — the legacy path was removed).

Also, you can now pick the graphics API right from the UI for both your project and the editor. Game Studio can be configured in **Settings > Environment > Graphics API** (takes effect after a restart) and the game in the properties of the Windows package.

![Selecting a Windows project package's graphics API from the Property grid](media/ReleaseNotes-4.4/game-graphics-api-selector.webp)

### 🎨 A brand-new SDSL shader compiler

The biggest internal change in 4.4 is a **complete rewrite of the SDSL shader compiler**, now built around a modern **SPIR-V**-centric pipeline.

Instead of parsing and stitching shaders together as text, Stride now works in **SPIR-V bytecode** end to end:

* Each `.sdsl` shader is parsed **once** and compiled into its own **SPIR-S** module (SPIR-Stride, Stride's extended SPIR-V dialect).
* Effects (`.sdfx`) then **mix and compose** those modules **directly as bytecode**, converting the result to standard **SPIR-V** for the GPU backend.
* Crucially, text parsing happens **only at that first step**: recombining a new shader variation from already-compiled SPIR-S needs no re-parsing.

What this means for you:

* **Much faster shader handling.** Generating the many shader permutations a real game needs no longer touches a text parser (variations are recombined straight from cached bytecode).
* **Built on mature, standard tooling.** **Vulkan** consumes **SPIR-V** natively, while **Direct3D 11/12** and **Metal** reuse **SPIRV-Cross** (which converts SPIR-V to HLSL/MSL). These components are battle-tested and less likely to cause issues.
* **Far better support for advanced features.** Direct3D 12 and Vulkan now handle things like **tessellation** and **compute shaders** much more reliably.
* **A future-proof foundation.** With a real SPIR-V pipeline in place, adding modern GPU features such as **ray tracing**, **mesh shaders/meshlets** and **wave intrinsics** becomes much easier going forward.

> [!WARNING]
> Because the entire shader compiler was replaced, custom `.sdsl` shaders may need minor adjustments to compile cleanly. If you encounter any problems, please [open an issue on GitHub](https://github.com/stride3d/stride/issues) so we can fix it.

![The new SDSL shader pipeline: many .sdsl shaders are parsed once into per-shader SPIR-S bytecode, .sdfx effects mix and compose them into standard SPIR-V, which feeds Vulkan natively and Direct3D and Metal via SPIRV-Cross](media/ReleaseNotes-4.4/sdsl-pipeline.svg)

*Huge thanks to **[Youness Kafia](https://github.com/ykafia)**, whose early prototyping and experimentation laid the foundation for the new SDSL pipeline.*

### ⚡ NativeAOT & trimming support

The engine is now **NativeAOT and trimming-friendly**. This unlocks smaller, faster-starting, self-contained game builds. For more information on how to use this, visit our [documentation](../manual/files-and-folders/building-the-game/native-aot.md).

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

![Replacement assets can be used to override the default font used by Stride](media/ReleaseNotes-4.4/replacement-assets.webp)

### 🧰 Build, tooling & project system

* **Much faster asset builds.** Assets compile **2x** faster for a typical game, and up to **10×** faster for Stride's own tests, thanks to a new asset-build cache.
* **`.slnx` is the new default solution format** for projects created by Stride. Existing `.sln` solutions still open and save normally.
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
* **Convex hulls:** the library we use to generate convex hulls (V-HACD) was updated. This new version improves on speed and accuracy, but has a wildly different set of configurable parameters, so you may want to validate them for accuracy.
* **Bepu `CharacterController` was reworked:** existing character setups will behave differently and need adjustment. See [⚙️ Changes to the physics `CharacterComponent`](#-changes-to-the-physics-charactercomponent).
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
