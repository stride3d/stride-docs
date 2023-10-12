# Raycasting

Este tutorial C# Intermediate cobre a transmissão de raios.

## Explicação
Raycasting é um assunto essencial em jogos 3D. Com raycasts podemos detectar se e que tipos de objetos estão em nossa linha de visão. Isso pode ser usado para detectar inimigos ou quão longe um objeto realmente é.

> [!Vídeo https://www.youtube.com/embed/uIM6jxM7OyE]


## Raycast
Este script envia um raycast do barril de armas e o envia para um ponto final um pouco mais. Verificamos se atingimos algo ao longo do caminho. Se o fizermos, calculamos a distância entre o barril de arma e o ponto de acerto. Então escalamos um laser para essa distância para visualizar o raio real. Dependendo do grupo de colisão e dos filtros, alguns objetos são ignorados.

[!code-csharp[editorpages](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/03_Raycasting/RaycastDemo.cs)]


## Radiografia penetrativa
Em nosso primeiro script, o raycast retorna para nós assim que atinge o primeiro objeto ao longo de seu caminho. Também podemos enviar um raio para um ponto final, e deixá-lo voltar para nós quando ele chegou ao seu ponto final. Ele nos devolve uma lista de objetos que ele atingiu ao longo do caminho. Esta lista pode ser vazia, mas também existe de vários objetos. Dependendo do grupo de colisão e dos filtros, alguns objetos são ignorados.

[!code-csharp[editorpages](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/03_Raycasting/RaycastPenetratingDemo.cs)]
