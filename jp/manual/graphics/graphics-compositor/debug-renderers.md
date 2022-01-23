# デバッグ レンダラー
<!--
# Debug renderer
-->

**デバッグ レンダラー**は、スクリプトでデバッグ情報を表示するために使われるプレースホルダーレンダラーです。デフォルトでは、デバッグレンダラーは Game エントリポイントの子としてグラフィックスコンポジターに含まれています。
<!--
The **debug renderer** is a placeholder renderer you can use with scripts to print debug information. By default, the debug renderer is included in the graphics compositor as a child of the game entry point.
-->

![Debug renderer](media/debug-renderer.png)

## デバッグレンダラーを作成する
<!--
## Create a debug renderer
-->

デバッグレンダラーを作成するには、グラフィックコンポジターエディターを右クリックし、[**Debug renderer**] を選択します。
<!--
To create a debug renderer, right-click the graphics compositor editor and select **Debug renderer**.
-->

![Create debug renderer](media/create-debug-renderer.png)

## デバッグレンダラーをエントリポイントに接続する
<!--
## Connect a debug renderer to an entry point
-->

ほとんどの場合、デバッグレンダラーは、1つ以上のフォワードレンダラーとエントリポイントを共有する必要があります。そのためには、次のスクリーンショットのように、エントリポイントの **Child** プロパティを有効化して、デバッグレンダラーとフォワードレンダラーを子として登録します。
<!--
In most cases, you want the debug renderer to share an entry point with one or more forward renderers. To do this, use a **scene renderer collection** and select the debug renderer and forward renderer(s) as children, as in the screenshot below:
-->

![Debug renderer Property Grid](media/debug-renderer-property-setup.png)

## デバッグレンダラーを使用する
<!--
## Use a debug renderer
-->

デバッグレンダラーを使用するには、スクリプトで、それを参照してデバッグレンダーステージを追加します。
<!--
To use the debug renderer, reference it in your script and add debug render stages.
-->

例えば、Stride に付属する **Debug physics shapes** スクリプトでは、デバッグレンダラーを使用して、実行時にコライダーの形状を表示します。
<!--
For example, the **Debug physics shapes** script included in Stride uses the debug renderer to display collider shapes at runtime.
-->

```cs
using System.Linq;
using System.Threading.Tasks;
using Stride.Input;
using Stride.Engine;
using Stride.Physics;
using Stride.Rendering;
using Stride.Rendering.Compositing;

namespace MyGame
{
    public class DebugPhysicsShapes : AsyncScript
    {
        public RenderGroup RenderGroup = RenderGroup.Group7;

        public override async Task Execute()
        {
        //デバッグエントリポイントにレンダリングがある場合はそれを設定
        //set up rendering in the debug entry point if we have it
        var compositor = SceneSystem.GraphicsCompositor;
        var debugRenderer =
            ((compositor.Game as SceneCameraRenderer)?.Child as SceneRendererCollection)?.Children.Where(
                x => x is DebugRenderer).Cast<DebugRenderer>().FirstOrDefault();
        if (debugRenderer == null)
            return;

        var shapesRenderState = new RenderStage("PhysicsDebugShapes", "Main");
            compositor.RenderStages.Add(shapesRenderState);
            var meshRenderFeature = compositor.RenderFeatures.OfType<MeshRenderFeature>().First();
            meshRenderFeature.RenderStageSelectors.Add(new SimpleGroupToRenderStageSelector
            {
                EffectName = "StrideForwardShadingEffect",
                RenderGroup = (RenderGroupMask)(1 << (int)RenderGroup),
                RenderStage = shapesRenderState,
            });
            meshRenderFeature.PipelineProcessors.Add(new WireframePipelineProcessor { RenderStage = shapesRenderState });
            debugRenderer.DebugRenderStages.Add(shapesRenderState);

            var simulation = this.GetSimulation();
            if (simulation != null)
                simulation.ColliderShapesRenderGroup = RenderGroup;

            var enabled = false;
            while (Game.IsRunning)
            {
                if (Input.IsKeyDown(Keys.LeftShift) && Input.IsKeyDown(Keys.LeftCtrl) && Input.IsKeyReleased(Keys.P))
                {
                    if (simulation != null)
                    {
                        if (enabled)
                        {
                            simulation.ColliderShapesRendering = false;
                            enabled = false;
                        }
                        else
                        {
                            simulation.ColliderShapesRendering = true;
                            enabled = true;
                        }
                    }
                }

                await Script.NextFrame();
            }
        }
    }
}
```

このスクリプトの使い方については、[コライダー](../../physics/colliders.md)を参照してください。
<!--
For information about how to use this script, see [Colliders](../../physics/colliders.md).
-->

## 関連項目
<!--
## See also
-->

* [シーン レンダラー](scene-renderers.md)
    * [カスタム シーン レンダラー](custom-scene-renderers.md)
* [物理特性：コライダー](../../physics/colliders.md)

<!--
* [Scene renderers](scene-renderers.md)
    * [Custom scene renders](custom-scene-renderers.md)
* [Physics — Colliders](../../physics/colliders.md)
-->