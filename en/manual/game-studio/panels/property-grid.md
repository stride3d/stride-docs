# Property grid

The **Property grid** is an essential tool when working on a game. It shows a list of properties of the selected asset, entity or any other object.

TODO: IMAGE

## Editing properties

The **Property grid** lists all editable properties of an object.

## Search

At the top of the **Property grid**, you can use the search box to filter properties based on their name.

TODO: IMAGE

## Customizing the look of a property

Stride allows you to customize how your properties appear in the **Property grid** using the [Display](xref:Stride.Core.DisplayAttribute) attribute. It allows you to change the display name and category.

```csharp
public class Example : StartupScript
{
    [Display("Player Name")]
    public string Name { get; set; }
    
    [Display("Player Speed", "Movement")]
    public float Speed { get; set; }

    [Display(category: "Movement")]
    public bool CanJump { get; set; }
}
```

TODO: IMAGE
