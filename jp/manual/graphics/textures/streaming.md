# ストリーミング
<!--
# Streaming
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

テクスチャーを**ストリーム化**すると、Stride は必要なときだけテクスチャーをロードするようになります。これにより、ゲームやシーンの読込みにかかる時間が大幅に短縮され、メモリの使用量も少なくなり、ゲームのスケールアップが簡単になります。
<!--
When you **stream** textures, Stride only loads them when they're needed. This significantly decreases the time it takes to load a game or scene, uses less memory, and makes your game easier to scale.
-->

>[!Note]
>今のところ、テクスチャーでのみストリーム化が可能です。

<!--
>[!Note]
>Currently, only textures can be streamed.
-->

## Stride でのテクスチャーのストリーミング方法
<!--
## How Stride streams textures
-->

シーンを読み込む際にテクスチャーを（そのすべてのミップマップと一緒に）読み込む代わりに、Stride はテクスチャーが使用されたとき（例えばそのテクスチャーを使用するモデルが画面上にあるとき）にのみテクスチャーを読込みます。
<!--
Instead of loading a texture when Stride loads the scene (with all its mipmaps), Stride only loads it when it's used (eg a model using the texture is onscreen). 
-->

テクスチャーが不要になる（つまりそのテクスチャーを使用するオブジェクトが画面上にない）と、Stride はそのテクスチャーを解放します。
<!--
When the texture is no longer needed (ie no objects that use the texture are onscreen), Stride unloads it.
-->

今のところ、テクスチャーの読み込みに優先順位はありません。例えば、Stride は距離に応じてテクスチャーを読み込んだりすることはなく、すべてのテクスチャーを順番に読み込みます。
<!--
Currently, there's no loading priority for textures. For example, Stride doesn't load textures based on distance; instead, Stride loads them all in sequence.
-->

### ミップマップでストリーミングを使う
<!--
### Using streaming with mipmaps
-->

[テクスチャーのプロパティ](index.md)でミップマップ（距離に応じて表示される異なる解像度のテクスチャー）が有効になっていると、解像度の低いミップマップの方がサイズが小さいため、先に読み込まれます。下の図は、このプロセスが行われている様子をスローモーションで示しています。
<!--
If mipmaps (different-resolution versions of textures displayed at different distances) are enabled in the [texture properties](index.md), the lower-resolution mipmaps load first, as they're smaller in size. The gif below shows this process happening in slow motion.
-->

![Texture loading](media/loading-texture.gif)

ほとんどの場合、このプロセスは非常に迅速に行われます。ストリーミングでは、ミップマップを有効にすることをお勧めします。ミップマップを有効にすると、高品質バージョンが読み込まれるまでの間、低解像度バージョンのテクスチャーがプレースホルダーとして機能するため、ポップインを減らすことができます。
<!--
In most situations, the process is very quick. We recommend you enable mipmaps for streaming as it means lower-resolution versions of textures act as placeholders until the higher-quality versions can load, reducing pop-in.
-->

## ストリーミングを使わないほうがいい場合
<!--
## When **not** to use streaming
-->

ストリーミングは、既定ではすべてのテクスチャーに対して有効です。しかし、以下のように、常にすぐ高品質で表示させたい重要なテクスチャーについては、ストリーミングを無効にするとよいでしょう。
<!--
Streaming is enabled by default for all textures. You might want to disable streaming on important textures you always want to display immediately and in high quality, such as:
-->

* [スプラッシュ画面](../../game-studio/splash-screen.md)

* プレイヤーのモデルのテクスチャー

* [パーティクル](../../particles/index.md)で使用されるテクスチャー（パーティクルの寿命は短いことが多いので、テクスチャーが読み込まれる前に消えてしまうことがあります）

<!--
* [splash screens](../../game-studio/splash-screen.md)

* textures on player models

* textures used in [particles](../../particles/index.md) (particles often have a short lifespan, so might disappear before the texture loads)
-->

## テクスチャーのストリーミングの有効化または無効化
<!--
## Enable or disable streaming on a texture
-->

1. **アセットビュー**で、テクスチャーを選択します。

    ![Select normal map texture](media/select-texture.png)

2. **プロパティグリッド**で、[**Format**] の下の [**Stream**] をオンにします。

    ![Enable streaming](media/enable-streaming.png)

<!--
1. In the **Asset View**, select the texture.

    ![Select normal map texture](media/select-texture.png)

2. In the **Property Grid**, under **Format**, use the **Stream** check box.

    ![Enable streaming](media/enable-streaming.png)
-->

## グローバル ストリーミング設定
<!--
## Global streaming settings
-->

グローバルストリーミング設定には、ゲーム設定アセットからアクセスできます。これらの設定は、ストリーミングを有効にしているすべてのテクスチャーに適用されます。
<!--
You can access the global streaming settings in the Game Settings asset. These settings apply to all textures that have streaming enabled.
-->

グローバルストリーミング設定へのアクセス方法については、[ゲームの設定](../../game-studio/game-settings.md)を参照してください。
<!--
For instructions about how to access the global streaming settings, see the [Game Settings](../../game-studio/game-settings.md) page.
-->

### プロパティ
<!--
### Properties
-->

![Streaming settings](../../game-studio/media/streaming-settings.png)

| プロパティ            | 説明
|----------------------|------------
| Streaming            | オンにすると、ストリーミングが有効になります。
| Update interval | Stride がストリーミングを更新する頻度。間隔が小さいほどストリーミングシステムの反応は速くなりますが、より多くの CPU を使用し、メモリの変動も大きくなります。
| Max resources per update | ストリーミングの更新ごとにロードまたはアンロードされるテクスチャーの最大数です。数値が大きいほどポップインは減少しますが、フレームレートが低下する可能性があります。
| Resource timeout (ms)| リソースが使われなくなった後、どのくらいの時間ロードされ続けるか（**Memory budget** プロパティの値を超えた場合に）
| Memory budget (in MB) | ストリーミングで使用するメモリがこの値を超えると、Stride は未使用のテクスチャーを解放します。この値を増やすと、メモリに余裕があるときにはより多くのテクスチャーを読み込んでおくことができ、その逆も可能です。

<!--
| Property             | Description
|----------------------|------------
| Streaming            | Enable streaming
| Update interval | How frequently Stride updates the streaming. Smaller intervals mean the streaming system reacts faster, but use more CPU and cause more memory fluctuations.
| Max resources per update | The maximum number of textures loaded or unloaded per streaming update. Higher numbers reduce pop-in but might slow down the framerate.
| Resource timeout (ms)| How long resources stay loaded after they're no longer used (when the **memory budget** is exceeded)
| Memory budget (in MB) | When the memory used by streaming exceeds this budget, Stride unloads unused textures. You can increase this to keep more textures loaded when you have memory to spare, and vice versa.
-->

## コードからストリーミングマネージャーにアクセスする
<!--
## Access the streaming manager in code
-->

@'Stride.Streaming' を使用します。
<!--
Use [Streaming](xref:Stride.Streaming).
-->

例えば、グローバルにストリーミングを無効にする方法は次の通りです。
<!--
For example, to disable streaming globally, use:
-->

```cs
Streaming.EnableStreaming = false;
```

テクスチャーのストリーミングを開始する方法は次の通りです。
<!--
To start streaming a texture:
-->

```cs
Streaming.StreamResources(myTexture);
```

読み込んだ後にストリーミングを無効にする方法は次の通りです。
<!--
To disable streaming at load time:
-->

```cs
var texture = Content.Load<Texture>("myTexture", ContentManagerLoaderSettings.StreamingDisabled);
```

### オプション
<!--
### Options
-->

3 つの @'Stride.Streaming.StreamingOptions' があります。
<!--
There are three [StreamingOptions](xref:Stride.Streaming.StreamingOptions):
-->

* `KeepLoaded` オプションは、メモリバジェットを超えても、テクスチャーをメモリに維持します。

* ミップマップが有効な場合、`ForceHighestQuality` オプションはテクスチャーの最高品質のバージョンのみを読込みます。

* `KeepLoaded` オプションは、テクスチャーが使用されていないときでも、メモリ内にテクスチャーを維持します。

<!--
* The `KeepLoaded` option keeps the texture in memory even when the memory budget is exceeded.

* If mipmaps are enabled, the `ForceHighestQuality` option loads only the highest-quality version of the texture.

* The `KeepLoaded` option keeps the texture in memory even when it's not used.
-->

例：
<!--
For example:
-->

```cs
var myOptions = new StreamingOptions() { KeepLoaded = true };
Streaming.StreamResources(myTexture, myOptions);
```

実行時に `StreamingOptions` を変更するには、`SetResourceStreamingOptions` を使います。例えば、次のようになります。
<!--
To change the `StreamingOptions` at runtime, use `SetResourceStreamingOptions`. For example:
-->

```cs
var myNewOptions = new StreamingOptions() { KeepLoaded = false };
Streaming.SetResourceStreamingOptions(myTexture, myNewOptions);
```

## 関連項目
<!--
## See also
-->

* @'Stride.Streaming.StreamingManager'
* [テクスチャー](index.md)
* [テクスチャーの圧縮](compression.md)
* [ゲームの設定](../../game-studio/game-settings.md)

<!--
* [StreamingManager API](xref:Stride.Streaming.StreamingManager)
* [Textures index](index.md)
* [Texture compression](compression.md)
* [Game Settings](../../game-studio/game-settings.md)
-->
