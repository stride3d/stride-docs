# Effects (.sdfx)

Many shaders are **variations or combinations of pre-existing shaders**. For example, some meshes cast shadows, others receive them, and others need skinning. To reuse code, it's a good idea to select which parts to use through conditions (e.g. if skinning is required). In most engines, this is solved by "uber shaders": monolithic shaders configured by a set of preprocessor parameters.

Stride however uses the approach of **effects**, that keep extensibility and reusability in mind. The simple code blocks defined by shader classes can be mixed together based on logic defined in a `.sdfx` file.
