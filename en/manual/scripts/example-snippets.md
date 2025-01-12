# [WIP] Example snippets

## Basics

### Scripts

Read more about [Scripts](index.md).

[Stride Life Cycle Flow Chart](https://docs.unity3d.com/uploads/Main/monobehaviour_flowchart.svg)

```csharp
public class BasicMethods : SyncScript
{
    public override void Start() { }
    public override void Cancel() { }        
    public override void Update() { }
}

public class BasicMethods : AsyncScript
{
    public override async Task Execute()
    {
        while (Game.IsRunning)
        {
            // Do stuff every new frame
            await Script.NextFrame();
        }
    }

    public override void Cancel() { }     
}

public class BasicMethods : StartupScript
{
    public override void Start() { }

    public override void Cancel() { }     
}

```

### Transform

Read more about [Transform](index.md).