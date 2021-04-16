# Light streaks

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>

Similar to the [bloom effect](bloom.md), the **light streak** effect uses the result of the [bright filter](bright-filter.md) to make the bright areas bleed along a direction. It creates star-pattern beams from the light point.

![media/light-streaks-1.png](media/light-streaks-1.png) 

## Properties

![media/light-streaks-2.png](media/light-streaks-2.png) 

| Property                  | Description   
| ------------------------- | ---------------- 
| Amount                    | Strength of the light streak
| Streak Count              | Number of beams emitted by a bright point. The more streaks, the higher the performance cost.
| Attenuation               | How fast the light attenuates along a streak (0 for immediate attenuation, 1 for no attenuation)  
| Phase                     | Phase (angle) of the star-like pattern
| Color Aberration Strength | Strength of the color aberration along the streaks. <br>![media/light-streaks-3.png](media/light-streaks-3.png) <br>Notice the streaks involve multiple colors (yellow, purple, green, pink).                                        
| Is Anamorphic             | Simulates the behavior of anamorphic lenses, widely used in Hollywood productions. <br>![media/light-streaks-4.png](media/light-streaks-4.png) <br> The effect above is achieved by using two light streaks with a phase of 0, enabling anamorphic mode, and slightly distorting the bright pass result horizontally.                                                                         

## See also

* [Anti-aliasing](anti-aliasing.md)
* [Outline](outline.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bloom](bloom.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
