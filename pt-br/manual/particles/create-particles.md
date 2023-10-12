# Criar partículas

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Para criar um sistema de partículas, clique com o botão direito do mouse na cena ou Entity Tree, selecione **Particle System** e escolha uma predefinição (**Empty**, **Simple**, **Fountain** ou **Ribbon**).

![media/particles-reference-editor-1.png](media/particles-reference-editor-1.png)

Game Studio cria uma entidade com um componente **Transform** e um componente **Particle System** com sua predefinição escolhida. As entidades de partículas são representadas com um ícone de chama.

![media/particles-reference-editor-2.png](media/particles-reference-editor-2.png)

Alternativamente, você pode adicionar um componente de partícula a uma entidade existente. Com a entidade selecionada, no **Property Grid**, clique em **Add component** e selecione **Particle System**.

![ Adicionar sistema de partículas ](tutorials/media/add-particle-system.png)

Game Studio adiciona um sistema de partículas vazio para a entidade.

## Componente de transformação

Todas as entidades têm um componente de transformação. Alguns elementos de partículas ignoram alguns elementos do componente de transformação, como rotação ou escalação. Por exemplo, a força de gravidade não deve depender da rotação do sistema de partículas, e sempre ignora a rotação; no entanto, os sistemas de partículas de fonte herdam a localização para os propósitos da velocidade de partículas inicial.

Apenas o dimensionamento uniforme é suportado. Se você tem uma escala não uniforme no componente de transformação, apenas o eixo X é usado.

Se você quiser que dois sistemas de partículas compartilhem um componente de transformação, crie duas entidades do sistema de partículas e faça uma criança da outra.

## Propriedades de componentes de partículas

Com uma entidade de sistema de partículas selecionada, você pode editar suas propriedades no **Property Grid**, assim como qualquer outra entidade.

![media/particles-reference-editor-3.png](media/particles-reference-editor-3.png)

| Propriedade | Descrição |
| ---------------- | -------------
| Controle do editor | Isso muda como o Game Studio exibe partículas enquanto você trabalha na cena. Você pode jogar, pausar e parar o sistema de partículas. Você também pode redefinir o efeito de partícula em intervalos definidos, o que é útil para visualizar os efeitos de um tiro. Os controles do editor não afetam como as partículas são exibidas no tempo de execução. |
| Tempo de aquecimento | Se você definir o tempo de aquecimento para um valor maior que 0, a partícula aparece como se já estivesse ativa quando ela aparece. Este valor é em segundos. Por exemplo, se você definir o tempo de aquecimento para 1, o efeito de partícula aparece como se já estivesse ativo por 1 segundo quando ele aparece. Isto é útil, por exemplo, se você definir um efeito de fogo tempo de aquecimento para 0, o fogo parece inflamar assim que for renderizado. Se você quiser que o fogo apareça como se já estivesse ignido quando estiver renderizado, aumente o tempo de aquecimento. |
| Escala de velocidade | Controla a velocidade do efeito de partícula. |
| Culing AABB | Isso cria uma caixa de ligação alinhada ao eixo (AABB) em torno do efeito de partícula. Se a caixa de ligação não estiver na visualização da câmara, o Stride não produz o efeito de partícula. Isso é útil para a manipulação e otimização. **Rotated AABB** define forma de caixa em coordenadas XYZ. **Uniform AABB** cria um cubo da escala especificada (em unidades [world](../game-studio/world-units.md)). Para visualizar o AABB no Editor de Cena, selecione **Debug Draw**. |
| Emitters | Os emissores contém o sistema de partículas. Os emissores são atualizados e desenhados na ordem que aparecem na lista, e podem ser re-ordenados. Para mais informações, consulte [Emitters](emitters.md). |

## Ver também

* [Emitters](emitters.md)
* [Formas](shapes.md)
* [Materiais](materials.md)
* [Spawners](spawners.md)
* [Iniciantes](initializers.md)
* [Atualizações](updaters.md)