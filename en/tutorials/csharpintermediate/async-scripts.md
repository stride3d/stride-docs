# Async scripts

This C# Intermediate tutorial covers the usage of asynchronous scripts or `async` scripts.

## Explanation

Up until this point every tutorial has been using `sync` scripts. That means that those scripts are executed right after each other. If one particular sync script would take 1 second to complete, our game would freeze that 1 second, until the update loop is complete. All of the previously made Sync scripts can be made into an Async script.  

With Async scripts we can perform heavy duty operations or reach out to an api without it freezing our application. A game can be made entirely with either Sync or Async scripts, or a combination of them both. 

> [!Video https://www.youtube.com/embed/xWozou1AJGM]

## Retrieving data from a web api
A common use case for async scripts is retrieving data from a web API. Depending on the speed of the API and the amount of data to be retrieved, this can take up to somewhere between 20 milliseconds and 2 seconds. 
[!code-csharp[AsyncWebApi](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/05_Async/AsyncWebApi.cs)]

## Async Collision trigger
In a previous tutorial we made a collision trigger script that would notify the user once an object is passing through it. We can make a similar script using Async script.
[!code-csharp[AsyncCollisionTrigger](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/05_Async/AsyncCollisionTriggerDemo.cs)]



