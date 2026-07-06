# Types of rotation

Rotation is typically the most challenging part of working with transforms. This is due to one major problem: how do you define a rotation?

### Euler angles

**Euler angles** are the simplest to explain. The idea is to store the rotation in 3 axes: X, Y and Z to imitate a gimbal. They have their own benefits and drawbacks:

* 🟩 More human readable
* 🟩 Easier to understand
* 🟥 Difficult to compute
* 🟥 Prone to [gimbal lock](https://en.wikipedia.org/wiki/Gimbal_lock).

**Euler angles** are best used for setting an entity's initial rotation, which is why they are used in **Game Studio**.

### Quaternions

**Quaternions** on the other hand are almost impossible to explain without going deep into mathematics. They have their own benefits and drawbacks:

* 🟩 Easier to compute
* 🟩 Have less ambiguity than euler angles
* 🟥 Difficult to understand
* 🟥 Not readable

**Quaternions** are what is used by Stride during runtime. They can be controlled indirectly using utility methods.
