# Asset bundles

>[!Warning]
>This section is out of date. For now, you should only use it for reference.

A bundle of assets allows to package assets into a single archive that can be downloaded into the game at a specific time.

It allows creation of **Downloadable Content (DLC)**.

Basic rules:

- A project can generate several bundle.
- A bundle is created from several **assets selectors**  (Currently, only the `PathSelector` and `TagSelector` are supported)
- A bundle can have dependencies to others bundles
- Every bundle implicitly references `default` bundle, where every asset which shouldn't go in a specific bundle will be packaged
- Once a bundle is deployed into the game, all assets from this bundle and all its dependencies are accessible
- Bundle resolution is done through an asynchronous callback that allows you to download bundle, and will be called once per dependency (similar to AssemblyResolve event).

# Create a bundle

> [!Note]
> Creating currently requires some manual steps (i.e. editing `xkpkg` by hand).

Open the `xkprj` file of the game executable and add the following configuration:

Example:

- A bundle named `MyBundleName` will embed assets with tags `MyTag1` and `MyTag2`
- A bundle named `MyBundleName2` will embed assets with tags `MyTag3` and `MyTag4`. This bundle has a dependency to `MyBundleName`
- There is also a `PathSelector` which follow the `.gitignore` filtering convention.

 

```cs
Bundles:
 - Name: MyBundleName
   Selectors:
    - !TagSelector
      Tags: 
        - MyTag1
        - MyTag2
 - Name: MyBundleName2
   Dependencies:
    - MyBundleName
   Selectors:
    - !TagSelector
      Tags: 
        - MyTag3
        - MyTag4
    - !PathSelector
      Paths:
        - folder1/
        - /folder2/
        - *.bin
        - folder3/*.xml
```


> [!Note]
> 
> Asset dependencies are automatically placed in the most appropriate bundle.
> 
> Current process works that way:
> 
> - Find assets that matches specific Tag Selectors ("roots" of bundle assets).
> - Enumerate assets that are dependent on those "roots" bundle assets and put them in the same bundle than their "roots" asset.
>   - Except if already accessible through one of package dependencies (i.e. a shared dependent package or default package).
> - Place everything else in default bundle.
> 
> Note that:
> 
> - Shared assets might be duplicated if not specifically placed in common or default package, but that is intended (i.e. if user wishes to distribute 2 separate DLC that need common assets but need to be self-contained).
> - Every bundle implicitly depends on default bundle.
> 
>      

# Load a bundle at runtime

Loading bundle is done through `ObjectDatabase.LoadBundle(string bundleName) (ref:{Xenko.Core.Storage.ObjectDatabase.LoadBundle})`:

```cs
// Load bundle
Assets.DatabaseFileProvider.ObjectDatabase.LoadBundle("MyBundleName2");
 
// Load specified asset
var texture = Assets.Load<Texture2D>("AssetContainedInMyBundleName2");
```


# Selectors

 Selectors help deciding which assets are stored in a specific bundle.

## Tag selector

Select assets based on a list of tag attached on each asset.

Properties:

- Tags: List of Tags. Any asset that contains at least one of the tag will be included.

## Path selector

Select assets based on their path.

Standard .gitignore patterns are supported (except ! (negate), # (comments) and \[0-9\] (groups)).

Properties:

- Paths: List of filters. Any asset whose URL matches one of the filter will be included.

 

