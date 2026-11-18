# Inheritance

By inheriting other shaders, you are able to extend their methods as well as use all of their properties and values.

Stride provides many shaders which you can inherit from, but you can also inherit from any other shader in your project.

## Keyword cheatsheet

* [`base`](#using-base-methods) - allows you to call methods from inherited shaders (e.g. `base.ComputeColor()`)
* [`override`](#overriding) - modifier placed before a method declaration, required when overriding a method
* [`abstract`](#abstract) - a method declared with no body

## Inheriting a shader

You can inherit another shader by adding a `:` suffix along with a name in your shader's declaration.

```sdsl
shader Example : ComputeColor { }
```

In the above example, shader `Example` is inheriting from `ComputeColor`, granting itself access to its `Compute` method.

You can also inherit multiple shaders at once, by separating them with a comma.

```sdsl
shader Example : IMaterialSurfacePixel, MaterialPixelShadingStream { }
```

## Overriding

You can override methods of your inherited shaders by declaring them with the `override` modifier.

Here's an example of a base shader:

```sdsl
// GenericColorShader.sdsl
shader GenericColorShader
{
    float4 GetColor()
    {
        // Returns red
        return float4(1,0,0,1);
    }
}

// FavouriteColorShader.sdsl
shader FavouriteColorShader : GenericColorShader
{
    override float4 GetColor()
    {
        // Returns green
        return float4(0,1,0,1);
    }
}
```

If we now use the `GenericColorShader` in our game, we can expect its method `GetColor` to always return red. However, if we then switch to using `FavouriteColorShader`, the method will start returning green.

The **benefit** this creates over just remaking the method is that **we can use `FavouriteColorShader` in place of a `GenericColorShader`** (e.g. in a composition slot) and still **expect it to work**, as it inherits all of its values and methods.

### Using base methods

Overridden methods can use the previous implementation by calling `base.NameOfMethod()`. That way, you can use overriding to modify the returned method instead of replacing it altogether.

```sdsl
shader Example : OtherShader
{
    override float4 SomeMethod()
    {
        return base.SomeMethod() + 0.1;
    }

    override float4 MethodWithParameter(float t)
    {
        // Get the original returned value
        var original = base.MethodWithParameter(t);

        // Get the return value for a different parameter
        var different = base.MethodWithParameter(2);

        return (original + different) / 2;
    }
}
```

### Abstract

The `abstract` modifier allows you to declare a method without a body, meaning that it doesn't do anything or return any value.

```sdsl
shader ShaderWithAbstractMethod
{
    abstract float4 Compute(float4 color, float time);
}
```

The abstract method can then be implemented by a different shader that inherits it.

```sdsl
shader OtherShader : ShaderWithAbstractMethod
{
    override float4 Compute(float4 color, float time)
    {
        return color * time;
    }
}
```

> [!NOTE]
> Calling the method on a shader that doesn't have it implemented will result in an error.

## Replacing a shader

Replacing is almost similar to overriding, except that the shader you are creating takes place of the old one. Every other place in Stride that used that shader will now use the new version.

To replace a shader, simply create a new shader that derives from it and add the `[Replaces]` attribute above it with the full name of the class you want to replace.

```sdsl
namespace MyGame.Rendering;

[Replaces(Stride.Rendering.ComputeColorMultiply)]
shader MyMultiply : Stride.Rendering.ComputeColorMultiply
{
    override float4 Compute()
    {
        return base.Compute() * 2;
    }
};
```
