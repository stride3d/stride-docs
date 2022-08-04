# Render stages
# Этапы рендеринга

**Render stages** define how given objects are rendered (usually with their associated [effect/shader](../effects-and-shaders/index.md)). They also let you control advanced properties such as sorting and filtering objects.
**Этапы рендеринга** определяют, как рендерятся заданные объекты (обычно со связанными с ними [эффектами/шейдерами](../effects-and-shaders/index.md)).  Они также позволяют управлять дополнительными свойствами, такими как сортировка и фильтрация объектов.

Objects can subscribe to multiple render stages. For example, a mesh typically subscribes to both the `Opaque` and `ShadowCaster` stages, or the `Transparent` stage.
Объекты могут подписываться на несколько этапов рендеринга.  Например, меш обычно подписывается на этапы «Непрозрачный» и «ShadowCaster» или на этап «Прозрачный».

> [!Note]
> [!Примечание]
> Render stages don't define the rendering order. The rendering order is controlled by the [graphics compositor](../graphics-compositor/index.md).
> Этапы рендеринга не определяют порядок рендеринга.  Порядок рендеринга контролируется [графическим компоновщиком](../graphics-compositor/index.md).

## Effect slots
## Слоты эффектов

**Effect slots** determine which [effect/shader](../effects-and-shaders/index.md) a render stage uses. You choose the effect slot with @'Stride.Rendering.RenderStage.EffectSlotName'.
**Слоты эффектов** определяют, какой [эффект/шейдер](../effects-and-shaders/index.md) использует стадия рендеринга.  Вы выбираете слот эффекта с помощью @'Stride.Rendering.RenderStage.EffectSlotName'.

If multiple render stages exclusively render different objects, the stages can share the same effect slot. For example, as the opaque stage only renders opaque objects and the transparent stage only renders transparent objects, both stages can use the main effect slot.
Если несколько этапов рендеринга исключительно отображают разные объекты, этапы могут совместно использовать один и тот же слот эффекта.  Например, поскольку непрозрачный этап визуализирует только непрозрачные объекты, а прозрачный этап — только прозрачные объекты, оба этапа могут использовать слот основного эффекта.

If they render any of the same objects, they can't share effect slots. This is why, for example, we typically render opaque meshes with the main effect slot, then render opaque meshes again with the shadow caster effect slot to create shadows.
Если они визуализируют одни и те же объекты, они не могут использовать общие слоты эффектов.  Вот почему, например, мы обычно визуализируем непрозрачные сетки с помощью слота основного эффекта, а затем снова визуализируем непрозрачные сетки с помощью слота эффекта отбрасывателя теней для создания теней.

A typical setup of render stages:
Типичная настройка этапов рендеринга:

| Render stage     | Effect slot  
|  Этап рендеринга |  Слот эффекта
| ---------------- | ------------ 
|  ---------------- |  ------------
| Opaque           | Main         
|  Непрозрачный |  Главный
| Transparent      | Main         
|  Прозрачный |  Главный
| UI               | Main         
|  интерфейс |  Главный
| Shadow caster    | Shadow caster 
|  Заклинатель теней |  Заклинатель теней

## Sort objects in a render stage
## Сортировка объектов на этапе рендеринга

@'Stride.Rendering.RenderStage.SortMode' defines how Stride sorts objects in that render stage. Stride comes with several @'Stride.Rendering.SortMode' implementations, such as:
@'Stride.Rendering.RenderStage.SortMode' определяет, как Stride сортирует объекты на этом этапе рендеринга.  Stride поставляется с несколькими реализациями @'Stride.Rendering.SortMode', такими как:

- @'Stride.Rendering.FrontToBackSortMode', which renders objects from front to back with limited precision, and tries to avoid state changes in the same depth range of objects (useful for opaque objects and shadows)
- @'Stride.Rendering.FrontToBackSortMode', который отображает объекты спереди назад с ограниченной точностью и пытается избежать изменений состояния в одном и том же диапазоне глубины объектов (полезно для непрозрачных объектов и теней).
- @'Stride.Rendering.BackToFrontSortMode', which renders objects strictly from back to front (useful for transparent objects)
- @'Stride.Rendering.BackToFrontSortMode', который рендерит объекты строго сзади наперед (полезно для прозрачных объектов)
- @'Stride.Rendering.StateChangeSortMode', which tries to reduce state changes
- @'Stride.Rendering.StateChangeSortMode', который пытается уменьшить изменения состояния

Of course, you're free to implement your own, too.
Конечно, вы также можете реализовать свои собственные.

## Filter objects in a render stage
## Фильтрация объектов на этапе рендеринга

To create your own filter for objects in a render stage, inherit from @'Stride.Rendering.RenderStageFilter'.
Чтобы создать собственный фильтр для объектов на этапе рендеринга, наследуйте от @'Stride.Rendering.RenderStageFilter'.

### Render stage selectors
### Селекторы этапов рендеринга

**Render stage selectors** define which objects in your scene are sent to which render stage, and choose which [effect](../effects-and-shaders/effect-language.md) to use when rendering a given object.
**Селекторы этапа рендеринга** определяют, какие объекты в вашей сцене отправляются на какой этап рендеринга, и выбирают, какой [эффект] (../effects-and-shaders/effect-language.md) использовать при рендеринге данного объекта.

For example, this is the typical setup for meshes:
Например, это типичная настройка для сеток:

- @'Stride.Rendering.MeshTransparentRenderStageSelector' chooses either the `Main` or `Transparent` render stage, depending on the material properties. The default effect is `StrideForwardShadingEffect` defined by Stride (you can create your own if you want).
- @'Stride.Rendering.MeshTransparentRenderStageSelector' выбирает либо «Основной», либо «Прозрачный» этап рендеринга, в зависимости от свойств материала.  Эффект по умолчанию — StrideForwardShadingEffect, определенный Stride (вы можете создать свой собственный, если хотите).
- @'Stride.Rendering.Shadows.ShadowMapRenderStageSelector' selects opaque meshes that cast shadows and adds them to the `ShadowMapCaster` render stage. The default effect is `StrideForwardShadingEffect.ShadowMapCaster`, defined by Stride.
- @'Stride.Rendering.Shadows.ShadowMapRenderStageSelector' выбирает непрозрачные сетки, которые отбрасывают тени, и добавляет их на этап рендеринга `ShadowMapCaster`.  Эффект по умолчанию — StrideForwardShadingEffect.ShadowMapCaster, определенный Stride.

Either can filter by [render group](../graphics-compositor/render-groups-and-masks.md).
Либо можно фильтровать по [группе рендеринга](../graphics-compositor/render-groups-and-masks.md).

You can customize everything, so you can add other predefined render stage selectors (eg to add UI to a later full-screen pass), or create your own selector specific to your game.
Вы можете настроить все, например, добавить другие предопределенные селекторы стадий рендеринга (например, чтобы добавить пользовательский интерфейс к более позднему полноэкранному проходу) или создать свой собственный селектор, специфичный для вашей игры.

## See also
## Смотрите также

* [Rendering pipeline](index.md)
* [Конвейер рендеринга](index.md)
* [Render features](render-features.md)
* [Функции рендеринга](render-features.md)
* [Effects and shaders](../effects-and-shaders/index.md)
* [Эффекты и шейдеры](../effects-and-shaders/index.md)
* [Graphics compositor](../graphics-compositor/index.md)
* [Композитор графики](../graphics-compositor/index.md)
