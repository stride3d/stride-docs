# Diagnostics Warning STRDIAG009

> The member '{0}' implements IDictionary<T,K> with an unsupported type for the key. Only primitive types ( like int,float,.. ) are supported or string or enums as the Dictionary Key in asset serialization. When used in other contexts the warning may not apply and can be suppressed.

## Explanation

By default, Stride serializers only support primitive types and `string` as keys in an `IDictionary`. However, it is possible to extend this support, making the warning not entirely accurate in all cases.

## Example

The following example generates STRDIAG009:

```csharp
using Stride.Core;

public class STRDIAG009
{
    [DataMember]
    public Dictionary<ClassType, AnyType>

    [DataMember]
    public Dictionary<StructType, AnyType>

    [DataMember]
    public Dictionary<InterfaceType, AnyType>
}
```

## Solution

To resolve the warning, remove the @Stride.Core.DataMemberAttribute. Or change the key of the `IDictionary` to a supported type. Add a pragma Suppression in the IDE if it is a valid type.

## References

- [Serialisation](../manual/scripts/serialization.md)