# Simulação de física

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

A física de Stride é controlada pela classe [Simulation](xref:Stride.Physics.Simulation).
Você pode mudar como Stride inicializa o [simulation](xref:Stride.Physics.Simulation) modificando bandeiras em [PhysicsDefinições](xref:Stride.Physics.PhysicsSettings), acessado nas propriedades de ativos **GameSettings**.

> [!Note]
> Sua cena deve ter pelo menos um [Collider](colliders.md) para que Stride inicialize a instância [Simulation](xref:Stride.Physics.Simulation).

![Physics Configurações](media/simulation-physics-settings.png)

* `CollisionsOnly` inicializa o [Simulation](xref:Stride.Physics.Simulation) com detecção de colisão ligada, mas nenhuma outra física. Os objectos não reagem às forças físicas.

* `ContinuousCollisionDetection` inicializa o [Simulation](xref:Stride.Physics.Simulation) com detecção contínua (CCD). O CCD evita que entidades em movimento rápido (como balas) passem erroneamente por outras entidades.

> [!Note]
> O ``SoftBodySupport``, ``MultiThreaded`` e ``UseHardwareWhenPossible`` flags estão atualmente desativados.

No tempo de execução, você pode alterar alguns parâmetros [Simulation](xref:Stride.Physics.Simulation):

* `Gravidade` — a gravidade global, em unidades do mundo [ por segundo quadrado](../game-studio/world-units.md)
* `FixedTimeStep` — o comprimento de um tempo de simulação, em segundos
* `MaxSubSteps` — o número máximo de tempo fixo que o motor leva por atualização

## Ver também
* [Coleiras](colliders.md)
* [Formas de colarinho](collider-shapes.md)