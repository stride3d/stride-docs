# Shader stages

A shader consists of multiple **stages** that compute values for different types of data. During rendering a shader goes through the stages sequentaly in order to construct the resulting image that will be displayed on the screen.

## Rendering stages

The rendering process goes through multiple stages.

1. Vertex stage - processes individual vertices
2. Hull stage - processes patches of vertices and further sub-divides them
3. Domain stage - generates vertices and and triangles from sub-divided patches
4. Geometry stage - processes individual triangles
5. Pixel stage - processes individual pixels

TODO: VISUALIZATION

A shader can choose to process any of these stages to achieve certain effects.

| What the shader does | Stages |
| :-- | :-- |
| Deforming geometry | Vertex stage |
| Modifying pixels | Pixel stage |
| Creating varied detail (e.g. depending on distance to the camera) | Hull stage, domain stage |

## Compute stage

The compute stage is independent from rendering and is only used for [compute shaders](../types-of-shader/compute-shader.md) (shaders that compute data).

```sdsl
shader Example : ComputeShaderBase
{
    RWStructuredBuffer<float> data;

    override void Compute()
    {
        uint i = streams.ThreadGroupIndex;
        data[i] = sin(data[i]);
    }
}
```
