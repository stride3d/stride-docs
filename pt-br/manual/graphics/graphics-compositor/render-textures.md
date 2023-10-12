# Render texturas

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Programação</span>

Com texturas **render**, você pode enviar uma visão da câmera para uma textura e usar a textura em objetos em sua cena. Por exemplo, você pode usar isso para exibir parte de sua cena em uma tela de TV na mesma cena, como imagens de câmera de segurança.

Para detalhes da API, consulte [Texturas e renderize texturas](../low-level-api/textures-and-render-textures.md).

## 1. Criar um slot de câmera extra

Os slots da câmera ligam o compositor gráfico às câmeras em sua cena. Você precisa adicionar um slot de câmera para uma nova câmera usar. Para obter mais informações sobre slots de câmera, consulte as slots [Camera](../cameras/camera-slots.md).

1. No **Asset View** (no painel inferior por padrão), clique duas vezes no **Graphics Compositor** ativo.

   ![Gráficos Compositor asset](media/graphics-compositor-asset.png)

   O editor de compositores gráficos abre.

   ![Gráfico Compositor editor](media/graphics-compositor-editor.png)

2. À esquerda, abaixo de **Camera slots**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

   ![Camera slots](media/graphics-compositor-camera-slots.png)

   Game Studio adiciona um novo slot para câmera.

   > [!Tip]
   > Para renomear um slot de câmera, clique duas vezes na lista e digite um novo nome.
   > ![Nome um slot de câmera](media/name-camera-slot.png)

## 2. Crie uma câmera e ligue-a ao slot

1. Em sua cena, adicione um **camera component** à entidade que você deseja ser sua câmera.

   ![ Adicionar componente da câmera](media/add-camera-component.png)

2. Posicione a entidade para que a câmera capture a área da cena que você deseja renderizar para uma textura.

3. Na entidade **Property Grid**, ativar o componente **Camera** usando a caixa de seleção.

   ![ Ativar componente da câmera](media/enable-camera-component.png)

4. no **Camera** Propriedades do componente, sob **Slot**, selecione o slot que você criou na etapa anterior.

   ![Select câmera slot](media/graphics-compositor-overview-2.png)

## 3. Criar uma textura de destino de renderização

No **Asset View**, clique em **Add asset** e selecione **Texture** > **Render target**.

![ Add render target](media/add-render-target.png)

Game Studio adiciona uma textura **render target** para seus ativos de projeto.

![Render texture](media/render-target-texture-in-asset-view.png)

## 4. Coloque a textura do alvo de renderização na cena

Existem várias maneiras de usar a textura do alvo de renderização.

### Exemplo 1: Use a textura do alvo de renderização em um material

1. Nas propriedades materiais, sob **Shading**, ao lado de **Diffuse map**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione **Textura**.

   ![Selecione textura](media/select-texture.png)

2. Clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

3. Selecione o **Render texture** asset e clique em **OK**.

   ![Select render frame](media/select-render-frame.png)

### Exemplo 2: Use a textura do alvo de renderização em um componente sprite

1. Crie uma entidade e posicione-a onde deseja exibir a textura.

2. Com a entidade selecionada, no **Property Grid**, clique em **Add component** e adicione um componente **sprite**.

   ![ Adicionar componente sprite](media/add-sprite-component.png)

3. Nas propriedades do componente sprite, ao lado de **Source**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** substituir**) e selecione **Textura**.

   ![Select sprite source](media/sprite-source-texture.png)

4. Clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   A janela **Selecione um ativo** abre.

5. Selecione o **Render texture** asset e clique em **OK**.

   ![Select render frame](media/select-render-frame.png)

6. Se você não quiser que a textura seja semitransparente, sob as propriedades **Fonte**, limpe a caixa de seleção ** É transparente**.

   ![Clear-is-transparent](media/clear-is-transparent.png)

## 5. Configurar o compositor gráfico

Para exibir uma textura de renderização em sua cena, você precisa de pelo menos dois renderizadores:

* um para renderizar sua câmera principal
* um para renderizar a segunda câmera para a textura render

Esta página descreve a maneira mais simples de fazer isso do zero, usando duas câmeras e dois renderizadores. Dependendo do seu pipeline, você pode precisar criar uma configuração diferente.

> [!Warning]
> Essas instruções envolvem excluir seus renderizadores existentes para o ponto de entrada do jogo. Você pode querer fazer um backup do seu projeto no caso de você querer restaurar o seu pipeline depois.

1. No editor de compositores gráficos, selecione o nó **Pontos de entrada**.

   ![ Pontos de entrada node](media/entry-points-node.png)

2. No **Property Grid** à direita, ao lado de **Game renderer**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione **None** para excluir seus renderizadores existentes.

   ![Cleared game renderers](media/game-renderers-cleared.png)

3. Clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione ** Coleta de renderizadores de faixa**.

   ![Selecione a coleção de renderizador de cena](media/select-scene-renderer-collection.png)

   Isso permite definir vários renderizadores para o ponto de entrada do jogo.

### 1. Render a câmera principal

1. Sob ** renderizador de jogos **, ao lado de ** Crianças **, clique em ![Verde mais botão](~/manual/game-studio/media/green-plus-icon.png) (**Add**) e selecione ** Renderador de câmara **.

   ![Select câmera renderer](media/select-render-camera.png)

2. Próximo a **Camera**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione sua câmera principal do jogo.

   ![Selecione a câmera principal](media/select-main-camera.png)

4. Ao lado de **Child**, selecione o renderizador para sua câmera principal do jogo (por exemplo, o renderizador **forward**).

   ![ Selecione renderização ](media/select-main-camera-forward-renderer.png)

### 2. Render a textura

1. Sob ** renderizador de jogos**, ao lado de ** Adicionar a Crianças**, clique em ![Verde mais botão](~/manual/game-studio/media/green-plus-icon.png) (**Add**) e selecione ** renderizador de câmara**.

   ![Select câmera renderer](media/select-render-camera2.png)

   Game Studio adiciona um renderizador de câmera à lista de crianças.

   ![Second câmera renderer](media/added-camera-renderer.png)

2. Expanda o segundo renderizador **camera**.

   ![Expand segundo renderer](media/expand-second-camera-renderer.png)

3. Próximo a **Camera**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione a câmera que deseja renderizar para uma textura.

   ![Selecione a câmera de textura](media/select-texture-camera.png)

4. Ao lado de **Child**, clique em ![ botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione **RenderTextureSceneRenderer**.

   ![Selecionar renderizador de cena de textura](media/render-texture-scene-renderer.png)

5. Sob o **RenderTextureSceneRenderer**, ao lado de **Child**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione o renderizador para sua câmera principal do jogo (por exemplo, o **forward renderer**).

   ![Selecionar renderizador ](media/select-forward-renderer2.png)

6. Ao lado de <g id="1">Render texture</g>, clique em <x id="2"/>Hand icon<x id="3"/>Select an asset</g>).<g id="4">

   A janela **Selecione um ativo** abre.

7. Selecione a textura **render** e clique em **OK**.

   ![Select render texture](media/select-render-frame.png)

   Game Studio adiciona a textura de renderização ao renderizador.

   ![ Textura de gênero adicionada ](media/render-texture-added.png)

Seu jogo agora está pronto para renderizar a câmera para a textura na cena.

## Definir uma máscara de renderização

Você pode usar a máscara **render** para filtrar quais grupos são renderizados na textura de renderização.

Ao lado de **Render mask**, clique em **Alterar valores** e selecione os grupos de renderização que você deseja que a câmera renderize.

![Render mask](media/change-render-mask.png)

Para mais informações, consulte [Render groups e masks](render-groups-and-masks.md).

## Amostra

Para um exemplo de renderização a uma textura em um projeto, veja a amostra **Animation** incluída no Stride.

## Ver também

* [Câmeras](../cameras/index.md)
* [Slots de câmera](../cameras/camera-slots.md)
* [API de baixo nível – Textures e render texturas](../low-level-api/textures-and-render-textures.md)
* [Render grupos e máscaras](render-groups-and-masks.md)
* [Compositor gráfico](index.md)
* [Renderizadores de cenas](scene-renderers.md)