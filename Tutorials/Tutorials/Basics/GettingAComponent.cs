using Xenko.Core.Mathematics;
using Xenko.Engine;

namespace Tutorials.Basics {
    /// <summary>
    /// This script demonstrates how to get and remove components that are attached to an entiy. 
    /// Try not to Get a component every frame as this will have negative performance impact. 
    /// Instead try to cache a component in the start method or when an object is initialized/triggered
    /// </summary>
    public class GettingAComponent : SyncScript {
        int ammoCount1 = 0;
        int ammoCount2 = 0;
        int ammoCount3A = 0;
        int ammoCount3B = 0;
        AmmoComponent ammoComponent3;

        public override void Start() {
            //We retrieve the Ammo component that is also attached to the current entity
            AmmoComponent ammoComponent1 = Entity.Get<AmmoComponent>();
            //We can now access public methods and properties of the retrieve component
            ammoCount1 = ammoComponent1.GetTotalAmmo();

            //We now remove the AmmoComponent from our entity. If we try to retrieve it again, null would returned
            Entity.Remove<AmmoComponent>();
            AmmoComponent ammoComponent2 = Entity.Get<AmmoComponent>();
            if (ammoComponent2 != null) { //now that 'ammoComponent' is null, we will never be able to retrieve the total ammo
                ammoCount2 = ammoComponent2.GetTotalAmmo();
            }

            //We can also automatically create and attach a component, in case the entity doesn't have the component attached
            //NOTE: when you create a component like this, the 'Start' method will be called after this script's Update method has executed
            ammoComponent3 = Entity.GetOrCreate<AmmoComponent>();
            //Because the start method of AmmoComponent3 is not called yet at this point, ammoCount3A will remain at 0
            ammoCount3A = ammoComponent3.GetTotalAmmo();
        }

        public override void Update() {
            //We always retrieve the latest value for ammoCount3B every frame
            ammoCount3B = ammoComponent3.GetTotalAmmo();

            //We display the stored ammo count on screen
            DebugText.Print("Ammo count 1: " + ammoCount1.ToString(), new Int2(10, 200));
            DebugText.Print("Ammo count 2: " + ammoCount2.ToString(), new Int2(10, 220));
            DebugText.Print("Ammo count 3A: " + ammoCount3A.ToString(), new Int2(10, 240));
            DebugText.Print("Ammo count 3B: " + ammoCount3B.ToString(), new Int2(10, 260));
        }
    }
}
