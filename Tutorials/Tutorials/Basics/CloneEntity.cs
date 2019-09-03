using Xenko.Core.Mathematics;
using Xenko.Engine;

namespace Tutorials.Basics {
    /// <summary>
    /// This script demonstrates how to clone an existing entity and how cloned entities can be added to the scene hierarchy.
    /// </summary>
    public class CloneEntity : SyncScript {
        public Entity entityToClone;
        Entity entityClone0;
        Entity entityClone1;
        Entity entityClone2;

        public override void Start() {
            //The Clone method clones an existing entity. 
            //However, if we don't add it to the scene, we will never get to see it.
            entityClone0 = entityToClone.Clone();
            entityClone0.Transform.Position += new Vector3(-2, 0, 0);

            //We can add a cloned entity to the root of the scene. 
            //The cloned entity will be at the same worldposition as the original entity.
            entityClone1 = entityToClone.Clone();
            SceneSystem.SceneInstance.RootScene.Entities.Add(entityClone1);
            entityClone1.Transform.Position += new Vector3(-1, 0, 0); //Move it to the right so that we can see it
            entityClone1.Transform.Scale = new Vector3(0.5f);

            //We can also add a cloned entity as a child of an existing entity. 
            //That means it will use the parent world position + original entity local position
            entityClone2 = entityToClone.Clone();
            entityClone2.Transform.Parent = Entity.Transform;
            entityClone2.Transform.Position += new Vector3(1, 0, 0); //Move it to the left so that we can see it
            entityClone2.Transform.Scale = new Vector3(0.5f);           
        }

        public override void Update() {
            DebugText.TextColor = Color.Red;
            DebugText.Print("Entity clone 0 has not been added to the scene.", new Int2(200, 80));
            DebugText.Print("Entity clone 1 is in the root of the scene.", new Int2(200, 120));
            DebugText.Print("Entity clone 2 is a child of the blue theapot.", new Int2(200, 400));
        }
    }
}
