# Glossary

- [Stride](https://www.stride3d.net/): A C# game engine for creating 2D/3D games and visualizations.
- [Stride Community Toolkit](https://stride3d.github.io/stride-community-toolkit/index.html): A collection of extensions and helpers for the Stride engine.
- [Code-Only](https://stride3d.github.io/stride-community-toolkit/manual/code-only/index.html): A feature of the toolkit that allows you to create a game without using the Game Studio.

## Animation terms

## Asset terms

## Audio terms

## Core terms

- [Delta Time](../../tutorials/csharpbeginner/delta-time.md): The time elapsed between frames, used for frame-independent movement.
- [Frame Rate](https://en.wikipedia.org/wiki/Frame_rate): The number of frames rendered per second, measured in frames per second (FPS).
- [GameTime](https://doc.stride3d.net/latest/en/api/Stride.Games.GameTime.html): A structure that provides time-related information for the game loop.
- [Vector3](https://doc.stride3d.net/latest/en/api/Stride.Core.Mathematics.Vector3.html): A 3D vector that represents a point or direction in 3D space.
 
## Editor terms

## General terms

- [Entity](https://doc.stride3d.net/latest/en/api/Stride.Engine.Entity.html): An object in the scene that can represent anything from a 3D model to a camera or light and aggregates multiple EntityComponents.
- [EntityComponent](https://doc.stride3d.net/latest/en/api/Stride.Engine.EntityComponent.html): A base component that defines the behavior or properties of an entity. Other components inherit from this class.
- [Game](https://doc.stride3d.net/latest/en/api/Stride.Engine.Game.html): A game refers to any interactive or visual project created using a game engine. This can range from traditional playable games to simulations, visualizations, or any real-time interactive experiences where users can interact with or observe elements within a scene.
- [Game Loop](https://en.wikipedia.org/wiki/Video_game_programming#Game_structure): The main loop that drives the game, updating the state and rendering the scene.
- [Scene](../game-studio/scenes.md): The container for entities, which defines the game world or environment.
- [Transform](../../tutorials/csharpbeginner/transform-position.md): Defines an entity's position, rotation, and scale in the scene.
 
## Graphics terms

- [3D Primitive](https://doc.stride3d.net/latest/en/api/Stride.Graphics.GeometricPrimitives.GeometricPrimitive.Cube.html): A basic 3D model, such as a capsule, cube, or sphere.
- [Camera](../graphics/cameras/index.md): A component that captures the scene from a point of view (perspective or orthographic).
- [Graphics Compositor](../graphics/graphics-compositor/index.md): Organizes how scenes are rendered, including cameras, render targets, and post effects.
- Procedural Model: A model built at runtime from generated meshes (e.g., via built-in geometric primitives or custom vertex/index buffers) rather than imported as an asset. See also: [Create a model from code](../scripts/create-a-model-from-code.md) and [Draw vertices](../graphics/low-level-api/draw-vertices.md).
- [Material](../graphics/materials/index.md): A visual property that defines how an entity is rendered, including color, texture, and shading.
- [Skybox](../graphics/textures/skyboxes-and-backgrounds.md): A background rendered using a cubemap or 360° panoramic texture to simulate distant surroundings.
 
## Lighting terms

## Performance terms

- [Profiler](../troubleshooting/profiling.md): A tool that monitors performance metrics like frames per second (FPS) and memory usage.

## Physics terms

- [BodyComponent](https://doc.stride3d.net/latest/en/api/Stride.BepuPhysics.BodyComponent.html): A physics component that allows an entity to respond to forces like gravity and collisions.
- [Bepu Physics](../physics/index.md): The preferred physics engine for Stride, providing advanced [Bepu physics](https://github.com/bepu/bepuphysics2) simulation capabilities. 
- [Collidable](../physics/colliders.md): A component that defines the shape of an entity for physical interactions.
- [Impulse](https://doc.stride3d.net/latest/en/api/Stride.BepuPhysics.BodyComponent.html#Stride_BepuPhysics_BodyComponent_ApplyImpulse_Stride_Core_Mathematics_Vector3_Stride_Core_Mathematics_Vector3_): An instantaneous change in momentum applied to a [rigid body](../physics/rigid-bodies.md).
- Movement
  - Physics-Based Movement: Moving entities using the physics engine to simulate realistic interactions.
  - Non-Physical Movement: Moving entities by directly changing their position without physics interactions.
- [Physics Engine](../physics/index.md): A system that simulates physical interactions between entities in the scene.

## Scripting terms

- [Camera Controller](../../tutorials/csharpintermediate/third-person-camera.md): A script that enables basic camera movement using keyboard and mouse inputs.
- [Update Method](../scripts/types-of-script.md#synchronous-scripts): A callback method that is called every frame to update the game state.

## UI terms