# [WIP] Major Release Workflow

## Engine

## Admin Tasks

1. Update the Stride repository [README.md](https://github.com/stride3d/stride/blob/master/README.md)
   - In the "Building from Source - Prerequisites" section, update the .NET SDK version references
1. If there is a .NET SDK version upgrade:
   - Update the Discord #welcome channel with new SDK version references. If you're unable to edit the message directly, copy its content, delete the original message, and then create a new one with the updated information
1. Follow the steps outlined in the [Docs Major Release Workflow](documentation/major-release-workflow.md)
1. Proceed with the steps in the [Website Major Release Workflow](website/major-release-workflow.md)

## Developer Tasks

1. Bump engine version ([example commit](https://github.com/Eideren/xenko/commit/6fb6580b3c60b98d16e2f01d0cce449d568886da))
1. If there is a .NET SDK version upgrade:
   - Aside from usual changes ([example PR](https://github.com/stride3d/stride/pull/2888)), one important thing is to update the prerequisites installer ([example commit](https://github.com/stride3d/stride/commit/65e93bef9dd301007e65e0c2c684dd6cbc3906a8)) and `global.json` ([example commit](https://github.com/stride3d/stride/commit/4333cd2e28c3ecbbc8462635b80e038cd6cb3ec7))
1. Optional: Update Stride development NuGet packages version in all samples in `https://github.com/stride3d/stride/tree/master/samples`
   - This is especially useful if there are asset upgrader taking a lot of time; otherwise, the default project upgrader will still be run on sample creation
   - Open `samples\Stride.Samples.sln` with GameStudio. Let upgrade run, and do a "save all" from GameStudio; if there is any error opening the project, fix them and reset files before reopening (do not save incomplete `csproj` changes without asset upgrades)
   - Bump versions in `sources\editor\Stride.Samples.Templates\ThisPackageVersion.PackageBuild.cs` and `sources\editor\Stride.Samples.Templates\ThisPackageVersion.DevBuild.cs`
