# Stride 4.4 Release Notes

Stride 4.4 is one of the largest engine updates in years, with roughly **2,400 commits** since 4.3. The theme of this release is **modernization and reach**: a brand-new shader compiler, a real command-line workflow that no longer needs Game Studio, and tooling that now runs across **Windows, Linux, macOS, Android and iOS**.

> 📷 *[Hero image, e.g. a Stride scene rendered through the new shader pipeline]*

---

## ✨ Highlights

### 🎨 A brand-new SDSL shader compiler

The biggest change in 4.4 is a **complete, from-scratch rewrite of the SDSL shader compiler**, now built around a modern **SPIR-V**-centric pipeline.

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

*Huge thanks to **Youness Kafia** for driving the SDSL rewrite.*

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

Either way, templates scaffold a working multi-platform project (Windows / Linux / Android / iOS), wire up platform launchers, set orientation, and drop in a default Stride icon.

---

### 🐧 Truly cross-platform tooling

Stride's tooling is no longer Windows-only:

- The **asset compiler and the full engine build now run on Linux and macOS**.
- **macOS** gains a `net10.0-macos` runtime target (graphics run on **Vulkan via MoltenVK**), plus a new **AVFoundation** video backend and Celt/Opus audio decode.
- **Android and iOS** support has been revived and folded into the standard templates and build.

> 📷 *[Image: Stride building/running on a Linux desktop]*

---

### ⚡ NativeAOT- and trim-clean engine

The engine is now **NativeAOT- and trim-clean**: a full AOT publish completes with **0 errors**, and a dedicated **AOT test lane** guards it from regressing. This unlocks smaller, faster-starting, self-contained game builds.

---

## 🛠 Engine & Graphics

- **Vulkan & D3D12 are now in much better shape.** Both backends received a large overhaul and correctness/bug-fix pass this cycle: a rewritten **barrier/layout system** (explicit transitions across both APIs), pipeline-state cache and COM-pointer improvements, and **GPU-validation breadcrumbs** across all backends for far easier crash diagnosis. These are now solid enough that we expect to make a modern backend the **editor default** before long, and **Direct3D 11 is a candidate for removal in the next major release**.
- D3D12 now requires **Enhanced Barriers** (the legacy barrier path was removed).
- **Video subsystem rewrite:** the Windows Media Foundation backend was re-implemented on **CsWin32**; macOS gets the new AVFoundation backend.
- **Direct3D 11 hardening:** fixes for resource leaks, reference-counting/disposal bugs, several NREs, display-mode & adapter-output enumeration, and abandoned-query warnings.
- **Fonts:** upgraded to **FreeType 2.13**.
- **Importers / native libs:** **Assimp 6** via **Silk.NET 2.23**, with correct highest-version `libassimp` resolution on Linux/macOS.
- Better graphics debugging: resource debug names, D3D info-queue message processing, and an improved PIX interop helper.

> 📷 *[Image: editor with D3D12 or Vulkan?]*

---

## 📱 Platforms

Every non-Windows platform got the same treatment this cycle: **made fully working again** (re-implementing whatever had bit-rotted), then **locked down with automated GitHub CI unit tests** so it can't silently break again.

- **Android:** building and running again, with fixes across the texture library, the EditText/JNI activation crash, and assembly embedding / Fast Deploy.
- **iOS:** builds restored, platform defines applied correctly, orientation & `Info.plist` scaffolding via templates.
- **macOS:** `net10.0-macos` runtime, Vulkan via MoltenVK, AVFoundation video and audio.
- **Linux:** full runtime + tooling target.

Each now has its own CI lane running automated tests on every change.

![A Stride sample running on a physical iPhone](media/ReleaseNotes-4.4/ios.jpg)

---

## 🧰 Build, Tooling & Project System

- **Faster asset builds with the new `.sdbuild` manifest system.** The asset compiler now loads its session from lightweight `.sdbuild` manifests instead of walking the full MSBuild/csproj graph on every launch. Warm asset compiles drop by around **40%** for a typical game, and up to **10× faster** for Stride's own unit tests.
- **`.slnx` is the new default solution format** for projects created by Stride. Existing `.sln` solutions still open and save normally.
- **Parallel build** support and other warm-profile improvements further shorten iteration times.
- Many build warnings cleaned up; SourceLink, central-package-management and UWP edge cases fixed.

---

## 🧪 Quality & CI

This release brings by far the **most robust CI Stride has ever had**. Earlier versions only exercised a slice of platforms, so regressions on a less-common configuration could slip through unnoticed. Now **every change runs the entire test matrix** in a single pipeline — engine runtime builds, game tests, **Game Studio (editor) tests**, and **end-to-end sample/packaging builds**, across all platforms and graphics APIs, all the way down to a final gate:

![The CI pipeline: a single run building and testing every platform and graphics API (Windows D3D11/D3D12/Vulkan, Linux, macOS, Android, iOS), all green](media/ReleaseNotes-4.4/ci-run.png)

The practical upshot: breakage on any platform or backend is caught automatically before it can reach a release, so the engine is far harder to accidentally break and far more stable to build on.

- **GPU image-comparison test suites now run on CI across every platform**: Windows (Direct3D 11/12, WARP), Linux (Vulkan via SwiftShader/Lavapipe), macOS, Android and iOS, catching rendering regressions automatically wherever they appear.
- A **gold-image generation workflow** runs **directly on CI**, with cross-platform filtering and headless gold promotion. This is a big developer-experience win: contributors no longer have to regenerate reference images by hand on every platform (or wait for a long test session to fail before noticing) — golds for Windows, Linux, macOS, Android and iOS are produced on [the CI workflow](https://github.com/stride3d/stride/actions/workflows/test-gold-gen.yml) and promoted from there.
- Android CI, editor/Game Studio screenshot-test refactor, and a screenshot-exit-hang fix.
- New Core unit tests and tooling tests.

The new **CompareGold** review tool makes vetting these tests painless: run `dotnet run --project build/tools/Stride.CompareGold` to visually diff failing tests against their gold images and promote the ones you accept (see [GPU-TESTING.md](https://github.com/stride3d/stride/blob/master/tests/GPU-TESTING.md) for the full workflow).

![CompareGold reviewing image differences and promoting gold images](media/ReleaseNotes-4.4/compare-gold.png)

It can also pull artifacts **directly from any CI run** (including a fork's), so you can review and promote gold images produced on the build servers without leaving your machine:

![Adding a CI run in CompareGold to download its image artifacts](media/ReleaseNotes-4.4/compare-gold-2.png)

---

## 🐛 Notable Fixes

- **Game Studio** no longer hangs with the main window left disabled after a project upgrade.
- Fixed `EffectEvaluator` for nested composition arrays.
- Fixed `Plane.Negate`, several `Equals()`/`GetHashCode` NREs, and incorrect parameter-buffer size assertions.
- Fixed D3D12 swapchain creation and a range of D3D11 stability issues.
- Numerous shader-pipeline correctness fixes (access chains, decorations, tessellation, intrinsics, conversions).

---

## ⬆️ Upgrade Notes

- **.NET 10 SDK** is required to build the engine and games (same as 4.3).
- **Custom shaders:** the SDSL compiler was rewritten, so review and recompile custom `.sdsl`/`.sdfx` shaders; some non-standard constructs may need small fixes. If you hit a shader that no longer compiles or behaves differently, please [open an issue on GitHub](https://github.com/stride3d/stride/issues) so we can fix it.
- **Direct3D 12** now requires **Enhanced Barriers**; the legacy barrier path has been removed.
- The standalone **Launcher** workflow is superseded by the new **`stride` CLI**.

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
