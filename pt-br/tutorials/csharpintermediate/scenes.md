# Cenas

Este tutorial intermediário C# cobre o conceito de cenas em Stride.

## Explicação

Stride permite Cenas para ter uma quantidade infinita de cenas de criança que em seus termos também pode carregar uma quantidade infinita de cenas de criança. No entanto, cada cena carregada é única. Uma cena não pode ser carregada duas vezes ao mesmo tempo. Tanto o editor quanto ao carregar cenas através do código, impedirão que uma cena seja carregada duas vezes ao mesmo tempo.

> [!Vídeo https://www.youtube.com/embed/G7OvA-9erpE]

## Carregando uma cena infantil
Este script carrega em uma cena de criança pressionando uma chave definida. Pressionando essa mesma chave novamente, irá descarregar a cena da criança carregada. Cada vez que carregamos a cena da criança novamente, compensamos um pouco na direção Y para demonstrar a opção de compensação para cenas de crianças.
[!code-csharp[editorpages](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/06_Scenes/LoadChildScene.cs)]

## (Re) carregar uma cena
Nós podemos obter o topo mais cena em nosso mundo que é chamado de RootScene. Se descarregarmos essa cena, podemos então carregar em uma cena completamente nova para trocar ou mudar para uma nova cena. Esse mesmo script também pode ser usado para recarregar a mesma cena no caso de você querer reiniciar sua cena,
[!code-csharp[editorpages](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/06_Scenes/LoadScene.cs)]
