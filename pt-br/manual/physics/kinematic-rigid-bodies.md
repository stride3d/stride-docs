# Rígidos caninemáticos

Às vezes você quer mover [rigidbodies](rigid-bodies.md) de uma maneira específica em vez de ter outros objetos movê-los. Por exemplo, você pode controlar um elevador com um script, através de sua propriedade `Transform`, em vez de ter outros objetos empurrar e puxá-lo. Este é um **kinematic** rigidbody.

Embora os rígidos cinemáticos não sejam movidos pela física, outros objetos ainda podem colidir com eles. Por exemplo, no caso do elevador, os objetos colocados dentro não cairão no chão do elevador.

![Elevador mecânico](media/rigid-bodies-kinematic-elevator.png)

## Faça um corpo rígido cinemático

1. Selecione a entidade que deseja ser uma pessoa rígida cinemática.

2. No **Property Grid**, sob as propriedades de componente **Rigidbody**, selecione **Is kinematic**.

   ![Check 'Is kinematic'](media/rigid-bodies-is-kinematic-checkbox.png)

## Roteiros rígidos cinemáticos

Você pode escrever a propriedade **Is kinematic** para ativar e desativar certos eventos. Por exemplo, imagine que os cabos de suspensão do elevador cinemático são cortados. Você pode escrever a propriedade **Is kinematic** para mudar para *false* quando isso acontece. O elevador fica sujeito às forças habituais da física, e cai.

![ Elevador não-cinemático](media/rigid-bodies-non-kinematic-elevator.png)

## Ver também

* [Rígidos](rigid-bodies.md)
* [Colliders estáticos](static-colliders.md)
* [Personagens](characters.md)
* [Formas de colarinho](collider-shapes.md)
* [Triggers](triggers.md)