# Animação aditiva

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Design</span>

A **animação aditiva** é o processo de combinar animações usando **clipes de variação** (também conhecidos como **clipes de animação aditiva**).

![Animações aditivas](media/animations-additive-sample.gif)

No exemplo acima, a animação mais à esquerda é a animação de *Caminhar*. A animação mais à direita é a animação *Parado*. As duas animações no centro são, respectivamente, as animações *Caminhar* e *Parado*, mas com a animação *Recarregar* adicionada a elas.

Isso significa que só precisamos criar três animações: *Caminhar*, *Parado* e *Recarregar*. Além disso, podemos adicionar a animação *Recarregar* a outras possíveis animações (por exemplo, *Agachar*, *Mover-se lateralmente* ou *Correr*). Isso ajuda a manter o consumo de memória e o número de animações em níveis baixos.

## Clipes de variação

Um **clipe de variação** descreve a diferença entre dois clipes de animação: um clipe de **origem** e um clipe de **referência**.

Considere a animação *Recarregar* acima, a qual desejamos adicionar a outros clipes de animação. Este é o nosso clipe de **origem** (O). Como a animação de *Recarregar* envolve principalmente os braços, ela terá uma boa transição com animações que não envolvem os braços, como ficar parado e agachar. Podemos usar uma dessas animações, digamos a animação *Parado*, como nosso clipe de **referência** (R).

O Stride calcula a diferença entre os clipes de origem e de referência para criar o clipe de **variação** (V). O clipe de variação codifica a diferença entre os clipes de origem e de referência,  expresso como V = O - R.

Podemos usar o clipe de variação para combinar as animações de origem e de referência. Também podemos usar o mesmo clipe de variação para mesclar a animação de origem com **outras** animações. Se a animação à qual você a adiciona for suficientemente semelhante ao clipe de referência original, as animações se combinarão harmoniosamente. Essa animação pode ser incorporada a qualquer outra que não envolva o uso dos braços, como, por exemplo, a animação de agachar.

> [!Note]
> Animações aditivas devem usar a mesma malha articulada e esqueleto.

### Criar um clipe de variação

1. No **Visualizador de Recursos** (por padrão, na parte inferior), clique em **Adicionar recurso** e selecione **Animações > Animação**. Uma janela de seleção de arquivos é exibida.

2. Como não precisamos de um arquivo de origem para esta animação, clique em **Cancelar**.

   O Game Studio perguntará se você deseja criar uma animação sem um arquivo de origem.

   ![Criar uma animação sem um arquivo de origem](media/create-animation-without-source-file.png)

3. Clique em **Sim**. O Game Studio adicionará um novo recurso de animação vazio ao Visualizador de Recursos.

4. Dê um nome ao recurso que o torne fácil de identificar. Por exemplo, se você deseja criar uma animação de recarregar que possa ser usada com outras animações, você pode nomear o recurso como *RecarregarAditivo*.

5. No **Visualizador de Recursos** (painel inferior por padrão), selecione o recurso de animação que você criou.

6. No **Editor de Propriedades** (à direita por padrão), adicione o clipe de animação de **origem**. Esta é a animação que você deseja aplicar a outras animações.

   ![Escolha o arquivo de origem](media/animations-additive-animations-1.png)

   > [!Note]
   > Certifique-se de adicionar o arquivo que contém a animação (por exemplo, um arquivo de modelo como um .fbx), e **não** o recurso de animação que a referencia. Arquivos de animação geralmente são salvos na pasta **Resources**

7. Em **Tipo**, escolha **Clipe de variação**.

8. Em **Referência**, especifique a animação que deseja usar como seu clip de **referência**. Essa é a animação que o Stride utilizará para criar um clipe de variação.

   ![Selecione o arquivo de referência](media/animations-additive-animations-2.png)

9. Escolha o **Modo** no menu suspenso.

   * A opção **animação** criará um clipe de variação baseado na animação completa de origem, fazendo referência a ela quadro a quadro.
   * A opção **PrimeiroQuadro** criará um clipe de variação a partir apenas do primeiro quadro da animação de origem, como uma pose estática.

10. Ao lado de **Esqueleto**, especifique um esqueleto para o clipe de variação.

   ![Escolha o esqueleto](media/animations-additive-animations-3.png)

   Este esqueleto deve ser compatível com todas as animações que você deseja combinar com o clipe de variação. Na maioria dos casos, é aconselhável utilizar o mesmo esqueleto que foi usado nas animações de origem e de referência.

11. Se desejar [visualizar a animação](preview-animations.md) na Visualização de Recursos,
   certifique-se de especificar um **modelo de visualização** adequado para a animação.

   ![Escolha o modo de reprodução](media/animations-additive-animations-4.png)

   > [!Note]
   > A Visualização de Recursos mostra apenas a animação de origem que você especifica no clipe de variação.

## Usando uma animação aditiva

Você pode usar animações aditivas com animações que usam o mesmo esqueleto e malha articulada.

1. No **Visualizador de Recursos** (na parte inferior, por padrão), clique em **Adicionar recurso**.

2. Selecione **Scripts > Animation start**.

   ![Iniciar animação](media/animations-additive-animations-animation-start.png)

   *AnimationStart* é um script de inicialização que você pode usar para carregar animações em seu modelo, incluindo animações aditivas. Para mais informações, consulte [Scripts de Animação](animation-scripts.md).

3. Recompile seu projeto para aplicar as alterações.

4. No **Visualizador de cenas**, selecione a entidade que você deseja animar.

   ![Selecione uma entidade](media/animations-use-3d-animations-select-entity.png)

   > [!Note]
   > Para animar uma entidade, a entidade deve ter um componente do tipo modelo.

5. No **Editor de Propriedades** (à direita por padrão), clique em **Adicionar componente** e escolha **Animações**.

   ![Adicionar componente de animação](media/animations-use-3d-animations-add-animation-component.png)

   O Game Studio adicionará um componente de animação à entidade.

6. Clique em **Adicionar componente** e selecione o script **AnimationStart**.

   ![Adicionar script de início de animação](media/add-animation-start-script.png)

   O script permite que você personalize uma lista de animações a serem carregadas na sua entidade.

7. Nas propriedades do componente **AnimationStart**, ao lado de **Animation**, clique no ![botão verde](~/manual/game-studio/media/green-plus-icon.png) com o sinal de mais (**Adicionar**).

   ![Adicionar uma animação à lista](media/add-animation-to-list.png)

8. Ao lado de **Clipe**, especifique a animação de **origem** que você definiu no clipe de variação.

   ![Especificar origem](media/specify-clip-1.png)

9. Ao lado de **Adicionar às Animações**, clique no ![botão verde](~/manual/game-studio/media/green-plus-icon.png) com o sinal de mais (**Adicionar**).

10. Expanda as propriedades da animação. Ao lado de **Clipe**, especifique a animação de **referência** que você definiu no clipe de variação.

   ![Especificar origem](media/specify-clip-2.png)

11. Em **Operação de Mesclagem**, selecione **Aditivo**.

   ![Especificar origem](media/type-additive.png)

12. Repita as etapas para adicionar quantas animações forem necessárias.

   ![Iniciar animação](media/animations-additive-animations-start2.png)

## Veja também

* [Índice de animação](index.md)
* [Importar animações](import-animations.md)
* [Propriedades de animação](animation-properties.md)
* [Configurar animações](set-up-animations.md)
* [Visualizar animações](preview-animations.md)
* [Scripts de animação](animation-scripts.md)
* [Animação procedural](procedural-animation.md)
* [Árvores de transição personalizadas](custom-blend-trees.md)
* [Atributos personalizados](custom-attributes.md)