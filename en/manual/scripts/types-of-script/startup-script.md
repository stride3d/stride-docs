# Startup script

Startup scripts only run when they are added or removed at runtime. They're mostly used to initialize game elements (eg spawning characters) and destroy them when the scene is unloaded. They have a [Start](xref:Stride.Engine.StartupScript.Start) method for initialization and a [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method. You can override either method if you need to.

## Example script

```csharp

```
