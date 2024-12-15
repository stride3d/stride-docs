# Body

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

**Body** move based on physical forces applied to them, such as gravity and collisions. Typical (rigid)bodies are boxes, balls, furniture, and so on — objects that can be pushed, pulled, and knocked around, and also have effects on other bodies they collide with.

![Static and rigidbody colliders](media/rigid-bodies-static-and-rigid-body-colliders.png)

## Add a Body Component to an entity

1. In the **Scene Editor**, select the entity you want to add the component to.

2. In the **Property Grid**, click `Add component`, hover `Physics - Bepu` and select `BodyComponent`.

    ![Add body component](media/add-body-component.png)

> [!Note]
> You will need to set a collider for this newly created body, you can do so through the Collider property, see [collider shapes](collider-shapes.md).

> [!WARNING]
> Never use mesh colliders for bodies, use them only for statics, they are far too slow to be used as bodies. If you absolutely need a more complex shape than the primitive ones, use a convex hull instead, see [collider shapes](collider-shapes.md).

Have a look at the [API](xref:Stride.BepuPhysics.BodyComponent) for more detail on the properties of this component.

## See also

* [Kinematic rigidbodies](kinematic-rigid-bodies.md)
* [Statics](static-colliders.md)
* [Characters](characters.md)
* [Collider shapes](collider-shapes.md)
* [Triggers](triggers.md)