# Build Stride without Visual Studio

1. **Install** [Visual Studio Build Tools](https://aka.ms/vs/stable/vs_BuildTools.exe) with the same prerequisites listed above.
2. **Add MSBuild to your system's PATH:**
   - Add MSBuild's directory to your `PATH` environment variable (e.g., `C:\Program Files (x86)\Microsoft Visual Studio\2026\BuildTools\MSBuild\Current\Bin`).
3. **Clone the repository:**
   ```bash
   git lfs clone https://github.com/stride3d/stride.git
   ```
4. **Build using the command line:**
   - Navigate to the `/build` directory in the command prompt and run:
   ```bash
   msbuild /t:Restore Stride.sln
   ```
   - Then run:
   ```bash
   compile.bat
   ```

## Build Stride with Rider

With Rider 2025.2 and after [commit 0e053a3](https://github.com/stride3d/stride/commit/0e053a3b8873f49e9e0e5450a3dfad368a6ed042) Stride can now be built hassle free from Rider, you just have to make sure that `Use ReSharper Build` is enabled in your settings.

![image](https://github.com/stride3d/stride-docs/assets/5742236/9ce4e30d-0d6b-4a56-844d-313a826742bf)

### Hot Reload

To hot reload your changes, you can either pause and continue the program or click the hot reload button at the top of the text editor when it appears.

![image](https://user-images.githubusercontent.com/5742236/147461531-05af59f7-fedf-44a2-b4ee-d1aa25502210.png)
