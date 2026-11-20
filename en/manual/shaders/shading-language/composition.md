# Composition

In addition to the inheritance system, SDSL introduces the concept of **composition**. A composition is a member whose type is another shader class. It's defined the same way as variables.

You can compose with an instance of the desired shader class or an instance of a shader class that inherits from it.

```sdsl
shader Example
{
    compose ComputeColor shaderA;
    compose ComputeColor shaderB;
    float t;

    override float4 BlendComputeColors()
    {
        float4 valA = shaderA.Compute();
        float4 ValB = shaderB.Compute();
        return lerp(valA, valB, t);
    }
};
```

## Keyword cheatsheet

* `compose` - declares a composition slot, needs to be followed by a shader name and composition name
* `module compose` - declares a composition slot that can only have one value across every shader instance in the whole effect

## Declaring composition slots

Composition slots are declared in the root of the `shader` class using the structure `compose <NameOfShader> <NameOfComposition>`.

```sdsl
shader Example : ShaderBase
{
    compose ShaderBase OtherShader;
};
```

### `module compose`

By using the `module` modifier, you can make the slot independent from a shader instance, meaning that every instance of the shader will share the same slot and other shaders will be able to access them without a reference to an instance.

TODO: VISUALIZATION IF YOU'RE BORED

This is similar to `static` properties in C#, except that `module` makes composition shared only across the effect and not the entire game.

> [!TIP]
> Some shaders, such as [Compute colors](../types-of-shader/compute-color.md) require you to use `module compose` in order to make it possible to assign a shader to the slot.

## Setting compositions on a Compute color shader

If you are using a compute color shader, you can set its compositions in the property using the **Composition nodes** property.

1. Find the shader on the material in the **Property grid**.

    TODO: IMAGE

2. Locate the **Composition nodes** property, press the arrow icon next to it and select the type of composition you want to add.

    TODO: IMAGE

3. Set the name of the composition slot in your base shader and fill out the rest of the properties.

    TODO: IMAGE

## Setting compositions in code

TODO: FIGURE THAT OUT AND COVER ALL WAYS
