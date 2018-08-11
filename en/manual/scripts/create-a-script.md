# Create a script

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

You can create scripts using Game Studio or an IDE such as Visual Studio.

## Create a script in Game Studio

1. In the **Asset View**, click **Add asset > Scripts** and select a script type.

	![Select script type window](media/create-a-script-script-asset-selection.png)

	>[!Note]
	>For information about different types of script, see [Types of script](types-of-script.md).

	The **New script** dialog opens.

	![New script](media/script-wizard.png)

2. Specify a class and namespace for the script and click **Create script**.

3. To use the script, you need to save it. By default, Game Studio prompts you to save the script now.

After you save the script, you can see it in the **Asset View**.

>[!Note]
> Although scripts are a kind of asset, they're not saved in the Assets folder. Instead, they're saved in the relevant assembly folder. For more information, see [Project structure](../files-and-folders/project-structure.md).
  
You can also see the new script in Visual Studio.

![New script on Asset View tab](media/create-a-script-new-script-asset-view.png)

> [!Tip]
> To open your solution in Visual Studio from Game Studio, click the ![Open in IDE](media/create-a-script-ide-icon.png) (**Open in IDE**) icon in the Game Studio toolbar.

```cs
using System;
using System.Text;
using System.Threading.Tasks;
using Xenko.Core.Mathematics;
using Xenko.Input;
using Xenko.Engine;

namespace MyGame
{
	public class BasicAsyncScript : AsyncScript
	{	
		public override async Task Execute()
		{
			while(Game.IsRunning)
			{
				// Do some stuff every frame
				await Script.NextFrame();
			}
		}
	}
}
```

## Create a script in Visual Studio

1. Open Visual Studio.

	> [!Tip]
	> To open your solution in Visual Studio from Game Studio, click the ![Open in IDE](media/create-a-script-ide-icon.png) (**Open in IDE**) icon in the Game Studio toolbar.

	The game solution is composed of several projects:
	
	* The project ending *.Game* is the main project, and should contain all your game logic and scripts. 
	
	* Other projects (eg *MyGame.Windows*, *MyGame.Android* etc) contain platform-specific code.

	For more information, see [Project structure](../files-and-folders/project-structure.md).

2. Add a new class file to the `.Game` project. To do this, right-click the project and select **Add > New Item**.

	The **Add New Item** dialog opens.

3. Select **Class**, type a name for your script, and click **Add**.

   Visual Studio adds a new class to your project.

4. In the file you created, make sure the script is public and derives from either **AsyncScript** or **SyncScript**.

5. Implement the necessary abstract methods.

	For example:

	```cs
	using System;
	using System.Text;
	using System.Threading.Tasks;
	using Xenko.Core.Mathematics;
	using Xenko.Input;
	using Xenko.Engine;
		
	namespace MyGame
	{
		public class SampleSyncScript : SyncScript
		{			
			public override void Update()
			{
				if (Game.IsRunning)
				{
					// Do something every frame
				}
			}
		}
	}
	```

6. Save the project and script files.

7. Because you modified the script, Game Studio needs to reload the assembly to show the changes.
   
	![Confirmation message](media/create-a-script-confirmation-message.png)

	Click **Yes**.

You can see the script in the **Asset View**.

![New script on Asset View tab](media/create-a-script-new-script-asset-view.png)

>[!Note]
> Although scripts are a kind of asset, they're not saved in the Assets folder. Instead, they're saved in the relevant assembly folder. For more information, see [Project structure](../files-and-folders/project-structure.md).

## See also

* [Types of script](types-of-script.md)
* [Use a script](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Events](events.md)
* [Debugging](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)