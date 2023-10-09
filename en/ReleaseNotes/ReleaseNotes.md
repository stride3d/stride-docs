# Stride 4.1 Release Notes

July 16th, 2022

Stride contributors are proud to announce a new release now running on **.NET 6** supporting the latest **C# 10**. That means you can now head to the download page and start developing your games using the latest .NET technologies.

## Improvements Summary

Here's a non-exhaustive list of new improvements:

- .NET 6 support and [VS 2022 plugin](https://github.com/stride3d/stride/pull/1221)
  -  Stride 4.1 leverages the power of .NET 6
  -  Support for C# 10
- [Dithered shadows for semi-transparent materials](https://github.com/stride3d/stride/pull/1256)
- [Physics constraints](https://github.com/stride3d/stride/pull/1114)
    - Bullet constraints wrapped around in easy to use functionality
    - Editor gizmos for physics constraints
- [Physics performance optimization](https://github.com/stride3d/stride/pull/1100)
- [ACES tonemaping](https://github.com/stride3d/stride/pull/1037)
- [Fog image effect](https://github.com/stride3d/stride/pull/1039)
- [Outline image effect](https://github.com/stride3d/stride/pull/1038)
- [Improved editor gizmos](https://github.com/stride3d/stride/pull/1083)
- [C# Intermediate tutorials project](https://github.com/stride3d/stride/pull/1401)
    - This Open Collective sub-project was [successfully funded](https://opencollective.com/stride3d/projects/stride-intermediate-tutorials) by the community.  All related video recordings are available on Stride's [Youtube channel](https://www.youtube.com/c/Stride3D) and the [tutorials page](https://doc.stride3d.net/latest/en/tutorials/index.html) in the documentation will also be update to reflect the new project.
- Many more minor fixes and quality of life improvements
  - [Fixed sample game](https://github.com/stride3d/stride/pull/1217)
  - [Simpler Procedural Model creation](https://github.com/stride3d/stride/pull/1285)
  - New math signatures ([1122](https://github.com/stride3d/stride/pull/1122), [1121](https://github.com/stride3d/stride/pull/1121), [1090](https://github.com/stride3d/stride/pull/1090))
  - Dispatcher/threadpool improvements
  - Ambient Occlusion quality improvement
  - And many other fixes

## Dithered shadows for semi-transparent materials

Produces semi-transparent shadows by poking more and more holes in the shadow map based on the transparency of the object, shadow map filtering will blur those holes with their neighbor which will result in those partially opaque pixels.

![Dithered shadow settings](https://i.imgur.com/xFzuNbl.png)

![Dithered shadow effect comparison](https://i.imgur.com/kHvSy8a.png)


## Physics constraints

Stride's physics system Bullet comes with a set of constraints for you to use in your projects. These constraints are now all visible inside the editor, previewing the constraints using various editor gizmo.

![preview(to be removed)](https://i.imgur.com/qiaBBpm.png)

For more information on all the types of constraints, you can read up about them in the [Stride documentation](https://doc.stride3d.net/latest/en/manual/physics/constraints.html) or watch the video below. 

> [!Video https://www.youtube.com/embed/uMZMYpMD3Wg]

## Physics optimizations

Retrieving collision and contact information was previously done by re-testing all components for collisions, which, as one might expect, led to awful performance for physics heavy scenes (could take up to and above 90% of the frame).

Contacts are now lazily evaluated to reduce overhead when nothing ends up reading them.
Users can now read and iterate over all collisions through Simulation.CurrentCollisions.

## Improved editor gizmos

The old gizmos weren't very nice to look at, so this feature makes them look better and more user-friendly. It also changes how the rotation gizmo works and adds scale planes to the scale gizmo.

![New gizmos](https://i.imgur.com/8siM2Lc.png)

This feature also updates the text on the CameraOrientationGizmo to be XYZ instead of right/left. Still prefer the old text instead of the XYZ coordinate? Don't worry, there's a setting under the viewport settings that swaps it back to the old text.

![Rotation](https://i.imgur.com/W4zIf7J.png =400x160)


## Intermediate tutorials

One of the first Open Collective sub-projects is the [intermediate C# tutorials project](https://opencollective.com/stride3d/projects/stride-intermediate-tutorials). After discussion in community meetings and with various contributors donating directly to this project, the amount for this project to be included in Stride quickly became a realization.

![Intermediate tutorials intro screen](https://i.imgur.com/7GVEiSR.jpg)

With Stride 4.1, you will be able to select the C# intermediate tutorials project as a new template project. The template project contains (at the moment of writing) 11 topics that every developer will want to have a look at.
1.    UI basics
1.    Collision triggers
1.    Raycasting
1.    Projecting and Unprojecting
1.    Async(hronous) scripts
1.    Scene loading
1.    Animation basics
1.    Audio
1.    First person camera
1.    Third person camera
1.    Navigation

Each tutorial has a video tutorial accompanying it, which can be found on Stride's [Youtube channel](https://www.youtube.com/c/Stride3D). Below you can find the full playlist. 
 

 > [!Video https://www.youtube.com/embed/videoseries?list=PLRZx2y7uC8mOE6_L0ZiFxNBE7HmzU2dP7]

## Known Issues

### Integrated C# Editor

The transition to .NET6 unfortunately broke the help tooltips and the code completion of integrated C# code editor. But we decided to accept it for now, as everyone is using a proper C# editor anyways, such as Visual Studio, Rider or Visual Studio Code.

The reason for the error is that [RoslynPad](https://github.com/roslynpad/roslynpad), the underlaying library, also needs an update or fix. We'll adress this in one of the upcoming minor version releases.

![](https://i.imgur.com/Gn2i6Js.png)


## A little help

We, contributors, believe that Stride can help .NET game developers make the games they want with ease using their favorite languages. We want to make sure Stride offers the most comfortable environment for developing games, and this takes time and effort.

Since the free and open-source release of Stride, the community has been growing slowly, so we have decided to open a fund to reward developers for any contribution they make to Stride. We set up an [Open Collective page](https://opencollective.com/stride3d) to manage our funds and allocate money for features that the community would like to see implemented.

We have various bounties for [bug fixes and features](https://opencollective.com/stride3d/projects) (Vulkan support, decals, morph targets, and many others). If you have or know someone with the skills to tackle those bounties, please reach out to us through the [respective Github tickets](https://github.com/stride3d/stride/labels/bounty). You can also contact us through our discord server or on Github to propose new bounties.

## Contributors

Many thanks to [all the contributors](https://github.com/stride3d/stride/graphs/contributors?from=2021-02-01&to=2022-06-10&type=c) who have donated their time and skill by adding features, fixing bugs, managing the build pipelines, adding documentation, and reviewing PRs.

### Financial contributors

Also, a huge thanks to the individuals and companies who contributed financially to our [Open Collective](https://opencollective.com/stride3d)! 

* [ORE System](https://ore-system.com) with a diamond sponsorship
* [xen2](https://opencollective.com/xen2) Core contributor that donated a large portion of the previous Patreon back through Open collective
* [vvvv](https://visualprogramming.net) A visual live-programming environment for easy prototyping and development. It is designed to facilitate the handling of large media environments with physical interfaces, real-time motion graphics, audio and video that can interact with many users simultaneously. vvvv uses Stride
* [Vašo](https://opencollective.com/vaclav)
* [Mitchel Albertz](https://opencollective.com/mitchel-albertz)
* [Bill](https://opencollective.com/bill2)
* [Ideonella](https://opencollective.com/ideonella)
* [Soul Rider](https://opencollective.com/soul-rider)
* [najak3d](https://opencollective.com/guest-ce7ccb03)
* [Eideren](https://opencollective.com/eideren)
* [Jorn Aggror](https://opencollective.com/jorn-theunissen)
* [Marian Dziubiak](https://marian.dziubiak.pl)
* [Youness KAFIA](https://opencollective.com/guest-7253cc41)
* [David Thunderclown](https://www.disruptionworks.co.uk)
* [Christian Clavet](https://opencollective.com/christian-clavet)
* [Marko Viitanen](https://opencollective.com/fador)
* [Aaron Disibio](https://opencollective.com/guest-2f41a631)
* [z16](https://opencollective.com/z16)
* [Incognito](https://opencollective.com/guest-5635aca5)
* [Walter Hulsebos](https://opencollective.com/guest-2170ad46)
* [TheKeyblader](https://opencollective.com/thekeyblader)
* [James Rinker](https://opencollective.com/james-rinker)
* [ztl](https://opencollective.com/guest-6653841d)
* [Bruno Garcia](https://brunogarcia.com)
* [BanditRevolver](https://opencollective.com/banditrevolver)
* [EmmX](https://opencollective.com/emmx)
* [SeleDreams](https://opencollective.com/seledreams)
* [Vignette](https://vignetteapp.org)
* [Longplay Games](https://opencollective.com/guest-a5fa78c8)
* [Redberd36](https://opencollective.com/guest-3fc8bf91)
