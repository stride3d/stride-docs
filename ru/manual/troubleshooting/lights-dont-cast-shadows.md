# Lights don't cast shadows
# Свет не отбрасывает тени

If you've enabled shadows on a light in your scene, but it isn't casting shadows, make sure you have enough space in the shadow atlas. You might need to reduce the size of the shadows in the properties of your light components to create room.
Если вы включили тени для источника света в своей сцене, но он не отбрасывает тени, убедитесь, что у вас достаточно места в атласе теней.  Возможно, вам придется уменьшить размер теней в свойствах ваших световых компонентов, чтобы создать пространство.

For more information about shadows and the shadow atlas, see [Graphics - Shadows](../graphics/lights-and-shadows/shadows.md).
Для получения дополнительной информации о тенях и атласе теней см. [Графика - Тени](../graphics/lights-and-shadows/shadows.md).

## Shadow atlas comparison
## Сравнение атласа теней

| Size: 2x     | Size: 1x
|  Размер: 2x |  Размер: 1x
| ---------------------------------------------------------------- | -------------------------------------------------------------
|  --------------------------------------------------  -------------- |  --------------------------------------------------  -----------
| ![FPS scene shadow map](../graphics/lights-and-shadows/media/shadow-atlas-2x.png)               | ![FPS scene shadow map](../graphics/lights-and-shadows/media/shadow-atlas-1x.png)
|  ![Карта теней сцены FPS](../graphics/lights-and-shadows/media/shadow-atlas-2x.png) |  ![Карта теней сцены FPS](../graphics/lights-and-shadows/media/shadow-atlas-1x.png)
| This light source uses the entirety of the shadow atlas. This means other lights won't cast shadows, as there's no room left in the atlas.| This light source uses one quarter of the shadow atlas. The rest can be allocated to other light sources.
|  Этот источник света использует весь атлас теней.  Это означает, что другие источники света не будут отбрасывать тени, так как в атласе не осталось места.|  Этот источник света использует четверть атласа теней.  Остальное можно выделить другим источникам света.

## Reduce the shadow size
## Уменьшить размер тени

1. In the Scene Editor, select an entity with a light that casts a shadow.
1. В редакторе сцен выберите объект с источником света, отбрасывающим тень.

2. In the **Light** component properties, under **Shadow > Size**, reduce the size of the shadow using the drop-down menu. 
2. В свойствах компонента **Свет** в разделе **Тень > Размер** уменьшите размер тени с помощью раскрывающегося меню.

    ![media/DirectionalLightProperties.png](../graphics/lights-and-shadows/media/DirectionalLightProperties-size.png)
![media/DirectionalLightProperties.png](../graphics/lights-and-shadows/media/DirectionalLightProperties-size.png)

    Alternatively, disable shadows on the light entirely by clearing the **Shadows** checkbox.
Либо полностью отключите тени на источнике света, сняв флажок **Тени**.

Repeat these steps for as many light entities as you need to create space in the shadow atlas.
Повторите эти шаги для такого количества световых объектов, сколько вам нужно, чтобы создать пространство в теневом атласе.

## See also
## Смотрите также

* [Graphics — Shadows](../graphics/lights-and-shadows/shadows.md)
* [Графика — Тени](../graphics/lights-and-shadows/shadows.md)
* [Graphics — Directional lights](../graphics/lights-and-shadows/directional-lights.md)
* [Графика — Направленные огни](../graphics/lights-and-shadows/directional-lights.md)
