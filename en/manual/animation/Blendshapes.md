# Blendshape

The Blendshapes, also known as Morphtargets or Shape Keys, is a commonly used technique to deform mesh through displacing some its vertices from their original positions to create an alternate desired target Shape. The displacement of vertices, that is how far vertices are displaced from their original positions, is contolled by shape weights. 

In Stride 3D the shape weights are floating point range from 0 to 1. The weight value equal to 0 implies Blendshape will have no impact, whereas weight value being 1 implies blendshape will have full impact displacing the vertex to maximum. A mesh can have one or multiple blendshapes, weight of each Blendshape at any time dicates impacts of that Blendshape at that point. The weights can be updated every frame to create what's called Blendshape animations.

The highly used use-case for Blendshapes is to represent facial features. As an example, a mesh representing a face can have three Blendshape 
 called Smile, Wink and Bump on the forehead. Where each Belndshape are essentially alternate version of original mesh where set of vertices are slightly displaced to create the look Blendshape intends to. The Blendshape ForeheadBump will be original facemash but but few vertex around forehead area extending to give an impression of a bump. In game you can control the degree of impact of three blend shape any time to create whole range variety of look by setting all possible combinations of weights, or create animation changing values to weight every frame update.

The common workflow to work with Blendshapes is Blendshapes are first create in 3D modeling tool like Blender or Maya and imported in Stride3D. Once imported blendshape weights can be set to specific value or updated each frame to create Blendshape animation.

Here is a simple example of using Blendshape to turn a plain metal ball into a weapon and back and forth. 