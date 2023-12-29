# Diagnostics Warning STRDIAG003

> The member '{0}' with `[DataMember]` is not accessible to the serializer. Only public/internal/internal > protected visibility is supported, when the `[DataMember]` attribute is applied.

## Explanation

The serialization concept in Stride expects `public`/`internal`/`internal protected` visibility of properties. Other accessibility won't be considered for serialization.
To count `internal`/`internal protected` as visible to the Editor the @Stride.Core.DataMemberAttribute has to be applied, else it's considered as not visible.

## Example

The following example generates STRDIAG003 on each property:

```csharp
using Stride.Core;

public class STRDIAG003
{
    [DataMember]
    private int Value { get; set; }

    [DataMember]
    protected string Value;
    
    [DataMember]
    private protected string Value;
}
```

## Solution

To resolve the warning, increase the Accessibility to `public`/`internal`/`internal protected` of the member or remove the @Stride.Core.DataMemberAttribute Attribute.
