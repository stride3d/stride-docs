# Espalhamento de subsuperfície

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>

Quando você **subsuperfície dispersão** em um material, a luz é refletida em ângulos irregulares dentro do modelo. Você pode usar isso para renderizar realisticamente materiais translúcidos, como pele, cera, folhas, mármore e porcelana.

A foto abaixo mostra um exemplo da vida real do efeito:

![Photo](media/skin-subsurface-scattering-photo.jpg)

*(Imagem cortesia de Davepoo2014, compartilhada sob [ Criativa Atribuição-Share Alike 4.0 Licença internacional](https://creativecommons.org/licenses/by-sa/4.0/deed.en))*

As capturas de tela abaixo demonstram o uso de dispersão subsuperfície em Stride para renderizar cera:

| Espalhamento de subsuperfície | Espalhamento de subsuperfície em |
|---------------------------------|------------------------
| ![ On](media/candles-ss-off.jpg) | ![Off](media/candles-ss-on.jpg) |

As sombras são muito mais suaves na segunda imagem, pois mais luz passa pelas velas.

## Habilitar dispersão de subsuperfície

1. Selecione o material que deseja usar sombreamento subsuperfície.

2. Na Grade de Propriedade, sob **Shading**, ao lado de ** Subsuperfície scattering**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e escolha ** Subsuperfície dispersão**.

   ![ Habilitar dispersão subsuperfície ](media/enable-subsurface-scattering.png)

## Propriedades

![Propriedades ](media/subsurface-scattering-properties.png)

| Propriedade | Função |
|--------------------|--------------------
| Largura de dispersão | Até onde a luz se espalha em unidades do mundo [](../../game-studio/world-units.md) |
| Translutância | Quanto a luz pentrata o material. `0.0` não é translucência; `1.0` é máx. |
| Mapa de Translucência | Especifique um mapa [grayscale](material-maps.md) para controlar como as diferentes regiões translúcidas do material são. Os valores mais brilhantes produzem mais dispersão. Por exemplo, as orelhas devem espalhar mais luz do que a parte superior da cabeça, porque são mais finas e, portanto, a luz passa por elas mais facilmente. A textura é multiplicada pelo parâmetro **Translucency**. |
| Perfil de dispersão | O perfil de dispersão para usar durante o passe de renderização para a frente. <p><br>**Skin:** Um shader pré-configurado para renderizar a pele <p><br>**Custom (baseado em pele):** Um perfil baseado no perfil de pele que você pode personalizar a si mesmo |
| Kernel de dispersão | O kernel de dispersão para usar no processo de postagem de dispersão de subsuperfície. <p><br>**Falloff:** A luz dispersa é mascarada para esta cor. Por exemplo, na captura de tela das velas, a luz se desvanece para um amarelo-laranja. <p><br>**Strength:** Fades to this color |

| Transluência: `0,2` | Transluência: `0,98` |
|-------------------------------------------|--------------------
| ![ On](media/candles-translucency-02.jpg) | ![Off](media/candles-translucency-98.jpg) |

## Opções de compositor gráfico

Existem opções adicionais de dispersão de subsuperfície no editor de compositores **[graphics](../graphics-compositor/index.md)**. Essas opções se aplicam globalmente a materiais **all** que usam dispersão subsuperfície.

1. No **Asset View** (no painel inferior por padrão), clique duas vezes no **Graphics Compositor** ativo.

   ![Graphics compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

   O editor de compositores gráficos abre.

2. Selecione o nó **superfície scattering**.

   ![Select node](media/select-subsurface-scattering-node.png)

3. No **Property Grid** (à direita por padrão), edite as propriedades.

   ![ Subsuperfície espalhando blur](media/subsurface-scattering-blur-properties.png)

### Propriedades

| Propriedade | Função |
|----------------|-----------
| Siga a superfície | Impedir a dispersão de luz através de grandes diferenças de profundidade. Afeta o desempenho da GPU. |
| Passes | O número de vezes que o blur é executado. Mais passes produzem resultados mais suaves (menos ruído e bandagem). |
| Tamanho do kernel do Jitter | Use o ruído para reduzir os artefatos de agrupamento causados por undersampling. Cria um efeito mais suave, mas é tecnicamente menos preciso (às vezes perceptível a distâncias próximas). |
| Modo de renderização | Alterar o modo de renderização para fins de depuração |

## Ver também

* [Mapas de material](material-maps.md)
* [Atributos de material](material-attributes.md)
   * [Atributos de geometria](geometry-attributes.md)
   * [Atributos de Shading](shading-attributes.md)
   * [Atributos diversos](misc-attributes.md)
* [Camadas de material](material-layers.md)
* [Materiais para desenvolvedores](materials-for-developers.md)