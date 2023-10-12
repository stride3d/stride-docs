# Transformações de cor personalizadas

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Você pode escrever seus próprios efeitos ** custom color transform**. Por exemplo, você pode criar:

* gotículas de água na câmera
* transições de tela (como fade-ins e fade-outs)
* efeitos simulando dor ou intoxicação (por exemplo, aplicando tints ou outros efeitos)
* contornos de objetos

Para criar uma transformação de cor personalizada, você precisa escrever dois arquivos: um shader de efeito (contendo o próprio efeito), e uma classe C# (para tornar o efeito acessível no Game Studio).

## 1. Criar um shader

1. Certifique-se de ter a extensão [Stride Visual Studio](../../../get-started/visual-studio-extension.md) instalada. Isso é necessário para converter os arquivos shader de SDSL ([Stride shading language](../../effects-and-shaders/shading-language/index.md)) para `.cs` arquivos.

2. No Game Studio, na barra de ferramentas, clique em ![Open in IDE](../../../get-started/media/launch-your-game-ide-icon.png) (**Open in IDE**) para abrir seu projeto no Visual Studio.

3. No Visual Studio **Solution Explorer**, clique com o botão direito do mouse no projeto (por exemplo *MyGame.Game*) e selecione ** Novo item**.

   ![ Novo item](../../effects-and-shaders/media/new-item.png)

4. Selecione **Class**.

   ![Selecionar classe](../../effects-and-shaders/media/select-class.png)

5. No campo **Name**, especifique um nome com a extensão **.sdsl** (por exemplo *MyColorTransformShader.sdsl*), e clique em **Add**.

   ![Criar o efeito pós](media/create-post-effect.png)

   A extensão do Stride Visual Studio gera automaticamente um arquivo `.cs` do arquivo `.sdsl`. O Solution Explorer lista-o como uma criança do arquivo `.sdsl`.

   ![ Meu efeito pós ](media/my-post-effect.png)

6. Abra o arquivo `.sdsl`, remova as linhas existentes e escreva o seu shader.

   Shaders são escritos em Stride Shading Language (SDSL), que é baseado em HLSL. Para mais informações, consulte [Shading language](../../effects-and-shaders/shading-language/index.md).

   Por exemplo, o shader abaixo multiplica a cor da imagem pelo parâmetro `MyColor`:

   ```cs
   máquina de montagem automática Shader.. Máquina de montagem automática
   (
       [Cor]
       float4 MyColor;
   
       override float4 Compute (cor de float4)
       (
           cor de retorno * MyColor;
       }
   };
   ```
   > [!Note]
   > Certifique-se de que o nome do shader no arquivo (por exemplo `MyColorTransformShader` no código acima) é o mesmo que o nome do arquivo (por exemplo *MyColorTransformShader.sdsl*).

## 2. Criar uma classe C#

1. No Visual Studio **Solution Explorer**, clique com o botão direito do mouse no projeto (por exemplo *MyGame.Game*) e selecione **Add > Novo item**.

   ![ Novo item](../../effects-and-shaders/media/new-item.png)

2. Selecione **Class**, especifique um **name** (por exemplo *MyColorTransform.cs*), e clique em **Add**.

   ![ Adicionar script](media/add-script.png)

   Abra o arquivo e escreva a classe.

   Por exemplo, o código abaixo cria a classe `MyColorTransform`, que usa o shader e fornece um valor para a cor `MyColor` (definido no shader).

   ```cs
   usando Stride. Núcleo;
   usando Stride. Core.Matemática;
   usando Stride. Renderização;
   usando Stride. Renderização. Imagens;
   
   namespace MyGame
   (
       [DataContract("MyColorTransform")]
       classe pública MyColorTransform : Transferência de cores
       (
           /// <inheritdoc />
           público MyColorTransform() 
               : base("MyColorTransformShader")
           (
           }
   
           public Color4 MyColor { get; set; }
   
           override público void UpdateParameters(ColorTransformContext)
           (
               Parâmetros.Set (MyColorTransformShaderKeys.MyColor, MyColor);
   
               // Copiar parâmetros para o pai
               base.UpdateParameters(contexto);
           }
       }
   }
   ```
   > [!Note]
   > Certifique-se de que o nome da classe no arquivo (por exemplo `MyColorTransform` na classe acima) é o mesmo que o nome do arquivo (por exemplo *MyColorTransform.cs*).

3. Salve todos os arquivos na solução (**File > Save All**).

4. No Game Studio, recarregue os conjuntos.

   ![Reload assemblies](../../../particles/tutorials/media/reload-assemblies.png)

   O **Asset View** lista o shader de classe e efeito no mesmo diretório que seus scripts (por exemplo **MyGame.Game**).

   ![Shader em Asset View](media/post-effect-shader.png)

   > [!Note]
   > Em algumas situações, Game Studio detecta incorretamente o shader como um script, como na captura de tela abaixo:

   > ![Shader como script](media/broken-script-icon.png)

   > Se isso acontecer, reinicie o Game Studio (**File > Recarregar projeto**).

## 3. Use uma transformação de cor personalizada

1. No **Asset View** (no painel inferior por padrão), clique duas vezes no **Graphics Compositor** ativo.

   ![Gráficos Compositor asset](../../graphics-compositor/media/graphics-compositor-asset.png)

   O editor de compositores **graphics** abre.

   ![Gráfico Compositor editor](../../graphics-compositor/media/graphics-compositor-editor.png)

2. Selecione o **Efeitos de processamento de pó**Nodo>.

3. No **Property Grid**, sob **Color transforma**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Change**) e selecione a sua transformação de cor (por exemplo **MyColorTransform**).

   ![ Adicionar script](media/add-script-in-properties.png)

* Para ativar e desativar o efeito, use a caixa de seleção ao lado do item.

   ![ Habilitar e desativar o efeito pós personalizado](media/enable-disable-custom-post-effect.png)

* Para editar as propriedades públicas especificadas na classe, expanda o item.

   ![Expand item](media/view-custom-post-fx-properties.png)

   Quando você ajusta as propriedades, Game Studio atualiza o efeito automaticamente.

> [!Warning]
> Infelizmente, esta parte do Game Studio tem um problema de vazamento de memória. Cada vez que você muda um valor no compositor gráfico, ele usa 60MB de memória. Para evitar o Game Studio usando muita memória, recomendamos reiniciá-lo depois de alterar uma propriedade algumas vezes. Este é um problema conhecido.

## Ver também

* [Língua de Shading](../../effects-and-shaders/shading-language/index.md)
* [Sombreadores personalizados](../../effects-and-shaders/custom-shaders.md)
* [Compositor gráfico](../../graphics-compositor/index.md)
* [Efeitos postais](../index.md)
* [Transformações de cor](index.md)
* [Extensão do Stride Visual Studio](../../../get-started/visual-studio-extension.md)