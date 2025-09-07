# Glossary

- [Stride](https://www.stride3d.net/): A C# game engine for creating 2D/3D games and visualizations.
- [Stride Community Toolkit](https://stride3d.github.io/stride-community-toolkit/index.html): A collection of extensions and helpers for the Stride engine.
- [Code-Only](https://stride3d.github.io/stride-community-toolkit/manual/code-only/index.html): A feature of the toolkit that allows you to create a game without using the Game Studio.

## Animation terms

- [Animation](../animation/index.md): Moving or changing values of objects over time, typically applied to models, lights, or component properties.
- [Animation clip](../animation/index.md): A timeline containing curves and keyframes that animate values over a defined duration.
- [Animation curve](../animation/animation-properties.md): A function describing how a value changes over time; composed of keyframes and an interpolation mode.
- [Keyframe](../animation/animation-properties.md): A time/value sample on a curve.
- [Skeleton / rig](../animation/index.md): A hierarchy of bones used to pose and animate skinned models.
- [Blend tree](../animation/animation-scripts.md): Logic that blends multiple animations based on parameters.
- [Procedural animation](../animation/procedural-animation.md): Animation generated at runtime via code rather than authored keyframes.

## Asset terms

- [Asset](../game-studio/assets.md): Content used by the game (models, textures, materials, scripts, etc.) managed by the asset pipeline.
- Asset URL: The path used in code to load an asset, for example with `Content.Load<T>("MyFolder/MyAsset")`. See [Create a model from code](../scripts/create-a-model-from-code.md) and [Create a script](../scripts/create-a-script.md).
- Root asset: An asset included in the build so it is available at runtime. See [Manage assets](../game-studio/manage-assets.md).
- [Prefab](../game-studio/prefabs/index.md): A reusable entity hierarchy that can be instantiated at design time or runtime.
- [Archetype](../game-studio/archetypes.md): A template for asset properties that other assets can inherit from.

## Audio terms

- [Audio emitter](../audio/audio-emitters.md): A component that plays sounds in 3D space.
- [Audio listener](../audio/audio-listeners.md): Represents the listener position/orientation used for spatial audio.
- [Spatialized audio](../audio/spatialized-audio.md): Audio that changes with distance and direction; can use [HRTF](../audio/hrtf.md) for realism.
- Doppler effect: Pitch shift proportional to relative velocity between emitter and listener. See [Play a range within an audio file](../audio/play-a-range-within-an-audio-file.md).

## Core terms

- [Delta Time](../../tutorials/csharpbeginner/delta-time.md): The time elapsed between frames, used for frame-independent movement.
- [Frame rate](https://en.wikipedia.org/wiki/Frame_rate): The number of frames rendered per second (FPS).
- [GameTime](https://doc.stride3d.net/latest/en/api/Stride.Games.GameTime.html): Time information passed to the game loop.
- [Vector3](https://doc.stride3d.net/latest/en/api/Stride.Core.Mathematics.Vector3.html): A 3D vector representing a point or direction.
 
## Editor terms

- Scene Editor: The 3D/2D viewport for arranging entities in a scene. See [Scenes](../game-studio/scenes.md).
- Property Grid: Panel used to view and edit properties of selected entities/components. See [Game Studio](../game-studio/index.md).
- Asset View: Panel used to manage assets in your project. See [Assets](../game-studio/assets.md).
- [Game settings](../game-studio/game-settings.md): Project-wide defaults such as the graphics compositor and rendering options.
- [Graphics compositor editor](../graphics/graphics-compositor/index.md): Node-based editor to configure the rendering pipeline.

## General terms

- [Entity](../engine/entity-component-system/index.md): An object in the scene that can represent anything from a 3D model to a camera or light and aggregates multiple components.
- [Entity component](../engine/entity-component-system/index.md): A piece of data/behavior attached to an entity (for example Transform, Model, Light).
- [Game](https://doc.stride3d.net/latest/en/api/Stride.Engine.Game.html): A Stride application or interactive experience running the game loop.
- [Game loop](https://en.wikipedia.org/wiki/Video_game_programming#Game_structure): The main loop that updates and renders the game each frame.
- [Scene](../game-studio/scenes.md): The container for entities, defining the game world or environment.
- [Transform](../../tutorials/csharpbeginner/transform-position.md): Defines an entity's position, rotation, and scale in the scene.
 
## Graphics terms

- [3D primitive](https://doc.stride3d.net/latest/en/api/Stride.Graphics.GeometricPrimitives.GeometricPrimitive.Cube.html): A basic geometric mesh such as a cube, sphere, or cylinder.
- [Camera](../graphics/cameras/index.md): Captures the scene from a perspective or orthographic view.
- [Graphics compositor](../graphics/graphics-compositor/index.md): Organizes how scenes are rendered, including cameras, render targets, and post effects.
- Procedural Model: A model built at runtime from generated meshes (e.g., via built-in geometric primitives or custom vertex/index buffers) rather than imported as an asset. See also [Create a model from code](../scripts/create-a-model-from-code.md) and [Draw vertices](../graphics/low-level-api/draw-vertices.md).
- [Model](../scripts/create-a-model-from-code.md): A container of one or more meshes and a list of materials.
- [Mesh](../graphics/low-level-api/draw-vertices.md): Geometry to render, defined by vertex and optionally index buffers.
- Vertex buffer / index buffer / primitive type: Low-level geometry data and topology used to render meshes. See [Draw vertices](../graphics/low-level-api/draw-vertices.md).
- [Render texture](../graphics/graphics-compositor/render-textures.md): A texture that receives the output of a camera or rendering pass.
- [Post effects](../graphics/post-effects/index.md): Image effects (bloom, color grading, etc.) applied after scene rendering.
- [Camera slot](../graphics/cameras/camera-slots.md): Binds scene cameras to the graphics compositor.
- [Scene renderers](../graphics/graphics-compositor/scene-renderers.md): Components that draw the scene (for example forward renderer, debug renderer).
- [Material](../graphics/materials/index.md): Defines how a surface is shaded (color, textures, and lighting response).
- [Skybox](../graphics/textures/skyboxes-and-backgrounds.md): A background using a cubemap or 360° panorama to simulate distant surroundings.
 
## Lighting terms

- [Directional light](../graphics/lights-and-shadows/directional-lights.md): Light from a distant source with parallel rays (e.g., sunlight).
- [Point light](../graphics/lights-and-shadows/point-lights.md): Light that radiates from a point in all directions.
- [Spot light](../graphics/lights-and-shadows/spot-lights.md): Light that radiates within a cone.
- [Ambient light](../graphics/lights-and-shadows/ambient-lights.md): Uniform lighting applied across the scene.
- [Shadows](../graphics/lights-and-shadows/shadows.md): Techniques to render occlusion from lights.
- [Light probes](../graphics/lights-and-shadows/light-probes.md): Sampled lighting information used for indirect lighting.
- [Skybox light](../graphics/lights-and-shadows/skybox-lights.md): Image-based lighting derived from a skybox.
- [Voxel cone tracing GI](../graphics/lights-and-shadows/voxel-cone-tracing-gi.md): Real-time global illumination technique.

## Performance terms

- [Profiler](../troubleshooting/profiling.md): A tool that monitors performance metrics like frames per second (FPS) and memory usage.

## Physics terms

- [Physics engine](../physics/index.md): Simulates physical interactions between entities in the scene.
- [Collidable](../physics/colliders.md): Base component category for physics objects (statics, bodies, characters).
- [Static](../physics/static-colliders.md): Non-moving colliders (terrain, walls) that other objects collide with.
- [Rigid body](../physics/rigid-bodies.md): Dynamic colliders affected by forces (gravity, collisions).
- [Kinematic body](../physics/kinematic-rigid-bodies.md): Animated or code-driven colliders that affect others but are not affected by forces.
- [Character](../physics/characters.md): Specialized collider and controller for player or NPC movement.
- [Collider shapes](../physics/collider-shapes.md): Primitive and complex shapes that define collision bounds.
- [Collision layers and groups](../physics/colliders.md): Settings that filter which objects can collide with each other.
- [Trigger](../physics/triggers.md): A collider that raises events when other objects overlap without blocking them.
- [BodyComponent](https://doc.stride3d.net/latest/en/api/Stride.BepuPhysics.BodyComponent.html): The runtime component for dynamic bodies (API reference).
- [Bepu Physics](../physics/index.md): The preferred physics engine for Stride, providing advanced [Bepu physics](https://github.com/bepu/bepuphysics2) simulation capabilities.
- [Impulse](https://doc.stride3d.net/latest/en/api/Stride.BepuPhysics.BodyComponent.html#Stride_BepuPhysics_BodyComponent_ApplyImpulse_Stride_Core_Mathematics_Vector3_Stride_Core_Mathematics_Vector3_): An instantaneous change in momentum applied to a [rigid body](../physics/rigid-bodies.md).
- Movement
  - Physics-based movement: Moving entities using the physics engine to simulate realistic interactions.
  - Non-physical movement: Moving entities by directly changing their position without physics interactions.

## Scripting terms

- [Startup script](../scripts/types-of-script.md): Runs when added/removed at runtime; used to initialize or tear down game elements.
- [Synchronous script](../scripts/types-of-script.md): Has an Update method that runs every frame on the main thread.
- [Asynchronous script](../scripts/types-of-script.md): Runs a task-like Execute method; can await operations and return to the main thread with `await Script.NextFrame()`.
- [Update method](../scripts/types-of-script.md#synchronous-scripts): A callback that runs every frame to update game logic.
- Content.Load<T>: Loads assets at runtime via the content system. See [Create a model from code](../scripts/create-a-model-from-code.md).
- Entity.GetOrCreate<T>: Retrieves or adds a component to the entity. See [Create a model from code](../scripts/create-a-model-from-code.md).
- SceneSystem.SceneInstance.RootScene: Access point to the active scene. See [Create a model from code](../scripts/create-a-model-from-code.md).
- Camera controller: A script enabling camera movement using input. See tutorial [Third-person camera](../../tutorials/csharpintermediate/third-person-camera.md).

## UI terms

- [UI pages](../ui/ui-pages.md): Screens composed of UI elements.
- [UI editor](../ui/ui-editor.md): Tooling to author and preview UI within Game Studio.
- [Layout system](../ui/layout-system.md): Mechanism that arranges UI elements (stack panels, grids, anchors).
- [UI libraries](../ui/ui-libraries.md): Reusable sets of UI controls and styles.
- [Add a UI to a scene](../ui/add-a-ui-to-a-scene.md): How to display UI in your scene.