# Resource binding
# Привязка ресурсов

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

When [drawing vertices](draw-vertices.md) using an [effect](../effects-and-shaders/index.md), the shaders expect certain resources to be available, including:
Когда [отрисовка вершин](draw-vertices.md) с использованием [эффекта](../effects-and-shaders/index.md), шейдеры ожидают, что будут доступны определенные ресурсы, в том числе:

- textures and buffers
- текстуры и буферы
- samplers
- пробники
- constant buffers
- постоянные буферы

## Automatic resource binding
## Автоматическая привязка ресурсов

The @'Stride.Rendering.EffectInstance' class handles the details of enumerating these resources from a loaded effect as well as binding them.
Класс @'Stride.Rendering.EffectInstance' обрабатывает детали перечисления этих ресурсов из загруженного эффекта, а также их привязки.

It exposes the @'Stride.Graphics.RootSignature', which has to be set as [pipeline state](pipeline-state.md),
Он предоставляет @'Stride.Graphics.RootSignature', который должен быть установлен как [состояние конвейера](pipeline-state.md),
and allows to fill constant buffers and bind resources based on a @'Stride.Rendering.ParameterCollection'.
и позволяет заполнять буферы констант и связывать ресурсы на основе @'Stride.Rendering.ParameterCollection'.

**Code:** Using an EffectInstance
**Код:** Использование экземпляра EffectInstance

```cs
```CS
// Create a EffectInstance and use it to set up the pipeline
// Создаем экземпляр EffectInstance и используем его для настройки конвейера
var effectInstance = new EffectInstance(EffectSystem.LoadEffect("MyEffect").WaitForResult());
var effectInstance = новый EffectInstance(EffectSystem.LoadEffect(
pipelineStateDescription.EffectBytecode = effectInstance.Effect.Bytecode;
PipeStateDescription.EffectBytecode = effectInstance.Effect.Bytecode;
pipelineStateDescription.RootSignature = effectInstance.RootSignature;
PipeStateDescription.RootSignature = effectInstance.RootSignature;

// Update constant buffers and bind resources
// Обновить буферы констант и привязать ресурсы
effectInstance.Apply(context.GraphicsContext);
EffectInstance.Apply(context.GraphicsContext);
```
```

## Manual resource binding
## Привязка ресурсов вручную

When more optimized code is required (eg in the [rendering pipeline](../rendering-pipeline/index.md)), constant buffer updates and resource binding can be done manually.
Когда требуется более оптимизированный код (например, в [конвейере рендеринга](../rendering-pipeline/index.md)), постоянные обновления буфера и привязка ресурсов могут выполняться вручную.
