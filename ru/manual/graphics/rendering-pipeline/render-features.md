# Render features
# Особенности рендеринга

A @'Stride.Rendering.RenderFeature' is responsible for drawing a given type of @'Stride.Rendering.RenderObject'.
@'Stride.Rendering.RenderFeature' отвечает за отрисовку данного типа @'Stride.Rendering.RenderObject'.

## Render phases
## Этапы рендеринга

Render features have several phases.
Функции рендеринга имеют несколько этапов.

### Collect
### Собирать

The **collect** phase determines what needs to be processed and rendered. It's usually driven by the [graphics compositor](../graphics-compositor/index.md).
Фаза **сбора** определяет, что нужно обработать и отрендерить.  Обычно он управляется [графическим компоновщиком](../graphics-compositor/index.md).

The collect phase:
Фаза сбора:

* creates render views, and updating them with the most recent data such as view and projection matrices
* создает виды визуализации и обновляет их самыми последними данными, такими как матрицы видов и проекций
* creates and setting up render stages
* создает и настраивает этапы рендеринга
* performes visibility culling and sorting
* выполняет отбраковку и сортировку видимости

### Extract
### Извлекать

The **extract** phase copies data from game states of previously collected objects to short-lived render-specific structures. It's usually driven by the @'Stride.Rendering.RenderSystem' and @'Stride.Rendering.RenderFeature's.
Фаза **извлечения** копирует данные из игровых состояний ранее собранных объектов в недолговечные структуры, специфичные для рендеринга.  Обычно это управляется @'Stride.Rendering.RenderSystem' и @'Stride.Rendering.RenderFeature's.

This should be as fast as possible and avoid heavy computations since game update and scripts are blocked. Heavy computations should be deferred to [Prepare](#prepare).
Это должно быть как можно быстрее и избегать тяжелых вычислений, поскольку обновление игры и скрипты заблокированы.  Тяжелые вычисления следует отложить до [Prepare](#prepare).

> [!Note]
> [!Примечание]
> Currently, Stride doesn't parallelize game updates and scripts, so they won't be resumed until the **prepare** and **draw** phases are finished.
> В настоящее время Stride не распараллеливает игровые обновления и сценарии, поэтому они не будут возобновлены, пока не будут завершены этапы **подготовки** и **отрисовки**.

Example tasks:
Примеры задач:

* copying object matrices
* копирование матриц объектов
* copying material parameters
* копирование параметров материала

### Prepare
### Подготовить

The **prepare** phase prepares GPU resources and performs heavy computations. This is usually driven by the @'Stride.Rendering.RenderSystem' and @'Stride.Rendering.RenderFeature's.
Этап **подготовки** подготавливает ресурсы графического процессора и выполняет тяжелые вычисления.  Обычно это управляется @'Stride.Rendering.RenderSystem' и @'Stride.Rendering.RenderFeature's.

Example tasks:
Примеры задач:

* computing lighting data and structures
* расчет данных и структур освещения
* filling constant buffers and resource tables
* заполнение константных буферов и таблиц ресурсов

### Draw
### Рисовать

The **draw** phase fills the GPU command list.
Фаза **draw** заполняет список команд графического процессора.

Example tasks:
Примеры задач:

* setting up render textures
* настройка текстур рендера
* drawing combinations of render stage with render view.
* отрисовка комбинаций этапа рендеринга с видом рендера.

### Example
### Пример

A typical example of views and stages created during **collect** phase, used during the **draw** phase:
Типичный пример представлений и этапов, созданных на этапе **сбора**, используемых на этапе **отрисовки**:

![media/render-features-draw-example.png](media/render-features-draw-example.png)
![media/render-features-draw-example.png](media/render-features-draw-example.png)

### Pipeline processors
### Конвейерные процессоры

**Pipeline processors** are classes called when creating the [pipeline state](../low-level-api/pipeline-state.md). This lets you do things such as enable alpha blending or wireframe rendering in a specific render stage.
**Конвейерные процессоры** — это классы, вызываемые при создании [конвейерного состояния](../low-level-api/pipeline-state.md).  Это позволяет вам делать такие вещи, как включение альфа-смешения или рендеринга каркаса на определенном этапе рендеринга.

Stride includes several predefined pipeline processors. You can also create your own.
Stride включает в себя несколько предопределенных конвейерных процессоров.  Вы также можете создать свой собственный.

## See also
## Смотрите также

* [Rendering pipeline](index.md)
* [Конвейер рендеринга](index.md)
* [Render stages](render-stages.md)
* [Этапы рендеринга](render-stages.md)
* [Effects and shaders](../effects-and-shaders/index.md)
* [Эффекты и шейдеры](../effects-and-shaders/index.md)
* [Graphics compositor](../graphics-compositor/index.md)
* [Композитор графики](../graphics-compositor/index.md)
