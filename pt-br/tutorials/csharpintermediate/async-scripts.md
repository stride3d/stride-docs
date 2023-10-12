# Async scripts

Este tutorial intermediário C# cobre o uso de scripts assíncronos ou scripts `async`.

## Explicação

Até este ponto, cada tutorial tem usado scripts `sync`. Isso significa que esses scripts são executados logo após o outro. Se um script de sincronização em particular levaria 1 segundo para completar, nosso jogo congelaria esse 1 segundo, até que o loop de atualização esteja completo. Todos os scripts de Sincronização anteriores podem ser feitos em um script Async.

Com scripts Async podemos executar operações de serviço pesado ou chegar a um api sem ele congelar nossa aplicação. Um jogo pode ser feito inteiramente com scripts Sync ou Async, ou uma combinação deles ambos.

> [!Vídeo https://www.youtube.com/embed/xWozou1AJGM]

## Recuperar dados de um web api
Um caso de uso comum para scripts async está recuperando dados de uma API web. Dependendo da velocidade da API e da quantidade de dados a serem recuperados, isso pode levar até algum lugar entre 20 milissegundos e 2 segundos.
[!code-csharp[AsyncWebApi](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/05_Async/AsyncWebApi.cs)]

## Async Collision gatilho
Em um tutorial anterior fizemos um script de gatilho de colisão que notificaria o usuário uma vez que um objeto está passando por ele. Podemos fazer um script semelhante usando o script Async.
[!code-csharp[AsyncCollisionTrigger](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/05_Async/AsyncCollisionTriggerDemo.cs)]



