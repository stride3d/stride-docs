# Diagnostics Warning STRDIAG000

> There is an Attribute Contradiction on '{0}' Member. `[DataMemberIgnore]` Attribute on a `[DataMember]` is not supported.
> Except if it has also `[DataMemberUpdatable]` Attribute.

## Explanation

Adding @Stride.Core.DataMemberAttribute and @Stride.Core.DataMemberIgnoreAttribute to the same member is not supported. This would be a contradiction.
It would mean the Serializer should serialize the member and ignore it at the same time. The @Stride.Updater.DataMemberUpdatableAttribute  makes the combination valid again as it negates the @Stride.Core.DataMemberIgnoreAttribute for the binary Serializer.

## Example: Invalid cases

The following example generates STRDIAG000 on each property:

```csharp
// STRDIAG000.cs
using Stride.Core;

public class STRDIAG000
{
    [DataMember]
    [DataMemberIgnore]
    public int Value { get; set; }

    [DataMember]
    [DataMemberIgnore]
    public int Value;
}
```

## Example: Special Case `DataMemberUpdatable`

> [!IMPORTANT]
> There is a special case if the @Stride.Updater.DataMemberUpdatableAttribute is applied.
> This Attribute negates the @Stride.Core.DataMemberIgnoreAttribute for the binary Serializer, so it becomes valid again.

```csharp
using Stride.Core;

public class STRDIAG000
{
    [DataMember]
    [DataMemberIgnore]
    [DataMemberUpdatable]
    public int Value { get; set; }
}
```

## Solution

> To resolve the warning, pick either the @Stride.Core.DataMemberAttribute or the @Stride.Core.DataMemberIgnoreAttribute.
If the `YamlSerializer` and the Editor should ignore the member but the binary Serializer not, then add the @Stride.Core.DataMemberIgnoreAttribute.

## References

- [Serialisation](../manual/scripts/serialization.md)
