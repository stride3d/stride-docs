# SpriteBatch

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Um lote de sprite é uma coleção de sprites (2D planos texturizados).

> [!Note]
> Lembre-se que você precisa colocar todo o código personalizado em um renderizador de cena [custom](../graphics-compositor/custom-scene-renderers.md) para incluí-lo na composição.

## Criar um lote de sprite

Stride oferece uma maneira fácil de lidar com lotes de sprites através do @'Stride. Graphics.SpriteBatch' class. Você pode usar esta classe para reagrupar, atualizar e exibir sprites de forma eficiente.

** Código:** Criando um lote sprite

```cs
var spriteBatch = novo SpriteBatch (GraphicsDevice);
```

Você pode especificar o tamanho do seu tamanho de lote. Este não é o número máximo de sprites que o SpriteBatch é capaz de exibir, mas o número máximo de sprites que pode armazenar antes do desenho.

** Código:** Definindo o tamanho do lote

```cs
var spriteBatch = novo SpriteBatch (GraphicsDevice, 2000);
```

Você também pode definir estados como os discutidos na página [Pipeline state](pipeline-state.md).

## Desenhe um lote de sprite

A classe @'Stride.Graphics.SpriteBatch' tem vários métodos de sorteio para definir vários parâmetros. Para obter uma lista de recursos, consulte a documentação da API @'Stride.Graphics.SpriteBatch'.

** Código:** Desenho de um lote de sprite

```cs
// iniciar as operações de lote de sprite
spriteBatch.Begin (GraphicsContext, SpriteSortMode.Immediate);
 
// desenhar o sprite imediatamente
spriteBatch.Draw(myTexture, new Vector2(10, 20));
 
// terminar as operações de lote sprite
spriteBatch.End();
```

Há cinco modos para desenhar um lote de sprite. Eles são enumerados no @'Stride.Graphics.SpriteSortMode' enum:

- Deferido (modo padrão): os sprites são desenhados ao mesmo tempo no final para reduzir a sobrecarga de drawcall
- Imediato: os sprites são sorteados após cada @'Stride.Graphics.SpriteBatch.Draw' chamada
- Textura: Modo diferido, mas os sprites são classificados com base em sua textura para reduzir a atualização dos parâmetros de efeito
- BackToFront: Modo diferido com um tipo baseado na ordem z dos sprites
- FrontToBack: Modo diferido com um tipo baseado na ordem z dos sprites

Para definir o modo, especifique-o no método @'Stride.Graphics.SpriteBatch.Begin'.

** Código:** Desenho diferido do lote sprite

```cs
// iniciar as operações de lote de sprite
spriteBatch.Begin(GraphicsContext); // mesmo que sprite Batch. Comece (GraphicsContext, SpriteSortMode.Deferido);

// armazenar a modificação do sprite
spriteBatch.Draw(myTexture, new Vector2(10, 20));

// terminar as operações de lote sprite, desenhar todos os sprites
spriteBatch.End();
```

Você pode definir vários parâmetros no sprite. Por exemplo:

- posição
- rotação
- escala
- profundidade
- centro de deslocamento
- tintura de cor

Para uma lista completa, consulte a documentação API @'Stride.Graphics.SpriteBatch', especialmente os métodos **Draw**.

** Código:** Mais complexo sprite lote desenho

```cs
// iniciar as operações de lote de sprite
spriteBatch.Begin (GraphicsContext);
rede de segurança Contagem = 10;
var textureOffset = novo Vector2(float)graphicsDevice.BackBuffer.Width/gridCount, (float)graphicsDevice.BackBuffer.Height/gridCount);
var textureOrigin = novo Vector2 (myTexture). Largura/2.0f, myTexture.Height/2.0f);

// desenhar 100 sprites em uma grade 10x10 com uma rotação de 1,2 rad e uma escala de 0,5 para cada um deles
para (int y = 0; y < gridCount; y++)
(
    para (int x = 0; x < gridCount; x++)
    (
        spriteBatch.Draw (UVTexture, novo Vector2(x * textureOffset.X + textureOffset.X / 2.0f, y * textureOffset. Y + textureOffset.Y / 2.0f), Color.White, 1.2f, textureOrigin, 0.5f);
    }
}
 
// terminar as operações de lote sprite, desenhar todos os sprites
spriteBatch.End();
```

## Ver também

* [SpriteFonte](spritefont.md)