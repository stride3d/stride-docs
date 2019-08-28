using Xenko.Core.Mathematics;
using Xenko.Engine;

namespace Tutorials.Basics {
    /// <summary>
    /// This script is used in combination with the GettingAComponent.cs script 
    /// </summary>
    public class AmmoComponent : StartupScript {
        private int _clips = 0;
        private int _bullets = 0;

        public override void Start() {
            _clips = 4;
            _bullets = 6;
        }

        //This method return the total amount of ammo
        public int GetTotalAmmo() {
            return _bullets * _clips;
        }
    }
}
