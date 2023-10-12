# ToneMap

**Tone-mapping** leva um buffer HDR como entrada, e refaz sua cor para um [0, 255] intervalo para que possamos exibi-lo em uma tela.

Há muitas maneiras de colher cores de um espaço HDR para um LDR, dependendo da fórmula que você escolher.

![media/tonemap-1.png](media/tonemap-1.png)

Stride suporta vários operadores de Tom-mapping fora da caixa:

- Reinhard (o operador clássico)
- Exponential
- Logarithmic
- Drago
- Hejl-Dawson
- Mike-Day
- U2-Filmic

## Ver também

* [Grão de filme](film-grain.md)
* [Correção de gama](gamma-correction.md)
* [Vignetação](vignetting.md)