# Streaming
# Потоковое

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

When you **stream** textures, Stride only loads them when they're needed. This significantly decreases the time it takes to load a game or scene, uses less memory, and makes your game easier to scale.
Когда вы **стримите** текстуры, Stride загружает их только тогда, когда они нужны.  Это значительно сокращает время загрузки игры или сцены, использует меньше памяти и упрощает масштабирование игры.

>[!Note]
>[!Примечание]
>Currently, only textures can be streamed.
>В настоящее время можно передавать только текстуры.

## How Stride streams textures
## Как Stride транслирует текстуры

Instead of loading a texture when Stride loads the scene (with all its mipmaps), Stride only loads it when it's used (eg a model using the texture is onscreen). 
Вместо того, чтобы загружать текстуру, когда Stride загружает сцену (со всеми ее мип-картами), Stride загружает ее только тогда, когда она используется (например, модель, использующая текстуру, находится на экране).

When the texture is no longer needed (ie no objects that use the texture are onscreen), Stride unloads it.
Когда текстура больше не нужна (т. е. на экране нет объектов, использующих текстуру), Stride выгружает ее.

Currently, there's no loading priority for textures. For example, Stride doesn't load textures based on distance; instead, Stride loads them all in sequence.
В настоящее время приоритет загрузки текстур отсутствует.  Например, Stride не загружает текстуры в зависимости от расстояния;  вместо этого Stride загружает их все последовательно.

### Using streaming with mipmaps
### Использование потоковой передачи с мип-картами

If mipmaps (different-resolution versions of textures displayed at different distances) are enabled in the [texture properties](index.md), the lower-resolution mipmaps load first, as they're smaller in size. The gif below shows this process happening in slow motion.
Если мип-карты (версии текстур с разным разрешением, отображаемые на разных расстояниях) включены в [свойствах текстуры] (index.md), мип-карты с более низким разрешением загружаются первыми, поскольку они меньше по размеру.  На гифке ниже показан этот процесс в замедленной съемке.

![Texture loading](media/loading-texture.gif)
![Загрузка текстуры](media/loading-texture.gif)

In most situations, the process is very quick. We recommend you enable mipmaps for streaming as it means lower-resolution versions of textures act as placeholders until the higher-quality versions can load, reducing pop-in.
В большинстве случаев процесс происходит очень быстро.  Мы рекомендуем вам включить MIP-карты для потоковой передачи, поскольку это означает, что версии текстур с более низким разрешением действуют как заполнители до тех пор, пока не загрузятся версии более высокого качества, уменьшая всплывающие окна.

## When **not** to use streaming
## Когда **не** использовать потоковую передачу

Streaming is enabled by default for all textures. You might want to disable streaming on important textures you always want to display immediately and in high quality, such as:
Потоковая передача включена по умолчанию для всех текстур.  Возможно, вы захотите отключить потоковую передачу важных текстур, которые вы всегда хотите отображать немедленно и в высоком качестве, например:

* [splash screens](../../game-studio/splash-screen.md)
* [заставки](../../game-studio/splash-screen.md)

* textures on player models
* текстуры на модели игроков

* textures used in [particles](../../particles/index.md) (particles often have a short lifespan, so might disappear before the texture loads)
* текстуры, используемые в [particles](../../particles/index.md) (частицы часто имеют короткий срок жизни, поэтому могут исчезнуть до загрузки текстуры)

## Enable or disable streaming on a texture
## Включить или отключить потоковую передачу текстуры

1. In the **Asset View**, select the texture.
1. В **Asset View** выберите текстуру.

    ![Select normal map texture](media/select-texture.png)
![Выбрать текстуру карты нормалей](media/select-texture.png)

2. In the **Property Grid**, under **Format**, use the **Stream** check box.
2. В **Сетке свойств** в разделе **Формат** установите флажок **Поток**.

    ![Enable streaming](media/enable-streaming.png)
![Включить потоковую передачу](media/enable-streaming.png)

## Global streaming settings
## Глобальные настройки потоковой передачи

You can access the global streaming settings in the Game Settings asset. These settings apply to all textures that have streaming enabled.
Вы можете получить доступ к глобальным настройкам потоковой передачи в ресурсе «Настройки игры».  Эти настройки применяются ко всем текстурам, для которых включена потоковая передача.

For instructions about how to access the global streaming settings, see the [Game Settings](../../game-studio/game-settings.md) page.
Инструкции о том, как получить доступ к глобальным настройкам потоковой передачи, см. на странице [Настройки игры](../../game-studio/game-settings.md).

### Properties
### Характеристики

![Streaming settings](../../game-studio/media/streaming-settings.png)
![Настройки потоковой передачи](../../game-studio/media/streaming-settings.png)

| Property             | Description
|  Недвижимость |  Описание
|----------------------|------------
|----------------------|------------
| Streaming            | Enable streaming
|  Потоковое |  Включить потоковую передачу
| Update interval | How frequently Stride updates the streaming. Smaller intervals mean the streaming system reacts faster, but use more CPU and cause more memory fluctuations.
|  Интервал обновления |  Как часто Stride обновляет потоковую передачу.  Меньшие интервалы означают, что система потоковой передачи реагирует быстрее, но использует больше ресурсов ЦП и вызывает больше колебаний памяти.
| Max resources per update | The maximum number of textures loaded or unloaded per streaming update. Higher numbers reduce pop-in but might slow down the framerate.
|  Макс. ресурсы на обновление |  Максимальное количество загружаемых или выгружаемых текстур за одно потоковое обновление.  Более высокие значения уменьшают всплывающие окна, но могут снизить частоту кадров.
| Resource timeout (ms)| How long resources stay loaded after they're no longer used (when the **memory budget** is exceeded)
|  Время ожидания ресурса (мс)|  Как долго ресурсы остаются загруженными после того, как они больше не используются (при превышении **бюджета памяти**)
| Memory budget (in MB) | When the memory used by streaming exceeds this budget, Stride unloads unused textures. You can increase this to keep more textures loaded when you have memory to spare, and vice versa.
|  Бюджет памяти (в МБ) |  Когда память, используемая потоковой передачей, превышает этот бюджет, Stride выгружает неиспользуемые текстуры.  Вы можете увеличить это значение, чтобы загрузить больше текстур, когда у вас есть свободная память, и наоборот.

## Access the streaming manager in code
## Доступ к потоковому менеджеру в коде

Use [Streaming](xref:Stride.Streaming).
Используйте [Потоковая передача](xref:Stride.Streaming).

For example, to disable streaming globally, use:
Например, чтобы отключить потоковую передачу глобально, используйте:

```cs
```CS
Streaming.EnableStreaming = false;
Streaming.EnableStreaming = ложь;
```
```

To start streaming a texture:
Чтобы начать потоковую передачу текстуры:

```cs
```CS
Streaming.StreamResources(myTexture);
Streaming.StreamResources(myTexture);
```
```

To disable streaming at load time:
Чтобы отключить потоковую передачу во время загрузки:

```cs
```CS
var texture = Content.Load<Texture>("myTexture", ContentManagerLoaderSettings.StreamingDisabled);
var texture = Content.Load<Texture>(
```
```

### Options
### Опции

There are three [StreamingOptions](xref:Stride.Streaming.StreamingOptions):
Существует три [StreamingOptions](xref:Stride.Streaming.StreamingOptions):

* The `KeepLoaded` option keeps the texture in memory even when the memory budget is exceeded.
* Опция KeepLoaded сохраняет текстуру в памяти даже при превышении бюджета памяти.

* If mipmaps are enabled, the `ForceHighestQuality` option loads only the highest-quality version of the texture.
* Если MIP-карты включены, параметр ForceHighestQuality загружает только версию текстуры самого высокого качества.

* The `KeepLoaded` option keeps the texture in memory even when it's not used.
* Опция KeepLoaded сохраняет текстуру в памяти, даже если она не используется.

For example:
Например:

```cs
```CS
var myOptions = new StreamingOptions() { KeepLoaded = true };
var myOptions = new StreamingOptions() { KeepLoaded = true };
Streaming.StreamResources(myTexture, myOptions);
Streaming.StreamResources(myTexture, myOptions);
```
```

To change the `StreamingOptions` at runtime, use `SetResourceStreamingOptions`. For example:
Чтобы изменить `StreamingOptions` во время выполнения, используйте `SetResourceStreamingOptions`.  Например:

```cs
```CS
var myNewOptions = new StreamingOptions() { KeepLoaded = false };
var myNewOptions = new StreamingOptions() { KeepLoaded = false };
Streaming.SetResourceStreamingOptions(myTexture, myNewOptions);
Streaming.SetResourceStreamingOptions(myTexture, myNewOptions);
```
```

## See also
## Смотрите также

* [StreamingManager API](xref:Stride.Streaming.StreamingManager)
* [API StreamingManager](xref:Stride.Streaming.StreamingManager)
* [Textures index](index.md)
* [Индекс текстур](index.md)
* [Texture compression](compression.md)
* [Сжатие текстур](compression.md)
* [Game Settings](../../game-studio/game-settings.md)
* [Настройки игры](../../game-studio/game-settings.md)
