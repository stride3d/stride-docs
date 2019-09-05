using Xenko.Core.Mathematics;
using Xenko.Engine;
using Xenko.Input;

namespace Tutorials.Basics {
    /// <summary>
    /// This script demonstrates how to check for any mouse input.
    /// </summary>
    public class MouseInput : SyncScript {
        public Entity blueTheapot;
        public Entity yellowTheapot;
        public Entity greenTheapot;
        public Entity pinkTheapot;

        private float currentScrollIndex = 0;

        public override void Start() {}

        public override void Update() {
            //First lets check if we have a mouse.
            if (Input.HasMouse) {

                //Key down is used for when a key is being held down.
                DebugText.Print("Hold the left mouse button down to rotate the blue theapot", new Int2(50, 120));
                if (Input.IsMouseButtonDown(MouseButton.Left)) {
                    var deltaTime = (float)Game.UpdateTime.Elapsed.TotalSeconds;
                    blueTheapot.Transform.RotationEulerXYZ += new Vector3(0, 0.3f * deltaTime, 0);
                }

                //Use 'IsMouseButtonPressed' for a single mouse click event. 
                DebugText.Print("Click the right mouse button to rotate the yellow theapot", new Int2(50, 160));
                if (Input.IsMouseButtonPressed(MouseButton.Right)) {
                    yellowTheapot.Transform.RotationEulerXYZ += new Vector3(0, 35, 0);
                }

                //'IsMouseButtonReleased' is used for when you want to know when a mouse button is released after being either held down or pressed. 
                DebugText.Print("Press and release the middel mousebutton/scrollwheel to rotate the green theapot", new Int2(50, 200));
                if (Input.IsMouseButtonReleased(MouseButton.Middle)) {
                    greenTheapot.Transform.RotationEulerXYZ += new Vector3(0, 55, 0);
                }

                //We can use the mousewheel delta do determine if a mousewheel has rotated. 
                //Scrolling forward gives a mousewheel delta of 1, and scrolling backwards gives a mousewheel delta of -1. 
                //If in the next frame the mousewheel is not scrolled, the mouse wheel delta is 0 again.
                currentScrollIndex += Input.MouseWheelDelta;
                DebugText.Print("Scroll the mouse wheel to rotate the pink theapot. Scroll index: " + currentScrollIndex, new Int2(50, 240));
                pinkTheapot.Transform.RotationEulerXYZ = new Vector3(0, 0.4f * currentScrollIndex, 0);

                //We can draw some text at the position of our mouse by getting the absolute mouse position
                var mousePos = Input.AbsoluteMousePosition;
                DebugText.Print("Mouse position: " + mousePos, new Int2(mousePos));
            }
        }
    }
}
