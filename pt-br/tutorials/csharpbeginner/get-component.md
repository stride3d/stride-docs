# Obtendo um componente
Você pode encontrar esta amostra no projeto tutorial: **Menu** → ** Obtendo um componente**

## Explicação
Este tutorial iniciante C# cobre como obter e remover componentes.

Os componentes são um dos conceitos mais importantes em Stride. Cada entidade na cena tem uma lista de componentes. A transformação por exemplo também é um componente.

Quando fazemos scripts personalizados que herdam de `SyncScript` ou `AsyncScript`, eles se transformam em Componentes que podemos anexar a entidades. Podemos anexar esses componentes a entidades usando o editor ou podemos anexá-los por código.

![ Obter um componente](media/getting-a-component.webp)

> [!Vídeo https://www.youtube.com/embed/qRZG8qXkvDQ]

## Código
### AmmoComponent
Este é o primeiro componente que anexamos a uma entidade. No segundo script, vamos tentar obter este AmmoComponent.

[!code-csharp[AmmoComponent](../../../../stride/samples/Tutorials/CSharpBeginner/CSharpBeginner/CSharpBeginner.Game/Code/AmmoComponent.cs)]

### Obtendo um componente
Este script componente, irá recuperar o script AmmoComponent acima e usar seu método público.

[!code-csharp[GettingAComponent](../../../../stride/samples/Tutorials/CSharpBeginner/CSharpBeginner/CSharpBeginner.Game/Code/GettingAComponentDemo.cs)]
