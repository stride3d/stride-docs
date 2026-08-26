# What are shaders?

Many people think of shaders as custom-made effects that can be applied to materials or used for other visuals. In reality, shaders can be used to do much more (e.g. world generation), however their most common use-case is in fact graphics-related.

## The fundamental idea

A **shader** is just a piece of code, similarly to a standard C# script. Unlike a script, shaders are **executed on the graphics card**, not the processor.

## Difference between GPU and CPU processing

A **CPU** is very **good at processing instructions**, but it can only do **one of them at a time**. Originally, this was fine for games and applications with simple graphics, but in order to support higher fidelity on higher framerates, there had to be a revolution.

The revolution came in the form of the **graphics card**. Compared to a CPU, it was **slower** at processing and it had **less built-in instructions**, but it had one big advantage: **it could do thousands of operations at the same time**.

You might be able to see why this is useful in graphics. Instead of going one-by-one over every single pixel in a texture, a shader running on the graphics card can process all of them at once.

## When to use shaders

As mentioned previously, most of the time shaders are used for graphics (e.g. post-processing effects or animated textures). However, you can also utilize them for other tasks that require processing of large amounts of data (e.g. world generation).

In Stride...
