# Projeto e Unproject

Este tutorial intermediário C# cobre as coordenadas de projeto e não projeto de 3D a 2D e vice-versa.

## Explicação

Quando queremos "converter" coordenadas 3D para uma tela 2D, falamos "Projeção". O outro caminho é chamado de "Unprojecting". Ambos os cenários são bastante comuns em jogos 3D.

O 3D para 2D ou projeto acontece por exemplo quando você tem um marcador de busca 3D. Quando o alvo que você precisa viajar é em algum lugar na frente de você no mundo, então você quer desenhar um marcador de busca 2D na tela que lhe dá uma indicação de onde no mundo 3D que o alvo está localizado.

De 2D a 3D é frequentemente usado para converter uma coordenada do mouse na direção de olhar da câmera. Isso pode ser usado para disparar uma arma ou definir um alvo em um mapa ao jogar um jogo de estratégia.

> [!Vídeo https://www.youtube.com/embed/r2sMWGPidis]

## Projeto
[!code-csharp[project](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/04_Project-UnProject/ProjectDemo.cs)]

## Unproject
[!code-csharp[unproject](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/04_Project-UnProject/UnprojectDemo.cs)]