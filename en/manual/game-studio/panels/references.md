# References

The **references** panel shows information about references of the selected asset.

TODO: IMAGE

It has two modes, which can be switched using the buttons at the top:

TODO: IMAGE

* **References** - shows all assets that are used by the selected.
* **Referenced by** - shows all assets that use the selected.

> [!NOTE]
> This will also show assets marked as not **included in build**.

At the bottom, it shows a summary of how many assets of type are visible on the list.

## Open an asset

Assets can be opened directly through the **References** panel by **double clicking** on them.

## Debugging asset status

The references panel is a useful tool when figuring out why an asset is being included in the build, when it shouldn't be.

You can see what makes an asset be included in the build by inspecting which assets reference it. From that point, you can retrace these references and find where the asset shouldn't be used.
