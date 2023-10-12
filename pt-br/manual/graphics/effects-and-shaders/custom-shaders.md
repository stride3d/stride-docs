# Sombreadores personalizados

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

Você pode escrever seus próprios shaders no Visual Studio e usá-los em atributos [material](../materials/material-attributes.md). Por exemplo, você pode escrever um shader para adicionar texturas a materiais baseados nas posições mundiais dos objetos, ou gerar ruído e usá-lo para aleatorizar propriedades materiais.

Como shaders são arquivos de texto, você pode adicionar comentários, ativar e desativar linhas de código e editá-los como qualquer outro arquivo de código. Isso os torna fáceis de manter e iterar.

Você também pode usar shaders personalizados para criar efeitos pós personalizados. Para mais informações, consulte [Custom color transforms](../post-effects/color-transforms/custom-color-transforms.md).

## Criar um shader

1. Certifique-se de ter a extensão [Stride Visual Studio](../../get-started/visual-studio-extension.md) instalada. Isso é necessário para converter os arquivos shader de SDSL ([Stride shading language](index.md)) para `.cs` arquivos.

2. No Game Studio, na barra de ferramentas, clique em ![Open in IDE](../../get-started/media/launch-your-game-ide-icon.png) (**Open in IDE**) para abrir seu projeto no Visual Studio.

3. No Visual Studio **Solution Explorer**, clique com o botão direito do mouse no projeto (por exemplo *MyGame.Game*) e selecione **Add > Novo item**.

   ![ Novo item](media/new-item.png)

4. Selecione **Class**.

   ![Selecionar classe](media/select-class.png)

5. No campo **Name**, especifique um nome com a extensão **.sdsl** (por exemplo *MyShader.sdsl*), e clique em **Add**.

   ![Selecionar classe](media/rename-file.png)

   A extensão do Stride Visual Studio gera automaticamente um arquivo `.cs` do arquivo `.sdsl`. O Solution Explorer lista-o como uma criança do arquivo `.sdsl`.

   ![ Meu shader](media/my-shader.png)

6. Abra o arquivo `.sdsl`, remova as linhas existentes e escreva o seu shader.

   Shaders são escritos em Stride Shading Language (SDSL), que é baseado em HLSL. Para mais informações, consulte [Shading language](index.md).

   Por exemplo, este shader cria uma cor verde (`RGBA 0;1;0;1`):

   ```cs
   namespace MyGame
   (
       shader MyShader: Cor da composição
       (
           override float4 Compute()
           (
               retorno float4(0, 1, 0, 1);
           }
       };
   }
   ```

   > [!Note]
   > Certifique-se de que o nome do shader no arquivo (por exemplo `MyShader` acima) é o mesmo que o nome do arquivo.

   > [!Note]
   > Para ser acessível a partir da Game Studio Property Grid, o shader deve herdar de `ComputeColor`.
   > Como '`ComputeColor` sempre retorna um valor float4, propriedades que tomam valores de flutuador (por exemplo, metalness e mapas de brilho) usam o primeiro componente (o componente vermelho) do valor retornado por `ComputeColor`.

7. Salve todos os arquivos na solução (**File > Save All**).

8. No Game Studio, recarregue os conjuntos.

   ![Reload assemblies](../../particles/tutorials/media/reload-assemblies.png)

   O **Asset View** lista o shader no mesmo diretório que seus scripts (por exemplo **MyGame.Game**).

   ![Shader em Asset View](media/shader-in-asset-view.png)

   > [!Note]
   > Em algumas situações, Game Studio identifica incorretamente o shader como um script, como na captura de tela abaixo:

   > ![Shader como script](media/shader-as-script-in-asset-view.png)

   > Se isso acontecer, reinicie o Game Studio (**File > Recarregar projeto**).

## Use um shader personalizado

Você pode usar shaders personalizados em qualquer atributo [material](../materials/material-attributes.md).

1. No **Asset View**, selecione o material que você deseja usar no shader.

2. No **Property Grid**, ao lado da propriedade que você deseja controlar com o shader, clique em ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Change**) e selecione **.**

   ![Select Shader](media/select-shader.png)

3. No campo, digite o nome do seu shader (por exemplo *MyShader*).

   ![Tope shader](media/type-shader.png)

   A propriedade usa o shader que você especificar.

> [!Tip]
> Quando você faz uma mudança no arquivo `.sdsl` no Visual Studio e salvá-lo, o Game Studio atualiza automaticamente o projeto com suas mudanças. Se isso não acontecer, reinicie o Game Studio (**File > Recarregar projeto**).

> [!Note]
> Se você excluir um shader dos ativos do projeto, para evitar erros, certifique-se que você também removê-lo das propriedades dos materiais que usá-lo.

## Argumentos e parâmetros

### Argumentos de modelo

[ Os argumentos do tempo](shading-language/templates.md) (generics) não mudam em tempo de execução. No entanto, diferentes materiais podem usar diferentes instâncias do shader com diferentes valores.

Quando os shaders são compilados, Stride substitui argumentos de template com o valor que você definiu na Grade de Propriedade.

Por exemplo, o código abaixo define e usa o argumento template `Frequency`:

```cs
shader ComputeColorWave<float Frequência> :<float Frequency> ComputeColor, Texturing
(
    override float4 Compute()
   (           
        retornar sin((Global.Time) * 2 * 3.14 * Frequência);
    }
};
```

![Aplicar argumento](media/template-argument.png)

### Parâmetros

Os parâmetros podem ser alterados em tempo de execução.

Por exemplo, o código abaixo define e usa o parâmetro dinâmico `Frequency`:

```cs
cor de cor computacional Onda: ComputeColor, Texturing
(
	cbuffer PerMaterial
	(
		flutuador de palco Frequência = 1.0f;
	}
	
    override float4 Compute()
    (
        retornar sin(( Global.Time ) * 2 * 3.14 * Frequência);
    }
};
```

Para modificar o valor no tempo de execução, acesse e configure-o na coleção de parâmetros de material. Por exemplo, para mudar o `Frequency`, use:

```cs
myMaterial.Passes[myPassIndex].Parameters.Set(ComputeColorWaveKeys.Frequency, MyFrequency);
```

> [!Note]
> `ComputeColorWaveKeys.Frequency` é gerado pela extensão Stride Visual Studio do arquivo shader.

### Composições

Este [composition](shading-language/composition.md) permite definir o `Frequency` no Game Studio Property Grid:

```cs
cor de cor computacional Onda: ComputeColor, Texturing
(
    composição de cores Frequência;

    override float4 Compute()
    (
        return sin(( Global.Time ) * 2 * 3.14 * Frequency.Compute().r);
    }
};
```

Então você pode definir o valor nas propriedades do material:

![Selecionar shader](media/use-computecolorwave-shader.png)

## Amostra personalizada do shader

Para um exemplo de um shader personalizado, veja o projeto de amostra **custom material shader** incluído no Stride.

![ Projeto de amostra ](media/custom-shader-sample-project.png)

No projeto, o shader **ComputeColorWaveNormal** é usado no mapa de deslocamento **** e **superfície** propriedades materiais.

## Ver também

* [Língua de Shading](shading-language/index.md)
* [Transformações de cor personalizadas](../post-effects/color-transforms/custom-color-transforms.md)
* [Atributos de material](../materials/material-attributes.md)
* [Extensão do Stride Visual Studio](../../get-started/visual-studio-extension.md)
