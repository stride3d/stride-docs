# Create a shader

Shaders are ordinary text files with the `.sdsl` extension. They are stored in the `Assets` folder, even though they do not appear there in Game Studio.

> [!NOTE]
> Currently, it's not possible to create shaders in Game Studio.

## Create a shader

1. Open the project in your IDE of choice. You can do this from **Game Studio** by pressing the **Open in IDE** button in the top toolbar.

    TODO: IMAGE

2. Find the location where you want to create your shader. We recommend storing all shaders in `Assets/Effects`.

    TODO: IMAGE

    > [!IMPORTANT]
    > Shaders need to be in the `Assets` folder.

3. Create an empty file with the `.sdsl` extension.

    TODO: IMAGE

From there, you can start writing your own custom shader code. Here's an example:

```sdsl
shader MyShader<float Speed> : ComputeColor
{
    override float4 Compute()
    {
        return sin(Global.Time * Speed) / 2 + 0.5;
    }
};
```
