# チュートリアル: パーティクル マテリアル
<!--
# Tutorial: Particle materials
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

このチュートリアルでは、パーティクルシステム用にカスタムシェーダーやマテリアルを作成する方法を紹介します。シェーダーとレンダリングに焦点を当てます。シミュレーションについては、[カスタムパーティクル チュートリアル](custom-particles.md)を参照してください。
<!--
This tutorial demonstrates how to create custom shaders and materials for a particle system, providing functionality not available in the core engine. It focuses on shaders and rendering. For simulation, see the [custom particles tutorial](custom-particles.md).
-->

パーティクルの編集に慣れていない方は、[パーティクルの作成](../create-particles.md)をご覧ください。
<!--
If you're not familiar with editing particles, see [Create particles](../create-particles.md).
-->

まずは、新しい **Sample: Particles** プロジェクトを作成しましょう。
<!--
Start by creating a new **Sample: Particles** project.
-->

![Particles sample project](media/select-particles-sample-project.png)

このプロジェクトには 4 つのシーン（**AnimatedParticles**, **ChildParticles**, **CustomMaterials**, **CustomParticles**）があり、それぞれがパーティクルの異なる使用方法を示しています。
<!--
This project contains four scenes, each demonstrating a different way to use particles: **AnimatedParticles**, **ChildParticles**, **CustomMaterials**, and **CustomParticles**.
-->

**CustomMaterials** シーンを開きます。
<!--
Open the **CustomMaterials** scene.
-->

シーンには、3 つのパーティクルエンティティ（**Rad Particle System**, **Radial Particle System**, **Two Textures Particle System**）があります。
<!--
There are three particle entities in the scene: **Rad Particle System**, **Radial Particle System**, and **Two Textures Particle System**.
-->

![media/particles-samples-material-1.png](media/particles-samples-material-1.png)

パーティクルエンティティを 1 つ選択してその Source プロパティへ移動し、その中のエミッターとマテリアルを展開します。
<!--
Select one of the particle entities and navigate to its source particle system, expanding the emitter in it and its material.
-->

## 赤いパーティクルシステム
<!--
## Red particle system
-->

**赤いパーティクルシステム**は、非常にシンプルでカスタマイズも簡単です。[マテリアルマップ](../../graphics/materials/material-maps.md)には、葉ノードの入力としてシェーダーを使用するオプションがすでに用意されているので、カスタムシェーダーを作成して、そのノードに割り当てます。
<!--
The **red particle system** has a very simple customization. Since the [material maps](../../graphics/materials/material-maps.md) already provide an option to use shaders as a leaf node input, we can create a custom shader and assign it to that node.
-->

まず、`ComputeColor` クラスを継承するシェーダー `ComputeColorRed.sdsl` を作成します。
<!--
First, create a shader (`ComputeColorRed.sdsl`) with a derived class for `ComputeColor`:
-->

  ```cs
class ComputeColorRed : ComputeColor
{
    override float4 Compute()
    {
        return float4(1, 0, 0, 1);
    }
};
```

このシェーダーが行うことは、`Compute` が呼ばれるたびにピクセルシェーディング用の赤色を返すことだけです。後でもっと難しいことをやってみようと思いますが、今はシンプルにいきましょう。
<!--
The only thing this shader does is return the red color for pixel shading every time `Compute` is called. We'll try something more difficult later, but for now let's keep it simple.
-->

ファイルを保存し、Game Studio でスクリプトを再読み込みします。**アセットビュー**に新しいシェーダーが表示されるはずです。
<!--
Save the file and reload the scripts in Game Studio. You should see the new shader in **Asset View**.
-->

![media/particles-samples-material-2.png](media/particles-samples-material-2.png)

シェーダーが現れない場合は、プロジェクトをリロードしてください。
<!--
If the shader isn't there, reload the project.
-->

シェーダーが読み込まれると、**プロパティグリッド**で、パーティクルの **dynamic emissive material** の下からアクセスできます。タイプに Shader を選択し、ドロップダウンメニューから先ほどシーンに追加したシェーダーを選択します。
<!--
Once the shader is loaded, you can access it in the **Property Grid** under the **dynamic emissive material** for the particles. Choose a type of shader and, from the drop-down menu, select the shader you just added to the scene.
-->

![media/particles-samples-material-3.png](media/particles-samples-material-3.png)

パーティクルの色は赤です。Game Studio を起動した状態で `ComputeColorRed.sdsl` を以下のように編集して保存すると、黄色になります。
<!--
The particles are red. With Game Studio running, edit and save `ComputeColorRed.sdsl` to make them yellow.
-->

  ```cs
class ComputeColorRed : ComputeColor
{
    override float4 Compute()
    {
        return float4(1, 1, 0, 1);
    }
};
```

Stride はダイナミック シェーダー コンパイルに対応しているので、パーティクルはすぐに黄色に変わります。
<!--
Because Stride supports dynamic shader compilation, the particles immediately turn yellow.
-->

### 放射状のパーティクルシステム
<!--
### Radial particle system
-->

次のシェーダーでは、テクスチャー座標を使ってエディターに任意の値を表示します。

<!--
For the next shader we'll use texture coordinates expose arbitrary values to the editor.
-->

Check `ComputeColorRadial.sdsl`.

  ```cs
class ComputeColorRadial<float4 ColorCenter, float4 ColorEdge> : ComputeColor, Texturing
{
    override float4 Compute()
    {
        float radialDistance = length(streams.TexCoord - float2(0.5, 0.5)) * 2;

        float4 unclamped = lerp(ColorCenter, ColorEdge, radialDistance);

        // 強度は大きくしたいが α 値は 1 に抑えたい
        // We want to allow the intensity to grow a lot, but cap the alpha to 1
        float4 clamped = clamp(unclamped, float4(0, 0, 0, 0), float4(1000, 1000, 1000, 1));

        // 乗算済みアルファパイプラインを使用しているので、すべての色値は α 値を乗じられている必要があります。
        // Remember that we use a premultiplied alpha pipeline so all color values should be premultiplied
        clamped.rgb *= clamped.a;

        return clamped;
    }
};
```

これは、`ComputeColorRed` と同様の方法で、コンパイルして読み込むことができます。
<!--
This is similar to `ComputeColorRed` and can be compiled and loaded the same way.
-->

いくつかの重要な違いがあります。このシェーダーは、`Texturing` シェーダー基本クラスを継承しています。これにより、ストリームからテクスチャー座標を得られるようになっています。Game Studio のマテリアル側では、テクスチャアーニメーションを使用しない場合に、テクスチャー座標を強制的にストリーム化することができます。
<!--
There are several key differences. The shader now inherits from the `Texturing` shader base class as well. This allows it to use texture coordinates in from the streams. On the material side in Game Studio, we can force the texture coordinates to be streamed in case we don't use texture animation.
-->

シェーダーの入力値である `float4 ColorCenter` と `float4 ColorEdge` は順列（permutations）です。シェーダを読み込むと、プロパティグリッドでは **Generics** ディクショナリの下にそれらが表示されます。
<!--
The input values `float4 ColorCenter` and `float4 ColorEdge` in our shader are permutations. When we load the shader the Property Grid displays them under the **Generics** dictionary.
-->

![media/particles-samples-material-4.png](media/particles-samples-material-4.png)

ここで設定した値は、パーティクル用の `ComputeColorRadial` シェーダーで使われます。シェーダーの残りの部分は、シェーディングされたピクセルのビルボードの中心からの距離に基づいて、単純にグラデーションカラーを計算しています。
<!--
The values we set here will be used by the `ComputeColorRadial` shader for the particles. The rest of the shader simply calculates a gradient color based on the distance of the shaded pixel from the center of the billboard.
-->

## 2-テクスチャー パーティクル システム
<!--
## Two-texture particle system
-->

ここでは、パーティクルのカスタムマテリアルとエフェクトを作成する方法を紹介します。`DynamicColor` マテリアルは 1 つの RGBA チャンネルをサポートしています。今回のサンプルでは、RGB チャンネルと A チャンネルを分離し、異なるテクスチャー座標でのアニメーションや、色の計算に異なるテクスチャーやバイナリツリーを使用できるようにしています。
<!--
This demonstrates how to create custom materials and effects for the particles. The `DynamicColor` material supports one RGBA channel. For our sample, we'll separate the RGB and A channels, allowing them to use different texture coordinate animations and different textures and binary trees to compute the color.
-->

### パラメーター キー
<!--
### Parameter keys
-->

パラメータキー（ParameterKey）は、データをマッピングしてシェーダーに渡すために使用します。いくつかは生成済みですが、独自に定義することもできます。
<!--
Parameter keys are used to map data and pass it to the shader. Some of them are generated, and we can define our own too.
-->

シェーダー（`ParticleCustomShader`）の中でより多くのストリームを定義すれば、それらは自動生成されるクラスにエクスポートされます。以下を `ParticleCustomShader.sdsl` に追加してみてください。
<!--
If we define more streams in our shader (`ParticleCustomShader`), they're exported to an automatically generated class. Try adding the following to `ParticleCustomShader.sdsl`:
-->

  ```cs
    // -------------------------------------
    // streams
    // -------------------------------------
    stage float4 SomeRandomKey;
```

生成された .cs ファイルには以下が含まれています。
<!--
The generated .cs file should now contain:
-->

  ```cs
namespace Stride.Rendering
{
    public static partial class ParticleCustomShaderKeys
    {
        public static readonly ParameterKey<Vector4> SomeRandomKey = ParameterKeys.New<Vector4>();
    }
}
```

今のところ、このストリームは必要ないので、削除してしまいましょう。
<!--
We don't need this stream for now, so we can delete it.
-->

マテリアルやエフェクトで使用するために、`ParticleCustomMaterialKeys.cs` で追加のキーをいくつか定義します。
<!--
We'll define some extra keys in `ParticleCustomMaterialKeys.cs` to use in our material and effects.
-->

  ```cs
namespace Stride.Rendering
{
    public partial class ParticleCustomShaderKeys
    {
        static ParticleCustomShaderKeys()
        {

        }

        public static readonly ParameterKey<ShaderSource> BaseColor     = ParameterKeys.New<ShaderSource>();

        public static readonly ParameterKey<Texture> EmissiveMap = ParameterKeys.New<Texture>();
        public static readonly ParameterKey<Color4> EmissiveValue = ParameterKeys.New<Color4>();



        public static readonly ParameterKey<ShaderSource> BaseIntensity = ParameterKeys.New<ShaderSource>();

        public static readonly ParameterKey<Texture> IntensityMap = ParameterKeys.New<Texture>();
        public static readonly ParameterKey<float> IntensityValue = ParameterKeys.New<float>();
    }
}
```

上記のとおり、生成されたクラスは同じ名前を持ち、名前空間は `Stride.Rendering` であるので、自分のクラスを partial クラスにして、名前空間も一致させなければなりません。これはこのサンプルには影響しませんが、シェーダーコードがいくつかのキーを自動生成している場合にはコンパイルエラーになります。
<!--
As we saw above, the generated class has the same name and the namespace is `Stride.Rendering`, so we have to make our class partial and match the namespace. This has no effect on this specific sample, but will result in compilation error if your shader code auto-generates some keys.
-->

残りのコードは一目瞭然です。シェーダーの生成にはマップキーとバリューキーが必要になりますので、生成したコードをそれぞれ `BaseColor` と `BaseIntensity` キーに設定し、シェーダーで使用できるようにします。
<!--
The rest of the code is self-explanatory. We'll need the map and value keys for shader generation later, and we'll set our generated code to the `BaseColor` and `BaseIntensity` keys respectively so the shader can use it.
-->

#### カスタムシェーダー
<!--
#### Custom Shader
-->

それでは、`ParticleCustomShader.sdsl` を見てみましょう。
<!--
Let's look at `ParticleCustomShader.sdsl`:
-->

  ```cs

class ParticleCustomShader : ParticleBase
{
    // このシェーダーはユーザーが設定でき、小さなシェーダーからなるバイナリツリーで構成されています
    // This shader can be set by the user, and it's a binary tree made up from smaller shaders
    compose ComputeColor  baseColor;

    // このシェーダーはユーザーが設定でき、小さなシェーダーからなるバイナリツリーで構成されています
    // This shader can be set by the user, and it's a binary tree made up from smaller shaders
    compose ComputeColor  baseIntensity;

    // スプライトのシェーディング …… ベースクラスの Shading() をオーバーライドし、ColorScale のみを返します。
    // Shading of the sprite — we override the base class's Shading(), which only returns ColorScale
    stage override float4 Shading()
    {
        // -----------------------------------------------
        // Base particle color RGB
        // -----------------------------------------------
        float4 finalColor = base.Shading() * baseColor.Compute();

        // -----------------------------------------------
        // Base particle alpha
        // -----------------------------------------------
        finalColor.a    = baseIntensity.Compute();

        // RGB 値に α 値を前もって乗じるのを忘れないでください。
        //  Don't forget to premultiply the alpha
        finalColor.rgb *= finalColor.aaa;

        return finalColor;
    }
};
```

ここでは 2 つの compose シェーダー `baseColor` と `abseIntensity` を定義しており、ここに RGB と A 用に生成されたシェーダーをそれぞれ挿入しています。すでに `VSMain`, `PSMain` ならびにテクスチャリング（textureing）を定義している `ParticleBase` を継承しており、非常にシンプルな `Shading()` メソッドを使用しています。
<!--
It defines two composed shaders, `baseColor` and `abseIntensity`, where we'll plug our generated shaders for RGB and A respectively. It inherits `ParticleBase` which already defines `VSMain`, `PSMain` and texturing, and uses very simple `Shading()` method.
-->

`Shading()` メソッドをオーバーライドすることで、カスタム動作を定義することができます。使用するコンポジット シェーダーは `ComputeColor` から派生したものなので、`Compute()` を使って簡単に評価することができ、色と強度の計算ツリーのルートを得ることができます。
<!--
By overriding the `Shading()` method we can define our custom behavior. Because the composed shaders we use are derived from `ComputeColor`, we can easily evaluate them using `Compute()`, which gives us the root of the compute tree for color and intensity.
-->

#### カスタム エフェクト
<!--
#### Custom effect
-->

ここで紹介するエフェクトでは、シェーダーをミックスして合成する方法を説明しています。それは`ParticleCustomEffect.sdfx` にあります。
<!--
Our effect describes how to mix and compose the shaders. It's in `ParticleCustomEffect.sdfx`:
-->

  ```cs
namespace Stride.Rendering
{
    partial shader ParticleCustomEffect
    {
        // 定数属性に ParticleBaseKeys を使用します。ゲームエンジンで定義されています。
        // Use the ParticleBaseKeys for constant attributes, defined in the game engine
        using params ParticleBaseKeys;

        // 定数属性に ParticleCustomShaderKeys を使用します。このプロジェクトで定義しています。
        // Use the ParticleCustomShaderKeys for constant attributes, defined in this project
        using params ParticleCustomShaderKeys;

        // ゲームエンジンで定義されている ParticleBaseEffect.sdfx を継承しています。
        // Inherit from the ParticleBaseEffect.sdfx, defined in the game engine
        mixin ParticleBaseEffect;

        // このプロジェクトで定義された ParticleCustomShader.sdsl を使用します。
        // Use the ParticleCustomShader.sdsl, defined in this project
        mixin ParticleCustomShader;

        // baseColor のユーザー定義シェーダーが null でない場合には、それを使用します。
        // If the user-defined shader for the baseColor is not null use it
        if (ParticleCustomShaderKeys.BaseColor != null)
        {
            mixin compose baseColor = ParticleCustomShaderKeys.BaseColor;
        }

        // baseIntensity（アルファ）のユーザー定義シェーダーが null でない場合には、それを使用します。
        // If the user-defined shader for the baseIntensity (alpha) is not null use it
        if (ParticleCustomShaderKeys.BaseIntensity != null)
        {
            mixin compose baseIntensity = ParticleCustomShaderKeys.BaseIntensity;
        }

   };

}
```

`ParticleBaseKeys` と `ParticleBaseEffect` は、私たちが継承するベースシェーダーで必要とされるものです。
<!--
`ParticleBaseKeys` and `ParticleBaseEffect` are required by the base shader which we inherit.
-->

`ParticleCustomShaderKeys` は、先ほど定義したキーを提供し、シェーダーを差し込む場所となります。
<!--
`ParticleCustomShaderKeys` provides the keys we defined earlier, where we'll plug our shaders.
-->

最後に、両方のシェーダーについてユーザー定義のコードがあるかどうかを確認し、それをプラグインするだけです。`baseColor` と `baseIntensity` のパラメータは、先ほど作成したシェーダーのものです。
<!--
Finally, for both shaders we only need to check if there is user-defined code for it and plug it. The `baseColor` and `baseIntensity` parameters are from the shader we created earlier.
-->

最後に、すべてのキーを設定し、新しく作成したエフェクトを使用するマテリアルが必要です。
<!--
Last, we need a material which sets all the keys and uses the newly created effect.
-->

#### カスタム パーティクル マテリアル
<!--
#### Custom particle material
-->

ここでは、@'Stride.Particles.Materials.ParticleMaterialComputeColor' をプロジェクトの`ParticleCustomMaterial.cs` にコピーし、色バイナリーツリーに 2 つのシェーダーを使用するようカスタマイズします。
<!--
We'll copy @'Stride.Particles.Materials.ParticleMaterialComputeColor' into `ParticleCustomMaterial.cs` in our project and customize it to use two shaders for color binary trees.
-->

  ```cs
        [DataMemberIgnore]
        protected override string EffectName { get; set; } = "ParticleCustomEffect";
```

ベースクラスは，`EffectName` で指定されたエフェクトを自動的にロードしようとします．ここでは、先ほど作成したエフェクトの名前を指定しています。
<!--
The base class automatically tries to load the effect specified with `EffectName`. We give it the name of the effect we crated earlier.
-->

  ```cs
        [DataMember(300)]
        [Display("Alpha")]
        public IComputeScalar ComputeScalar { get; set; } = new ComputeTextureScalar();

        [DataMember(400)]
        [Display("TexCoord1")]
        public UVBuilder UVBuilder1;
        private AttributeDescription texCoord1 = new AttributeDescription("TEXCOORD1");
```

既存の @'Stride.Rendering.Materials.IComputeColor' に加えて、強度には @'Stride.Rendering.Materials.IComputeScalar' を使用し、float4 ではなく float を返します。また、2 つ目のテクスチャー座標のアニメーションのために、別の @'Stride.Particles.Materials.UVBuilder' を追加します。
<!--
In addition to the already existing @'Stride.Rendering.Materials.IComputeColor', we'll use @'Stride.Rendering.Materials.IComputeScalar' for intensity, which returns a float, rather than a float4. We will also add another  @'Stride.Particles.Materials.UVBuilder' for a second texture coordinates animation.
-->

  ```cs
    var shaderBaseColor = ComputeColor.GenerateShaderSource(shaderGeneratorContext, new MaterialComputeColorKeys(ParticleCustomShaderKeys.EmissiveMap, ParticleCustomShaderKeys.EmissiveValue, Color.White));
    shaderGeneratorContext.Parameters.Set(ParticleCustomShaderKeys.BaseColor, shaderBaseColor);

    var shaderBaseScalar = ComputeScalar.GenerateShaderSource(shaderGeneratorContext, new MaterialComputeColorKeys(ParticleCustomShaderKeys.IntensityMap, ParticleCustomShaderKeys.IntensityValue, Color.White));
    shaderGeneratorContext.Parameters.Set(ParticleCustomShaderKeys.BaseIntensity, shaderBaseScalar);
```

2 つのシェーダーをロードします。1 つはメインカラー用、もう 1 つは強度用です。これらのシェーダーは、前の 2 つの例で手動で作成したものと似ていますが、プロパティグリッドで編集できる `ComputeColor` および `ComputeScalar` プロパティから直接その場で生成しています。生成されたコードは、`Compute()` を呼び出して、色またはスカラーの計算ツリーの最終結果を返すという点で、先に書いたシェーダーのコードと似ています。
<!--
We load the two shaders: one for the main color and one for the intensity. These are similar to the shaders we wrote manually in the last two examples, except we generate them on the fly directly from the `ComputeColor` and `ComputeScalar` properties, which you can edit in the Property Grid. The generated code is similar to the shader code we wrote in the way that it calls `Compute()` and it returns the final result of our color or scalar compute tree.
-->

シェーダーコードを生成したら、それを必要な各キーに設定します。`ParticleCustomShaderKeys.cs` で、`ParticleCustomShaderKeys.BaseColor` がどのように定義されているかを確認します。エフェクトファイルでは、このキーが設定されているかどうかをチェックし、設定されていれば、シェーダーコードで定義されているストリームに渡します。
<!--
After we generate the shader code, we set it to the respective key we need. Check how `ParticleCustomShaderKeys.BaseColor` is defined in `ParticleCustomShaderKeys.cs`. In the effect file we check if this key is set, and if yes, we pass it to the stream defined in our shader code.
-->

## 関連項目
<!--
## See also
-->

* [チュートリアル: 軌跡の作成](create-a-trail.md)
* [チュートリアル: カスタム パーティクル](custom-particles.md)
* [チュートリアル: 継承](inheritance.md)
* [チュートリアル: レーザーと稲光](lasers-and-lightning.md)
* [パーティクル](../index.md)
* [パーティクルの作成](../create-particles.md)

<!--
* [Tutorial: Create a trail](create-a-trail.md)
* [Tutorial: Custom particles](custom-particles.md)
* [Tutorial: Inheritance](inheritance.md)
* [Tutorial: Lasers and lightning](lasers-and-lightning.md)
* [Particles](../index.md)
* [Create particles](../create-particles.md)
-->
