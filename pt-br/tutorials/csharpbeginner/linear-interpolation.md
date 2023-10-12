# Interpolação linear
Você pode encontrar esta amostra no projeto tutorial: **Menu** → **Integração linear**

## Explicação
Este tutorial C# Beginner cobre a interpolação linear que é frequentemente encurtada para "Lerp".

Às vezes você quer mudar gradualmente um valor de início para um valor de destino. Este processo é chamado de interpolação linear.

Stride expõe vários Lerp funciona para vários tipos. Entre eles estão `Vector2`, `Vector3` e `Vector4`.

![ Interpolação linear ](media/lerp.webp)


> [!Vídeo https://www.youtube.com/embed/jBXGvLBwXqI]

## Código

O exemplo consiste em um temporizador simples que reinicia depois de alguns segundos. Quando o temporizador começa, uma posição de início e uma posição de destino gerada aleatoriamente são armazenados. Uma caixa vai se mover entre estas duas posições.

Cada quadro um "valor de Lerp" é calculado. O valor de leiturap é usado para determinar qual deve ser a posição atual de uma caixa móvel. Uma vez que o temporizador é feito, a posição atual vai se tornar a posição de início e uma nova posição de destino é novamente gerada aleatoriamente.

[!code-csharp[Lerp](../../../../stride/samples/Tutorials/CSharpBeginner/CSharpBeginner/CSharpBeginner.Game/Code/LerpDemo.cs)]