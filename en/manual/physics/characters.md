# Character

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

**Characters** are used for player and NPC movement. Entities with [character components](xref:Stride.BepuPhysics.CharacterComponent) can be moved with [Move](xref:Stride.BepuPhysics.CharacterComponent.Move\(Stride.Core.Mathematics.Vector3\)), [TryJump](xref:Stride.BepuPhysics.CharacterComponent.TryJump), and teleported by setting its [Position](xref:Stride.BepuPhysics.BodyComponent.Position) property.

## Add a Character Component to an Entity

1. In the **Scene Editor**, select the entity you want to add the component to.

2. In the **Property Grid**, click `Add component`, hover `Physics - Bepu` and select `CharacterComponent`.

    ![Add character component](media/add-character-component.png)

> [!Note]
> You will need to set a collider for this newly created character, you can do so through the Collider property. The capsule shape is appropriate for most character colliders. For more information, see [collider shapes](collider-shapes.md).

> [!WARNING]
> Never use mesh colliders for characters, use them only for statics, they are far too slow to be used as characters. If you absolutely need a more complex shape than the primitive ones, use a convex hull instead, see [collider shapes](collider-shapes.md).

Have a look at the [API](xref:Stride.BepuPhysics.CharacterComponent) for more detail on the properties of this component.

## Custom Character Controllers

When creating a controller, it is recommended to create a new class inheriting from this component instead of using it as is, you can access its internal state and override it with your own logic to better fit your game.

```cs
using Stride.BepuPhysics;
using Stride.Core.Mathematics;

public class MyCharacterController : CharacterComponent
{
    public override void Move(Vector3 direction)
    {
        base.Move(direction);
    }

    public override void TryJump()
    {
        base.TryJump();
    }

    public override void SimulationUpdate(BepuSimulation sim, float simTimeStep)
    {
        base.SimulationUpdate(sim, simTimeStep);
    }

    public override void AfterSimulationUpdate(BepuSimulation sim, float simTimeStep)
    {
        base.AfterSimulationUpdate(sim, simTimeStep);
    }
}
```

## Simple Character controller

```cs
using Stride.BepuPhysics;
using Stride.Core;
using Stride.Core.Mathematics;
using Stride.Engine;
using Stride.Engine.FlexibleProcessing;
using Stride.Games;
using Stride.Input;
using System.Collections.Generic;

namespace MyGameUsingBepuPhysics
{
    public class CharacterControllerComponent : CharacterComponent, IComponent<CharacterControllerComponent.UpdateCaller, CharacterControllerComponent>
    {
        public Entity? CameraPivot { get; set; }
        public float MinCameraAngle { get; set; } = -90;
        public float MaxCameraAngle { get; set; } = 90;

        private Vector3 _cameraAngle;
        private UpdateCaller _processor = null!;

        private void Update()
        {
            if (_processor.Inputs.IsKeyPressed(Keys.Tab))
            {
                _processor.Game.IsMouseVisible = !_processor.Game.IsMouseVisible;
                if (_processor.Game.IsMouseVisible)
                    _processor.Inputs.UnlockMousePosition();
                else
                    _processor.Inputs.LockMousePosition(true);
            }

            Move();
            Rotate();
            if (_processor.Inputs.IsKeyPressed(Keys.Space))
                TryJump();
        }

        public override void SimulationUpdate(BepuSimulation simulation, float simTimeStep)
        {
            Orientation = Quaternion.RotationY(_cameraAngle.Y); // Do it before physics tick to ensure it is interpolated properly
            base.SimulationUpdate(simulation, simTimeStep);
        }

        private void Move()
        {
            // Keyboard movement
            var moveDirection = Vector2.Zero;
            if (_processor.Inputs.IsKeyDown(Keys.W) || _processor.Inputs.IsKeyDown(Keys.Z))
                moveDirection.Y += 1;
            if (_processor.Inputs.IsKeyDown(Keys.S))
                moveDirection.Y -= 1;
            if (_processor.Inputs.IsKeyDown(Keys.A) || _processor.Inputs.IsKeyDown(Keys.Q))
                moveDirection.X -= 1;
            if (_processor.Inputs.IsKeyDown(Keys.D))
                moveDirection.X += 1;

            var velocity = new Vector3(moveDirection.X, 0, -moveDirection.Y);
            velocity.Normalize();

            velocity = Vector3.Transform(velocity, Entity.Transform.Rotation);

            if (_processor.Inputs.IsKeyDown(Keys.LeftShift))
                velocity *= 2f;

            Move(velocity);
        }

        private void Rotate()
        {
            var delta = _processor.Inputs.Mouse.Delta;

            _cameraAngle.X -= delta.Y;
            _cameraAngle.Y -= delta.X;
            _cameraAngle.X = MathUtil.Clamp(_cameraAngle.X, MinCameraAngle, MaxCameraAngle);

            Entity.Transform.Rotation = Quaternion.RotationY(_cameraAngle.Y);
            if (CameraPivot != null)
            {
                CameraPivot.Transform.Rotation = Quaternion.RotationX(_cameraAngle.X);
            }
        }

        private class UpdateCaller : IComponent<UpdateCaller, CharacterControllerComponent>.IProcessor, IUpdateProcessor
        {
            private List<CharacterControllerComponent> Components = new();

            public InputManager Inputs;
            public IGame Game;

            public int Order { get; }

            public void SystemAdded(IServiceRegistry registryParam)
            {
                Inputs = registryParam.GetService<InputManager>();
                Game = registryParam.GetService<IGame>();
                Inputs.LockMousePosition(true);
                Game.IsMouseVisible = false;
            }
            public void SystemRemoved() { }

            public void OnComponentAdded(CharacterControllerComponent item)
            {
                Components.Add(item);
                item._processor = this;
            }

            public void OnComponentRemoved(CharacterControllerComponent item)
            {
                Components.Remove(item);
                item._processor = null!;
            }

            public void Update(GameTime gameTime)
            {
                foreach (var comp in Components)
                    comp.Update();
            }
        }
    }
}

```

## See also

* [Statics](static-colliders.md)
* [Bodies](rigid-bodies.md)
* [Collider shapes](collider-shapes.md)