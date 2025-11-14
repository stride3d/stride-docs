# Create a bouncing ball

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

In this tutorial, we'll use the [static and body components](colliders.md) to create a ball bouncing on a floor.

## 1. Create a new project

Start a **New Game** project.

The default scene comes pre-loaded with five entities: Camera, Directional light, Skybox, Ground, and Sphere. We're going to add physics components to the **Ground** and **Sphere** entities.

## 2. Add a Static Component
   
Let's begin by adding a [static collider](static-colliders.md) component to the Ground entity. A static component is a physics object that doesn't move. Typical static component are walls, floors, large rocks, and so on. In this case, the static component will give the ball something to bounce on.

1. Select the **Ground** entity.

2. In the **Property Grid**, click **Add component** and select **Static Collider**.

    ![Add Static collider component](media/add-static-component.png)

3. Set the [collider shape](collider-shapes.md) to match the shape of the entity. To do this, in the **Property Grid**, expand the **Static Component** to view its properties.

4. Next to **Colliders**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Box Collider**.

    ![Add Static collider component](media/compound-types.png)

    This adds a static collider to the ground, so the ball has something to bounce off.

5. Set the `Size` property to `X: 10, Y: 0.1, Z: 10` to create a flat plane from this box

## 3. Add a Body Component

Next, we'll add a [body](rigid-bodies.md) component to the sphere. A body is a physics object that moves — perfect for our bouncing ball.

1. In the **Scene Editor**, select the **Sphere** entity.

2. In the **Property Grid**, click **Add component** and select **Rigidbody**.

    ![Add Static collider component](media/add-body-component.png)

3. Just like we did for the Ground entity, set the [collider shape](collider-shapes.md) to match the entity. To do this, in the **Property Grid**, expand the **Body Component** to view its properties.

4. Next to **Colliders**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Sphere**.

     ![Add Static collider component](media/compound-types.png)

## 4. Position the ball

Let's position the sphere so it starts in midair and falls to the ground.

1. Select the **Sphere** entity. 

2. In the **Property Grid**, under **Transform**, set the **Position** to: `X: 0, Y: 6, Z: 0`

    This places the ball in midair above the ground.

## 5. Position the camera

Now we'll move the camera to give us a good view of the scene. 

1. Select the **Camera** entity. 

2. In the **Property Grid**, under **Transform**, set the **Position** to: `X: 11, Y: 3, Z: -4`

    You can see preview the camera view in the **Camera preview** in the bottom-right of the Scene Editor.

    ![Camera preview](media/physics-tutorials-camera-preview.png)

## 6. Set the restitution

Let's see what the scene looks like so far. To run the project, press **F5**.

<div class="ratio ratio-16x9 mb-3">
<video autoplay loop class="responsive-video">
   <source src="media/physics-tutorials-create-a-bouncing-ball-falling-ball.mp4" type="video/mp4">
</video>
</div>

The Sphere (body) responds to gravity and falls. The Ground (static collider) breaks its fall. But there's no bounce effect yet.

To create a bounce effect, we need to change the `Spring Frequency` and `Spring Daming Ratio` of the Sphere.

> [!NOTE]
> Bepu internally uses speculative contacts which does not play well with traditional coefficient of restitution. Instead, bounces can be implemented through contact constraint springiness, this specificity mean that bounces actually take place over multiple simulation steps instead of on contact. This may be counter-intuitive for users accustomed to other engine's restitution-based bounciness.

* Bounciness is dominated by `Spring Damping Ratio`; setting it to zero minimizes energy loss on impact.
* Increasing `Spring Frequency` can make impacts less bouncy when. This happens because the integration rate becomes too slow to represent the motion, and it gets damped away. Increasing the substepping rate or using more timesteps preserves bounciness with higher frequencies.

Let's set the `Spring Frequency` and `Spring Damping Ratio` of the Sphere.

1. Select the **Sphere** entity.

2. In the **Property Grid**, under **Body**, set the `Spring Frequency` to 3 and `Spring Damping Ratio` to 0.

To see how this changes the physics, run the project again (**F5**). This time, the ball bounces on the ground before coming to a stop:

<div class="ratio ratio-16x9 mb-3">
<video autoplay loop class="responsive-video">
   <source src="media/physics-tutorials-create-a-bouncing-ball-falling-and-bouncing-ball.mp4" type="video/mp4">
</video>
</div>

Now that we've created a bouncing ball, we can use it to learn to [Script a trigger](script-a-trigger.md).

## See also

* [Colliders](colliders.md)
* [Collider shape](collider-shapes.md)
* [Tutorial: Script a trigger](script-a-trigger.md)