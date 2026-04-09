# Cleaning up

<span class="badge text-bg-primary">Beginner</span>

The build process generates additional [files that aren't necessary for the game to work](build-file-structure.md). This page explains how to clean them up in order to not clutter your game's files.

## Files to delete

* **Empty folders** - sometimes created by the build process.
* **`.pdb` files** - information used for debugging.
* **`.xml` files** - the generated code documentation.

## Automatic cleanup

You can setup the build process to automatically delete the unnecessary files after publishing. Just add the below to the `.csproj` file of the platform package:

```xml
<Project Sdk="Microsoft.NET.Sdk">
    
    ...
    
    <Target Name="CleanupPublish" AfterTargets="Publish">
        <ItemGroup>
            <FilesToCleanup Include="$(PublishDir)/*.xml;$(PublishDir)/*.pdb"/>
        </ItemGroup>
        <Delete Files="@(FilesToCleanup)"/>
    </Target>
</Project>
```

**Explanation** <br/>
After you publish the game, the **Cleanup Publish** target will be executed. It first defines a list of `.xml` and `.pdb` files located in the publish directory and stores them in a new property called **FilesToCleanup**. Then the [Delete](https://learn.microsoft.com/en-us/visualstudio/msbuild/delete-task) task goes over that list and deletes them.

## See also

* [Target element (MSBuild)](https://learn.microsoft.com/en-us/visualstudio/msbuild/target-element-msbuild)
* [Build file structure](build-file-structure.md)
