# Use a shader

There are many ways of using shaders in Stride, this page only covers a few of the most common.

## Assigning shaders

The ways of assigning shaders and controlling them differs on the use-case. Please find your type of shader in [Types of shader](types-of-shader/index.md) to see proper instructions.

## Using shaders in C#

When using shaders in code, you will often have to use the automatically generated keys class. Stride creates one for every shader by adding a suffix `Keys` to their names. For example: `MyShader.sdsl` will have a `MyShaderKeys` class.

The keys class holds many useful properties:

* The full name of the class
* A reference to every property that can be changed from code
