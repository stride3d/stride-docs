# Tutorial: Script a trigger

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

In this tutorial, we'll create a [trigger](triggers.md) that doubles the size of a ball when the ball passes through it.

>[!Note]
>The screenshots and videos in this tutorial were made using an earlier version of Stride, so some parts of the UI, and the default skybox and sphere, might look different from your version.

## 1. Create a bouncing ball

Follow the instructions in the [Create a bouncing ball](create-a-bouncing-ball.md) tutorial. This creates a simple scene in which a ball falls from midair, hits the ground, and bounces.

## 2. Add a trigger 

Now we'll add a trigger between the ball and the ground, so the ball passes through it.

1. In the **Scene Editor**, click the white plus button (**Create new entity**) and select **Empty entity**.

    ![Create new entity](media/physics-tutorials-create-a-trigger-add-new-entity.png)

    Game Studio adds an entity to the scene with the default name **Entity**.

2. This entity will be our trigger, so rename it *Trigger* to make it easy to identify.

3. Since we don't need the trigger to move, we'll make it a [Static Component](static-colliders.md). In the **Property Grid**, click **Add component** and select **Static component**.

    ![Add Static collider component](media/add-static-component.png)

4. In the **Property Grid**, expand the **Static Component** to view its properties.

5. We need to give the trigger a shape. Next to **Colliders**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Box**.

   ![Add collider shape](media/compound-types.png)

   This gives the trigger a box shape.

## 3. Give the trigger a model

Right now, the trigger is invisible at runtime. To better show how the trigger works, we'll make it a transparent box. This has no effect on how the trigger works; it just means we can easily see where it is at runtime.

1. Create a new procedural model asset. To do this, in the **Asset View**, click **Add asset**, and select **Models > Cube**.

    ![Add a model asset](media/physics-tutorials-create-a-trigger-add-a-model.png)

2. Create a new empty material asset. To do this, in the **Asset View**, click **Add asset**, and select **Materials > Material**.

    ![Add a material asset](media/physics-tutorials-create-a-trigger-add-a-material-asset.png)

3. Let's rename the material to make it easy to identify. To do this, right-click, select **Rename**, and type a new name (eg *Transparent*).

4. Select the **Trigger** entity. In the **Property Grid**, click **Add component** and select **Model**.

    ![Add a model component](media/physics-tutorials-create-a-trigger-add-a-model-component.png)

    Game Studio adds a model component to the entity.

5. Under **Model**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    ![Pick an asset up](media/physics-tutorials-pick-an-asset-up.png)

6. Select the **Cube** model we created in step 1 and click **OK**.

    ![Select Cube model](media/physics-tutorials-select-cube-model.png)

7. In the **Property Grid**, under **Model > Materials**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    ![Select material](media/physics-tutorials-material-asset-picker.png)

8. Select the **Transparent** material we created in step 2 and click **OK**.

    ![Select material](media/physics-tutorials-select-transparent-material.png)

9. In the **Asset View**, select the **Transparent** material asset.

    ![Select material in Asset View](media/physics-tutorials-select-material-asset.png)

10. In the **Property Grid**, under **Misc > Transparency**, select **Blend**.

    ![Select Blend](media/physics-tutorials-set-blend.png)

11. By default, the Alpha is set to 1. This makes the material completely opaque. To set it to 50% opacity, set the **Alpha** to 0.5.

    ![Select Blend](media/physics-tutorials-set-blend-alpha.png)

    Now the trigger area will be visible at runtime.

## 4. Position the trigger 

We need to position the trigger between the ground and the sphere, so the ball falls through it.
    
In the **Property Grid**, under **Transform**, set the **Position** to: *X:0, Y:3, Z:0*

Now the trigger entity is between the ground and the sphere.

## 5. Change the sphere size with script

If we run the project now (**F5**), the ball bounces off the trigger, but nothing happens.

<div class="ratio ratio-16x9 mb-3">
<video autoplay loop class="responsive-video">
   <source src="media/bouncing-ball-with-trigger-no-effect.mp4" type="video/mp4">
</video>
</div>

Let's write a script to change the size of the ball when it enters the trigger.

>[!Note]
>For more information about scripts, see [Scripts](../scripts/index.md).

1. In the **Asset View**, click **Add asset** and select **Scripts** > **Sync Script**.

2. In the **Create a script** dialog, name your script *Trigger* and click **Create script**.

    2a. If Game Studio asks if you want to save your script, click **Save**.
    
    2b. If Game Studio asks if you want to reload the assemblies, click **Reload**.

3. Open the script, replace its content with the following code, and save the file:

   ```cs
   using Stride.BepuPhysics;
   using Stride.BepuPhysics.Definitions.Contacts;
   using Stride.Core.Mathematics;
   using Stride.Engine;
   
   namespace TransformTrigger
   {
       // Adding IContactHandler to listen to contact events
       public class Trigger : SyncScript, IContactHandler 
       {
           public override void Start()
           {
               // Initialization of the script.
           }
   
           public override void Update()
           {
               // Do stuff every new frame
           }
   
           // Let objects pass through this trigger, false would make objects bounce off it
           public bool NoContactResponse => true;
   
           void IContactHandler.OnStartedTouching<TManifold>(Contacts<TManifold> contacts)
           {
               // When something enters inside this object
               contacts.Other.Entity.Transform.Scale = new Vector3(2.0f);
           }
   
           void IContactHandler.OnStoppedTouching<TManifold>(Contacts<TManifold> contacts)
           {
               // When something exits this object
               contacts.Other.Entity.Transform.Scale = new Vector3(1.0f);
           }
       }
   }
   ```

   This code doubles the size (scale) of any entity that enters the trigger. When the entity exits the trigger, it is set to a unit size.

4. Reload the assemblies.

## 6. Add the script

Finally, let's add this script to the trigger entity as a component.

1. In **Game Studio**, select the **Trigger** entity.

2. In the **Property Grid**, click **Add component** and select the **Trigger** script.

    ![Add script component to entity](media/physics-tutorials-create-a-trigger-add-script-component-to-entity.png)

3. Inside your **Static Component** click on the hand icon next to the `Contact Event Handler` property

   ![Set contact handler](media/physics-tutorials-create-a-trigger-set-handler.png)

4. Select your newly created `Trigger` component and press `Ok`

   ![Set contact handler](media/physics-tutorials-create-a-trigger-select-handler-component.png)

## 7. Run the project

Run the project (**F5**) to see the trigger in action.

The ball falls through the trigger, doubles in size, exits the trigger, and returns to its normal size.

<div class="ratio ratio-16x9 mb-3">
<video autoplay loop class="responsive-video">
   <source src="media/bouncing-ball-with-trigger-scaled.mp4" type="video/mp4">
</video>
</div>

## See also

* [Tutorial: Create a bouncing ball](create-a-bouncing-ball.md)
* [Colliders](colliders.md)
* [Collider shapes](collider-shapes.md)
* [Scripts](../scripts/index.md)
