# Diagnostics Warning STRDIAG006

> Invalid DataMembermode for the specified `[DataMember]` member '{0}'. A public/internal/internal protected setter is required for 'DataMemberMode.Assign'.

## Explanation

The @Stride.Core.DataMemberMode.Assign let's the Serializers create new objects and sets them into the target property.
The Property needs an accessible/visible setter.

## Example: Invalid Cases

The following example generates STRDIAG006:

```csharp
using Stride.Core;

public class STRDIAG006
{
    // non existent setters count as non visible
    [DataMember(DataMemberMode.Assign)]
    public int Property1 { get; }

    [DataMember(DataMemberMode.Assign)]
    public int Property2 { get; private set; }
    
    [DataMember(DataMemberMode.Assign)]
    public int Property3 { get; protected set; }
    
    [DataMember(DataMemberMode.Assign)]
    public int Property4 { get; private protected set; }
}
```

## Example: Special Case internal

> [!IMPORTANT]
> To explicitly set the `DataMemberMode.Assign` the @Stride.Core.DataMemberAttribute has to be applied.
> Internal visibility counts then as visible for the Serializers and becomes valid.

```csharp
using Stride.Core;

public class STRDIAG006
{
    // non existent setters count as non visible
    [DataMember(DataMemberMode.Assign)]
    public int Property1 { get; internal set; }

    [DataMember(DataMemberMode.Assign)]
    public int Property2 { get; internal protected set; }
}
```

## Solution

To resolve the warning, increase the accessibility of the Properties set to pulic/internal.
Or remove the explicit `DataMemberMode.Assign`, this can result in the `DataMemberMode.Content`, if the Property is a non valuetype/string type.

## References

- [Serialisation](../manual/scripts/serialization.md)