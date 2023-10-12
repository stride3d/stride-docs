# Renderizadores de cena personalizados

Para criar um renderizador personalizado, implemente diretamente o @'Stride.Rendering.Compositing.ISceneRenderer' ou use um delegado através do @'Stride.Rendering.Compositing.DelegateSceneRenderer'.

## Implementar um ISceneRenderer

O @'Stride.Rendering.Compositing.SceneRendererBase' fornece uma implementação padrão de @'Stride.Rendering.Compositing.ISceneRenderer'. Ele automaticamente liga a saída define no renderizador para o GraphicsDevice antes de chamar o método `DrawCore`.

```cs
[DataContract("MyCustomRenderer")]
[Display("My Custom Renderer")]
classe pública selada MyCustomRenderer: Base de Dados
(
    // Implementa o método DrawCore
    protegido override void DrawCore (contexto RenderContext, RenderDrawContext drawContext)
    (
        // Acesso ao dispositivo gráfico
        var graphicsDevice = drawContext.GraphicsDevice;
        var commandList = drawContext.CommandList;
        // Limpa o alvo de renderização atual
        comandoList.Clear(commandList.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
    }
}
```

## Use um delegado

Para desenvolver um renderizador e anexá-lo a um método diretamente, use @'Stride.Rendering.Compositing.DelegateSceneRenderer':

```cs
var cenaRenderer = novo DelegadoSceneRenderer(
    (drawContext) =>
    (
        // Acesso ao dispositivo gráfico
        var graphicsDevice = drawContext.GraphicsDevice;
        var commandList = drawContext.CommandList;
        // Limpa o alvo de renderização atual
        comandoList.Clear(commandList.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
   });
```

## Ver também

* [Renderizadores de cenas](scene-renderers.md)
* [Renderizadores de depuração](debug-renderers.md)
