# Luzes Skybox

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Programação</span>

A **skybox light** é uma luz [ambient](ambient-lights.md) emitida por um [skybox](../textures/skyboxes-and-backgrounds.md). Stride analisa a textura da caixa do céu e gera iluminação usando iluminação baseada em imagem [ (Wikipedia)](https://en.wikipedia.org/wiki/Image-based_lighting).

![media/SkyboxLightOverview.png](media/SkyboxLightOverview.png)

As luzes Skybox são boas para cenas externas, onde a caixa de céu é visível. Eles são menos úteis para cenas interiores, como em salas onde a caixa do céu é apenas visível através das janelas; como a luz da caixa do céu, no entanto, ilumina toda a sala, isso cria um efeito não natural.

## Como as caixas de céu iluminam a cena

Estas imagens mostram a diferença entre iluminação ambiente e Skybox em dois materiais difusos puros [](../materials/index.md):

| Iluminação ambiente | Iluminação Skybox |
| ----------------- | ----
| ![ Iluminação abrangente ](media/AmbientLight.png) | ![Skybox lighting.png](media/SkyboxLight-MaterialPureDiffuse.png) |

Estas imagens mostram o efeito da iluminação skybox em um material com diferentes propriedades de metal e brilho:

| Material plástico | Metal 100% Gloss 50% | 100% de brilho 100% |
--------- | -------- | --- | -------- |
| ![Material plastic](media/SkyboxLight-MaterialPlastic.png) | ![Material 100% Gloss 100%](media/SkyboxLight-MaterialMetal100Gloss50.png) | ![Metal 100% Gloss 100%](media/SkyboxLight-MaterialMetal100Gloss100.png) |

Observe como as cores de textura de Skybox são refletidas.

## Configurar uma luz skybox

Para usar uma caixa de céu como uma luz, você precisa adicionar um ativo Skybox, em seguida, selecione-o em um componente [Light](xref:Stride.Engine.LightComponent).

1. No **Asset View**, clique em ![Add asset](media/engine-skybox-add-new-asset-button.png)

2. Selecione **Miscelânea** > **Skybox**.

   ![Escolha tipo de ativo](media/engine-skybox-choose-asset-type.png)

   A janela **Selecione um ativo** abre.

3. Escolha uma textura skybox dos ativos do projeto e clique em **OK**.

   ![Escolha textura](media/engine-skybox-select-skybox-texture.png)

   Game Studio adiciona o ativo skybox com a textura que você especificou.

4. Selecione a entidade que você deseja ser a luz do skybox.

5. No **Property Grid** (à direita por padrão), clique em **Add component** e selecione [Light](xref:Stride.Engine.LightComponent).

   ![ Propriedades do componente de fundo](media/skybox-add-light-component.png)

6. Nas propriedades do componente **Light**, abaixo de **Light**, selecione **Skybox**.

   ![ Propriedade de componente leve](media/light-component-property.png)

7. Clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**):

   ![ Nenhum ativo de caixa de céu selecionado](media/no-skybox-asset-selected.png)

8. Selecione o ativo Skybox que deseja usar como fonte de luz e clique em **OK**.

   ![ Selecione um ativo](media/select-skybox-asset.png)

O componente [Light](xref:Stride.Engine.LightComponent) usa o asset skybox para iluminar a cena.

## Propriedades de ativos Skybox

Quando você usa uma caixa de céu como uma luz, Stride o usa tanto em forma compactada ([spherical harmônicos (Wikipedia)](https://en.wikipedia.org/wiki/Spherical_harmonics)) e como uma textura para iluminar diferentes tipos de material. Você pode controlar os detalhes de ambas as propriedades de ativos da Skybox.

![Skybox propriedades de iluminação](media/skybox-asset-properties.png)

| Propriedade | Descrição |
| ------------ | ---------- 
| Textura | A textura para usar como caixa de céu (por exemplo, um cubemap ou textura panorâmica) |
| Apenas especular | Use a caixa do céu apenas para iluminação especular |
| Diffuse SH order | O nível de detalhe da caixa de céu comprimido, usado para iluminação difusa (materiais). `Order5` é mais detalhado do que `Order3`. |
| Tamanho do Cubemap especular | O tamanho da textura usado para iluminação especular. Texturas maiores têm mais detalhes. |

## Propriedades de luz Skybox

![media/SkyboxLightProperties.png](media/SkyboxLightProperties.png)

| Propriedade | Descrição |
| ------------ | ----------
| Intensidade | A intensidade da luz |
| Máscara de Culing | Quais grupos de entidades são afetados pela luz. Por padrão, todos os grupos são afetados |

## Exemplo de código

O código seguinte muda a luz da caixa de céu e sua intensidade:

```cs
skybox Skybox público;
void público ChangeSkyboxParameters()
(
    // Obter o componente de luz de uma entidade
	var light = Entity.Get<LightComponent>();

	// Obter as configurações de luz Skybox do componente de luz
	var skyboxLight = luz. Tipo como LightSkybox;

	// Substituir a caixa de céu existente
	skyboxLight.Skybox = skybox;

	// Alterar a intensidade de luz da caixa de céu
	luz. Intensidade = 1,5f;
}
```

## Ver também

* [Skyboxes e fundos](../textures/skyboxes-and-backgrounds.md)