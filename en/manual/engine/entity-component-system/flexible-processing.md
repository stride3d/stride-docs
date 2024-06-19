# Flexible Processing

This document expects the reader to be familiar with ECS, please take a look at [usage](usage.md) first.

Handling components through [`EntityProcessor`](xref:Stride.Engine.EntityProcessor) may be too rigid in some cases, when the components 
you're trying to process cannot share the same base implementation for example.

[`Stride.Engine.FlexibleProcessing.IComponent<TProcessor, TThis>`](xref:Stride.Engine.FlexibleProcessing.IComponent`2) 
provides similar features to [`EntityProcessor`](xref:Stride.Engine.EntityProcessor) while being more flexible on the component type, 
this document covers some of the usage of this particular interface.

The `IComponent` interface requires to type parameters, 
- `TProcessor` which is your processor's type.
- And `TThis` which is your component's type.

While that last type may seem redundant, it is required to ensure your processor and 
your implemented type are compatible.

A summarised example satisfying those type constraint would look like so:
```cs
public class MyComponent : StartupScript, IComponent<MyComponent.MyProcessor, MyComponent>
{
    public class MyProcessor : IProcessor
    {
        public List<MyComponent> Components = new();

        public void SystemAdded(IServiceRegistry registryParam) { }
        public void SystemRemoved() { }

        public void OnComponentAdded(MyComponent item) => Components.Add(item);
        public void OnComponentRemoved(MyComponent item) => Components.Remove(item);
    }
}
```

The main difference compared to [`EntityProcessor`](xref:Stride.Engine.EntityProcessor) 
is that [`IComponent`](xref:Stride.Engine.FlexibleProcessing.IComponent`2) is not limited to concrete types, your processor may operate on interfaces as well;
```cs
// Here, declaring the interface, which will be the type received by the processor
public interface IInteractable : IComponent<IInteractable.InteractableProcessor, IInteractable>
{
    void Interact();
    public class InteractableProcessor : IProcessor
    {
        // Process each IInteractable here
        // Omitted method implementation for brievety
    }
}

// Now any component implementing IInteractable will be processed by the InteractableProcessor
public class Button : StartupScript, IInteractable
{
    public void Interact(){}
}
public class Character : SyncScript, IInteractable
{
    public void Interact(){}
    public override void Update(){}
}
```

## Updating Processors
[`Processors`](xref:Stride.Engine.FlexibleProcessing.IComponent`2) do not receive any updates by default, you have to implement the [`IUpdateProcessor`](xref:Stride.Engine.FlexibleProcessing.IUpdateProcessor) or [`IDrawProcessor`](xref:Stride.Engine.FlexibleProcessing.IDrawProcessor) 
interface to receive them:
```cs
public interface ISpecialTick : IComponent<ISpecialTick.Processor, ISpecialTick>
{
    void Tick();

    public class Processor : IProcessor, IUpdateProcessor
    {
        public List<ISpecialTick> Components = new();

        public void SystemAdded(IServiceRegistry registryParam) { }
        public void SystemRemoved() { }

        public void OnComponentAdded(ISpecialTick item) => Components.Add(item);
        public void OnComponentRemoved(ISpecialTick item) => Components.Remove(item);

        // The execution order of this Update, smaller values execute first compared to other IComponent Processors
        public int Order => 0;

        public void Update(GameTime gameTime)
        {
            foreach (var comp in Components)
                comp.Tick();
        }
    }
}
```

## Performance
While it is more flexible, processing components as interfaces instead of concrete class may introduce some overhead.
If the system you're writing is performance critical you should look into strategies to elide or reduce virtual calls in your hot path.
