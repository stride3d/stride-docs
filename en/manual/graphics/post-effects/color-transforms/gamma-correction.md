# Gamma correction

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>

All post effect calculations are made in a linear space (ie RGB space). This means doubling the color value of a pixel doubles the light it emits. This guarantees correct lighting calculations.

However, real-world computer monitors don't behave this way: for dark color values they tend to emit much less light than they should. For this reason, after our other post effects have been applied, we apply **gamma correction** to transform our image from a linear space to a sRGB space (or gamma space). 

A buffer in the sRGB space displays correctly on a monitor or a TV screen.

![media/gamma-correction-1.png](media/gamma-correction-1.png) 

Non-gamma-corrected images have dark areas appear darker than they're supposed to.

![media/gamma-correction-2.png](media/gamma-correction-2.png) 

## Properties

| Property | Description                                     |
| -------- | ----------------------------------------------- |
| Value    | Gamma value. A typical value is around 2.2. |

## See also

* [Gamma correction (Wikipedia)](http://en.wikipedia.org/wiki/Gamma_correction)
* [Film grain](film-grain.md)
* [ToneMap](tonemap.md)
* [Vignetting](vignetting.md)
* [Custom color transforms](custom-color-transforms.md)