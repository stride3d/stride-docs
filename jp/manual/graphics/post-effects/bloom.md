# Bloom

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>

The **bloom** effect takes the brightest areas of an image, extends them, and bleeds them into the surrounding areas to simulate bright light overwhelming the camera.

![media/bloom-1.png](media/bloom-1.png) 

It uses the result of the [bright filter](bright-filter.md) effect as input.

## Properties

![media/bloom-2.png](media/bloom-2.png) 

| Property       | Description 
| -------------- | ---- 
| Radius         | Radius of the bloom. Note that high values can affect performance.        
| Amount         | Amount/strength of bloom. 
| Sigma Ratio    | This affects the fall-off of the bloom. It's the [standard deviation](http://en.wikipedia.org/wiki/Standard_deviation) (sigma) used in the [Gaussian blur](http://en.wikipedia.org/wiki/Gaussian_blur) formula when calculating the kernel of the bloom. 
| Distortion     | Stretches the image horizontally or vertically.
| Afterimage     | Simulates [afterimage (Wikipedia)](http://en.wikipedia.org/wiki/Afterimage) — the effect of bright spots "burning" into the  retina the longer you look at them, before fading away.  <p><br>![media/bloom-3.png](media/bloom-3.png)                                                                        
| Fade Out Speed | The factor by which the afterimage (if enabled) decreases at each frame (1 means infinite persistence, while 0 means no persistence at all)
| Sensitivity    | How sensitive the afterimage (if enabled) is to light. The higher this value is, the faster the effect is created when the camera focuses on a light.
| Expanded filtering | Reverses FXAA and bloom, and uses a richer convolution kernel during blurring. This helps reduce temporal shimmering.

## See also

* [Anti-aliasing](anti-aliasing.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)