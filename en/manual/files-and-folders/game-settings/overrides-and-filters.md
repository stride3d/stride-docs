# Overrides and filters

It's possible to use different configurations based on the platform and GPU of a user.

## Create an override

Overrides are stored in the game settings asset under the **Overrides** category. That's where you can add and remove your overrides.

TODO: IMAGE

After creating a new override, select the platforms you want to target and add a configuration.

TODO: IMAGE

## Specific filters

Specific filters let you override configurations based on a user's GPU. For example: you can set a lower graphics profile for machines using integrated graphics.

Configuration overrides can use specific filters from a list located in the **game settings asset** under the **Platform Filters** category.

### Add a filter

1. Press **➕ Add a Platform Filter** at the bottom of the **Platform Filters** category.
    
    TODO: IMAGE

2. Write your filter using [regular expression](https://en.wikipedia.org/wiki/Regular_expression).

    TODO: IMAGE

3. Save the game settings asset for the filter to become usable.

### Use a filter

Filters can be selected in the **Specific Filter** property of a configuration override.

TODO: IMAGE

### Delete a filter

> [!CAUTION]
> Currently, removing a filter that's used in one of the configuration overrides **will cause Game Studio to crash!** Make sure to follow these steps to make sure this won't happen.

1. Remove the filter from all configuration overrides.

    TODO: IMAGE

2. Save the game settings asset.

3. Press the ➖ button next to the filter in **Platform Filters**.
    
    TODO: IMAGE

## See more

* [regex101.com](https://regex101.com/)
