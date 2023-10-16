# Diagnostics Warning STRDIAG007

> Invalid `[DataMember]` Attribute on the member '{0}'. A Delegate is not serializable.

## Explanation

Delegates can't be serialized by the serializers in Stride. Therefore, the @Stride.Core.DataMemberAttribute is always invalid when applied to a delegate member in a type.

## Example: Invalid Cases

The following example generates STRDIAG007:

```csharp
using Stride.Core;

public class STRDIAG007
{
    [DataMember]
    public Action SomeDelegate;

    [DataMember]
    public Action SomeDelegate2 { get; set; }
}
```

## Solution

To resolve the warning, remove the @Stride.Core.DataMemberAttribute.

## References

- [Serialisation](../manual/scripts/serialization.md)