# Scripts

**Scripts** are units of code that handle game events, respond to user input, and control entities. In short, scripts make games interactive by adding gameplay.

You use scripts by adding them to entities in the scene as components. Xenko loads a script when the entity it is added to is loaded in the scene.

Xenko scripts are written in **C#**. You can edit scripts in Game Studio or another IDE (such as visual Studio). Scripts are debugged in Visual Studio.

![Scripts](media/scripting_intro.png)

> [!NOTE]
> Explaining C# is out of the scope of this documentation.

Scripts have access to the main modules of the Xenko engine:

* [Audio](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Audio): the audio system
* [Content](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Content): loads and saves content from assets
* [DebugText](xref:SiliconStudio.Xenko.Engine.ScriptComponent.DebugText): prints debug text
* [EffectSystem](xref:SiliconStudio.Xenko.Engine.ScriptComponent.EffectSystem): loads and compiles effects and shaders
* [Game](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Game): accesses all information related to your game
* [GraphicsDevice](xref:SiliconStudio.Xenko.Engine.ScriptComponent.GraphicsDevice): low-level graphics device to create GPU resources
* [Input](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Input): keyboard, mouse and gamepad states and events
* [Log](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Log): logs messages and errors from scripts
* [SceneSystem](xref:SiliconStudio.Xenko.Engine.ScriptComponent.SceneSystem): the currently displayed scene
* [Script](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Script): accesses the script manager to schedule or wait for the termination of scripts
* [Services](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Services): a registry of services you can use to register your own services
* [SpriteAnimation](xref:SiliconStudio.Xenko.Engine.ScriptComponent.SpriteAnimation): animates sprites
* [Streaming](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Streaming): streams content 

You can still use standard C# classes in Xenko, but these aren't called scripts and you can't attach them to entities in Game Studio.

## In this section

* [Types of script](types-of-script.md)
* [Create a script](create-a-script.md)
* [Use a script](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Events](events.md)
* [Debugging](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)
* [Create a model from code](create-a-model-from-code.md)