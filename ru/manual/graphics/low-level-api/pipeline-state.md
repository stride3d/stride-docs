# Pipeline states
# Состояния конвейера

Stride gives you total control over the graphics pipeline state. This includes:
Stride дает вам полный контроль над состоянием графического конвейера.  Это включает:

- rasterizer state
- состояние растеризатора
- depth and stencil state
- глубина и состояние трафарета
- blend state
- смешанное состояние
- effects
- последствия
- input layout
- макет ввода
- output description
- выходное описание

State is compiled into immutable @'Stride.Graphics.PipelineState' objects, which describe the whole pipeline. They are then bound using a @'Stride.Graphics.CommandList'.
Состояние компилируется в неизменяемые объекты @'Stride.Graphics.PipelineState', которые описывают весь конвейер.  Затем они связываются с помощью @'Stride.Graphics.CommandList'.

**Code:** Create state objects
**Код:** Создание объектов состояния

```cs
```CS
// Creating pipeline state object
// Создание объекта состояния конвейера
var pipelineStateDescription = new PipelineStateDescription();
var PipelineStateDescription = новое описание PipelineStateDescription();
var pipelineState = PipelineState.New(GraphicsDevice, ref pipelineStateDescription);
var pipeState = PipelineState.New(GraphicsDevice, ref pipeStateDescription);
 
// Applying the state to the pipeline
// Применение состояния к конвейеру
CommandList.SetPipelineState(pipelineState);
CommandList.SetPipelineState (состояние конвейера);
```
```

The @'Stride.Graphics.MutablePipelineState' class let you set states independently, while caching the underlying pipeline states.
Класс @'Stride.Graphics.MutablePipelineState' позволяет вам устанавливать состояния независимо, при этом кэшируя базовые состояния конвейера.

**Code:** Mutable pipeline state
**Код:** Изменяемое состояние конвейера

```cs
```CS
// Creating the pipeline state object
// Создание объекта состояния конвейера
var mutablePipelineState = new MutablePipelineState();
var mutablePipelineState = new MutablePipelineState();

// Setting values and rebuilding
// Установка значений и перестроение
mutablePipelineState.State.BlendState = BlendStates.AlphaBlend
mutablePipelineState.State.BlendState = BlendStates.AlphaBlend
mutablePipelineState.Update
mutablePipelineState.Update
 
// Applying the state to the pipeline
// Применение состояния к конвейеру
CommandList.SetPipelineState(mutablePipelineState.CurrentState);
CommandList.SetPipelineState(mutablePipelineState.CurrentState);
```
```

# Rasterizer state
# Состояние растеризатора

The rasterizer can be set using the @'Stride.Graphics.PipelineStateDescription.RasterizerState' property. A set of predefined descriptions is held by the @'Stride.Graphics.RasterizerStates' class. They deal with the cull mode, and should be enough for most use cases:
Растеризатор можно установить с помощью свойства @'Stride.Graphics.PipelineStateDescription.RasterizerState'.  Набор предопределенных описаний хранится в классе @'Stride.Graphics.RasterizerStates'.  Они имеют дело с режимом отбраковки, и их должно быть достаточно для большинства случаев использования:

- @'Stride.Graphics.RasterizerStates.CullNone': no culling
- @'Stride.Graphics.RasterizerStates.CullNone': без отбраковки
- @'Stride.Graphics.RasterizerStates.CullFront': front-face culling
- @'Stride.Graphics.RasterizerStates.CullFront': отбраковка лицевой стороны
- @'Stride.Graphics.RasterizerStates.CullBack': back-face culling
- @'Stride.Graphics.RasterizerStates.CullBack': отбраковка обратной стороны

**Code:** Set the cull mode
**Код:** Установить режим отбраковки

```cs
```CS
pipelineStateDescription.RasterizerState = RasterizerStates.CullNone;
PipeStateDescription.RasterizerState = RasterizerStates.CullNone;
pipelineStateDescription.RasterizerState = RasterizerStates.CullFront;
PipeStateDescription.RasterizerState = RasterizerStates.CullFront;
pipelineStateDescription.RasterizerState = RasterizerStates.CullBack;
PipeStateDescription.RasterizerState = RasterizerStates.CullBack;
```
```

You can create your own custom state. For the list of options and default values, see the @'Stride.Graphics.RasterizerStateDescription' API documentation.
Вы можете создать свое собственное состояние.  Список параметров и значений по умолчанию см. в документации по API @'Stride.Graphics.RasterizerStateDescription'.

**Code:** Custom rasterizer states
**Код:** Пользовательские состояния растеризатора

```cs
```CS
var rasterizerStateDescription = new RasterizerStateDescription(CullMode.Front);
var rasterizerStateDescription = новое описание RasterizerState(CullMode.Front);
rasterizerStateDescription.ScissorTestEnable = true; // enables the scissor test
rasterizerStateDescription.ScissorTestEnable = true;  // включает ножничный тест
pipelineStateDescription.RasterizerState = rasterizerStateDescription;
PipeStateDescription.RasterizerState = rasterizerStateDescription;
```
```

# Depth and stencil states
# Глубина и состояния трафарета

The @'Stride.Graphics.PipelineStateDescription.DepthStencilState' property contains the depth and stencil states. A set of commonly used states is defined by the @'Stride.Graphics.DepthStencilStates' class:
Свойство @'Stride.Graphics.PipelineStateDescription.DepthStencilState' содержит состояние глубины и трафарета.  Набор часто используемых состояний определяется классом @'Stride.Graphics.DepthStencilStates':

- @'Stride.Graphics.DepthStencilStates.Default': depth read and write with a less-than comparison
- @'Stride.Graphics.DepthStencilStates.Default': чтение и запись глубины с сравнением меньше чем
- @'Stride.Graphics.DepthStencilStates.DefaultInverse': read and write with a greater-or-equals comparison
- @'Stride.Graphics.DepthStencilStates.DefaultInverse': чтение и запись с сравнением 
- @'Stride.Graphics.DepthStencilStates.DepthRead': read only with a less-than comparison
- @'Stride.Graphics.DepthStencilStates.DepthRead': только чтение с сравнением меньше чем
- @'Stride.Graphics.DepthStencilStates.None': neither read nor write
- @'Stride.Graphics.DepthStencilStates.None': ни чтение, ни запись

**Code:** Setting the depth state
**Код:** Установка состояния глубины

```cs
```CS
pipelineStateDescription.DepthStencilState = DepthStencilStates.Default;
PipeStateDescription.DepthStencilState = DepthStencilStates.Default;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DefaultInverse;
PipeStateDescription.DepthStencilState = DepthStencilStates.DefaultInverse;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DepthRead;
PipeStateDescription.DepthStencilState = DepthStencilStates.DepthRead;
pipelineStateDescription.DepthStencilState = DepthStencilStates.None;
PipeStateDescription.DepthStencilState = DepthStencilStates.None;
```
```

You can also set custom depth and stencil states. For the  list of options and default values, see the @'Stride.Graphics.DepthStencilStateDescription' API documentation.
Вы также можете установить пользовательскую глубину и состояние трафарета.  Список параметров и значений по умолчанию см. в документации по API @'Stride.Graphics.DepthStencilStateDescription'.

**Code:** Custom depth and stencil state
**Код:** Пользовательская глубина и состояние трафарета

```cs
```CS
// depth test is enabled but it doesn't write
// тест глубины включен, но не пишет
var depthStencilStateDescription = new DepthStencilStateDescription(true, false);
var depthStencilStateDescription = новое описание DepthStencilStateDescription (истина, ложь);
pipelineStateDescription.DepthStencilState = depthStencilStateDescription;
PipeStateDescription.DepthStencilState = depthStencilStateDescription;
```
```

The stencil reference isn't part of the @'Stride.Graphics.PipelineState'. It's set using @'Stride.Graphics.CommandList.SetStencilReference(System.Int32)'.
Ссылка на шаблон не является частью @'Stride.Graphics.PipelineState'.  Он устанавливается с помощью @'Stride.Graphics.CommandList.SetStencilReference(System.Int32)'.

**Code:** Set the stencil reference
**Код:** Установить ссылку на трафарет

```cs
```CS
CommandList.SetStencilReference(2);
CommandList.SetStencilReference(2);
```
```


# Blend state
# Состояние смешивания

The @'Stride.Graphics.PipelineStateDescription.BlendState' and @'Stride.Graphics.PipelineStateDescription.SampleMask' properties control blending. The @'Stride.Graphics.BlendStates' class defines a set of commonly used blend states:
Свойства @'Stride.Graphics.PipelineStateDescription.BlendState' и @'Stride.Graphics.PipelineStateDescription.SampleMask' управляют смешиванием.  Класс @'Stride.Graphics.BlendStates' определяет набор часто используемых состояний наложения:

- @'Stride.Graphics.BlendStates.Additive': sums the colors 
- @'Stride.Graphics.BlendStates.Additive': суммирует цвета
- @'Stride.Graphics.BlendStates.AlphaBlend': sums the colors using the alpha of the source on the destination color
- @'Stride.Graphics.BlendStates.AlphaBlend': суммирует цвета, используя альфа-канал источника для целевого цвета.
- @'Stride.Graphics.BlendStates.NonPremultiplied': sums using the alpha of the source on both colors
- @'Stride.Graphics.BlendStates.NonPremultiplied': суммирование с использованием альфа-канала источника для обоих цветов.
- @'Stride.Graphics.BlendStates.Opaque': replaces the color
- @'Stride.Graphics.BlendStates.Opaque': заменяет цвет

**Code:** Set the blend state
**Код:** Установить состояние наложения

```cs
```CS
// Set common blend states
// Установить общие состояния наложения
pipelineStateDescription.BlendState = BlendStates.Additive;
PipeStateDescription.BlendState = BlendStates.Additive;
pipelineStateDescription.BlendState = BlendStates.AlphaBlend;
PipeStateDescription.BlendState = BlendStates.AlphaBlend;
pipelineStateDescription.BlendState = BlendStates.NonPremultiplied;
PipeStateDescription.BlendState = BlendStates.NonPremultiplied;
pipelineStateDescription.BlendState = BlendStates.Opaque;
PipeStateDescription.BlendState = BlendStates.Opaque;

// Set the sample mask
// Установить маску образца
pipelineStateDescription.SampleMask = 0xFFFFFFFF;
pipeStateDescription.SampleMask = 0xFFFFFFFF;
```
```

You can set custom depth and blend states. For a list of options and default values, see the @'Stride.Graphics.BlendStateDescription' API documentation.
Вы можете установить пользовательскую глубину и состояния смешивания.  Список параметров и значений по умолчанию см. в документации по API @'Stride.Graphics.BlendStateDescription'.

**Code:** Custom blend state
**Код:** Пользовательское состояние наложения

```cs
```CS
// create the object describing the blend state per target
// создаем объект, описывающий состояние смешивания для каждой цели
var blendStateRenderTargetDescription = new BlendStateRenderTargetDescription();
var blendStateRenderTargetDescription = new BlendStateRenderTargetDescription();
blendStateRenderTargetDescription.BlendEnable = true;
blendStateRenderTargetDescription.BlendEnable = true;
blendStateRenderTargetDescription.ColorSourceBlend = Blend.SourceColor;
blendStateRenderTargetDescription.ColorSourceBlend = Blend.SourceColor;
// etc.
// так далее.

// create the blendStateDescription object
// создаем объект blendStateDescription
var blendStateDescription = new BlendStateDescription(Blend.SourceColor, Blend.InverseSourceColor);
var blendStateDescription = новое Описание BlendState(Blend.SourceColor, Blend.InverseSourceColor);
blendStateDescription.AlphaToCoverageEnable = true; // enable alpha to coverage
blendStateDescription.AlphaToCoverageEnable = true;  // включить альфу для покрытия
blendStateDescription.RenderTargets[0] = blendStateRenderTargetDescription;
blendStateDescription.RenderTargets[0] = blendStateRenderTargetDescription;
pipelineStateDescription.BlendState = blendStateDescription;
PipeStateDescription.BlendState = blendStateDescription;
```
```

The blend factor isn't part of the @'Stride.Graphics.PipelineState'. It's set using @'Stride.Graphics.CommandList.SetBlendFactor(Stride.Core.Mathematics.Color4)'.
Коэффициент наложения не является частью @'Stride.Graphics.PipelineState'.  Он устанавливается с помощью @'Stride.Graphics.CommandList.SetBlendFactor(Stride.Core.Mathematics.Color4)'.

**Code:** Set the blend factor
**Код:** Установить коэффициент смешивания

```cs
```CS
CommandList.SetBlendFactor(Color4.White);
CommandList.SetBlendFactor(Color4.White);
```
```

## Effects
## Последствия

The pipeline state also includes the shaders you want to use for drawing.
Состояние конвейера также включает шейдеры, которые вы хотите использовать для рисования.
To bind an @'Stride.Graphics.Effect' to the pipeline, set the @'Stride.Graphics.PipelineStateDescription.EffectBytecode'
Чтобы привязать @'Stride.Graphics.Effect' к конвейеру, установите @'Stride.Graphics.PipelineStateDescription.EffectBytecode'
and @'Stride.Graphics.PipelineStateDescription.RootSignature' properties of the @'Stride.Graphics.PipelineStateDescription' to the matching values of the effect.
и @'Stride.Graphics.PipelineStateDescription.RootSignature' свойства @'Stride.Graphics.PipelineStateDescription' на соответствующие значения эффекта.

An @'Stride.Shaders.EffectBytecode' contains the actual shader programs. For more information, see [Effects and Shaders](../effects-and-shaders/index.md).
@'Stride.Shaders.EffectBytecode' содержит фактические шейдерные программы.  Для получения дополнительной информации см. [Эффекты и шейдеры](../effects-and-shaders/index.md).

The @'Stride.Graphics.RootSignature' describes the number and kind of resources expected by the effect. The next chapter covers how to [bind resources](resources.md) to the pipeline.
@'Stride.Graphics.RootSignature' описывает количество и тип ресурсов, ожидаемых эффектом.  В следующей главе рассказывается, как [привязать ресурсы] (resources.md) к конвейеру.

**Code:** Bind an effect
**Код:** Привязать эффект

```cs
```CS
var effectInstance = new EffectInstance(EffectSystem.LoadEffect("MyEffect").WaitForResult());
var effectInstance = новый EffectInstance(EffectSystem.LoadEffect(
pipelineStateDescription.EffectBytecode = effectInstance.Effect.Bytecode;
PipeStateDescription.EffectBytecode = effectInstance.Effect.Bytecode;
pipelineStateDescription.RootSignature = effectInstance.RootSignature;
PipeStateDescription.RootSignature = effectInstance.RootSignature;
```
```

## Input layout
## Макет ввода

The pipeline state describes the layout in which vertices are sent to the device through the @'Stride.Graphics.PipelineStateDescription.InputElements' and @'Stride.Graphics.PipelineStateDescription.PrimitiveType' properties.
Состояние конвейера описывает макет, в котором вершины отправляются на устройство с помощью свойств @'Stride.Graphics.PipelineStateDescription.InputElements' и @'Stride.Graphics.PipelineStateDescription.PrimitiveType'.

The [Draw vertices](draw-vertices.md) page describes how to create custom vertex buffers and their @'Stride.Graphics.VertexDeclaration' in more detail.
На странице [Draw vertices](draw-vertices.md) более подробно описано, как создавать собственные буферы вершин и их @'Stride.Graphics.VertexDeclaration'.

**Code:** Set an input layout
**Код:** Установить макет ввода

```cs
```CS
VertexDeclaration vertexDeclaration = ...
VertexDeclaration vertexDeclaration = ...
pipelineStateDescription.InputElements = vertexDeclaration.CreateInputElements();
PipeStateDescription.InputElements = vertexDeclaration.CreateInputElements();
pipelineStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
PipeStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
```
```

## Output description
## Описание вывода

The @'Stride.Graphics.PipelineStateDescription.Output' property of the @'Stride.Graphics.PipelineStateDescription' defines the number and @'Stride.Graphics.PixelFormat' of all bound render textures.
Свойство @'Stride.Graphics.PipelineStateDescription.Output' в @'Stride.Graphics.PipelineStateDescription' определяет количество и @'Stride.Graphics.PixelFormat' всех связанных текстур рендеринга.

For information on how to bind render textures to the pipeline, see [Textures and render textures](textures-and-render-textures.md).
Информацию о том, как привязать текстуры рендеринга к конвейеру, см. в разделе [Текстуры и текстуры рендеринга](textures-and-render-textures.md).

**Code:** Create an output description
**Код:** Создать выходное описание

```cs
```CS
var renderOutputDescription = new RenderOutputDescription(GraphicsDevice.Presenter.BackBuffer.Format, GraphicsDevice.Presenter.DepthStencilBuffer.Format);
var renderOutputDescription = new RenderOutputDescription(GraphicsDevice.Presenter.BackBuffer.Format, GraphicsDevice.Presenter.DepthStencilBuffer.Format);
pipelineStateDescription.Output = renderOutputDescription;
PipeStateDescription.Output = renderOutputDescription;
```
```

You can use the @'Stride.Graphics.RenderOutputDescription.CaptureState(Stride.Graphics.CommandList)' to retrieve the output description last set on a @'Stride.Graphics.CommandList'. This is especially useful in combination with @'Stride.Graphics.MutablePipelineState', when the render target might not be known up front.
Вы можете использовать @'Stride.Graphics.RenderOutputDescription.CaptureState(Stride.Graphics.CommandList)', чтобы получить последнее описание вывода, установленное в @'Stride.Graphics.CommandList'.  Это особенно полезно в сочетании с @'Stride.Graphics.MutablePipelineState', когда цель рендеринга может быть неизвестна заранее.

**Code:** Capture output description
**Код:** Описание выходных данных захвата

```cs
```CS
mutablePipelineState.State.Output.CaptureState(CommandList);
mutablePipelineState.State.Output.CaptureState(CommandList);
mutablePipelineState.Update();
mutablePipelineState.Update();
```
```
