# Sistema de Layout

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>
<span class="badge text-bg-success">Designer</span>

O sistema de layout de IU Stride é semelhante ao Windows Presentation Foundation (WPF). Para obter mais informações sobre o sistema de layout WPF, consulte a documentação [MSDN](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout). Grande parte da documentação WPF também se aplica ao sistema de layout Stride.

Cada @'Stride.UI.UIElement' no sistema de IU Stride tem um retângulo circundante usado em layouts. Stride computa layouts de acordo com o @'Stride. UI.UIElement' exigência, espaço de tela disponível, restrições, margens, padding, e o comportamento especial de @'Stride. UI.Panels. Elementos do painel (que organizam crianças de maneiras específicas).

Processamento de dados recursivamente, o sistema de layout computa uma posição e tamanho para cada @'Stride. UI.UIElement' no sistema UI.

## Medir e organizar

Stride executa o processo de layout recursivamente em dois passes: [Medidatura](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) e [Arranque](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)).

### Medidas

No [ Medida ](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) pass, cada elemento computa recursivamente seu [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) de acordo com as propriedades que você definiu, como @'Stride. UI.UIElement.Width', @'Stride.UI.UIElement.Height', e @'Stride.UI.UIElement. Margin's.

Alguns elementos @'Stride.UI.Panels.Panel chamam [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) recursivamente para determinar o [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) de seus filhos, e agir de acordo.

### Arranjo

O passe [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) organiza os elementos, tendo em conta:

* @'Stride.UI.UIElement. Margem '
* @'Stride.UI.UIElement. Largura '
* @'Stride.UI.UIElement. Altura '
* @'Stride.UI.UIElement.Horizontal Alinhamento '
* @'Stride.UI.UIElement.Alinhamento vertical '
* @'Stride.UI. Painéis. Painel '
* específico [ Organizar regras](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean))

## Ver também

* [Documentação de layout MSDN WPF](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout)
* [Páginas de interface](ui-pages.md)
* [Bibliotecas de interface](ui-libraries.md)
* [Editor de UI](ui-editor.md)
* [Adicionar uma interface de usuário a uma cena](add-a-ui-to-a-scene.md)