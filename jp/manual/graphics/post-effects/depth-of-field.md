# Depth of field

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>

By default, rendering produces a very sharp image, which can look artificial. **Depth of field** effects simulate the behavior of a real camera lens focusing an object, leaving background and foreground objects out of focus.

![media/realworld_dof_agave_flowers.jpg](media/realworld_dof_agave_flowers.jpg) 

To create the effect, Stride creates several versions of the original image with different intensities of blur, and interpolates between them. The more layers used, the better the quality, but at performance cost.

## Properties

![media/depth-of-field-2.png](media/depth-of-field-2.png)

| Property   | Description     
| ---------- | -------- 
| Size       | Size of the [bokeh (Wikipedia)](https://en.wikipedia.org/wiki/Bokeh), expressed as a factor of the image width so it's resolution-independent. The bigger the size, the worse the performance                                              
| DOF Areas  | Areas of the depth of field. There are three main zones defined by their distance from the camera: near out-of-focus area (from X to Y), in-focus area (from Y to Z), and far out-of-focus area (from Z to W) 
| Technique  | The technique affects both the performance and the shape of the bokeh.  <p><br>**Circular Gaussian** is fast but unrealistic. <p><br>![media/depth-of-field-3.png](media/depth-of-field-3.png) <p><br>**Hexagonal Triple Rhombi** is heavier than Gaussian. <p><br>![media/depth-of-field-4.png](media/depth-of-field-4.png) <p><br>**Hexagonal McIntosh** is the heaviest. <p><br>![media/depth-of-field-5.png](media/depth-of-field-5.png)   
| Auto Focus | Automatically updates the DOF areas so the camera focuses on the object at the center of the screen

## See also

* [Anti-aliasing](anti-aliasing.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bloom](bloom.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)