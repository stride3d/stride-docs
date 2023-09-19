# ECS Usage

## Classes

The three parts of "Entity Component System" map to the following classes:

- Entity - [`Stride.Engine.Entity`](https://doc.stride3d.net/latest/en/api/Stride.Engine.Entity.html)
- Component - [`Stride.Engine.EntityComponent`](https://doc.stride3d.net/latest/en/api/Stride.Engine.EntityComponent.html)
- System - [`Stride.Engine.EntityProcessor`](https://doc.stride3d.net/latest/en/api/Stride.Engine.EntityProcessor.html)


## Minimal Setup

A component can be defined by deriving a class from `EntityComponent`.

By adding the attribute `DefaultEntityComponentProcessor` to an `EntityComponent`,  
an `EntityProcessor` can be assigned to it. This will automatically set up and run  
the `EntityProcessor` if the `EntityComponent` is in the scene.

An `EntityComponent` also needs to indicate that it can be serialized  
by adding the attribute `DataContract` to it.

A system can be defined by deriving a class from `EntityProcessor`. 


### Code

#### Component
```csharp
[DataContract(nameof(MyComponent))]
[DefaultEntityComponentProcessor(typeof(MyProcessor))]
public class MyComponent : EntityComponent
{
    public int MyValue { get; set; }
}
```

#### System
```csharp
public class MyProcessor : EntityProcessor<MyComponent>
{
    public override void Update(GameTime time)
    {
        foreach (var myComponent in ComponentDatas.Values)
        {
            Console.WriteLine($"myComponent with value {myComponent.MyValue} at {time.Total.TotalSeconds}");
        }
    }
}
```

### Additional Note
An `EntityComponent` can currently not be drag-dropped onto an entity in Game Studio.  
It has to be added by selecting an entity, and then clicking the "Add component" button  
in the property grid.

Alternatively, this can also be done in [code via `entity.Add(entityComponent)`](https://doc.stride3d.net/latest/en/api/Stride.Engine.Entity.html#Stride_Engine_Entity_Add_Stride_Engine_EntityComponent_).


## Advanced Features

### More Component Attributes

#### Display
By adding the `Display` attribute, a nicer name can be shown in Game Studio.
```csharp
[Display("My better name")]
```

#### ComponentCategory
By default, your components will be listed in the category "Miscellaneous".  
By adding the `ComponentCategory` attribute, a different category can be chosen.  
If the chosen name does not exist yet, it will be added to the list in Game Studio.  
```csharp
[ComponentCategory("My own components")]
```

#### ComponentOrder
By adding the `ComponentOrder` attribute, the order in which  
components are listed in Game Studio can be changed.  
```csharp
[ComponentOrder(2001)]
```


### Component Combinations
By passing the types of other components to the `EntityProcessor` constructor,  
it will only include entities _that also have those other components_.

For example, the following `EntityProcessor` is for `MyComponent`, but will skip any entity  
that does not also have both `TransformComponent` and `AnimationComponent` on it.

```csharp
public class MyProcessor : EntityProcessor<MyComponent>
{
    public MyProcessor() : base(typeof(TransformComponent), typeof(AnimationComponent))
    {
    }
}
```


### Separation of EntityComponent and Data

`EntityProcessor<TComponent>` is a shortcut for `EntityProcessor<TComponent, TComponent>`.

By explicitly using `EntityProcessor<TComponent, TData>` instead, a different type can be chosen  
for the actual data. This way, the `EntityComponent` can e.g. have "heavier" startup data and  
references, while the data object that needs to be processed every frame can be kept small.

This will require overriding a method `GenerateComponentData`, which produces a `TData` instance  
from a `TComponent` instance.

### Overrides
`EntityProcessor` also provides several methods which can be overridden in order to react to certain events.  
They are not overly complicated, so that their usage should be clear from their doc comments. 

