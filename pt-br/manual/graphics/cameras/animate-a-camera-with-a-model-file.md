# Animar uma câmera com um arquivo modelo

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>

Como outras entidades, você pode [animate](../../animation/index.md) câmeras usando animações importadas de arquivos de modelos 3D como `.3ds`, `.fbx`, e `.obj`.

> [!Note]
> Para animar uma câmera usando um arquivo de modelo, você primeiro precisa assar a animação usando sua ferramenta de modelagem (por exemplo, Maya, 3ds Max ou Blender).
> Stride não suporta câmeras animadas usando câmeras de destino.

Se a câmera se mover de forma independente, o método mais simples é exportar a animação da câmera como um arquivo separado, ativar a opção **root motion** na animação, em seguida, adicionar a câmera, animação e script de animação para a mesma entidade. Se as animações incluir FOV ou animações de plano próximo ou distante, a câmera Stride atualiza de acordo. Com este método, você não precisa de um modelo ou um esqueleto.

Se você quiser que a câmera se mova em conjunto com outra animação — por exemplo, se a câmera é mantida por um personagem do cameraman com seu próprio modelo, esqueleto e animação — use um componente [model node link](../../animation/model-node-links.md) para ligar a entidade da câmera aos movimentos do cameraman.

## Animar uma câmera de forma independente

Para fazer isso, você precisa dos seguintes ativos em seu projeto:

* a [camera entidade](../index.md), a câmera a ser animada
* um [animation](../../animation/import-animations.md), para animar a câmera (exportada separadamente em sua ferramenta de modelagem)
* um script [animation](../../animation/animation-scripts.md), para reproduzir a animação

1. No **Asset View**, selecione o ativo de animação que deseja usar para animar a câmera.

   ![Selecione a animação comoset](media/select-animation1.png)

   > [!Note]
   > Para obter instruções sobre como animações de importação, consulte [Import animações](../../animation/import-animations.md).

2. No **Property Grid**, enable **Root motion**.

   ![ Habilitar movimento root](media/enable-root-motion.png)

   Quando o movimento raiz é ativado, Stride aplica a animação do nó **root** para o [TransformComponent](xref:Stride.Engine.TransformComponent) da entidade que você adiciona a animação, em vez de aplicá-la ao esqueleto.

   > [!Note]
   > Se não houver nenhum esqueleto especificado em **Skeleton**, Stride sempre aplica a animação a [TransformComponent](xref:Stride.Engine.TransformComponent), mesmo se **root motion** é desativado.

3. No **Scene Editor**, selecione a entidade que contém a câmera que deseja animar.

   > [!Note]
   > Para obter instruções sobre como adicionar câmeras, consulte [Cameras](index.md).

4. No **Property Grid**, clique em **Add component** e selecione **Animações**.

   ![Selecione uma entidade](media/add-animations-component-to-camera.png)

   Game Studio adiciona um componente de animação à entidade.

   ![Animação componente](media/animation-component-added-to-camera.png)

5. Ao lado de **Animações**, clique em ![Verde mais botão](~/manual/game-studio/media/green-plus-icon.png) (**Add**) e digite um nome.

   ![ Adicionar animação](media/animation-name.png)

   Game Studio adiciona uma animação à lista.

   ![Animação adicionada ](media/animation-added.png)

6. Ao lado da animação que você adicionou, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   A janela **Selecione um ativo** abre.

   ![ Selecione um ativo](media/select-mycamera-animation.png)

7. Selecione a animação que deseja usar para animar a câmera e clique em **OK**.

8. Clique em ** Adicionar componente** e selecione o script de animação que você deseja usar para animar a câmera.

   ![ Adicionar script de animação](media/add-animation-script.png)

   Game Studio adiciona o script à entidade como um componente.

   > [!Note]
   > Para obter instruções sobre como adicionar scripts de animação, consulte scripts [Animation](../../animation/animation-scripts.md).

9. Sob o componente de script, ao lado de **Animations**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

   ![ Adicionar animação à lista](../../animation/media/add-animation-to-list.png)

10. Ao lado de <g id="1">Clip</g>, clique em <x id="2"/>Hand icon<x id="3"/>Select an asset</g>).<g id="4">

   A janela **Selecione um ativo** abre.

   ![ Selecione um ativo](media/select-mycamera-animation.png)

11. Selecione o ativo de animação que deseja usar para animar a câmera e clique em **OK**.

No tempo de execução, a câmera usa a animação. Se a animação incluir FOV ou animações de plano próximo ou distante, a câmera Stride atualiza de acordo.

## Anexar a câmera para um nó em outro modelo

Para mover uma câmera em conjunto com outro modelo, crie uma entidade separada para a câmera, em seguida, use um componente **model node link** para vincular a entidade ao nó correto.

Para fazer isso, você precisa dos seguintes ativos em seu projeto:

* a [camera entidade](../index.md), a câmera que você deseja animar
* a [model](../../animation/index.md), para anexar a câmera
* a [skeleton](../../animation/index.md) que corresponde ao modelo
* um [animation](../../animation/index.md), para animar o modelo
* um script [animation](../../animation/animation-scripts.md), para reproduzir a animação

> [!Note]
> FOV e animações planas próximas ou distantes são ignoradas se você usar este método.

1. No **Asset View**, selecione o modelo ao qual deseja vincular a câmera. Ao lado de **Skeleton**, certifique-se de que um esqueleto é especificado que corresponde ao modelo.

2. Certifique-se de que a entidade que você deseja anexar a câmera tem o modelo, clipe de animação e componentes de script de animação necessários para animá-lo.

   > [!Note]
   > Para obter instruções sobre como adicionar estes, consulte [Animation](../../animation/index.md).

3. Com a entidade da câmera selecionada, no **Property Grid**, clique em **Add component** e selecione **Model node link**.

   ![ Adicionar componente](../../particles/tutorials/media/add-model-node-link.png)

   > [!Note]
   > O [TransformComponent](xref:Stride.Engine.TransformComponent) aplica um deslocamento para a posição do nó do modelo. Se você não quiser adicionar um deslocamento, certifique-se de que o [TransformComponent](xref:Stride.Engine.TransformComponent) está definido para `0,0,0`.

   Game Studio adiciona um componente de link modelo para a entidade.

   ![Model nó link componente](../../animation/media/model-node-component.png)

4. Ao lado de **Target**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) e selecione a entidade que tem o modelo ao qual você deseja vincular a câmera.

   ![Selecione uma entidade](../../animation/media/select-an-entity-window.png)

   Alternativamente, deixe o campo **Target** em branco. No **Entity Tree**, arraste a entidade **camera** que deseja animar para a entidade que contém o modelo. Stride liga a entidade ao modelo na entidade pai.

   ![Parent e child](media/parent-and-child.png)

5. Em **Node name**, selecione o nó que deseja vincular a câmera.

   ![Node link](media/select-node.png)

   > [!Note]
   > A entidade que você liga deve ter um modelo com um esqueleto, mesmo que o modelo não seja visível no tempo de execução.

No tempo de execução, a câmera usa a animação.

## Ver também

* [Câmeras](index.md)
* [Modelo de links de nó](../../animation/model-node-links.md)
* [Animação](../../animation/index.md)
* [Scripts de animação](../../animation/animation-scripts.md)