# Unit Tests
Unit tests in Stride are set up like any other unit tests in dotnet, 
you create a new project specifically for unit tests, then write your tests in different C# files.

Here's a bare-bone project to get you started:
`YOUR_PROJECT_NAME.Windows.Tests.csproj`
```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <!-- Change this framework to match the one specified in your *.Windows.csproj -->
        <TargetFramework>net8.0-windows</TargetFramework>
        <RuntimeIdentifier>win-x64</RuntimeIdentifier>
        <OutputType>WinExe</OutputType>

        <OutputPath>..\Bin\Tests\Windows\$(Configuration)\</OutputPath>
        <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>

        <!-- Force msbuild to check to rebuild this assembly instead of letting VS IDE guess -->
        <DisableFastUpToDateCheck>true</DisableFastUpToDateCheck>
        
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>

        <IsPackable>false</IsPackable>
        <IsTestProject>true</IsTestProject>
    </PropertyGroup>
    <ItemGroup>
        <!-- Add a reference to your game project here, do not reference the windows project here -->
        <PackageReference Include="coverlet.collector" Version="6.0.0"/>
        <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.8.0"/>
        <PackageReference Include="xunit" Version="2.5.3"/>
        <PackageReference Include="xunit.runner.visualstudio" Version="2.5.3"/>
    </ItemGroup>
    <ItemGroup>
        <Using Include="Xunit"/>
    </ItemGroup>
</Project>
```
And an example C# file:
```cs
using Stride.Engine;

public class Tests
{
    [Fact]
    public void MyBareboneTest()
    {
        Assert.NotEqual(1, 2);
    }
    
    [Fact]
    public void MyGameTest()
    {
        RunGameTest(async (game, scene) =>
        {
            var myEntity = new Entity();
            scene.Entities.Add(myEntity);

            Assert.NotEmpty(scene.Entities);

            await game.Script.NextFrame(); // Wait one frame if you need to

            myEntity.Scene = null;

            Assert.Empty(scene.Entities);
        });
    }

    /// <summary>
    /// Run the given function within a game, providing support for tests requiring ECS, physics simulation, graphics and others.
    /// </summary>
    private static void RunGameTest(Func<Game, Scene, Task> asyncFunction)
    {
        using var game = new Game();
        
        // Fixed time step to reduce framerate discrepancies
        game.IsFixedTimeStep = true;
        game.IsDrawDesynchronized = false;
        game.TargetElapsedTime = TimeSpan.FromTicks(10000000 / 60); // 60hz, 60fps
        
        game.Script.AddTask(async () =>
        {
            await asyncFunction(game, game.SceneSystem.SceneInstance.RootScene);
            game.Exit();
        });
        game.Run();
    }
}
```