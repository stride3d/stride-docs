# Material slots
# Слоты материалов

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

Models can use multiple materials. You can set the materials in the model's **material slots**.
Модели могут использовать несколько материалов.  Вы можете установить материалы в **слоты материалов** модели.

![Material slots](media/material-slots.png)
![Слоты материалов](media/material-slots.png)

For example, the second material slot in this model specifies the material for the visor and the shoulder and chest plate stripes. By changing the material in this slot, we change the material used in these parts of the model.
Например, второй слот для материала в этой модели определяет материал для козырька, а также полос на плечах и нагруднике.  Изменяя материал в этом слоте, мы меняем материал, используемый в этих частях модели.

![Materials](media/model-materials-both.png)
![Материалы](media/model-materials-both.png)

The material slots themselves — their number and position — are defined in the model source file (eg  `.fbx`, `.obj`, etc). You can't edit material slots in Game Studio; you can only change which materials are used in each slot.
Сами слоты материалов — их количество и положение — определяются в исходном файле модели (например, `.fbx`, `.obj` и т. д.).  Вы не можете редактировать слоты материалов в Game Studio;  вы можете только изменить, какие материалы используются в каждом слоте.

## Set materials on a model
## Установка материалов на модель

You can change the materials a model uses in two places:
Вы можете изменить материалы, используемые моделью, в двух местах:

* Under the **Materials** properties of the model itself:
* В свойствах **Материалов** самой модели:

    ![Model materials](media/model-materials.png)
![Материалы модели](media/model-materials.png)

    >[!Note]
>[!Примечание]
    >This affects every instance of this model.
> Это влияет на каждый экземпляр этой модели.
 
* In the **model component** of an entity or [prefab](../../game-studio/prefabs/index.md):
* В **компоненте модели** объекта или [префаба](../../game-studio/prefabs/index.md):

    ![Model materials on entity](media/model-materials-in-entity.png)
![Материалы модели на объекте](media/model-materials-in-entity.png)

     This only affects **this** instance or prefab.
Это влияет только на **этот** экземпляр или префаб.

## Meshes and material slots
## Меши и слоты материалов

Models imported from modeling software can contain meshes. Meshes can share materials via material slots.
Модели, импортированные из программного обеспечения для моделирования, могут содержать сетки.  Меши могут делиться материалами через слоты материалов.

![Mesh](media/material-slot-diagram-1.png)
![Сетка](media/material-slot-diagram-1.png)

The association between a mesh and a material slot is defined in the model source file. You can't change these associations in Game Studio, but you can change them in code at runtime.
Связь между сеткой и слотом материала определяется в исходном файле модели.  Вы не можете изменить эти ассоциации в Game Studio, но вы можете изменить их в коде во время выполнения.

To change the association between a mesh and a material, use:
Чтобы изменить связь между сеткой и материалом, используйте:

```cs
```CS
MyModelComponent.Model.Meshes[submeshIndex].MaterialIndex = materialIndex;
MyModelComponent.Model.Meshes[submeshIndex].MaterialIndex = materialIndex;
```
```

To change or add a material to the list of materials:
Чтобы изменить или добавить материал в список материалов:

```cs
```CS
MyModelComponent.Materials[ExistingOrNewMaterialIndex] = myMaterial;
MyModelComponent.Materials[ExistingOrNewMaterialIndex] = myMaterial;
```
```

### Merging meshes
### Объединение мешей

When Stride draws a model with meshes, it performs one GPU draw call for each mesh. By default, to improve performance, at build time, Stride merges meshes that share materials.
Когда Stride рисует модель с сетками, он выполняет один вызов отрисовки GPU для каждой сетки.  По умолчанию для повышения производительности во время сборки Stride объединяет сетки, которые используют общие материалы.

![Mesh](media/material-slot-diagram-2.png)
![Сетка](media/material-slot-diagram-2.png)

In the example above, there are five meshes and five draw calls. After merging, there are three meshes and three draw calls.
В приведенном выше примере есть пять мешей и пять вызовов отрисовки.  После слияния есть три меша и три вызова отрисовки.

>[!Note]
>[!Примечание]
>When Stride merges meshes, it merges the vertex and index buffers. This means you can't draw the meshes separately at runtime, and you can't change the original mesh position (transformation matrix). The meshes become a single mesh with a single material and a single transformation matrix (relative to the model).
>Когда Stride объединяет сетки, он объединяет буферы вершин и индексов.  Это означает, что вы не можете рисовать сетки отдельно во время выполнения, и вы не можете изменить исходное положение сетки (матрицу преобразования).  Сетки становятся единой сеткой с одним материалом и одной матрицей преобразования (относительно модели).

>[!Note]
>[!Примечание]
>When Stride merges meshes, it changes the draw order of elements. In the case of transparent materials, this can produce different results.
> Когда Stride объединяет сетки, он меняет порядок прорисовки элементов.  В случае прозрачных материалов это может привести к другим результатам.

>[!Note]
>[!Примечание]
>When you create a [physics collider from a model](../../physics/collider-shapes.md), Stride builds separate convex hulls for each mesh in the model. If the meshes are merged, only one mesh remains per material, so convex hulls are also built from merged meshes.
>Когда вы создаете [физический коллайдер из модели](../../physics/collider-shapes.md), Stride строит отдельные выпуклые оболочки для каждого меша в модели.  Если сетки объединены, для каждого материала остается только одна сетка, поэтому выпуклые оболочки также строятся из объединенных сеток.

### Disable mesh merging
### Отключить слияние мешей

You might want to disable mesh merging if you want to:
Вы можете отключить слияние сетки, если хотите:

* animate a mesh
* анимировать сетку

* change the material of a mesh at runtime
* изменить материал сетки во время выполнения

To disable mesh merging on a model:
Чтобы отключить слияние сетки в модели:

1. Select the model you want to disable mesh merging for.
1. Выберите модель, для которой вы хотите отключить слияние сетки.

2. In the **Property Grid**, disable **Merge meshes**.
2. В **Сетке свойств** отключите **Объединить сетки**.

    ![Disable merge meshes](media/disable-merge-meshes.png)
![Отключить объединение сеток](media/disable-merge-meshes.png)

#### Disable merging for specific meshes
#### Отключить слияние для определенных мешей

To disable merging only for specific meshes, enable their corresponding **nodes**.
Чтобы отключить слияние только для определенных мешей, включите соответствующие им **узлы**.

1. Select the model that contains the meshes.
1. Выберите модель, содержащую сетки.

2. In the **Property Grid**, under **Skeleton**, make sure the model has a skeleton associated with it.
2. В **Сетке свойств** в разделе **Скелет** убедитесь, что с моделью связан скелет.

    ![Model skeleton](media/model-skeleton.png)
![Скелет модели](media/model-skeleton.png)

    For more information about skeletons, see [Animation](../../animation/index.md).
Для получения дополнительной информации о скелетах см. [Анимация](../../animation/index.md).

3. In the **Asset View**, select the skeleton.
3. В **Asset View** выберите скелет.

    ![Select model skeleton](media/select-model-skeleton.png)
![Выберите скелет модели](media/select-model-skeleton.png)

4. In the **Property Grid**, under **Nodes**, select the nodes that correspond to the meshes you don't want to merge.
4. В **Сетке свойств** в разделе **Узлы** выберите узлы, соответствующие сеткам, которые вы не хотите объединять.

    ![Nodes](media/select-model-skeleton-nodes.png)
![Узлы](media/select-model-skeleton-nodes.png)

    >[!Tip]
>[!Подсказка]
    >To see which nodes correspond to which mesh, open the model source file in a modeling application such as Maya.
>Чтобы увидеть, какие узлы соответствуют какой сетке, откройте исходный файл модели в приложении для моделирования, таком как Maya.

    >[!Note]
>[!Примечание]
    >Make sure you don't disable nodes that are animated at runtime.
> Убедитесь, что вы не отключили узлы, которые анимируются во время выполнения.

## See also
## Смотрите также

* [Material maps](material-maps.md)
* [Материальные карты](material-maps.md)
* [Material attributes](material-attributes.md)
* [Атрибуты материала](material-attributes.md)
* [Material slots](material-slots.md)
* [Слоты материалов](material-slots.md)
