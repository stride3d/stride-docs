# Update Stride

<span class="badge text-bg-primary">Beginner</span>

Updating Stride is a straightforward process, but it's important to follow the steps carefully to ensure a seamless transition. Below are the guidelines for updating both the Stride engine and your existing projects.

> [!NOTE]
> The instructions provided here can be used as a general guide for updating to any new version of Stride.

## Updating Stride

In the **Stride Launcher**, look over to **Switch/update version** and press the update button next to the version you are using.

![](media/stride-launcher-update.webp)

Major and minor releases will appear as a separate version in the list and will require manual installation.

Alternatively, you can update the engine from the terminal using the [Stride CLI](../get-started/stride-cli.md):

```bash
# Update all installed engine versions
stride update

# Update a specific engine version
stride update 4.3
```
  
## Updating your IDE

Make sure you are using the latest version of your IDE of choice to ensure compatibility with the latest version of Stride. Some IDEs might also require you to restart your computer to apply the changes fully.

## Updating your project

1. **Make sure your project can be built.** The upgrade process can modify some of your code, which requires all `.csproj` files to be compilable. 

2. (Recommended) Commit all changes to **version control**. This will provide a safety net, allowing you to revert the update in case something goes wrong.

3. Open your project with the newer version of the engine. You will be prompted if you want to upgrade a package. Make sure to select to do this for every package in the solution and press **Upgrade**.

    ![](media/update-stride-packages.webp)

    > [!TIP]
    > If you are not using version control, it's recommended to **enable the option to backup modified files**. That way, if something goes wrong, you will be able to easily revert the changes.

4. After Stride finishes updating the project, it's crucial to **save it immediately**. This step prevents the project from being in an undefined state and solidifies the changes made during the update.

    ![](media/update-stride-save-project.webp)

## Updating your project with Stride CLI

Project updates can also be performed from the terminal with [Stride CLI](../get-started/stride-cli.md).

> [!NOTE]
> We recommend using the CLI tool over the `dotnet package update` command, as itt will also update some of your assets and code to ensure it works correctly with the new version.

1. Close **Game Studio** to make sure it doesn't override anything.

2. **Make sure your project can be built.** The upgrade process can modify some of your code, which requires all `.csproj` files to be compilable. 

3. (Recommended) Commit all changes to **version control**. This will provide a safety net, allowing you to revert the update in case something goes wrong.

4. Run the following command in order to update your project to the latest version of Stride:

    ```bash
    stride upgrade path/to/your/project
    ```

    If you want to update to a specific version of the engine, you can define it with the `--version` flag.

    ```bash
    stride upgrade --version 4.3 path/to/your/project
    ```

    To view a list of all available flags and parameters, run the following command:

    ```bash
    stride upgrade --help
    ```

## Reverting a project update

In case something went wrong while updating your project or a newer version of Stride has a bug that prevents your game from working properly, you can revert it back to the previous version of the engine.

> [!TIP]
> Before reverting, try to identify what happened and [open an issue on Stride's Github page](https://github.com/stride3d/stride/issues) that describes your problem, so that it can be resolved in a future update.

### Reverting with version control

If your project is using version control, it can be easily reverted to a previous state.

1. Close **Game Studio** to make sure it doesn't override anything.

2. Use your version control software to restore all changed files.

3. Change the engine version in the **Stride Launcher** to the previous version. For more information on how to do this, visit [Manage versions](manage-versions.md).

4. Open your project and verify that there are no issues.

### Reverting without version control

If your project is not using version control, but you have selected the option to **backup modified files** during the project upgrade, then you can restore it to the previous state from that backup.

1. Close **Game Studio** to make sure it doesn't override anything.

2. Open your project's folder.

3. Locate a folder that starts with `.stride-backup` (you might need to enable viewing hidden files depending on your OS).

4. Copy all of it's contents to your project's root directory and select to **overwrite existing files**.

5. Change the engine version in the **Stride Launcher** to the previous version. For more information on how to do this, visit [Manage versions](manage-versions.md).

6. Open your project and verify that there are no issues.

### Reverting without version control or backups

If your project isn't using version control and you haven't selected the option to backup modified files during the project upgrade, then you might still be able to **manually revert all of the changes**.

> [!NOTE]
> This is why using version control is recommended.

1. Close **Game Studio** to make sure it doesn't override anything.

2. Open your project's folder.

3. Manually go over every `.csproj` file and change the version of all Stride packages to the one you were previously using. You can view all available versions of the engine on [nuget.org](https://www.nuget.org/packages/Stride.Engine#versions-body-tab).

4. Resolve all issues in your code.

5. (Recommended) Start tracking your project using version control software such as [git](https://git-scm.com/) in case something breaks again in the future.

6. Change the engine version in the **Stride Launcher** to the previous version. For more information on how to do this, visit [Manage versions](manage-versions.md).

7. Open your project and verify that there are no issues.
