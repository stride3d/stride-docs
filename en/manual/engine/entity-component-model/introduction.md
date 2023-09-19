# ECS (Entity Component System) Introduction

# Problem
> `Dog` is a subclasses of `Animal`.

This example is often used as an example of inheritance
in introductions to programming. However, when things get more complex,
we get problems:
- `Dog` and `Fish` can swim, so we create `SwimmingAnimal` as a class in between
- `Bee` and `Bird` can fly, so we create `FlyingAnimal`
- What do we now do with the `Duck`, who can do both?

We have the exact same problem in video games.  
Enemies can walk, shoot, fly - but not all of them can do everything.  
Even something basic like hitpoints is not universal, as some enemies are indestructible.

# Solution


> Entity component system (ECS) is a software architectural pattern mostly used in video game development for the representation of game world objects. An ECS comprises entities composed from components of data, with systems which operate on entities' components.  
> _-[Wikipedia](https://en.wikipedia.org/wiki/Entity_component_system)_


The general idea of an ECS is that an _entity_ - an "object" in your virtual world -
does not really do anything. It is mostly just a "bag of components".

The selection of components on an entity decides what it does.
An entity with a collider component can collider, an entity with a sound component can make a noise, etc.

## Differing opinions

For the "System" part of the term, there are two interpretations:

A) "Entity-and-Component System"  
...in which the components contain the data they need, and also the functionality that works with that data.

B) "Entity, Component, System"  
...in which a component only contains data, while a third part - the system -
contains the functionality.

Stride allows working in both ways. A) can be achieved by using
[scripts](https://doc.stride3d.net/latest/en/manual/scripts/index.html)
while the usage of B) is described in this section of the manual.

### Which one to choose?

![media/ecs-choice.jpg](media/ecs-choice.jpg) 
