# Diagnostics Warning STRDIAG008

> Struct members with the 'fixed' Modifier are not supported as a Serialization target on member '{0}'.

## Explanation

The Stride serializers can't handle `fixed` members in structs. The @Stride.Core.DataMemberAttribute is always invalid on such a member.

## Example: Invalid Cases

The following example generates STRDIAG008:

```csharp
using Stride.Core;

public unsafe struct STRDIAG008
{
    [DataMember]
    public fixed byte Value[10];
}
```

## Solution

To resolve the warning, remove the @Stride.Core.DataMemberAttribute.

## References

- [Serialisation](../manual/scripts/serialization.md)