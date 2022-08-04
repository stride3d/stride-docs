# Rendering pipeline
# Конвейер рендеринга

## Render features
## Особенности рендеринга

Rendering logic is divided into @'Stride.Rendering.RenderFeature's. Each render feature processes one type of @'Stride.Rendering.RenderObject' (eg meshes, sprites, particles, etc).
Логика рендеринга разделена на @'Stride.Rendering.RenderFeature's.  Каждая функция рендеринга обрабатывает один тип @'Stride.Rendering.RenderObject' (например, сетки, спрайты, частицы и т. д.).

Stride executes features in phases: **collect**, **extract**, **prepare** and **draw**. This means each step of the pipeline can be isolated, parallelized and optimized separately.
Stride выполняет функции поэтапно: **сбор**, **извлечение**, **подготовка** и **рисование**.  Это означает, что каждый шаг конвейера может быть изолирован, распараллелен и оптимизирован отдельно.

For more information, see [Render features](render-features.md).
Для получения дополнительной информации см. [Возможности рендеринга](render-features.md).

## Render views
## Рендеринг просмотров

You can render scenes from multiple points of view, represented as @'Stride.Rendering.RenderView's – eg player views in a splitscreen game, or separate shadow views for cascades in a [shadow map cascade](../lights-and-shadows/shadows.md).
Вы можете визуализировать сцены с нескольких точек зрения, представленных как @'Stride.Rendering.RenderView's — например, представления игроков в игре с разделенным экраном или отдельные виды теней для каскадов в [каскаде карты теней](../lights-and-shadows  /shadows.md).

Views are a first-class concept available to all rendering phases, allowing batching across multiple views.
Представления — это первоклассная концепция, доступная на всех этапах рендеринга и позволяющая выполнять пакетную обработку нескольких представлений.

## Render stages
## Этапы рендеринга

@'Stride.Rendering.RenderStage's select the [effect](../effects-and-shaders/index.md) and [pipeline state](../low-level-api/pipeline-state.md) per object, and define the output of a render pass.
@'Stride.Rendering.RenderStage выбирает [эффект](../effects-and-shaders/index.md) и [состояние конвейера](../low-level-api/pipeline-state.md) для каждого объекта,  и определите вывод прохода рендеринга.

For more information, see [Render stages](render-stages.md).
Для получения дополнительной информации см. [Этапы рендеринга](render-stages.md).

## Visibility
## Видимость

@'Stride.Rendering.RenderObject's are registered with a @'Stride.Rendering.VisibilityGroup'. During the **collect** phase, the visibility group culls and filters them based on the @'Stride.Rendering.RenderView' and @'Stride.Rendering.RenderStage'.
@'Stride.Rendering.RenderObject зарегистрированы в @'Stride.Rendering.VisibilityGroup'.  На этапе **сбора** группа видимости отбирает и фильтрует их на основе @'Stride.Rendering.RenderView' и @'Stride.Rendering.RenderStage'.

## In this section
## В этой секции

* [Render features](render-features.md)
* [Функции рендеринга](render-features.md)
* [Render stages](render-stages.md)
* [Этапы рендеринга](render-stages.md)
