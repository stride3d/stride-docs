# Exibir uma interface de usuário em uma sobreposição

Esta página explica como renderizar uma interface de usuário para uma textura, em seguida, exibi-la como uma sobreposição.

Estas instruções assumem que você já tem uma interface de usuário que você deseja exibir na sobreposição. Para obter informações sobre a criação de UIs, consulte a seção [UI](../ui/index.md).

> [!Note]
> Você não pode ver sobreposições quando você não executar seu jogo em seu dispositivo VR. Isso porque o próprio dispositivo VR cria a sobreposição, não outro hardware.

## 1. Criar uma textura de destino de renderização

No **Asset View**, clique em **Add asset** e selecione **Texture** > **Render target**.

![ Add render target](../graphics/graphics-compositor/media/add-render-target.png)

Game Studio adiciona uma textura **render target** para seus ativos de projeto.

![Render texture](../graphics/graphics-compositor/media/render-target-texture-in-asset-view.png)

Nas etapas seguintes, vamos renderizar a interface do usuário para esta textura, em seguida, exibi-la na sobreposição.

## 2. Adicionar uma sobreposição de RV

1. No **Asset View** (no painel inferior por padrão), clique duas vezes no **Graphics Compositor** ativo.

   ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

   O editor de compositores gráficos abre. Para obter mais informações sobre o compositor gráfico, consulte a página [Graphics compositor](../graphics/graphics-compositor/index.md).

2. No editor de compositores gráficos, selecione o nó **forward renderer**.

   ![Selecionar renderizador ](media/select-forward-renderer.png)

3. No **Property Grid** (à direita por padrão), expanda **VR Settings**.

   ![VR configurações](media/vr-settings.png)

4. Ao lado de **Overlays**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

   Game Studio adiciona uma nova sobreposição à lista.

   ![ Adicionar item VR](media/add-overlay.png)

5. Ao lado de <g id="1">Texture</g>, clique em <x id="2"/>Hand icon<x id="3"/>Select an asset</g>).<g id="4">

   A janela **Selecione um ativo** abre.

   ![Select render texture](../graphics/graphics-compositor/media/select-render-frame.png)

6. Selecione a textura **render** você criou e clique em **OK**.

## 3. Configurar o recurso de renderização UI

1. No editor de compositores gráficos, à esquerda, sob **Render Features**, selecione o **UIRenderFeature**.

   ![Select UI renderizar recurso](media/select-UI-render-feature.png)

2. Na Grade de Propriedade, certifique-se de **SimpleGroupToRenderStageSelector** é selecionado.

   ![Select SimpleGroupToRenderStageSelector.png](media/select-SimpleGroupToRenderStageSelector.png)

3. Sob **Render Stage**, certifique-se de **UIRenderStage** é selecionado.

   ![Selecionar UIRenderStage.png](media/select-UIRenderStage.png)

   Isso garante que a interface do usuário é renderizada na etapa de renderização da interface do usuário, que usaremos no próximo passo.

## 4. Configurar os renderizadores

Para exibir uma sobreposição, você precisa de pelo menos dois renderizadores:

* um para renderizar sua câmera principal
* um para renderizar a UI para a sobreposição

Esta página descreve a maneira mais simples de fazer isso do zero, usando duas câmeras e dois renderizadores. Dependendo do seu pipeline, você pode precisar criar uma configuração diferente.

> [!Warning]
> Essas instruções envolvem excluir seus renderizadores existentes para o ponto de entrada do jogo. Você pode querer fazer um backup do seu projeto no caso de você querer restaurar o seu pipeline depois.

1. No editor de compositores gráficos, selecione o nó **Pontos de entrada**.

   ![ Pontos de entrada node](../graphics/graphics-compositor/media/entry-points-node.png)

2. No **Property Grid** à direita, ao lado de **Game renderer**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione **None** para excluir seus renderizadores existentes.

   ![Cleared game renderers](../graphics/graphics-compositor/media/game-renderers-cleared.png)

3. Ao lado de **Game renderer**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione **Camera Renderer**.

   ![Select câmera renderer.png](media/select-camera-renderer.png)

   Atualmente, **all** renderizadores devem ter uma câmera, ou ser uma criança de um renderizador que tem uma câmera. Isso se aplica mesmo aos renderizadores que não usam necessariamente câmeras, como o renderizador de estágio único, o que torna a interface do usuário.

   Por esta razão, nestas instruções, vamos adicionar um renderizador de jogo com uma câmera, em seguida, fazer os dois renderizadores filhos daquele renderizador. Isso garante que ambos os renderizadores têm um pai com uma câmera.

4. Próximo a **Camera**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione sua câmera principal do jogo.

   ![Selecione a câmera principal](media/select-main-camera.png)

5. Ao lado de **Child**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione **SceneRendererCollection**.

   ![Selecione a coleção de renderizador de cena](media/select-scene-renderer-collection.png)

6. Ao lado de **Crianças**, Clique ![Verde mais botão](~/manual/game-studio/media/green-plus-icon.png) (**Add**) e selecione **RenderTextureSceneRenderer**.

   ![Selecionar RenderTextureSceneRenderer](media/select-RenderTextureSceneRenderer.png)

7. Ao lado de **Child**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione **SingleStageRenderer**.

   ![Select single stage renderer](media/select-single-stage-renderer.png)

8. Ao lado de **Render Stage**, clique em ![ botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione **UIRenderStage**. Este é o renderizador que torna a interface do usuário.

   ![Select UI render stage](media/select-UI-render-stage.png)

9. Ao lado de **Render Texture**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   A janela **Selecione um ativo** abre.

10. Selecione a textura **render** e clique em **OK**.

   ![Select render texture](../graphics/graphics-compositor/media/select-render-frame.png)

   Game Studio adiciona a textura de renderização ao renderizador.

11. Sob ** renderizador de Game**, ao lado de ** Crianças**, clique em ![Verde mais botão](~/manual/game-studio/media/green-plus-icon.png) (**Add**) e selecione **Forward renderer**.

   ![Selecionar renderizador ](media/overlay-select-forward-renderer.png)

Seu jogo agora está pronto para renderizar a interface do usuário para uma sobreposição em seu dispositivo VR.

## Modelo de RV

Por exemplo, uma sobreposição de interface do usuário implementada em um jogo VR, veja o modelo VR incluído no Stride.

![VR template](media/template-virtual-reality.png)

## Ver também

* [Sobreposições](overlays.md)
* [UI](../ui/index.md)
* [Render texturas](../graphics/graphics-compositor/render-textures.md)
* [Compositor gráfico](../graphics/graphics-compositor/index.md)
