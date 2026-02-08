# Shader development with Visual Studio Code

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

The **Stride Shader Tools** extension for Visual Studio Code provides language server features for SDSL shader development with intelligent code completion and navigation.

For information on the SDSL language itself, see [Shading language](shading-language/index.md). For using shaders in materials, see [Custom shaders](custom-shaders.md).

## Features

The VS Code extension provides:

* **Syntax highlighting** for SDSL (`.sdsl` files)
* **IntelliSense** with context-aware completions
* **Inheritance tree visualization** in a dedicated sidebar panel
* **Member explorer** showing all available methods and variables
* **Go-to-definition** through the inheritance hierarchy
* **Hover documentation** for types, methods, and semantics
* **Real-time diagnostics** for parse errors and type issues
* **Shader debugging** with RenderDoc integration *(in development)*

## Installation and setup

### Prerequisites

* [Visual Studio Code](https://code.visualstudio.com/) or [VSCodium](https://vscodium.com/)
* .NET 8 SDK (the extension will prompt you to install if not present)

### Installation

1. Open Visual Studio Code
2. Install the **Stride Shader Tools** extension:
   - Open Extensions view (Ctrl+Shift+X) and search for **"Stride Shader Tools"**
   - Or install directly from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=tebjan.sdsl) or [OpenVSX](https://open-vsx.org/extension/tebjan/sdsl) (for VSCodium and alternatives)

### Configuration

The extension automatically discovers shaders from:
* Your workspace folder
* Stride NuGet packages in `%NUGET_PACKAGES%` or `~/.nuget/packages`
* vvvv gamma installations (for vvvv users)

You can add custom shader directories in VS Code settings:
1. Open Settings (Ctrl+,)
2. Search for "Stride Shader Tools"
3. Add paths to **Additional Shader Paths**

## IntelliSense features

### Context-aware completions

The extension provides intelligent completions based on your current context:

#### Inherited members

When you inherit from a shader class, all inherited methods and members appear in completions:

```cs
shader MyShader : ComputeColor
{
    override float4 Compute()
    {
        // Type 'base.' to see all base class methods
        return base.Compute();
    }
}
```

Type `override ` to see all methods you can override from the inheritance hierarchy.

#### Streams

The extension shows available streams based on:
* Current shader stage (vertex, pixel, compute)
* Declared streams in the inheritance chain
* Built-in Stride streams

```cs
shader MyVertexShader : ShaderBase, Transformation
{
    stage void VSMain()
    {
        // Type 'streams.' to see all available streams
        streams.Position = mul(streams.Position, World);
    }
}
```

#### Semantic bindings

After typing `:` in shader input/output declarations, the extension provides completions for valid semantics:

```cs
shader MyShader : ShaderBase
{
    stage stream float4 Position : SV_Position;
    //                              ^ Get completions for all valid semantics

    stage stream float2 TexCoord : TEXCOORD0;
    //                              ^ Hover for documentation
}
```

Hover over any semantic to see:
* What the semantic represents
* Which shader stages it's valid in
* Usage examples

#### Compositions

When declaring a composition, the extension shows all shaders that implement the required interface:

```cs
shader MyMaterial : MaterialPixelStream
{
    compose ComputeColor diffuseMap;
    //                    ^ Get suggestions for all ComputeColor implementations
}
```

This helps you discover compatible shaders without manually browsing files.

### Go-to-definition

Use **Ctrl+Click** (or F12) on any shader class, method, or member to jump to its definition. This works across the inheritance hierarchy:

* Click on a base class name → jump to base shader file
* Click on an inherited method → jump to the implementation in the base class
* Click on a stream → jump to where it's declared

Use **Alt+Left** to navigate back.

### Hover information

Hover over any identifier to see:
* Type information
* Method signatures
* Documentation from base classes
* Semantic binding explanations
* Where the symbol is defined

## Sidebar panels

### Inheritance tree

The **Inheritance Tree** panel shows the complete hierarchy of the shader you're editing. This is particularly useful for understanding complex inheritance chains in Stride's shader system.

For example, when editing a material shader, you might see:
```
MyCustomMaterial
├─ MaterialPixelShadingStream
│  ├─ MaterialPixelStream
│  │  └─ ShaderBase
│  └─ ShadingBase
└─ NormalMapTexture
   └─ ComputeColor
```

Click any shader in the tree to open its source file.

### Member explorer

The **Member Explorer** panel lists all methods and variables available in your shader, including inherited members. Members are grouped by:

* **Methods** - All callable methods (including overridden and inherited)
* **Variables** - Stage and stream variables
* **Compositions** - Composition declarations

Each entry shows:
* The member name
* Its type
* Which shader class it's defined in (for inherited members)
* Whether it's overridable

Click any member to jump to its definition.

## Working with inheritance

SDSL uses multiple inheritance with specific resolution rules. The extension helps you navigate this complexity.

### Understanding method resolution

When multiple base classes define the same method, the rightmost base class wins. The inheritance tree visualizes this clearly.

```cs
shader ShaderA : BaseA, BaseB, BaseC
{
    // If BaseA, BaseB, and BaseC all define Compute(),
    // BaseC's implementation is used unless overridden here
}
```

Use the inheritance tree to see the complete chain and understand which implementation applies.

### Overriding methods

To override a method:

1. Type `override ` in your shader class
2. Select the method you want to override from the completion list
3. The method signature is automatically inserted

The extension shows which methods can be overridden and where they're defined in the hierarchy.

### Calling base implementations

To call the base class implementation of a method:

```cs
shader MyShader : ComputeColor
{
    override float4 Compute()
    {
        float4 baseColor = base.Compute();
        return saturate(baseColor * 2.0);
    }
}
```

Type `base.` to see all available base class methods.

## Best practices

### Explore before implementing

Before writing a shader:

1. Use **Go-to-Definition** to explore base classes
2. Check the **Inheritance Tree** to understand the hierarchy
3. Review the **Member Explorer** to see what's already available
4. Decide what needs to be overridden vs reused

This prevents duplicate work and helps you leverage existing functionality.

### Use static calls instead of includes

SDSL allows calling static functions from other shaders without `#include`:

```cs
shader Utils
{
    static float4 Invert(float4 color)
    {
        return float4(1.0 - color.rgb, color.a);
    }
}

shader MyShader : ComputeColor
{
    override float4 Compute()
    {
        return Utils.Invert(base.Compute());
    }
}
```

The extension provides completions for static functions in all shaders in scope.

### Leverage hover documentation

When unsure about a method, semantic, or type:
* Hover to see documentation
* Check the signature and return type
* Use **Go-to-Definition** to see the implementation

This reduces context-switching to external documentation.

## Comparison with Visual Studio

Both Visual Studio and VS Code are viable options for Stride shader development:

| Feature | VS Code + Extension | Visual Studio + Stride Extension |
|---------|---------------------|----------------------------------|
| Syntax highlighting | ✅ SDSL | ✅ SDSL |
| Error reporting | ✅ Real-time | ✅ On save |
| Code completion | ✅ Context-aware | ⚠️ Basic |
| Inheritance tree | ✅ Live panel | ❌ |
| Member explorer | ✅ With inheritance context | ⚠️ Basic |
| Go-to-definition | ✅ Through hierarchy | ⚠️ Limited |
| Hover documentation | ✅ Full | ⚠️ Limited |
| Semantic documentation | ✅ | ❌ |
| Game Studio integration | ⚠️ External | ✅ Built-in |
| Asset reloading | ⚠️ Manual | ✅ Automatic |
| Shader debugging | 🔜 RenderDoc integration | ❌ |

**Visual Studio** is best if you're primarily working in Game Studio and want tight integration with asset workflows.

**VS Code** is best for shader-focused development where understanding inheritance and having context-aware assistance is critical.

Many developers use both: Game Studio with Visual Studio for asset work, and VS Code for intensive shader development.

## Troubleshooting

### Extension not activating

The extension activates when you open a `.sdsl` file. If it doesn't activate:

1. Check the Output panel (View → Output) and select "Stride Shader Tools" from the dropdown
2. Verify the language server is running
3. Check for errors in the Output panel

### Completions not working

If IntelliSense isn't working:

1. Ensure the shader file is in a valid workspace folder
2. Check that the file is properly formatted (no syntax errors)
3. Verify the extension has discovered shader paths (check Output panel)
4. Try reloading the window (Ctrl+Shift+P → "Reload Window")

### Inheritance tree not showing

The inheritance tree requires:
* Valid SDSL syntax
* At least one base class declared
* The file to be part of the workspace

If the tree is empty, check for syntax errors in the file.

## See also

* [Custom shaders](custom-shaders.md) - Creating and using shaders in materials
* [Shading language](shading-language/index.md) - SDSL language reference
* [Shader classes, mixins and inheritance](shading-language/shader-classes-mixins-and-inheritance.md) - Inheritance concepts
* [Composition](shading-language/composition.md) - Using shader compositions
* [Stride Shader Explorer](https://github.com/tebjan/Stride.ShaderExplorer) - Standalone tool for browsing shader hierarchies
