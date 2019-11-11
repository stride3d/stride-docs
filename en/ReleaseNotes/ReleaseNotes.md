# Xenko 3.1 release notes

November 11th, 2019

## Highlights

### Xenko 3.1 loves NuGet!

Xenko was always a big proponent of NuGet: since first version, Xenko was distributed as a NuGet package.

However, due to limitations (hello packages.config and project.json!), we were leveraging NuGet more as a distribution medium than proper NuGet packages: Xenko 3.0 is still a monolithic single package and it would not work out of the box when referenced from Visual Studio without using Xenko Launcher and Game Studio.

Xenko 3.0 paved the way by making Xenko compatible with the new project system (game projects were referencing Xenko using a `PackageReference`).

![GitHub](media/ReleaseNotes-3.1/xenko-ref-old.png)

Today, Xenko 3.1 brings Xenko as a set of smaller NuGet package, each containing one assembly, with proper dependencies:

![GitHub](media/ReleaseNotes-3.1/xenko-ref-new.png)

As a result, it is now possible to create a game project that references only the packages you want. Here are a few examples of "core" packages:

* `Xenko.Engine`: allows you to use core engine runtime (including its dependencies)
* `Xenko.Core.Assets.CompilerApp`: compile assets at build time
* `Xenko.Core.Mathematics` or `Xenko.Graphics`: yes, if you want to make a custom project only using Xenko mathematics or graphics API without the full Xenko engine, you can!
* `Xenko.Core.Assets`, `Xenko.Presentation` or `Xenko.Quantum`: all those piece of tech being used to build Xenko tooling are also available for reuse in other projects. Nothing prevents you from generating assets on the fly too!

Then, various parts of the engine are distributed as **optional** packages:

* `Xenko.Physics`
* `Xenko.Particles`
* `Xenko.UI`
* `Xenko.SpriteStudio`
* `Xenko.Video`

If you don't reference those packages, they won't be packaged with your game either. In many situations, it results in a smaller packaged game and improved startup time.

Also, you are free to replace those functionalities with alternative libraries.

#### Xenko assets are also distributed as part of package

NuGet packages have a `xenko` folder containing Xenko assets. As a result, user are able to generate nuget package containing Xenko assets out of the box from Visual Studio and publish them on NuGet for general consumption.

#### Package layout: following best NuGet practices

Previously Xenko references were added to the project using custom targets.

New packages are now be layout as NuGet/Visual Studio expects them, in folders like `lib/net45` and `lib/monodroid10`.

We still have a few custom MSBuild targets but reduced them to minimum.

#### Xenko Packages are now distributed on nuget.org

With all those changes, it makes sense to stop distributing Xenko on our custom nuget server and use [nuget.org](https://nuget.org) instead.

This will greatly reduce friction to try Xenko (any project would work out of the box in Visual Studio). This might also make our launcher completely optional in the long run.

#### Xenko tooling resolves assemblies dynamically using NuGet API

Tools such as GameStudio or Asset Compiler are distributed as NuGet packages. However, it won't bundle Xenko Runtime, which will simply be encoded as dependency.

When running those tools, they are resolving Xenko runtime assemblies directly in the NuGet cache.

This allows for distributing those tools as very small and easy-to-upgrade packages, avoiding file duplications. This is similar to what `dotnet-cli` is doing with deps file.

This brings lot of technical challenges but should allow us in the future to be more flexible in the future to load the exact runtime and plugins that the user project reference rather than the one hardcoded with the tool.

#### Future: plugin support for editor

Xenko 3.1 editor will still be monolithic: editor support for UI, SpriteStudio, Video and other optional modules will be hardcoded.

However, the target is to get rid of them as soon as possible, and treat them as what they are: plugins.

### Full switch to .NET Standard

Xenko supports .NET Standard for most of its runtime assemblies.

Xenko games can run on .NET Core for both Windows and Linux.

### Tutorials

Xenko now has a [tutorial section](https://doc.xenko.com/3.1/en/tutorials/index.html) in the documentation!

The first project [“C# Beginner”](https://doc.xenko.com/3.1/en/tutorials/csharpbeginner/index.html), demonstrates 12 beginner programming concepts.

Users will be able to select the tutorial template when creating a new Xenko project to practice and experiment with the code.

Additionally, the code used in the project is directly referenced by the new documentation section which explains each individual tutorial level.

The amount of tutorials, as well as intermediate and advanced tutorials, will be extended/added from now on.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zGFYFhBfxVs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### BulletSharp update

[Eideren](https://github.com/eideren) worked on updating our old custom modified version of [BulletSharp](https://github.com/Eideren/BulletSharpPInvoke) (the wrapper library we use for our physics engine).

Things should be much easier to maintain from now on.


## Changelog

This release also contains numerous improvements, bugfixes and new translations.

Here is the full changelog in all its glory:

Alex (1):

* Fixed spelling error in Quaternion.cs [view commit](http://github.com/xenko3d/xenko/commit/805453edde1b0bd36fd305086c12d9d064c7eff5)

Allan Nordhøy (9):

* Added translation using Weblate (Norwegian Bokmål) [view commit](http://github.com/xenko3d/xenko/commit/bbe53b4a28619dccb9aee04fd5d16631a2ae3ed7)
* Added translation using Weblate (Norwegian Bokmål) [view commit](http://github.com/xenko3d/xenko/commit/21144b14ebe24034e669796d0bc6d46d37b20a88)
* Added translation using Weblate (Norwegian Bokmål) [view commit](http://github.com/xenko3d/xenko/commit/c2086a20092fa574010a1adfbf01d1a8526a0a14)
* Added translation using Weblate (Norwegian Bokmål) [view commit](http://github.com/xenko3d/xenko/commit/668b190a51dca3918cebc3faad77fbe667a34ff5)
* Translated using Weblate (Norwegian Bokmål) [view commit](http://github.com/xenko3d/xenko/commit/2e57bbcf88dd4f29de49c22657b0ab65257ea6d6)
* Translated using Weblate (Norwegian Bokmål) [view commit](http://github.com/xenko3d/xenko/commit/92942e739c064c7197783620b609cdcdb03dd944)
* Translated using Weblate (Norwegian Bokmål) [view commit](http://github.com/xenko3d/xenko/commit/cc404c5d82bb70b70e21ecce74698e9a389c6d98)
* Translated using Weblate (Norwegian Bokmål) [view commit](http://github.com/xenko3d/xenko/commit/b1931aac98bd53458ddcd349ee1df79418986c5e)
* Translated using Weblate (Norwegian Bokmål) [view commit](http://github.com/xenko3d/xenko/commit/a4f10055e7d016967290e5aa6fddca5077065053)

Andrea Aruta (6):

* Added translation using Weblate (Italian) [view commit](http://github.com/xenko3d/xenko/commit/77614db7005a057dcd73dc9edeb23287f300adde)
* Added translation using Weblate (Italian) [view commit](http://github.com/xenko3d/xenko/commit/aa82b474fc82de456d1ddcf5818213560096a01e)
* Added translation using Weblate (Italian) [view commit](http://github.com/xenko3d/xenko/commit/ec10cfccf42b9e40d90460c9f827a786a391ea75)
* Translated using Weblate (Italian) [view commit](http://github.com/xenko3d/xenko/commit/2774ef8c8c005c14df4c9c18fc116b8cf4283459)
* Translated using Weblate (Italian) [view commit](http://github.com/xenko3d/xenko/commit/ad91bb34aded698f0b4f6ca8ace7f83f6a45421e)
* Translated using Weblate (Italian) [view commit](http://github.com/xenko3d/xenko/commit/d61883c048e34325d2d101bff28c8b08001b2599)

Charles Woodhill (1):

* [UI/INPUT] Expose mouseOverElement [view commit](http://github.com/xenko3d/xenko/commit/21399ae559fe078a9e8ff38a8bc04cf71e43506b)

Christian Georgiev (2):

* Added translation using Weblate (Macedonian) [view commit](http://github.com/xenko3d/xenko/commit/290dcbdeebef5bc54142c8169ac6ab114a123bc2)
* Translated using Weblate (Macedonian) [view commit](http://github.com/xenko3d/xenko/commit/de63b27794e6df0e5ed6e68d9364473689f381bb)

Cody Lee (4):

* Added issue templates for bugs and feature requests ([#327](https://github.com/xenko3d/xenko/issues/327)) [view commit](http://github.com/xenko3d/xenko/commit/538f915d81dc8f2fefa45d5f5544c3d4140f51a4)
* Moved pull_request_template.md to correct location [view commit](http://github.com/xenko3d/xenko/commit/28e8c82df7ddde766e7f181cba36533b0bb0e120)
* Removed any pluralization of the word question in the question_request.md for consistency [view commit](http://github.com/xenko3d/xenko/commit/7cb857462a35ca758120ac5f302f86a954f0d158)
* Updated CONTRIBUTING.md and added a 'submitting changes' section [view commit](http://github.com/xenko3d/xenko/commit/b8b5fcd814a4d0e528bd16f9177d0bcb8f457083)

Daniel Keenan (2):

* Change the ObjectToTypeName value converter to give prettier C[#](https://github.com/xenko3d/xenko/issues/) names. ([#400](https://github.com/xenko3d/xenko/issues/400)) [view commit](http://github.com/xenko3d/xenko/commit/89e92e45368301f11cd884cc3d365ed0caebf014)
* [GameStudio] Improve "Add component" button usability. ([#411](https://github.com/xenko3d/xenko/issues/411)) [view commit](http://github.com/xenko3d/xenko/commit/a569a2056885092736f745838e147dcb4bb685b6)

Dominik Jančík (6):

* Initial SDL Finger Multitouch support [view commit](http://github.com/xenko3d/xenko/commit/73dc9ae2f6550de4cc642291f562ae3396e9a74c)
* Removed lastCtrl field [view commit](http://github.com/xenko3d/xenko/commit/45d3dd684fe76d12e9cd8d5b53996e46b8188f2e)
* FingerSDL GUID [view commit](http://github.com/xenko3d/xenko/commit/479dc95727817132721da05481982d3e1c08f811)
* FingerSDL PointerID generator [view commit](http://github.com/xenko3d/xenko/commit/238676ddf8199301d5e1f24823885d76f8a1b1a7)
* Renamed FingerSDL to PointerSDL [view commit](http://github.com/xenko3d/xenko/commit/581f8d9da4ab6687daecf1e163258d3e1da2a5ac)
* SDL Touch>Mouse synth. disabled when PointerSDL is used [view commit](http://github.com/xenko3d/xenko/commit/f94602d4b6b6813506fabc01a24c1de5c7d5808e)

Eideren (55):

* Include nuget to proj [view commit](http://github.com/xenko3d/xenko/commit/6d4eb5a1bf6ecf3967596167646039279aa90571)
* Straightforward changes [view commit](http://github.com/xenko3d/xenko/commit/adf536642f7f93cca99e218c7b62c7de5e2dd7cf)
* Potentially harmful changes [view commit](http://github.com/xenko3d/xenko/commit/fde0242bfd0ee0433b7cf384fd28f9ac5c0d66ae)
* Minor proj update [view commit](http://github.com/xenko3d/xenko/commit/f8137535c08037539c460bb8a03be9e155de020f)
* Matrix conversion fix [view commit](http://github.com/xenko3d/xenko/commit/222b70252d1428ac116c60458789f9101a391ba4)
* Main conversion done, next up the rest of the CharacterComponent [view commit](http://github.com/xenko3d/xenko/commit/f23ed4670e18c78469352aec926323c18ceb17b4)
* Character component, waiting on bullet wrapper for the rest [view commit](http://github.com/xenko3d/xenko/commit/09648564fa4edb98b64ea8d2326ab69f75d91571)
* Static mesh base [view commit](http://github.com/xenko3d/xenko/commit/cbcc27dc7848bdd212a1c31e2f679abf88824c69)
* Static Mesh: Update shape factories [view commit](http://github.com/xenko3d/xenko/commit/5c11f1f2ac1eb34042a7e767085d2f9c47b42e04)
* [Core] ThreadPool: shutdown idle threads ([#302](https://github.com/xenko3d/xenko/issues/302)) [view commit](http://github.com/xenko3d/xenko/commit/993704f60316615c10f6665e2ace830739fa35b0)
* [Samples] Misc camera controller fixes ([#359](https://github.com/xenko3d/xenko/issues/359)) [view commit](http://github.com/xenko3d/xenko/commit/8b24b276c18797c7ec00d4835d60a2a4d12d5188)
* Fix for [#422](https://github.com/xenko3d/xenko/issues/422) [view commit](http://github.com/xenko3d/xenko/commit/9705f84b085b33014cc375a8769fa0a822b93e29)
* Revert nugget [view commit](http://github.com/xenko3d/xenko/commit/6e7f70f34a28d97daa2cde8900feebed57aaa34a)
* [Bullet] Update libs [view commit](http://github.com/xenko3d/xenko/commit/06e22b335819f79a05f716ead2c31f30e79ade30)
* [Bullet] Update projects mapping [view commit](http://github.com/xenko3d/xenko/commit/45a89aa6ef98a3d16c686f20d9c751a5e147d52a)
* [Bullet] Remove bullet refs within mathematics [view commit](http://github.com/xenko3d/xenko/commit/9b22e548b339764d1690c617dc83b73a17bfaf66)
* Merge branch 'master' into bulletsharp_nuget [view commit](http://github.com/xenko3d/xenko/commit/392c86d1d76740fc9c901ebd20635e7f16ef491a)
* [Bullet] Rely on our bullet for math conversions [view commit](http://github.com/xenko3d/xenko/commit/635d83914320dc3208a966545c3b5a6fcad769fd)
* [Bullet] Finish height field mappings [view commit](http://github.com/xenko3d/xenko/commit/e975e1fcd11cef5fa3b35b712b0d971195862b01)
* [Physics] Remove unused enum and previous namespace import for inlining [view commit](http://github.com/xenko3d/xenko/commit/751b6fccb95b227b40e1935f4815c01791866cb7)
* [Bullet] Update all platforms to latest libs [view commit](http://github.com/xenko3d/xenko/commit/465a52cdee1581c8fef8ffeb6b400f243e0fa9b3)
* [Physics] Reduced physics test allocations ([#443](https://github.com/xenko3d/xenko/issues/443)), cleaned up Simulation [view commit](http://github.com/xenko3d/xenko/commit/0d19b3c6cc63cc0401f918f1e90a4992ac7b68f1)
* [Physics] Implement ignore collision between two specific components [view commit](http://github.com/xenko3d/xenko/commit/8a7126ab05910a0cfad48bfc62d56a20f4f6a8f1)
* [Physics] In-editor static mesh collider [view commit](http://github.com/xenko3d/xenko/commit/3a96ee3f0da9c02e5f1221669745316567122e5e)
* [Physics] Avoid duplicate allocations for colliders based on models [view commit](http://github.com/xenko3d/xenko/commit/b6c9191a0794e317ce9a0aca3ade73f036645e2e)
* [Physics] Fix initial collider scaling [view commit](http://github.com/xenko3d/xenko/commit/83c971ce17f037311f51c667f9764d7418b065a2)
* [Misc] Exception prone basic functions [view commit](http://github.com/xenko3d/xenko/commit/e024d327a71369fbcc1151ee145dd9ca18799fd7)
* [Transform] Deal with ChildrenCollection todo [view commit](http://github.com/xenko3d/xenko/commit/8b0821cbfe3bff90d9be16500e4556a3934542b3)
* Merge branch 'master' into bulletsharp_nuget [view commit](http://github.com/xenko3d/xenko/commit/3be3ca71a6fd925a7bfeeeb3ec86cd63bcd5f92a)
* [Physics] Use asset cloner for shape desc [view commit](http://github.com/xenko3d/xenko/commit/0cc07bd85873cbcef0beb087774b5ee3e8cb9d60)
* Merge remote-tracking branch 'origin/master' into bulletsharp_nuget [view commit](http://github.com/xenko3d/xenko/commit/755810da258037454076782eb19911c8e5a4b63c)
* [Physics] Replace ColliderShapes' TrackingCollection [view commit](http://github.com/xenko3d/xenko/commit/494b235316e61c2a2b43ea0baed5c69a09bc2743)
* [Physics] Replace Rigidbody's hacky delegate usage [view commit](http://github.com/xenko3d/xenko/commit/28de8941ebccea0e5c33c96e41dd8e4914a6f2e4)
* [Physics] Rollback unused serialization workaround [view commit](http://github.com/xenko3d/xenko/commit/79ef2b1bf199f84d73053bbd5fd4de85d92be6e2)
* [Physics] Cleanup RigidbodyComponent [view commit](http://github.com/xenko3d/xenko/commit/4db7f42f34725e3a4471403ff1fe6bf3dce5ef55)
* [Physics] Clarify comments in StaticMeshColliderShape [view commit](http://github.com/xenko3d/xenko/commit/e547ad6b57c7ce58988050a6ef5c394fdd2c2e1e)
* [Physics] Fix [#463](https://github.com/xenko3d/xenko/issues/463) [view commit](http://github.com/xenko3d/xenko/commit/0241b1571cfee376429649b2bd03180152a7caf4)
* [Physics] Fix very large meshes throwing [view commit](http://github.com/xenko3d/xenko/commit/42f0910775773ca902e2ea393f12dedbe5c3f7af)
* [Physics] Expose Capsule's readonly data [view commit](http://github.com/xenko3d/xenko/commit/a6c8e901b1b7637eadeaed5f82ea07e40f855c71)
* [Physics] Provide read access to collider shape's data [view commit](http://github.com/xenko3d/xenko/commit/0dda0553c3187556a190ac4675806e1c92851886)
* [Physics] Split static mesh collider into new PR [view commit](http://github.com/xenko3d/xenko/commit/05421ae96fb2232e1e94dbc2c4148ea578dc214b)
* [Physics] Fix ShapeSweeps output [view commit](http://github.com/xenko3d/xenko/commit/c527b174935ebae7eeaf52387d01f7c3f2f6760c)
* [Physics] Provide public access to callbacks' recycle and buffer [view commit](http://github.com/xenko3d/xenko/commit/ae1f4b4fb5e31cca18741af4d409cbe19f40b998)
* [Physics] Clarify bullet lib's usage and sources [view commit](http://github.com/xenko3d/xenko/commit/a09fa7ee09a6d437c5dee485ddd8336db3e13ea8)
* [Editor] Fix orbit editor camera stutter [view commit](http://github.com/xenko3d/xenko/commit/268a7ed70e93c8433480d68b60e0b638ee913d85)
* [Editor] Re-order code execution [view commit](http://github.com/xenko3d/xenko/commit/0c0ed336b59d558380005b055be85db479f78772)
* [SceneManagement] Assign Entity.sceneValue before firing events [view commit](http://github.com/xenko3d/xenko/commit/e8f027284e77d33f0e2963156119e32b5f6c09b2)
* [Camera] Fix processor's cameraSlotsDirty not being reset after process [view commit](http://github.com/xenko3d/xenko/commit/5493c91023ed0cce47e73eea745595485b555713)
* [SceneManagement] Fix loop skipping items when collection is modified [view commit](http://github.com/xenko3d/xenko/commit/caa44fea8bdbc2cb19f3e9be7161635a4016a644)
* Avoid unnecessary alloc [view commit](http://github.com/xenko3d/xenko/commit/2612f987c5408e3a845f6ba7186c61f021e58739)
* Deal with Add(), sub-optimal implementation [view commit](http://github.com/xenko3d/xenko/commit/50bfc1747870461a05148049ea5462301b75dee7)
* [Threading] ThreadPool refactor, reduce allocation, fix wrong argument [view commit](http://github.com/xenko3d/xenko/commit/b6a4833e27e948ad60d131fb7357e574224a87e4)
* Move PooledDelegateHelper outside lock [view commit](http://github.com/xenko3d/xenko/commit/55371ea340660e34bcfbbd0f6b97f87064fafcee)
* Swap task factory [view commit](http://github.com/xenko3d/xenko/commit/b7451e4a8867015f70a1bedf142f815f586bb0f2)
* [GameSystems] Fix removing systems not clearing it from update and draw [view commit](http://github.com/xenko3d/xenko/commit/9b4e65fc505856ef0fe79836ead0c68d259d0633)

Eric Tuvesson (1):

* Assets Compiler Support MSBuild Toolset Version 16.0  ([#421](https://github.com/xenko3d/xenko/issues/421)) (fixes [#420](https://github.com/xenko3d/xenko/issues/420)) [view commit](http://github.com/xenko3d/xenko/commit/60b21cd6d3fe0047b580b54655d186e8e3a42e09)

Félix Dion-Robidoux (1):

* Update BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/e32c91fc557fcc0ead3a0aeb04eeb4042a449fa2)

Hyperpred (1):

* Remove cast to Game in AudioSystem ([#472](https://github.com/xenko3d/xenko/issues/472)) [view commit](http://github.com/xenko3d/xenko/commit/0a8d7bad749d2d4b08afe34a4cbea0a5aaf49b5a)

Jarrett Robertson (1):

* Fixed issue with scene instance using the wrong collection in for loop count [view commit](http://github.com/xenko3d/xenko/commit/d30763723936d7c89f8856071ba8a495146b1734)

Louies (10):

* Added translation using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/14be8bfc7030b7ac427ef50705b0cf2a444136ae)
* Added translation using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/f022a9dc90ef5feabc6c7165bc525be72cf00782)
* Added translation using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/255b77fb76a1d9e852ebf407792bb037be17f67f)
* Added translation using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/3af08fd596bba64308f22bb5e98156fc8607ef45)
* Translated using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/f34e9d44af47e34b56e4d50047f3e03d65a29aa4)
* Translated using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/2fd9b6a0aa47b4ba943b2c4f359a56dbdc06e7b5)
* Translated using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/eb1e7343f6cdca9644987faf1e13f937d83d95cf)
* Translated using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/443a21b3f38b559dd7cedfe8cdaa44e77ab419b2)
* Translated using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/3c9f7a9605255ce7ede002196f79ceda9551b920)
* Translated using Weblate (Chinese (Traditional)) [view commit](http://github.com/xenko3d/xenko/commit/c4e44ac757542aec85363960caa3df7749c2522f)

Lucifer (8):

* Added translation using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/711ee3a82fd382ea0457bb23dfd652dce3bffa23)
* Added translation using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/bc188d71e3726e834941bff26ec9971d66f3b1e6)
* Added translation using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/da76f54a7d63a3dc6eb767d002e5dfca97627588)
* Added translation using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/a195e1efa884beccc5639b865b3df4be1b76acf7)
* Translated using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/e751244fa78a5e796c8f355cc5e2bcb366eb7f64)
* Translated using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/f7415607e3b6ba7c037efd29998055d1df2f8c01)
* Translated using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/6a8045b09d44eba245ed0692738d84069281a764)
* Translated using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/ac41d0231fdac341edb87b5855bd68c03c888b89)

Mario Guerra (10):

* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/ce95c0fe26e70b4c2f8f589bdef23158a6a45804)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/5f23fe46957f043c147497cc9e2b6f219c3e3498)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/56e9efc27f17acb971fcb3ef103900fc1af4bd76)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/ba5f6959e4b32c30693ab21ca859a4d67ab4f509)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/9c5249c7c73b239024bfa70ec8b832bd6b194c0c)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/3847b09a47bbae30ac02d4275683eb5a0be5eb2a)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/29c5914c4c6c5e8d171782a95a929841beb05885)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/981be7251a5e6f4d2fca4b6a8a3f470709fde000)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/58c8349722a9af4d5520e9dc72614d53ab0b9aeb)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/5eb025a71f076b2baab476e4bdddeffd66f5db0c)

Moustafa khalil (1):

* Update README.md [view commit](http://github.com/xenko3d/xenko/commit/bb504a798f01af82dc3b8205fa4183e1c90e1f2c)

Nicolas Musset (10):

* [Localization] Update extraction script [view commit](http://github.com/xenko3d/xenko/commit/b41748068a2b531254a5a155b4d2cb030f94c22f)
* [Localization] Update extracted strings [view commit](http://github.com/xenko3d/xenko/commit/2ea6b431611cc2ccb8fcbdc4f8b1a85ae01c404d)
* [Localization] Update Japanese [view commit](http://github.com/xenko3d/xenko/commit/96a876107ceee7944a230f1f971858059aaaf633)
* [Localization] Add French [view commit](http://github.com/xenko3d/xenko/commit/b3b800cf5a9528e254b02018f2c59855760de240)
* [Build] Update solution and project [view commit](http://github.com/xenko3d/xenko/commit/a35cc79ef82838ce702e000d2cd0f06dde8749f2)
* [Localization] Fix build for path containing spaces ([#381](https://github.com/xenko3d/xenko/issues/381)) [view commit](http://github.com/xenko3d/xenko/commit/7c63ed9989c438f936f3ce018c429e3ec02d3232)
* [Presentation] Bugfix/int3 editor ([#387](https://github.com/xenko3d/xenko/issues/387)) (fixes [#383](https://github.com/xenko3d/xenko/issues/383)) [view commit](http://github.com/xenko3d/xenko/commit/51451347e309ea39b9bbe8f38ffb5a90baa70f81)
* [General] Simplify editor and presentation project files [view commit](http://github.com/xenko3d/xenko/commit/90733ef068b17a90e57de252d87ac35b13c81df1)
* [General] Fixup rule for .xaml.cs files [view commit](http://github.com/xenko3d/xenko/commit/7b863475ac9a3bb326e3a4cc0f0fc55bff2b168f)
* Update .gitattributes [view commit](http://github.com/xenko3d/xenko/commit/c0bad0b4930a1986ea0a6248f933b934b43ba0f9)

Oscar Sanchez (9):

* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/ba99df0f648bcc6c4797e6e952e2e3b7fd8b425d)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/97cf64ba59189418e6b1f1b4865ad99b9bce279b)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/40893b02d4efe19052b4037926983ef49b0214aa)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/27181e881da0804be82a945bbc68f9b98742fa4a)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/08cf01d1f6bc9f54f3b123bf1dcff1d093c9f7b6)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/af19ac0d49b206a46d7e537538a2986c5dac4412)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/71e4bba482b0ce00aff7fcbda685270162645e76)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/70f01c011af426372ce0ba11d12048a166d4fa41)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/8871c1cd1606a91c663e9e35d4381f1ffe3f40ab)

Phr00t (2):

* [Graphics] Vulkan: add support for R10G10B10A2_UNorm and R11G11B10_Float [view commit](http://github.com/xenko3d/xenko/commit/11059c059d54e2d201b657cd1ab3d2981aaf7c35)
* [Input] Fix mouse VirtualButtons [view commit](http://github.com/xenko3d/xenko/commit/27e5a8ad22e95710aa7d0689ea3b85f1188a7098)

Polymo (1):

* Translated using Weblate (German) [view commit](http://github.com/xenko3d/xenko/commit/5f20b48db9d1a33e8ab04068d5be2de51be367a7)

Robin Hübner (2):

* [Physics] correct userdoc for convex hull collider parameters. ([#382](https://github.com/xenko3d/xenko/issues/382)) (fixes [#372](https://github.com/xenko3d/xenko/issues/372)) [view commit](http://github.com/xenko3d/xenko/commit/f56d4f836098f0c9fd5a39eeebffa2d7ed59a179)
* Make SDL window user resizable. [view commit](http://github.com/xenko3d/xenko/commit/582915a5b5ade7fcb4ac8b57d0de6f51fd7c978f)

Rui Mendes (3):

* Added translation using Weblate (Portuguese) [view commit](http://github.com/xenko3d/xenko/commit/a16889306f16c28d56a26a9c61d9ecf5ced71612)
* Added translation using Weblate (Portuguese (Brazil)) [view commit](http://github.com/xenko3d/xenko/commit/7fa7c670add05f14a9247d4a4930cf465f96a789)
* Translated using Weblate (Portuguese) [view commit](http://github.com/xenko3d/xenko/commit/1b5ad58fb7f2c326b80ccacf71fa4cfe77e9eb9f)

Scorp-121 (4):

* Added translation using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/f03657e6f32cc449705d647878c72189665e904a)
* Added translation using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/c19fe25619c3b8f595cdfca86433f1564e090a75)
* Added translation using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/33b30a5053a9bacc018287aed73d4bc63b4788ef)
* Added translation using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/792c5dd20b9352c751a79676898a907c7eb2c0c6)

Scorp121 (10):

* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/215f78a6647e8063607de276b365d7a415e655bf)
* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/601ac16712d758bb4d9488717b112bff5e731165)
* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/9f53f704ce42482a588065b07df628cae50ccbd2)
* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/e1906065c2939ef7dcd0db787580bacaefbec1f0)
* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/5dbfd2602618ec423e71ccdcb915935b1461c522)
* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/635d3601e0f8f6d470070e3ea7c46bebd96df3d3)
* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/ef9800de2d4994e379e755cca43773392b262e11)
* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/5b1831e073ac3ae1b4cc469ba0bc32b83fd3c38c)
* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/3e847cbd275a5543776e5b83f62f852ece38dbfd)
* Translated using Weblate (Russian) [view commit](http://github.com/xenko3d/xenko/commit/7b267f19b1c665bcbff34a079ec67c15c9aceeab)

SleepyMode (1):

* [Mathematics] Fixes for Color/ColorRGBA float/byte mismatches ([#258](https://github.com/xenko3d/xenko/issues/258)) (fixes [#251](https://github.com/xenko3d/xenko/issues/251)) [view commit](http://github.com/xenko3d/xenko/commit/81331463843bfaf6975a0e418047a208a23a7fe7)

Swann Martinet (2):

* Translated using Weblate (French) [view commit](http://github.com/xenko3d/xenko/commit/50a59d5f9d1198ac0baa20bc74691b120d87a6e8)
* Translated using Weblate (French) [view commit](http://github.com/xenko3d/xenko/commit/b6770869d8f44be8fac9dd862c7b1c6427998b43)

Tebjan Halm (6):

* Quick fix as suggested by @xen2 in chat to avoid crash in shader compiler ([#343](https://github.com/xenko3d/xenko/issues/343)) [view commit](http://github.com/xenko3d/xenko/commit/d2b09f9259c2991e3aca05122a430ae8e5f0abf5)
* Added translation using Weblate (German) [view commit](http://github.com/xenko3d/xenko/commit/5f157d19eb20b94ad179b6cac1b7fa6f97c74a4b)
* Translated using Weblate (German) [view commit](http://github.com/xenko3d/xenko/commit/20f6a80ac7e503282bfd9297e7c98be9ffed1097)
* Resetting shader key scope for multi pass materials ([#456](https://github.com/xenko3d/xenko/issues/456)) [view commit](http://github.com/xenko3d/xenko/commit/7af2c14ce63e7892d1e87c8b723936a0270eaaa7)
* added xenko-community-project to README.md ([#514](https://github.com/xenko3d/xenko/issues/514)) [view commit](http://github.com/xenko3d/xenko/commit/89f66473be89e8fd7dccd98ff75002f0309e5ce2)
* Fix DataBaseFileProvider cast ([#538](https://github.com/xenko3d/xenko/issues/538)) [view commit](http://github.com/xenko3d/xenko/commit/f678f42443a087cc16d1371a6e8119707abafa0a)

Virgile Bello (510):

* [Design] VisualStudio.Project doesn't need a reference to Solution anymore [view commit](http://github.com/xenko3d/xenko/commit/a3bbc24653bd5c64146b0cf384672f496db5069a)
* [Assets] Package can now also represent a csproj + package (only new game creation is working) [view commit](http://github.com/xenko3d/xenko/commit/1fd003ca0b7b5953d4a96ceebc50d6094722593d)
* [Assets] Removed AssetItem.SourceProject [view commit](http://github.com/xenko3d/xenko/commit/ab5281aed164b7438316fdce9f416d1ae093fa0e)
* [Assets] Move assets to Assets folder for now [view commit](http://github.com/xenko3d/xenko/commit/1653165995c724ad16cf8329bf96ac6e7145b0f7)
* [Assets] Fix project loading [view commit](http://github.com/xenko3d/xenko/commit/284cccdd2e351e84ce1000329e1f24162a21b998)
* [Assets] Simplified Package.Profiles into Package.Profile [view commit](http://github.com/xenko3d/xenko/commit/9f8f407d4d5796fc3dbf562849ec4f8ea37c1e47)
* [Assets] Removed PackageProfile.ProjectReferences [view commit](http://github.com/xenko3d/xenko/commit/62266f4a62756f5ddaf1fbfba1d6f85b87b3ed6c)
* [Assets] Removed PackageProfile.Name [view commit](http://github.com/xenko3d/xenko/commit/e21932d153708d23c0f8204b9f55734643ce6519)
* [Assets] Allow creation of samples (as long as they don't use external packages) [view commit](http://github.com/xenko3d/xenko/commit/c444d02c5ce5a0a8f86147f3e0a74b6bdcb4ea6e)
* [Assets] Added the concept of Package container (project or standalone) [view commit](http://github.com/xenko3d/xenko/commit/eb15b2caaf37ef0d99c691119fde4345c62f6f81)
* [Assets] Turned Session.Packages into a readonly collection [view commit](http://github.com/xenko3d/xenko/commit/b9e915a49cffb02fdf8b70b5be3db3533ebb5074)
* [Assets] Properly process dependency graph using remote info to perform package upgrades before downloading nuget packages [view commit](http://github.com/xenko3d/xenko/commit/1d51c472eb7622005881985916c99ab3af0e0a81)
* [Assets] Removed LocalDependencies and fixed TemplateSampleGenerator [view commit](http://github.com/xenko3d/xenko/commit/5ec594f7a9b7df1b30d24534abaffef959091bd8)
* [Assets] Fix platform update [view commit](http://github.com/xenko3d/xenko/commit/0c12372ab203fab5baa22dc78ce88b255b88f4d5)
* [Assets] AssetCompiler now works against .csproj [view commit](http://github.com/xenko3d/xenko/commit/7761135c50b7dbe9d864a982c782f8a51e61e242)
* [Assets] Fixed asset compiler get-graphics-platform [view commit](http://github.com/xenko3d/xenko/commit/afae09c147b784785b0abfafa5b01a5d2e5ddba5)
* [Assets] Fix view models to allow selection as current project [view commit](http://github.com/xenko3d/xenko/commit/0e1ad23e3216247a4d9a0b82c54a360d5786f984)
* [Assets] Properly regenerate platforms for sample templates [view commit](http://github.com/xenko3d/xenko/commit/ab92536a9daaf98c8327b1ec42ac91286501bea8)
* [Assets] Ignore assets from executable projects (computed automatically) [view commit](http://github.com/xenko3d/xenko/commit/64c251e6435eacc476bdb79f744877386ec9ed72)
* [Templates] Moved template packs assets from Assets/Shared to Assets [view commit](http://github.com/xenko3d/xenko/commit/02488c49f1c948124182322397ce21c1d3c51b27)
* [Assets] NewGameTemplateGenerator: assets were loaded twice, resulting in issues later with cloned AssetItem (fix asset packs) [view commit](http://github.com/xenko3d/xenko/commit/857b8b2e63d0385125927f68dac86eee355485a2)
* [Templates] Simplify platform projects [view commit](http://github.com/xenko3d/xenko/commit/c59381347512a9e5327b54e4051ede30a050f72d)
* [Templates] Moved templates packges asset folders from Assets/Shared to Assets and removed intermediate solution folders [view commit](http://github.com/xenko3d/xenko/commit/f11fb59e891963c3b154b5a6d1baecc6eb404c47)
* [Assets] Adjust PackageProfile.ResourceFolders during package upgrade [view commit](http://github.com/xenko3d/xenko/commit/42306db7b35351fea49a851a60c4aaabe155dca8)
* [Templates] Sample Templates now works (asset packs are now ProjectReference and their assets are properly copied during template generation) [view commit](http://github.com/xenko3d/xenko/commit/24bb053badc62769af951f55246354c1c9768aab)
* [Assets] Properly get namespace from project [view commit](http://github.com/xenko3d/xenko/commit/fe22dec3f7176a15ed19c236aee3964e942d35c7)
* [Assets] Fix CodeViewModel to use ProjectCodeViewModel [view commit](http://github.com/xenko3d/xenko/commit/b894a176aedd55b14afe3b1e5d5f0a0ec8a03e68)
* [Assets] Fix platform updates [view commit](http://github.com/xenko3d/xenko/commit/598f4656f7ca7bf16204b17039f61c95c38db0e8)
* [Assets] Rearranged templates for the new xkpkg = csproj change (note: project delete is broken) [view commit](http://github.com/xenko3d/xenko/commit/bf975595c09efc63fc0d9514c502cc510a7811ef)
* [Assets] Package.Profile is now properly deserialized by discarding default value [view commit](http://github.com/xenko3d/xenko/commit/8f017b48e11b36766c54c25c189caebc00acc7bc)
* [Assets] Removed PackageProfile.Platform [view commit](http://github.com/xenko3d/xenko/commit/68702d5b39b2fc2e94f7a1aa40a00e391b09b465)
* [Build] Make sure Package.Id stays is in sync with .sln one [view commit](http://github.com/xenko3d/xenko/commit/0b5ba025c753847d31180f8d1e9307c3a9fcbca0)
* [Assets] Removed Package.Id [view commit](http://github.com/xenko3d/xenko/commit/e59316a8d203f8dc97dced255ea631ec99a2cbd5)
* [Assets] Removed PackageProfile [view commit](http://github.com/xenko3d/xenko/commit/17d9b2688bb6dc0edbd147c1acc8ef0343031267)
* [Assets] Stop adding default folders in Package ctor [view commit](http://github.com/xenko3d/xenko/commit/f7a8e099f4a4476be0d0ad6e63fcbbf33723527d)
* [Assets] Reunified ProjectState and PackageState [view commit](http://github.com/xenko3d/xenko/commit/c5cd46ae0b7bb4800c731e4d96b92858b6cfcefe)
* [Assets] Moved Package.Save() to PackageContainer.Save() [view commit](http://github.com/xenko3d/xenko/commit/7d43032b698149c41d8d581e7291848b53273ee6)
* [Assets] Avoid creating .xkpkg for projects without one in the first place (use implicit one instead) [view commit](http://github.com/xenko3d/xenko/commit/f375ae16cbe3e8ed0f40b3a257d010d585b39197)
* [Assets] Rework package dependencies [view commit](http://github.com/xenko3d/xenko/commit/dc4ef281f38037dd96824b4c63c074a3d93118ea)
* [Assets] Also support loading sln with new csproj Guid [view commit](http://github.com/xenko3d/xenko/commit/2f446a3bb1e8f62a1d79ac0eee2c18ffca8253d8)
* [Assets] Support Packing and consuming simple NuGet packages with Xenko assets [view commit](http://github.com/xenko3d/xenko/commit/406a74c3f382756e3b3df172504e51b840dc56d9)
* [Assets] New game template: set current project to Windows [view commit](http://github.com/xenko3d/xenko/commit/56b6774374acd67ecf7f01c985524fbdba976161)
* [Assets] Simplified NuGet package restore (only happens during PreLoadPackageDependencies) [view commit](http://github.com/xenko3d/xenko/commit/2958cf0b1f38489ca2c64885d797e74699d67de6)
* [Assets] Update Code library template to match others [view commit](http://github.com/xenko3d/xenko/commit/9b1fcf2f7fc4aacdfe60d6520d1f25126cea3d81)
* [Targets] Stop using XenkoDir.cache file during build [view commit](http://github.com/xenko3d/xenko/commit/9eec7ceb0797be38a1bc5491f9c5f3b32f7097c8)
* [Build] Bump to 3.1.0.1 [view commit](http://github.com/xenko3d/xenko/commit/f933c14fea2aaaea8e98996b753cbf7b8da091f7)
* [Assets] Store pendingPackageUpgrades in PackageSession [view commit](http://github.com/xenko3d/xenko/commit/335b65354de2fdb1a331cc61c4e995c142ceaae1)
* Merge remote-tracking branch 'origin/master' into onecsproj_onexkpkg2 [view commit](http://github.com/xenko3d/xenko/commit/f8ca24d1dff7926840acb06f3d0259e02c5eeb4f)
* Merge branch 'master' into onecsproj_onexkpkg2 [view commit](http://github.com/xenko3d/xenko/commit/a22b62fae68f67e70fa881372def36194ff7ecb0)
* [Assets] Process dependencies for RootAssets in view model [view commit](http://github.com/xenko3d/xenko/commit/f608ae5598a32f0d5e9695e2b141c8271706cea0)
* [Assets] Made !file and !directory tags mandatory in Yaml for easier dependency analysis [view commit](http://github.com/xenko3d/xenko/commit/49240a819316616a230d9165e6daf1c4a8976397)
* [Assets] Temporary fixes for root assets and default scene opening [view commit](http://github.com/xenko3d/xenko/commit/e132f1b6f47e91a92bb36fb4ef6fe575d52e5ab0)
* [Assets] Pack assets using actual package data rather than hardcoded rules [view commit](http://github.com/xenko3d/xenko/commit/8b0dba7ee7fd412aeea4d3da31d29d02e392661c)
* [Build] Reorganize build system (WIP) [view commit](http://github.com/xenko3d/xenko/commit/5caacef0dc338a5b93c1124278f316c08b42e79b)
* [Build] NuGetAssemblyResolver WIP [view commit](http://github.com/xenko3d/xenko/commit/d0c771fe450c5849da21d0715b292eba253cfe0a)
* [Engine] Move default assets to individual assemblies rather than global Xenko.xkpkg [view commit](http://github.com/xenko3d/xenko/commit/051a8110383946d86c0d1c708d70d38ba0c33f63)
* [Assets] Compiler: can now properly compile existing projects [view commit](http://github.com/xenko3d/xenko/commit/4c6ca70b399fc77bb0439916bbd0f240350e13f8)
* [Launcher] Fix launcher build [view commit](http://github.com/xenko3d/xenko/commit/0869d45085a86d07a7ecf7f8a553c112755a738b)
* [Editor] Temporarily moved game studio shaders to Engine, until we have proper design-time package references [view commit](http://github.com/xenko3d/xenko/commit/34c504ea5cc0e4bca327d60a38890de0984a06c3)
* Merge branch 'master-3.0' into onecsproj_onexkpkg2 [view commit](http://github.com/xenko3d/xenko/commit/3a4e324c89c5574edb23a8a42e6d9853b37f1450)
* [Build] Use RuntimeIdentifier to separate graphics API runtimes [view commit](http://github.com/xenko3d/xenko/commit/78b6d2d6090f705f2c9c4e9f22a849a9f4bcbc1f)
* [Build] Improved cross compilation [view commit](http://github.com/xenko3d/xenko/commit/29d24fe0cde9fe6be8eb2bced3250220c4bdf22b)
* [Build] Renamed XenkoRuntime into XenkoNETRuntime [view commit](http://github.com/xenko3d/xenko/commit/3c71596cf7bca49511eb7d3c7458d7742fe2bbd0)
* [Build] Added XenkoRuntime flag [view commit](http://github.com/xenko3d/xenko/commit/79dedb747716f1860c327a040d9f9b46d20e7d99)
* [Assets] project.Type evaluation needs to be done after package are restored [view commit](http://github.com/xenko3d/xenko/commit/ed826ce2de64990215c51cd5cd84f08193e49120)
* [Assets] Reorganized templates [view commit](http://github.com/xenko3d/xenko/commit/1f269ac8b8ccdaeca0d94c8ba2555a83df90a1d7)
* [Assets] Fix package upgrader [view commit](http://github.com/xenko3d/xenko/commit/6c82ca5e10727a779bc2f5bbe77e7f5948701b3b)
* [SpriteStudio] Added templates [view commit](http://github.com/xenko3d/xenko/commit/a88632d9d361002a36933813b411b9645b5a33b9)
* [Assets] Properly find ffmpeg.exe and msdfgen.exe [view commit](http://github.com/xenko3d/xenko/commit/b55ab0c7866b655f5ee540c253b0842ee5f36272)
* [Assets] Move VHACD to Assets assembly and properly bundle C[#](https://github.com/xenko3d/xenko/issues/) wrapper [view commit](http://github.com/xenko3d/xenko/commit/6cb333fe58eefa479bf1070b0ee60f39cbf3e24c)
* [Assets] Compiler: use thread-safe version of NuGet (when writing lock file) [view commit](http://github.com/xenko3d/xenko/commit/b3c6e1205bd324095122a0dd8115ef95ab0c26fe)
* [Deps] Switched to NuGet version of Xceed.Wpf.Toolkit/Datagrid/AvalonDock [view commit](http://github.com/xenko3d/xenko/commit/5bfb575d11a8cfed5aa718c286b7d236f8c541b3)
* [Build] Bump to .NET 4.7.2 [view commit](http://github.com/xenko3d/xenko/commit/bc7ff82141756341ebb03dd238ec37dde763ca6e)
* [Build] Adjust bindings for System libraries with 4.7.2 changes [view commit](http://github.com/xenko3d/xenko/commit/3085735c11a809aaa49d26dd6344b1b5efa566fd)
* [Deps] Xenko.Metrics and Xenko.CrashReport are now packaged with NuGet [view commit](http://github.com/xenko3d/xenko/commit/e5071464546d294a2e84fa09027448bb532378d8)
* [Build] Lot of adjustments for new NuGet resolver system (incl ConnectionRouter, VS Package, etc...) [view commit](http://github.com/xenko3d/xenko/commit/cee640deef9b3d107f5143875a5762546f25d42b)
* [Samples] Moved samples from Xenko.Assets.Presentation to a dedicated project to have faster rebuild [view commit](http://github.com/xenko3d/xenko/commit/501524287b29a18a84c2a0f9f6e5b4cc76a200a4)
* [Assets] Some improvements so that unit tests can compile [view commit](http://github.com/xenko3d/xenko/commit/4944a4e454169feb424a1413dc21c496940de720)
* [Assets] Some improvements so that unit tests can compile [view commit](http://github.com/xenko3d/xenko/commit/e7084d5bdf39a3ff44707058afab75c07a023160)
* [Build] Removed XenkoDir environment variable [view commit](http://github.com/xenko3d/xenko/commit/b7fc19edab35ea9a479c681684fa9d48d44fd6c0)
* [Assets] Fixed templates to have proper assembly names and namespaces [view commit](http://github.com/xenko3d/xenko/commit/63b14a1635b44b5a98c686e4522b1a1160025b26)
* [Build] Readded support for UWP [view commit](http://github.com/xenko3d/xenko/commit/d16b2d23b560bccef44ec9e2aa77bc8e3c09b640)
* [Build] Readded support for Android [view commit](http://github.com/xenko3d/xenko/commit/52728eb895d08bb05015e487dbc40f2c7cfbecbf)
* [Build] Readded support for iOS [view commit](http://github.com/xenko3d/xenko/commit/8f3e11cdb373b6204b639abe653c330c9563ceca)
* [Build] Optimized ProjectReferences [view commit](http://github.com/xenko3d/xenko/commit/aab0909e384ee393080177aaea52df929eb70856)
* [Build] Check Visual C++ Runtime is properly installed as part of build targets [view commit](http://github.com/xenko3d/xenko/commit/47f326f76a4d1cb120f6954c9c134cc393b33544)
* [Build] Added Xenko.PackageInstaller to Xenko.GameStudio [view commit](http://github.com/xenko3d/xenko/commit/785ba220e7bb651a9d8bcc5d117adec6acd27bc2)
* [Build] Use "XenkoPlatforms" to specify which platforms to build [view commit](http://github.com/xenko3d/xenko/commit/784b9c988f8970feef94e0fcd74098396d4d169a)
* [NuGet] Upgrade to 4.9 and use RestoreRunner to have faster noop restore on second run [view commit](http://github.com/xenko3d/xenko/commit/9b985d4f134670018726c689638edeb5c0c0fb65)
* [Tests] Fix build of some test projects [view commit](http://github.com/xenko3d/xenko/commit/c4e21cc9beb9adbe5225d5f6b1d10a7311ed0959)
* [Build] Also deletes .nupkg.metadata on package auto deploy (https://github.com/NuGet/Home/wiki/Nupkg-Metadata-File) [view commit](http://github.com/xenko3d/xenko/commit/99d6bfa23f96c9994b15bf34b15eef9c3bfc6a46)
* [Build] Make sure user projects are always built so that compiler app is checking assets again (until we feed "fast up to date" with proper inputs/outputs) [view commit](http://github.com/xenko3d/xenko/commit/764fe201c9d8ac12546e808a70c67aa79f34965f)
* [Assets] Make sure to explicitly include Xenko.Core for its targets until VS2019 enables it by default (https://github.com/NuGet/Home/issues/6091[#](https://github.com/xenko3d/xenko/issues/)issuecomment-438073285) [view commit](http://github.com/xenko3d/xenko/commit/5f5e668711f4a1af454787445e1991f4bcc3128f)
* [Assets] Don't include package targets when evaluating project files [view commit](http://github.com/xenko3d/xenko/commit/15ea5060978a1c78cef840c999197c164d80cbcf)
* [Assets] Order windows executable project first in solution files (sln) so that VS uses them as startup project by default [view commit](http://github.com/xenko3d/xenko/commit/b226444233e0fefec0e8868967e5d1ab4b2f27a4)
* [Build] Added some docs related to new build system [view commit](http://github.com/xenko3d/xenko/commit/50412ba3a7dad76e9f3c3147a183932b3f488e9d)
* Merge remote-tracking branch 'origin/master' into onecsproj_onexkpkg2 [view commit](http://github.com/xenko3d/xenko/commit/be8bb7ddd8fff36c3f2abbb4404f442848f0ea00)
* [Build] Fix iOS solution [view commit](http://github.com/xenko3d/xenko/commit/4740daa7263939fafb428d941843c2348c18192b)
* [Build] Moved PackAssets task in Xenko.Core.Tasks [view commit](http://github.com/xenko3d/xenko/commit/76b3c857a63d5ce5a7a1e237eceec620ac982c90)
* [Build] Use PackAssets as an exe rather than a Tasks so that MSBuild doesn't lock the files (annoying when rebuilding) [view commit](http://github.com/xenko3d/xenko/commit/aae4951f4dae45192ed079d3b4810c9a34715057)
* [NuGet] Log everything [view commit](http://github.com/xenko3d/xenko/commit/8e01c197185fce13f9cde3fe9d55fb48bbdf5d28)
* [NuGet] Restore inside assembly resolver to avoid deadlock and rewrote logging code [view commit](http://github.com/xenko3d/xenko/commit/99397c68e73ddb60fd253d8d3e8bdf2ef9833c83)
* [Build] Only build default graphics platform when opeining sln unless we explicitly set XenkoGraphicsApiDependentBuildAll [view commit](http://github.com/xenko3d/xenko/commit/a4ced9d064ff3bff2b6a3fc069516a9623257a96)
* [NuGet] Perform nuget resolve only for entry assembly [view commit](http://github.com/xenko3d/xenko/commit/0280495034930e4f84d55a6ae5945ae4b6d043c7)
* [Assets] Better resolution of project platform (needed so that windows project is auto selected) [view commit](http://github.com/xenko3d/xenko/commit/025f2fedbe1ebf73927fcf89d641593e9879c0bc)
* [Build] Fix build when choosing a single graphics API [view commit](http://github.com/xenko3d/xenko/commit/091ddeb2f1de3191058f64381420a7452633d8d2)
* [NuGet] Add dev store before trying to restore packets [view commit](http://github.com/xenko3d/xenko/commit/95f15bd884002a4fe3ade0ac34b33e9489c5d1dd)
* [Build] Removed Xenko.xkpkg [view commit](http://github.com/xenko3d/xenko/commit/0032576a4b45e8309304e4d0409783b9db2d7b31)
* [Build] Moved PackageUpdateVersionTask to a separate assembly to simplify build [view commit](http://github.com/xenko3d/xenko/commit/75ea086465b4821afc20d1d96d759629d3e40ed3)
* [Build] Unify version management in a single file (except for samples which will be versioned separately) [view commit](http://github.com/xenko3d/xenko/commit/a3d3173539631d81a91c11e9af5e3af4f561e997)
* Merge remote-tracking branch 'origin/master-3.0' [view commit](http://github.com/xenko3d/xenko/commit/59290e7e19a24127f3198d5bf036c4aff3940ed6)
* [Build] Added package details [view commit](http://github.com/xenko3d/xenko/commit/be22cdf0eab1b07e1c9ded3dcc59f33e7c0fae58)
* [Build] Output nupkg in bin\packages [view commit](http://github.com/xenko3d/xenko/commit/aea71ef4fb4f254fe992ae4d274d4820e97f5858)
* [Build] Xenko.Samples.Templates: add missing dependency [view commit](http://github.com/xenko3d/xenko/commit/a92d5b806de8921062e06c739d1be688974ac93c)
* [NuGet] If restore failed, try to kill known blocking processes (Connection Router, CompilerApp, etc...) [view commit](http://github.com/xenko3d/xenko/commit/f0341a72d5ee359b36ffcad8dc18d009689ff232)
* [NuGet] Improve logging if restore failed [view commit](http://github.com/xenko3d/xenko/commit/7793e1f757189e811b5692c8ed750ef314548aa5)
* [Build] Remove non-existing files from Xenko.sln [view commit](http://github.com/xenko3d/xenko/commit/881c97faa32e192088e894e22d473d8c3bed2a37)
* [NuGet] Use SourceCacheContext to avoid ArgumentException [view commit](http://github.com/xenko3d/xenko/commit/b82520bc82da27d45737b577c64d512e326c2e37)
* [Build] Sign dll/exe when building package [view commit](http://github.com/xenko3d/xenko/commit/f6761691c7a6234d7cc9b216fa2719d174ebad7e)
* [Build] Also sign Launcher executables [view commit](http://github.com/xenko3d/xenko/commit/5e7e804b7227d58f6b23dab86734596c84b12032)
* [Build] Escape/Unescape XenkoPlatforms for properly passing info from Xenko.build to targets [view commit](http://github.com/xenko3d/xenko/commit/f3b67810b6c507836eb965497ddea3589ebaea38)
* [Build] Package build improvements [view commit](http://github.com/xenko3d/xenko/commit/badb44c405fecc63fae347361b69b8e3327b3ba7)
* [Build] Package build improvements (part 2) [view commit](http://github.com/xenko3d/xenko/commit/32eb5b3dcadb524f6ace77d6a39a672d73e31888)
* [Build] Signing tool was mistakently always enabled [view commit](http://github.com/xenko3d/xenko/commit/24799e4e5bc0e48f43f2d8100adbdbf0c27f7d1c)
* [Build] Package build improvements (part 3) [view commit](http://github.com/xenko3d/xenko/commit/15a05d9a3d1a55c396605b7c6afaaa3fc3dbdc2f)
* [Setup] Update to Advanced Installer 15.5.1 [view commit](http://github.com/xenko3d/xenko/commit/7a6b1de0bd20bf295abe2f9bbb4a0586907e7de2)
* [Build] Remove invalid character from Xenko.build [view commit](http://github.com/xenko3d/xenko/commit/d46658b539c179ce64fda5d81726c55871d93d9c)
* [Build] Fix Linux Vulkan build [view commit](http://github.com/xenko3d/xenko/commit/0703befb94b32162d3bfd7e6c5f686ee936f4890)
* [Build] Added bin/packages/.gitignore file [view commit](http://github.com/xenko3d/xenko/commit/dfb2deb9e018ed785c8d6d25653ad1a8ca3405b8)
* [Build] Fix restore phase in Xenko.build [view commit](http://github.com/xenko3d/xenko/commit/1fcbd1d3f02cd3bd6f5f30fd498a480f1489ff14)
* [Build] Removed Xenko.SamplesBootstrapper and fixed Xenko.Samples.Tests [view commit](http://github.com/xenko3d/xenko/commit/53ce6d3433cf02c51921e673afd3430177c2bbcc)
* [Samples] Fixed Xenko.Shaders.Tests [view commit](http://github.com/xenko3d/xenko/commit/28c1b8238b9f8d2f1304690431cda729ef16261b)
* [Build] Use active build configuration rather than forcing Debug [view commit](http://github.com/xenko3d/xenko/commit/51b613f7e84c2e0573c2201467af15fd1ab87b0d)
* [Build] Stop using Bin\Windows for unit tests [view commit](http://github.com/xenko3d/xenko/commit/f5b0a52848498fb589e4428d01aef1e09829c362)
* [NuGet] Couldn't resolve EnvDTE.dll [view commit](http://github.com/xenko3d/xenko/commit/13ba08cc9a453934b9a1e5cca20761b2b8691535)
* [Assets] Don't try to load vcxproj as package [view commit](http://github.com/xenko3d/xenko/commit/303cf2421482d7b33cd78803e4afecf03532325d)
* [Samples] PhysicsSample: Update for Vector3 Gravity [view commit](http://github.com/xenko3d/xenko/commit/31e2160d495ebb7225482727e9eab5187e28eb7b)
* [Tests] Xenko.Assets.Tests: Don't compile assets [view commit](http://github.com/xenko3d/xenko/commit/9f35d82f7e742f422accfac482983c20396b170b)
* [Tests] Fixed some unit tests [view commit](http://github.com/xenko3d/xenko/commit/404b6d4ea4f6a99776696e3c4759434be699900d)
* [Tests] Fixed folder for gold image [view commit](http://github.com/xenko3d/xenko/commit/d386ff3c657d0e86e2d3e609775a3acb2371cdd7)
* [Launcher] Ignore server-side dev packages [view commit](http://github.com/xenko3d/xenko/commit/df6aae5a00f602febbfb1e64fe4a5bbd22112836)
* [Assets] Fixed TestBasicPackageCreateSaveLoad [view commit](http://github.com/xenko3d/xenko/commit/aa227b3f413ee0f121cfe11fdc6bc3487d5e7323)
* [Assets] Package upgrade is now working for 3.0 projects [view commit](http://github.com/xenko3d/xenko/commit/c1904fc846dd801426dc9b07eeada6df3db8ab38)
* [NuGet] Update to NuGet 4.9.1 [view commit](http://github.com/xenko3d/xenko/commit/5580bf789adf83eda621e1d86f17fd38dbeb3005)
* [Launcher] Ignore invalid NuGet sources (404, 401, etc...) [view commit](http://github.com/xenko3d/xenko/commit/4941fdab8c25374f31af5442b271cc3654c02849)
* [VSPackage] Fix build of test project [view commit](http://github.com/xenko3d/xenko/commit/109eed72e3f5ce6e495f8f90ca888fc92025c01c)
* [Launcher] Bump to 3.0.1 [view commit](http://github.com/xenko3d/xenko/commit/e446678a90fc839feba266043f22bbe09bc21cca)
* [Assets] User can now create GameSettings freely (need to display warning if nothing matching expected name?) [view commit](http://github.com/xenko3d/xenko/commit/16eb04e22cefe62c30f1984b12e602ad9c00617f)
* [CompilerApp] Removed unused GetGraphicsPlatform code [view commit](http://github.com/xenko3d/xenko/commit/d6b6a33fa3174ee1ca29bde3d4167cb28df471e8)
* [Build] Removed obsolete target files [view commit](http://github.com/xenko3d/xenko/commit/90ce1a0f9c8605ade31504cb7c76eb3905ff1eaf)
* [Build] Xenko.build now properly build Launcher [view commit](http://github.com/xenko3d/xenko/commit/8ab5690bc3ae0dddec39d5089a16523f33bd9f83)
* [Build] Switching unit tests to new targets [view commit](http://github.com/xenko3d/xenko/commit/79740098ab6fe979bb1eeabad8e03a7b095a92a6)
* [VSPackage] Fix Xenko.build targets [view commit](http://github.com/xenko3d/xenko/commit/6005e95fdbd5137a18ced5d0b6ed803e8e88c906)
* [Build] Clean packages before full package build [view commit](http://github.com/xenko3d/xenko/commit/b498691b12862d3b467875d530554334c90b32b1)
* [GameStudio] Asset editors close button is back [view commit](http://github.com/xenko3d/xenko/commit/a006a76566cb00a7579dd592a259cc775c2d4e70)
* [Graphics] Removed PreferredGraphicsPlatform from RenderingSettings [view commit](http://github.com/xenko3d/xenko/commit/fa1acae4e5ebc8eae7342d51b0880c1a29409dd4)
* [VSPackage] Fix build when using multiple XenkoPlatforms [view commit](http://github.com/xenko3d/xenko/commit/9db1b347eed5b78103a04be024995b3a6bc0fff1)
* [Build] Adjust package versioning so that NuGetVersion doesn't contain build metadata [view commit](http://github.com/xenko3d/xenko/commit/4bd757dffbf8b128b33366f5270e2912853e9a58)
* [Native] Explicitly require related Assembly when loading native library (we can't use GetCallingAssembly as it might be wrong due to optimizations) [view commit](http://github.com/xenko3d/xenko/commit/f4a5489254dcdf690b3890ad4fcfc256db31565d)
* [Native] PreloadLibrary: Use type rather than assembly (to avoid use of GetTypeInfo() everywhere) [view commit](http://github.com/xenko3d/xenko/commit/23bd86129b3730ded7d7d4d62910d0c7da12e4c9)
* [GameStudio] About page: added markdown files to package [view commit](http://github.com/xenko3d/xenko/commit/a47f7f2dc63ff4e55ba9b471cf969b5353bce524)
* [Launcher] Few fixes so that launcher properly separate [view commit](http://github.com/xenko3d/xenko/commit/2bd13008907d550bcf2a294c301e09719ed201e6)
* [GameStudio] About page: display version with build metadata [view commit](http://github.com/xenko3d/xenko/commit/6a5ce5ad0fd8dbc5bbb3f9bb47207e41ce1c2c74)
* [Build] Force cross-targeting if there is multiple RuntimeIdentifiers [view commit](http://github.com/xenko3d/xenko/commit/c5ed27a84874d885fa2d0b2e60aafe59b81175db)
* [Launcher] Stay compatible with Xenko 1.x/2.x [view commit](http://github.com/xenko3d/xenko/commit/ec0771e60f4083bd9b4c4791baebfaacac32dd30)
* [Build] Properly fix how RuntimeIdentifier is used for multi graphics API per platform [view commit](http://github.com/xenko3d/xenko/commit/2000eb74fb2a39634b5d3b387556e10a388f0740)
* [Assets] Solution file was generated with empty DefaultVisualStudioVersion [view commit](http://github.com/xenko3d/xenko/commit/a8c35f29e5462e969b4daa5d74307efd8f8ee5f6)
* [OpenTK] Use win7 runtime rather than win [view commit](http://github.com/xenko3d/xenko/commit/fa0d1d943fd580d09e1e07899ca558063dbe9f06)
* [Assets] Made DefaultVisualStudioVersion public again [view commit](http://github.com/xenko3d/xenko/commit/e6ce005ec91ee47d55342a25f59a348fda11c654)
* [Build] Properly forward XenkoGraphicsApiDependentBuildAll [view commit](http://github.com/xenko3d/xenko/commit/89424e04065f9f9e5eb140512ea86b51a1e36fff)
* [Build] Workaround: Remove RuntimeIdentifier from Solution references (https://github.com/onovotny/MSBuildSdkExtras/issues/139) [view commit](http://github.com/xenko3d/xenko/commit/88669a587ceea407551487987dedb4e22b9cd13a)
* [Assets] Make sure solution/project path use backslashes [view commit](http://github.com/xenko3d/xenko/commit/f6fdfa550d3eed3c12a13874fa9fa616eda5e22f)
* [Particles] Remove ambiguities in data member order [view commit](http://github.com/xenko3d/xenko/commit/053fb654b76e90672406778f9337fdcbb18adf00)
* [Assets] Keep solution folders, just remove package info [view commit](http://github.com/xenko3d/xenko/commit/703ee5724dd9ee79bfb47347f7323d94e8c89b6d)
* [Assets] Improve package upgrade when there is no ProjectReference [view commit](http://github.com/xenko3d/xenko/commit/0f827539dd1be57298fe85e5d8fd9eec308686c5)
* [Samples] Updated samples [view commit](http://github.com/xenko3d/xenko/commit/3d49f37f9f1de1a9a62acddaa1db3f05592c38e9)
* [Samples] Removed Xenko.Navigation where not needed [view commit](http://github.com/xenko3d/xenko/commit/13abf567db8a55d2402bdbb70e0964db5c106412)
* [Samples] Removed Xenko.Physics where not needed [view commit](http://github.com/xenko3d/xenko/commit/725264bb6a7578e4c7ab26ce702c5080642fc2f2)
* [Assets] Make sure implicit packages have IsDirty set to false when loaded [view commit](http://github.com/xenko3d/xenko/commit/fb7296bf7131e47d779a2534f57d612de44756c5)
* [Assets] Fix asset upgrade [view commit](http://github.com/xenko3d/xenko/commit/bea53b99a317851fca271153514b22225d4cdad9)
* [GameStudio] Fixed template samples generator to work with updated project format [view commit](http://github.com/xenko3d/xenko/commit/aaf3ce5635dd9e393d9458ef08f886ba4bed3a3a)
* [Samples] Updated with 3.1 (step 2) [view commit](http://github.com/xenko3d/xenko/commit/794061c497d034d984fc5cad28608fa292b61de4)
* [Samples] Keep Xenko.Particles for now, until we have better extensibility in Graphics Compositor [view commit](http://github.com/xenko3d/xenko/commit/c2b417c8e8998ca1df16ad4101fefae9f0fca44f)
* [Assets] Allow some assets to be non-referenceable (asset name collision is allowed in this case because they exist only at compile-time). This is used for scripts, otherwise they can't have same name as an asset. [view commit](http://github.com/xenko3d/xenko/commit/772c37b0ebf0853cc0e121ed2c4538aaeba5ca06)
* [Assets] PackAssets: skip excluded files [view commit](http://github.com/xenko3d/xenko/commit/98a908be2ee6134879306972ac05608d2bd11f69)
* [Settings] Remove the !file when serializing setting keys [view commit](http://github.com/xenko3d/xenko/commit/399f5f2b7435777ad909a201372f7d8cd74ee975)
* [Build] Package necessary WindowsAPICodePack assemblies with Xenko.Core.Presentation.Dialogs [view commit](http://github.com/xenko3d/xenko/commit/fbb99ceaed4b06f38886ecc5893be24973161003)
* [Build] XenkoPlatform was not properly set for Linux platforms [view commit](http://github.com/xenko3d/xenko/commit/73f6cab9396d7880cf99d9697fa270e9505d3431)
* [Assets] PackageUpgrader: react to multiple package names (to support renames and/or package splits in multiple parts) [view commit](http://github.com/xenko3d/xenko/commit/2e0bbe3f005c20779af718c57adab5a09b6efe12)
* [GameStudio] Improve default asset selection to match opened asset editors [view commit](http://github.com/xenko3d/xenko/commit/68add353023da54323eaa6ea1fe9de297dc91efd)
* [Assets] Compiler: Move default asset build path to obj\xenko\assetbuild [view commit](http://github.com/xenko3d/xenko/commit/168e038bc76d1ff14198c7c3c3271aa4b1b888fd)
* [Build] Changed dev/beta versioning to permit upgrading between interleaved dev and beta releases (betaXX.YYYY format with XX = asset version and YYYY = git height) [view commit](http://github.com/xenko3d/xenko/commit/4ab3006e1a12a986184d89fe9f8762545a51741c)
* [Build] Generate ref folder for all platforms (otherwise Android/iOS/UWP might fallback to ref/netstandard2.0 of Linux) [view commit](http://github.com/xenko3d/xenko/commit/7e1adcdc5db0a4a218a12a09c677cfe918e78e4b)
* [Build] Fix Android build due to lack of NuGetRuntimeIdentifier [view commit](http://github.com/xenko3d/xenko/commit/a2e151a368275f5404919df3e5d95c23c781c68c)
* [Templates] Remove the _Game from sample templates [view commit](http://github.com/xenko3d/xenko/commit/5467379f14c53af82f7af9685803f6843c524831)
* [Build] Adjust PackageVersion for sample templates according to XenkoOfficialBuild rather than XenkoPackageBuild [view commit](http://github.com/xenko3d/xenko/commit/916d0741208acb626e8abfa2e5f27422e295f75b)
* Updated BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/2c9e6ebe08e24b74c5b825feb3906b9c3add6ff4)
* [Launcher] Display source in tooltip for Xenko downloads [view commit](http://github.com/xenko3d/xenko/commit/2eba4659510149fee35030269f1b062a617ede05)
* [VSPackage] Various fixes so that shader highlighting/goto works [view commit](http://github.com/xenko3d/xenko/commit/84bad0265a2a74c350bc01bc8ee27efcdcd94168)
* [Build] Updated UWP to use uap10.0.16299 [view commit](http://github.com/xenko3d/xenko/commit/1b076cad683134e9aac8396ff60dff605c28fc91)
* [UWP] Simplified some code (can now use Thread and other newer API) [view commit](http://github.com/xenko3d/xenko/commit/48dddcf52dbc0734a588868c3fe66eb4d1e3bd86)
* [Build] Hide Microsoft.NETCore.UniversalWindowsPlatform from references and update build doc [view commit](http://github.com/xenko3d/xenko/commit/93fe58ec04a7c2a7df063aea8ef065ebcca62044)
* [Build] Fix Xenko.Shaders.Tests name [view commit](http://github.com/xenko3d/xenko/commit/a8f09bc21acd2b1b67e359ad448cc97608a336a8)
* [Assets] New Game template was not properly copying asset package files [view commit](http://github.com/xenko3d/xenko/commit/7c9e3a3969074bc9aa0e91c7c464464e8e53122f)
* [GameStudio] Use same build folder for game studio as for actual game build [view commit](http://github.com/xenko3d/xenko/commit/3b042d9212954224b2bf54b8d9c4ba808411c0c7)
* [Templates] Fixed Linux template [view commit](http://github.com/xenko3d/xenko/commit/af3c9a957103c2a0fce56460d69d5e64e53a211a)
* [Templates] Fixed UWP template [view commit](http://github.com/xenko3d/xenko/commit/37ffe2ee40e47f665f7b329f06634fa9c48d569c)
* [Build] Use win instead of win7 runtime identifier [view commit](http://github.com/xenko3d/xenko/commit/799442a9778a9431f4eee1aadd5a4a69e1aabab9)
* [Templates] Additional fix for Linux template [view commit](http://github.com/xenko3d/xenko/commit/11f3b066cfc91021ef04eeebf8c87c3edd6a1390)
* [Templates] Linux: adjust default runtime identifier [view commit](http://github.com/xenko3d/xenko/commit/c681063eeca3eefe7c8eac6dfc3032d4d658652b)
* [Launcher] Various fixes for downloading and error reporting [view commit](http://github.com/xenko3d/xenko/commit/6c21e9ac03df9a95352fce6ff489d7d25dc5ced4)
* [Launcher] Bump to 3.0.4 (3.0.3 was built with incorrect source changes) [view commit](http://github.com/xenko3d/xenko/commit/e2b7b271707b780830256ead6765b7a94013e56e)
* [VSPackage] Fix NuGet assembly resolve (avoid infinite loop) and handle properly non-Xenko solutions (fixes [#298](https://github.com/xenko3d/xenko/issues/298)) [view commit](http://github.com/xenko3d/xenko/commit/8e98e23c24e14c41deee8457c811055d6c2dec69)
* [Editor] Properly report solution load/save exception to log [view commit](http://github.com/xenko3d/xenko/commit/1844890dcc1fa6135ed9e91cf256df45387f3f0b)
* [Reflection] Rewrote part of AssemblyContainer to handle deferred loading [view commit](http://github.com/xenko3d/xenko/commit/db83d963a4890e2055445820be23462af234156f)
* [Build] Updated to MSBuild.Sdk.Extras version 1.6.65 (compatible with VS2019) [view commit](http://github.com/xenko3d/xenko/commit/5a7ed9624b5470c6a32ea319dc99e9a7bfd3d7a4)
* [Build] Use $(RoslynTargetsPath) rather than $(MSBuildBinPath)\Roslyn (which doesn't work with VS2019) [view commit](http://github.com/xenko3d/xenko/commit/ee195bacfb8315a170c7a59e59a5bce28fed68d9)
* Change link+badge for chat from gitter to discord [view commit](http://github.com/xenko3d/xenko/commit/6ac74bb680b17c22249f3c0c76b5b36f13328787)
* [Build] Use netstandard2.0 version of OpenTK [view commit](http://github.com/xenko3d/xenko/commit/363f0aaf3e33737ffabc30e9a94179b7e7a2299f)
* [Build] Switch to netstandard2.0 wherever possible for the runtime [view commit](http://github.com/xenko3d/xenko/commit/2213f133744fa821d710e343e59d82ba5622f7d7)
* [Build] Switch game projects to use netstandard2.0 [view commit](http://github.com/xenko3d/xenko/commit/ad4a6be79bf857e4187b6fb84de06044fe11281e)
* [Build] Fix Windows+Linux build [view commit](http://github.com/xenko3d/xenko/commit/1b6cc924336fcf5a60b5c060bf515dad5b61f5ea)
* [Build] Hide Microsoft.NETCore.UniversalWindowsPlatform from references and update build doc [view commit](http://github.com/xenko3d/xenko/commit/40c54176783fae99fdc045dec81a662009c94ab0)
* [Build] Fixed build of RenderDocPlugin [view commit](http://github.com/xenko3d/xenko/commit/574149f757cc3491e3be5a636ff6d14a194e9fda)
* [Build] Additional fixes for single 3d graphics API build mode [view commit](http://github.com/xenko3d/xenko/commit/b5f8ea2bd99a9c0cff6618e90521974bb2e50e09)
* [Templates] Patching of TargetFramework section is now forcing netstandard2.0 [view commit](http://github.com/xenko3d/xenko/commit/e45f1721b3a202463ef821308ebf5221db079ad2)
* [Templating] Switch to latest version of Mono.TextTemplating (t4) and add reference to netstandard [view commit](http://github.com/xenko3d/xenko/commit/a9999320f08001c0ae9c6a077411b5c936d8f5cc)
* [Build] Various fixes for .NET Standard build [view commit](http://github.com/xenko3d/xenko/commit/4780b504bdb6f3277744c96632e2862fc8a55dd6)
* [Build] Bump Android SDK version from 5.0 to 8.1 (Google Play recent requirement for new app and .NET Standard 2.0 also requires 8.0+) [view commit](http://github.com/xenko3d/xenko/commit/8e38e7f907ac32c25846335291e26004b7ea9258)
* [Build] Force references to be added only for direct and explicit package references [view commit](http://github.com/xenko3d/xenko/commit/be7dcfb571439940cabf8c60fc1590a1bc29b05f)
* [Build] Properly forward XenkoGraphicsApi when building a single graphics platform [view commit](http://github.com/xenko3d/xenko/commit/e1384ebe811fe6aa2e7f3d2c8e3aabb4f79e7d97)
* [Build] Make sure to override RuntimeIdentifiers on UWP otherwise it builds all CPU versions and result in write conflicts [view commit](http://github.com/xenko3d/xenko/commit/a86d1de46afa610626e260f8f7c392eb361cb676)
* [Build] Use "any" instead of "win" [view commit](http://github.com/xenko3d/xenko/commit/5a8f870e976487be43412d34f7116debaa6286a1)
* [Build] Make sure "win" is the default when building a netstandard2.0 reference (to make sure a RID-specific project always use RID) [view commit](http://github.com/xenko3d/xenko/commit/1f69960fa376151974703a9f85e4ff291d1f0481)
* [Build] Define output path (otherwise using a Platform might override them) [view commit](http://github.com/xenko3d/xenko/commit/b55b9ec84704c736ba09499aa5bb93afefc9b8ce)
* [Build] Properly setup RuntimeIdentifier if it was not a Graphics-API-specific one [view commit](http://github.com/xenko3d/xenko/commit/1d59bce041a59622862ff201248444eeb41721f6)
* [Build] Pack Xenko assets as part of NuGet packaging [view commit](http://github.com/xenko3d/xenko/commit/23d088ee3aca90a49019ae11b486e57ffc976cbe)
* [Build] Fix the NuGet publish build file [view commit](http://github.com/xenko3d/xenko/commit/3376e62deae026e113e0fc6eb423879ebc061462)
* [Build] Removed unnecessary solution references [view commit](http://github.com/xenko3d/xenko/commit/1bf755e20fd9ba26cabee8fe8d1d8a560be4fd74)
* [Build] Properly compute & restrict RuntimeIdentifier for ProjectReference [view commit](http://github.com/xenko3d/xenko/commit/1bd1525db64ee6956d336f01f3280f62c275c59d)
* [Build] Better detection of default RuntimeIdentifiers [view commit](http://github.com/xenko3d/xenko/commit/d6711de18adf9bb06a77a00cc674f66b7b0c1865)
* [Build] Fix RuntimeIdentifiers detection for graphics API mode [view commit](http://github.com/xenko3d/xenko/commit/f25b105a0765c30dcf277a6dfec749b466a8cff7)
* [Build] Adjust RuntimeIdentifier and XenkoPlatform detection [view commit](http://github.com/xenko3d/xenko/commit/855d27e26b109e9884c916beb6ae1ea1a8262989)
* [Launcher] Remove custom Http code and decrease concurrency (which might be problematic since our packages are bigger than average) [view commit](http://github.com/xenko3d/xenko/commit/affdb7232c8634c23065db2a7beb7b1aa9c73478)
* [Launcher] Switch from gitter to discord [view commit](http://github.com/xenko3d/xenko/commit/a38afda0ffc7d941ef8d1973b5d49e6087310820)
* Updated BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/51ff4ead560002119a0d588c659759ef747bf160)
* [Launcher] Bump to 3.0.5 [view commit](http://github.com/xenko3d/xenko/commit/2b9fbe39afcdc70c760d0aa831091c4028f50817)
* Update Crowdin configuration file [view commit](http://github.com/xenko3d/xenko/commit/a9352737ddefbf1ff321a9b6fee25d130052ca98)
* Update Crowdin configuration file [view commit](http://github.com/xenko3d/xenko/commit/a528cff46bf93dbf89d66e8b74d37906f800a83c)
* [Launcher] Skip unlisted packages, and don't use cache [view commit](http://github.com/xenko3d/xenko/commit/a0459e31eee3c0f649097d812f23c09883169199)
* [Launcher] Also use normal output data for error output of PackageInstall.exe [view commit](http://github.com/xenko3d/xenko/commit/8608ff091cae91a2f740e5523e09c0d27b7d6476)
* [Physics] Enable PhysicsShapesRenderingService only if there is a IGraphicsDeviceService [view commit](http://github.com/xenko3d/xenko/commit/eba446713da62822a110f9eda5ef3253818233dd)
* Update BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/b6333f3285d891bda4053146a0e32a19feedaae6)
* Merge remote-tracking branch 'origin/master-3.0' [view commit](http://github.com/xenko3d/xenko/commit/b54f35afaf7eb520b2897516e64633e4b2c99297)
* [Physics] Add comment for PhysicsShapesRenderingService creation [view commit](http://github.com/xenko3d/xenko/commit/94cb4b1c490ee4fdcce94b29e34f1fc9509dea23)
* [Build] Added option XenkoPublishSkipSamplesTemplates [view commit](http://github.com/xenko3d/xenko/commit/dffa6ee4d0887db64304615f8a59a43a4ac588b8)
* [Build] Adjust platform detection (broken for multiplatform) and preparations for OSX [view commit](http://github.com/xenko3d/xenko/commit/9c3fa42f753a619d12d78c8c9d08b3e67e3fe150)
* [Build] Additional fixes for computing runtime identifiers [view commit](http://github.com/xenko3d/xenko/commit/dcf310f81ddb356f28f5d219e9cd35cd3eee37ed)
* [Build] Further fixes for computing runtime identifiers [view commit](http://github.com/xenko3d/xenko/commit/6542d92acee67b183d8a92c442e8c769d2cdda4c)
* [Build] Run Visual C++ checks only on .NET Framework MSBuild [view commit](http://github.com/xenko3d/xenko/commit/68bfba4cfce380b4ebc42541dbc70a025716c95e)
* [Build] Additional setup for macOS build [view commit](http://github.com/xenko3d/xenko/commit/33fea75c991f8974854c37fb7e533fa8008882e7)
* Merge pull request [#323](https://github.com/xenko3d/xenko/issues/323) from Kryptos-FR/feature/l10n [view commit](http://github.com/xenko3d/xenko/commit/f719acaecdaf93e52f3e547156ca04158642f7e9)
* [Build] Native: Generate only x64 for macOS (.NET Core only supports x64) [view commit](http://github.com/xenko3d/xenko/commit/fc6e267cadc795fbb47b961f46696e3134d2f746)
* [Graphics] Update to SDL 2.0.9 [view commit](http://github.com/xenko3d/xenko/commit/19f3fdcaec44e2e7a67bc8a4f171ae7a12b9929e)
* [Graphics] SDL: Load from proper directory [view commit](http://github.com/xenko3d/xenko/commit/ae63fcf683e5ba830ae5318407f5c839c43f07bf)
* [Shaders] Added macOS glslangValidator [view commit](http://github.com/xenko3d/xenko/commit/76cd37b15b0e87324e73e28b8aa6193ae06152d1)
* [Shaders] Vulkan: Add "NoSampler" to reflection [view commit](http://github.com/xenko3d/xenko/commit/cd609ad45f10c4e6587ebb87f635d4e6516c6143)
* [Core.IO] Disable LockFile code from macOS (not supported) [view commit](http://github.com/xenko3d/xenko/commit/661bd8513bb2e6aeae4e141c42322bc33568d8d7)
* [Core] Copy native libs for more platforms, and only if CopyLocalLockFileAssemblies is not set to false [view commit](http://github.com/xenko3d/xenko/commit/66ba0cd28404bb4fad91658ae177e119bf820336)
* [Build] macOS: Update NativePath to latest version [view commit](http://github.com/xenko3d/xenko/commit/6e12e806905dbb43e811688de643e78c6db2c3c7)
* [Graphics] Update SharpVulkan (works on OSX and easier to access NativeHandle) [view commit](http://github.com/xenko3d/xenko/commit/6522836725d9d693634c074969b958f61188442e)
* [Graphics] macOS: Added MoltenVK [view commit](http://github.com/xenko3d/xenko/commit/897a5ac1e8ec2d4bf7baef041b4b9cecd800d935)
* [GameStudio] Added project template for macOS [view commit](http://github.com/xenko3d/xenko/commit/6a096b401f85aa3cb1f322addcf8ce36be57cbcd)
* [Localization] Use $(RoslynTargetsPath) rather than $(MSBuildBinPath)\Roslyn (which doesn't work with VS2019) [view commit](http://github.com/xenko3d/xenko/commit/6c1a4cd3c66c66ef9facd201136e252b074e3176)
* [Samples] Templates: Added Cache to list of ignored folders (can be leftover from build during previous Xenko versions) [view commit](http://github.com/xenko3d/xenko/commit/d47e8cfa77de1ec6a483f2e2e1a52173106cd227)
* [Graphics] macOS: Updated MoltenVK [view commit](http://github.com/xenko3d/xenko/commit/ccc487751a7d5fddad5dda7e2d2a995842d59119)
* [Assets] PackAssets: Use proper asset path when computing resources relative paths (fixes [#326](https://github.com/xenko3d/xenko/issues/326)) [view commit](http://github.com/xenko3d/xenko/commit/5109915edbd514e154ebc3e914a49f036f392fee)
* [VSPackage] Upgrade version to 3.0.3. Add support for VS2019. New release needed since RestoreHelper.cs was updated (fixes [#324](https://github.com/xenko3d/xenko/issues/324)) [view commit](http://github.com/xenko3d/xenko/commit/5c7159721ebf65b4a9f8107e1380880c9d8cf4d2)
* Update license for 2019 [view commit](http://github.com/xenko3d/xenko/commit/c21c5da8d2604a8735ea396556fa40cfb4c5063c)
* Update BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/307be228f328f25ead2347f840879ca5654bdb09)
* [Build] Copy .xml and .pdb from NuGet package references when using new csproj format [view commit](http://github.com/xenko3d/xenko/commit/555b4f433d1392cfc3e964f14696132f4c1eed4c)
* [VSPackage] Run VSIX installer only for VS2017+ (fixes [#332](https://github.com/xenko3d/xenko/issues/332)) [view commit](http://github.com/xenko3d/xenko/commit/07438702b7761d95351773c5d1ca56c06da61b1f)
* [Build] Use latest version of Windows 10 SDK [view commit](http://github.com/xenko3d/xenko/commit/e675185ef18cc8b34be7903115ee2d8a4e630a59)
* [Build] Update requirements [view commit](http://github.com/xenko3d/xenko/commit/e4fd4f0687df1beedf3402710485798a174582c9)
* [Build] Publish was not properly copying native libs and compiled assets (fixes [#331](https://github.com/xenko3d/xenko/issues/331) and [#334](https://github.com/xenko3d/xenko/issues/334)) -- thanks to jazzay for the initial implementation [view commit](http://github.com/xenko3d/xenko/commit/05e746a920cf41b8fc699426cc1e8550ae28c03a)
* [VSPackage] Make ProjectReference between Commands and Package private so that it doesn't exist as a NuGet dependency [view commit](http://github.com/xenko3d/xenko/commit/76d05a4ab7190c80d8b8b27f7b75255065f01b1b)
* [VSPackage] Add TODO for restore log [view commit](http://github.com/xenko3d/xenko/commit/ad0e048637d229e4cac0931ddbeb38e577f23878)
* [Build] Native: use vcxproj directly to avoid TRK0005: Failed to locate: "link.exe" or "cl.exe" (fixes [#337](https://github.com/xenko3d/xenko/issues/337)) [view commit](http://github.com/xenko3d/xenko/commit/2982d61547ff55c555c2d161f921af87faf87b41)
* [Build] Properly include install-prerequisites.exe next to Xenko.GameStudio packageinstall.exe [view commit](http://github.com/xenko3d/xenko/commit/59c6713145dcacf86ee4f51c62662acc0f09a8e8)
* [Install] Prerequisites installer: improve error reporting and retries (i.e. UAC not clicked) when installing Visual Studio or Build Tools [view commit](http://github.com/xenko3d/xenko/commit/3d29a4f0d3b0e9bbda26e81932a8f7c2e7587176)
* [Install] Prerequisites: Update to VC++ 2017 prerequisites [view commit](http://github.com/xenko3d/xenko/commit/b40d2657bd28736b2e0327fdda239ecd13437276)
* [Install] Prerequisites: Add ".NET Core 2.1 development tools" to list of Visual Studio prerequisites [view commit](http://github.com/xenko3d/xenko/commit/fe85d992f7bb4213ab810c6a971520ed751afee3)
* [Install] Prerequisites: Improve Visual Studio detection/update mechanism [view commit](http://github.com/xenko3d/xenko/commit/e435015424568631aabcfbdc9fe409554b1b0fec)
* Update BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/0dde714bbb370c9c1e41596cdc859984fcaf2a14)
* [GameStudio] Switch to Roslyn 2.10 [view commit](http://github.com/xenko3d/xenko/commit/989469db9e2749ac8e69b8ea8a5bde06451b7c23)
* [Assets] PackAssets: properly copy RootAssets (fixes [#347](https://github.com/xenko3d/xenko/issues/347)) [view commit](http://github.com/xenko3d/xenko/commit/7144d61795fa6b908443aad1589b9dfac5e17fc5)
* [Assets] Perform null check before upgrading PackageProfile [view commit](http://github.com/xenko3d/xenko/commit/c5164c5939a0ec7b1edf79d231b2107cf130f998)
* [Assets] PackageSession: Properly fallback to AssemblyName if PackageId is not set [view commit](http://github.com/xenko3d/xenko/commit/aad3c7519457dc7aa9a4061af314b8420810074c)
* [Assets] Remove asset upgrader code for versions before 3.0 [view commit](http://github.com/xenko3d/xenko/commit/0521c0d066d005bde496ffe9ab656374e2a51f33)
* Explain how CLA is to be signed. [view commit](http://github.com/xenko3d/xenko/commit/233d891767dd78148c2ff99a3706f8909cc48f57)
* Update BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/55092e25f2afc3f4107a57fe8678161c944bda83)
* [Build] NuGetVersion reported to TeamCity was wrong [view commit](http://github.com/xenko3d/xenko/commit/fd5c4b0eff9ce683ba09b51e0e91c28667514d10)
* [VR] Fix UWP build ([#213](https://github.com/xenko3d/xenko/issues/213)) [view commit](http://github.com/xenko3d/xenko/commit/bdc87cc85e791ef28ab6ea891c531c7a8a6ac1f2)
* [Build] Add XenkoBuildDoc parameter to force TargetFramework even if not specified (seems necessary for older version of Roslyn used in docfx) [view commit](http://github.com/xenko3d/xenko/commit/35923fa6f570b812fc29c12fddd51710cc51c68f)
* [GameStudio] Add missing RoslynPad assemblies in the composition context [view commit](http://github.com/xenko3d/xenko/commit/434741423ad6fcf8359cf24435ebd7e4a394088c)
* [GameStudio] Allow drag & dropping of read-only assets (as long as they wouldn't be modified) [view commit](http://github.com/xenko3d/xenko/commit/f542345bb83b0171e53b0716be3a8fd61b6efb8d)
* [GameStudio] CodeLibrary projects were not properly initialized (assets couldn't be created) [view commit](http://github.com/xenko3d/xenko/commit/b41a90143408fb08b63e5a280a42fbcfa9fce091)
* [Build] Sign packageinstall.exe [view commit](http://github.com/xenko3d/xenko/commit/48600c088ef0a4d6e29477a78f85582c316ed6c6)
* [Build] Include RoslynPad assemblies with Xenko.Assets.Presentation package [view commit](http://github.com/xenko3d/xenko/commit/5470299ed9d8fafb38808cd8f9835f65d180aff4)
* Update ContributorLicenseAgreement.md [view commit](http://github.com/xenko3d/xenko/commit/5d91b9cf56ce416813aff77162f7d6e33a840f52)
* [Build] Unlocking C[#](https://github.com/xenko3d/xenko/issues/) 7.3! [view commit](http://github.com/xenko3d/xenko/commit/04fec1d138689e05c3f25c87f46d7064b2205c98)
* [Core.Design] AssemblyContainer: Process deps.json files (fixes [#365](https://github.com/xenko3d/xenko/issues/365), fixes [#342](https://github.com/xenko3d/xenko/issues/342)) [view commit](http://github.com/xenko3d/xenko/commit/0dcbaafc442caa8b5d56a1f235387783b6c98df2)
* Merge branch 'master-3.0' [view commit](http://github.com/xenko3d/xenko/commit/2592f84d7b074da875cf0e2350f1a8d592c9d9bd)
* [Physics] Fix ColliderShapeAsset upgraders (was previously enclosed in XENKO_SUPPORT_BETA_UPGRADE) [view commit](http://github.com/xenko3d/xenko/commit/2a12c6643ff493b25b85b6e9bd309dd78858bc9f)
* Merge remote-tracking branch 'origin/master-3.0' [view commit](http://github.com/xenko3d/xenko/commit/762e95559739055993afcb0fe67bc7c4b98acdee)
* Merge remote-tracking branch 'origin/master-3.0' [view commit](http://github.com/xenko3d/xenko/commit/5f596657e006bfea9ebbf0f04302df5e3f3aed85)
* [Build] Add option -NoSymbols to nuget push [view commit](http://github.com/xenko3d/xenko/commit/464585288f58c214d302db870d9c38406ae5a70c)
* [Graphics] D3D: add support for using typeless textures [view commit](http://github.com/xenko3d/xenko/commit/ff28be350deb6dd7492743fe60a208613c4a7a76)
* [Reflection] AssemblyContainer: return already loaded assemblies if AssemblyName matches rather than loading new one (it seems that assembly is requested several times because we are not loading in the proper load context) [view commit](http://github.com/xenko3d/xenko/commit/feb297a828e051e28e83c15e4132c950ebf2f6d9)
* [Build] runtime.json: fix spacing [view commit](http://github.com/xenko3d/xenko/commit/062066d635210894575fb7f6d7f34c2a2930ca46)
* [Build] Added new CPU-specific variants to runtime.json ([#370](https://github.com/xenko3d/xenko/issues/370)) [view commit](http://github.com/xenko3d/xenko/commit/d52b6ac6a4e01968c211f5f95806b530f3b0aedb)
* [Build] Bumped LLVM to 7.0.1 [view commit](http://github.com/xenko3d/xenko/commit/06ee9130144ad4da1e3acaeb608e45243a83fa95)
* [Render] Decouple RenderParticleEmitter from ECS [view commit](http://github.com/xenko3d/xenko/commit/abfb0060a4405fe5712bcb57e657e2f3715436a5)
* [Render] Decouple RenderUIElement from ECS [view commit](http://github.com/xenko3d/xenko/commit/fc805ea6b8528d200906102bba59ae5c35ee2820)
* [Render] Decouple RenderMesh and others from ECS [view commit](http://github.com/xenko3d/xenko/commit/15ffffd2163468ca4c6540bd3a726fec32ebf4c6)
* [Rendering] Remove various dependencies from lighting code to LightComponent [view commit](http://github.com/xenko3d/xenko/commit/e7ca9d2c58f45077d13e9ecdd7ad6bd5a794988c)
* [Rendering] Removed SceneInstance dependency from rendering code [view commit](http://github.com/xenko3d/xenko/commit/cc4bd9f071536857bfb9eef5644da6f867dd5c97)
* [Rendering] Removed dependency from VisibilityGroup to ShadowMapRenderView [view commit](http://github.com/xenko3d/xenko/commit/1cd0f982ac1818fdde11624ad4ceada230c25ec6)
* [Rendering] LightSkybox: Removed obsolete comment [view commit](http://github.com/xenko3d/xenko/commit/0a519701ce5d1e4ba1e5886b8ccd74d11702db21)
* [Rendering] Moved RenderGroup class to Rendering namespace [view commit](http://github.com/xenko3d/xenko/commit/25ec89f0391aeedc91616a7a6282aee9a135b3bb)
* [Rendering] PostFX: remove dependency to CameraComponent [view commit](http://github.com/xenko3d/xenko/commit/ff279b024d5db2a34754ea4d52c83e071d9fce81)
* [Rendering] ShadowMapRenderer: remove unused nested class [view commit](http://github.com/xenko3d/xenko/commit/20c5f2b4dcd821251115c0cdd70d16c9e1aefef7)
* [Rendering] ForceAspectRatioSceneRenderer: Made default aspect ratio local to remove dependency to CameraComponent [view commit](http://github.com/xenko3d/xenko/commit/71248f369637397946c9bfb705e6b4bc8e746a8c)
* [Engine] Moved IndexingDictionary to Xenko.Core [view commit](http://github.com/xenko3d/xenko/commit/9b116257c66e85c4a62be958e8345c95ae1dc510)
* [Rendering] EffectSystem: Remove dependency to Game class and move EffectCompilationMode in the same namespace [view commit](http://github.com/xenko3d/xenko/commit/0cc21349a0c4c172c53a94ad7fc7f69547708b3e)
* [Rendering] EffectSystem: Moved CreateEffectCompiler in a separate static class outside of Rendering code [view commit](http://github.com/xenko3d/xenko/commit/b07e77909c4d705085a74044453d94d39aacc817)
* [Rendering] Made ForwardLightingRenderFeature not dependent on LightProcessor anymore [view commit](http://github.com/xenko3d/xenko/commit/9eceed040ce44d73cf42f16509970a5793ea7250)
* [Rendering] Made LightProbe code not dependent on LightProbeProcessor anymore [view commit](http://github.com/xenko3d/xenko/commit/921dd9d243379f6bd14dfdfe27ab830cd03139ca)
* [Rendering] Made LightShafts independent from LightShaftProcessor [view commit](http://github.com/xenko3d/xenko/commit/034abed5674cc05bc9373833e5abf1f0a554a705)
* [Rendering] Fixed RenderContext.GetCurrentCamera() tag owner [view commit](http://github.com/xenko3d/xenko/commit/c855896753530454e6ed8678ff55817b66724639)
* [Streaming] Removed dependency on Engine.Game [view commit](http://github.com/xenko3d/xenko/commit/500c4e50fc3124534c65bd23d764f5fb559bb0da)
* [Rendering] Splitted most of low-level rendering code into a new Xenko.Rendering assembly [view commit](http://github.com/xenko3d/xenko/commit/2cf773e19acabb86d918d0742af9c9e034b4c250)
* [SpriteStudio] Fixes for SpriteStudio to work properly again [view commit](http://github.com/xenko3d/xenko/commit/c1522239be6e424a3d0362bd726512a3afb69361)
* [Rendering] Make Xenko.Rendering platform-specific [view commit](http://github.com/xenko3d/xenko/commit/50b9525155455e817a07dd834d173e974422a06d)
* [TextTemplating] T4: use a custom version of Mono.TextTemplating, including https://github.com/xen2/t4/commit/0d0b6db3ca3aba82fd7597951be2361265043e5e [view commit](http://github.com/xenko3d/xenko/commit/4372725f93774bf37f69575deceb910e58b41e74)
* [Serializaton] Bump format version (Rendering split) [view commit](http://github.com/xenko3d/xenko/commit/a116d28d45d0bf6d0eb445f3226dc64768b7e803)
* [Build] Bump to beta02 [view commit](http://github.com/xenko3d/xenko/commit/cb233fe3eae5cdf13ac8ce07f5a24b6316502371)
* [Build] Fix .usrdoc generation and copy (fixes [#377](https://github.com/xenko3d/xenko/issues/377)) [view commit](http://github.com/xenko3d/xenko/commit/2c3f881b0008fb63dede4664b7b8ba810af3390d)
* [NuGet] Remove deleted xenko sources during startup to avoid restore failures (fixes [#338](https://github.com/xenko3d/xenko/issues/338)) [view commit](http://github.com/xenko3d/xenko/commit/293d60a2bdc4b6d2773a1da914fd802483828288)
* Merge remote-tracking branch 'weblate/master' [view commit](http://github.com/xenko3d/xenko/commit/734c49d6d02839603d494cd881662089fd6b804c)
* [Localization] Added Russian as a supported language [view commit](http://github.com/xenko3d/xenko/commit/123f45ed89d838b8bf25d5fd53ba84d345b272b8)
* [Localization] Added a few missing important translations (which were omitted for ApplicationCommands) [view commit](http://github.com/xenko3d/xenko/commit/0e9c28fe8b2a681a190169e05aff3ecb4f3ba674)
* [CrashReport] Bumped crash report to 1.0.1 (force HTTPS), anonymize reports and make sure it doesn't conflict with NuGetAssemblyResolver [view commit](http://github.com/xenko3d/xenko/commit/401496a90cfb05ae84b83a5d9b10e6fb61875290)
* [Localization] Updated po files [view commit](http://github.com/xenko3d/xenko/commit/8842ed8450c2a051f269fc285c49fc269d83ef71)
* [Build] Regenerated sln (which were invalid since Xenko.Rendering was added) [view commit](http://github.com/xenko3d/xenko/commit/8ff58adb66baf2f96cb57af4c23a008e552f5ed2)
* [Samples] Removed reference to RenderContext.SceneInstance (fixes [#386](https://github.com/xenko3d/xenko/issues/386)) [view commit](http://github.com/xenko3d/xenko/commit/618f743e1435d59d2a4db6bbc82402d28f278d0a)
* Merge remote-tracking branch 'weblate/master' [view commit](http://github.com/xenko3d/xenko/commit/c6ae02074bd28789b6eee45e643cc69d2fe3a08c)
* Merge remote-tracking branch 'weblate/master' [view commit](http://github.com/xenko3d/xenko/commit/30ae84d7a1e87ae51f16a33ff1a933aa9f458996)
* [Localization] Only generated when building Release, and added Russian in Xenko.Editor [view commit](http://github.com/xenko3d/xenko/commit/d145c85c123455acac052b2b95912e1cdb33d124)
* [Localization] Added support for German and Spanish [view commit](http://github.com/xenko3d/xenko/commit/f1d652d85d39dfb0e971e7a76aa31962872abca6)
* [Localization] Rearranged targets so that localization code is unified [view commit](http://github.com/xenko3d/xenko/commit/4ef26603cdd8cba96cc1ad9e42dbc824cbc76588)
* Merge remote-tracking branch 'weblate/master' [view commit](http://github.com/xenko3d/xenko/commit/def9b2dee260333f9380adac91f61878b7efd781)
* [Localization] Added support for Chinese (Simplified) [view commit](http://github.com/xenko3d/xenko/commit/5edc9a513c6c1128e6817825cc0bc2d113669204)
* [Setup] Don't delete top level installation folder if not empty (esp. if it was installed in a root folder containing other programs by mistake!) [view commit](http://github.com/xenko3d/xenko/commit/2e1f3fe293468ef1def17c64bd319878ef219c1a)
* [Launcher] Use cache but always refresh it, even when installing. [view commit](http://github.com/xenko3d/xenko/commit/5a1b80fa2ef620cbb6aef34963ce773a8fcd4f2f)
* [Launcher] Set LauncherApp as default project [view commit](http://github.com/xenko3d/xenko/commit/8f407f5c4e63f24bfa3ed598388f006ad3fc2177)
* [Launcher] Bump to 3.0.6 [view commit](http://github.com/xenko3d/xenko/commit/65aa83110182a00922982eb125a3dde32f23d98e)
* [Templates] Fix version in reference to Xenko.Samples.Templates package [view commit](http://github.com/xenko3d/xenko/commit/8227cfdb4a2f200bbfbb44772958bc8a8011b890)
* [Rendering] Add Sprite to rendering only if it's enabled [view commit](http://github.com/xenko3d/xenko/commit/559f0c4d802cc6dca204cf2f508248dc607a1646)
* [Rendering] Properly register Xenko.Rendering in AssemblyRegistry (fixes [#409](https://github.com/xenko3d/xenko/issues/409) and fixes [#410](https://github.com/xenko3d/xenko/issues/410)) [view commit](http://github.com/xenko3d/xenko/commit/7be25ab4aceae0a017f133aa495527afa015bdf3)
* Update BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/ad2c14a852e875628f312c10157dc9c44addf9fa)
* Merge remote-tracking branch 'weblate/master' [view commit](http://github.com/xenko3d/xenko/commit/e6c7966fc3acca5bad012daeba9fc4c1587fb01f)
* [GameStudio] Fast-reloading for types such as Material and Texture were not working as expected, forcing a full model reload on every edit [view commit](http://github.com/xenko3d/xenko/commit/03ebfc8c098746da5e2844f766ecaf246215d8b6)
* [GameStudio] Fix for fast-reloading [view commit](http://github.com/xenko3d/xenko/commit/5cb22fcf0a056001f7a7fa01190adb190194234e)
* [GameStudio] Rewrote and simplified code for fast reloading (also support cases such as material layers properly now) [view commit](http://github.com/xenko3d/xenko/commit/e4bae817dc810d36db68192a9f12292e6abf5b52)
* [GameStudio] AvalonDock: Fix a bug in AvalonDock 3.4.0 which sets CanClose to false once a LayoutAnchorable is dragged into a new floating window or a new pane. [view commit](http://github.com/xenko3d/xenko/commit/9076b1eb951d2fced51103725f517155d823dad2)
* [Physics] CleanContacts was working on previousFrameContacts rather than currentFrameContacts, resulting in warnings "Pair not present". Thanks @EternalTamago for the fix! (fixes [#88](https://github.com/xenko3d/xenko/issues/88)) [view commit](http://github.com/xenko3d/xenko/commit/93c111a179675384a09a6a7c7a43d0a643f63fce)
* Update BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/0029ebee92db0458b69e1d3cb3b58126aaff335a)
* [Graphics] D3D11: Begin/End were not reentrant because of how Query were used ([#427](https://github.com/xenko3d/xenko/issues/427) [#428](https://github.com/xenko3d/xenko/issues/428)) [view commit](http://github.com/xenko3d/xenko/commit/f60d8bba0c38704361699fd735beb4205230e160)
* Merge remote-tracking branch 'origin/master-3.0' [view commit](http://github.com/xenko3d/xenko/commit/41f9389825ed6d5c2e0423cb17e3c56c1c6efad8)
* [Audio] Encode little bit longer to compensate for encoding delay (fixes [#350](https://github.com/xenko3d/xenko/issues/350)) [view commit](http://github.com/xenko3d/xenko/commit/83e0c19f62b164f23d24866f1b0e587686850a6b)
* [Build] Make sure _XenkoGenerateDependencies runs in all situations (otherwise unit tests won't work) [view commit](http://github.com/xenko3d/xenko/commit/5837f9181c885427e35ee6f95276334a26aa801e)
* [Build] Make sure _XenkoGenerateDependencies runs also for C++ projects [view commit](http://github.com/xenko3d/xenko/commit/452af9896e0992e7b35e74b4cbfd58974c6616a8)
* [Build] Readjust _XenkoGenerateDependenciesAfterBuild target/comments [view commit](http://github.com/xenko3d/xenko/commit/643d09572e4b5046767712e9339e3b50f35af382)
* [Build] Unit tests: use proper xunit.console.exe depending on x86 or x64 [view commit](http://github.com/xenko3d/xenko/commit/7fa89cadcf9f1088dc1d996ffea648f54e19a142)
* [Tests] Fix sample games unit tests [view commit](http://github.com/xenko3d/xenko/commit/d9660087fe00284b22d500d7566489b505232534)
* [Samples] Fix Sprite Studio demo (missing reference to SpriteStudio runtime) [view commit](http://github.com/xenko3d/xenko/commit/52da39c71844bce88cbf6fbda66b3655270c7dc8)
* [Editor] Preview View Model was not properly removing event handlers (fixes [#438](https://github.com/xenko3d/xenko/issues/438)) [view commit](http://github.com/xenko3d/xenko/commit/be47e4ca32d1c4c444f9c05665fed355c50e21cf)
* [Launcher] Improve log/error message in an attempt to investigate [#310](https://github.com/xenko3d/xenko/issues/310) [view commit](http://github.com/xenko3d/xenko/commit/bbb42daa2a7fef9745f1afe27cfad718ef8ecbaf)
* [NuGet] Switch to NuGet 5.0 [view commit](http://github.com/xenko3d/xenko/commit/d552c9780d83c705efa01257672165c527886efc)
* [Build] Require VS2019 instead of VS2017 to take advantage of new NuGet buildTransitive feature [view commit](http://github.com/xenko3d/xenko/commit/105bd5cd007eb490f90e8952932c9cff1d971574)
* [Build] Removed obsolete props files [view commit](http://github.com/xenko3d/xenko/commit/47e10426f1ed56aabd2e69f5544fa0b660c88177)
* [Build] Update NuGet.exe to 5.0 [view commit](http://github.com/xenko3d/xenko/commit/230b1acd91e9d5d597e0f148121be26f5962dc15)
* [Build] Update build instructions [view commit](http://github.com/xenko3d/xenko/commit/c6a35d611ecda67f36d8de52c0049961761fc887)
* [VSPackage] Update to new AsyncPackage and upgrade/cleanup unecessary PackageReference [view commit](http://github.com/xenko3d/xenko/commit/468faa7de46d2cbdc36aef745f15edacc3f841c0)
* [Build] Bump MSBuild.Sdk.Extras to 2.0.24 [view commit](http://github.com/xenko3d/xenko/commit/01c81aed9c92a5637900f73e217b68fc1f6681c9)
* Merge remote-tracking branch 'origin/master' into vs2019 [view commit](http://github.com/xenko3d/xenko/commit/e8eb8dd42c88e285f1d560b71c570352fd1e0414)
* [AssemblyProcessor] Fix a case where ImportReference was not called for GetTypeFromHandle(). Bumped Cecil to NuGet 0.10.3 rather than custom one. [view commit](http://github.com/xenko3d/xenko/commit/f1183afecbda122c90f1f3f02bdd15738b4c52db)
* [Assets] Added a new KeepReferences flag to AssetCloner [view commit](http://github.com/xenko3d/xenko/commit/2f396b11a5349f695263d65618b4477f47a4279b)
* [Build] Stop detecting Android NDK version using folder name (latest VS2019 uses "ndk-build" folder name without version) [view commit](http://github.com/xenko3d/xenko/commit/3af4664400c66cc7d4724f516fbc9ab0728fee10)
* [Build] VS2019 now understand WindowsTargetPlatformVersion being set to 10.0 rather than a specific version. Also bump PlatformToolset to v142 [view commit](http://github.com/xenko3d/xenko/commit/1947227e81d36eb23b97af6e4d3d2fd6f1dffa96)
* [Build] Converted some design-time libraries to .NET Standard 2.0 [view commit](http://github.com/xenko3d/xenko/commit/4438b73c816ab77fc40660afb868f6297ef06db0)
* Revert "[AssemblyProcessor] Fix a case where ImportReference was not called for GetTypeFromHandle(). Bumped Cecil to NuGet 0.10.3 rather than custom one." [view commit](http://github.com/xenko3d/xenko/commit/f55404586c9fc6db5e6a0473b71d856d99ab30c0)
* [AssemblyProcessor] Fix a case where ImportReference was not called for GetTypeFromHandle(). [view commit](http://github.com/xenko3d/xenko/commit/e2c44d3d229bea7e895d20094356ce5c37aa37aa)
* [Assimp] Added error details if something went wrong (and test if scene is null to avoid NullReferenceException). [view commit](http://github.com/xenko3d/xenko/commit/fed4c1c95a2bb5fd8d9055f3010c2baaa722f953)
* Merge remote-tracking branch 'weblate/master' [view commit](http://github.com/xenko3d/xenko/commit/3b9bce0e88c18404483b23707345372a8419d074)
* [Build] Reorganized targets to more easily choose multiple graphics platforms at once. [view commit](http://github.com/xenko3d/xenko/commit/c37855a945278d4462bf24a9ed7ab8d29fee94b8)
* [Build] Bumped sln to use VS2019+ [view commit](http://github.com/xenko3d/xenko/commit/dddd4dd3dcfdb1e9d92d0f67a80eb89303575c1a)
* Revert "[Build] Reorganized targets to more easily choose multiple graphics platforms at once." [view commit](http://github.com/xenko3d/xenko/commit/5ebf081c342de88223f28c9618664f2d3c869d59)
* [Build] Reorganized targets to more easily choose multiple graphics platforms at once. [view commit](http://github.com/xenko3d/xenko/commit/50bcd63e40d4df8112f06f51bc8e8dca9ef28662)
* [Build] Removed deprecated Android armeabi CPU architecture (fixes [#461](https://github.com/xenko3d/xenko/issues/461)) [view commit](http://github.com/xenko3d/xenko/commit/09cadb3d143acb56831b0f69c61beb6db7caf5d9)
* [Vulkan] Back buffer: add missing ViewType parameter (2D) when creating back buffer [view commit](http://github.com/xenko3d/xenko/commit/40b92cb2fbcb5ebde2858ee06c5364db7f2c0a4d)
* [Build] Android: Bump TargetSdkVersion to API level 27 (matches VS2019 install and TargetFrameworkVersion set in csproj) [view commit](http://github.com/xenko3d/xenko/commit/89936b1e8163062c7136010171f8a42abd10976c)
* [Launcher] NuGet: 1 hour timeout instead of 100 seconds as a workaround for https://github.com/NuGet/Home/issues/8120 (fixes [#310](https://github.com/xenko3d/xenko/issues/310)) [view commit](http://github.com/xenko3d/xenko/commit/6723f0cd54feb5e8e786e486da4b8cda16cd5b97)
* [Launcher] Bump to 3.0.8 [view commit](http://github.com/xenko3d/xenko/commit/fa4f92e1795cad839d9b174b0151c6c9826c75bf)
* Revert "[Assimp] Updated assimp to official 4.1.0 and updated references in projects (closes [#458](https://github.com/xenko3d/xenko/issues/458))" [view commit](http://github.com/xenko3d/xenko/commit/4f6f3fa1a29a7a5403612c5b42be456e9547ea3c)
* [Build] Removed armeabi libraries to completely fix [#461](https://github.com/xenko3d/xenko/issues/461) (fixes [#470](https://github.com/xenko3d/xenko/issues/470)) [view commit](http://github.com/xenko3d/xenko/commit/79d7d75895e81890de1945b09e4fe7bd235c27d1)
* [Build] Android: unify all minSdkVersion to 16 and targetSdkVersion to 27 (fixes [#469](https://github.com/xenko3d/xenko/issues/469)) [view commit](http://github.com/xenko3d/xenko/commit/d19585fe7afafa3df713f939bb2e338f1c3d8e8c)
* [VSPackage] Bump to 3.0.5 [view commit](http://github.com/xenko3d/xenko/commit/b2a449162b50bb2cbbf478c5de1f5e7082d66d0f)
* [Physics] Renamed NewShapeFromDesc to CreateShape [view commit](http://github.com/xenko3d/xenko/commit/d65a7f20d60555a05d42be418f9fbea10e2ce63d)
* [Launcher] Allow to select Xenko version [view commit](http://github.com/xenko3d/xenko/commit/f4d406cede1875f23886a110d64e14fef21f0566)
* [Build] Bumped Cecil to NuGet 0.10.4 rather than custom one. [view commit](http://github.com/xenko3d/xenko/commit/2079a316301cba76185cbeaf1b53fa2ddcc7b84a)
* [Physics] Update README.md with new BulletSharpPInvoke repo location [view commit](http://github.com/xenko3d/xenko/commit/58e4e12d084a2f03beae105efaf806393b85e47f)
* Merge pull request [#289](https://github.com/xenko3d/xenko/issues/289) from Eideren/bulletsharp_nuget [view commit](http://github.com/xenko3d/xenko/commit/5cee86cd3d8807c39446c07d0481348afd7c4131)
* [Physics] Fix typo in PhysicsEngineFlags.ContinuosCollisionDetection (fixes [#152](https://github.com/xenko3d/xenko/issues/152)) [view commit](http://github.com/xenko3d/xenko/commit/5bb43aabbc3568e5793928f63903bdccb48907f8)
* [Build] Properly copy back IntDir/OutDir to IntermediateOutputPath/OutputPath for C++ project [view commit](http://github.com/xenko3d/xenko/commit/fb6a53c1fb7a512dff5ef2a37ddb66dcea8e5155)
* [Input] Fix SDL key mapping for 0 and 1 [view commit](http://github.com/xenko3d/xenko/commit/4ef9581f8d48637542d0c0ae0c8a773d123c4d1c)
* [Build] Updated editorconfig to contain VS2019 default style (which we use in Xenko) [view commit](http://github.com/xenko3d/xenko/commit/8f5f1b8f4c7d2d234375b3c4cfd4b73ed550891a)
* [Build] XenkoContent: do not include in NuGet package as Content [view commit](http://github.com/xenko3d/xenko/commit/66d869addaac2feeae11010d93fd8a042d494989)
* [Graphics] Compare InputElements length before comparing elements [view commit](http://github.com/xenko3d/xenko/commit/76dbcc023f8eb9cafd58115ad4c859b5f36d8e9b)
* [Graphics] Remove unecessary GraphicsDevice.ThreadCount [view commit](http://github.com/xenko3d/xenko/commit/f03a77dae6f340bced56cf71b297f14e65ee6054)
* [SDL] AppActivated and AppDeactivated were reverted [view commit](http://github.com/xenko3d/xenko/commit/224035d5a3aad33caebf2ea80cc0b46871d9bc4e)
* [Vulkan] Fix validation for texture upload [view commit](http://github.com/xenko3d/xenko/commit/5eef1bc988e22753b728bb0036e50ee67a8e45f0)
* [Vulkan] Update glslang to 7.11.3214 (May 2019) [view commit](http://github.com/xenko3d/xenko/commit/04f62331be646cbbdc9cd1d517e8bf2ae4b83d21)
* [Vulkan] PipelineState: Entry point name could be GC before used [view commit](http://github.com/xenko3d/xenko/commit/7f293fad43028ced8ffc01e196ffab57bb53a55b)
* [Vulkan] PipelineState: Properly set PrimitiveRestartEnable [view commit](http://github.com/xenko3d/xenko/commit/7c4be8d30a3f760eed82c571b36c2805fa34232d)
* Revert "[Graphics] Vulkan: add support for R10G10B10A2_UNorm and R11G11B10_Float" [view commit](http://github.com/xenko3d/xenko/commit/2201148377b079cee72547988bc323b238b75951)
* [Vulkan] Fixed memory barriers for Clear functions [view commit](http://github.com/xenko3d/xenko/commit/4e1bd31226784600412c6bdf89ccb101a26393db)
* [Vulkan] UpdateSubresource: Fixed memory barrier [view commit](http://github.com/xenko3d/xenko/commit/ab96eab76ef8168fe5855938a05d9a18515a1d35)
* [Vulkan] Fixed mixup between Clear DSV and RT [view commit](http://github.com/xenko3d/xenko/commit/f70d74cb15ff731c5e7ddf870e04c0d4979ee576)
* [Build] Android: Updated to NDK r19 (with proper version check) and remove our custom libc++abi (first step for [#460](https://github.com/xenko3d/xenko/issues/460) and [#379](https://github.com/xenko3d/xenko/issues/379)) [view commit](http://github.com/xenko3d/xenko/commit/abe058e2c25e2976bfcc96c379156c3ed1e77554)
* [Build] Android: Avoid "error MSB4044: The "FilterAssemblies" task was not given a value for the required parameter "DesignTimeBuild"." with latest Xamarin.Android [view commit](http://github.com/xenko3d/xenko/commit/7edf54f3b8dd4c60662663e1b5e060572d0534fb)
* [Audio] Android: Updated OpenSLES header (which were incompatible with arm64 due to SLuint32 mapping to long instead of int) (fixes [#379](https://github.com/xenko3d/xenko/issues/379)) (fixes [#460](https://github.com/xenko3d/xenko/issues/460)) [view commit](http://github.com/xenko3d/xenko/commit/71e6437e698c65ff5191a803eb9df367edbcd804)
* [Setup] Upgraded Visual C++ prerequisites to latest VS2019 ones [view commit](http://github.com/xenko3d/xenko/commit/b506c73e895a29d0e9a3dfe3d233ecdfbb2cb876)
* [Assimp] Properly copy Xenko.Assimp.*.dll (fixes [#465](https://github.com/xenko3d/xenko/issues/465)) [view commit](http://github.com/xenko3d/xenko/commit/8ee49829fb530ff23da0f541cbb465fd9cf6a191)
* Merge remote-tracking branch 'weblate/master' [view commit](http://github.com/xenko3d/xenko/commit/bfc47b2ded670066bfafaf9976d5778d6bc75cac)
* [Build] Android: Workaround for https://github.com/onovotny/MSBuildSdkExtras/issues/174 [view commit](http://github.com/xenko3d/xenko/commit/a91440e963d80edb3679c097924d2896e765fd74)
* [Build] Transformed Xenko.Core.BuildEngine into a .NET Standard assembly [view commit](http://github.com/xenko3d/xenko/commit/382953c7639a0f767894d5fa72d5d7aa2e0dc06d)
* [Build] NETStandard: Switch from AssemblyBuilder.DefineDynamicAssembly [view commit](http://github.com/xenko3d/xenko/commit/c291dac0ac88fa3d7493599fa312fa3c6ed5680b)
* [Build] NETStandard: Remove unnecessary using [view commit](http://github.com/xenko3d/xenko/commit/a726144a9b0e61fac24a76df3dcb930d076c291d)
* [Quantum] Renamed Index into NodeIndex to avoid clash with future System.Index [view commit](http://github.com/xenko3d/xenko/commit/593754598191c6bc29995478be98962ad959452a)
* [Build] NETStandard: Remove unnecessary using [view commit](http://github.com/xenko3d/xenko/commit/f61d50d1e88f1023121e651f34817703501ec405)
* [Assets] Switch from implicit project to explicit project if necessary (fixes [#442](https://github.com/xenko3d/xenko/issues/442)) [view commit](http://github.com/xenko3d/xenko/commit/1813edc0e306670f14d8b07ae3381e832ad87144)
* [Build] Switched to MSBuild.Sdk.Extras version 2.0.41 [view commit](http://github.com/xenko3d/xenko/commit/0f1ff64ea68fdb8b18b9bed8ce37d0266ef30197)
* [Build] Doc: Copy .xml file in ref folder [view commit](http://github.com/xenko3d/xenko/commit/a4c7c1a748c8a576d5464559c5460b73b3f6ca87)
* Revert "[Build] Switched to MSBuild.Sdk.Extras version 2.0.41" [view commit](http://github.com/xenko3d/xenko/commit/86344617032260a3935050c00ebcea09684fb1a8)
* [Build] Moved Microsoft.NETCore.Platforms reference from Xenko.Graphics to Xenko.Core (otherwise scenarios like referencing only Xenko.Core with win-x64 doesn't work) [view commit](http://github.com/xenko3d/xenko/commit/e01b748fabe82b11ea8c9ff58cf30fc3832a3fe9)
* [VSPackage] Syntax highlighting service was not properly registered asynchronously (fixes [#651651](https://github.com/xenko3d/xenko/issues/651651)) [view commit](http://github.com/xenko3d/xenko/commit/285e1a4fefbd38b5b8345a631baf1ce446b7c9ce)
* [VSPackage] Fix Xenko detection [view commit](http://github.com/xenko3d/xenko/commit/94d82c3c951f1368fc190171d006e2ba8d87dffe)
* [VSPackage] Bump version to 3.0.6 [view commit](http://github.com/xenko3d/xenko/commit/e0b7fc68d60dea8e240f17cb95b0d5c74df420ad)
* [Build] Replaced <None Include=".."> to <None Update=".."> for shaders/effects [view commit](http://github.com/xenko3d/xenko/commit/6553d51fbb0455710a56790d6dccf757309bc0e3)
* [VSPackage] Add a launchSettings.json with proper parameters for easier debugging [view commit](http://github.com/xenko3d/xenko/commit/40d728016005183cdfda11ca6e69491135b182dc)
* [Input] SDL: fix OemPlus/Minus mapping (thanks nes) [view commit](http://github.com/xenko3d/xenko/commit/b431e3d680757f756e64ad545f578f44f28e7dee)
* [UI] Fix comment [view commit](http://github.com/xenko3d/xenko/commit/05eba03187cfc18baa674d070abddc82fcb602e2)
* [Vulkan] Fix some memory barriers in CommandList.Copy and CopyRegion [view commit](http://github.com/xenko3d/xenko/commit/4249625313e1cd12d67fab6750ce87dbb8f7320b)
* [Vulkan] CommandList: Don't use ImageView.Null in DescriptorImageInfo [view commit](http://github.com/xenko3d/xenko/commit/b5b645029db1b29bedf1ec06d2b78bfbf5820f4c)
* [Streaming] Load a few initial mipmaps for streamed texture (otherwise they start as completely uninitialized: bad for rendering, and causes crash on Vulkan) [view commit](http://github.com/xenko3d/xenko/commit/1ca201f6f689f954f38b2ce17dfd90534e54d3fb)
* [Shaders] Fixed precompiled shader code generation [view commit](http://github.com/xenko3d/xenko/commit/76ca6716699a1f95034558d345ed493fbbdf9594)
* [Shaders] Added ElementType info to reflection for buffers/textures [view commit](http://github.com/xenko3d/xenko/commit/ae24533c7e79d536e73ccf3d0d28e610c1f5d144)
* [Vulkan] Properly store info if a texel buffer need to be integer or float. [view commit](http://github.com/xenko3d/xenko/commit/cb9b3178ed563a9483c9e3cc9e086785825e32c2)
* [Shaders] Make sure NoSampler is added before computing list of resource groups (otherwise it ends up having no location attribute) [view commit](http://github.com/xenko3d/xenko/commit/f98890115e4c3d0d80e7768eb3c98797151a0151)
* [Input] Fixed copyrights [view commit](http://github.com/xenko3d/xenko/commit/2e3591546db05cb0faa8f0ca747296cc15eed86a)
* [VSPackage] Fix Xenko version detection to work not only with nuget packages but also solution projects, so that it works with Xenko solution itself. [view commit](http://github.com/xenko3d/xenko/commit/964ef5e68c4fa555d890f94c648e871f7e1bb067)
* Merge remote-tracking branch 'weblate/master' [view commit](http://github.com/xenko3d/xenko/commit/8c97d5d7753185b5111ecb781f45d2b76f05fb90)
* [Localization] Added Italian [view commit](http://github.com/xenko3d/xenko/commit/c70f07f449c7e4020a92f16c81f161ea7af7a4b5)
* [Localization] Added info in doc on how to translate and add new language. [view commit](http://github.com/xenko3d/xenko/commit/48692b4baee5b586a4ea5e7e391fe5a73587a287)
* [Build] Remove the -beta02 version suffix [view commit](http://github.com/xenko3d/xenko/commit/8787a1959ff4dcd1ca9219615463a6dba7b14e56)
* [Shaders] D3D: Properly copy ElementType when duplicating resource binding per stage (fixes [#515](https://github.com/xenko3d/xenko/issues/515)) [view commit](http://github.com/xenko3d/xenko/commit/4e7826874d4b8d4e12222b21f9d2bcf57768f675)
* [Samples] Updated to 3.1.0.1 [view commit](http://github.com/xenko3d/xenko/commit/3f3158783ec94c9f4705e3afd50e671b05b2ed15)
* [Setup] PackageInstall: check if VS Installer needs an update, and if yes try to do it automatically [view commit](http://github.com/xenko3d/xenko/commit/aa48bc6479c39f8732d11bb84b2960ff1a1cd593)
* [Build] Temporary workaround for .NET Core 3.0 new runtime identifier system (credits go to Solr for finding this fix) [view commit](http://github.com/xenko3d/xenko/commit/4a624c6cd8d6f3af95a5586e7190e431b14d2886)
* [NuGet] Rewrote how assembly resolver is ordering assemblies found in nuget packages (there was a bug where it could select net46 instead of net461, resulting in crash) [view commit](http://github.com/xenko3d/xenko/commit/7ca99e767ab19c2c20fece865c3263706488fc56)
* [Build] Moved Xenko.Samples.Templates version in a single unified location to simplify future maintenance [view commit](http://github.com/xenko3d/xenko/commit/46bcd063df35ee48dd6edde062ed4b9ac7451da3)
* [Setup] PackageInstall: Check VS Installer update if any workload needs to be installed (two UAC, but probably better than an error and extra step) [view commit](http://github.com/xenko3d/xenko/commit/fb99c6a35de199b32b5cd999e64b05740054a7d2)
* [Build] Bumped MSBuild.Sdk.Extras to 2.0.54 [view commit](http://github.com/xenko3d/xenko/commit/339d9e8389b4c44eef0f24bf996235bdb3018397)
* [Build] Updated codesign certificates [view commit](http://github.com/xenko3d/xenko/commit/006ad132109aefb2c580c938634bd265b2262d27)
* [Build] Android: Use AssemblyName rather than RootNamespace for Resource class otherwise it might clash between some assemblies (i.e. Xenko and Xenko.Engine) --> [view commit](http://github.com/xenko3d/xenko/commit/b6075c7d75407f7d5daf0e52ff0215c9b8d3dbf9)
* Revert "[Build] Remove the -beta02 version suffix" and bump samples accordingly [view commit](http://github.com/xenko3d/xenko/commit/238a431e3f6fe10f0e7d9900d16c3cfa365fb9df)
* [Build] Use default RuntimeIdentifier for default GraphicsApi, so that even if our custom RuntimeIdentifier are not merged properly, everything still work. [view commit](http://github.com/xenko3d/xenko/commit/7d3a9f8a99fd070f90d22300fe3a8f6c424a8e43)
* [Build] Removed previous workaround for https://github.com/NuGet/Home/issues/7351 [view commit](http://github.com/xenko3d/xenko/commit/1f6216fbbe568686e2511ec884caf96280137e16)
* [Build] Bump NuGet.exe to 5.3.0 [view commit](http://github.com/xenko3d/xenko/commit/7ab69c724a11cc904bdf1aecd39e6ee4c45689b7)
* [Build] Improved behavior of XenkoGraphicsApiDependentBuildAll [view commit](http://github.com/xenko3d/xenko/commit/98a2a7aaed83326e495e2cca8eb858746aee5f18)
* Merge branch 'runtimeid_fixes' into master-3.1 [view commit](http://github.com/xenko3d/xenko/commit/297d239cc89ddee88d4cc52448336b35fa93080d)
* [Build] Android: Fix NDB platform versions [view commit](http://github.com/xenko3d/xenko/commit/c5c2a6402fc480baf45f06225157c213bf7b927a)
* [Graphics] Updated SharpDX to 4.2.0 [view commit](http://github.com/xenko3d/xenko/commit/d1f18836d6221acc8f79ac38075c95078e53b214)
* [UpdateEngine] AssemblyProcessor was generating invalid ldftn for virtual/interface calls (causing crashes with .NET Core 3). Switch to ldvirtftn for those instead. [view commit](http://github.com/xenko3d/xenko/commit/e42121aec7db46aab6ce64b58f24df96b05ed720)
* [Graphics] Update D3D12 code for SharpDX 4.2.0 [view commit](http://github.com/xenko3d/xenko/commit/f5bc7a62af343c082bb7c5ce20222d1c7e30f81d)
* [Build] AssemblyProcessor task need to change identity on each change otherwise we can run into https://github.com/microsoft/msbuild/issues/663[#](https://github.com/xenko3d/xenko/issues/)issuecomment-310530046 [view commit](http://github.com/xenko3d/xenko/commit/e2c2eb19fcd6c8f9a2d49945170966cb38a12642)
* [Graphics] Streamed compressed texture could end up having their initial texture size not multiple of 4, resulting in error at runtime loading. Skip these cases for now. [view commit](http://github.com/xenko3d/xenko/commit/e8c8e4aff1a2fdd610b9f16929fe4104093fe641)
* [Fonts] Fix how matrix is computed and compute realVirtualResolutionRatio depending on actual requestedFontSize (fixes [#314](https://github.com/xenko3d/xenko/issues/314)) (fixes [#364](https://github.com/xenko3d/xenko/issues/364)) [view commit](http://github.com/xenko3d/xenko/commit/eafa92f99d5978316b9394f4c3d4e25ae8a1b5d0)
* [Fonts] Dynamic fonts: use virtual resolution (otherwise real size changes on every camera move and requests new character, esp. if UI is in 3D) [view commit](http://github.com/xenko3d/xenko/commit/22271fb90375a28740e99b3900b5325e4934e6c4)
* [Fonts] Do not alter fontSize [view commit](http://github.com/xenko3d/xenko/commit/1a9bfd6e775e3cf4d721cbe060299a8dba84a35c)
* [Fonts] Turned various internal parameters from ref to in (C[#](https://github.com/xenko3d/xenko/issues/) 7.2) [view commit](http://github.com/xenko3d/xenko/commit/f1513b93984b2581c13a8adb35bdfee20d6e3817)
* [Fonts] Turned various internal parameters from ref to in (C[#](https://github.com/xenko3d/xenko/issues/) 7.2) (missing file) [view commit](http://github.com/xenko3d/xenko/commit/aaaa975d63bf2014d5ce48fe334f8f6d8636cbff)
* [Build] Added a trailing slash at the end of PackageOutputPath (maybe necessary since latest VS2019?) [view commit](http://github.com/xenko3d/xenko/commit/f63685447a53dc5cc1b91b43d9eae7bbda1ec7e3)
* Revert "[Build] Add XenkoBuildDoc parameter to force TargetFramework even if not specified (seems necessary for older version of Roslyn used in docfx)" [view commit](http://github.com/xenko3d/xenko/commit/6c4dfce0191419e6350e0a21cd3c2b533d561124)
* [Build] Separated XenkoGraphicsApis into one list per platform (otherwise we can't really control properly and risk overriding a platform with nothing) (fixes [#544](https://github.com/xenko3d/xenko/issues/544)) [view commit](http://github.com/xenko3d/xenko/commit/d1cb7a553857f27b8a5610dfd39cad2b6cb78f41)
* [Build] Remove GetSolutionConfigurationContents hack (which was necessary for WinStore/WinPhone port) (this allows command line build for Android/iOS [#543](https://github.com/xenko3d/xenko/issues/543)) [view commit](http://github.com/xenko3d/xenko/commit/12094ae9a1e72fcf09bca3e8b121159426cb9d66)
* [Build] Remove the -beta02 version suffix and bump samples accordingly [view commit](http://github.com/xenko3d/xenko/commit/7419012e054d765dc9434f5beb2442a0db25d7b9)
* Updated BACKERS.md [view commit](http://github.com/xenko3d/xenko/commit/12df753f9549bdf964991d2d4c250d6c11e17630)

WaldiS (3):

* Added translation using Weblate (Polish) [view commit](http://github.com/xenko3d/xenko/commit/6ac1950ec85942ac2fc8f54fcc33d6e290ede4bc)
* Translated using Weblate (Polish) [view commit](http://github.com/xenko3d/xenko/commit/86ab22d454d03da980d5b6f8e0b7244e7e4ec677)
* Translated using Weblate (Polish) [view commit](http://github.com/xenko3d/xenko/commit/89bef757a76aa87c5370f58826a4daf02e31c85a)

WhyPenguins (1):

* Add output merger UAV binding. ([#478](https://github.com/xenko3d/xenko/issues/478)) [view commit](http://github.com/xenko3d/xenko/commit/a503e9013938388024b26a0efbab2da54a2f73b4)

Yuuki terumi (5):

* Added translation using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/98fe76f78970af70d443398b6d649ce110ece7e9)
* Added translation using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/80b0993254e50b73eabf67df6bbe01d2b1a3be82)
* Added translation using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/a47ecf538fc734b4fac9cb2fcfbbe70a41ace909)
* Added translation using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/24ef81b8733766ee28fb98a1e5db57615db739cb)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/679a3e0bab06e9b61470bd40029b6570de569947)

dfkeenan (5):

* Allow spaces in TargetDir when building LauncherApp project. [view commit](http://github.com/xenko3d/xenko/commit/88811c9cef84073a5fa7a692f57f115673f72350)
* Update Roadmap url to github projects. [view commit](http://github.com/xenko3d/xenko/commit/24ccfd8bdc29d48cbc0f6b02192cb8e930aa629d)
* Add tooltip status text for link buttons. [view commit](http://github.com/xenko3d/xenko/commit/aa9577605fa5269c96a2430bf20148d322a9676c)
* Add patreon link to launcher. [view commit](http://github.com/xenko3d/xenko/commit/70ccdfb760c6cd7324027ea529e019caba7144e4)
* Remove AnswerHub link from launcher. [view commit](http://github.com/xenko3d/xenko/commit/a29c49d08a6e71602436a22192276d0d800c160e)

ioc (1):
* Fix broken link to Teamcity Android build in ReadMe [view commit](http://github.com/xenko3d/xenko/commit/c894473a4d45f4fbb474274b47eba4a43dbbec78)

joreg (1):

* VR tracker support ([#213](https://github.com/xenko3d/xenko/issues/213)) [view commit](http://github.com/xenko3d/xenko/commit/7e41209357c9abeb45cdba1ff212409e74730d49)

meriaizen86 (3):

* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/5568199b1d09ed65ee8fb1c0d89ccbe97cc179ca)
* Translated using Weblate (Spanish) [view commit](http://github.com/xenko3d/xenko/commit/a22fd25eba4dc2c4be834bd65f88ed4a3e7918cd)
* Update XenkoDefaultSplashScreen.xktex [view commit](http://github.com/xenko3d/xenko/commit/976fae86f8460472f504a57f13a1bf815cf760e7)

pansan (1):

* Translated using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/98495281053db1686e14fd5285fd24dc9024ef9f)

phr00t (2):

* Make alpha optional in Color4 [view commit](http://github.com/xenko3d/xenko/commit/fdad9d838a6c52afb8e3aa6a58c83263d2ebd35a)
* [UI] don't invalidate text UI if we set it to the same thing [view commit](http://github.com/xenko3d/xenko/commit/0c5a67c0b4e36489c01f0014465457ebc12b8074)

rgawry (1):

* Translated using Weblate (Polish) [view commit](http://github.com/xenko3d/xenko/commit/b1909383c11e22e4488d9740dc42ce3eaf32b361)

ssantos (1):

* Translated using Weblate (German) [view commit](http://github.com/xenko3d/xenko/commit/b3b1eed9da91cb87a0e05a9d6fccbbbac08be79b)

tebjan (4):

* [Assimp] Updated assimp to official 4.1.0 and updated references in projects (closes [#458](https://github.com/xenko3d/xenko/issues/458)) [view commit](http://github.com/xenko3d/xenko/commit/abef0e89ab20628bae8d5411173f9dfe8d032623)
* [Assimp] Updated assimp to official 4.1.0 and updated references in projects (closes [#458](https://github.com/xenko3d/xenko/issues/458)) [view commit](http://github.com/xenko3d/xenko/commit/9cdd43c0091991fca36f81842be0fe2259be60e7)
* fixed null pointer exceptions in render features [view commit](http://github.com/xenko3d/xenko/commit/e3c698465e6d4c1fd1d6b80fcb5131a877c7b7a5)
* removing a package did not fire an event, so all related assets where still in the dependency manager [view commit](http://github.com/xenko3d/xenko/commit/e822a0411c885af88fcae37727d2d50d741b22e6)

xwellingtonx (1):

* Fix editor resizing and to insert auto hide minimum size (fixes [#189](https://github.com/xenko3d/xenko/issues/189) and [#190](https://github.com/xenko3d/xenko/issues/190)) [view commit](http://github.com/xenko3d/xenko/commit/3aac63f7e580dc36399936c8ffc393fcd81d5b5d)

陈宇航 (1):

* Translated using Weblate (Chinese (Simplified)) [view commit](http://github.com/xenko3d/xenko/commit/72700e4fa4f32b4e21844f1eef8141cb0b86b19f)



Generated using
```
git shortlog origin/master-3.0..origin/master-3.1 -w0,0,0 --pretty=format:"* %s [view commit](http://github.com/xenko3d/xenko/commit/%H)" | sed -r "s/#([[:digit:]]*)/[#\1](https:\/\/github.com\/xenko3d\/xenko\/issues\/\1)/g"
```
