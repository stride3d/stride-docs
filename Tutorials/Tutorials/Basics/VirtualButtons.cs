using Xenko.Core.Mathematics;
using Xenko.Engine;
using Xenko.Input;

namespace Tutorials.Basics {
    /// <summary>
    /// This script demonstrates how to create virtual buttons and how to use them.
    /// </summary>
    public class VirtualButtons : SyncScript {
        public Entity blueTheapot;

        public override void Start() {
            // Create a new VirtualButtonConfigSet if none exists. 
            Input.VirtualButtonConfigSet = Input.VirtualButtonConfigSet ?? new VirtualButtonConfigSet();

            //Bind the "W" key and "Up arrow" a virtual button called "Forward".
            var forwardW = new VirtualButtonBinding("Forward", VirtualButton.Keyboard.W);
            var forwardUpArrow = new VirtualButtonBinding("Forward", VirtualButton.Keyboard.Up);
            var forwardLeftMouse = new VirtualButtonBinding("Forward", VirtualButton.Mouse.Left);

            //Create a new virtual button configuration and add the virtual button bindings
            var virtualButtonForward = new VirtualButtonConfig();
            virtualButtonForward.Add(forwardW);
            virtualButtonForward.Add(forwardUpArrow);
            virtualButtonForward.Add(forwardLeftMouse);

            //Add the virtual button binding to the virtual button configuration
            Input.VirtualButtonConfigSet.Add(virtualButtonForward);
        }

        public override void Update() {
            //We retrieve a float value from the virtual button. When the value is higher than 0, we now that we have at least of keys or mouse pressed
            var movingForward = Input.GetVirtualButton(0, "Forward");

            DebugText.Print("Holding down either W, the Up arrow or clicking the left mouse button, will result in a rotating blue theapot.", new Int2(50, 120));
            DebugText.Print("Virtual button Forward: " + movingForward, new Int2(50, 160));
            if (movingForward > 0) {
                var deltaTime = (float)Game.UpdateTime.Elapsed.TotalSeconds;
                blueTheapot.Transform.RotationEulerXYZ += new Vector3(0, 0.2f * deltaTime, 0);
            }
        }
    }
}
