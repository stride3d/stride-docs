# Overrides and filters

It's possible to use different configurations based on the platform and GPU of a user.

## Create an override

Overrides are stored in the game settings asset under the **Overrides** category.

![](media/overrides-category.webp)

After creating a new override, select the platforms you want to target and add a configuration.

![](media/overrides-add-configuration.webp)

## Specific filters

Specific filters let you override configurations based on a user's GPU. For example: you can set a lower graphics profile for machines using integrated graphics.

Configuration overrides can use specific filters from a list located in the **game settings asset** under the **Platform Filters** category.

### Add a filter

1. Press **➕ Add a Platform Filter** at the bottom of the **Platform Filters** category.
    
    ![](media/platform-filters.webp)

2. Write your filter using [regular expression](https://en.wikipedia.org/wiki/Regular_expression).

    ![](media/platform-filters-new.webp)

3. Save the game settings asset for the filter to become usable.

### Use a filter

Filters can be selected in the **Specific Filter** property of a configuration override.

![](media/overrides-specific-filter.webp)

### Delete a filter

> [!CAUTION]
> Currently, removing a filter that's used in one of the configuration overrides **will cause Game Studio to crash!** Make sure to follow these steps to make sure this won't happen.

1. Remove the filter from all configuration overrides.

2. Save the game settings asset.

3. Press the ❌ button next to the filter in **Platform Filters**.
    
    ![](media/platform-filters-remove.webp)

## See also

* [regex101.com](https://regex101.com/)
* [Configurations](configurations.md)
