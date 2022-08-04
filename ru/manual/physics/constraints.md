# Constraints
# Ограничения

<div class="doc-incomplete"/>
<div class=

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Constraints** restrict rigidbodies to certain movement patterns. For example, a realistic knee joint can only move along one axis and can't bend forwards.
**Ограничения** ограничивают твердые тела определенными схемами движения.  Например, реалистичный коленный сустав может двигаться только по одной оси и не может сгибаться вперед.

Constraints can either link two rigidbodies together, or link a single rigidbody to a point in the world. They allow for interaction and dependency among rigidbodies. 
Ограничения могут либо связать два твердых тела вместе, либо связать одно твердое тело с точкой в ​​мире.  Они допускают взаимодействие и зависимость между твердыми телами.

There are six [types of constraints](xref:Stride.Physics.ConstraintTypes):
Существует шесть [типов ограничений] (xref:Stride.Physics.ConstraintTypes):

* hinges
* петли
* gears
* шестерни
* sliders
* слайдеры
* cones (twist and turn)
* конусы (крутить и поворачивать)
* point to point (fixed distance between two colliders)
* точка-точка (фиксированное расстояние между двумя коллайдерами)
* six degrees of freedom
* шесть степеней свободы

For a demonstration of the different constraints, load the **PhysicsSample** sample project.
Для демонстрации различных ограничений загрузите пример проекта **PhysicsSample**.

## Create a constraint
## Создать ограничение

> [!Note]
> [!Примечание]
> Currently, you can only use constraints from scripts.
> В настоящее время вы можете использовать ограничения только из скриптов.

To create a constraint, use the [Simulation](xref:Stride.Physics.Simulation) static method [CreateConstraint](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)):
Чтобы создать ограничение, используйте статический метод [Simulation](xref:Stride.Physics.Simulation) [CreateConstraint](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.  Core.Mathematics.Matrix,System.Boolean\)):

```cs
```CS
CreateConstraint(ConstraintTypes type, RigidbodyComponent rigidBodyA, Matrix frameA, bool useReferenceFrameA);
CreateConstraint (тип ConstraintTypes, RigidbodyComponentriggerBodyA, MatrixframeA, bool useReferenceFrameA);
```
```

This links [RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) to the world at its current location.
Это связывает [RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) с миром в его текущем местоположении.
The boolean [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) specifies which coordinate system the limit is applied to (either [RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) or the world).
Логическое значение [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) указывает, в какой системе координат действует ограничение.  применяется к (либо [RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) или миру).

> [!Note]
> [!Примечание]
> * In the case of [ConstraintTypes.Point2Point](xref:Stride.Physics.ConstraintTypes), the frame represents a pivot in A. Only the translation vector is considered. [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) is ignored.
> * В случае [ConstraintTypes.Point2Point](xref:Stride.Physics.ConstraintTypes) рамка представляет собой точку опоры в A. Учитывается только вектор перемещения.  [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) игнорируется.
> * In the case of [ConstraintTypes.Hinge](xref:Stride.Physics.ConstraintTypes), the frame represents a pivot in A and Axis in A. This is because the hinge allows only a limited angle of rotation between the rigidbody and the world.
> * В случае [ConstraintTypes.Hinge](xref:Stride.Physics.ConstraintTypes) фрейм представляет собой точку опоры в A и ось в A. Это связано с тем, что шарнир допускает только ограниченный угол поворота между твердым телом и  Мир.
> * In the case of [ConstraintTypes.ConeTwist](xref:Stride.Physics.ConstraintTypes), [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) is ignored.
> * В случае [ConstraintTypes.ConeTwist](xref:Stride.Physics.ConstraintTypes), [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.  Core.Mathematics.Matrix,System.Boolean\)) игнорируется.
> * [ConstraintTypes.Gear](xref:Stride.Physics.ConstraintTypes) needs two rigidbodies to be created. This function will throw an exception.
> * Для [ConstraintTypes.Gear](xref:Stride.Physics.ConstraintTypes) необходимо создать два жестких тела.  Эта функция вызовет исключение.

```cs
```CS
CreateConstraint(ConstraintTypes type, RigidbodyComponent rigidBodyA, RigidbodyComponent rigidBodyB, Matrix frameA, Matrix frameB, bool useReferenceFrameA)
CreateConstraint (тип ConstraintTypes, RigidbodyComponentriggerBodyA, RigidbodyComponentriggerBodyB,MatrixframeA,MatrixframeB, bool useReferenceFrameA)
```
```

This method links [RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) to  [RigidBodyB](xref:Stride.Physics.Constraint.RigidBodyB).
Этот метод связывает [RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) с [RigidBodyB](xref:Stride.Physics.Constraint.RigidBodyB).

> [!Note]
> [!Примечание]
> * In the case of [ConstraintTypes.Point2Point](xref:Stride.Physics.ConstraintTypes), the frame represents a pivot in A or B. Only the translation vector is considered. [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) is ignored.
> * В случае [ConstraintTypes.Point2Point](xref:Stride.Physics.ConstraintTypes) рамка представляет собой точку опоры в A или B. Учитывается только вектор перемещения.  [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) игнорируется.
> * In the case of [ConstraintTypes.Hinge](xref:Stride.Physics.ConstraintTypes) the frame represents pivot in A/B and Axis in A/B. This is because the hinge allows only a limited angle of rotation between the rigidbody and the world in this case.
> * В случае [ConstraintTypes.Hinge](xref:Stride.Physics.ConstraintTypes) рамка представляет собой точку опоры в A/B и ось в A/B.  Это связано с тем, что в этом случае шарнир допускает только ограниченный угол поворота между твердым телом и миром.
> * In the case of [ConstraintTypes.ConeTwist](xref:Stride.Physics.ConstraintTypes), [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) is ignored.
> * В случае [ConstraintTypes.ConeTwist](xref:Stride.Physics.ConstraintTypes), [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.  Core.Mathematics.Matrix,System.Boolean\)) игнорируется.
> * In the case of [ConstraintTypes.Gear](xref:Stride.Physics.ConstraintTypes), [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) is ignored. The frame just represents the axis either in A or B; only the translation vector (which should contain the axis) is used.
> * В случае [ConstraintTypes.Gear](xref:Stride.Physics.ConstraintTypes), [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.  Core.Mathematics.Matrix,System.Boolean\)) игнорируется.  Рамка просто представляет ось либо в A, либо в B;  используется только вектор перемещения (который должен содержать ось).

The boolean [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) determines which coordinate system ([RigidBodyA](xref:Stride.Physics.Constraint.RigidBodyA) or [RigidBodyB](xref:Stride.Physics.Constraint.RigidBodyB)) the limits are applied to.
Логическое значение [useReferenceFrameA](xref:Stride.Physics.Simulation.CreateConstraint\(Stride.Physics.ConstraintTypes,Stride.Physics.RigidbodyComponent,Stride.Core.Mathematics.Matrix,System.Boolean\)) определяет, какая система координат ([RigidBodyA  ](xref:Stride.Physics.Constraint.RigidBodyA) или [RigidBodyB](xref:Stride.Physics.Constraint.RigidBodyB)) применяются ограничения.

## Add constraints to the simulation
## Добавьте ограничения в симуляцию

After you create a constraint, add it to the simulation from a script by calling:
После создания ограничения добавьте его в симуляцию из скрипта, вызвав:

```cs
```CS
this.GetSimulation().AddConstraint(constraint);
this.GetSimulation().AddConstraint(ограничение);
```
```

or:
или же:

```cs
```CS
var disableCollisionsBetweenLinkedBodies = true;
var disableCollisionsBetweenLinkedBodies = true;
this.GetSimulation().AddConstraint(constraint, disableCollisionsBetweenLinkedBodies);
this.GetSimulation().AddConstraint (ограничение, отключить коллизии между связанными телами);
```
```

The parameter [disableCollisionsBetweenLinkedBodies](xref:Stride.Physics.Simulation.AddConstraint\(Stride.Physics.Constraint,System.Boolean\))
Параметр [disableCollisionsBetweenLinkedBodies](xref:Stride.Physics.Simulation.AddConstraint\(Stride.Physics.Constraint,System.Boolean\))
 stops linked bodies colliding with each other.
предотвращает столкновение связанных тел друг с другом.

Likewise, to remove a constraint from the simulation, use:
Аналогично, чтобы удалить ограничение из моделирования, используйте:

```cs
```CS
this.GetSimulation().RemoveConstraint(constraint);
this.GetSimulation(). Удалить ограничение (ограничение);
```
```

## See also
## Смотрите также

* [Colliders](colliders.md)
* [Коллайдеры](colliders.md)
