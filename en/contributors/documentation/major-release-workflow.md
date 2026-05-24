# Major Release Workflow

Assuming the transition is from version `4.1` to `4.2`, and that the Stride source code has been updated to the corresponding .NET version, follow these steps. Note that some steps can be executed at a later stage if needed.

1. Update `manual\install-and-update\requirements.md` to reflect the new .NET version references
1. Duplicate `ReleaseNotes\ReleaseNotes.md` and rename the copy to `ReleaseNotes-4.1.md`
1. Update `ReleaseNotes.md`:
   - Change the content title to `4.2`
   - Replace the content with the new release notes for version `4.2`
   - Use [GitHub Release](https://github.com/stride3d/stride/releases) to generate a list of **What's Changed**, once the new tag is added, following the TeamCity build
1. Modify `ReleaseNotes\toc.yml`
   - `name: 4.2 release notes` with `href: ReleaseNotes.md`
   - `name: 4.1 release notes` with `href: ReleaseNotes-4.1.md`
1. In `en\docfx.json`
   - `_appFooter`: Increase the version number
   - Update `TargetFramework` in two locations to the current framework version being used. Ensure to test this step locally
1. Edit `versions.json`
   - Under `versions`, add the new version `4.2`
1. For GitHub Actions deployment update `*.yml` files in the `.github\workflows\` folder
   - `dotnet-version:` Update to the related .NET version
1. Merging `master` to `staging` branch will automatically trigger deployment to our [staging environment](https://stride-doc-staging.azurewebsites.net/latest/en/)
1. ⚠️ Merging `master` to `release` branch will automatically trigger deployment to our production website
1. It might take up to 24 hours for the CDN to refresh. The best approach is to contact the core contributors and request a CDN reset

> [!CAUTION]
> ⚠️ You must manually rename the existing folder on the server from `4.1` to `4.1-backup`, otherwise, the deployment to production will delete this folder while deploying to the `4.2` folder. Once `4.2` is deployed, it is safe to rename `4.1-backup` back to `4.1`. Any further deployments will affect only the `4.2` folder.

> [!CAUTION]
> There is a rule `<action type="Rewrite" url="4.3/{R:1}" />` in the root `web.config` that might need adjustment, even though it already points to **4.3**. Changing it to **4.2** will correctly show the 4.2 docs as the default, as expected. After switching it back to **4.3**, if the site still displays **4.2**, try appending `?randomtext` to the end of the URL. This forces an uncached version, which should finally display the **4.3** docs. At that point, the **4.3** rewrite rule is confirmed to work for uncached pages, meaning the CDN needs to be reset.

The `BuildDocs.ps1` script will manage the deployment to the `4.2` folder while maintaining accessibility to previous versions. Note, that the deployment profile must be set to not delete existing items.

## Other locations to update

1. Modify `contributors\engine\building-source-windows.md`
   - Update SDK version references
   - Update Visual Studio version
1. Modify `contributors\engine\building-source-windows-other-ide.md`
   - Update Build Tools path
1. Modify `contributors\engine\building-source-windows-visual-studio.md`
   - Update Visual Studio version
1. Modify `manual\troubleshooting\stride-doesnt-run.md`
   - Update SDK and .NET version references
   - Update Visual Studio version 
1. Modify `manual\files-and-folders\distribute-a-game.md`
   - Update SDK version references
1. Modify `manual\get-started\update-stride.md` 
   - Update Visual Studio version
1. Modify `includes\docs-prerequisites.md` 
   - Update SDK and .NET version references
   - Update Visual Studio version
