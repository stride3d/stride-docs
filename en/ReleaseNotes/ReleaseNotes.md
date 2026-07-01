# Stride 4.4 Release Notes

Stride 4.4 is one of the largest engine updates in years, with roughly **2,400 commits** since 4.3. The theme of this release is **modernization and reach**: much stronger **Vulkan and Direct3D 12** backends, full platform coverage across **Windows, Linux, macOS, Android and iOS** (all continuously tested on CI), a from-scratch shader compiler, and a real command-line workflow that no longer needs Game Studio.

> 📷 *[Hero image, e.g. a Stride scene rendered through the new shader pipeline]*

---

## ✨ Highlights

### 📱 Platforms & cross-platform

Stride 4.4 dramatically widens both where you can **build** games and where they **run**.

**Build anywhere:** the asset compiler and the full engine build now run on **Linux and macOS**, not just Windows.

**Run everywhere:** each target was brought back into shape (re-implementing whatever had bit-rotted) and locked down with **per-platform CI**, so it can't silently break again:

- **Windows** — Direct3D 11/12 and Vulkan.
- **Linux** — full runtime + tooling.
- **macOS** — `net10.0-macos` runtime, Vulkan via MoltenVK, AVFoundation video and audio.
- **Android** — building and running reliably again after a round of fixes.
- **iOS** — builds restored, with platform defines and orientation handled correctly.

![A Stride sample running on a physical iPhone](media/ReleaseNotes-4.4/ios.jpg)

---

### ⌨️ A real command-line workflow: the `stride` CLI + `dotnet new` templates

You can now **create, build and run Stride games entirely from the command line**, with no Game Studio install required.

**The new `stride` dotnet tool** bundles a full project lifecycle into a single, scriptable, CI-friendly command that effectively replaces the old Launcher:

| Command | Purpose |
|---|---|
| `stride new` | scaffold a project from installed templates (`stride new list` to browse) |
| `stride build` / `stride asset` | build the project and compile assets |
| `stride upgrade` | upgrade a project to a newer Stride version |
| `stride studio` | launch Game Studio for the resolved version |
| `stride sdk install` / `uninstall` / `update` | manage installed Stride versions |
| `stride self update` | update the CLI itself |
| `stride version` | report resolved versions |

```bash
dotnet tool install -g stride.cli --version 1.0.0 # install the Stride CLI
stride sdk install                                # install the latest Stride
stride new topdownrpg && cd TopDownRPG            # create a project from a template
stride studio                                     # open it in Game Studio
```

**`dotnet new` templates** are also available as a lightweight fallback if you'd rather use the standard .NET tooling directly:

```bash
dotnet new install Stride.Templates
dotnet new stride-game -o MyGame
```

---

### 🎮 Vulkan & Direct3D 12

Both backends got a big **overhaul and stability pass** this cycle and are in much better shape. They're now solid enough that we expect to make a modern backend the **editor default** before long, and **Direct3D 11 is a candidate for removal in the next major release**. GPU crashes are also far easier to track down: Stride can now pinpoint the exact rendering step that caused a device hang.

If you write custom low-level rendering code, note that D3D12 and Vulkan now use an **explicit barrier/layout model** (and D3D12 requires **Enhanced Barriers** — the legacy path was removed).

You can also pick the graphics API right from the UI now. Game Studio itself can render with a chosen backend via **Settings → Environment → Graphics API (Game Studio only)** — this takes effect after a restart:

![Choosing the Game Studio graphics API in Settings → Environment](media/ReleaseNotes-4.4/gamestudio-graphics-api-selector.png)

And each Windows game project can select its own **Graphics API** from the package build settings in the property grid:

![Selecting a Windows project's graphics API from the property grid](media/ReleaseNotes-4.4/game-graphics-api-selector.png)

---

### 🎨 A brand-new SDSL shader compiler

The biggest *internal* change in 4.4 is a **complete, from-scratch rewrite of the SDSL shader compiler**, now built around a modern **SPIR-V**-centric pipeline.

Instead of parsing and stitching shaders together as text, Stride now works in **SPIR-V bytecode** end to end:

- Each `.sdsl` shader is parsed **once** and compiled into its own **SPIR-S** module (SPIR-Stride, Stride's extended SPIR-V dialect).
- Effects (`.sdfx`) then **mix and compose** those modules **directly as bytecode**, lowering the result to standard **SPIR-V** for the GPU backend.
- Crucially, text parsing happens **only at that first step**: recombining a new shader variation from already-compiled SPIR-S needs no re-parsing.

What this means for you:

- **Much faster shader handling.** Generating the many shader permutations a real game needs no longer touches a text parser; variations are recombined straight from cached bytecode.
- **Built on mature, standard tooling.** **Vulkan** consumes the SPIR-V natively, while **Direct3D 11/12** and **Metal** reuse **SPIRV-Cross** (to HLSL/MSL), battle-tested components instead of a bespoke translator.
- **Far better support for advanced features.** Direct3D 12 and Vulkan now handle things like **tessellation and compute shaders** much more reliably.
- **A future-proof foundation.** With a real SPIR-V pipeline in place, adding modern GPU features such as **ray tracing, mesh shaders/meshlets and wave intrinsics** becomes much easier going forward.

> ⚠️ **Heads-up:** Because the entire shader compiler was replaced, custom `.sdsl` shaders may need minor adjustments to compile cleanly. If you maintain shaders, give them a pass on 4.4. See *Upgrade Notes* below.

![The new SDSL shader pipeline: many .sdsl shaders are parsed once into per-shader SPIR-S bytecode, .sdfx effects mix and compose them into standard SPIR-V, which feeds Vulkan natively and Direct3D and Metal via SPIRV-Cross](media/ReleaseNotes-4.4/sdsl-pipeline.svg)

*Huge thanks to **Youness Kafia**, whose early prototyping and experimentation laid the foundation for the new SDSL pipeline.*

---

### ⚡ NativeAOT- and trim-clean engine

The engine is now **NativeAOT- and trimming-friendly**: a full AOT publish completes with **0 errors**. This unlocks smaller, faster-starting, self-contained game builds.

---

## 🛠 Engine & Graphics

- **Video subsystem rewrite:** a fresh Windows Media Foundation backend, plus a new AVFoundation backend on macOS.
- **Direct3D 11 stability & correctness fixes.**
- **Fonts:** upgraded to **FreeType 2.13**.
- **Model importing:** upgraded to **Assimp 6**.

---

## 🧰 Build, Tooling & Project System

- **Much faster asset builds.** Warm asset compiles drop by around **40%** for a typical game, and up to **10×** for Stride's own tests, thanks to a new asset-build cache.
- **`.slnx` is the new default solution format** for projects created by Stride. Existing `.sln` solutions still open and save normally.

---

## 🧪 Quality & CI

*Mostly under the hood — but it directly changes how confidently you can contribute back to the engine.*

Stride 4.4 has by far the **most robust CI the project has ever had**. Where earlier versions only exercised a slice of platforms, **every change now runs the entire test matrix** in one pipeline — engine builds, game and Game Studio tests, and end-to-end sample/packaging builds, across all platforms and graphics APIs, including **GPU image-comparison tests** (Windows D3D11/12, Linux Vulkan, macOS, Android, iOS):

![The CI pipeline: a single run building and testing every platform and graphics API (Windows D3D11/D3D12/Vulkan, Linux, macOS, Android, iOS), all green](media/ReleaseNotes-4.4/ci-run.png)

Breakage on any platform or backend is now caught automatically before it reaches a release. For contributors that's the real win: you can open a pull request and **trust CI to prove it works everywhere**, instead of testing each platform by hand — which makes contributing a feature back to the engine far less daunting.

A **gold-image generation workflow** runs **directly on CI**, so you no longer have to regenerate reference images by hand on every platform (or wait for a long test run to fail before noticing) — golds are produced and promoted straight from [the CI workflow](https://github.com/stride3d/stride/actions/workflows/test-gold-gen.yml).

The new **CompareGold** tool makes reviewing these tests painless — visually diff failures against their gold images, promote the ones you accept, and even pull results **directly from any CI run** or fork (see [GPU-TESTING.md](https://github.com/stride3d/stride/blob/master/tests/GPU-TESTING.md)).

![CompareGold reviewing image differences and promoting gold images](media/ReleaseNotes-4.4/compare-gold.png)

---

## 🐛 Notable Fixes

- **Game Studio** no longer hangs with the main window left disabled after a project upgrade.
- Fixed `EffectEvaluator` for nested composition arrays.
- Fixed `Plane.Negate` and several null-reference and internal calculation bugs.
- Fixed D3D12 swapchain creation and a range of D3D11 stability issues.
- Numerous shader-compiler correctness fixes.

---

## ⬆️ Upgrade Notes

- **.NET 10 SDK** is required to build the engine and games (same as 4.3).
- The standalone **Launcher** workflow is superseded by the new **`stride` CLI**.

### Breaking changes

- **Custom shaders:** the SDSL compiler was rewritten, so review and recompile custom `.sdsl`/`.sdfx` shaders; some non-standard constructs may need small fixes. If you hit a shader that no longer compiles or behaves differently, please [open an issue on GitHub](https://github.com/stride3d/stride/issues) so we can fix it.
- **Direct3D 12** now requires **Enhanced Barriers**; the legacy barrier path has been removed.
- **`Stride.Core.Serialization` no longer depends on MicroThreading** ([#3169](https://github.com/stride3d/stride/pull/3169)): code that relied on this transitive reference must now reference the MicroThreading assembly directly. <!-- TODO: confirm the exact types/namespaces affected and the migration steps. -->
- **Bepu `CharacterController` was reworked on top of Bepu's own controller** ([#3195](https://github.com/stride3d/stride/pull/3195)): existing character setups may behave differently and need adjustment. <!-- TODO: describe the behavior/API changes and the migration steps. -->
- **Bepu convex hull behavior changed**: existing convex hull colliders may need review. <!-- TODO: describe what changed and any migration needed. -->


---

## 🙏 Contributors

Thanks to everyone who contributed to Stride 4.4:

- Youness Kafia (ykafia)
- Nicolas Musset (Kryptos-FR / Color-Rise)
- Mario Guerra
- Johan Gustafsson
- Eideren
- Vaclav Elias
- Virgile Bello (xen2)
- Jakub Ławreszuk
- Feralnex (Tomasz Czech)
- Nicogo (Nicolas Gomez)
- Doprez
- ds5678
- w0wca7a
- Basewq
- D4rkDuck
- Elias Holzer
- Peter Laske
- Will Bentz
- Henrik Gedionsen
- Kevin Norris
- Luca Domenichini
- MiyaGrace
- MsEpsilon
- Rafael Stahl
- Redwarx008
- Steve Berdy

…and everyone who reported issues, tested builds and helped on the community channels. 💙
