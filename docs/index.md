# **MeltedForge**

MeltedForge is game engine written in the C language. It was first started as a simple
hobby engine. But slowly, the aim wasn't anymore to be a "hobby" engine. As a game engine,
we want it to be like a proper 2d/3d game engine which can actually export fun and enjoyable games.
We admit it sounds ambitious and like any other "wannabe" engine. But still we continue to work to make 
goal a reality.

The entire code is open sourced. The github repository is [here](https://github.com/CloudCodingSpace/MeltedForge).
One of the main reason it is open sourced is first of all, we feel like open source projects is a great learning resource
for other devs and secondly, the option for community suggestions is open. Which in our opinion, is a good thing since
it helps pointing out bugs, certain inconsistencies and enrich ideas from various minds all over the world.

The point of this engine isn't to compete with industrial standard, and production ready game engines like 
Unity and Unreal Engine, but to serve the purpose of mini-studios and small indie devs, who prefer flexibility, 
bloat free options and lightweightedness of the engine.

MeltedForge was officially created on April 8, 2025.

---

## **Goals**

We want to give our client developer 2 main options :-

 - Either create a game using the engine's editor
 - Or, manually write your app natively in C/C++ by directly interacting with the engine's core.

We recommend the second option for devs who have prior experience with low-level systems
and want more customization and flexibility without any useless bloat.

---

## **Current position**

At the moment of writing this documentation, MeltedForge isn't quite matured yet. It has *many* faults and doesn't 
has basic engine features. So long story short, it is in it's young stage. Though it is also true that it is not a *toy* 
test engine either. It is for now, far from the likes of an industrial standard, production ready game 
engine like Unity, Godot, Unreal Engine, Cry engine, etc. but it is in the path of becoming a engine which *can actually* export 
games and applications.

Features of the engine as of now :-

 - Model loading (fbx, gltf and obj formats)
 - Editor level UI (Using cimgui)
 - Customization of the UI (Using cimgui)
 - Custom offscreen render targets
 - Binary serializating & deserializing api
 - Explicit shader resource control
 - Explicit shader code control
 - Can create shader pipelines with explicit control


Concerning limitations for now :- 

 - Monothreaded
 - Can't load complex scenes
 - Isn't guaranteed to be cross-os (Isn't tested on other OSes yet)
 - No editor yet for beginner game developers
