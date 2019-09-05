# Virtual buttons
You can find this sample in the tutorial project: **Scenes** -> **Basics** -> **Virtual buttons** 

## Explanation
This C# basics tutorial covers how to virtual buttons. Lets say that you a player to jump when a key is pressed. The spacebar is a common option, but what if a gamer wants to have a different key bind to this 'Forward' action. The answer here is the 'Virtual button'. Virtual buttons allow the mapping of 1 or more keyboard keys, mousebuttons or joystick buttons to a single 'Virtual button'. We can check for the name of that virtual button to see if any of the virtual button is triggered.

![Virtual buttons](media/virtual-buttons.png)

## Code
[!code-csharp[VirtualButtons](..\..\..\Tutorials\Tutorials\Basics\VirtualButtons.cs)]
