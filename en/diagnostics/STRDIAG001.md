# Diagnostics Warning STRDIAG001

> The `[DataContract]` is not valid for the type '{0}'. Expected is a public/internal Accessor.

## Explanation

The `[DataContract]` attribute can only be applied to public/internal type. Any Access that is lower than that will cause STRDIAG001 on the target type.

## Example: private inner class

The following example generates STRDIAG001:

```csharp
// STRDIAG000.cs
using Stride.Core;

public class STRDIAG001
{
    [DataContract]
    private class InnerClass { }
}
```

## Example: file scoped class

```csharp
using Stride.Core;
[DataContract]
file class STRDIAG001
{
}
```

## Solution

To resolve the warning, increase the accessibility of the type to pulic/internal or remove the DataContractAttribute.

## References

- [Serialisation](../manual/scripts/serialization.md)