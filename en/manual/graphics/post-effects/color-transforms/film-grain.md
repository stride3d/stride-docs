# Film grain

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>

The **film grain** adds noise at each frame to simulate the grain of films used in real cameras.

![media/film-grain-1.png](media/film-grain-1.png) 

The pattern is procedurally generated and changes at each frame.

To simulate real film grain, the noise should be more visible in areas of medium light intensity, and less visible in bright or dark areas.

The pattern locally modifies the luminance of the pixels affected.

![media/film-grain-2.png](media/film-grain-2.png) 

## Properties

| Property         | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| Amount           | Amount/strength of the effect                                         
| Grain Size       | Size of the grain                                                     
| Animate          | When enabled, the procedural pattern changes at each frame            
| Luminance Factor | How strongly the original pixel luminance is affected by the grain pattern

## See also

* [Gamma correction](gamma-correction.md)
* [ToneMap](tonemap.md)
* [Vignetting](vignetting.md)