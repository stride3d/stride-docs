# Serialização

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

O sistema de editor e serialização usa quatro atributos para determinar o que é serializado e visível no editor.

### [Contrato de Dados](xref:Stride.Core.DataContractAttribute)
Adicionando esse atributo ao seu `class` ou `struct` notifica o serializador e o editor que ele deve
mostrar campos e propriedades desse tipo, e serializar os dados que contém com as cenas ou ativos que podem incluí-lo.
```cs
[Stride.Core.DataContract(Inherited = true)]
classe pública MySerializedClass
(
    público flutuar MyValue;
}

// 'DataContract' é herdado acima. Você não precisa especificá-lo para uma classe derivada.
classe pública MyDerivedSerialized Classe : Medida de Medição
(
    public string MyName;
}
```

> [!Note]
> Seu IDE pode incorretamente adicionar `System.Runtime.Serialization` à sua lista de `usando` ao adicionar `DataContract`.
> Não são intercambiáveis.
> Certifique-se de que seu `DataContract` vem de `Stride.Core`, especificando o namespace explicitamente como mostrado acima se necessário.

### [DataMemberAttribu](xref:Stride.Core.DataMemberAttribute)
Isso notifica o editor e serializador que a propriedade ou campo neste [DataContract](#datacontractattribute)'ed
`class` ou `struct` devem ser serializados.
Note que você pode omitir este atributo para a maioria dos campos públicos e propriedades, eles serão incluídos por padrão,
veja [Fields](#fields) e [Properties](#properties) para específicos.
```cs
[Stride.Core.DataContract]
classe pública MySerializedClass
(
    [Stride.Core.DataMember]
    flutuador interno MyValue;
}
```

### [Data de publicação](xref:Stride.Core.DataAliasAttribute)
Pode ser usado para garantir que você não quebrar dados serializados anteriormente sempre que você tiver que mudar como esse membro é nomeado em sua fonte.
```cs
[Stride. Core.DataAlias("PreviousNameOfProp")]
public string MyRenamedProp { get; set; }
```
> [!Note]
> Alias remaps valores apenas enquanto no editor; este asset é específico para o sistema de serialização YAML. Alias será ignorado durante construções e em tempo de execução.

### [Data de publicação](xref:Stride.Core.DataMemberIgnoreAttribute)
Isso notifica o editor e serializador que a propriedade ou campo neste [DataContract](#datacontractattribute)'ed
`class` ou `struct` deve ***NOT*** ser serializado.
```cs
[Stride.Core.DataContract]
classe pública MySerializedClass
(
    [Stride.Core.DataMemberIgnore]
    public float MyValue { get; set; } // Esta propriedade pública não aparecerá no editor
}
```

#### TODO
- [DataMemberCustomSerializerAtribuído](xref:Stride.Core.DataMemberCustomSerializerAttribute)
- [Data de inscrição](xref:Stride.Updater.DataMemberUpdatableAttribute)

## Regra de Tumb
Serialização e acesso e visão do editor de suas propriedades refletem como os modificadores de acesso funcionam em C#;

Pense no serializador/editor como sendo uma classe externa para sua base de código, se você quiser que o serializador
ler e escrever suas propriedades que você tem para garantir que os modificadores de acesso para seu getter e setter
permite ao serializador acessá-los.

Se você está escondendo essa propriedade por trás de um modificador de acesso `internal`, você tem que anotá-la com
o atributo para garantir que é visível para o serializador.


## Campos

```cs
// Ler e definir no editor por padrão
objeto público obj;

// Ler e definir no editor com atributo
[DataMember] objeto interno público obj;

// Leia apenas campos não podem ser modificados para apontar para outro objeto, mas o objeto definido atualmente pode ser modificado
público somente objeto obj;
[DataMember] objeto somente leitura interno obj;

// Nunca
objeto protegido/privado/protegido obj;
```


## Propriedades

```cs
// Ler e definir no editor ...

// Por padrão
objeto público obj { get; set; }
objeto público obj { get => x; set => x = valor; }

// Forçado com o atributo para modificadores internos
[DataMember] objeto público obj { interno get; público/internal set; }
[DataMember] objeto público obj { interno get => x; conjunto público / interno => x; }

// Ler apenas
objeto público obj { get; }

// Leia apenas para qualquer modificador de acesso não público
objeto público obj { get; internal/private protected/private/protected set; }
objeto público obj { get => x; internal/private protected/private/protected set => x = valor; }

// Leia apenas para propriedades internas devem ser aplicadas através do atributo
[DataMember] objeto interno obj { get; }
[DataMember] objeto interno obj { get => x; }

// Leia apenas, caso especial para obter apenas propriedades públicas sem campo de apoio, 
//Eles devem usar o atributo para ser deserializado, veja o comentário abaixo
[DataMember] objeto público obj { get => x; }

// Leia apenas para modificadores de acesso mais restritiva do que interna, mesmo com o atributo
[DataMember] objeto público obj { interno get; privado protected/private/protected set; }
[DataMember] objeto público obj { interno get => x; conjunto protegido / privado / protegido => x; }

// Nunca
objeto protegido/privado/protegido obj { get; set; }
objeto protegido/privado/protegido obj { get => x; set => x; }
```

> [!Note]
> Propriedades apenas públicas sem campo de apoio (`public object obj { get => x; }`) não são serializadas por padrão como
> são, mais frequentemente do que não, atalhos para valores de outro objeto ou usados puramente como uma função.
> Pode fazer mais sentido mudá-lo para `{ get; } = new MyObject();` or `{ get; init; }` se você quiser serializá-lo,
> e se isso não funcionar para você, sinta-se livre para adicionar o atributo para impor a serialização.

### E [init](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/init)?
O modificador de acesso `init` é visto como um `public set` pelo editor e serialização, ele será definido no editor.


## Ver também

* [Propriedades e campos públicos](public-properties-and-fields.md)
