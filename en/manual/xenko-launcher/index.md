# Xenko Launcher

<span class="label label-doc-level">Beginner</span>

With the **Xenko launcher**, you can install, manage and run different versions of Xenko.

![Xenko launcher](media/xenko-launcher-interface.png)

## Install the latest Xenko version

If you don't have Xenko installed, the Xenko Launcher prompts you to install the latest version.

![No version installed](../get-started/media/xenko-launcher-install-last-version.png)

You can install other versions of Xenko in the **Switch/update version** section (**B**). To do this, click the **install** icon next to the version in the list.

## Install the Xenko Visual Studio extension

If you choose to install the latest version of Xenko, the Xenko Launcher asks if you want to install the Visual Studio extension.

![Install Visual Studio integration](../get-started/media/install-VS-plug-in-prompt.png)

The Visual Studio extension lets you edit shaders directly from Visual Studio, and provides syntax highlighting, live code analysis with validation, error checking, and navigation (jump to definition). Installing the extension isn't mandatory, but we recommend it.

To install or reinstall the Visual Studio extension at any time, click the **Reinstall** button in the Xenko Launcher.

![Visual Studio extension](media/xenko-launcher-visual-studio-plugin.png)

## Switch the Xenko version

To choose which version of Xenko runs, select it in the list under **Switch/update version**. 

## Manage different versions of Xenko

You can install and uninstall multiple versions of Xenko from the **Switch/update version** section.

![Manage versions of Xenko](../get-started/media/xenko-launcher-various-versions.png)

You might need to use an older version of Xenko to work with old projects. Newer versions of Xenko might contain changes that require old projects to be upgraded.

The version number consists of two numbers. The first number refers to the **major** version, and the second number refers to the **minor** version. 

Major updates add significant changes, and you might need to update your projects to use them. Minor updates don't contain breaking changes, so they're safe use with your existing projects.

* To see the release notes for a particular version, click the **note icon** next to the version name (**A**).

* To install a particular version, click the **Download and install** icon next to the 
version name (**D**).

>[!Note]
>You can't revert to earlier minor versions. For example, you can install both Xenko 1.9 and 1.8 side by side, but you can't revert from Xenko 1.9.2 to Xenko 1.9.1.

## Start Game Studio

1. Under **Switch/update version**, select the version of Xenko you want to use. 

   The version number is updated on the **Start** button.

   ![Start button](media/xenko-launcher-start-button.png)

2. Click **Start** to launch Game Studio.

## Recent projects

![Projects section](media/xenko-launcher-projects-section.png)

The **Projects** section displays your recent projects. To open a project, click it.

### Open a project with a newer version of Xenko

The top right of each project button (**B**) shows which version of Xenko the project was made with.

To open a project with a more recent version of Xenko: 

1. On the project button, click the **upgrade** icon in the bottom right (**D**).

2. Select the Xenko version you want to open the project with. Game Studio prompts you to upgrade the project when it opens.

>[!Note]
>After you update a project to use a newer version of Xenko, you might need to make manual changes to get it to work. **Make sure you back up the project and all its related files before you upgrade it.**