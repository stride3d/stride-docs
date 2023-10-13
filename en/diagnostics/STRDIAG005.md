# Diagnostics Warning STRDIAG005

1. The property '{0}' with \[DataMember] does not have a getter which is required for serialization.
2. The property '{0}' with \[DataMember] does not have an accessible getter which is required for serialization. A public/internal/internal protected getter is expected.

## Explanation

All Serializers need a getter on a property to be able to get the content of the property.
This is required for all Serializers in Stride.
Non existent getters will result in error message 1.
Non visible getters will result in error message 2.

## Example

The following example generates STRDIAG005 on each property:

```csharp
using Stride.Core;

public class STRDIAG005
{
    // throws Diagnostics message 1
    [DataMember]
    public int Value { set;}

    // throws Diagnostics message 2
    [DataMember]
    public string Value { private get; set; }

    // throws Diagnostics message 2 
    [DataMember]
    public string Value { protected get; set; }
}
```

There is an edge case with internal/internal protected, it will count as non visible when the [DataMember] Attribute isn't applied.
But when the Attribute is applied then the getter counts as visible and therfore is correct.

```csharp
// STRDIAG000.cs
using Stride.Core;

public class STRDIAG004
{
    // will throw STRDIAG004
    public int Value { internal get; set;}

    // will throw STRDIAG004
    public int Value { internal protected get; set;}

    // won't throw STRDIAG004
    [DataMember]
    public string Value { internal get; set; }
    
    // won't throw STRDIAG004
    [DataMember]
    public string Value { internal protected get; set; }
}
```

## Solution

To resolve the warning 1, add a getter to the property with a public/internal/internal protected Accessibility or remove the \[DataMember] Attribute.

To resolve the warning 2, increase the Accessibility of the property getter to public/internal/internal protected Accessibility or remove the \[DataMember] Attribute.
