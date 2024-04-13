## Build Stride without Visual Studio
1. Install [Visual Studio Build Tools](https://aka.ms/vs/17/release/vs_BuildTools.exe) with the same prerequisites listed [here](building-source-windows.md)
2. Add MSBuild's directory to your system's *PATH* (ex: `C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\MSBuild\Current\Bin`)
3. Open a command prompt, point it to a directory and clone Stride to it: `git lfs clone https://github.com/stride3d/stride.git`
4. Navigate to `/Build` with the command prompt, input `msbuild /t:Restore Stride.sln` then `compile.bat`



## Build Stride with Rider
With Rider 2024.1 and after [commit 0e053a3](https://github.com/stride3d/stride/commit/0e053a3b8873f49e9e0e5450a3dfad368a6ed042) Stride can now be built hassle free from Rider, you just have to make sure that `Use ReSharper Build` is enabled in your settings.

![image](https://github.com/stride3d/stride-docs/assets/5742236/9ce4e30d-0d6b-4a56-844d-313a826742bf)

### Hotreload
To hotreload your changes you either have to pause and continue the program or press on the hotreload button at the top of the text editor when/if it shows up.

![image](https://user-images.githubusercontent.com/5742236/147461531-05af59f7-fedf-44a2-b4ee-d1aa25502210.png)
