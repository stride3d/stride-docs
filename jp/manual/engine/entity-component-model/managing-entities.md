# エンティティの管理
<!--
# Manage entities
-->

<div class="doc-incomplete"/>

## 概要
<!--
## Overview
-->

一般的に、特定のエンティティに含まれるコンポーネントを操作したいユーザーに対して、エンジンは種類別にコンポーネントにアクセスしたいと考えています（描画時にはすべてのメッシュコンポーネント、アニメーションの更新時にはすべてのアニメーションコンポーネント、など）。
<!--
User usually want to manipulate Component contained in a specific entity, while engine wants to access component by types (i.e. all Mesh Component while drawing, all animation components while updating animations, etc...):
-->

![media/7438984.png](media/7438984.png) 

ユーザーは、コンポーネントベースのエンティティをエンティティマネージャに追加します。
<!--
User will add component-based entities into an entity manager.
-->

エンジンまたはユーザーは、特定のエンティティやコンポーネントを処理することができるエンティティプロセッサーを登録します。
<!--
Engine or user registers entity processors that can process specific entities and/or components.
-->

## エンティティ プロセッサー
<!--
## Entity Processor
-->

この問題を解決するために、エンティティプロセッサーというコンセプトが追加されました。
エンティティプロセッサーは、特定の要件（メッシュコンポーネントで処理すべきすべてのエンティティなど）に合致するエンティティにアクセスし、1つの更新関数ですべてのエンティティを処理します。これにより、フレームごとにすべてのエンティティとコンポーネントを何度もチェックする必要がなくなり、効率性とキャッシュの利便性が向上します。
<!--
To solve this problem, the concept of Entity Processor has been added. An Entity Processor will access Entities that matches specific requirements (i.e. process all entities with MeshComponent) and process all of them in a single update function. This allows for greater efficiency and cache-friendliness, as there is no need to check every entity/components many times per frame.
-->

また、このアプローチは、更新順序の依存性に関する多くの問題を解決します（エンティティプロセッサーが適切な順番で更新するよう並べ替える必要があります）。
<!--
This approach also solves many update order dependencies issues (just need to order the entity processors updates properly).
-->

エンティティプロセッサーの例を紹介します。
<!--
Here is some examples of entity processors:
-->

- @'Stride.Engine.TransformationProcessor': 階層と、@'Stride.Engine.TransformationComponent' に格納されているローカル変換から、変換行列を計算します。

  その結果、単純なエンティティリストの代わりに、@'Stride.Engine.EntityManager' を階層化シーングラフとして使用することができます。
- @'Stride.Engine.MeshProcessor': @'Stride.Engine.ModelComponent.Model' をレンダリングに追加します。
- @'Stride.Engine.LightProcessor': ライトを集めて更新し、レンダリングシステムに転送します。実装の詳細（遅延レンダリングやフォワードレンダリングなど）は隠蔽されます。

<!--
- @'Stride.Engine.TransformationProcessor': Compute transformation matrices from hierarchy and local transformation stored in @'Stride.Engine.TransformationComponent'.
  
  As a result, @'Stride.Engine.EntityManager' can be used as a hierarchical scenegraph instead of a simple entity list.
- @'Stride.Engine.MeshProcessor': Add @'Stride.Engine.ModelComponent.Model' to rendering.
- @'Stride.Engine.LightProcessor': Collects and update lights, and transfer it to rendering system. It can hides implementation details (deferred or forward rendering, etc...)
-->

## エンティティ システム
<!--
## Entity System
-->

エンティティは、@'Stride.Engine.EntityManager' にまとめられています。これには、エンティティプロセッサーのリストも含まれます。エンティティが追加されたり、エンティティコンポーネントが変更されたりする際には、エンティティプロセッサーを含めるべきかを問い合わせます。
<!--
Entity are grouped together in an @'Stride.Engine.EntityManager'. It will also contains the list of entity processors. When an entity is added or an entity components changes, it will ask entity processors if they should be included.
-->

```cs
// エンティティを追加
var myEntity = new Entity();
engine.EntityManager.AddEntity(myEntity);
 
// 追加されたエンティティを順番に処理
foreach (var entity in engine.EntityManager.Entities)
{
	Console.WriteLine(entity.Name);
}
```

<!--
```cs
// Add an entity:
var myEntity = new Entity();
engine.EntityManager.AddEntity(myEntity);
 
// Iterate through added entities:
foreach (var entity in engine.EntityManager.Entities)
{
	Console.WriteLine(entity.Name);
}
```
-->

@'Stride.Engine.EntityManager' は、`Entities (ref:{Stride.Engine.Entity})` を列挙するために使うことができます。エンティティの子のエンティティもこのリストに含まれることに注意してください。
<!--
@'Stride.Engine.EntityManager' can be used to enumerate its `Entities (ref:{Stride.Engine.Entity})`. Note that children of a given entities will also be in this list.
-->

エンティティをシーングラフとして操作するには、@'Stride.Engine.TransformationComponent'クラスを使用してください。
<!--
To manipulate entities as a scenegraph, refer to @'Stride.Engine.TransformationComponent' class.
-->
