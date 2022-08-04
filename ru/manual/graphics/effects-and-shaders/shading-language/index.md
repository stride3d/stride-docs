# Shading language
# Язык затенения

Stride provides a superset of the [HLSL Shading language](http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx), bringing advanced and higher level language constructions, with:
Stride предоставляет расширенный набор [языка шейдеров HLSL] (http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx), обеспечивая продвинутый и более высокий уровень  языковые конструкции с:

- **extensibility** to allow shaders to be extended easily using object-oriented programming concepts such as classes, inheritance, and composition
- **расширяемость**, позволяющая легко расширять шейдеры с помощью таких концепций объектно-ориентированного программирования, как классы, наследование и композиция.
- **modularity** to provide a set modular shaders each focusing on a single rendering technique, more easily manageable
- **модульность** для предоставления набора модульных шейдеров, каждый из которых фокусируется на одной технике рендеринга, более легко управляемой
- **reusability** to maximize code reuse between shaders
- **повторное использование** для максимального повторного использования кода между шейдерами.

Stride Shading Language (SDSL) is automatically transformed to an existing shading language (HLSL, GLSL, GLSL ES).
Язык затенения Stride (SDSL) автоматически преобразуется в существующий язык затенения (HLSL, GLSL, GLSL ES).

## In this section
## В этой секции

- [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
- [Шейдерные классы, примеси и наследование](shader-classes-mixins-and-inheritance.md)
- [Composition](composition.md)
- [Композиция](composition.md)
- [Templates](templates.md)
- [Шаблоны](templates.md)
- [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
- [Автоматическое управление вводом/выводом шейдерной стадии](automatic-shader-stage-input-output.md)
