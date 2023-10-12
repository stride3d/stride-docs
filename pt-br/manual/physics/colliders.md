# Coleiras

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>

Para usar a física em seu projeto, adicione um componente **collider** a uma entidade.

Colliders definem as formas e regras dos objetos de física. Existem três tipos:

* [ os coliders estáticos](static-colliders.md) não se movem (por exemplo, paredes, pisos, objetos pesados, etc)
* [rigidbodies](rigid-bodies.md) são movidos por forças como colisão e gravidade (por exemplo, bolas, barris, etc)
* [caracters](characters.md) são controlados pela entrada do usuário (ou seja, personagens do jogador)

Você também pode:

* definir o formato [ de componentes do colisor](collider-shapes.md)
* fazer [triggers](triggers.md), e detectar quando os objetos passam através deles
* constrição movimento de colisão com [constraints](constraints.md)

## Como os colisões interagem

Colliders interagem de acordo com a tabela abaixo.

|   | Objetos kinemáticos | Acionadores Kinematic | Colliders de corpo rígido | Gatilhos de corpo rígido | Colliders estáticos | Acionadores estáticos |
|---|-------------|---------------------|-------------|---------------------|----------|------------------
| Objetos kinemáticos | Colisões | Colisões | Colisões e dinâmica | Colisões | Colisões | Colisões |
| Acionadores Kinematic | Colisões | Colisões | Colisões | Colisões | Colisões | Colisões |
| Colliders de corpo rígido | Colisões e dinâmica | Colisões | Colisões e dinâmica | Colisões | Colisões e dinâmica | Colisões |
| Gatilhos de corpo rígido | Colisões | Colisões | Colisões | Colisões | Colisões | Colisões |
| Colliders estáticos | Colisões | Colisões | Colisões e dinâmica | Colisões | Nada | Nada |
| Acionadores estáticos | Colisões | Colisões | Colisões | Colisões | Nada | Nada |

* "Colisões" refere-se apenas a informações de colisão e eventos. Isso significa que a colisão é detectada no código, mas os objetos não se chocam uns com os outros (sem resposta dinâmica).

* "Dynamic" significa informações de colisão e eventos, além de resposta dinâmica (ou seja, os colisões se chocam em vez de passar).

Por exemplo, os colisões de corpo rígido colidem dinamicamente com colisões estáticos (ou seja, colhem-nos). No entanto, nenhum objeto colide dinamicamente com gatilhos; colisões são detectadas no código, mas os objetos simplesmente passam.

## Mostrar colisões no Editor de Cena

Por padrão, os colisões são invisíveis no Editor de Cena. Para mostrar-lhes:

1. Na barra de ferramentas Game Studio, na parte superior direita, clique no ícone **Exibir opções gizmo**.

   ![Exibir opções de gizmo](media/display-gizmo-options.png)

2. Selecione **Physics**.

   ![ opção de física de reprodução](media/display-physics-option.png)

O Editor de Cena exibe formas de colisão.

![ Display física](media/display-physics.png)

## Mostrar colisões no tempo de execução

Você pode tornar os colisões visíveis no tempo de execução, o que é útil para depurar problemas com a física. Para fazer isso, use:

``
this.GetSimulation(). ColliderShapesRendering = verdadeiro;
``

> [!Note]
> Formas de colar para planos infinitos são sempre invisíveis.

### Atalho de teclado

Para mostrar ou ocultar formas de colisão no tempo de execução com um atalho de teclado, use o script **Debug Physics shapes**.

1. No **Asset View**, clique em **Add asset**.

2. Selecione **Scripts** > **Debug formas físicas**.

   ![ Adicionar script de forma de física de depuração](media/add-debug-physics-shapes-script.png)

3. Na barra de ferramentas do Game Studio, clique em **Reload assemblies e atualize scripts**.

   ![Reload assemblies](../platforms/media/reload-assemblies.png)

4. Adicione o script **Debug Physics shapes** como um componente para uma entidade na cena. Não importa qual entidade.

   ![ Adicionar debug física forma componente de script](media/add-debug-physics-shapes-component.png)

O script liga a visibilidade da forma do colisor a **Left Shift + Left Ctrl + P**, para que você possa ligá-la e desligar em tempo de execução. Você pode editar o script para vincular uma combinação de teclas diferente.

## Ver também

* [Formas de colarinho](collider-shapes.md)
* [Colliders estáticos](static-colliders.md)
* [Rígidos](rigid-bodies.md)
* [Rígidos caninemáticos](kinematic-rigid-bodies.md)
* [Simulação](simulation.md)
* [Tutoriais de física](tutorials.md)