using System.Collections.Generic;
using System.Linq;
using Xenko.Core.Mathematics;
using Xenko.Engine;

namespace Tutorials.Basics {
    /// <summary>
    /// This script is used to demonstrate how we can get child entities of an entity
    /// </summary>
    public class ChildEntities : SyncScript {
        Entity child0;
        Entity child1;
        List<Entity> children;

        public override void Start() { 
            //We can get a child by using GetChild(). This takes an index number starting at 0
            child0 = Entity.GetChild(0);
            child1 = Entity.GetChild(1);
            //var nonExistinChild = Entity.GetChild(2); //If we would try to get Child 3 (which doesn't exist), we would get an exception

            //We retrieve all children from our entity and store it in a list. 
            //NOTE: This does not include any subchildren of those children
            children = Entity.GetChildren().ToList();
        }

        public override void Update() {
            int drawX = 30, drawY = 200, increment = 20;

            //We print the name of the our entity
            DebugText.TextColor = Color.Blue;
            DebugText.Print(Entity.Name, new Int2(drawX, drawY));

            //we loop over all the children that we have found and display their name
            foreach (var child in children) {

                //We print the name of the child
                drawY += increment;
                DebugText.TextColor = Color.Yellow;
                DebugText.Print(child.Name, new Int2(drawX + increment, drawY));

                //It is possible that this child, also has children. We retrieve them, loop over them and print their name too
                var subChildren = child.GetChildren().ToList();
                foreach (var subChild in subChildren) {
                    drawY += increment;
                    DebugText.TextColor = Color.Green;
                    DebugText.Print(subChild.Name, new Int2(drawX + (increment*2), drawY));
                }
            }
        }
    }
}
