# Property grid

The **Property grid** is an essential tool when working on a game. It shows a list of properties of the selected asset, entity or any other item that exposes modifiable values.

![](media/property-grid.webp)

## Search

At the top of the **Property grid**, you can use the search box to filter properties based on their name.

![](media/property-grid-search.webp)

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

![](media/property-grid-example.webp)
