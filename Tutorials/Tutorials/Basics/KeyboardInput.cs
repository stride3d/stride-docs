using Xenko.Core.Mathematics;
using Xenko.Engine;
using Xenko.Input;

namespace Tutorials.Basics {
    /// <summary>
    /// This script demonstrates how to check for keyboard input.
    /// </summary>
    public class KeyboardInput : SyncScript {
        public Entity blueTheapot;
        public Entity yellowTheapot;
        public Entity greenTheapot;

        public override void Start() {}

        public override void Update() {
            //First lets check if we have a keyboard.
            if (Input.HasKeyboard) {

                //Key down is used for when a key is being held down.
                DebugText.Print("Hold the 1 key down to rotate the blue theapot", new Int2(50, 160));
                if (Input.IsKeyDown(Keys.D1)) {
                    var deltaTime = (float)Game.UpdateTime.Elapsed.TotalSeconds;
                    blueTheapot.Transform.RotationEulerXYZ += new Vector3(0, 0.3f * deltaTime, 0);
                }

                //Use 'IskeyPressed' for a single key press event. 
                DebugText.Print("Press F to rotate the yellow theapot (and to pay respects)", new Int2(50, 200));
                if (Input.IsKeyPressed(Keys.F)) {
                    yellowTheapot.Transform.RotationEulerXYZ += new Vector3(0, 35, 0);
                }

                //'IsKeyReleased' is used for when you want to know when a key is released after being either held down or pressed. 
                DebugText.Print("Press and release the Space bar to rotate the green theapot", new Int2(50, 240));
                if (Input.IsKeyReleased(Keys.Space)) {
                    greenTheapot.Transform.RotationEulerXYZ += new Vector3(0, 55, 0);
                }
            }
        }
    }
}
