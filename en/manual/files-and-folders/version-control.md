# Organize your files in version control

We recommend you use a version control system such as Git, SVN, or Perforce Helix to save a history of changes to your project. 

How you organize and share your files is up to you, but there are some things to keep in mind.

## Files you shouldn't add to version control

### **Bin** and **obj** folders

We don't recommend you add the **Bin** or **obj** folders to version control. This is because:

* Game Studio builds these folders every time you run the game, so you don't need to keep a history of them.
* You can't see if they match the source files they were generated from in a given commit.
* They take up space and slow down version control synchronization.

Visual Studio also puts **.obj** folders inside each code folder. For the same reasons, we don't recommend you add these to version control.

### Resource files

**Resource files** are files imported into Game Studio and used by assets. They include image files (eg `.png`, `.jpg`), audio files (eg `.mp3`, `.wav`), and models (eg `.fbx`). We recommend you save these files in the **Resources** folder in your project folder.

We don't recommend you save resource files in the Assets folder. You might be used to organizing files this way if you use Unity®, as Unity® requires resource files and asset files to be in the same folder. Stride doesn't require this, and doing so has downsides.

For example, imagine an artist has edited 10GB of textures and committed them to source control. At the same time, a designer needs to edit an asset quickly. To do this, the designer gets the latest version of the asset from source control. However, because the assets and resource files are in the same folder, the designer is forced to get the 10gb of files at the same time. If the files are in a separate folder, however, the designer only has to get the folder they need. Additionally, as asset files are much smaller than resource files, it's much faster to navigate the asset history in a dedicated asset folder.

### Content creation files

**Content creation files** are created with external content creation tools, such as `.psd` files (Photoshop) or `.max` files (3D Studio Max).

We don't recommend you save content creation files in your project folder. This is because the files are often large and aren't used in the project directly. Instead, we recommend you save the files in a different version control repository - or, if your version control system supports partial checkouts (such as SVN or Perforce), a different root folder. This means team members only get the files they need.

## Suggested directory structure

Following these suggestions, an example folder structure might look like this:

```cs
- MyGame
    - Assets
        - texture.sdtex
    - Bin
    - MyGame.Game
    - MyGame.Platform
    - obj
    - Resources
        - texture.png
- ContentCreationFiles
    - texture.psd
  ```

You could even create separate folders for different kinds of content creation file:

```cs
- MyGame
    - Assets
        - texture.sdtex
        - model.sdtex
    - Bin
    - MyGame.Game
    - MyGame.Platform
    - obj
    - Resources
        - texture.png
        - model.fbx
- PhotoshopProjects
    - texture.psd
- MayaProjects
     - model.mb
  ```

## Example

Imagine a team with two programmers, two 2D artists, and two 3D artists.

* The programmers check out the *MyGame* project folder containing code, assets, and resources.
* The 2D artists check out the game project and the *PhotoshopProjects* folder containing `.psd` files.
* The 3D artists check out the game project and the *MayaProjects* folder containing `.mb` (Maya project) files.

Now imagine one of the 2D artists changes several `.psd` files and commits 2GB of changes to version control. Because only the 2D artists have the *PhotoshopProjects* folder checked out, only the other 2D artist gets this change. The other team members don't need it. This is an efficient way to share files across projects.

## See also

* [Project structure](project-structure.md)
* [Distribute a game](distribute-a-game.md)