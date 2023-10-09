# Diagnostics Warning STRD001

An Array must have a public/internal getter for Serialization.

## Example

The following example generates STRD001:

```csharp
// STRD001.cs
// compile with: /W:2
public class Program
{
    public static void Main()
    {
        goto lab1;
        {
            // The following statements cannot be reached:
            int i = 9;   // STRD001
            i++;
        }
    lab1:
        {
        }
    }
}

```

Another common example where this error is generated is as follows:

```csharp
public static class Class1
{
    public static string Method1()
    {
        string x = "a";
        switch (x)
        {
            case "a":
                return "a";
                break;          // CS0162
        }
        return "";
    }
}
```

The `break` statement cannot be reached because it occurs after the `return` statement. The `return` statement ends the enclosing `case` branch.

## See also

- [C# Compiler Options](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-options/)
- [C# Compiler Errors](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/)