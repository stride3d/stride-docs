# Gatilhos de colisão

Este tutorial intermediário C# cobre o uso de gatilhos de colisão. Ele ensina sobre corpos rígidos e como configurar aqueles no editor.

## Explicação

Corpos rígidos determinam como as entidades em nossa cena se comportam em gravidade, se elas colidem com outros objetos ou no caso deste tutorial": desencadear eventos de colisão em nosso código. Fazemos isso configurando uma caixa de colisão em nossa cena e deixando uma esfera rolar através deste objeto. Os eventos que são acionados são então processados pelo script que faremos para ele.

> [!Vídeo https://www.youtube.com/embed/SIy3pfoXfoQ]

## Rígidos e colisões
O código abaixo procura o componente rigidbody que está ligado à nossa entidade. O componente de corpo rígido contém todas as informações que precisamos para configurar gatilhos. A propriedade `IsTrigger` determina que nosso colisor não impede outros objetos de física, mas que ele desencadeia eventos em código (se eles forem configurados pelo menos).

Nós geramos uma esfera que também tem um corpo rígido. Esta esfera tem uma massa e é afetada pela gravidade. A esfera vai cair e eventualmente rolar através da nossa caixa de colisões. Em nosso loop de atualização verificamos se há colisões acontecendo. Se houver colisões, obtemos o objeto colidindo e imprimimos algum texto na tela. Uma vez que a esfera deixa a caixa de gatilho, nosso loop de atualização vê que não temos mais colisões.

Em vez de usar nosso loop de atualização, também podemos usar eventos de colisão.
[!code-csharp[collisiontriggerdemo](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/02_Collision-Triggers/CollisionTriggerDemo.cs)]
