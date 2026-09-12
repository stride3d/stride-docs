# Streams

Streams let you share data between methods and stages of the rendering process. Think of it as a pool of variables that is used only by the shader.

TODO: IMAGE

## The two keywords

* `stream` - used to declare variables that are available in `streams`
* `streams` - used to get and set declared variables.

```sdsl
shader Example : ShaderBase
{
    stream float2 myValue;

    override stage void VSMain()
    {
        streams.myValue = 0.5;
    }

    override stage void PSMain()
    {
        float4 processedValue = streams.myValue;
    }
};
```

## Differences between variables and streams

* Stream values can be set by a shader
* Streams store separate values for each data that's being computed by the shader (e.g. pixel coordinate).
* Streams are only accessible in the shader where they are declared.
* Streams cannot be modified through C#.

TODO: VISUALIZATION

## Streams between stages

Values from streams can be shared between different [stages](shader-stages.md).

Of course, different stages use different data (e.g. vertex uses vertices, shading uses pixels), which makes it impossible to use stream values directly. Instead, SDSL automatically interpolates them to guarantee that your methods will work correctly.

TODO: VISUALIZATION

## Built-in streams

Depending on which classes your shader inherits, it can have access to different streams. For more information about base shaders and their streams, visit [Inheritance](shader-classes-mixins-and-inheritance.md).
