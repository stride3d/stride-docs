# Transform

The [transform component](xref:Stride.Engine.TransformComponent) exists on every entity in Stride. It defines the position, rotation and scale of an entity in the world relative to it's parent.

## Local and world

An entity's transform is **relative to it's parent**. This means that the parent transform creates a sort of isolated world for it's children.

For example: if two entities are 1m apart from each other and the parent's scale is set to 20, those entities will in reality be spaced 20m from each other.

TODO: VISUALIZATION

We refer to that spacing relative to their parent, as **local-space**, while the "real world" result as **world-space**.

Typically, we work with values from the **local-space**, but sometimes, if we need to access entities nested in other entities, we use their **world** values.
