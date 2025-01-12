# Bepu Physics - Configuration

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

## Adding Bepu physics to your game

Some projects may not come with Bepu Physics pre-installed, to add it to your project right-click on the **game** project and select `Add dependency...`

![Add dependency](media/Add-dependency.png)

A new window will open, select `Stride.BepuPhysics` and click `Ok`.

![Select BepuPhysics](media/bepu-import-dependency-window.png)

The editor may or may not reload the assemblies automatically depending on your settings, if it does not, press the `Assembly Reload` button.

![Reload assemblies](media/bepu-import-assembly-reload.png)

You can now add Bepu's own physics component, but before playing around with that, you may want to add the physics configuration section to your game's settings.

## Configuring Physics

To manage Bepu's simulation configuration, in the `Asset View` pane, select your `GameSettings` asset which is at the root of your asset folder, look at the property grid, press on the `+` sign next to `Add configuration` and select `Bepu Configuration`.

![Create settings](media/bepu-import-settings.png)

You can set up and control the different simulations your game hosts from this section. 
Add your first Simulation by pressing on the green `+` sign next to `Bepu Simulations`.

You should now have something like that:

![Bepu configuration](media/Bepu-configuration.png)

## See also

* [Simulation](simulation.md)
* [Index](index.md)