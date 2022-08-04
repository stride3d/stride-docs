# Raycasting
# Рейкастинг

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Raycasting** traces an invisible line through the scene to find intersecting [colliders](colliders.md). This is useful, for example, to check which objects are in a gun's line of fire, or are under the mouse cursor when the user clicks.
**Raycasting** проводит невидимую линию через сцену, чтобы найти пересекающиеся [коллайдеры](colliders.md).  Это полезно, например, чтобы проверить, какие объекты находятся на линии огня или находятся под курсором мыши, когда пользователь щелкает.

>[!Note]
>[!Примечание]
>Raycasting uses **colliders** to calculate intersections. It ignores entities that have no collider component. For more information, see [Colliders](colliders.md).
>Raycasting использует **коллайдеры** для расчета пересечений.  Он игнорирует сущности, у которых нет компонента коллайдера.  Для получения дополнительной информации см. [Коллайдеры](colliders.md).

To use a raycast, in the current [Simulation](xref:Stride.Physics.Simulation), use [Simulation.Raycast](xref:Stride.Physics.Simulation.Raycast\(Stride.Core.Mathematics.Vector3,Stride.Core.Mathematics.Vector3\)).
Чтобы использовать raycast, в текущем [Simulation](xref:Stride.Physics.Simulation) используйте [Simulation.Raycast](xref:Stride.Physics.Simulation.Raycast\(Stride.Core.Mathematics.Vector3,Stride.Core  .Математика.Вектор3\)).

For an example of raycasting, see the **Physics Sample** project included with Stride.
Пример raycasting см. в проекте **Physics Sample**, включенном в Stride.

## Example code
## Пример кода

This code sends a raycast from the mouse's screen position:
Этот код отправляет raycast из положения мыши на экране:

```cs
```CS
public static bool ScreenPositionToWorldPositionRaycast(Vector2 screenPos, CameraComponent camera, Simulation simulation)
public static bool ScreenPositionToWorldPositionRaycast (Vector2 screenPos, CameraComponent camera, Simulation Simulation)
{
{
    Matrix invViewProj = Matrix.Invert(camera.ViewProjectionMatrix);
Матрица invViewProj = Matrix.Invert(camera.ViewProjectionMatrix);

    // Reconstruct the projection-space position in the (-1, +1) range.
// Реконструируем положение проекционного пространства в диапазоне (-1, +1).
    //    Don't forget that Y is down in screen coordinates, but up in projection space
// Не забывайте, что Y находится внизу в экранных координатах, но вверху в пространстве проекции
    Vector3 sPos;
Vector3 sPos;
    sPos.X = screenPos.X * 2f - 1f;
sPos.X = screenPos.X * 2f - 1f;
    sPos.Y = 1f - screenPos.Y * 2f;
sPos.Y = 1f - screenPos.Y * 2f;

    // Compute the near (start) point for the raycast
// Вычисляем ближнюю (начальную) точку для рейкаста
    // It's assumed to have the same projection space (x,y) coordinates and z = 0 (lying on the near plane)
// Предполагается, что он имеет те же координаты пространства проекции (x,y) и z = 0 (лежит на ближней плоскости)
    // We need to unproject it to world space
// Нам нужно разпроецировать его в мировое пространство
    sPos.Z = 0f;
sPos.Z = 0f;
    var vectorNear = Vector3.Transform(sPos, invViewProj);
var vectorNear = Vector3.Transform(sPos, invViewProj);
    vectorNear /= vectorNear.W;
вектор рядом /= вектор рядом.W;

    // Compute the far (end) point for the raycast
// Вычисляем дальнюю (конечную) точку рейкаста
    // It's assumed to have the same projection space (x,y) coordinates and z = 1 (lying on the far plane)
// Предполагается, что он имеет те же координаты пространства проекции (x,y) и z = 1 (лежит на дальней плоскости)
    // We need to unproject it to world space
// Нам нужно разпроецировать его в мировое пространство
    sPos.Z = 1f;
sPos.Z = 1f;
    var vectorFar = Vector3.Transform(sPos, invViewProj);
var vectorFar = Vector3.Transform(sPos, invViewProj);
    vectorFar /= vectorFar.W;
vectorFar /= vectorFar.W;

    // Raycast from the point on the near plane to the point on the far plane and get the collision result
// Raycast из точки на ближней плоскости в точку на дальней плоскости и получаем результат коллизии
    var result = simulation.Raycast(vectorNear.XYZ(), vectorFar.XYZ());
var result = Simulation.Raycast(vectorNear.XYZ(), vectorFar.XYZ());
    return result.Succeeded;
вернуть результат. Успешно;
}
}
```
```

## See also
## Смотрите также
* [Colliders](colliders.md)
* [Коллайдеры](colliders.md)
