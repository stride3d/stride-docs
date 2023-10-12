# Use sprites

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

Para adicionar um sprite a uma cena, adicione um componente **sprite** a uma entidade. Depois, você pode controlar o sprite com um script.

## Adicionar um componente sprite

1. No **Scene Editor**, selecione a entidade a que deseja adicionar um sprite.

   > [!Tip]
   > Para criar uma entidade, clique com o botão direito do mouse na cena ou Entity Tree e selecione **Empty entity**.

2. No **Property Grid**, clique em **Add component** e selecione **Sprite**.

   ![ Folha de preços ](media/SpriteEntity.png)

   Game Studio adiciona um componente Sprite à entidade.

3. Do **Asset View**, arraste a folha de sprite para o campo **Fonte** no componente Sprite:

<p>
        <video autoplay loop class="responsive-video" poster="media\drag-sprite-sheet-to-asset-picker.png">
        <source src="media\drag-sprite-sheet-to-asset-picker.mp4" type="video/mp4">
        </video>
    </p>

   Alternativamente, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**):

   ![Ativação rápida até](media/pick-asset-up.png)

   Em seguida, escolha uma folha de sprite:

   ![ Selecione um ativo](media/asset-picker.png)

Game Studio adiciona o sprite à entidade.

### Propriedades do componente Sprite

Você pode acessar as propriedades do componente sprite no **Property Grid**.

![ Propriedades do componente privado](media/sprite-component-properties.png)

| Propriedade | Função |
|------------|-----------
| Fonte | O arquivo de imagem de origem para o sprite |
| Tipo | **Sprites** have 3D space in the scene. <br><p>**Billboards** sempre enfrentam a câmera e aparecem fixos no espaço 3D. |
| Cor | Aplica uma cor ao sprite |
| Intensidade | A intensidade pela qual a cor é dimensionada (principalmente usada para renderizar sprites LDR em cenas HDR) |
| Premultiplicação alfa | Premultiplicar componentes de cor por seu componente alfa |
| Ignorar profundidade | Ignore a profundidade de outros elementos na cena ao renderizar o sprite. Isso sempre coloca o sprite em cima de elementos anteriores. |
| Corte alfa | Ignorar pixels com valores alfa baixos ao renderizar o sprite |
| Sampler | O método de amostragem de textura utilizado para o sprite: Ponto (mais próximo), Linear ou Anisotrópico |
| Swizzle | Como os canais de cores são acessados. <br><p>** Padrão** deixa a imagem inalterada (finalRGB = originalRGB) <br><p>**Normal map** usa os canais de cor como um mapa [normal](../graphics/textures/normal-maps.md) <br><p>**Grayscale (alpha)** usa apenas o canal R (finalRGBA = originalRRRR), então o sprite é vermelho <br><p>**Grayscale (opaque)** é o mesmo que **Grayscale (alpha)**, mas usa um valor de `1` para o canal alfa, de modo que o sprite é opaco |
| Grupo de renderização | A qual faz o grupo ao qual pertence o sprite. As câmeras podem renderizar diferentes grupos. Para mais informações, consulte grupos [Render e torne máscaras](../graphics/graphics-compositor/render-groups-and-masks.md). |

## Use sprites em um script

Você pode usar scripts para renderizar sprites em tempo de execução. Para fazer isso, anexar o script a uma entidade com um componente sprite.

Para obter informações sobre como adicionar scripts a entidades, consulte [Use um script](../scripts/use-a-script.md).

### Amostra de código

Este script exibe um sprite que avança para o próximo sprite no índice a cada segundo. Depois de atingir o fim do índice de sprite, ele loops.

```cs
usando Stride. Renderização. Sprites;

animação: Sincronização
(
   // Campos e propriedades de membros públicos declarados são exibidos no Game Studio.
   sprite privado FromSheet sprite;
   dataTime último privado Quadro;

   anula de sobreposição pública Start()
   (
       // Inicializar o script.
       sprite = Entity.Get<SpriteComponent>(). SpriteProvider como SpriteFromSheet;
       último Quadro = DateTime.Now;
   }

   atualização()
   (
      // Faça algo em cada novo quadro.
      se (DateTime. Agora - lastFrame) > novo TimeSpan(0, 0, 1))
      (
         sprite. CurrentFrame += 1;
         último Quadro = DateTime.Now;
      }
   }
}
```

## Ver também

* [Folhas de sprite de importação](import-sprite-sheets.md)
* [Editar sprites](edit-sprites.md)