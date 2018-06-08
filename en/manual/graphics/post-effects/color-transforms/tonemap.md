# ToneMap

**Tone-mapping** takes an HDR buffer as input, and remaps its color to a [0, 255] range so we can display it on a screen.

There are many ways to remap colors from an HDR space to an LDR, depending on the formula you choose.

![media/tonemap-1.png](media/tonemap-1.png) 

Xenko supports several tone-mapping operators out of the box:

- Reinhard (the classic operator)
- Exponential
- Logarithmic
- Drago
- Hejl-Dawson
- Mike-Day
- U2-Filmic

## See also

* [Film grain](film-grain.md)
* [Gamma correction](gamma-correction.md)
* [Vignetting](vignetting.md)