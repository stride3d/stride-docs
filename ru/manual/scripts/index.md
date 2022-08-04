# Scripts
# Скрипты

**Scripts** are units of code that handle game events, respond to user input, and control entities. In short, scripts make games interactive by adding gameplay.
**Скрипты** – это блоки кода, которые обрабатывают игровые события, реагируют на действия пользователя и управляют сущностями.  Короче говоря, сценарии делают игры интерактивными, добавляя геймплей.

You use scripts by adding them to entities in the scene as components. Stride loads a script when the entity it is added to is loaded in the scene.
Вы используете сценарии, добавляя их к объектам сцены в качестве компонентов.  Stride загружает скрипт, когда объект, к которому он добавляется, загружается в сцену.

Stride scripts are written in **C#**. You can edit scripts in Game Studio or another IDE (such as visual Studio). Scripts are debugged in Visual Studio.
Скрипты Stride написаны на **C#**.  Вы можете редактировать сценарии в Game Studio или другой IDE (например, Visual Studio).  Скрипты отлаживаются в Visual Studio.

![Scripts](media/scripting_intro.png)
![Скрипты](media/scripting_intro.png)

> [!NOTE]
> [!ПРИМЕЧАНИЕ]
> Explaining C# is out of the scope of this documentation.
> Объяснение C# выходит за рамки этой документации.

Scripts have access to the main modules of the Stride engine:
Скрипты имеют доступ к основным модулям движка Stride:

* [Audio](xref:Stride.Engine.ScriptComponent.Audio): the audio system
* [Аудио](xref:Stride.Engine.ScriptComponent.Audio): аудиосистема
* [Content](xref:Stride.Engine.ScriptComponent.Content): loads and saves content from assets
* [Content](xref:Stride.Engine.ScriptComponent.Content): загружает и сохраняет содержимое из ресурсов
* [DebugText](xref:Stride.Engine.ScriptComponent.DebugText): prints debug text
* [DebugText](xref:Stride.Engine.ScriptComponent.DebugText): печатает отладочный текст
* [EffectSystem](xref:Stride.Engine.ScriptComponent.EffectSystem): loads and compiles effects and shaders
* [EffectSystem](xref:Stride.Engine.ScriptComponent.EffectSystem): загружает и компилирует эффекты и шейдеры
* [Game](xref:Stride.Engine.ScriptComponent.Game): accesses all information related to your game
* [Game](xref:Stride.Engine.ScriptComponent.Game): доступ ко всей информации, связанной с вашей игрой.
* [GraphicsDevice](xref:Stride.Engine.ScriptComponent.GraphicsDevice): low-level graphics device to create GPU resources
* [GraphicsDevice](xref:Stride.Engine.ScriptComponent.GraphicsDevice): низкоуровневое графическое устройство для создания ресурсов графического процессора.
* [Input](xref:Stride.Engine.ScriptComponent.Input): keyboard, mouse and gamepad states and events
* [Input](xref:Stride.Engine.ScriptComponent.Input): состояния и события клавиатуры, мыши и геймпада.
* [Log](xref:Stride.Engine.ScriptComponent.Log): logs messages and errors from scripts
* [Журнал](xref:Stride.Engine.ScriptComponent.Log): регистрирует сообщения и ошибки скриптов.
* [SceneSystem](xref:Stride.Engine.ScriptComponent.SceneSystem): the currently displayed scene
* [SceneSystem](xref:Stride.Engine.ScriptComponent.SceneSystem): текущая отображаемая сцена
* [Script](xref:Stride.Engine.ScriptComponent.Script): accesses the script manager to schedule or wait for the termination of scripts
* [Script](xref:Stride.Engine.ScriptComponent.Script): доступ к диспетчеру сценариев для планирования или ожидания завершения сценариев
* [Services](xref:Stride.Engine.ScriptComponent.Services): a registry of services you can use to register your own services
* [Services](xref:Stride.Engine.ScriptComponent.Services): реестр служб, который можно использовать для регистрации собственных служб.
* [SpriteAnimation](xref:Stride.Engine.ScriptComponent.SpriteAnimation): animates sprites
* [SpriteAnimation](xref:Stride.Engine.ScriptComponent.SpriteAnimation): анимирует спрайты.
* [Streaming](xref:Stride.Engine.ScriptComponent.Streaming): streams content 
* [Streaming](xref:Stride.Engine.ScriptComponent.Streaming): потоковое содержимое

You can still use standard C# classes in Stride, but these aren't called scripts and you can't attach them to entities in Game Studio.
Вы по-прежнему можете использовать стандартные классы C# в Stride, но они не называются сценариями, и вы не можете прикреплять их к сущностям в Game Studio.

## In this section
## В этой секции

* [Types of script](types-of-script.md)
* [Типы скриптов](types-of-script.md)
* [Create a script](create-a-script.md)
* [Создать скрипт](create-a-script.md)
* [Use a script](use-a-script.md)
* [Использовать скрипт](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Общие свойства и поля](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Расписание и приоритеты](scheduling-and-priorities.md)
* [Events](events.md)
* [События](events.md)
* [Debugging](debugging.md)
* [Отладка](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)
* [Переменные препроцессора](preprocessor-variables.md)
* [Create a model from code](create-a-model-from-code.md)
* [Создать модель из кода](create-a-model-from-code.md)
