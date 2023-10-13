# Diagnostics Warning STRDIAG002

The 'DataMemberMode.Content' is not valid for the member '{0}'.
Only mutable reference types are supported for 'DataMemberMode.Content' Mode members.

## Explanation

The Content Mode mutates the object which is currently in the member.
As this is not possible with the current Serializers, only mutable Types are supported for Content Mode.
Immutable types in this context are none reference types and string.

## Example

The following example generates STRDIAG002 on each property:

```csharp
// STRDIAG000.cs
using Stride.Core;

public class STRDIAG002
{
    [DataMember(DataMemberMode.Content)]
    public int Value { get; set;}

    [DataMember(DataMemberMode.Content)]
    public string Value;
}
```

## Solution

To resolve the warning, pick either a reference type for the member or use DataMemberMode.Assign for ImmutableTypes.
