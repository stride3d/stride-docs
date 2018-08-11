# Render stages

**Render stages** define how given objects are rendered (usually with their associated [effect/shader](../effects-and-shaders/index.md)). They also let you control advanced properties such as sorting and filtering objects.

Objects can subscribe to multiple render stages. For example, a mesh typically subscribes to both the `Opaque` and `ShadowCaster` stages, or the `Transparent` stage.

> [!Note]
> Render stages don't define the rendering order. The rendering order is controlled by the [graphics compositor](../graphics-compositor/index.md).

## Effect slots

**Effect slots** determine which [effect/shader](../effects-and-shaders/index.md) a render stage uses. You choose the effect slot with @'Xenko.Rendering.RenderStage.EffectSlotName'.

If multiple render stages exclusively render different objects, the stages can share the same effect slot. For example, as the opaque stage only renders opaque objects and the transparent stage only renders transparent objects, both stages can use the main effect slot.

If they render any of the same objects, they can't share effect slots. This is why, for example, we typically render opaque meshes with the main effect slot, then render opaque meshes again with the shadow caster effect slot to create shadows.

A typical setup of render stages:

| Render stage     | Effect slot  
| ---------------- | ------------ 
| Opaque           | Main         
| Transparent      | Main         
| UI               | Main         
| Shadow caster    | Shadow caster 

## Sort objects in a render stage

@'Xenko.Rendering.RenderStage.SortMode' defines how Xenko sorts objects in that render stage. Xenko comes with several @'Xenko.Rendering.SortMode' implementations, such as:

- @'Xenko.Rendering.FrontToBackSortMode', which renders objects from front to back with limited precision, and tries to avoid state changes in the same depth range of objects (useful for opaque objects and shadows)
- @'Xenko.Rendering.BackToFrontSortMode', which renders objects strictly from back to front (useful for transparent objects)
- @'Xenko.Rendering.StateChangeSortMode', which tries to reduce state changes

Of course, you're free to implement your own, too.

## Filter objects in a render stage

To create your own filter for objects in a render stage, inherit from @'Xenko.Rendering.RenderStageFilter'.

### Render stage selectors

**Render stage selectors** define which objects in your scene are sent to which render stage, and choose which [effect](../effects-and-shaders/effect-language.md) to use when rendering a given object.

For example, this is the typical setup for meshes:

- @'Xenko.Rendering.MeshTransparentRenderStageSelector' chooses either the `Main` or `Transparent` render stage, depending on the material properties. The default effect is `XenkoForwardShadingEffect` defined by Xenko (you can create your own if you want).
- @'Xenko.Rendering.Shadows.ShadowMapRenderStageSelector' selects opaque meshes that cast shadows and adds them to the `ShadowMapCaster` render stage. The default effect is `XenkoForwardShadingEffect.ShadowMapCaster`, defined by Xenko.

Either can filter by [render group](../graphics-compositor/render-groups-and-masks.md).

You can customize everything, so you can add other predefined render stage selectors (eg to add UI to a later full-screen pass), or create your own selector specific to your game.

## See also

* [Rendering pipeline](index.md)
* [Render features](render-features.md)
* [Effects and shaders](../effects-and-shaders/index.md)
* [Graphics compositor](../graphics-compositor/index.md)