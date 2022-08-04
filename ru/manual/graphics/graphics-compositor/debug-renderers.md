# Debug renderer
# Отладка рендерера

The **debug renderer** is a placeholder renderer you can use with scripts to print debug information. By default, the debug renderer is included in the graphics compositor as a child of the game entry point.
**Средство визуализации отладки** – это средство визуализации-заполнителя, которое можно использовать со сценариями для печати отладочной информации.  По умолчанию средство визуализации отладки включается в компоновщик графики как дочерний элемент точки входа в игру.

![Debug renderer](media/debug-renderer.png)
![Отладочный рендерер](media/debug-renderer.png)

## Create a debug renderer
## Создать отладочный рендерер

To create a debug renderer, right-click the graphics compositor editor and select **Debug renderer**.
Чтобы создать средство визуализации отладки, щелкните правой кнопкой мыши редактор графического компоновщика и выберите **Отладка средства визуализации**.

![Create debug renderer](media/create-debug-renderer.png)
![Создать средство визуализации отладки](media/create-debug-renderer.png)

## Connect a debug renderer to an entry point
## Подключаем отладочный рендерер к точке входа

In most cases, you want the debug renderer to share an entry point with one or more forward renderers. To do this, use a **scene renderer collection** and select the debug renderer and forward renderer(s) as children, as in the screenshot below:
В большинстве случаев вы хотите, чтобы средство визуализации отладки делило точку входа с одним или несколькими модулями прямой визуализации.  Для этого используйте **коллекцию рендереров сцены** и выберите отладочный рендерер и прямой рендерер(ы) в качестве дочерних элементов, как показано на снимке экрана ниже:

![Debug renderer Property Grid](media/debug-renderer-property-setup.png)
![Сетка свойств средства визуализации отладки](media/debug-renderer-property-setup.png)

## Use a debug renderer
## Использовать отладочный рендерер

To use the debug renderer, reference it in your script and add debug render stages.
Чтобы использовать отладочный рендерер, укажите его в своем скрипте и добавьте этапы отладочного рендеринга.

For example, the **Debug physics shapes** script included in Stride uses the debug renderer to display collider shapes at runtime.
Например, скрипт **Отладка физических фигур**, включенный в Stride, использует отладочный рендерер для отображения форм коллайдера во время выполнения.

```cs
```CS
using System.Linq;
с помощью System.Linq;
using System.Threading.Tasks;
использование System.Threading.Tasks;
using Stride.Input;
используя Stride.Input;
using Stride.Engine;
с помощью Stride.Engine;
using Stride.Physics;
использование Stride.Physics;
using Stride.Rendering;
использование Stride.Rendering;
using Stride.Rendering.Compositing;
использование Stride.Rendering.Compositing;

namespace MyGame
пространство имен MyGame
{
{
    public class DebugPhysicsShapes : AsyncScript
открытый класс DebugPhysicsShapes: AsyncScript
    {
{
        public RenderGroup RenderGroup = RenderGroup.Group7;
public RenderGroup RenderGroup = RenderGroup.Group7;

        public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
        {
{
        //set up rendering in the debug entry point if we have it
//настраиваем отрисовку в точке входа отладки, если она у нас есть
        var compositor = SceneSystem.GraphicsCompositor;
var композитор = SceneSystem.GraphicsCompositor;
        var debugRenderer =
переменная отладкиRenderer =
            ((compositor.Game as SceneCameraRenderer)?.Child as SceneRendererCollection)?.Children.Where(
((compositor.Game as SceneCameraRenderer)?.Child as SceneRendererCollection)?.Children.Where(
                x => x is DebugRenderer).Cast<DebugRenderer>().FirstOrDefault();
x => x — DebugRenderer).Cast<DebugRenderer>().FirstOrDefault();
        if (debugRenderer == null)
если (debugRenderer == ноль)
            return;
возвращаться;

        var shapesRenderState = new RenderStage("PhysicsDebugShapes", "Main");
var shapeRenderState = new RenderStage(
            compositor.RenderStages.Add(shapesRenderState);
композитор.RenderStages.Add(shapesRenderState);
            var meshRenderFeature = compositor.RenderFeatures.OfType<MeshRenderFeature>().First();
var meshRenderFeature = compositor.RenderFeatures.OfType<MeshRenderFeature>().First();
            meshRenderFeature.RenderStageSelectors.Add(new SimpleGroupToRenderStageSelector
meshRenderFeature.RenderStageSelectors.Add (новый SimpleGroupToRenderStageSelector
            {
{
                EffectName = "StrideForwardShadingEffect",
EffectName = 
                RenderGroup = (RenderGroupMask)(1 << (int)RenderGroup),
RenderGroup = (RenderGroupMask)(1 << (int)RenderGroup),
                RenderStage = shapesRenderState,
RenderStage = shapeRenderState,
            });
});
            meshRenderFeature.PipelineProcessors.Add(new WireframePipelineProcessor { RenderStage = shapesRenderState });
meshRenderFeature.PipelineProcessors.Add (новый WireframePipelineProcessor { RenderStage = shapeRenderState });
            debugRenderer.DebugRenderStages.Add(shapesRenderState);
debugRenderer.DebugRenderStages.Add(shapesRenderState);

            var simulation = this.GetSimulation();
переменная симуляция = this.GetSimulation();
            if (simulation != null)
если (моделирование != ноль)
                simulation.ColliderShapesRenderGroup = RenderGroup;
Simulation.ColliderShapesRenderGroup = RenderGroup;

            var enabled = false;
переменная включена = ложь;
            while (Game.IsRunning)
пока (Game.IsRunning)
            {
{
                if (Input.IsKeyDown(Keys.LeftShift) && Input.IsKeyDown(Keys.LeftCtrl) && Input.IsKeyReleased(Keys.P))
if (Input.IsKeyDown(Keys.LeftShift) && Input.IsKeyDown(Keys.LeftCtrl) && Input.IsKeyReleased(Keys.P))
                {
{
                    if (simulation != null)
если (моделирование != ноль)
                    {
{
                        if (enabled)
если (включено)
                        {
{
                            simulation.ColliderShapesRendering = false;
Simulation.ColliderShapesRendering = false;
                            enabled = false;
включено = ложь;
                        }
}
                        else
еще
                        {
{
                            simulation.ColliderShapesRendering = true;
Simulation.ColliderShapesRendering = true;
                            enabled = true;
включено = верно;
                        }
}
                    }
}
                }
}

                await Script.NextFrame();
ожидайте Script.NextFrame();
            }
}
        }
}
    }
}
}
}
```
```

For information about how to use this script, see [Colliders](../../physics/colliders.md).
Для получения информации о том, как использовать этот скрипт, см. [Коллайдеры](../../physics/colliders.md).

## See also
## Смотрите также

* [Scene renderers](scene-renderers.md)
* [Визуализация сцены] (scene-renderers.md)
    * [Custom scene renders](custom-scene-renderers.md)
* [Пользовательские рендеры сцен](custom-scene-renderers.md)
* [Physics — Colliders](../../physics/colliders.md)
* [Физика — Коллайдеры](../../physics/colliders.md)
