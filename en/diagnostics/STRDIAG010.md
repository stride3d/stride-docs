# Diagnostics Warning STRDIAG010

> The Type '{0}' doesn't have a public parameterless constructor, which is needed for Serialization.

## Explanation

By default, Stride serializers only support types that have a parameterless constructor. If no constructor is defined then the default constructor counts as parameterless constructor. Primary Constructors with parameters count as non parameterless constructor. Structs have per default a parameterless constructor so this warning will never appear on a struct.

## Example

The following example generates STRDIAG010:

```csharp
using Stride.Core;

[DataContract]
public class InvalidSTRDIAG010
{
    // no parameterless constructor available so it will throw STRDIAG010
    public InvalidSTRDIAG010(int x, int y)
    {

    }
}
```

The following example doesn't generate STRDIAG010:

```csharp
public class ValidSTRDIAG010
{
    // will be ignored by the serializers
    public ValidSTRDIAG010(int x, int y)
    {
    }
    // this parameterless constructor will be used by the serializers
    public ValidSTRDIAG010()
    {

    }
}
```

## Solution

To resolve the warning, add a parameterless constructor that can be used by the serializers. Or remove the @Stride.Core.DataContractAttribute so the class gets entirely ignored by the serialization system.

## References

- [Serialisation](../manual/scripts/serialization.md)