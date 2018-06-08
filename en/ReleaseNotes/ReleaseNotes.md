# Xenko 3.0 release notes

August 2, 2018

## Highlights

### Xenko is now a MIT community-based opensource project!

You read that right. <b>Xenko 3.0</b> is out now, released under the permissive [MIT License](https://opensource.org/licenses/MIT). 

From now on, you can use and modify Xenko completely <b>free</b> — whether you're a professional, a student, or just looking for a new hobby. This includes the runtime and editor.

![Xenko GitHub](media/ReleaseNotes-3.0/xenko-oss.png)

Silicon Studio no longer supports Xenko, but members of the Xenko team will continue to work on it as part of the community.

We encourage people to help us and contribute to the project. If interested, join us on [GitHub](https://github.com/xenko3d/xenko/).

We are really excited to see what people will come up with!

Thanks for supporting Xenko!

### New project system

Both Xenko itself and users project are now built on top of the new project system.

It means your game csproj are now simpler as ever, with only a `PackageReference` to Xenko.

This makes package restore, upgrade and selection much more convenient. Opening a project with a non-installed version of Xenko should work out of the box too, as long as Xenko launcher is installed.

Longer down the road, the plan is to split Xenko further into separate packages such as `Xenko.Graphics`, `Xenko.Physics` and `Xenko.Editor` (and possibly host them directly on nuget.org).

### Video

It is now possible to add video to your games.

Note that this feature is not completely tested and supported on all platforms, but we decided to include it anyway and tune it later to not delay the MIT release further.

### Skin and Hair rendering

Skin and hair rendering are now possible with Xenko.

Skin rendering is based on subsurface scattering, and hair rendering is based on Kajiya-Kay and Scheuermann models.

Same as video, this feature might still need some improvements and tuning, but we decided to not delay the MIT release further.

## Breaking changes

### Xenko namespace changes

Lot of namespace changes to decouple the namespace from `SiliconStudio`:

* `SiliconStudio.Xenko` renamed `Xenko`
* `SiliconStudio.Core` and `SiliconStudio.*` renamed `Xenko.Core`

Projects should automatically be updated, but we recommend you making a backup of your project before, and double check everything is good after the upgrade.

### New project system

Game project will be recreated with the new project system.

This should happen automatically but you might need a few tweaks afterwise (i.e. readjust Build Action on certain csproj items).
