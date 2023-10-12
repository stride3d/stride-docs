# Links de nó de modelo

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Arte</span>

> [!Note]
> Em algumas versões do Stride, os **links de nó de modelo** são chamados de **links de osso**.

O componente **link de nó de modelo** conecta uma entidade a um nó de um esqueleto em outra entidade.

Por exemplo, imagine que você tem dois modelos: um cavaleiro e uma espada. O personagem possui uma animação de golpe com a espada. Você pode utilizar um nó de link de modelo para posicionar a espada na mão do cavaleiro e anexá-la ao nó correto no esqueleto do cavaleiro, para que a espada se mova junto com a animação do cavaleiro.

<p>
<video autoplay loop class="responsive-video" poster="../particles/tutorials/media/sword-slash-1.jpg">
   <source src="../particles/tutorials/media/sword-slash-1.mp4" type="video/mp4">
</video>
</p>

## Configure um componente de link de nó de modelo.

1. No **Editor de cenas**, selecione a entidade à qual você deseja vincular a um nó de outra entidade.

2. No **Editor de Propriedades**, clique em **Adicionar componente** e selecione **Link de nó de modelo**.

   ![Adicionar componente](../particles/tutorials/media/add-model-node-link.png)

   O Game Studio adiciona um componente de link de nó de modelo à entidade.

   ![Componente de link de nó de modelo](media/model-node-component.png)

   O componente tem apenas duas propriedades: **Nome do nó** e **Destino**.

3. Ao lado de **Destino**, clique no ![Ícone de mão](~/manual/game-studio/media/hand-icon.png).

   A janela **Selecionar uma entidade** é exibida.

   ![Selecionar uma entidade](media/select-an-entity-window.png)

4. Selecione o modelo ao qual você deseja vincular a entidade e clique em **OK**.

   > [!Note]
   > A entidade de destino deve conter um modelo com uma estrutura de esqueleto, mesmo que o modelo não seja visível durante a execução.

   > [!Tip]
   > Se você não especificar um modelo, o Stride vinculará a entidade ao modelo na entidade pai.

5. Em **Nome do nó**, selecione o nó no modelo ao qual você deseja anexar esta entidade.

   ![Selecionar nó](media/select-node.png)

   Após vincular o nó, a Árvore de Entidades exibirá o link em azul ao lado do nome da entidade.

   ![Link de nó de modelo](media/model-node-link-sword-added.png)

## Deslocamento

Para adicionar um deslocamento à entidade vinculada, utilize o [TransformComponent](xref:Stride.Engine.TransformComponent) da entidade.

![Transformação](media/transform-component.png)

> [!Note]
> Se você não deseja adicionar um deslocamento, certifique-se de que os valores estejam todos definidos como `0,0,0`.

## Veja também

* [Importar animações](import-animations.md)
* [Propriedades de animação](animation-properties.md)
* [Configurar animações](set-up-animations.md)
* [Visualizar animações](preview-animations.md)
* [Scripts de animação](animation-scripts.md)
* [Animação aditiva](additive-animation.md)
* [Animação procedural](procedural-animation.md)
* [Árvores de transição personalizadas](custom-blend-trees.md)
* [Atributos personalizados](custom-attributes.md)

Para exemplos de como os links de nós de modelo são usados, consulte:

* [Partículas — Criar um rastro](../particles/tutorials/create-a-trail.md)
* [Câmeras — Animação de uma câmera com um arquivo de modelo](../graphics/cameras/animate-a-camera-with-a-model-file.md)
