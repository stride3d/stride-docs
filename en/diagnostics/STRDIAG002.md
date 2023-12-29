# Diagnostics Warning STRDIAG002

> The 'DataMemberMode.Content' is not valid for the member '{0}'.
> Only mutable reference types are supported for 'DataMemberMode.Content' Mode members.

## Explanation

The [DataMemberMode.Content](xref:Stride.Core.DataMemberMode) mutates the object which is currently in the member.
As this is not possible with the current serializers, only mutable types are supported for `DataMemberMode.Content`. Immutable types in this context are not reference types and strings.

## Example

The following example generates STRDIAG002 on each property:

```csharp
using Stride.Core;

public class STRDIAG002
{
    [DataMember(DataMemberMode.Content)]
    public int Value { get; set; }

    [DataMember(DataMemberMode.Content)]
    public string Value;
}
```

## Solution

To resolve the warning, pick either a reference type for the member or use `DataMemberMode.Assign` for Immutable types.