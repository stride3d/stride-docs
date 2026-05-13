# Components

Every entity has a list of **components** that define what the entity is, how it looks and how it behaves.

## Create a new component

Stride allows you to create your own components by making your own scripts. For more information, visit [Scripts](../../scripts/index.md).

## Add a component in Game Studio

## Add a component in code

To add a component, use `Entity.Add`.

```csharp
var component = new MyComponent();
Entity.Add(component);
```

## Get a component in code

If you need to get ahold of a component in an entity, you can get it with `Entity.Get<T>` or `Entity.GetAll<T>` where `T` is the component type.

```csharp
var audio = Entity.Get<AudioEmitterComponent>();
audio["main"].Play();
```

> [!CAUTION]
> TODO: BEST PRACTICES NOTICE

You can also enumerate over all components in an entity.

```csharp
foreach (var item in Entity)
{
    // do something with the component
}
```
