
# Xenko 1.10 release notes

## Highlights

Xenko 1.10β improves stability and performance and introduces changes in the asset serialization.

### Tool performance

This release comes packed with several performance improvements, especially in the Game Studio and Asset Compiler.

We've rewritten how assets are loaded in the scene editor, resulting in a faster and smoother loading in the background, as well as reduced memory usage.

We've made various improvements to the Asset Compiler startup time (important since we start multiple Asset Compilers to process FBX files). Also various key importers, such as the FBX importers, weren't scaling well with lots of polygons.

The Content Bundle packing (run at the end of the Asset Compiler) can now work incrementally. Before, if you had several gigabytes of data but only changed a small asset, compilation was fast but saving the new bundle took a long time at the end of the build. This operation should be almost instant now.

### Unique GUID inside an asset

While not a breaking change, we've introduced a new paradigm in our asset infrastructure, implying that any _identifiable_ object (ie any object that implements `IIdentifiable` interface) must have a unique identifier in the asset containing it.

This constraint makes it easier to handle internal references inside an asset. Since it wasn't enforced before, **the first time you open an existing project with version 1.10, you might see warnings stating that the identifiers of some objects have been rewritten** (especially entity components and scripts). This is expected and should be harmless. The warnings shouldn't appear the next time you open the project.

## Changelog

### Version 1.10.0-beta

Release date 2017/3/9

#### Enhancements

##### Animation

* The additive animation asset has been removed. Animation assets now support both regular and additive clips. Check the animation documentation for details
* You can now specify start and end frames for animation clips. The animation framerate can be changed in the Game Settings asset. Actual data is still saved and used in seconds
* PlayingAnimations is no longer visible in design time
* The API for the animation component has changed. See the documentation or create an AnimationStart pre-built script for a quick look
* Various bug fixes

##### General

* Content packaging in bundles is now incremental in Debug and Release. It drastically improves iteration time when making small changes then re-running a game with many or large assets. AppStore configuration will do a full rebuild
* Asset compilation should have better startup time and be faster when spawning sub-processes (used by FBX)
* FBX import for meshes with lots of triangles was extremely slow due to unoptimized access to edge data
* FBX asset compilation would sometimes fail because the data limit on WCF was too low
* Removed unecessary hashing of assemblies when building assets
* Assets (YAML) now supports multiline strings properly

##### Game Studio

* In the Scene and Prefab editors, asset loading is now async, much faster, and more memory-friendly
* You can now right-click a prefab instance and select "Select prefab in asset view"
* Improved keyboard navigation in tree views (eg solution explorer, scene hierarchy): left arrow goes to parent node, right arrow goes to first child (when on a node)
* Nodes of the entity tree in the scene/prefab editors automatically expand when children are added

##### Graphics

* Improved SetViewport (which has a separate count from render target count)
* Added SetScissorRectangle (note: viewport and scissors only work well for first viewport) [#521](https://github.com/SiliconStudio/xenko/issues/521)
* Vulkan: SwapChain clearing wasn't passing validation layer
* Forward+ light culling wasn't working well if projection matrix was off-center (ie VR)
* RenderDocPlugin assembly lets you automatically load RenderDoc and capture inside editor (using /RenderDoc flag) or game
* Cluster lighting wasn't working on OpenGL and OpenGL ES due to unimplemented `UpdateSubresource` for 3D textures

##### Navigation

* Debug overlay inside of the Game Studio is now slightly transparent

##### Particles

* ShapeBuilder API has been updated. Custom shape builder implementations have to be upgraded accordingly

#### Bugs fixed

##### General

* C# "fixed" arrays didn't work due to IL changes
* Connection Router sometimes couldn't restart properly due to adb child process keeping the parent process port open

##### Game Studio

* When importing an effect log, it often ended up in the wrong package. It's now created in the currently active package
* Keyboard input often got stuck in the Game Studio (especially annoying when moving)
* Script editor often crashed on saving or creation. Several related issues fixed
* Mouse cursor could disappear during drag-and-drop operations [#385](https://github.com/SiliconStudio/xenko/issues/385) and [#546](https://github.com/SiliconStudio/xenko/issues/546)
* Changing the layout type in the UI editor could make Game Studio crash [#547](https://github.com/SiliconStudio/xenko/issues/547)
* Fix several issues related to folders in Scene and Prefab editors (renaming, copy/paste, undo/redo)
* Fix a rare crash with the clipboard when another application is using it
* Fix a crash that could occur when removing an item from certain types of collections
* Fix input of Windows device name (CON, NUL, COM1) as folder names
 
##### Assets

* Assets that contain multiple identifiable objects with the same `Id` now go through a fixup pass at load to re-generate unique ids
* Make sure we generate new Ids for such objects after manipulations such as copy/pasting, duplicating, etc
* When a property of an asset was overridden (from the archetype or from a prefab) to a value equivalent to the default value of the property, the override information was lost after reloading
* The deserialization of some types from an asset file could fail due to impropert type and assembly resolving
* Animations wouldn't import when the skeleton used for the animation had missing or extra bones
* Some texture compression pairs which failed before now attempt a two-step conversion to create the target output format
* FBX importer now ignores empty string names during mesh importing
* Several crash issues fixed in the Assimp importer
* SDF fonts and msdfgen have been upgraded to handle overlapping contours

##### Graphics

* Material culling wasn't applied properly
* Multi Render Target info wasn't kept when doing multithread rendering with multiple command lists
* Ambient lighting didn't update after the last Ambient Light had been removed from the scene
* Fix possible shadow map hole between cascades, at specific viewing angles when using blending

##### Navigation

* TryFindPath would return a valid path even if the starting and ending point weren't connected

### Version 1.10.1-beta

Release date 2017/3/13

#### Bugs fixed

##### Game Studio

* Fix a concurrency problem that could make the Game Studio crash while loading or updating assets in the Scene Editor

### Version 1.10.2-beta

Release date 2017/3/14

#### Bugs fixed

##### Game Studio

* Fix additional concurrency problems that could make the Game Studio crash while loading or updating assets in the Scene Editor
