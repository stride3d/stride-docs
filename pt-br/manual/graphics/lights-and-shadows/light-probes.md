# Sondas de luz

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Artista </span>

** sondas de luz ** capturam a iluminação na posição que os colocam. Eles simulam **indirect light**, o efeito da luz saltando de superfícies e iluminando outras superfícies. Eles podem fazer uma diferença dramática ao humor e aparência de sua cena.

<p>
<video autoplay loop class="responsive-video" poster="media/light_probes_640.jpg">
   <source src="media/light_probes_640.mp4" type="video/mp4">
</video>
</p>

A captura de tela abaixo mostra uma luz [point](point-lights.md) rodeada por sondas de luz no Editor de cena. As sondas formam áreas 3D (mostradas no Editor de Cena pelo wireframe amarelo conectando as sondas).

![Cornell box](media/light-probes-cornell.png)

Passe pixels de cores dentro de uma área de sonda de luz para simular o efeito de luz saltando de superfícies próximas. Para encontrar uma cor para um determinado pixel, Stride interpola da iluminação capturada pelas quatro sondas de luz circundantes.

Por exemplo, na captura de tela abaixo, observe como o vermelho da parede se reflete nos outros objetos. No Editor de Cena, isso também é visível na superfície das sondas de luz.

![ sondas leves — mais reflexão](media/light-probes-illumination.png)

Sondas de luz afetam todos os objetos na área que cobrem, incluindo objetos estáticos e dinâmicos. Você não precisa ativar nenhuma opção extra nas entidades que as sondas leves afetam.

## 1. Ativar sondas de luz no compositor gráfico

O Stride permite sondas de luz por padrão em novos projetos. Para garantir que as sondas de luz estejam habilitadas:

1. No **Asset View** (no painel inferior por padrão), clique duas vezes no **Graphics Compositor** ativo.

   ![Gráficos Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

   O editor de compositores gráficos abre.

   ![Gráfico Compositor editor](../graphics-compositor/media/graphics-compositor-editor.png)

2. Selecione o nó **forward renderer**.

3. No **Property Grid** (à direita por padrão), certifique-se de que a caixa de seleção **Light é selecionada.**

   ![ Habilitar sondas de luz ](media/enable-light-probes.png)

Para obter mais informações sobre o compositor gráfico, consulte a página [Graphics compositor](../graphics-compositor/index.md).

## 2. Criar uma sonda de luz

Clique com o botão direito do mouse na cena ou Entity Tree e selecione **Light > Sonda de luz **.

![ Adicionar sonda de luz ](media/add-light-probe.png)

Alternativamente, crie uma entidade vazia e adicione um componente de sonda **Light** na Grade de Propriedade.

![ Adicionar componente de sonda de luz](media/add-light-probe-component.png)

Sondas de luz aparecem como esferas no Editor de cena. Antes de capturar um salto de luz pela primeira vez, eles têm uma superfície completamente preta.

![Light](media/light-probes-black.jpg)

## 3. Colocar sondas de luz

Sondas de luz devem ser colocadas de uma forma que cria um volume **3D**. Isto significa:

* Você precisa **pelo menos quatro sondas de luz** na cena — o suficiente para criar os quatro pontos de um tetraedro, como abaixo:

   ![Tetrahedron](media/light-probes-tetrahedron.png)

* Pelo menos uma sonda leve deve estar num avião diferente do resto. Por exemplo, as sondas na captura de tela abaixo não funcionarão, pois estão em um plano plano plano e não criam volume:

   ![Flat sondas](media/bad-light-probe-arrangement.png)

Um método típico é colocar sondas de luz em uma grade em sua cena cobrindo uma área geral, como nas capturas de tela abaixo:

![Grid layout](media/light-probes-grid-layout.jpg)

![ Sondas de luz no editor](media/light-probes-in-editor.jpg)

> [!Tip]
> Você pode duplicar rapidamente sondas de luz como outras entidades. Para fazer isso, selecione uma sonda de luz, segure **Ctrl** e mova-a com o mouse.

## 4. Iluminação de captura

1. Na barra de ferramentas do Editor de cena, clique no botão **lighting options** para abrir o menu de opções de iluminação.

   ![Opções de iluminação](media/lighting-options-menu.png)

2. Ao lado de **Bounces**, defina o número de saltos de luz que você deseja capturar.

   Vários saltos simulam o efeito da luz saltando entre superfícies várias vezes. Isso geralmente tem o efeito de iluminar a iluminação. Três ou quatro saltos devem ser suficientes; além disso, as mudanças são quase inaceitáveis. O número de saltos não tem impacto no desempenho do tempo de execução.

3. Para capturar a iluminação, clique em **Compute**.

   Você pode ver a iluminação na superfície das sondas de luz no Editor de cena.

   ![ Superfície da sonda de luz ](media/light-probes-illumination-on-surface.png)

## Redefinir sondas de luz

Para redefinir as sondas de luz, no menu **lighting options**, clique em **Reset**. Isso é útil depois de alterar as luzes em sua cena e precisa capturar a iluminação do zero.

![ Redefinir sondas de luz ](media/reset-light-probes.png)

## Mostrar e ocultar sondas de luz no Editor de cenas

Sob as opções **gizmo** na barra de ferramentas do Editor de Cena, use a caixa de seleção **Light probes**.

![ sondas de luz Hide](media/light-probes-checkbox.png)

## Mostrar e ocultar volumes de sonda de luz no Editor de cenas

Sob as opções **gizmo** na barra de ferramentas do Editor de Cena, use a caixa de seleção **Light probe volumes**.

![ volumes de sonda de luz Hide](media/light-probe-volumes-checkbox.png)

![ volumes de sonda de luz em e off](media/light-probe-wireframe-on.jpg)

## Ver também

* [Adicionar uma luz](add-a-light.md)
* [Luzes de ponto](point-lights.md)
* [Luzes ambientais](ambient-lights.md)
* [Luzes direcionais](directional-lights.md)
* [Luzes Skybox](skybox-lights.md)
* [Luzes do ponto](spot-lights.md)
* [Sombras](shadows.md)