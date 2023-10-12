# Câmera de terceira pessoa

Este tutorial intermediário C# cobre a implementação de uma câmera de terceira pessoa.

## Explicação

Uma vez que reutiliza uma grande parte da câmera [Primeira pessoa ](first-person-camera.md), recomenda-se que você assista esse tutorial primeiro.

Este tutorial ensina sobre como usar o raycasting para posicionar a câmera por trás do jogador. Se o jogador for fechar quaisquer paredes, a câmera será movida mais perto do jogador. Muito perto do jogador? Nós simplesmente mudamos para o modo de primeira pessoa.

> [!Vídeo https://www.youtube.com/embed/qSFZ4ISFcrE]

## Câmera de terceira pessoa
[!code-csharp[firstpersoncamera](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/10_ThirdPersonCamera/ThirdPersonCamera.cs)]

## Movimento dos personagens
[!code-csharp[firstpersoncamera](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/10_ThirdPersonCamera/CharacterMovement.cs)]