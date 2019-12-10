# Loading content
You can find this sample in the tutorial project: **Menu** &rarr; **Loading content from code** 

## Explanation
This C# Beginner tutorial covers how to load content from code. Assets like models, textures, sound etc can be loaded from during runtime. At that point we no longer speak of assets but of 'content'. This tutorial specifically loads content of the 'Model' type. Loaded content that is no longer required in your scene, should be unloaded again so save up memory. For more information on assets see [Manage assets](../../manual/game-studio/manage-assets.md) 

![Loading content](media/loading-content.png)

## Code
With the L and U key you can either Load or Unload the model of a mannequin. If there is a model loaded, you can use the S key to spawn a new entity with the loaded mannequin model. The C clears all of the spawned entities in the scene. This demo demonstrates that when models are unloaded, any entities that reference the model are still existing in the scene.
[!code-csharp[Loading content](..\..\..\..\xenko\samples\Tutorials\CSharpBeginner\CSharpBeginner\CSharpBeginner.Game\Code\LoadingContentDemo.cs)]
