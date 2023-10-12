# UI

O Stride possui um sistema de editor e layout de interface de usuário sofisticado que você pode usar para construir interfaces de usuário sofisticadas. Ele suporta 2D e 3D independentemente da resolução.

![UI editor](media/ui-editor.png)

Stride usa dois tipos de UI ativo: `UIPageAsset` e `UILibraryAsset`. Suas contrapartes de tempo de execução são `UIPage` e `UILibrary` respectivamente.

Para reduzir o número de chamadas de sorteio, Stride desenha vários elementos usando um renderizador de lote de sprite.

## Controles

Stride possui muitos componentes de controle de interface do usuário, incluindo:

* @'Stride.UI.Controls.ImageElement '
* @'Stride.UI.Controls.ContentControl '
   * @'Stride.UI.Controls.ScrollViewer '
   * @'Stride.UI.Controles.Button '
      * @'Stride.UI.Controles.ToggleButton '
   * @'Stride.UI.Controls.ContentDecorator '
* @'Stride.UI.Controls.TextBlock '
   * @'Stride.UI.Controles.ScrollingText '
* @'Stride.UI.Controls.EditText' (exibe teclado macio em dispositivos móveis)
* @'Stride.UI. Painéis. Painel '
   * @'Stride.UI.Panels.StackPanel' (suporta virtualização)
   * @'Stride.UI.Panels.Grid '
   * @'Stride.UI.Panels.UniformGrid '
   * @'Stride.UI.Panels.Canvas '
* @'Stride.UI.Controles.ScrollBar '
* @'Stride.UI.Controls.Modal Elemento '

Você também pode criar seu próprio.

## Projeto de amostra

Sem scripts, UIs são simplesmente imagens não interativas. Para torná-los interativos, adicione um script.

Para um exemplo de uma interface de usuário implementada no Stride, veja a amostra do menu UI</g>game incluída no Stride.<g id="1">

![Projeto de interface de usuário amplo](media/ui-sample-project.png)

## Nesta secção

* [Páginas de interface](ui-pages.md)
* [Bibliotecas de interface](ui-libraries.md)
* [Editor de UI](ui-editor.md)
* [Adicionar uma interface de usuário a uma cena](add-a-ui-to-a-scene.md)
* [Sistema de Layout](layout-system.md)

## Ver também

* [VR — Exibir uma interface de usuário em uma sobreposição](../virtual-reality/display-a-ui-in-an-overlay.md)