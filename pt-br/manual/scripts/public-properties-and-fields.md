# Propriedades e campos públicos

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Quando você declara uma propriedade pública ou campo em um script, a propriedade fica acessível no Game Studio a partir das propriedades do componente de script.

![Propriedade no Game Studio](media/property-shown-in-game-studio.png)

Você pode anexar o mesmo script a várias entidades e definir diferentes valores de propriedade em cada entidade.

> [!Note]
> Propriedades e campos devem ser [serializable](serialization.md) para ser usado no Game Studio.

## Adicionar uma propriedade pública ou campo

Este script tem uma propriedade pública (`DelayTimeOut`):

```cs
classe pública SampleSyncScript : StartupScript
(
	// Este membro público aparecerá no Game Studio
	flutuador público DelayTime Fora
}
```

Game Studio mostra a propriedade `DelayTimeOut` nas propriedades do componente de script:

![ Propriedade pública aparece na propriedade Grid](media/scripts-in-stride-change-value-public-property.png)

> [!Note]
> Como regra geral, se você quiser exibir a propriedade ou campo no Game Studio, os getters e os setters devem fazer o mínimo possível. Por exemplo, eles não devem tentar chamar métodos ou acessar a API de tempo de execução Stride.

> Por exemplo, o seguinte código criará problemas, uma vez que tenta acessar `Entity.Components`, que só está disponível em tempo de execução:

> ```cs
> classe pública SampleSyncScript : StartupScript
> (
> 	atraso de flutuação privado Tempo Fora;
> 	// Este membro público aparecerá no Game Studio
> 	flutuador público DelayTime Fora
> 	(
> 		get { delay retorno Tempo Fora
> 		conjunto
> 		( 
> 			tempo de atraso Fora = valor;
> 			Entity.Components.Add(new SkyboxComponent());
> 		}
> 	}
> }
> ```
> Se você quiser incluir código como este em uma propriedade ou campo, escondê-lo para Game Studio não exibi-lo (veja abaixo).

## Ocultar propriedades ou campos na Grade de Propriedades

Se você não quiser que o Game Studio mostre uma propriedade na Property Grid, você pode:

* declarar seu membro interno ou privado, ou
* use o atributo [DataMemberIgnore](xref:Stride.Core.DataMemberIgnoreAttribute) como este:

```cs

	// Esta propriedade pública não está disponível no Game Studio
	[DataMemberIgnore]
	flutuador público DelayTime Fora
	
```

Game Studio não mostra mais a propriedade:

![ Propriedade pública foi escondida com ```[DataMemberIgnore]```](media/scripts-in-stride-public-property-with-datamemberignore.png)

## Adicionando descrições de propriedades

Quando você adicionar um bloco de comentários `<userdoc>` acima de sua propriedade pública em código, Game Studio irá exibi-lo no campo de descrição.

```cs
	///<summary>
	/// Este resumo não aparecerá no Game Studio
	///</summary>
	///<userdoc>
	/// Esta descrição irá aparecer no Game Studio
	///</userdoc>
	flutuador público DelayTime Fora

```

Habilite a geração de arquivos de documentação:
```xml
  <PropertyGroup>
    <TargetFrameworks>net6.0</TargetFrameworks>
    <DocumentationFile>bin\$(Configuration)\$(TargetFramework)\$(AssemblyName).xml</DocumentationFile>
  </PropertyGroup>
```

> [!NOTE]
> Game Studio só vai olhar em seu diretório de saída de compilação para cada conjunto. Recomenda-se usar o caminho acima.

Na próxima recarga, o Game Studio deve exibir a documentação:

![A descrição agora mostra no Property Grid](media/userdoc-example.png)

## [MembroRequiredAttribute](xref:Stride.Core.Annotations.MemberRequiredAttribute)
Este atributo é usado para especificar se um campo ou propriedade não deve ser deixado nulo no editor.
Se nenhum valor for definido para este membro, um aviso ou erro será registrado ao construir seu jogo.
```cs
[Stride.Core.Annotations.MemberRequired(MemberRequiredReportType.Error)] Característica pública Componente MyCharacter;
```

#### [Processamento de Dados](xref:Stride.Core.Annotations.DataMemberRangeAttribute)
#### [InlinePropertyAttribute](xref:Stride.Core.Annotations.InlinePropertyAttribute)
#### [ItemCanBeNullAtributo](xref:Stride.Core.Annotations.ItemCanBeNullAttribute)
#### [ItemNotNullAttribuído](xref:Stride.Core.Annotations.ItemNotNullAttribute)
#### [Colecção de Membros](xref:Stride.Core.Annotations.MemberCollectionAttribute)
#### [DataStyleAttribuí](xref:Stride.Core.DataStyleAttribute)
#### [Exibir atributo](xref:Stride.Core.DisplayAttribute)

## Ver também

* [Serialização](serialization.md)
* [Tipos de script](types-of-script.md)
* [Criar um script](create-a-script.md)
* [Use um script](use-a-script.md)
* [Programação e prioridades](scheduling-and-priorities.md)
* [Eventos](events.md)
* [Depuração](debugging.md)
* [Variáveis de pré-processamento](preprocessor-variables.md)