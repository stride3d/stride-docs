# FAQ

**Q: My objects stop moving or become “stuck” after waiting still for a while.**  
A: This is usually due to the physics engine putting bodies to sleep to save on computation. To prevent your object from sleeping, you can:
- Set `BodyActivityDescription.SleepThreshold = -1` for the object’s body, which disables sleeping.
- Or explicitly wake the object each frame by setting `body.Awake = true` in your update loop.

**Q: Objects pass through each other at high speeds.**  
A: This can be caused by insufficient time resolution or Mesh colliders. Consider enabling Continuous Collision Detection (CCD), reducing the timestep duration, or increasing solver substeps to ensure the solver checks for collisions more frequently. Also use primitives shapes

**Q: How do I deal with high mass ratios that cause instability?**  
A: Very heavy objects supported by very light ones can cause instability. If you can’t adjust masses, try adding additional support structures, increasing solver iterations, enabling substepping, or introducing damping. Lowering constraint stiffness can also help achieve stability without requiring a large number of solver iterations.
