# Streams

Streams let you share data between methods and stages of the rendering process. Think of it as a pool of variables that is used only by the shader.

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

## Keyword cheatsheet

* `stream` - used to declare streams that are available in the `streams` keyword.
* `streams` - used to get and set declared streams.

## Differences between variables and streams

* Stream values can be set by a shader
* Streams store separate values for each data that's being computed by the shader (e.g. pixel coordinate)
* Streams are only accessible through composition
* Streams cannot be modified through C#

## Declaring a stream

Streams are declared in the root of a shader by prefixing a variable with the `stream` modifier.

```sdsl
shader Example
{
    stream int MyStream;
}
```

## Using streams

All streams that your shader has access to can be accessed through the `streams` keyword.

```sdsl
float4 Compute()
{
    int valueFromStream = streams.MyStream;
    return valueFromStream * 0.1;
}
```

## Streams between stages

Values from streams can be shared between different [stages](shader-stages.md) that share different data (e.g. vertex uses vertices, shading uses pixels). The reason why this is possible is because SDSL automatically interpolates them, ensuring your methods work correctly.

TODO: VISUALIZATION
