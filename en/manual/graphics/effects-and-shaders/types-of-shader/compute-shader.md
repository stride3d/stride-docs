# Compute shader

A compute shader is a type of shader that is used for processing data. It has nothing to do with graphics.

```sdsl
shader Example : ComputeShaderBase
{
    RWStructuredBuffer<float> data;

    override void Compute()
    {
        uint i = streams.ThreadGroupIndex;
        data[i] = sin(data[i]);
    }
};
```

## How it works

The `Compute` method is executed multiple times at once with a different `ThreadGroupIndex` value. They can then access and modify buffers (`RwStructuredBuffer<T>`) provided by the executing C# script to compute data.

TODO: VISUALIZATION

## Dispatch sizes

Compute shaders use a predetermined dispatch size that specified how many threads are used to execute the `Compute` method.

For example: if I want to calculate data for 1000 items in the buffer, I would have to set the dispatch size to contain 1000 threads.

TODO: VISUALIZATION

The dispatch size is set in C# using the [`ThreadGroupCounts`](xref:Stride.Rendering.ComputeEffect.ComputeEffectShader.ThreadGroupCounts) property.

```csharp
computeEffect = new ComputeEffectShader(RenderContext.GetShared(Services))
{
    ShaderSourceName = "Example",
    ThreadGroupCounts = new Int3(1000, 1, 1) // Dispatch size
};
```

You might notice that the value is 3-dimensional, which leads us to...

### Multi-dimensional dispatch sizes

You can use a 2D or a 3D dispatch size in case the data you are computing demands it.

```sdsl
shader Example : ComputeShaderBase
{
    // buffer size = 64
    // dispatch size = 8x8x1
    RWStructuredBuffer<float> Data;

    override void Compute()
    {
        Data[streams.ThreadGroupIndex] = len(streams.GroupId.xy);
    }
};
```

## Useful properties

* `ThreadGroupCount` - the dispatch size (int3).
* `GroupId` - index of current thread group that is running `Compute` (uint3).
* `ThreadGroupIndex` - 1d version of `GroupId` that has a unique value for every thread group (uint).

## Using the shader

Compute shaders can only by used by C# scripts:

```csharp
public class Example : SyncScript
{
    ComputeEffectShader shader;
    Buffer<float> buffer;

    public override void Start()
    {
        // Create buffers
        buffer = Buffer.New<float>(GraphicsDevice, 64, BufferFlags.UnorderedAccess | BufferFlags.StructuredBuffer | BufferFlags.ShaderResource);
        
        // Create shader instance
        shader = new ComputeEffectShader(RenderContext.GetShared(Services))
        {
            ShaderSourceName = "NameOfShader",
            ThreadGroupCounts = new(64, 1, 1) // Dispatch size
        };
        
        // Set properties
        shader.Parameters.Set(NameOfShaderKeys.Data, buffer);
    }

    public override void Update()
    {
        // Set data
        buffer.SetData(Game.GraphicsContext.CommandList, 30f);
        
        // Execute
        var drawContext = new RenderDrawContext(Services, RenderContext.GetShared(Services), Game.GraphicsContext);
        shader.Draw(drawContext); // This won't actually draw anything on the screen

        // Get data
        var myData = buffer.GetData(Game.GraphicsContext.CommandList);
    }
}
```
