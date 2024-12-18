# Constraints

> [!WARNING]
> This page is WIP

[!INCLUDE [stride-studio-note](../../includes/under-construction-note.md)]

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

**Constraints** restrict bodies to certain movement patterns. For example, a realistic knee joint can only move along one axis and can't bend forwards.

Constraints can either link two collidables together. They allow for interaction and dependency between bodies.

## Constraints list

Below is a table organizing the constraints by a logical order (from simpler and more common to more complex or specialized). Each row lists the constraint name (with a general known mechanical analogy in parentheses if applicable), the available variants, the number of bodies involved, and a brief description. Variants such as “Servo”, “Motor”, “Limit”, or “GearMotor” typically indicate different modes of controlling or restricting the motion allowed by the constraint:

- **Limit**: Restricts motion or angle within certain bounds.  
- **Motor**: Applies a driving force or velocity to move bodies towards a target.  
- **Servo**: Attempts to maintain or reach a specific position, angle, or distance using feedback control.  
- **GearMotor**: Couples angular motion between axes, acting like a geared connection.

**Table of Constraints**

| Constraint Name (General Name)                            | Variants        | Bodies | Description                                                                                              |
|-----------------------------------------------------------|-----------------|--------|----------------------------------------------------------------------------------------------------------|
| WeldConstraintComponent (Weld Joint)                      | -               | 2      | Fixes two bodies together with no relative movement allowed.                                              |
| BallSocketConstraintComponent (Ball-and-Socket Joint)     | Motor, Servo    | 2      | Allows free rotation in all directions around a shared pivot point (like a human shoulder joint).         |
| HingeConstraintComponent (Hinge Joint)                    | -               | 2      | Permits rotation about a single axis, like a door hinge.                                                  |
| AngularHingeConstraintComponent (Hinge Joint)             | -               | 2      | A specialized angular hinge, controlling relative rotation similarly to a standard hinge joint.           |
| AngularSwivelHingeConstraintComponent (Universal Joint)   | -               | 2      | Allows rotation around two perpendicular axes, like a universal joint.                                    |
| SwivelHingeConstraintComponent (Universal Joint)           | -               | 2      | Another form of a universal-type joint, enabling swiveling motion around multiple axes.                   |
| AngularConstraintComponent (Generic Angular Constraint)    | Motor, Servo    | 2      | A general rotational constraint that can control or limit how two bodies rotate relative to each other.    |
| AngularAxisMotorConstraintComponent / AngularAxisGearMotorConstraintComponent (Rotational Axis Drive) | GearMotor, Motor | 2 | Controls rotation about a specific axis between two bodies, possibly with gearing effects.                |
| TwistLimitConstraintComponent (Twist Joint)               | -               | 2      | Limits rotational "twist" around an axis, preventing excessive rotation like a torsion stop.              |
| TwistMotorConstraintComponent (Twist Joint)               | Motor           | 2      | Drives relative rotation about a single axis, applying torque to achieve a target angle or velocity.      |
| TwistServoConstraintComponent (Twist Joint)               | Servo           | 2      | Attempts to maintain a specific twist angle through servo-like feedback control.                          |
| SwingLimitConstraintComponent (Swing Joint)               | -               | 2      | Restricts "swing" motion around one or more axes, controlling how far the joint can deviate.              |
| DistanceLimitConstraintComponent (Distance Joint)          | -               | 2      | Enforces an upper or lower bound on the distance between two points on different bodies.                  |
| DistanceServoConstraintComponent (Distance Joint)          | Servo           | 2      | Attempts to maintain or reach a specific distance between two points on different bodies.                 |
| DistanceConstraintComponent (Distance Joint)               | Limit, Servo    | 2      | Maintains or controls the exact distance between two anchor points, allowing limit or servo behavior.     |
| CenterDistanceConstraintComponent (Distance Joint)         | Limit           | 2      | Similar to a distance joint, focusing on the distance between bodies’ centers or defined points.           |
| LinearAxisLimitConstraintComponent (Prismatic Joint)       | -               | 2      | Restricts movement along a single linear axis, preventing motion beyond certain limits.                   |
| LinearAxisMotorConstraintComponent (Prismatic Joint)       | Motor           | 2      | Drives one body relative to another along a single axis, acting like a linear actuator.                   |
| LinearAxisServoConstraintComponent (Prismatic Joint)       | Servo           | 2      | Tries to maintain or achieve a specific position along a linear axis, using servo control.                |
| PointOnLineServoConstraintComponent (Line Constraint)      | Servo           | 2      | Keeps a point on one body constrained to move along a line defined by another body, controlled by a servo. |
| OneBodyAngularMotorConstraintComponent (Single Body Angular Drive) | Motor | 1 | Applies torque directly to one body’s rotation, acting like a motor attached directly to that body.        |
| OneBodyAngularServoConstraintComponent (Single Body Angular Drive) | Servo | 1 | Attempts to maintain a certain angular orientation of a single body using servo-like control.              |
| OneBodyLinearMotorConstraintComponent (Single Body Linear Drive) | Motor | 1 | Moves a single body along a direction, as if a motor is pushing it along that axis.                        |
| OneBodyLinearServoConstraintComponent (Single Body Linear Drive) | Servo | 1 | Tries to maintain a single body’s position along a certain axis, servo-style.                              |
| AreaConstraintComponent (Area Preservation)                | -               | 3      | Maintains the area defined by three bodies, preventing them from collapsing inward or stretching out.      |
| VolumeConstraintComponent (Volume Preservation)            | -               | 4      | Preserves the volume defined by four bodies, ensuring they form a stable, space-filling tetrahedron.       |

---

## Explanation of Constraints Variants

- **Servo**: In servo mode, the constraint attempts to achieve or maintain a target position, angle, or distance, using feedback control. It adjusts forces or torques to reach and hold the desired setpoint.

- **Motor**: A motor variant applies forces or torques to drive the connected bodies towards a given velocity or to overcome resistance, simulating an engine or actuator.

- **Limit**: When a constraint is in a limit mode, it restricts movement or rotation within predetermined bounds, stopping the bodies from exceeding these limits.

- **GearMotor**: Gear motor variants couple angular velocities or angles together, simulating gears. This ensures one body’s motion is directly related to another’s, as if connected by gears.

These variants allow the same basic constraint type to be used for different behaviors—ranging from passively limiting motion to actively driving it toward a controlled target state.


## Performance And Stability

The following are relevant excerpts from [Bepu's documentation](https://github.com/bepu/bepuphysics2/blob/master/Documentation/PerformanceTips.md)

Try using the minimum number of solver iterations sufficient to retain stability. The cost of the solver stage is linear with the number of iterations, and some simulations can get by with very few.

For some simulations with very complex constraint configurations, there may be no practical number of solver iterations that can stabilize the simulation. In these cases, you may need to instead use substepping or a shorter time step duration for the entire simulation. More frequent solver execution can massively improve simulation quality, allowing you to drop velocity iteration counts massively (even to just 1 per substep). See the Substepping documentation for more details.

> [!WARNING]
> Probably need to adapt and extend some parts of the above to our implementation, not sure how relevant everything is. Take stuff from https://github.com/bepu/bepuphysics2/blob/master/Documentation/StabilityTips.md and https://github.com/bepu/bepuphysics2/blob/master/Documentation/Substepping.md
> - Eideren

## See also

* [Colliders](colliders.md)