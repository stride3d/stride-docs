# Effect language
# Язык эффектов

## Create shaders in C&#35;
## Создание шейдеров на C#

You can create a shader at runtime with @'Stride.Shaders.ShaderSource' objects. Shaders come in three types:
Вы можете создать шейдер во время выполнения с объектами @'Stride.Shaders.ShaderSource'.  Шейдеры бывают трех типов:

- @'Stride.Shaders.ShaderClassSource' correspond to a unique shader class
- @'Stride.Shaders.ShaderClassSource' соответствует уникальному классу шейдера
- @'Stride.Shaders.ShaderMixinSource' mix several @'Stride.Shaders.ShaderSource', set preprocessor values, define compositions
- @'Stride.Shaders.ShaderMixinSource' смешивает несколько @'Stride.Shaders.ShaderSource', устанавливает значения препроцессора, определяет композиции
- @'Stride.Shaders.ShaderArraySource' are used for arrays of compositions
- @'Stride.Shaders.ShaderArraySource' используются для массивов композиций

This method produces shaders at runtime. However, many platforms don't support HLSL and have no ability to compile shaders at runtime. Additionally, the approach doesn't benefit from the reusability of mixins.
Этот метод создает шейдеры во время выполнения.  Однако многие платформы не поддерживают HLSL и не имеют возможности компилировать шейдеры во время выполнения.  Кроме того, этот подход не выигрывает от повторного использования примесей.

## Stride Effects (SDFX)
## Эффекты шага (SDFX)

Many shaders are variations or combinations of pre-existing shaders. For example, some meshes cast shadows, others receive them, and others need skinning. To reuse code, it's a good idea to select which parts to use through conditions (eg "Skinning required"). This is often solved by "uber shaders": monolithic shaders configured by a set of preprocessor parameters.
Многие шейдеры являются вариациями или комбинациями уже существующих шейдеров.  Например, одни меши отбрасывают тени, другие их принимают, а для третьих требуется скиннинг.  Чтобы повторно использовать код, рекомендуется выбрать, какие части использовать с помощью условий (например, «Требуется скин»).  Это часто решается с помощью «убер-шейдеров»: монолитных шейдеров, настроенных набором параметров препроцессора.

Stride offers the same kind of control, keeping extensibility and reusability in mind. The simple code blocks defined by shader classes can be mixed together by a shader mixer. This process can use more complex logic, described in Stride Effect (*.sdfx) files.
Stride предлагает такой же контроль, но с учетом расширяемости и возможности повторного использования.  Простые блоки кода, определенные классами шейдеров, можно смешивать вместе с помощью микшера шейдеров.  Этот процесс может использовать более сложную логику, описанную в файлах Stride Effect (*.sdfx).

### General syntax
### Общий синтаксис

An .sdfx file is a small program used to generate shader permutations. It takes a set of parameters (key and value in a collection) and produces a `ShaderMixinSource` ready to be compiled.
Файл .sdfx — это небольшая программа, используемая для создания перестановок шейдеров.  Он принимает набор параметров (ключ и значение в коллекции) и создает `ShaderMixinSource`, готовый к компиляции.

An example .sdfx file:
Пример файла .sdfx:

```cs
```CS
using Stride.Effects.Data;
использование Stride.Effects.Data;

namespace StrideEffects
пространство имен StrideEffects
{
{
	params MyParameters
параметры Мои параметры
	{
{
		bool EnableSpecular = true;
логическое значение EnableSpecular = true;
	};
};
	
	effect BasicEffect
эффект
	{
{
		using params MaterialParameters;
использование параметров MaterialParameters;
		using params MyParameters;
используя параметры MyParameters;

		mixin ShaderBase;
примесь ShaderBase;
		mixin TransformationWAndVP;
миксин TransformationWAndVP;
		mixin NormalVSStream;
миксин NormalVSStream;
		mixin PositionVSStream;
миксин PositionVSStream;
		mixin BRDFDiffuseBase;
примесь BRDFDiffuseBase;
		mixin BRDFSpecularBase;
миксин BRDFSpecularBase;
		mixin LightMultiDirectionalShadingPerPixel<2>;
миксин LightMultiDirectionalShadingPerPixel<2>;
		mixin TransparentShading;
миксин TransparentShading;
		mixin DiscardTransparent;
миксин DiscardTransparent;

		if (MaterialParameters.AlbedoDiffuse != null)
если (MaterialParameters.AlbedoDiffuse != null)
		{
{
			mixin compose DiffuseColor = ComputeBRDFDiffuseLambert;
примесь составляет DiffuseColor = ComputeBRDFDiffuseLambert;
			mixin compose albedoDiffuse = MaterialParameters.AlbedoDiffuse;
albedoDiffuse = MaterialParameters.AlbedoDiffuse;
		}
}

		if (MaterialParameters.AlbedoSpecular != null)
если (MaterialParameters.AlbedoSpecular != null)
		{
{
			mixin compose SpecularColor = ComputeBRDFColorSpecularBlinnPhong;
миксин compose SpecularColor = ComputeBRDFColorSpecularBlinnPhong;
			mixin compose albedoSpecular = MaterialParameters.AlbedoSpecular;
albedoSpecular = MaterialParameters.AlbedoSpecular;
		}
}
	};
};
}
}
```
```

### Add a mixin
### Добавить миксин

To add a mixin, use `mixin <mixin_name>`.
Чтобы добавить миксин, используйте `mixin <mixin_name>`.

### Use parameters
### Использовать параметры

The syntax is similar to C#. The following rules are added:
Синтаксис похож на C#.  Добавлены следующие правила:

- When you use parameter keys, add them using `params <shader_name>`. If you don't, keys are treated as variables.
- Когда вы используете ключи параметров, добавляйте их с помощью `params <shader_name>`.  Если вы этого не сделаете, ключи рассматриваются как переменные.

- You don't need to tell the program where to check the values behind the keys. Just use the key.
- Вам не нужно указывать программе, где проверять значения за клавишами.  Просто используйте ключ.

```cs
```CS
using params MaterialParameters;
использование параметров MaterialParameters;
 
if (MaterialParameters.AlbedoDiffuse != null)
если (MaterialParameters.AlbedoDiffuse != null)
{
{
	mixin MaterialParameters.AlbedoDiffuse;
миксин MaterialParameters.AlbedoDiffuse;
}
}
```
```

The parameters behave like any variable. You can read and write their value, compare their values, and set template parameters. Since some parameters store mixins, they can be used for composition and inheritance, too.
Параметры ведут себя как любая переменная.  Вы можете читать и записывать их значения, сравнивать их значения и задавать параметры шаблона.  Поскольку некоторые параметры хранят примеси, их также можно использовать для композиции и наследования.

### Custom parameters
### Пользовательские параметры

You can create your own set of parameters using a structure definition syntax. 
Вы можете создать свой собственный набор параметров, используя синтаксис определения структуры.

>[!Note]
>[!Примечание]
>Even if they're defined in the XKFX file, don't forget the `using` statement when you want to use them.
>Даже если они определены в файле XKFX, не забывайте об операторе `using`, когда хотите их использовать.

```cs
```CS
params MyParameters
параметры Мои параметры
{
{
	bool EnableSpecular = true; // true is the default value
логическое значение EnableSpecular = true;  // true — значение по умолчанию
}
}
```
```

### Compositions
### Композиции

To add a composition, assign the composition variable to your mixin with the syntax below.
Чтобы добавить композицию, назначьте переменную композиции вашему миксину, используя приведенный ниже синтаксис.

```cs
```CS
// albedoSpecular is the name of the composition variable in the mixin
// albedoSpecular — это имя переменной композиции в миксине
mixin compose albedoSpecular = ComputeColorTexture;
albedoSpecular = ComputeColorTexture;
 
or
или же
 
mixin compose albedoSpecular = MaterialParameters.AlbedoSpecular;
albedoSpecular = MaterialParameters.AlbedoSpecular;
```
```

### Partial effects
### Частичные эффекты

You can also break the code into sub-mixins to reuse elsewhere with the syntax below.
Вы также можете разбить код на суб-миксины для повторного использования в другом месте с помощью приведенного ниже синтаксиса.

```cs
```CS
partial effect MyPartialEffect
частичный эффект MyPartialEffect
{
{
	mixin ComputeColorMultiply;
миксин ComputeColorMultiply;
	mixin compose color1 = ComputeColorStream;
смесь для составления color1 = ComputeColorStream;
	mixin compose color2 = ComputeColorFixed;
смешивание в композиции color2 = ComputeColorFixed;
}
}
 
// to use it
// использовать его
mixin MyPartialEffect;
миксин MyPartialEffect;
mixin compose myComposition = MyPartialEffect;
миксин составить myComposition = MyPartialEffect;
```
```

You can use the `MyPartialEffect` mixin like any other mixin in the code.
Вы можете использовать миксин `MyPartialEffect`, как и любой другой миксин в коде.

## See also
## Смотрите также

* [Shading language](shading-language/index.md)
* [Язык затенения](shading-language/index.md)
