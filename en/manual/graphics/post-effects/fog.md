# Bloom

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>

The **fog** effect applies an exponential layer of colored fog throughout the scene based on depth.

![media/fog-effect-1.png](media/fog-effect-1.png) 

Fog is applied after anti-aliasing.

## Properties

![media/fog-effect-2.png](media/fog-effect-2.png) 

| Property       | Description 
| -------------- | ---- 
| Density        | Density of the fog. This affects the opacity as it relates to fog depth.       
| Color          | The color of the fog.
| Fog Start      | Distance (scene depth) from the camera, where the fog should start.
| Skip Background| Whether the fog should take into consideration the background image.

## See also

* [Anti-aliasing](anti-aliasing.md)
* [Fog](fog.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)