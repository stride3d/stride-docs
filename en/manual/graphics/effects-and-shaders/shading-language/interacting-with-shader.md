# Interacting with the Compute shader

To use the Compute Shader in Stride, you can inherit [ComputeShaderBase](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/ComputeEffect/ComputeShaderBase.sdsl) and override the `Compute` method.
```
// CustomComputeShader.sdsl
CustomComputeShader : ComputeShaderBase
{
	// RWStructuredBuffer - a read/write buffer
    stage RWStructuredBuffer<float> ReadWriteBuffer;
	override void Compute()
	{
		// Store data in buffer
        ReadWriteBuffer[0] = 1.0f;        
	}
};
```
In some cases, data from the Compute shader can be retrieved back. 
For this purpose, [several types of resources](https://learn.microsoft.com/en-us/windows/win32/direct3d11/direct3d-11-advanced-stages-cs-resources) with the `RW` (Read/Write) prefix are used, which allows the shader to simultaneously read and write data.
```
// SimpleValues.sdsl
shader SimpleValues : ComputeShaderBase
{
    stage float LerpValue;
    float ValueA;
    float ValueB;

    // RWStructuredBuffer - a read/write buffer
    // used to pass the result back to the CPU
    stage RWStructuredBuffer<float> ResultBuffer;

    // Main Compute shader function
    // Called for each compute thread 
    override void Compute()
    {
        // Linear interpolation between ValueA and ValueB
        float result = lerp(ValueA, ValueB, LerpValue);
        // Write the result to the buffer
        // The buffer is 1 element in size, so we use index 0
        ResultBuffer[0] = result;        
    }
};
```

```csharp
using Stride.Engine;
using Stride.Graphics;
using Stride.Rendering;
using Stride.Rendering.ComputeEffect;

public class SimpleValues : SyncScript
{
    private ComputeEffectShader computeEffectShader;

    private readonly float ValueA = 20;
    private readonly float ValueB = 2000;
    private float LerpValue; // using lerp for example

    // Buffer for calculation result
    private Buffer<float> floatBuffer;

    private RenderDrawContext renderDrawContext;
    private CommandList commandList;

    public override void Start()
    {
        // Get base render context from Services
        RenderContext renderContext = RenderContext.GetShared(Services);

        commandList = Game.GraphicsContext.CommandList;

        // Compute shader
        computeEffectShader = new ComputeEffectShader(renderContext);

        // Draw context needs for PerDraw update data in shader
        renderDrawContext = new(Services, renderContext, Game.GraphicsContext);

        // New result Buffer with 1 float type element
        // BufferFlags.RawBuffer - random access buffer
        // BufferFlags.UnorderedAccess - random access buffer for computations
        floatBuffer = Buffer.New<float>(GraphicsDevice, 1, BufferFlags.RawBuffer | BufferFlags.UnorderedAccess);

        computeEffectShader.ShaderSourceName = "SimpleValues"; // the name of *.sdsl file

        // Passing parameters to a shader via keys
        computeEffectShader.Parameters.Set(SimpleValuesKeys.ValueA, ValueA);
        computeEffectShader.Parameters.Set(SimpleValuesKeys.ValueB, ValueB);

        // Binding the result buffer to the shader
        computeEffectShader.Parameters.Set(SimpleValuesKeys.ResultBuffer, floatBuffer);
    }
    public override void Update()
    {
        if (LerpValue >= 1) LerpValue = 0f;
        LerpValue += 0.001f;

        // Updating the data in the shader
        computeEffectShader.Parameters.Set(SimpleValuesKeys.LerpValue, LerpValue);

        // Starting execution of a Ñompute shader on the GPU. 
        computeEffectShader.Draw(renderDrawContext);

        // Get datas from shader:

        // 1. Value
        var lVal = computeEffectShader.Parameters.GetValues<float>(SimpleValuesKeys.LerpValue);

        // 2. Object
        var bufObj = computeEffectShader.Parameters.GetObject(SimpleValuesKeys.ResultBuffer);

        // 3. Extracting data from the GPU buffer to CPU memory
        // Note: This is a synchronous operation and can be slow for large data sets.
        var rVal = (bufObj as Buffer).GetData<float>(commandList);

        DebugText.Print(rVal[0].ToString(), new Stride.Core.Mathematics.Int2(240, 240));
        DebugText.Print(lVal[0].ToString(), new Stride.Core.Mathematics.Int2(240, 260));
    }
}
```

## See also

* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
    - [Composition](composition.md)
    - [Templates](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)