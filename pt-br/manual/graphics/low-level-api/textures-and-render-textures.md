# Texturas e texturas de renderização

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Stride usa o @'Stride.Graphics. Classe Texture para interagir com objetos de textura em código.

Para obter mais informações sobre renderização a uma textura, consulte as texturas [Render](../graphics-compositor/render-textures.md).

## Carregar uma textura

Para carregar uma textura de um ativo em Stride, chame esta função:

```cs
// carrega a textura chamada pato.dds (ou .png etc.)
var myTexture = Content.Load<Texture>("duck");
```

Isso gera automaticamente um objeto de textura com todos os seus campos corretamente preenchidos.

## Criar uma textura

Você também pode criar texturas sem quaisquer ativos (por exemplo, para ser usado como destino de renderização). Para fazer isso, chame o construtor do @'Stride. Graphics.Texture' class. Veja o @'Stride.Graphics. Referência de classe Texture para obter a lista completa de opções e parâmetros disponíveis. Alguns formatos de textura podem não estar disponíveis em todas as plataformas.

### Código: Criar uma textura

```cs
var myTexture = Texture.New2D (GraphicsDevice, 512, 512, false, PixelFormat. R8G8B8A8_UNorm, TextureFlags.ShaderResource);
```

## Render texturas

### Criar um alvo de renderização

A classe @'Stride.Graphics.GraphicsPresenter' sempre fornece um alvo de renderização padrão e um buffer de profundidade. Eles são acessíveis através do @'Stride.Graphics.GraphicsPresenter.BackBuffer' e @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' propriedades. O apresentador é exposto pelo @'Stride.Graphics.GraphicsDevice.Presenter' propriedade do @'Stride.Graphics.GraphicsDevice'. No entanto, você pode querer usar seu próprio buffer para executar renderização off-screen ou pós-processos. Como resultado, Stride oferece uma maneira simples de criar texturas que podem atuar como render texturas e um buffer de profundidade.

### Código: Criar um buffer de destino de renderização personalizado e profundidade

```cs
// renderizar alvo
var myRenderTarget = Texture.New2D (GraphicsDevice, 512, 512, false, PixelFormat. R8G8B8A8_UNorm, TextureFlags.ShaderResource | TextureFlags.RenderTarget);
 
// buffer de profundidade estável
var myDepthBuffer = Texture.New2D (GraphicsDevice, 512, 512, false, PixelFormat.D16_UNorm, TextureFlags.DepthStencil);
```

> [!Note]
> Não se esqueça da bandeira @'Stride.Graphics.TextureFlags.RenderTarget' para ativar o comportamento do alvo de renderização.
>
> Certifique-se de que o PixelFormat está correto, especialmente para o buffer de profundidade. Tenha cuidado com os formatos disponíveis na plataforma de destino.

### Use um alvo de renderização

Uma vez que esses buffers são criados, você pode facilmente configurá-los como texturas de renderização atuais.

### Código: Use um alvo de renderização

```cs
// configura as texturas de renderização
CommandList.SetRenderTargetAndViewport (myDepthBuffer, myRenderTarget);
 
// definir o destino de renderização padrão
CommandList.SetRenderTargetAndViewport (GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer);
```

> [!Note]
> Certifique-se de que o alvo de renderização e o buffer de profundidade têm o mesmo tamanho. Caso contrário, o buffer de profundidade não é usado.

Você pode definir várias texturas de renderização ao mesmo tempo. Veja as sobrecargas de @'Stride.Graphics.CommandList.SetRenderTargets(Stride.Graphics.Texture,Stride.Graphics.Texture[x2/>)' e @'Stride.Graphics.CommandList.SetRenderTargetsAndViewrature(Stride.][]

> [!Note]
> Apenas o @'Stride.Graphics.GraphicsPresenter.BackBuffer' é exibido na tela, então você precisa renderizá-lo para exibir algo.

### Limpar um alvo de renderização

Para limpar texturas de renderização, ligue para o @'Stride.Graphics.CommandList.Clear (Stride.Graphics.Texture,Stride.Core.Mathematics.Color4)' e @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Graphleics.

### Código: Limpar os alvos

```cs
CommandList.Clear (GraphicsDevice.Presenter.BackBuffer, Color.Black);
CommandList.Clear(GraphicsDevice.Presenter.DepthStencilBuffer, DepthStencilClearOptions.DepthBuffer); // apenas limpar o buffer de profundidade
```

> [!Note]
> Não se esqueça de limpar o @'Stride.Graphics.GraphicsPresenter.BackBuffer' e o @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' cada quadro. Se você não o fizer, você pode ter comportamento inesperado dependendo do dispositivo. Se você quiser manter o conteúdo de um quadro, use um destino de renderização intermediário.

## Viewport

@'Stride.Graphics.CommandList.SetRenderTargetAndViewport (Stride.Graphics.Texture,Stride.Graphics.Texture)' ajusta a atual @'Stride. Gráficos. Viewport' para o tamanho completo do alvo de renderização.

Se você quiser apenas renderizar para um subconjunto da textura, defina o alvo de renderização e o viewport separadamente usando @'Stride.Graphics.CommandList.SetRenderTarget (Stride.Graphics.Texture,Stride.Graphics.Texture)' e @'Stride.Graphics.CommandList.SetView(Stport.Graport.

Você pode ligar vários viewports usando @'Stride.Graphics.CommandList.SetViewports (Stride.Graphics.Viewport[])' e @'Stride.Graphics.CommandList.SetViewports(System.Int32,Stride.Graphics.Viewport[r.]

### Código: Defina os viewports

```cs
// exemplo de um buffer HD completo
CommandList.SetRenderTarget (GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer); // nenhum conjunto de viewport
 
// exemplo de definir o viewport para ter uma borda de 10 pixels em torno da imagem em um buffer HD completo (1920x1080)
var viewport = novo Viewport(10, 10, 1900, 1060);
CommandList.SetViewport(viewport);
```

## Tesoura

O @'Stride.Graphics.CommandList.SetScissorRectangle (Stride.Core.Mathematics.Rectangle)' e @'Stride.Graphics.CommandList.SetScisorRectangles(Stride.Core.Mathematics.Rectangle[]) define os métodos do sc. Ao contrário do viewport, você precisa fornecer as coordenadas da localização dos vértices que definem a tesoura em vez de seu tamanho.

### Código: Defina a tesoura

```cs
// exemplo de definir a tesoura para cortar a imagem por 10 pixels ao seu redor em um buffer de hd completo (1920x1080)
var retângulo = novo retângulo (10, 10, 1910, 1070);
CommandList.SetScissorRectangles (retângulo);
 
var rectangles = new[] { new Rectangle(10, 10, 1900, 1060), new Rectangle(0, 0, 256, 256) };
CommandList.SetScissorRectangles (retângulos);
```

## Ver também

* [Render texturas](../graphics-compositor/render-textures.md)
