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

TODO: CHECK THIS

* Streams are only accessible in the shader where they are declared.
* Streams are reset between rendering updates.
* Streams cannot be modified through C#.

## Built-in streams

Depending on which classes your shader inherits, it can have access to different streams. For more information about base shaders and their streams, visit [Inheritance](shader-classes-mixins-and-inheritance.md).
