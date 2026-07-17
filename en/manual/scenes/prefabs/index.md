# Prefabs

Prefabs are reusable entity templates. When a prefab is changed **in the editor**, all of it's instances are updated.

Prefab instances can choose to override certain values (e.g. position and scale), which won't be influenced when the original prefab is modified.

TODO: VISUALIZATION

Prefabs can also be used at runtime to instantiate entities. For example: creating bullets when shooting a weapon.

TODO: EXAMPLE VIDEO

The most common use for prefabs is to create a small piece of your scene (like a car, NPC, or item of furniture) and duplicate it as many times as you need. When you need to modify it (e.g. if you want to replace its model), you can change it in one place and apply the change everywhere at once.
