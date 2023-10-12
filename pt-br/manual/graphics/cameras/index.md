# Câmeras

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>

**Cameras** capturar sua cena e exibi-la ao jogador. Sem câmaras, não consegues ver nada no teu jogo.

Você pode ter um número ilimitado de câmeras em sua cena.

## Criar uma câmera no Game Studio

No Editor de Cena, clique com o botão direito do mouse e selecione **Camera**, em seguida, escolha o tipo de câmera que você deseja criar (**perspective** ou **orthographic**).

![ Adicionar câmera](media/add-camera.png)

Game Studio cria uma entidade com um componente de câmera anexado.

Alternativamente, selecione a entidade que deseja ser uma câmera e no **Property Grid**, clique em **Adicionar componente** e selecione **Camera**.

![ Adicionar um componente de câmera](media/add-camera-component.png)

## Propriedades da câmera

![ Propriedades da câmara](media/camera-properties.png)

| Propriedade | Descrição |
|---------------------|--------------------------------------------------
| Projecção | O tipo de projeção usado pela câmera (perspectiva ou ortográfica) |
| Campo de visão (graus) | O campo vertical de visão usado para projeção de perspectiva |
| Tamanho ortográfico | A altura da projeção ortográfica (a largura ortográfica é calculada automaticamente com base na relação alvo). Isso tem o efeito de ampliar dentro e fora |
| Próximo clip avião | O ponto mais próximo da câmera pode ver |
| Avião de clipe farto | O ponto mais distante da câmera pode ver |
| Relação de aspecto personalizado | Use uma relação de aspecto personalizado que você especificar.  Caso contrário, ajuste automaticamente a relação de aspecto à relação de destino de renderização |
| Relação de aspecto personalizado | A relação de aspecto para a câmera (quando a relação de aspecto **Custom** é selecionada) |
| Fenda de fenda | O slot de câmera usado no compositor gráfico. Para mais informações, consulte [Camera slots](camera-slots.md) |

## Câmeras visuais e ortográficos

** Câmeras perspectivas** fornecem uma perspectiva "mundo real" dos objetos em sua cena. Nesta visão, os objetos próximos à câmera aparecem maiores, e as linhas de comprimentos idênticos aparecem diferentes devido ao foreshortening, como na realidade. As câmeras de perspectiva são mais usadas para jogos que exigem uma perspectiva realista, como jogos de terceira pessoa e primeira pessoa.

Com câmeras **ortográficos**, os objetos são sempre do mesmo tamanho, não importa sua distância da câmera. Linhas paralelas nunca tocam, e não há ponto de fuga. As câmeras ortográficos são mais usadas para jogos com perspectivas isométricas, como alguma estratégia, 4X ou jogos de RPG.

![ Diagrama perspectivo e ortográfico](../../game-studio/media/perspective-orthographic-diagram.png)

| Perspectiva | Ortodoxo |
|--------------|------------
| ![ Visão prospectiva ](media/perspective-screenshot.png) | ![ Visão ortográfico](media/orthographic-screenshot.png) |

### Campo de visão (somente modoperspectivo)

Quando a câmera é definida para o modo **perspective**, o campo de visão ** muda a câmera frustum, e tem o efeito de zoom dentro e fora da cena.** Em altas configurações (90 e acima), o campo de visão cria vistas "olho-peixe" esticadas. A configuração padrão é 45.

| Campo de visão: 45 (padrão) | Campo de visão: 90 |
|-----------------------------|------------------
| ![ Padrão FOV](media/perspective-screenshot.png) | ![ Alto FOV](media/90-degree-fov.png) |

### Tamanho ortográfico (somente modo ortográfico)

Quando a câmera é definida para o modo **orthographic**, o tamanho **orthographic** tem o efeito de zoom in e out.

| Tamanho ortográfico: 10 (padrão) | Tamanho ortográfico: 50 |
|-----------------------------|------------------
| ![ Padrão FOV](media/orthographic-size-10.png) | ![ Alto FOV](media/orthographic-size-50.png) |

## Aviões próximos e distantes

Os planos próximos e distantes determinam onde a visão da câmera começa e termina.

* O **near plan** é o ponto mais próximo que a câmera pode ver. A configuração padrão é 0.1. Os objetos antes deste ponto não são desenhados.

* O plano **far**, também conhecido como distância de empate, é o ponto mais distante que a câmera pode ver. Os objetos além deste ponto não são desenhados. A configuração padrão é 1000.

Stride torna a área entre os planos próximos e distantes.

![ Camera position](../../get-started/media/camera-position.png)

| Perto do avião 0.1 (padrão); plano distante: 50 | Próximo do avião: 7; plano distante 1000 (padrão) |
|--------------------|------------------
| ![Avião distante: 50](media/far-clip-50.png) | ![Próximo do avião: 7](media/near-clip-7.png) |
| Com um valor baixo **far plan**, os objetos na distância próxima não são desenhados. | Com um alto valor **near plan**, os objetos próximos à câmera não são desenhados. |

## Scripts de câmera

Você pode controlar câmeras usando scripts **camera**. O Stride inclui três modelos de script de câmera: um script de câmera FPS, um script de câmera side-scrolling e um script de controlador de câmera básica.

### Adicionar um script de câmera no Game Studio

1. No **Asset View** (na parte inferior por padrão), clique em **Add asset > Scripts** e escolha o script de câmera que deseja adicionar.

   ![ Adicionar um script de câmera](media/add-camera-script.png)

2. No **Scene Editor**, selecione a entidade com a câmera que deseja controlar.

3. No **Property Grid** (à direita por padrão), clique em ** Adicionar componente** e selecione o script de câmera que você deseja usar.

   ![ Adicionar componente de script](media/add-camera-script-component.png)

   Game Studio adiciona o script da câmera à entidade.

Para obter mais informações sobre como criar e usar scripts, consulte [Scripts](../../scripts/index.md).

## Slots de câmera

**Camera slots** vinculam o compositor [graphics](index.md) às câmeras em sua cena. Você liga cada câmera a um slot, então define qual slot o compositor usa. Isso significa que você pode mudar a cena [root](../../game-studio/manage-scenes.md) ou compositor gráfico sem ter que atribuir novas câmeras cada vez.

Para obter mais informações, consulte os slots [Camera](camera-slots.md).

## Render uma câmera a uma textura

Você pode enviar uma visão da câmera para uma textura e usar a textura em objetos em sua cena. Por exemplo, você pode usar isso para exibir parte de sua cena em uma tela de TV na mesma cena, como imagens de câmera de segurança. Para mais informações, consulte as texturas [Render](../graphics-compositor/render-textures.md).

## Ver também

* [Slots de câmera](camera-slots.md)
* [Animar uma câmera](animate-a-camera-with-a-model-file.md)
* [Compositor gráfico](../graphics-compositor/index.md)
