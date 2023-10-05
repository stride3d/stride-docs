# Serialization

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

The editor and serialization system uses three attributes to determine what is serialized and visible in the editor.

### [DataContractAttribute](xref:Stride.Core.DataContractAttribute)
Adding this attribute to your `class` or `struct` notifies the serializer and the editor that it should
show fields and properties of that type, and serialize the data it contains with the scenes or assets that might include it.
```cs
[DataContract(Inherited = true)]
public class MySerializedClass
{
    public float MyValue;
}

// 'DataContract' is inherited above. You don't need to specify it for a derived class.
public class MyDerivedSerializedClass : MySerializedClass
{
    public string MyName;
}
```

> [!Note]
> Your IDE may wrongfully add `System.Runtime.Serialization` to your list of `using` when adding `DataContract`.
> They are not interchangeable.
> Make sure that your `DataContract` comes from `Stride.Core`, specifying the namespace explicitly like shown above if necessary.

### [DataMemberAttribute](xref:Stride.Core.DataMemberAttribute)
This notifies the editor and serializer that the property or field on this [DataContract](#datacontractattribute)'ed
`class` or `struct` should be serialized.
Note that you can omit this attribute for most public fields and properties, they will be included by default,
see [Fields](#fields) and [Properties](#properties) for specifics.
```cs
[Stride.Core.DataContract]
public class MySerializedClass
{
    [Stride.Core.DataMember]
    internal float MyValue;
    
    
    [DataMember("Item1")]
    public string ItemRenamed1 { get; set; }
}
```

### [DataAliasAttribute](xref:Stride.Core.DataAliasAttribute)
Can be used to ensure you do not break previously serialized data whenever you have to change how that member is named in your source.
```cs
[Stride.Core.DataAlias("PreviousNameOfProp")]
public string MyRenamedProp { get; set; }
```

### [DataMemberIgnoreAttribute](xref:Stride.Core.DataMemberIgnoreAttribute)
This notifies the editor and serializer that the property or field on this [DataContract](#datacontractattribute)'ed
`class` or `struct` should ***NOT*** be serialized.
```cs
[Stride.Core.DataContract]
public class MySerializedClass
{
    [Stride.Core.DataMemberIgnore]
    public float MyValue { get; set; } // This public property will NOT show up in the editor
}
```

#### TODO
- [DataMemberCustomSerializerAttribute](xref:Stride.Core.DataMemberCustomSerializerAttribute)
- [DataMemberUpdatableAttribute](xref:Stride.Updater.DataMemberUpdatableAttribute)

## Rule of Thumb
Serialization and the editor's access and view of your properties mirrors how access modifiers work in C#;

Think of the serializer/editor as being a class external to your codebase, if you want the serializer to
read and write your properties you have to ensure that the access modifiers for its getter and setter
allows the serializer to access them.

If you're hiding that property behind an `internal` access modifier, you have to annotate it with
the attribute to ensure it is visible to the serializer.


## Fields

```cs
// Read and set in the editor by default
public object obj;

// Read and set in editor with attribute
[DataMember] public internal object obj;

// Read only ... readonly are read only.
public readonly object obj;
[DataMember] internal readonly object obj;

// Never
private protected/private/protected object obj;
```


## Properties

```cs
// Read and set in the editor ...

// By default
public object obj { get; set; }
public object obj { get => x; set => x = value; }

// Forced with the attribute for 'internal' modifiers
[DataMember] public object obj { internal get; public/internal set; }
[DataMember] public object obj { internal get => x; public/internal set => x; }

// Read only
public object obj { get; }

// Read only for any non-public access modifier
public object obj { get; internal/private protected/private/protected set; }
public object obj { get => x; internal/private protected/private/protected set => x = value; }

// Read only for internal properties must be enforced through the attribute
[DataMember] internal object obj { get; }
[DataMember] internal object obj { get => x; }

// Read only, special case for get-only public properties without backing field, 
//They must use the attribute to be deserialized, see the comment below
[DataMember] public object obj { get => x; }

// Read only for access modifiers more restrictive than internal, even with the attribute
[DataMember] public object obj { internal get; private protected/private/protected set; }
[DataMember] public object obj { internal get => x; private protected/private/protected set => x; }

// Never
private protected/private/protected object obj { get; set; }
private protected/private/protected object obj { get => x; set => x; }
```

> [!Note]
> Get-only public properties without backing field (`public object obj { get => x; }`) are not serialized by default as
> they are, more often than not, shortcuts to values of another object or used purely as a function.
> It might make more sense to change it to `{ get; } = new MyObject();` or `{ get; init; }` if you want to serialize it,
> and if that doesn't work for you, feel free to add the attribute to enforce serialization.

### What about [init](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/init) ?
The `init` access modifier is seen as a `public set` by the editor and serialization, it will be settable in the editor.


## See also

* [Public properties and fields](public-properties-and-fields.md)
