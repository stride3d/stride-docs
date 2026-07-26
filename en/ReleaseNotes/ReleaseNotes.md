# Stride 4.4 release notes

Stride 4.4 is one of the largest engine updates in years, with roughly **2,400 commits** since 4.3.

The theme of this release is **modernization and reach**: much more stable **Vulkan and Direct3D 12** backends,
full platform coverage across **Windows, Linux, macOS, Android and iOS** (all continuously tested on CI),
an improved shader compiler, and a command-line workflow as an alternative to the Game Studio.

## ✨ Highlights

### 📱 Platforms & Cross-Platform

Stride 4.4 widens both where you can *build* games and where they *run*.

**Build anywhere:** with changes to the asset compiler, projects can now be built on **Linux and macOS**, not just Windows.

**Run everywhere:** non-Windows platforms were brought back into shape, while the test suite for them was expanded to ensure they are kept that way.

![A Stride sample running on a physical iPhone](media/ReleaseNotes-4.4/ios.jpg)

### ⌨️ A command-line workflow: the `stride` CLI + `dotnet new` templates

You can now create, build and run Stride games entirely from the command line, with no Game Studio install required.

| Command                                       | Purpose                                                                                        |
|-----------------------------------------------|------------------------------------------------------------------------------------------------|
| `stride new`                                  | instantiate a project from installed templates in this directory (`stride new list` to browse) |
| `stride build` / `stride asset`               | build the project and compile assets                                                           |
| `stride upgrade`                              | upgrade a project to a newer Stride version                                                    |
| `stride studio`                               | launch the Game Studio associated with the Stride version you use for this project             |
| `stride sdk install` / `uninstall` / `update` | manage installed Stride versions                                                               |
| `stride self update`                          | update the CLI itself                                                                          |
| `stride version`                              | print the CLI's version, as well as the Stride version for this project                        |

You'll need to install the Stride CLI through `dotnet tool` if you want to use this new feature:

```bash
dotnet tool install -g stride.cli                 # install the Stride CLI
stride sdk install                                # install the latest Stride
stride new topdownrpg && cd TopDownRPG            # create a project from a template
stride studio                                     # open it in Game Studio
```

`dotnet new` templates are also available as a lightweight fallback if you'd rather use the standard .NET tooling directly:

```bash
dotnet new install Stride.Templates
dotnet new stride-game -n MyGame
```

### 🎮 Vulkan & Direct3D 12

Both backends got a big **overhaul and stability pass** this cycle and are in much better shape.
They're now solid enough that we expect to make a modern backend the editor default before long,
and **Direct3D 11 is a candidate for removal in the next major release**.
GPU crashes are also far easier to track down: Stride can now pinpoint the exact rendering step that caused a device hang.

If you write custom low-level rendering code,
note that D3D12 and Vulkan now use an **explicit barrier/layout model** (and D3D12 requires **Enhanced Barriers** — the legacy path was removed).

You can also pick the graphics API right from the UI now.
Game Studio itself can render with a chosen backend via **Settings → Environment → Graphics API (Game Studio only)** — this takes effect after a restart:

![Choosing the Game Studio graphics API in Settings → Environment](media/ReleaseNotes-4.4/gamestudio-graphics-api-selector.png)

And each Windows game project can select its own **Graphics API** from the package build settings in the property grid:

![Selecting a Windows project's graphics API from the property grid](media/ReleaseNotes-4.4/game-graphics-api-selector.png)

### 🎨 A brand-new SDSL shader compiler

The biggest *internal* change in 4.4 is a **complete rewrite of the SDSL shader compiler**, now built around a modern **SPIR-V**-centric pipeline.

Instead of parsing and stitching shaders together as text, Stride now works in **SPIR-V bytecode** end to end:

- Each `.sdsl` shader is parsed **once** and compiled into its own **SPIR-S** module (SPIR-Stride, Stride's extended SPIR-V dialect).
- Effects (`.sdfx`) then **mix and compose** those modules **directly as bytecode**, lowering the result to standard **SPIR-V** for the GPU backend.
- Crucially, text parsing happens **only at that first step**: recombining a new shader variation from already-compiled SPIR-S needs no re-parsing.

What this means for you:

- **Much faster shader handling.** Generating the many shader permutations a real game needs no longer touches a text parser; variations are recombined straight from cached bytecode.
- **Built on mature, standard tooling.** **Vulkan** consumes the SPIR-V natively, while **Direct3D 11/12** and **Metal** reuse **SPIRV-Cross** (to HLSL/MSL), battle-tested components instead of a bespoke translator.
- **Far better support for advanced features.** Direct3D 12 and Vulkan now handle things like **tessellation and compute shaders** much more reliably.
- **A future-proof foundation.** With a real SPIR-V pipeline in place, adding modern GPU features such as **ray tracing, mesh shaders/meshlets and wave intrinsics** becomes much easier going forward.

> [!Warning]
> Because the entire shader compiler was replaced, custom `.sdsl` shaders may need minor adjustments to compile cleanly. If you maintain shaders, give them a pass on 4.4. See *Upgrade Notes* below.

![The new SDSL shader pipeline: many .sdsl shaders are parsed once into per-shader SPIR-S bytecode, .sdfx effects mix and compose them into standard SPIR-V, which feeds Vulkan natively and Direct3D and Metal via SPIRV-Cross](media/ReleaseNotes-4.4/sdsl-pipeline.svg)

*Huge thanks to **[Youness Kafia](https://github.com/ykafia)**, whose early prototyping and experimentation laid the foundation for the new SDSL pipeline.*

### ⚡ NativeAOT & Trimming Support

The engine is now **NativeAOT and trimming-friendly**. This unlocks smaller, faster-starting, self-contained game builds.

## 🛠 Engine & Graphics

- **Video subsystem rewrite:** a fresh Windows Media Foundation backend, plus a new AVFoundation backend on macOS.
- **Direct3D 11 stability & correctness fixes.**
- **Fonts:** upgraded to **FreeType 2.13**.
- **Model importing:** upgraded to **Assimp 6**.

## 🧰 Build, Tooling & Project System

- **Much faster asset builds.** Warm asset compiles drop by around **40%** for a typical game, and up to **10×** for Stride's own tests, thanks to a new asset-build cache.
- **`.slnx` is the new default solution format** for projects created by Stride. Existing `.sln` solutions still open and save normally.
- **Per-package asset URLs & namespacing.** Assets now live under a rooted, per-package path (e.g. `/MyGame/UI/Title`), so plugins and libraries can ship assets without name collisions. Games stay bare by default and opt in via `StrideAssetNamespace`, so existing projects keep working unchanged.
- **Typed asset URL constants.** Projects now generate an `Assets` class of strongly-typed constants (e.g. `Assets.Scenes.MainScene`), so you can reference content by an IDE-completed symbol instead of a magic string. Renames then become compile errors instead of a runtime "content not found".

## 🧪 Quality & CI

*Mostly under the hood — but it directly changes how confidently you can contribute back to the engine.*

Stride 4.4's test suite has been greatly expanded. Where earlier versions only exercised a slice of platforms,
**every change now runs the entire test matrix** in one pipeline — engine builds, game and Game Studio tests,
and end-to-end sample/packaging builds, across all platforms and graphics APIs,
including **GPU image-comparison tests** (Windows D3D11/12, Linux Vulkan, macOS, Android, iOS):

![The CI pipeline: a single run building and testing every platform and graphics API (Windows D3D11/D3D12/Vulkan, Linux, macOS, Android, iOS), all green](media/ReleaseNotes-4.4/ci-run.png)

Breakage on any platform or backend is now caught automatically before it reaches a release.
For contributors, that's the real win: you can open a pull request and **trust CI to prove it works everywhere**,
instead of testing each platform by hand — which makes contributing a feature back to the engine far less daunting.

A **gold-image generation workflow** runs **directly on CI**, so you no longer have to regenerate reference images by hand on every platform.
Golds are produced and promoted straight from [the CI workflow](https://github.com/stride3d/stride/actions/workflows/test-gold-gen.yml).

The new **CompareGold** tool makes reviewing these tests painless — visually diff failures against their gold images,
promote the ones you accept, and even pull results **directly from any CI run** or fork (see [GPU-TESTING.md](https://github.com/stride3d/stride/blob/master/tests/GPU-TESTING.md)).

![CompareGold reviewing image differences and promoting gold images](media/ReleaseNotes-4.4/compare-gold.png)

## ⚙️ Physics Character

While our integration of the Bepu physics engine is definitely mature enough by now,
the `CharacterComponent` we introduced was not as well put together as it ought to have been.

- The gravity you may set would be mutated internally to prevent the body from sliding down slopes.
- Moving surfaces would not carry the character along with them.
- Moving past a slope would cause the character to fly off.
- Forces applied to bodies, and especially constraints, required unintuitive tweaks to work.

We looked at Bepu's own character example to solve these issues; unfortunately, we could not avoid introducing a fair amount of breaking changes.
Fortunately, we added a couple of sections in [Characters](../manual/physics/characters.md) to describe the new features and properties.

## 💥 Breaking changes

- **Custom shaders:** the SDSL compiler was rewritten; you might want to review how your custom shaders render. If you hit a shader that no longer compiles or behaves differently, please [open an issue on GitHub](https://github.com/stride3d/stride/issues) so we can fix it.
- **Direct3D 12** now requires **Enhanced Barriers**; the legacy barrier path has been removed.
- **Convex hulls**: The library we use to generate convex hulls, V-HACD, was updated. This new version improves on speed and accuracy, but has a wildly different set of configurable parameters; you may want to validate them for accuracy.
- **Bepu `CharacterController` was reworked**: existing character setups will behave differently and need adjustment. See [Physics Character](#-physics-character).

## 🙏 Contributors

Thanks to everyone who contributed to Stride 4.4:

- [Acissathar](https://github.com/Acissathar)
- [allcontributors[bot]](https://github.com/apps/allcontributors)
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

Welcome new contributors:

- @JeroMiya made their first contribution in https://github.com/stride3d/stride/pull/3022
- @D4rkDuck made their first contribution in https://github.com/stride3d/stride/pull/3011
- @ds5678 made their first contribution in https://github.com/stride3d/stride/pull/3075
- @rafzi made their first contribution in https://github.com/stride3d/stride/pull/3087
- @MsEpsilon made their first contribution in https://github.com/stride3d/stride/pull/3098
- @Redwarx008 made their first contribution in https://github.com/stride3d/stride/pull/3093
- @kjnorris1205 made their first contribution in https://github.com/stride3d/stride/pull/3118
- @luca-domenichini made their first contribution in https://github.com/stride3d/stride/pull/3089
- @steveberdy made their first contribution in https://github.com/stride3d/stride/pull/3079
- @Henr1k80 made their first contribution in https://github.com/stride3d/stride/pull/3156

..and everyone who reported issues, tested builds and helped on the community channels. 💙
