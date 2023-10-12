# SpriteFonte

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

A classe @'Stride.Graphics.SpriteFont' é uma maneira conveniente de desenhar texto. Ele funciona com a classe @'Stride.Graphics.SpriteBatch'.

> [!Note]
> Você precisa colocar todo o código personalizado em um renderizador de cena [Custom](../graphics-compositor/custom-scene-renderers.md) para incluí-lo na composição.

## Carregar um sprite Fonte

Depois que um ativo de fonte é compilado ele pode ser carregado como um @'Stride. Graphics.SpriteFont' instância usando o @'Stride.Core.Serialization.Assets.ContentManager'. Ele contém todas as opções para exibir um texto (bitmaps, kerning, espaçamento de linha etc).

** Código:** Carregar um SpriteFont

```cs
var myFont = Content.Load<SpriteFont>("MyFont");
```

## Escrever texto na tela

Uma vez que a fonte é carregada, você pode exibir qualquer texto com um @'Stride. Graphics.SpriteBatch. O método @'Stride.Graphics.SpriteBatch.DrawString executa o sorteio. Para obter mais informações sobre o SpriteBatch, consulte a página [SpriteBatch](spritebatch.md).

** Código:** Escreva texto

```cs
// criar o SpriteBatch
var spriteBatch = novo SpriteBatch (GraphicsDevice);

// não se esqueça do início
spriteBatch.Begin (GraphicsContext);
 
// desenhar o texto "Helloworld!" em vermelho do centro da tela
spriteBatch.DrawString (myFont, "Helloworld!", novo Vector2(0.5, 0.5), Color.Red);
 
// não se esqueça do fim
spriteBatch.End();
```

As várias sobrecargas permitem especificar a orientação do texto, escala, profundidade, origem, etc. Você também pode aplicar alguns @'Stride.Graphics.SpriteEffects' ao texto:

- Nenhuma
- Apertar de volta
- FlipVertically
- FlipBoth

** Código:** Desenho de texto avançado

```cs
// desenhar o texto "Hello world!" upside-down em vermelho do centro da tela
spriteBatch.DrawString (myFont, "Olá, mundo!", novo Vector2(0.5, 0.5), Color.Red, 0, novo Vector2(0, 0), novo Vector2(1,1), SpriteEffects. FlipVertically, 0);
```

## Ver também

* [SpriteBatch](spritebatch.md)