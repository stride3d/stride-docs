# エンティティ-コンポーネント モデル
<!--
# Entity-Component Model
-->

<div class="doc-incomplete"/>

# 概要
<!--
# Overview
-->

@'Stride.Engine.Entity' は、高レベルエンジンで管理されるオブジェクトの基底クラスです。
<!--
@'Stride.Engine.Entity' is the base class for objects that are managed by the high-level engine.
-->

柔軟性を向上させるために、エンティティはコンポーネントベースで設計されています。エンティティは、データやロジックを持ったコンポーネントを、必要な数だけ持つことができます。
<!--
To improve flexibility, entity are component-based: they can contains as many components as required, containing data and/or logic.
-->

![media/7438980.png](media/7438980.png) 

@'Stride.Engine.Entitycomponent' がエンティティに結び付けられます。（1つのコンポーネントを同時に複数のエンティティに追加することはできません。）
<!--
A @'Stride.Engine.Entitycomponent' is tied to its entity (that is, one component can't be added to two entities at the same time).
-->

# エンティティとコンポーネントの作成方法
<!--
# How to create an entity and some components
-->

```cs
// エンティティを作成
var myEntity = new Entity();
 
// モデルコンポーネントを作成（エンティティがモデルを描画できるように）
var modelComponent = new ModelComponent { Model = model };
myEntity.Set(ModelComponent.Key, modelComponent);

// エンティティの位置を設定
myEntity.Transformation.Translation = new Vector3(100.0f, 100.0f, 0.0f);
 
// エンティティにシーンを追加。以降、そのモデルが描画されます。
Entities.Add(myEntity);
```

<!--
```cs
// Create entity
var myEntity = new Entity();
 
// Create a model component (so that model is rendered)
var modelComponent = new ModelComponent { Model = model };
myEntity.Set(ModelComponent.Key, modelComponent);

// Set entity position
myEntity.Transformation.Translation = new Vector3(100.0f, 100.0f, 0.0f);
 
// Add entity to scene; from now on its model will be rendered
Entities.Add(myEntity);
```
-->
