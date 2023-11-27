# Major Release Workflow

Assuming the transition is from version `4.1` to `4.2`, and that the Stride source code has been updated to the corresponding .NET version, follow these steps. Note that some steps can be executed at a later stage if needed.

1. Duplicate `ReleaseNotes\ReleaseNotes.md` and rename the copy to `ReleaseNotes-4.1.md`
1. Update `ReleaseNotes.md`:
   - Change the content title to `4.2`
   - Replace the content with the new release notes for version `4.2`
   - [GitHub Release](https://github.com/stride3d/stride/releases) can be used to generate a list **What's Changed**, once the new tag was added
1. Modify `ReleaseNotes\toc.yml`
   - `name: 4.2 release notes` with `href: ReleaseNotes.md`
   - `name: 4.1 release notes` with `href: ReleaseNotes-4.1.md`
1. In `en\docfx.json`
   - `_appFooter`: Increase the version number
   - Change `TargetFramework` to the current framework version being used. Ensure to test this step locally
1. Edit `versions.json`
   - Under `versions`, add the new version `4.2`
1. For GitHub Actions deployment update `*.yml` files in the `.github\workflows\` folder
   - `dotnet-version:` Update to the related .NET version

The `BuildDocs.ps1` script will manage the deployment to the `4.2` folder while maintaining accessibility to previous versions. Note, that the deployment profile must be set to not delete existing items.

## Other locations to update

1. Update [README.md](https://github.com/stride3d/stride/blob/master/README.md) in the Stride repo, Building from source - Prerequisites section, bump .NET version