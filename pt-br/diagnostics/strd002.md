# Diagnosticando o Aviso STRD002

Uma coleção deve ter um getter public/internal para serialização.

## Exemplo

O exemplo a seguir gera um aviso STRD001:

```csharp
// STRD001.cs
// compile with: /W:2
public class Program
{
    public static void Main()
    {
        goto lab1;
        {
            // As seguintes instruções não podem ser executadas:
            int i = 9;   // STRD001
            i++;
        }
    lab1:
        {
        }
    }
}

```

Outro exemplo comum onde esse erro é gerado é o seguinte:

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

A instrução `break` não pode ser executada porque ocorre após a instrução `return`. A instrução `return` encerra o bloco `case` que o envolve.

## Veja também

- [Opções do compilador de C#](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-options/)
- [Erros do compilador de C#](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/)