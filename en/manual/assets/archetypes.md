# Archetypes

Stride allows you to create variants of the same asset that only change a selected number of properties, while remaining synchronized with the base.

TODO: IMAGE OR VISUALIZATION

Here is some terminology to keep in mind:

* **Archetype** - the original asset from which a different asset derives from.
* **Derived asset** - an asset that derives from a different asset (an archetype).

## Creating a derived asset

In the **asset view**, right click on the asset you want to derive from and select **Create derived asset**.

TODO: IMAGE

**Game Studio** then creates a new derived asset which you can modify.

## Overriding values

When changing a property of a derived asset in the **property grid**, it will be marked as an overridden. Overridden properties are slightly brighter and bolder.

TODO: IMAGE

Override properties will not be updated when they are changed on the archetype.

## Reverting overrides

In case you want to revert a property to use the same values as the archetype, right click on it in the **property grid** and select **Reset to base value**.

## Unlink from archetype

If you want to turn a derived asset into a normal one (unlinking it from the archetype), in the **asset view** right click on it and select **Clear archetype**.

TODO: IMAGE

The asset will now no longer follow changes done to the archetype.

## See also

* [Create an asset](create-an-asset.md)
