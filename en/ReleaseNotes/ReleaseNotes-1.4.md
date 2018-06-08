# Xenko 1.4 release notes

## Highlights

### Renaming

The engine has been renamed Xenko. Here is our new logo, be sure to remember it!

<img src="media/ReleaseNotes-1.4/xenko-logo.png" align="center" />

The following changes have been introduced during the renaming and will be automatically applied to your project when opening it in the Game Studio.

- All occurrences of ‘Paradox’ in code, shaders and configuration files are replaced with ‘Xenko’
- Package and asset files, previously having a .pdx* file extension, now have a .xk* extension
- Xenko SDK is now located using the SiliconStudioXenkoDir environment variable instead of SiliconStudioParadoxDir

In addition, the new Visual Studio integration will not recognize old installations or projects that were not upgraded, and vice versa.

### New documentation system

We are aware our documentation isn't where we need it to be yet, so we've decided to take some steps to move things faster. In order to do this, we have migrated our documentation to DocFX.

The new system should provide better readability and more consistent formatting. It also allows us to more easily edit and upload separate documentation for each version of Xenko.

The documentation has its own repository on GitHub: https://github.com/SiliconStudio/xenko-docs

Everybody in the community can now share information by adding edits which will help us to continually improve the documentation. To edit documentation, just click the “Improve this Doc” button available on every page of the documentation, and submit us pull requests.

<img src="media/ReleaseNotes-1.4/newdoc-docfx.png" align="center" />

With your help, we hope to improve the community's experience with Xenko since this will allow people to share information at a faster pace.

Of course, the Xenko dev. team will also be adding more to the documentation as well. More info on that coming soon!

### PDB debugging

You can now step into Xenko's engine source code. The code will automatically be fetched from GitHub.

The process is simple. All you need to do is open Visual Studio options, go to Debugging > General, and check “Enable Source Server Support”:

<img src="media/ReleaseNotes-1.4/pdb_vs_sourceserver.png" align="center" />

### Sprite Studio (breaking change)

The XML format used to import models and animation has been updated to use the latest version of Sprite Studio, instead of the legacy exporter format used previously.
With this new format, we recommend that you copy your whole Sprite Studio project (all files are needed) into the RawAssets folder of your Xenko project. Please refer to the sample game for details.

## Version 1.4.0-beta

Release date: 2015/12/01

### Enhancements

#### Editor

- Main color is now blue instead of purple.
- Better management of recent project list, especially when working with multiple versions of Xenko.

#### Assets

- Assets were previously versioned individually, but from now on they will more closely match Xenko versions. This will allow package-wide asset upgrades, easier plugin support, and copy-paste support between different Xenko versions.
- We've switched the compiler from a per-app domain model to a per-process model (similar to MSBuild.exe), to avoid any issues related to environment variables, current working directory and unaware C++ code with static that might be used.

### Issues fixed

#### Editor

- Fixed an issue when inserting an asset into the scene hierarchy
- Fixed an issue when renaming a folder in the solution explorer
- Properly set the value of the ‘SolutionDir’ variable when building a game from the studio

#### Engine

- Fixed an issue with shadows for spot lights that were using orthographic projection instead of perspective.

#### Assets

- Fixed the asset compilation crash when Xenko installation path contains the ‘##’ character.
- Allow asset names to contains the ‘.’ period character

### Known Issues

- iOS has an outstanding crash issue after a few second, especially on recent devices (iPhone 6s). This is currently under investigation.
