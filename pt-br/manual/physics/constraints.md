# Restrições

[! INCLUÍDO [stride-studio-note](../../includes/under-construction-note.md)]

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

**Constraints** restringem os corpos rígidos a certos padrões de movimento. Por exemplo, uma articulação de joelho realista só pode se mover ao longo de um eixo e não pode dobrar para a frente.

As restrições podem ligar dois corpos rígidos juntos, ou ligar um único corpo rígido a um ponto no mundo. Eles permitem a interação e dependência entre os corpos rígidos.

Existem seis [tipos de restrições](xref:Stride.Physics.ConstraintTypes):

* dobradiças
* engrenagem
* controles deslizantes
* cones (twist e turn)
* ponto a ponto (a distância fixa entre dois colisões)
* seis graus de liberdade

Para uma demonstração das diferentes restrições, carregue o projeto de amostra **PhysicsSample**.

## Criar uma restrição

> [!Note]
> Atualmente, você só pode usar restrições de scripts.

Para criar uma restrição, use o método estático [Simulation](xref:Stride.Physics.Simulation) [CreateConstraint](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)):

```cs
CriarConstraint(Constraint) Tipos tipo, RigidbodyComponente rígido BodyA, Matrix frameA, uso de boolReferenceFrameA);
```

Isso liga [RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) ao mundo em sua localização atual.
O booleano [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) especifica qual sistema de coordenadas o limite é aplicado (quer [RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) ou o mundo).

> [!Note]
> * No caso de [ConstraintTypes.Point2Point](xref:Stride.Physics.ConstraintTypes), o quadro representa um pivô em A. Apenas o vetor de tradução é considerado. [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) é ignorado.
> * No caso de [ConstraintTypes.Hinge](xref:Stride.Physics.ConstraintTypes), o quadro representa um pivô em A e Eixo em A. Isso porque a dobradiça permite apenas um ângulo limitado de rotação entre o corpo rígido e o mundo.
> * No caso de [ConstraintTypes.ConeTwist](xref:Stride.Physics.ConstraintTypes), [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) é ignorado.
> * [ConstraintTypes.Gear](xref:Stride.Physics.ConstraintTypes) precisa de dois corpos rígidos a serem criados. Esta função irá lançar uma exceção.

```cs
CriarConstraint(Constraint) Tipos tipo, RigidbodyComponent rigidBodyA, RigidbodyComponent rigidBodyB, Matrix frameA, Matrix frameB, uso de boolReferenceFrameA)
```

Este método liga [RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) a [RigidBodyB](xref:Stride.Physics.Constraint.RigidBodyB).

> [!Note]
> * No caso de [ConstraintTypes.Point2Point](xref:Stride.Physics.ConstraintTypes), o quadro representa um pivô em A ou B. Apenas o vetor de tradução é considerado. [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) é ignorado.
> * No caso de [ConstraintTypes.Hinge](xref:Stride.Physics.ConstraintTypes) o quadro representa pivô em A/B e Eixo em A/B. Isto porque a dobradiça permite apenas um ângulo limitado de rotação entre o corpo rígido e o mundo neste caso.
> * No caso de [ConstraintTypes.ConeTwist](xref:Stride.Physics.ConstraintTypes), [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) é ignorado.
> * No caso de [ConstraintTypes.Gear](xref:Stride.Physics.ConstraintTypes), [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) é ignorado. O quadro representa apenas o eixo em A ou B; somente o vetor de tradução (que deve conter o eixo) é usado.

O booleano [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) determina qual sistema de coordenadas ([RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) ou [RigidBodyB](xref:Stride.Physics.Constraint.RigidBodyB)) os limites são aplicados.

## Adicionar restrições à simulação

Depois de criar uma restrição, adicione-a à simulação de um script chamando:

```cs
this.GetSimulation(). AddConstraint (constraint);
```

ou:

```cs
var desativar cores Entre os corpos conectados = verdadeiro;
this.GetSimulation(). AddConstraint (constrang, desabilitar CoresBetweenLinkedBodies);
```

O parâmetro [disableCollisionsBetweenLinkedBodies](xref:Stride.Physics.Simulation.AddConstraint\(Stride.Physics.Constraint,System.Boolean\))
para corpos ligados colidindo uns com os outros.

Da mesma forma, para remover uma restrição da simulação, use:

```cs
this.GetSimulation(). RemoverConstraint (constrangimento);
```

## Ver também

* [Coleiras](colliders.md)