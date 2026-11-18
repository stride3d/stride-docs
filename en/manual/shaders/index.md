# Shaders

In every computer there are two types of components that process instructions:

* **Central processing unit (CPU)** - this is where most logic is executed, including your own **C# scripts**.
* **Graphics processing unit (GPU)** - mostly responsible for graphics calculations, which are done using **shaders**.

Shaders are a fundamental tool for the graphics of a game. Stride contains a lot of built-in shaders to take care of the basics, but in order to create advanced visuals, you'll have to create **custom shaders**.

## Stride's approach to shaders

Stride uses its own shading language called **SDSL**. Unlike a lot of the alternatives, it allows you to write **reusable code** that can be shared across multiple shaders.

```sdsl
shader MyShader<float4 colorA, float4 colorB, float multiplier> : ComputeColor, Texturing, MyOtherShader
{
    override float4 Compute()
    {
        var dist = dist(streams.TexCoord, 0.5) * Global.Time;
        return lerp(colorA, colorB, sin(dist * multiplier));
    }
};
```

## What are effects?

**Effects** are a way of creating new shaders from mixing existing ones. You can think of **shaders** as small **building blocks** and an **effect** as the thing that **joins them together**.

TODO: VISUALIZATION

Effects aren't shaders by themselves, they only specify how to generate a new shader.
