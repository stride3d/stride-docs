# Major Release Workflow

1. **Create a Release Blog Post**
   - Place the post inside the `_drafts` folder, which is not deployed, or directly in the `posts` folder for testing in the `staging` environment. Note: If you need to deploy updates to the `release` branch, remember to move the post back to the `_drafts` folder.
1. **Update `_data\site.json` with the following settings**, which are used in multiple places on the website:
   - `version`: Increase the version number
     - This helps refresh the cached CSS file
   - `download-version`: Update the version number for downloads
     - Used on the home page
   - `csharp-version`: Update to the current C# version being used
     - Used on the home page and features page
   - `dotnet-version`: Update to the current .NET version being used
     - Used on the home page and features page
1. Merging `master` to `staging` branch will automatically trigger deployment to our [staging environment](https://stride-website-staging.azurewebsites.net/)
1. ⚠️ Merging `master` to `release` branch will automatically trigger deployment to our production website