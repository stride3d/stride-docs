# Shaders and modules

The `shader` and `module` keywords are essential when trying to write SDSL code. All properties, methods, streams, composition slots and more need to be placed under one.

`shader` and `module` are the ecquivalent of `class` and `static class` in C#.

## Keyword cheatsheet

* `shader` - defines a shader (which can have multiple instances of the same type)
* `module` - defines a module (which is always singular in the entire effect)

## Difference between shaders and modules

A `shader` is the more commonly used keyword. It defines a body that can be instantiated multiple times in a single effect. Different instances function independently of each-other and can hold different values.

A `module` on the other hand is used to define bodies that only have one instance in the entire effect. All members in the module are accessible from other modules and shaders without having to define an instance or use inheritance.

**In practice** most of your code will live in **shaders** and **modules** will be used for utility methods. For example:

```sdsl
module MyNoise
{
    float Hash(float2 p)
    {
        return frac(sin(dot(p, float2(12.9898, 78.233))) * 43758.5453);
    }
};
```

## Defining a shader or module

Shaders and modules are defined with the `shader` and `module` keyword respectively, followed by their name. However, they need to follow certain rules:

* There can only be one shader or module per-file
* They have to have the same name as their file

```sdsl
// The name of the file has to be Example.sdsl
shader Example
{

};
```

> [!NOTE]
> Remember to put a semicolon (`;`) at the end of the block (`{ }`)!
