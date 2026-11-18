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

An **effect** is a complete package of multiple **shaders** that the engine can more easily work with. While shaders can use other shader files through inheritance, compositions and importing, effects are singular and independent.

TODO: VISUALIZATION

You can create `.sdfx` files to describe how to mix together multiple shaders into an effect based on specified parameters. Think of it as using small building blocks (shaders) to construct something bigger (an effect).

> [!NOTE]
> `.sdfx` files aren't shader code by themselves. They are ran on the CPU in order to construct effects which then get executed on the GPU.

> [!TIP]
> You don't need to create a `.sdfx` file to create an effect. In many cases, Stride will do it for you automatically.
