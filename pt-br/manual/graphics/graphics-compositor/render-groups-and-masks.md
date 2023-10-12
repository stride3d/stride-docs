# Render grupos e máscaras

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Designer</span>

Com **render groups** e **render masks**, você pode escolher quais partes da sua cena são renderizadas por diferentes [cameras](../cameras/index.md). Por exemplo, você pode ter um modelo ser visível para a câmera A, mas invisível para a câmera B.

## Definir um grupo de renderização

1. Na cena, selecione a entidade com o componente (como um modelo ou componente [UI](../../ui/add-a-ui-to-a-scene.md)) que deseja adicionar a um grupo de renderização.

2. No **Property Grid**, ao lado de **Render group**, selecione o grupo ao qual deseja que a entidade pertença.

   ![Select render group](media/select-render-group.png)

## Definir uma máscara de renderização

Os filtros **render mask** que os grupos são renderizados.

1. No **Asset View** (no painel inferior por padrão), clique duas vezes no **Graphics Compositor** ativo.

   ![Gráficos Compositor asset](media/graphics-compositor-asset.png)

   O Editor de Compositores Gráficos abre.

   ![Gráfico Compositor editor](media/graphics-compositor-editor.png)

2. Selecione o nó ** Pontos de entrada**.

   ![ Pontos de entrada node](media/entry-points-node.png)

3. No **Property Grid**, expanda o renderizador que deseja renderizar o modelo.

4. Ao lado de **Render mask**, clique em **Alterar valores** e selecione os grupos de renderização que você deseja que a câmera renderize.

   ![Render mask](media/change-render-mask.png)

## Ver também

* [Câmeras](../cameras/index.md)
* [Slots de câmera](../cameras/camera-slots.md)
* [Compositor gráfico](index.md)
* [Renderizadores de cenas](scene-renderers.md)
* [Render texturas](render-textures.md)