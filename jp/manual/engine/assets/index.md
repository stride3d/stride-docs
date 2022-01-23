# アセット マネージャー
<!--
# Asset manager
-->

>[!Warning]
>このセクションの内容はもう古いので、参考程度に使ってください。
<!--
>[!Warning]
>This section is out of date. For now, you should only use it for reference.
-->

# アセット
<!--
# Assets
-->

Game Studio でアセットを作成する場合、@'Stride.Core.Serialization.Assets.AssetManager' がアセットのロード、アンロード、保存を担当するクラスになります。
<!--
After creating your assets in Game Studio, @'Stride.Core.Serialization.Assets.AssetManager' is the class responsible for loading, unloading and saving assets.
-->

## 作成
<!--
## Creating
-->

通常は、Game Studio で直接アセットを作成します。
<!--
You usually create assets directly in Game Studio.
-->

その URL は、Game Studio における名前（フォルダを含む）と一致します。
<!--
Their URL will match the name (including folder) in Game Studio.
-->

URL の例：

- knight （メインアセットフォルダーに knight.fbx を直接インポートした場合）
- level1/room1 （level1 を作成し、その中に room1.fbx をインポートした場合）

詳細については、[アセット](../../game-studio/assets.md)を参照してください。

<!--
Examples of URLs:

- knight (user imports knight.fbx directly in main asset folder)
- level1/room1 (user creates level1 and import room1.fbx inside)

For more information, see [Assets](../../game-studio/assets.md) for more details.
-->

## ロード
<!--
## Loading
-->

アセットのロードは、@'Stride.Core.Serialization.Assets.AssetManager' クラスを使って行います。
<!--
Loading an asset should be done with the help of @'Stride.Core.Serialization.Assets.AssetManager' class:
-->

```cs
// ファイルからアセットを直接ロード
var texture = Content.Load<Texture>("texture1");

// シーンアセットをロード
var scene = Content.Load<Scene>("scenes/scene1");
 
// エンティティアセットをロード
var entity = Content.Load<Entity>("entity1");
```

<!--
```cs
// Load an asset directly from a file:
var texture = Content.Load<Texture>("texture1");

// Load a Scene asset
var scene = Content.Load<Scene>("scenes/scene1");
 
// Load an Entity asset
var entity = Content.Load<Entity>("entity1");
```
-->

すでにロードされているアセットを再びロードすると、アセットの参照カウンターがインクリメントされるだけで、アセットの再ロード自体は行われないことに注意してください。
<!--
Note that loading an asset that has already been loaded only increment the reference counter and do not reload the asset.
-->

## アンロード
<!--
## Unloading
-->

アセットのアンロードも @'Stride.Core.Serialization.Assets.AssetManager' クラスを使って行います。
<!--
Unloading is also done using the AssetManager class:
-->

```cs
 Asset.Unload(asset);
```

## アセットの生存期間
<!--
## Asset life time
-->

アセットのロードとアンロードはペアで使用します。それぞれの 'load' 呼び出しに対して、対応する 'unload' の呼び出しが必要です。
<!--
Asset load and unload are working in pairs. For each call to 'load', a corresponding call to 'unload' is expected. 
-->

アセットが実際にロードされるのは、最初の 'load' 呼び出しが行われたときだけです。それ以降のすべての呼び出しでは、アセットの参照カウンターのインクリメントしか行われません。
<!--
An asset is actually loaded only during the first call to 'load'. All subsequent calls only result to an asset reference increment.
-->

アセットが実際にアンロードされるのは、unload の呼び出し回数と load の呼び出し回数が一致したときだけです。
<!--
An asset is actually unload only when the number of call to unload match the number of call the load.
-->

@'Stride.Core.Serialization.Assets.AssetManager.Get' メソッドはロードされたアセットへの参照を返しますが、アセットの参照カウンターはインクリメントされません。
<!--
The @'Stride.Core.Serialization.Assets.AssetManager.Get' method returns the reference to a loaded asset but does not increment the asset reference counter.
-->

```cs
 var firstReference = Content.Load<Texture>("MyTexture"); // アセットをロードし、参照カウンターを増やす（参照カウント = 1）
 
// ここでテクスチャを使用できます
 
var secondReference = Content.Load<Texture>("MyTexture"); // 参照カウンターの増加のみ行われます（参照カウント = 2）
 
// まだここでテクスチャを使用できます
 
Asset.Unload(firstReference); // 参照カウンターを減少します（参照カウント = 1）
 
// まだここでテクスチャを使用できます
 
Asset.Get<Texture>("MyTexture"); // ロード済みのアセットを取得しても、参照カウンターは増加しません（参照カウント = 1）
 
// まだここでテクスチャを使用できます

Asset.Unload(secondReference); // 参照カウンターを減少し、アセットをアンロードします（参照カウント = 0）

// テクスチャがアンロードされたため、これ以上使用することはできません
```

<!--
```cs
 var firstReference = Content.Load<Texture>("MyTexture"); // load the asset and increase the reference counter (ref count = 1)
 
// the texture can be used here
 
var secondReference = Content.Load<Texture>("MyTexture"); // only increase the reference counter (ref count = 2)
 
// the texture can still be used here
 
Asset.Unload(firstReference); // decrease the reference counter (ref count = 1)
 
// the texture can still be used here
 
Asset.Get<Texture>("MyTexture"); // return the loaded asset without increasing the reference counter (ref count = 1)
 
// the texture can still be used here
Asset.Unload(secondReference); // decrease the reference counter and unload the asset (ref count = 0)
 
// The texture has been unloaded, it cannot be used here any more.
```
-->
