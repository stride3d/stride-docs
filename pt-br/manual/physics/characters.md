# Personagens

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>

**Character** são usados para personagens controlados por scripts como NPCs. Entidades com componentes de caracteres [](xref:Stride.Physics.CharacterComponent) só podem ser movidas com [SetVelocity](xref:Stride.Physics.CharacterComponent.SetVelocity\(Stride.Core.Mathematics.Vector3\)), [Jump](xref:Stride.Physics.CharacterComponent.Jump) e [Teleport](xref:Stride.Physics.CharacterComponent.Teleport\(Stride.Core.Mathematics.Vector3\)).

## Adicionar um componente de caracteres a uma entidade

1. No **Scene Editor**, selecione a entidade a que deseja adicionar o componente.

2. No **Property Grid**, clique em **Add component** e selecione **Character**.

   ![ Adicionar componente de caracteres](media/add-character-component.png)

> [!Note]
> Para o colisor de caracteres interagir com outros objetos de física, você também precisa definir uma forma de colisão nas propriedades do componente de colisão. A forma da cápsula é apropriada para a maioria dos colisões de caracteres. Para obter mais informações, consulte as formas [collider](collider-shapes.md).

## Propriedades de componentes

Você pode ajustar as propriedades do componente de caracteres no **Property Grid**.

| Propriedade | Descrição |
----------------------|-----------------------
| Grupo de Collision | Define a qual grupo de colisão o objeto pertence. |
| Pode colar com | Define quais grupos o objeto colide com. |
| Eventos de colisão | Se isso estiver ativado, o objeto relata eventos de colisão, que você pode usar em scripts. Não tem efeito na física. Se você não tiver scripts usando eventos de colisão para o objeto, desative esta opção para salvar a CPU. |
| Pode dormir | Se isso estiver ativado, o motor de física não processa objetos de física quando eles não estão se movendo. Isso economiza CPU. |
| Restituição | Define a quantidade de energia cinética perdida ou adquirida após uma colisão. Um valor típico é entre 0 e 1. Se a propriedade de restituição de entidades colidindo for 0, as entidades perdem toda a energia e param de se mover imediatamente sobre o impacto. Se a restituição é 1, eles não perdem energia e se recuperam com a mesma velocidade em que colidiram. Use isso para mudar o "bounciness" de corpos rígidos. |
| Fricção | Define o atrito de superfície. |
| Fricção de rolamento | Define o atrito de rolamento. |
| CCD Motion Threshold | Define a velocidade em que a detecção contínua de colisão (CCD) assume o controle. O CCD evita que entidades em movimento rápido (como balas) passem erroneamente por outras entidades. |
| CCD Sphere Radius Swept | Define o raio da esfera de ligação que contém a posição entre dois quadros de física durante a detecção contínua de colisão. |
| Gravidade | Para corpos rígidos, define um vetor de gravidade personalizado aplicado se a gravidade de substituição for selecionada. Para personagens, especifica quanto a gravidade afeta o personagem. |
| Passo | A altura máxima que o personagem pode pisar. |
| Velocidade de queda | A velocidade máxima de queda. |
| Max Slope | A inclinação máxima do personagem pode subir, em graus. |
| Velocidade de salto | A quantidade de força de salto. |

## Ver também

* [Colliders estáticos](static-colliders.md)
* [Rígidos](rigid-bodies.md)
* [Formas de colarinho](collider-shapes.md)