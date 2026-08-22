# References

<span class="badge text-bg-primary">Intermediate</span>

The **References** panel shows the relation between other assets and the selection. It's a useful tool when trying to debug why an asset is/isn't being compiled.

![](media/references.webp)

It has two modes, which can be switched using the buttons at the top:

* **References** - shows all assets that are used by the selection.
* **Referenced by** - shows all assets that use the selection.

At the bottom, there is a summary of how many assets of each type type are visible on the list.

## Select references

Each asset can be selected directly from the **References** panel by **double clicking**.

## Debugging asset status

The **References** panel is a useful tool when figuring out **why an asset is being included in the build when it shouldn't be** or **not being included when it should**.

You can see what makes an asset have its [compilation status](../../assets/asset-compilation.md) by inspecting which assets reference it. From that point, you can retrace these references to find out what why your asset is or isn't being compiled.
