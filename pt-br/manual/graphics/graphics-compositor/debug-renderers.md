# Renderizador de depuração

O renderizador **debug** é um renderizador de placeholder que você pode usar com scripts para imprimir informações de depuração. Por padrão, o renderizador de depuração é incluído no compositor gráfico como uma criança do ponto de entrada do jogo.

![Debug renderer](media/debug-renderer.png)

## Criar um renderizador de depuração

Para criar um renderizador de depuração, clique com o botão direito do mouse no editor de compositores gráficos e selecione **Debug renderer**.

![Criar renderizador de depuração](media/create-debug-renderer.png)

## Conecte um renderizador de depuração a um ponto de entrada

Na maioria dos casos, você deseja que o renderizador de depuração compartilhe um ponto de entrada com um ou mais renderizadores avançados. Para fazer isso, use uma coleção de renderizador **scene** e selecione o renderizador de depuração e renderizador(s) para a frente como crianças, como na captura de tela abaixo:

![Debug renderer Property Grid](media/debug-renderer-property-setup.png)

## Use um renderizador de depuração

Para usar o renderizador de depuração, faça referência no seu script e adicione etapas de renderização de depuração.

Por exemplo, o script **Debug Physics shapes** incluído no Stride usa o renderizador de depuração para exibir formas de colisão no tempo de execução.

```cs
usando o Sistema. Linq;
usando o Sistema. Threading. Tarefas;
usando Stride. Entrada;
usando Stride. Motor;
usando Stride. Física;
usando Stride. Renderização;
usando Stride. Renderização. Composição;

namespace MyGame
(
    classe pública DebugPhysics Formas: AsyncScript
    (
        renderGroup RenderGroup público = RenderGroup.Group7;

        override público async Task Execute()
        (
        //set up rendering in the debug entry point if we have it
        compositor var = SceneSystem.GraphicsCompositor;
        var debugRenderer =
            (compositor. Jogo como SceneCameraRenderer)?. Criança como SceneRendererCollection)?. Crianças. Onde..
                x => x é DebugRenderer). Cast<DebugRenderer>(). FirstOrDefault();
        se (debugRenderer == null)
            voltar;

        var shapesRenderState = novo RenderStage("PhysicsDebugShapes", "Main");
            compositor.RenderStages.Add (shapesRenderState);
            var meshRenderFeature = compositor.RenderFeatures.OfType<MeshRenderFeature>().First();
            meshRenderFeature.RenderStageSelectors.Add (novo SimplesGroupToRenderStageSelector
            (
                Efeito Nome = "StrideForwardShadingEffect",
                RenderGroup = (RenderGroupMask)(1 < (int)RenderGroup),
                RenderStage = shapesRenderState,
            });
            meshRenderFeature.PipelineProcessors.Add(new WireframePipelineProcessor { RenderStage = shapesRenderState });
            debugRenderer.DebugRenderStages.Add (shapesRenderState);

            var simulação = this.GetSimulation();
            se (simulação)
                simulação. ColliderShapesRenderGroup = RenderGroup;

            var habilitado = falso;
            enquanto (Game.IsRunning)
            (
                if (Input.IsKeyDown(Keys.LeftShift) && Input.IsKeyDown(Keys.LeftCtrl) && Input.IsKeyReleased(Keys.P)))))
                (
                    se (simulação)
                    (
                        se (habilitado)
                        (
                            simulação. ColliderShapesRendering = false;
                            habilitado = falso;
                        }
                        mais
                        (
                            simulação. ColliderShapesRendering = verdadeiro;
                            habilitado = verdadeiro;
                        }
                    }
                }

                await Script.NextFrame();
            }
        }
    }
}
```

Para obter informações sobre como usar este script, consulte [Colliders](../../physics/colliders.md).

## Ver também

* [Renderizadores de cenas](scene-renderers.md)
   * [Renderizações de cena personalizadas](custom-scene-renderers.md)
* [Física — Colliders](../../physics/colliders.md)