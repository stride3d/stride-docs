---
uid: Stride.Utilities.Test
example: [*content]
---

```csharp
using System;
using System.IO;
using System.Text;

class Test
{

    public static void Main()
    {
        string path = @"c:\temp\MyTest.txt";

        // Exclua o arquivo se ele existir.
        if (File.Exists(path))
        {
            File.Delete(path);
        }

        // Cria o arquivo.
        using (FileStream fs = File.Create(path))
        {
            AddText(fs, "Algum texto");
            AddText(fs, "Um pouco mais de texto,");
            AddText(fs, "\r\ne isso está em uma nova linha");
            AddText(fs, "\r\n\r\nO seguinte é um subconjunto de caracteres:\r\n");

            for (int i=1;i < 120;i++)
            {
                AddText(fs, Convert.ToChar(i).ToString());
            }
        }

        // Abra o fluxo e leia-o de volta.
        using (FileStream fs = File.OpenRead(path))
        {
            byte[] b = new byte[1024];
            UTF8Encoding temp = new UTF8Encoding(true);
            int readLen;
            while ((readLen = fs.Read(b,0,b.Length)) > 0)
            {
                Console.WriteLine(temp.GetString(b,0,readLen));
            }
        }
    }

    private static void AddText(FileStream fs, string value)
    {
        byte[] info = new UTF8Encoding(true).GetBytes(value);
        fs.Write(info, 0, info.Length);
    }
}
```
