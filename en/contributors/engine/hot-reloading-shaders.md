# Hot Reloading Engine Shaders in Editor
GameStudio automatically reloads project shaders on every file change, it can also reload engine shaders but the files the engine is looking at to synchronize those changes are located inside of the nuget packages ``C:\Users\[USERNAME]\.nuget\packages\stride.rendering\4.1.0.1-beta\stride\Assets\Shadows\ShadowMapCommon.sdsl`` for example.

If you still can't find where it's looking for with a specific file you can put a conditional breakpoint on [the directoryWatcher.Track line](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/EffectSystem.cs#L232) with an expression like ``filePath.Contains("NameOfYourShader")`` and your IDE will break whenever that file is tracked, you can then inspect the value for `filePath` in your IDE/debugger's locals and it'll contain the full path to that file.

Don't forget to apply back the changes you made to the files in the nuget package to the files in your repo.