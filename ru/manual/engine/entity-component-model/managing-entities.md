# Manage entities
# Управление сущностями

<div class="doc-incomplete"/>
<div class=

## Overview
## Обзор

User usually want to manipulate Component contained in a specific entity, while engine wants to access component by types (i.e. all Mesh Component while drawing, all animation components while updating animations, etc...):
Пользователь обычно хочет манипулировать компонентом, содержащимся в определенном объекте, в то время как движок хочет получить доступ к компоненту по типам (т. е. ко всем компонентам сетки при рисовании, ко всем компонентам анимации при обновлении анимации и т. д.):




![media/7438984.png](media/7438984.png) 
![медиа/7438984.png](медиа/7438984.png)




User will add component-based entities into an entity manager.
Пользователь будет добавлять сущности на основе компонентов в диспетчер сущностей.

Engine or user registers entity processors that can process specific entities and/or components.
Механизм или пользователь регистрирует процессоры сущностей, которые могут обрабатывать определенные сущности и/или компоненты.

## Entity Processor
## Сущностный процессор

To solve this problem, the concept of Entity Processor has been added. An Entity Processor will access Entities that matches specific requirements (i.e. process all entities with MeshComponent) and process all of them in a single update function. This allows for greater efficiency and cache-friendliness, as there is no need to check every entity/components many times per frame.
Для решения этой проблемы была добавлена ​​концепция Entity Processor.  Процессор сущностей будет получать доступ к сущностям, которые соответствуют определенным требованиям (т. е. обрабатывать все сущности с помощью MeshComponent), и обрабатывать их все в одной функции обновления.  Это обеспечивает большую эффективность и удобство кэширования, поскольку нет необходимости многократно проверять каждый объект/компонент в каждом кадре.

This approach also solves many update order dependencies issues (just need to order the entity processors updates properly).
Этот подход также решает многие проблемы с зависимостями порядка обновления (просто нужно правильно упорядочить обновления процессоров сущностей).

Here is some examples of entity processors:
Вот несколько примеров обработчиков сущностей:

- @'Stride.Engine.TransformationProcessor': Compute transformation matrices from hierarchy and local transformation stored in @'Stride.Engine.TransformationComponent'.
- @'Stride.Engine.TransformationProcessor': вычисление матриц преобразования из иерархии и локального преобразования, хранящихся в @'Stride.Engine.TransformationComponent'.
  
  As a result, @'Stride.Engine.EntityManager' can be used as a hierarchical scenegraph instead of a simple entity list.
В результате @'Stride.Engine.EntityManager' можно использовать как иерархический граф сцены вместо простого списка сущностей.
- @'Stride.Engine.MeshProcessor': Add @'Stride.Engine.ModelComponent.Model' to rendering.
- @'Stride.Engine.MeshProcessor': добавьте @'Stride.Engine.ModelComponent.Model' в рендеринг.
- @'Stride.Engine.LightProcessor': Collects and update lights, and transfer it to rendering system. It can hides implementation details (deferred or forward rendering, etc...)
- @'Stride.Engine.LightProcessor': собирает и обновляет источники света и передает их в систему рендеринга.  Он может скрывать детали реализации (отложенный или упреждающий рендеринг и т. д.).

## Entity System
## Система сущностей

Entity are grouped together in an @'Stride.Engine.EntityManager'. It will also contains the list of entity processors. When an entity is added or an entity components changes, it will ask entity processors if they should be included.
Объекты сгруппированы вместе в @'Stride.Engine.EntityManager'.  Он также будет содержать список обработчиков сущностей.  Когда объект добавляется или компоненты объекта изменяются, он запрашивает процессоры объектов, следует ли их включать.

```cs
```CS
// Add an entity:
// Добавляем объект:
var myEntity = new Entity();
var myEntity = новая сущность();
engine.EntityManager.AddEntity(myEntity);
engine.EntityManager.AddEntity(myEntity);
 
// Iterate through added entities:
// Итерация по добавленным объектам:
foreach (var entity in engine.EntityManager.Entities)
foreach (сущность var в engine.EntityManager.Entities)
{
{
	Console.WriteLine(entity.Name);
Console.WriteLine(entity.Name);
}
}
```
```


@'Stride.Engine.EntityManager' can be used to enumerate its `Entities (ref:{Stride.Engine.Entity})`. Note that children of a given entities will also be in this list.
@'Stride.Engine.EntityManager' можно использовать для перечисления его `Сущностей (ref:{Stride.Engine.Entity})`.  Обратите внимание, что потомки данных сущностей также будут в этом списке.

To manipulate entities as a scenegraph, refer to @'Stride.Engine.TransformationComponent' class.
Чтобы управлять сущностями как графом сцены, обратитесь к классу @'Stride.Engine.TransformationComponent'.

