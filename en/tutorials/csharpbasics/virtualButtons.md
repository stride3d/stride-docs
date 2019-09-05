# Virtual buttons
You can find this sample in the tutorial project: **Scenes** -> **Basics** -> **Virtual buttons** 

## Explanation
This C# basics tutorial covers how to virtual buttons. Lets say that you a player to jump when a key is pressed. The spacebar is a common option, but what if a gamer wants to have a different key bind to this 'Jump' action. The answer here is the 'Virtual button'. Virtual buttons allow to bind 1 or more keyboard keys, mousebuttons and joystick button to be mapped to a single 'Virtual button'. We can check for the name of that virtual button and if any of the mapped inputs is true, than the virtual button can is triggered.

![Delta time](media/virtual-button.png)

## Code
[!code-csharp[Entity](..\..\..\Tutorials\Tutorials\Basics\VirtualButtons.cs)]
