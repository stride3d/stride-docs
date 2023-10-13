# Diagnostics Warning STRDIAG003

The member '{0}' with \[DataMember] is not accesssible to the serializer. Only public/internal/internal protected visibility is supported, when the \[DataMember] attribute is applied.

## Explanation

The Serialization concept in Stride expects public/internal/internal protected visibility of properties.
Other Accessibility won't be considered for Serialization.
To count internal/internal protected as visible to the Editor the \[DataMember] Attribute has to be applied, else it's considered as not visible.

## Example

The following example generates STRDIAG003 on each property:

```csharp
// STRDIAG000.cs
using Stride.Core;

public class STRDIAG003
{
    [DataMember]
    private int Value { get; set;}

    [DataMember]
    protected string Value;
    
    [DataMember]
    private protected string Value;
}
```

## Solution

To resolve the warning, increase the Accessibility to public/internal/internal protected of the member or remove the \[DataMember] Attribute.
