# Glossary

- [Stride](https://www.stride3d.net/): A C# game engine for creating 2D/3D games and visualizations.
- [Stride Community Toolkit](https://stride3d.github.io/stride-community-toolkit/index.html): A collection of extensions and helpers for the Stride engine.
- [Code-Only](https://stride3d.github.io/stride-community-toolkit/manual/code-only/index.html): A feature of the toolkit that allows you to create a game without using the Game Studio.

## Animation terms

- [Additive animation](../animation/additive-animation.md): Blends an animation additively onto a base pose.
- [Animation](../animation/index.md): Moving or changing values of objects over time, typically applied to models, lights, or component properties.
- [Animation clip](../animation/index.md): A timeline containing curves and keyframes that animate values over a defined duration.
- [Animation curve](../animation/animation-properties.md): A function describing how a value changes over time; composed of keyframes and an interpolation mode.
- [Blend tree](../animation/animation-scripts.md): Logic that blends multiple animations based on parameters.
- [Custom blend trees](../animation/custom-blend-trees.md): Complex blending graphs that combine multiple clips.
- [Import animations](../animation/import-animations.md): Bring animations from DCC tools into Stride.
- [Keyframe](../animation/animation-properties.md): A time/value sample on a curve.
- [Model node links](../animation/model-node-links.md): Link animation channels to specific nodes in a model.
- [Preview animations](../animation/preview-animations.md): Inspect and debug clips in the editor.
- [Procedural animation](../animation/procedural-animation.md): Animation generated at runtime via code rather than authored keyframes.
- [Set up animations](../animation/set-up-animations.md): Assign clips and configure animation components.
- [Skeleton / rig](../animation/index.md): A hierarchy of bones used to pose and animate skinned models.

## Asset terms

- [Archetype](../game-studio/archetypes.md): A template for asset properties that other assets can inherit from.
- [Asset](../game-studio/assets.md): Content used by the game (models, textures, materials, scripts, etc.) managed by the asset pipeline.
- Asset URL: The path used in code to load an asset, for example with `Content.Load<T>("MyFolder/MyAsset")`. See [Create a model from code](../scripts/create-a-model-from-code.md) and [Create a script](../scripts/create-a-script.md).
- [Asset bundles](../engine/assets/asset-bundles.md): Groups of assets packaged for deployment/streaming.
- [Asset control](../engine/assets/asset-control.md): Control asset loading, references, and lifetime.
- [Build pipeline](../engine/build-pipeline.md): Compiles assets into runtime-ready formats.
- [Prefab](../game-studio/prefabs/index.md): A reusable entity hierarchy that can be instantiated at design time or runtime.
- Root asset: An asset included in the build so it is available at runtime. See [Manage assets](../game-studio/manage-assets.md).

## Audio terms

- [Audio emitter](../audio/audio-emitters.md): A component that plays sounds in 3D space.
- [Audio listener](../audio/audio-listeners.md): Represents the listener position/orientation used for spatial audio.
- [Doppler effect](../audio/play-a-range-within-an-audio-file.md): Pitch shift proportional to relative velocity between emitter and listener.
- [Global audio settings](../audio/global-audio-settings.md): Project-wide audio configuration.
- [Non-spatialized audio](../audio/non-spatialized-audio.md): 2D audio that does not attenuate with distance.
- [Spatialized audio](../audio/spatialized-audio.md): Audio that changes with distance and direction; can use [HRTF](../audio/hrtf.md) for realism.
- [Stream audio](../audio/stream-audio.md): Play long audio from disk instead of preloading.

## Core terms

- [Delta Time](../../tutorials/csharpbeginner/delta-time.md): The time elapsed between frames, used for frame-independent movement.
- [Frame rate](https://en.wikipedia.org/wiki/Frame_rate): The number of frames rendered per second (FPS).
- [GameTime](https://doc.stride3d.net/latest/en/api/Stride.Games.GameTime.html): Time information passed to the game loop.
- [Vector3](https://doc.stride3d.net/latest/en/api/Stride.Core.Mathematics.Vector3.html): A 3D vector representing a point or direction.
 
## Editor terms

- [Add entities](../game-studio/add-entities.md): Create new entities in a scene.
- [Archetypes](../game-studio/archetypes.md): Share default properties across assets.
- [Asset View](../game-studio/assets.md): Panel used to manage assets in your project.
- [Create assets](../game-studio/create-assets.md): Create and organize project assets.
- [Game settings](../game-studio/game-settings.md): Project-wide defaults such as the graphics compositor and rendering options.
- [Graphics compositor editor](../graphics/graphics-compositor/index.md): Node-based editor to configure the rendering pipeline.
- [Manage entities](../game-studio/manage-entities.md): Select, group, and organize entities.
- [Manage scenes](../game-studio/manage-scenes.md): Open, set defaults, and load/unload scenes.
- [Navigate the Scene Editor](../game-studio/navigate-in-the-scene-editor.md): Viewport navigation and controls.
- [Property Grid](../game-studio/index.md): Panel used to view and edit properties of selected entities/components.
- [Scene Editor](../game-studio/scenes.md): The 3D/2D viewport for arranging entities in a scene.
- [Splash screen](../game-studio/splash-screen.md): Configure startup visuals.
- [Use assets](../game-studio/use-assets.md): Reference and place assets in scenes.
- [World units](../game-studio/world-units.md): Scene scale conventions (unit size, conversions).

## General terms

- [ECS (Entity Component System)](../engine/entity-component-system/index.md): The architecture where entities host components and systems process them.
- [Entity](../engine/entity-component-system/index.md): An object in the scene that can represent anything from a 3D model to a camera or light and aggregates multiple components.
- [Entity component](../engine/entity-component-system/index.md): A piece of data/behavior attached to an entity (for example Transform, Model, Light).
- [Game](https://doc.stride3d.net/latest/en/api/Stride.Engine.Game.html): A Stride application or interactive experience running the game loop.
- [Game loop](https://en.wikipedia.org/wiki/Video_game_programming#Game_structure): The main loop that updates and renders the game each frame.
- [Scene](../game-studio/scenes.md): The container for entities, defining the game world or environment.
- [Transform](../../tutorials/csharpbeginner/transform-position.md): Defines an entity's position, rotation, and scale in the scene.
 
## Graphics terms

- [3D primitive](https://doc.stride3d.net/latest/en/api/Stride.Graphics.GeometricPrimitives.GeometricPrimitive.Cube.html): A basic geometric mesh such as a cube, sphere, or cylinder.
- [Camera](../graphics/cameras/index.md): Captures the scene from a perspective or orthographic view.
- [Camera slot](../graphics/cameras/camera-slots.md): Binds scene cameras to the graphics compositor.
- [Debug renderers](../graphics/graphics-compositor/debug-renderers.md): On-screen debug drawings (lines, shapes, labels).
- [Effects and shaders](../graphics/effects-and-shaders/index.md): Shader authoring and customization for rendering.
- [Graphics compositor](../graphics/graphics-compositor/index.md): Organizes how scenes are rendered, including cameras, render targets, and post effects.
- [Material](../graphics/materials/index.md): Defines how a surface is shaded (color, textures, and lighting response).
- [Mesh](../graphics/low-level-api/draw-vertices.md): Geometry to render, defined by vertex and optionally index buffers.
- [Model](../scripts/create-a-model-from-code.md): A container of one or more meshes and a list of materials.
- [Pipeline state](../graphics/low-level-api/pipeline-state.md): Input layout, primitive type, shaders, and states used for a draw.
- [Post effects](../graphics/post-effects/index.md): Image effects (bloom, color grading, etc.) applied after scene rendering.
- Procedural Model: A model built at runtime from generated meshes (e.g., via built-in geometric primitives or custom vertex/index buffers) rather than imported as an asset. See also [Create a model from code](../scripts/create-a-model-from-code.md) and [Draw vertices](../graphics/low-level-api/draw-vertices.md).
- [Render groups and masks](../graphics/graphics-compositor/render-groups-and-masks.md): Filter which objects render in each pass.
- [Render texture](../graphics/graphics-compositor/render-textures.md): A texture that receives the output of a camera or rendering pass.
- [Resource binding](../graphics/low-level-api/resources.md): Bind textures/buffers and constants to shaders.
- [Scene renderers](../graphics/graphics-compositor/scene-renderers.md): Components that draw the scene (for example forward renderer, debug renderer).
- [Skybox](../graphics/textures/skyboxes-and-backgrounds.md): A background using a cubemap or 360° panorama to simulate distant surroundings.
- [SpriteBatch](../graphics/low-level-api/spritebatch.md): Batched 2D drawing of sprites.
- [SpriteFont](../graphics/low-level-api/spritefont.md): Fonts for drawing text in 2D/3D with SpriteBatch.
- [Vertex buffer / index buffer / primitive type](../graphics/low-level-api/draw-vertices.md): Low-level geometry data and topology used to render meshes.

### Post-effect terms

- [Ambient occlusion](../graphics/post-effects/ambient-occlusion.md): Screen-space occlusion to enhance contact shadows.
- [Anti-aliasing](../graphics/post-effects/anti-aliasing.md): Techniques to smooth jagged edges.
- [Bloom](../graphics/post-effects/bloom.md): Glow effect from bright areas.
- [Bright filter](../graphics/post-effects/bright-filter.md): Extract bright regions for bloom/compositing.
- [Depth of field](../graphics/post-effects/depth-of-field.md): Simulates camera focus blur.
- [Lens flare](../graphics/post-effects/lens-flare.md): Light artifacts caused by bright sources.
- [Light streaks](../graphics/post-effects/light-streaks.md): Streaking effect from bright lights.
- [Local reflections](../graphics/post-effects/local-reflections.md): Screen-space reflections for shiny surfaces.
- [Tone mapping](../graphics/post-effects/color-transforms/tonemap.md): Map HDR values to displayable range.

## Input terms

- [Gamepads](../input/gamepads.md): Controller input support and mapping.
- [Gestures](../input/gestures.md): Touch gesture detection.
- [Keyboards](../input/keyboards.md): Keyboard input handling.
- [Mouse](../input/mouse.md): Mouse input handling.
- [Pointers](../input/pointers.md): Unified pointer input across devices.
- [Sensors](../input/sensors.md): Device sensors like accelerometers and gyroscopes.
- [Virtual buttons](../input/virtual-buttons.md): Map multiple physical inputs to actions.

## Lighting terms

- [Ambient light](../graphics/lights-and-shadows/ambient-lights.md): Uniform lighting applied across the scene.
- [Directional light](../graphics/lights-and-shadows/directional-lights.md): Light from a distant source with parallel rays (e.g., sunlight).
- [Light probes](../graphics/lights-and-shadows/light-probes.md): Sampled lighting information used for indirect lighting.
- [Point light](../graphics/lights-and-shadows/point-lights.md): Light that radiates from a point in all directions.
- [Shadows](../graphics/lights-and-shadows/shadows.md): Techniques to render occlusion from lights.
- [Skybox light](../graphics/lights-and-shadows/skybox-lights.md): Image-based lighting derived from a skybox.
- [Spot light](../graphics/lights-and-shadows/spot-lights.md): Light that radiates within a cone.
- [Voxel cone tracing GI](../graphics/lights-and-shadows/voxel-cone-tracing-gi.md): Real-time global illumination technique.

## Navigation terms

- [Dynamic navigation](../navigation/dynamic-navigation.md): Runtime updates to navigation data.
- [Navigation bounding boxes](../navigation/navigation-bounding-boxes.md): Volumes defining navigation constraints.
- [Navigation components](../navigation/navigation-components.md): Components that enable navigation behaviors.
- [Navigation groups](../navigation/navigation-groups.md): Layers/groups to partition navigation.
- [Navigation meshes](../navigation/navigation-meshes.md): Walkable areas computed from scene geometry.

## Particles terms

- [Emitters](../particles/emitters.md): Particle sources that spawn particles over time.
- [Initializers](../particles/initializers.md): Set initial particle properties when spawned.
- [Materials (particles)](../particles/materials.md): Materials used for rendering particles.
- [Ribbons and trails](../particles/ribbons-and-trails.md): Ribbon/trail rendering driven by particles.
- [Shapes](../particles/shapes.md): Spawn shapes for emitters (sphere, cone, box, etc.).
- [Spawners](../particles/spawners.md): Control particle spawn rates and bursts.
- [Updaters](../particles/updaters.md): Modify particle properties over their lifetime.

## Performance terms

- [Profiler](../troubleshooting/profiling.md): A tool that monitors performance metrics like frames per second (FPS) and memory usage.

## Physics terms

- [Bepu Physics](../physics/index.md): The preferred physics engine for Stride, providing advanced [Bepu physics](https://github.com/bepu/bepuphysics2) simulation capabilities.
- [BodyComponent](https://doc.stride3d.net/latest/en/api/Stride.BepuPhysics.BodyComponent.html): The runtime component for dynamic bodies (API reference).
- [Character](../physics/characters.md): Specialized collider and controller for player or NPC movement.
- [Collidable](../physics/colliders.md): Base component category for physics objects (statics, bodies, characters).
- [Collider shapes](../physics/collider-shapes.md): Primitive and complex shapes that define collision bounds.
- [Collision layers and groups](../physics/colliders.md): Settings that filter which objects can collide with each other.
- [Constraints](../physics/constraints.md): Joints and limits connecting physics objects.
- [Impulse](https://doc.stride3d.net/latest/en/api/Stride.BepuPhysics.BodyComponent.html#Stride_BepuPhysics_BodyComponent_ApplyImpulse_Stride_Core_Mathematics_Vector3_Stride_Core_Mathematics_Vector3_): An instantaneous change in momentum applied to a [rigid body](../physics/rigid-bodies.md).
- [Kinematic body](../physics/kinematic-rigid-bodies.md): Animated or code-driven colliders that affect others but are not affected by forces.
- Movement
  - Non-physical movement: Moving entities by directly changing their position without physics interactions.
  - Physics-based movement: Moving entities using the physics engine to simulate realistic interactions.
- [Physics engine](../physics/index.md): Simulates physical interactions between entities in the scene.
- [Physics queries](../physics/raycasting.md): Raycasts and overlaps to test collisions.
- [Physics update](../physics/physics-update.md): Fixed timestep and update order considerations.
- [Rigid body](../physics/rigid-bodies.md): Dynamic colliders affected by forces (gravity, collisions).
- [Static](../physics/static-colliders.md): Non-moving colliders (terrain, walls) that other objects collide with.
- [Trigger](../physics/triggers.md): A collider that raises events when other objects overlap without blocking them.

## Scripting terms

- [Asynchronous script](../scripts/types-of-script.md): Runs a task-like Execute method; can await operations and return to the main thread with `await Script.NextFrame()`.
- [Best practices](../scripts/best-practice.md): Recommended coding patterns for Stride projects.
- [Camera controller](../../tutorials/csharpintermediate/third-person-camera.md): A script enabling camera movement using input.
- [Content.Load<T>](../scripts/create-a-model-from-code.md): Load assets at runtime via the content system.
- [Debugging](../scripts/debugging.md): Inspect and troubleshoot scripts at runtime.
- [Entity.GetOrCreate<T>](../scripts/create-a-model-from-code.md): Retrieve or add a component to the entity.
- [Events](../scripts/events.md): Script event patterns (subscribe, raise, handle).
- [Gizmos](../scripts/gizmos.md): Draw editor helpers for custom components.
- [Preprocessor variables](../scripts/preprocessor-variables.md): Conditional compilation for scripts.
- [Public properties and fields](../scripts/public-properties-and-fields.md): Expose script fields to the editor.
- [SceneSystem.SceneInstance.RootScene](../scripts/create-a-model-from-code.md): Access the active scene instance.
- [Scheduling and priorities](../scripts/scheduling-and-priorities.md): Control script execution order and timing.
- [Startup script](../scripts/types-of-script.md): Runs when added/removed at runtime; used to initialize or tear down game elements.
- [Synchronous script](../scripts/types-of-script.md): Has an Update method that runs every frame on the main thread.
- [Update method](../scripts/types-of-script.md#synchronous-scripts): A callback that runs every frame to update game logic.

## Sprites terms

- [Nine-slice (sprite borders)](../sprites/set-sprite-borders.md): Scalable UI frames using sprite borders.
- [Sprite](../sprites/use-sprites.md): A 2D image used in UI or scenes.
- [Sprite sheet](../sprites/import-sprite-sheets.md): Texture atlas containing multiple sprites.

## UI terms

- [Add a UI to a scene](../ui/add-a-ui-to-a-scene.md): How to display UI in your scene.
- [Layout system](../ui/layout-system.md): Mechanism that arranges UI elements (stack panels, grids, anchors).
- [UI editor](../ui/ui-editor.md): Tooling to author and preview UI within Game Studio.
- [UI libraries](../ui/ui-libraries.md): Reusable sets of UI controls and styles.
- [UI pages](../ui/ui-pages.md): Screens composed of UI elements.

## Virtual reality terms

- [Enable VR](../virtual-reality/enable-vr.md): Enable VR support for your project.
- [Overlays](../virtual-reality/overlays.md): Display UI or HUDs in VR using overlays.
- [Preview a scene in VR](../virtual-reality/preview-a-scene-in-vr.md): Test your scene with a VR headset.