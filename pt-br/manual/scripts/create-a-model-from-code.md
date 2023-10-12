# Criar um modelo de código

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Você pode criar modelos em scripts no runtime. Você pode fazer isso de várias maneiras diferentes, incluindo:

* criar um modelo de um ativo

* criando um modelo processual usando primitivas geométricas incorporadas (por exemplo, uma esfera ou cubo)

* instanciando um prefab que contenha um modelo (veja [Use prefabs](../game-studio/prefabs/use-prefabs.md))

## Criar um modelo de um ativo

1. Crie um novo e vazio script síncrono. Para instruções completas, consulte [Criar um script](../scripts/create-a-script.md).

   ![Criar um script](media/create-a-script-script-asset-selection.png)

2. No script, carregar o modelo usando sua URL de ativos. Por exemplo:

   ```cs
   // Criar uma nova entidade e adicioná-la à cena.
   	var entity = new Entity();
   	SceneSystem.SceneInstance.RootScene.Entities.Add (entidade);
   
   // Adicione um modelo incluído nos arquivos do jogo.
   	var modelComponent = entity.GetOrCreate<ModelComponent>();
   	modelComponent. Modelo = Content.Load<Model>("MyFolder/MyModel");
   ```

   > [!Tip]
   > Para encontrar a URL de ativos do modelo, no **Asset View**, mova o mouse sobre o modelo.
   > ![ (Get asset URL](media/get-asset-url.png)

3. Adicione o script como um componente **script** a qualquer entidade na cena. Não importa qual entidade você usa. Para instruções, veja [Use um script](use-a-script.md).

   ![ Adicionar componente de script para entidade](media/create-model-from-code-add-script-component.png)

4. No **Asset View**, clique com o botão direito do mouse no modelo que você deseja criar no tempo de execução e selecione **Incluir na compilação como root asset**.

   ![Incluir em compilação como root asset](media/create-model-from-code-include-in-build-as-root-asset.png)

   Isso garante que o ativo esteja disponível para o script usar em tempo de execução. Para obter mais informações, consulte [Gerenciar ativos](../game-studio/manage-assets.md).

## Criar um modelo processual

1. Crie um novo e vazio script síncrono. Para instruções completas, consulte [Criar um script](create-a-script.md).

   ![ Adicionar novo script](media/create-model-from-code-add-new-script.gif)

2. Adicione o script como um componente **script** a qualquer entidade na cena. Não importa qual entidade você usa. Para instruções, veja [Use um script](use-a-script.md).

   ![ Adicionar componente de script para entidade](media/create-model-from-code-add-script-component.png)

3. No seu script, posicione uma entidade vazia e um modelo vazio. Por exemplo:

   ```cs
   // Criar uma entidade e adicioná-la à cena.
   var entity = new Entity();
   SceneSystem.SceneInstance.RootScene.Entities.Add (entidade);
   
   // Criar um modelo e atribuí-lo ao componente do modelo.
   modelo var = novo Modelo();
   entity.GetOrCreate<ModelComponent>(). Modelo = modelo;  
   ```

4. Em seu script, crie um modelo processual usando primitivas geométricas incorporadas (por exemplo, uma esfera ou cubo). Por exemplo:

   ```cs
   // Adicione uma ou mais malhas usando primitivas geométricas (por exemplo, esferas ou cubos).
   var meshDraw = GeometricPrimitive.Sphere.New (GraphicsDevice).ToMeshDraw();
   
   var mesh = new Mesh { Draw = meshDraw }; 
   modelo. Meshes.Add(mesh);
   ```

   > [!Note]
   > Para usar o código acima, certifique-se de adicionar `usando Stride. Extensões` para o topo do seu script.

   Alternativamente, crie uma malha usando seu próprio vértice e buffers de índice. Por exemplo:

   ```cs
   // Criar uma malha usando seu próprio vértice e buffers de índice.
   
   mesh = novo Mesh { Draw = novo MeshDraw { /* Tampão de vértice e configuração de tampão de índice */ } };
   modelo. Meshes.Add(mesh);
   ```

5. Aqui está um exemplo mais completo que desenha um triângulo personalizado..

   ```cs
   vértices var = novo VertexPositionTexture[3];
   vértices[0].Posição = novo Vector3(0f,0f,1f);            
   vértices[1].Posição = novo Vector3(0f,1f,0f);
   vértices[2].Posição = novo Vector3(0f,1f,1f);
   var vertexBuffer = Stride.Graphics.Buffer.Vertex.New (GraphicsDevice, vértices,
                                                        GraphicsResourceUsage.Dynamic);
   índices = { 0, 2, 1 };
   var indexBuffer = Stride.Graphics.Buffer.Index.New (GraphicsDevice, índices);
   
   vara personalizada Malha = novo Stride. Renderização. Malha de malha
   ( 
       Desenho = novo Stride.Rendering.MeshDraw
       ( 
           /* Tampão de vértice e configuração de tampão de índice */ 
           PrimitiveType = Stride.Graphics.PrimitiveType.TriangleList,
           DrawCount = indícios. Comprimento,
           IndexBuffer = novo IndexBufferBinding(indexBuffer, true, indices.Length),
           VertexBuffers = novo[] { novo VertexBufferBinding (vertexBuffer, 
                                     VertexPositionTexture.Layout, vertexBuffer.ElementCount) },
       }
   };            
   // adicionar a malha ao modelo
   model.Meshes.Add (personalizado Malha);
   ```


> [!Note]
> Para obter mais informações sobre como configurar os amortecedores de vértice e índice, consulte os vértices [Drawing](../graphics/low-level-api/draw-vertices.md).

Finalmente, você precisa dar o modelo um ou mais materiais. Há duas formas de fazer isto.

### Opção 1: carregar um material no código

1. No seu código, carregar um ou mais materiais e adicioná-los ao modelo. Como os modelos podem usar vários materiais (um para cada malha no modelo), use [Mesh.MaterialIndex](xref:Stride.Rendering.Mesh.MaterialIndex) para especificar quais materiais na lista são usados para que malha.

   Por exemplo:

   ```cs
   // Adicione um ou mais materiais. Como os modelos podem esperar vários materiais (um por malha), Mesh.MaterialIndex especifica qual material na lista é usado para que malha.
   
   Material material = Conteúdo.Load<Material>("MyFolder/MyMaterial");
   modelo. Material.Adicionar (material);
   ```

2. No **Asset View**, clique com o botão direito de cada ativo de material que o seu script usa e selecione `Incluir na compilação como root asset`.

   ![Incluir em compilação como root asset](media/create-model-from-code-include-material-in-build-as-root-asset.png)

   Isso garante que o ativo esteja disponível para o script usar em tempo de execução. Para obter mais informações, consulte [Gerenciar ativos](../game-studio/manage-assets.md).

### Opção 2: Criar novos materiais em código

Por exemplo:

```cs
    // Criar um material (por exemplo, com cor difusa vermelha).
    material de vareta Descrição: new MaterialDescriptor
    (
        Atributos =
	    (
	        DiffuseModel = novo MaterialDiffuseLambertModelFeature(),
	        Diffuse = novo MaterialDiffuseMapFeature (novo ComputeColor { Chave = MaterialKeys.DiffuseValue })
	    }
    };
    var material = Material.Novo (GráficoDispositivo, materialDescrição);
    material. Parâmetros[0]. Conjunto (MaterialKeys.DiffuseValue, Color.Red);
    modelo. Material.Add(0, material);
```

## Ver também

* [Criar um script](create-a-script.md)
* [Use um script](use-a-script.md)
* [Use prefabs](../game-studio/prefabs/use-prefabs.md)
