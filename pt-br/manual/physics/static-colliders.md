# Colliders estáticos

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>

** Os colistores estatísticos** não são movidos por forças como gravidade e colisões, mas outros objetos de física podem colidir com eles. Os colisões estáticos típicos são objetos imovíveis fortes como paredes, pisos, grandes rochas e assim por diante.

![ Coletores de corpos estáticos e rígidos](media/rigid-bodies-static-and-rigid-body-colliders.png)

## Adicionar um colisor estático

1. Selecione a entidade que deseja fazer um colisor estático.

2. No **Property Grid**, clique em **Add component** e selecione **Static Collider**.

   ![ Adicionar componente de colisor estático](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)

3. Defina a forma [collider](collider-shapes.md) para corresponder à forma da entidade. Para fazer isso, no **Property Grid**, expanda o componente **Static Collider** para ver suas propriedades.

4. Ao lado de **Collider Shapes**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) e selecione a forma que deseja.

   ![ Adicionar componente de colisor estático](media/physics-tutorials-create-a-bouncing-ball-collider-shape.png)

## Propriedades do colider estático

Você pode ajustar as propriedades de colisão estáticas no **Property Grid**.

![ Propriedades do colisor estatístico](media/static-collider-properties.png)

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
| É o Trigger | Alterna se o colisor estático é um [trigger](triggers.md). |

## Mova um colisor estático no tempo de execução

Se você precisar mover um colisor estático no tempo de execução, você pode fazê-lo com um script:

```cs
PhysicsComponent.Entity.Transform.Position += PhysicsComponent.Entity.Transform.Position + Vector3.UnitX;
PhysicsComponent.Entity.Transform.UpdateWorldMatrix();
PhysicsComponent.UpdatePhysicsTransformation();
```

## Ver também

* [Rígidos](rigid-bodies.md)
* [Personagens](characters.md)
* [Formas de colarinho](collider-shapes.md)
* [Triggers](triggers.md)