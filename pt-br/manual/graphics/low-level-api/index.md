# API de baixo nível

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

A classe @'Stride.Graphics.GraphicsDevice é a classe central para exibir seu jogo. É usado para criar recursos e apresentar imagens na tela. Você pode acessá-lo como um membro do @'Stride. Engine.Game' e @'Stride.Engine.ScriptComponent' classes.

Ações como desenho, definição de estados gráficos e utilização de assets são gravadas usando objetos @'Stride.Graphics.CommandList para posterior execução pelo dispositivo.

Muitas listas de comando podem ser preenchidas ao mesmo tempo (por exemplo, uma por linha). Uma lista de comandos padrão está disponível como membro do @'Stride.Games.GameBase.GraphicsContext' do seu @'Stride. Motor. Jogo.

Em métodos, esses objetos são normalmente fornecidos através de contextos como @'Stride. Renderização. RenderContext' e @'Stride.Rendering.RenderDrawContext'.

Executar qualquer desenho requer vários passos, incluindo:

* definindo texturas como [render texturas](textures-and-render-textures.md), clarificá-las e definir viewports e tesouras
* configurando os gráficos [pipeline state](pipeline-state.md), incluindo descrição de entrada, shaders, profundidade-stencil, mistura, rasterizer, etc
* vinculação [recursos](resources.md), como amortecedores e texturas constantes
* [ desenho vértices](draw-vertices.md) usando primitivos incorporados ou tampões de vértice personalizados

## Nesta secção

* [Desenho vértices](draw-vertices.md)
* [Estado da tubulação](pipeline-state.md)
* [Assets](resources.md)
* [SpriteBatch](spritebatch.md)
* [SpriteFonte](spritefont.md)
* [Texturas e texturas de renderização](textures-and-render-textures.md)