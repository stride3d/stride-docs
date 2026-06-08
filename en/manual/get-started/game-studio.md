# Game Studio

<span class="badge text-bg-primary">Beginner</span>

**Game Studio** is an essential tool, used for editing assets, arranging scenes and much more. It's important to familiarize yourself with it's layout.

![An image showing the Game Studio.](media/game-studio.webp)

## Asset editor

![](media/asset-editor.webp)

Certain assets have their own dedicated editor. The most notable example of this is the **Scene editor**, which let's you view a scene in 3D.

## Property grid

![An image showing an entity names "Ground" in the property grid with a single component.](media/property-grid.webp)

The **Property grid** displays a list of properties of selected assets and entities.

This is where you can assign [components](key-concepts.md#components) to entities and edit their properties.

## Solution explorer

![An image of the solution explorer.](media/solution-explorer.webp)

The **solution explorer** displays the hierarchy of elements in the C# solution associated with the Project. These elements contain assets and code.

In a new project, there are 2 or more items under the solution: **NameOfMyProject** and **NameOfMyProject.NameOfPlatform** (there could be one or more of these).
* **NameOfProject** - contains files for the game.
* **NameOfProject.NameOfPlatform** - contains files specific to that platform (mostly, the `NameOfProjectApp.cs` file from which the game starts and the window icon).

Under each of those elements, there are 2 folders: **Assets** and **Code**.
* **Assets** - contains all assets of that element.
* **Code** - contains all code of that element.

## Asset view

![An image of the asset view.](media/asset-view.webp)

The **Asset view** displays contents of a selected folder in the **[Solution explorer](#solution-explorer)**.

Items from the **Asset view** can be dragged into other editors (for example: dragging a prefab into a scene in the **[Scene editor](#asset-editor)**).

To create a new asset, click the **➕ Add asset** button in the top left corner.

## Further reading

For more information, visit the [Game Studio](../game-studio/index.md) section.
