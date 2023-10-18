
## Build Stride without Visual Studio

1. Install [Visual Studio Build Tools](https://aka.ms/vs/17/release/vs_BuildTools.exe) with the same prerequisites listed [here](building-source-windows.md)
2. Add MSBuild's directory to your system's *PATH* (ex: `C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\MSBuild\Current\Bin`)
3. Open a command prompt, point it to a directory and clone Stride to it: `git lfs clone https://github.com/stride3d/stride.git`
4. Navigate to `/Build` with the command prompt, input `msbuild /t:Restore Stride.sln` then `compile.bat`



## Build Stride with Rider
While the engine's build system is almost ready to run from Rider there are still a couple of kinks to iron out before we're there, in the mean time here's a short tutorial to help users of this IDE out.

- As mentioned above, building directly from Rider is not possible yet, but we can invoke the command line to do it for us ...
- Open Stride.sln with Rider.
- Select the configuration dropdown, go to the bottom of the dropdown and select `Edit Configurations ...`

  ![image](https://github.com/stride3d/stride/assets/5742236/20a43b8f-c32d-42ae-8c59-add8440b4a3a)
- Press the `+` on the upper left of this new window, then `.NET Executable`

![image](https://github.com/stride3d/stride/assets/5742236/a15b73a1-4a7e-462a-8814-2cad73b6b1d2)
- Give it a name, something like `Compile then open Editor`
- Fill the `Exe path` with the game studio's, if you don't have the game studio check that step #1 was successful

![image](https://github.com/stride3d/stride/assets/5742236/61fa7f27-8885-418e-926e-df0209aa168a)

- Remove any of the `Before Launch` steps
- Add a new `Run External tool` step

![image](https://github.com/stride3d/stride/assets/5742236/bfe266a4-fec4-49e3-bbc4-9da5977d5177)

- Set `Program` to `Compile.bat`

![image](https://github.com/stride3d/stride/assets/5742236/294779ae-c362-40a7-bcb3-447de7505781)

- Press OK, press OK, press Apply, press OK and select this new configuration in the configuration dropdown

![image](https://github.com/stride3d/stride/assets/5742236/2877e023-feb1-43bf-924d-f01a9a6e875a)

### Hotreload
To hotreload your changes you either have to pause and continue the program or press on the hotreload button at the top of the text editor when/if it shows up.

![image](https://user-images.githubusercontent.com/5742236/147461531-05af59f7-fedf-44a2-b4ee-d1aa25502210.png)