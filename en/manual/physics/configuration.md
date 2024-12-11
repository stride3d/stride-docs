# Bepu Physics - Configuration

> [!WARNING]
> This is a WIP documentation. This page is mostly done.

## Add the Bepu physics dependency to your game

By default, stride will not add the Bepu physics package to your game assembly.
To do so, you need to add the relevant nuget package.
You can do it by Right cliking on your game project and then "Add dependency.."

![Add dependency](media/Add-dependency.png)

A new window will open, you can then select "Stride.BepuPhysics" and click "ok".

## Add a simulation

When working with BepuPhysics, you handle your simulation(s) and all their settings.
To do so, go into the "asset view" and open your gameSettings.
Then, you have to "Add configuration" and select "Bepu configuration".
Inside this bepu configuration, you can have multiple simulation. 
Let's add just one for simplicity in this manual.

You should now have something like that :

![Bepu configuration](media/Bepu-configuration.png)

## Simulation settings

As said before, you can create multiple simulations to set up different simulations with their own settings. 
These settings allow editing simulation global parameters, enabling customization and fine-tuning of the physics environment to suit specific requirements.

### Properties

1. Associated Scene
   - **Type:** UrlReference
   - **Description:** Allows you to wich scene this simulation will run. Note that you can implement your own SceneSelector and not use this.

2. Collisions
   - **Type:** CollisionMask
   - **Description:** Allow you to define wich group of collider react to others.
   
3. Solver Iteration
   - **Type:** int
   - **Description:** Controls the number of iterations for the solver. *(Refer to [Bepu Docs](https://github.com/bepu/bepuphysics2) for more details.)*
   
4. Solve Sub Step
   - **Type:** int
   - **Description:** Specifies the number of sub-steps for solving. *(Refer to [Bepu Docs](https://github.com/bepu/bepuphysics2) for more details.)*
   
5. Soft Start (duration & factor)
   - **Type:** TimeSpan & integer
   - **Description:** Allow you to start the scene with a larger number of sub step during a time. It may help loading a scene that explose on load.

6. Per body attribute
   - **Type:** bool
   - **Description:** Enabled by default, make the PoseIntegrator handle some attributes specific to each collidables. Disabling may speed up the simulation step, at the cost of lost features.
   - **Current per body attributes** Gravity
   
7. Linear Damping
   - **Type:** float
   - **Description:** Controls linear damping. *(Refer to [Bepu Docs](https://github.com/bepu/bepuphysics2) for more details.)*
   
8. Angular Damping
   - **Type:** float
   - **Description:** Controls angular damping. *(Refer to [Bepu Docs](https://github.com/bepu/bepuphysics2) for more details.)*

9. Fixed Time Step
   - **Type:** float, in seconds
   - **Description:** Specifies the number of milliseconds per step to simulate.

10. Time Scale
   - **Type:** float
   - **Description:** Allows you to choose the speed of the simulation (real time multiplicator).

11. Max Steps/Frame
   - **Type:** int
   - **Description:** Represents the maximum number of steps per frame to avoid a death loop. *(Refer to [Bepu Docs](https://github.com/bepu/bepuphysics2) for more details. Warning: You may lose real-time physics.)*
   - **Note:** Imagine you have a Simulation Fixed Step of 10ms & 3 MaxStep/frame. This mean that each frame can simulate max 30ms. 1000 / 30 = ~34. If your simulation run at lower than 34 FPS, you will loose realtime physics. 

12. Parallel update
   - **Type:** bool
   - **Description:** Allows updating Stride's entities' transform in parallel.
   
13. Deterministic
   - **Type:** bool
   - **Description:** Allows you to make the simulation "Computer deterministic". *(Refer to [Bepu Docs](https://github.com/bepu/bepuphysics2) for more details.)*
