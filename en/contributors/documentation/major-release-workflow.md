# Major Release Workflow

Assuming the transition is from version `4.1` to `4.2`, and that the Stride source code has been updated to the corresponding .NET version, follow these steps. Note that some steps can be executed at a later stage if needed.

1. Update `manual\requirements\index.md` to reflect the new .NET version references
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

> [!CAUTION]
> ⚠️ You must manually rename the existing folder on the server from `4.1` to `4.1-backup`, otherwise, the deployment to production will delete this folder while deploying to the `4.2` folder. Once `4.2` is deployed, it is safe to rename `4.1-backup` back to `4.1`. Any further deployments will affect only the `4.2` folder.

The `BuildDocs.ps1` script will manage the deployment to the `4.2` folder while maintaining accessibility to previous versions. Note, that the deployment profile must be set to not delete existing items.

## Other locations to update

1. Modify `contributors\documentation\installation.md`
   - Update SDK version references
1. Modify `contributors\engine\building-source-windows.md`
   - Update SDK version references
1. Modify `manual\troubleshooting\stride-doesnt-run.md`
   - Update SDK version references
