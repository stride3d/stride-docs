# Gerenciar ativos

<span class="badge text-bg-primary">Introdução</span>

Esta página explica como editar e gerenciar seus ativos.

## Editar ativos na Grade de Propriedade

Você pode editar a maioria dos ativos usando o **Property Grid**. Por padrão, isso está no topo direito do Game Studio.

Por exemplo, para mudar a cor de um ativo material::

1. No **Asset View** (na parte inferior por padrão), selecione o material.

   ![Selecionar material no Asset View](../get-started/media/edit-asset-sphere-material-asset-view-tab.png)

2. Na Grade de Propriedade, sob **Shading > Diffuse**, ao lado de **Diffuse Map**, clique no **colored box**, que exibe a cor do ativo (amarelo neste exemplo).

   O picador de cores abre.

   ![capador de cores e paleta](../get-started/media/edit-asset-color-picker-palette-diffuse.png)

4. Selecione uma nova cor para o ativo.

   ![ Asset é agora vermelho](../get-started/media/edit-asset-color-change-selected-asset.png)

O ** Asset Preview** (bottom right by default) exibe mudanças de ativos em tempo real.

O **Asset View** indica ativos com mudanças não salvas com asteriscos (*).

![ Alterações não salvas ](../get-started/media/asset-unsaved-changes.png)

## Editar ativos usando editores dedicados

Game Studio tem editores dedicados para os seguintes tipos de ativos:

* pré-fabricados
* cenas
* folhas de sprite
* Páginas de interface
* Bibliotecas de interface
* scripts

Por exemplo, você edita cenas no **Scene Editor**.

![Scene Editor](media/manage-assets-scene-editor.png)

Para abrir o editor dedicado para esses tipos de ativos:

* clique duas vezes no ativo, ou
* clique com o botão direito do mouse no ativo e selecione **Editar asset**, ou
* selecione o ativo e digite **Ctrl + Enter**

## Organizar ativos

Recomendamos que você organize seus ativos em subpastas por tipo. Isso torna os projetos muito mais fáceis de gerenciar, especialmente quando eles se tornam grandes.

![ Projeto organizado](media/manage-assets-organized-project.png)

Os ativos estão contidos na pasta **Assets** do seu pacote de projeto. Você pode ver o projeto no **Solution Explorer** (por padrão mostrado na parte inferior esquerda).

* Para criar uma subpasta, clique com o botão direito do mouse na pasta pai e selecione **Create subfolder**.
* Para mover um ativo, selecione um ou mais ativos no **Asset View** e arraste e solte-os para a pasta.

> [!NOTE]
> Quando você move um ativo, Game Studio atualiza todas as referências a outros ativos dentro do ativo.

> [!TIP]
> Para ver a URL e o tipo de um ativo, mova o mouse sobre a miniatura de ativos.
> ![Detalhes de novo ativo na guia Asset View](../get-started/media/asset-creation-solution-explorer.png)

## Inclua ativos na compilação

Por padrão, Stride não inclui todos os ativos quando você construir o jogo. Isso porque você pode não precisar de todos os ativos no tempo de execução — por exemplo, se o ativo estiver incompleto.

O Stride inclui apenas ativos que:

* você marcou especificamente para inclusão (**root assets**), ou
* são **referenciados** por um ativo raiz

Game Studio indica se um ativo está incluído com um ícone colorido na parte superior esquerda da miniatura de ativos.

| Cor | Estado |
------|--------
| Azul <p><br>![Blue](media/manage-assets-reference-asset.png)</p></br> | O ativo é um ativo raiz e incluído na compilação. |
| Verde <p><br>![Verde](media/manage-assets-include-asset.png)</p></br> | O ativo é referenciado por um ativo raiz e incluído na compilação. |
| Cinza <p><br>![Gray](media/manage-assets-exclude-asset.png)</p></br> | O ativo não está incluído na compilação. |

Se você planeja carregar um ativo em tempo de execução usando scripts, faça dele um ativo raiz. Para fazer isso:

* clique no ponto **gray dot** na parte superior esquerda da miniatura, ou

* clique com o botão direito do mouse no ativo e selecione **Incluir na compilação como ativo root**

   ![Incluir em compilação como root asset](media/right-click-include-in-build-as-root-asset.png)

## Opções de exibição de ativos

Para alterar as opções de visualização de ativos, clique no ícone do olho na barra de ferramentas de visualização de ativos.

![ Opções de visualização ](../get-started/media/asset-view-options.png)

Você pode:

* exibir ativos apenas na pasta selecionada, a pasta selecionada e subpastas
* classificar ativos por nome, tipo, alterações não salvas e data de modificação
* alternar entre a vista da telha (padrão) e a vista da grade

## Filtrar ativos

Quando navegando ativos no **Asset View** (na parte inferior por padrão), você pode filtrar por nome, tag, tipo ou uma combinação de todos os três.

Os filtros de etiquetas e nomes são filtros "e". Por exemplo, se você filtrar por *tag:level* e *name:knight*, o Asset View só exibe ativos com a tag "level" ** e** o nome "knight".

Os filtros de tipo são filtros "ou". Por exemplo, se você filtrar por *type:animation* e *type:texture*, o Asset View só exibe ativos que são animações **or** texturas.

### Adicionar um filtro

1. Na visualização de ativos, digite na barra de filtro.

   Game Studio exibe uma lista de filtros correspondentes (nome, tipo ou tag).

   ![add-filter.png](media/add-filter.png)

2. Para filtrar por nome, pressione **Enter**.

   Para filtrar por uma tag ou tipo, selecione **tag** ou **type** filtros na lista suspensa.

   Game Studio aplica o filtro e mostra ativos correspondentes no Asset View.

Você pode adicionar vários filtros. Os filtros de nome são verdes, os filtros de etiqueta são azuis e os filtros de tipo são laranja.

![filter-tags](media/filter-tags.png)

### Alternar filtros em e fora

Para alternar um filtro dentro e fora sem removê-lo, clique nele. Os filtros desabilitados têm cores mais escuras.

![filter-tags](../get-started/media/disabled-filter-tags.png)

### Remover um filtro

Para remover um filtro, clique no ícone X na etiqueta de filtro.

## Ver também

* [Criar ativos](create-assets.md)
* [Gerenciar ativos](manage-assets.md)
* [Utilizar activos](use-assets.md)