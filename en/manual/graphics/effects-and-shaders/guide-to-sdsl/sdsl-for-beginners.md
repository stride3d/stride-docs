# SDSL for beginners

This guide is meant to teach absolute beginners that never had any contact with other shading or programming languages. If you're coming from HLSL or C#, we recommend reading other guides for the language you are most familiar with.

## Introduction

We recommend that you first read [What are shaders?](../what-are-shaders.md) in order to understand what shaders do and why they exist.

The fundamental idea is that a shader is executed on every piece of data provided to it (e.g. for every pixel or every vertex of a model). We can use this in order to generate or modify graphics of a game.

### Example 

TODO: IMAGE OF GRADIENT

The above texture can be generated using a shader by changing the red value of a pixel depending on its position. Every time the shaders is asked "what color is this pixel?", it responds by saying "the X position of a pixel in the red channel and 0 for green and blue".

TODO: VISUALIZATION / DRAWING

## Prerequisites

You can write shaders in any text editor of your choosing, but we recommend that you use one of the supported IDEs (applications for writing code) and take the time to properly set them up by installing the **Stride Extension**.

For more information, visit [Stride Extension](../../../get-started/visual-studio-extension.md).

## Creatng a shader

You can read [Create a shader](../create-a-shader.md) to see how to create an SDSL shader that can be used in Stride.

After you created your `.sdsl` file, you can open it in your IDE and write the following code:

```sdsl
shader NameOfFile : ComputeColor
{
    override float4 Compute()
    {
        return 1;
    }
}
```

Let's go over what all of that means:

* `shader NameOfFile` - this is where we state that we are writing a shader that is named `NameOfFile`. The name has to match the file, which in this example would be `NameOfFile.sdsl`.
* `: ComputeColor` - by adding a `:`, we are stating that the shader is going to inherit from a different shader that's called `ComputeColor`. Most of the time if you want to use your shader in your game, you will have to inherit from something. You can see a list of some of the most common shader types and the shaders you need to inherit from in [Types of shaders](../types-of-shader/index.md).
* `override float4 Compute() { ... }` - this is where we will do our calculations and return the value that should be displayed on screen.

In this guide we will be creating a [Compute color shader](../types-of-shader/compute-color.md), as it's one of the easiest to write and understand. It's used to dynamically generate pixel data in place of a texture in a material.

TODO: IMAGE

## Using a shader

Right away, you should be able to use your shader in Game Studio to preview how it looks.

1. Click the **reload assemblies** button in the top toolbar to make sure your shader is going to show up in Game Studio.

    TODO: IMAGE

2. Select a material that's used in your game.

    TODO: IMAGE

3. In the **Property grid**, find the **Diffuse Map** property, click the arrow button next to it and select **Shader**.

    TODO: IMAGE


4. Write the name of your shader in the field.

    TODO: IMAGE

You should now see your shader appear in your world. Right now it's gonna show up as being fully white, as we are returning `1` for every pixel on the screen.

> [!NOTE]
> Sometimes you might need to build your game in order to see changes to the shader.

## Writing shader code

We are now going to recreate the example from the introduction and turn our shader into a red gradient generator.

Our `Compute` method returns a `float4` value that represents color. A `float` means a decimal value (e.g. 0.3, 1.2, 7) and the affix `4` means that there are 4 of them, therefore a `float4` means we are returning 4 decimanl values that represent the red, green, blue and alpha values of a color.

However you might have noticed that we aren't doing that, we are just returning one value: `1`.

```sdsl
override float4 Compute()
{
    return 1;
}
```

The reason why this works is because SDSL converts our singular number into a `float4`. For the engine, it looks like `Compute` returns `float4(1,1,1,1)`.

We can manually change this into a proper `float4` like so:

```sdsl
override float4 Compute()
{
    return float4(1, 1, 1, 1);
}
```

You can try and change some of those `1` values and see the material in your game become a different color. Here's an example of how `float4(0.8, 0.2, 1, 1)` looks like:

TODO: IMAGE

Now, if you remember from the example, the shader is meant to return a `float4` where the first value is set to the X position of the pixel being displayed. We can get that information by inheriting from another shader called `Texturing`. It provides information related to textures and coordinates, which is exactly what we need for this shader.

```sdsl
shader NameOfFile : ComputeColor, Texturing
{
    ...
}
```

We can now access the pixel coordinate from `streams.TexCoord`. It contains a `float2` value, where each number ranges from `0` to `1`.

TODO: IMAGE

```sdsl
shader NameOfFile : ComputeColor, Texturing
{
    override float4 Compute()
    {
        return float4(streams.TexCoord.x, 0, 0, 1);
    }
}
```

Now when you reload the shader, you can see it update in your game and in Game Studio.

TODO: IMAGE

## What are streams?

You might have noticed the `streams` keyword being used in our shader. Streams can be defined as values that can be read and modified by the shader, but that can't be accessed externally by the engine or your own C# code. They are useful for passing values between methods and shaders.

You can even define your own shaders, but that is out of the scope of this guide. For more information, see [Streams](../shading-language/streams.md).

## Where to go from here

This guide is barely scratching the surface in terms of what is possible in SDSL. The best way to expand your knowledge is to start writing shaders and see what problems you encounter.

You can also explore other pages in this manual to learn more about other features of SDSL. For example, you may have already encountered the following already:

* [Variables](../shading-language/variables.md)
* [Streams](../shading-language/streams.md)
* [Inheritance](../shading-language/inheritance.md)

If you still don't understand how shaders work, consider exploring other resources online, like those listed in our [community resources](../../../../community-resources/shaders.md).

You can also ask for help on our [Discord server](https://discord.gg/f6aerfE).
