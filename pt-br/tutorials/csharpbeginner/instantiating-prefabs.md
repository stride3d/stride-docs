# Prefabs instantâneas
Você pode encontrar esta amostra no projeto tutorial: **Menu** → **Instanciando prefabs**

## Explicação
Este tutorial C# Beginner abrange como instanciar prefabs.

Um prefab é uma versão "master" de um objeto que você pode reutilizar onde quiser. Quando você muda o prefab, cada instância do prefab também muda.

Um prefab que é instantâneo por código não lhe dá um novo objeto pré-fabricado, mas em vez disso lhe dá uma lista de entidades. Enquanto essas entidades não forem adicionadas à cena, elas não serão visíveis e os scripts anexados não serão executados.

![Instanciando Prefabs](media/instantiating-prefabs.webp)

> [!Vídeo https://www.youtube.com/embed/19u2QACzdAk]

## Código
[!code-csharp[Instantiating Prefabs](../../../../stride/samples/Tutorials/CSharpBeginner/CSharpBeginner/CSharpBeginner.Game/Code/InstantiatingPrefabsDemo.cs)]