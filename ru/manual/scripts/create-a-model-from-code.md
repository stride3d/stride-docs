# Create a model from code
# Создаем модель из кода

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

You can create models in scripts at runtime. You can do this in several different ways, including:
Вы можете создавать модели в сценариях во время выполнения.  Вы можете сделать это несколькими различными способами, в том числе:

* creating a model from an asset
* создание модели из ассета

* creating a procedural model using built-in geometric primitives (eg a sphere or cube)
* создание процедурной модели с использованием встроенных геометрических примитивов (например, сферы или куба)

* instantiating a prefab that contains a model (see [Use prefabs](../game-studio/prefabs/use-prefabs.md))
* создание префаба, содержащего модель (см. [Использование префабов](../game-studio/prefabs/use-prefabs.md))

## Create a model from an asset
## Создать модель из ассета

1. Create a new, empty synchronous script. For full instructions, see [Create a script](../scripts/create-a-script.md).
1. Создайте новый пустой синхронный сценарий.  Подробные инструкции см. в разделе [Создать скрипт](../scripts/create-a-script.md).

    ![Create a script](media/create-a-script-script-asset-selection.png)
![Создать скрипт](media/create-a-script-script-asset-selection.png)

2. In the script, load the model using its asset URL. For example:
2. В сценарии загрузите модель, используя URL-адрес ее актива.  Например:

    ```cs
```CS
    // Create a new entity and add it to the scene.
// Создаем новый объект и добавляем его на сцену.
	var entity = new Entity();
переменная сущность = новая сущность();
	SceneSystem.SceneInstance.RootScene.Entities.Add(entity);
SceneSystem.SceneInstance.RootScene.Entities.Add(entity);

    // Add a model included in the game files.
// Добавляем модель, включенную в файлы игры.
	var modelComponent = entity.GetOrCreate<ModelComponent>();
var modelComponent = entity.GetOrCreate<ModelComponent>();
	modelComponent.Model = Content.Load<Model>("MyFolder/MyModel");
modelComponent.Model = Content.Load<Model>(
    ```
```

    >[!Tip]
>[!Подсказка]
    >To find the model's asset URL, in the **Asset View**, move the mouse over the model.
>Чтобы найти URL-адрес актива модели, в **Представлении активов** наведите указатель мыши на модель.
    >![(Get asset URL](media/get-asset-url.png)
>![(Получить URL ресурса](media/get-asset-url.png)

3. Add the script as a **script component** to any entity in the scene. It doesn't matter which entity you use. For instructions, see [Use a script](use-a-script.md).
3. Добавьте сценарий как **компонент сценария** к любому объекту в сцене.  Неважно, какую сущность вы используете.  Инструкции см. в разделе [Использовать скрипт](use-a-script.md).

    ![Add script component to entity](media/create-model-from-code-add-script-component.png)
![Добавить компонент скрипта в сущность](media/create-model-from-code-add-script-component.png)

4. In the **Asset View**, right-click the model you want to create at runtime and select **Include in build as root asset**.
4. В **Представлении активов** щелкните правой кнопкой мыши модель, которую вы хотите создать во время выполнения, и выберите **Включить в сборку как корневой актив**.

    ![Include in build as root asset](media/create-model-from-code-include-in-build-as-root-asset.png)
![Включить в сборку как корневой ресурс](media/create-model-from-code-include-in-build-as-root-asset.png)

    This makes sure the asset is available for the script to use at runtime. For more information, see [Manage assets](../game-studio/manage-assets.md).
Это гарантирует, что ресурс будет доступен сценарию для использования во время выполнения.  Для получения дополнительной информации см. [Управление активами](../game-studio/manage-assets.md).

## Create a procedural model
## Создать процедурную модель

1. Create a new, empty synchronous script. For full instructions, see [Create a script](create-a-script.md).
1. Создайте новый пустой синхронный сценарий.  Подробные инструкции см. в разделе [Создать скрипт](create-a-script.md).

    ![Add new script](media/create-model-from-code-add-new-script.gif)
![Добавить новый скрипт](media/create-model-from-code-add-new-script.gif)

2. Add the script as a **script component** to any entity in the scene. It doesn't matter which entity you use. For instructions, see [Use a script](use-a-script.md).
2. Добавьте скрипт как **компонент скрипта** к любому объекту в сцене.  Неважно, какую сущность вы используете.  Инструкции см. в разделе [Использовать скрипт](use-a-script.md).

    ![Add script component to entity](media/create-model-from-code-add-script-component.png)
![Добавить компонент скрипта в сущность](media/create-model-from-code-add-script-component.png)

3. In your script, instantiate an empty entity and an empty model. For example:
3. В своем сценарии создайте пустой объект и пустую модель.  Например:

    ```cs
```CS
    // Create an entity and add it to the scene.
// Создаем объект и добавляем его на сцену.
    var entity = new Entity();
переменная сущность = новая сущность();
    SceneSystem.SceneInstance.RootScene.Entities.Add(entity);
SceneSystem.SceneInstance.RootScene.Entities.Add(entity);
    
    // Create a model and assign it to the model component.
// Создаем модель и назначаем ее компоненту модели.
    var model = new Model();
переменная модель = новая модель();
    entity.GetOrCreate<ModelComponent>().Model = model;  
entity.GetOrCreate<ModelComponent>().Model = model;
    ```
```

4. In your script, create a procedural model using built-in geometric primitives (eg a sphere or cube). For example:
4. В вашем скрипте создайте процедурную модель, используя встроенные геометрические примитивы (например, сферу или куб).  Например:

    ```cs
```CS
    // Add one or more meshes using geometric primitives (eg spheres or cubes).
// Добавьте одну или несколько сеток, используя геометрические примитивы (например, сферы или кубы).
    var meshDraw = GeometricPrimitive.Sphere.New(GraphicsDevice).ToMeshDraw();
var meshDraw = GeometricPrimitive.Sphere.New(GraphicsDevice).ToMeshDraw();

    var mesh = new Mesh { Draw = meshDraw }; 
var mesh = new Mesh { Draw = meshDraw };
    model.Meshes.Add(mesh);
модель.Meshes.Добавить(сетка);
    ```
```

    >[!Note]
>[!Примечание]
    >To use the code above, make sure you add `using Stride.Extensions` to the top of your script.
>Чтобы использовать приведенный выше код, убедитесь, что вы добавили `using Stride.Extensions` в начало вашего скрипта.

    Alternatively, create a mesh using your own vertex and index buffers. For example:
В качестве альтернативы создайте сетку, используя свои собственные буферы вершин и индексов.  Например:

    ```cs
```CS
    // Create a mesh using your own vertex and index buffers.
// Создайте сетку, используя собственные буферы вершин и индексов.

    mesh = new Mesh { Draw = new MeshDraw { /* Vertex buffer and index buffer setup */ } };
mesh = new Mesh { Draw = new MeshDraw { /* Настройка буфера вершин и буфера индексов */ } };
    model.Meshes.Add(mesh);
модель.Meshes.Добавить(сетка);
    ```
```

5. Here is a more complete example that draws a custom triangle..
5. Вот более полный пример, который рисует пользовательский треугольник.

    ```cs
```CS
    var vertices = new VertexPositionTexture[3];
var vertices = new VertexPositionTexture[3];
    vertices[0].Position = new Vector3(0f,0f,1f);            
вершины [0].Position = новый Vector3 (0f, 0f, 1f);
    vertices[1].Position = new Vector3(0f,1f,0f);
вершины [1].Position = новый Vector3 (0f, 1f, 0f);
    vertices[2].Position = new Vector3(0f,1f,1f);
vertices[2].Position = новый Vector3(0f,1f,1f);
    var vertexBuffer = Stride.Graphics.Buffer.Vertex.New(GraphicsDevice, vertices,
var vertexBuffer = Stride.Graphics.Buffer.Vertex.New(GraphicsDevice, вершины,
                                                         GraphicsResourceUsage.Dynamic);
Использование GraphicsResourceUsage.Динамический);
    int[] indices = { 0, 2, 1 };
int[] индексы = {0, 2, 1};
    var indexBuffer = Stride.Graphics.Buffer.Index.New(GraphicsDevice, indices);
var indexBuffer = Stride.Graphics.Buffer.Index.New(GraphicsDevice, индексы);

    var customMesh = new Stride.Rendering.Mesh
var customMesh = новый Stride.Rendering.Mesh
    { 
{
        Draw = new Stride.Rendering.MeshDraw
Draw = новый Stride.Rendering.MeshDraw
        { 
{
            /* Vertex buffer and index buffer setup */ 
/* Настройка буфера вершин и буфера индексов */
            PrimitiveType = Stride.Graphics.PrimitiveType.TriangleList,
PrimitiveType = Stride.Graphics.PrimitiveType.TriangleList,
            DrawCount = indicies.Length,
DrawCount = индексы.Длина,
            IndexBuffer = new IndexBufferBinding(indexBuffer, true, indices.Length),
IndexBuffer = новый IndexBufferBinding (indexBuffer, true, index.Length),
            VertexBuffers = new[] { new VertexBufferBinding(vertexBuffer, 
VertexBuffers = new[] { new VertexBufferBinding(vertexBuffer,
                                      VertexPositionTexture.Layout, vertexBuffer.ElementCount) },
VertexPositionTexture.Layout, vertexBuffer.ElementCount) },
        }
}
    };            
};
    // add the mesh to the model
// добавляем сетку в модель
    model.Meshes.Add(customMesh);
модель.Meshes.Add(customMesh);
    ```
```


>[!Note]
>[!Примечание]
>For more information about how to set up vertex and index buffers, see [Drawing vertices](../graphics/low-level-api/draw-vertices.md).
>Для получения дополнительной информации о том, как настроить буферы вершин и индексов, см. [Отрисовка вершин](../graphics/low-level-api/draw-vertices.md).

Finally, you need to give the model one or more materials. There are two ways to do this.
Наконец, вам нужно дать модели один или несколько материалов.  Есть два способа сделать это.

### Option 1: load a material in code
### Вариант 1: загрузить материал в код

1. In your code, load one or more materials and add them to the model. Because models can use multiple materials (one for each mesh in the model), use [Mesh.MaterialIndex](xref:Stride.Rendering.Mesh.MaterialIndex) to specify which materials in the list are used for which mesh.
1. В коде загрузите один или несколько материалов и добавьте их в модель.  Поскольку модели могут использовать несколько материалов (по одному для каждой сетки в модели), используйте [Mesh.MaterialIndex](xref:Stride.Rendering.Mesh.MaterialIndex), чтобы указать, какие материалы в списке используются для какой сетки.

    For example:
Например:

    ```cs
```CS
    // Add one or more materials. Because models might expect multiple materials (one per mesh), Mesh.MaterialIndex specifies which material in the list is used for which mesh.
// Добавляем один или несколько материалов.  Поскольку модели могут ожидать несколько материалов (по одному на сетку), Mesh.MaterialIndex указывает, какой материал в списке используется для какой сетки.

    Material material = Content.Load<Material>("MyFolder/MyMaterial");
Material material = Content.Load<Material>(
    model.Materials.Add(material);
модель.Материалы.Добавить(материал);
    ```
```

2. In the **Asset View**, right-click every material asset your script uses and select `Include in build as root asset`.
2. В **Asset View** щелкните правой кнопкой мыши каждый материальный актив, используемый вашим скриптом, и выберите «Включить в сборку как корневой актив».

    ![Include in build as root asset](media/create-model-from-code-include-material-in-build-as-root-asset.png)
![Включить в сборку как корневой ресурс](media/create-model-from-code-include-material-in-build-as-root-asset.png)

    This makes sure the asset is available for the script to use at runtime. For more information, see [Manage assets](../game-studio/manage-assets.md).
Это гарантирует, что ресурс будет доступен сценарию для использования во время выполнения.  Для получения дополнительной информации см. [Управление активами](../game-studio/manage-assets.md).

### Option 2: Create new materials in code
### Вариант 2: Создайте новые материалы в коде

For example:
Например:

```cs
```CS
    // Create a material (eg with red diffuse color).
// Создаем материал (например, с красным диффузным цветом).
    var materialDescription = new MaterialDescriptor
var materialDescription = новый дескриптор материала
    {
{
        Attributes =
Атрибуты =
	    {
{
	        DiffuseModel = new MaterialDiffuseLambertModelFeature(),
DiffuseModel = новый MaterialDiffuseLambertModelFeature(),
	        Diffuse = new MaterialDiffuseMapFeature(new ComputeColor { Key = MaterialKeys.DiffuseValue })
Diffuse = new MaterialDiffuseMapFeature (new ComputeColor {Key = MaterialKeys.DiffuseValue})
	    }
}
    };
};
    var material = Material.New(GraphicsDevice, materialDescription);
var material = Material.New (GraphicsDevice, materialDescription);
    material.Parameters[0].Set(MaterialKeys.DiffuseValue, Color.Red);
material.Parameters[0].Set(MaterialKeys.DiffuseValue, Color.Red);
    model.Materials.Add(0, material);
модель.Материалы.Добавить(0, материал);
```
```

## See also
## Смотрите также

* [Create a script](create-a-script.md)
* [Создать скрипт](create-a-script.md)
* [Use a script](use-a-script.md)
* [Использовать скрипт](use-a-script.md)
* [Use prefabs](../game-studio/prefabs/use-prefabs.md)
* [Использовать префабы](../game-studio/prefabs/use-prefabs.md)
