# Entity-Component Model
# Объектно-компонентная модель

<div class="doc-incomplete"/>
<div class=

# Overview
# Обзор

@'Stride.Engine.Entity' is the base class for objects that are managed by the high-level engine.
@'Stride.Engine.Entity' — это базовый класс для объектов, которыми управляет механизм высокого уровня.

To improve flexibility, entity are component-based: they can contains as many components as required, containing data and/or logic.
Для повышения гибкости сущности основаны на компонентах: они могут содержать столько компонентов, сколько требуется, содержащих данные и/или логику.




![media/7438980.png](media/7438980.png) 
![медиа/7438980.png](медиа/7438980.png)




A @'Stride.Engine.Entitycomponent' is tied to its entity (that is, one component can't be added to two entities at the same time).
Компонент @'Stride.Engine.Entitycomponent' привязан к своему объекту (то есть один компонент не может быть добавлен к двум объектам одновременно).

# How to create an entity and some components
# Как создать сущность и некоторые компоненты

```cs
```CS
// Create entity
// Создать сущность
var myEntity = new Entity();
var myEntity = новая сущность();
 
// Create a model component (so that model is rendered)
// Создаем компонент модели (чтобы модель отрисовывалась)
var modelComponent = new ModelComponent { Model = model };
var modelComponent = new ModelComponent { Модель = модель };
myEntity.Set(ModelComponent.Key, modelComponent);
myEntity.Set(ModelComponent.Key, modelComponent);

// Set entity position
// Установить позицию объекта
myEntity.Transformation.Translation = new Vector3(100.0f, 100.0f, 0.0f);
myEntity.Transformation.Translation = новый Vector3 (100.0f, 100.0f, 0.0f);
 
// Add entity to scene; from now on its model will be rendered
// Добавляем объект на сцену;  с этого момента его модель будет визуализирована
Entities.Add(myEntity);
Сущности. Добавить (моя Сущность);
```
```


