# Editor de UI

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Designer</span>

Você pode editar [UI páginas](ui-pages.md) e [UI bibliotecas](ui-libraries.md) com o **UI editor**.

Para abrir o editor, no <g id="1">Asset View</g>, clique duas vezes em uma página <g id="2">UI</g> ou <g id="3"><g id="4">UI library</g></g></g>.

![Open UI editor](media/open-UI-editor.png)

O editor da UI abre.

![UI editor Overview](media/ui-editor-overview.png)

O editor da UI compreende:

* a lista de bibliotecas [UI](ui-libraries.md) (**A**), que contêm os elementos (como botões e grades) que você pode adicionar ao seu UI

* uma árvore visual dos elementos na página UI (**B**)

* uma pré-visualização da página UI como ela aparece no jogo (**C**)

* a Property Grid (**D**) para editar as propriedades de seus elementos UI

## Bibliotecas de interface

Uma biblioteca **UI ** contém elementos **UI** (como grades, botões, controles deslizantes e assim por diante) que você pode usar e reutilizar em suas páginas UI. Eles trabalham de forma semelhante a [prefabs](../game-studio/prefabs/index.md) no Editor de Cena.

![UI biblioteca](media/UI-library.png)

Para obter mais informações, consulte as bibliotecas [UI](ui-libraries.md).

## Árvore visual

A árvore **visual** mostra os elementos na página UI e sua hierarquia. Isso é semelhante ao **Entity Tree** no Editor de Cena.

![UI propriedades de ativos](media/ui-editor-visual-tree.png)

O número de parênteses indica o número de crianças que um elemento tem. Alguns elementos, como botões, só podem ter uma criança.

Para reordenar elementos na árvore visual, arraste e solte-os.

Para mover um elemento para um novo grupo, clique com o botão direito do mouse no elemento e selecione **Group em**. Por exemplo, para criar uma nova grade e mover um elemento nele, clique com o botão direito do mouse no elemento e selecione **Grupo em > Grid**.

![Grupo em grade](media/group-into-grid.png)

## Visualização da interface

O **UI preview** exibe uma pré-visualização da interface do usuário como aparece no tempo de execução. A renderização é equivalente à renderização no jogo, assumindo que a resolução de projeto é a mesma que o componente UI que usa o ativo editado.

Por padrão, a interface de usuário é um **billboard**, o que significa que sempre enfrenta a câmera. A câmera UI view é **orthographic** (veja [Cameras](../graphics/cameras/index.md)).

Você pode selecionar, mover e redimensionar elementos na visualização como você faz em aplicativos de edição de imagem.

![Selecione um elemento](media/ui-editor-selecting.gif)

![ Mova um elemento](media/ui-editor-moving.gif)

![ Redimensionar um elemento](media/ui-editor-resizing.gif)

### Controles

| Acção | Controlo |
|-------------------|--------------------------------------
| Pan | Segure o botão do mouse do meio + mover o mouse |
| Zoom | Roda de rato |
| Acelere a panela/zoom | Segure o turno durante o panning ou zoom |

### Opções de ferramenta

Para alterar a cor e o tamanho das ferramentas de seleção, na barra de ferramentas do editor **UI**, clique em ![Eye icon](media/eye-icon.png)

> [!Note]
> Essas opções não têm efeito sobre como a interface do usuário é exibida no tempo de execução.

![UI editor view options](media/ui-editor-view-options.png)

* ** Orientação**: muda a largura das linhas que indicam a distância para as margens (em pixels)

* **Highlight**: muda a largura do destaque que aparece quando você move o mouse sobre um elemento

* **Seleção**: muda a largura do destaque da seleção

* ** Dimensionamento**: muda o tamanho das caixas nas bordas das seleções usadas para redimensionar elementos

## Adicionar um elemento de interface do usuário a uma página de interface do usuário

Para adicionar um elemento (como uma grade ou botão), arraste-o da biblioteca **UI** para a página UI ou a árvore **visual**.

![ Adicionar elemento UI](media/add-ui-element.gif)

## Propriedades

Você pode visualizar e editar propriedades do elemento no **Property Grid**.

![Property Grid!](media/element-property-grid.png)

As propriedades são classificadas por ** Aparência**, ** Comportamento**, ** Layout** e **Misc**.

### Aparência

Propriedades comumente usadas incluem `BackgroundColor`, `Opacity`, `Visibilidade` e `ClipToBounds`.

![ Propriedades de aparência](media/appearance-properties.png)

### Comportamento

Propriedades comumente usadas incluem se o elemento responde a eventos de toque(`CanBeHitByUser`).

![ Propriedades do comportamento](media/behavior-properties.png)

### Layout

As propriedades comumente utilizadas incluem o tamanho do elemento (`Height`, `Width` e `Depth`), o seu alinhamento (`.```````

![ Propriedades de layout](media/layout-properties.png)

### Misc

Esta categoria contém apenas o `Nome` do elemento.

![ Propriedades mínimas](media/misc-properties.png)

## Ver também

* [Páginas de interface](ui-pages.md)
* [Bibliotecas de interface](ui-libraries.md)
* [Adicionar uma interface de usuário a uma cena](add-a-ui-to-a-scene.md)
* [Sistema de Layout](layout-system.md)