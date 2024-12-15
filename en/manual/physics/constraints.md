# Constraints

> [!WARNING]
> This page is WIP

[!INCLUDE [stride-studio-note](../../includes/under-construction-note.md)]

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

**Constraints** restrict bodies to certain movement patterns. For example, a realistic knee joint can only move along one axis and can't bend forwards.

Constraints can either link two collidables together. They allow for interaction and dependency between bodies.

## Performance And Stability

The following are relevant excerpts from [Bepu's documentation](https://github.com/bepu/bepuphysics2/blob/master/Documentation/PerformanceTips.md)

Try using the minimum number of solver iterations sufficient to retain stability. The cost of the solver stage is linear with the number of iterations, and some simulations can get by with very few.

For some simulations with very complex constraint configurations, there may be no practical number of solver iterations that can stabilize the simulation. In these cases, you may need to instead use substepping or a shorter time step duration for the entire simulation. More frequent solver execution can massively improve simulation quality, allowing you to drop velocity iteration counts massively (even to just 1 per substep). See the Substepping documentation for more details.

> [!WARNING]
> Probably need to adapt and extend some parts of the above to our implementation, not sure how relevant everything is. Take stuff from https://github.com/bepu/bepuphysics2/blob/master/Documentation/StabilityTips.md and https://github.com/bepu/bepuphysics2/blob/master/Documentation/Substepping.md
> - Eideren

## See also

* [Colliders](colliders.md)