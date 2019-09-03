using System.Collections.Generic;
using Xenko.Core;
using Xenko.Core.Mathematics;
using Xenko.Engine;

namespace Tutorials.Basics {
    /// <summary>
    /// This script demonstrates the most common properties you can expose to the editor.
    /// When we add the public keyword to the variables, they show up as properties in the editor.
    /// Note that in the editor, the properties are alphabetically sorted.
    /// </summary>
    public class BasicsProperties : SyncScript {
        public bool aBoolean = true;
        public float aFloat = 5.6f;
        public int anInteger = 10;
        public string aString = "Hello world";
        public Color aColor = Color.Red;
        public Vector2 aVector2 = new Vector2(1,2);
        public Vector3 aVector3 = new Vector3(1,2,3);
        public Vector4 aVector4 = new Vector4(1,2,3,4);

        //We can reference other entities to our script by using the Entity class
        public Entity entity;

        //If we want a list of ojects like strings, integers or even Entities, we have to create the new List right away
        public List<string> stringList = new List<string>();
        public List<Entity> entityList = new List<Entity>();

        //If we dont want a public property to be visible in the editor we can use '[DataMemberIgnore]'
        [DataMemberIgnore]
        public string aHiddenProperty = "HiddenInEditor";

        public override void Update() {
            DebugText.Print("Integer: " +           anInteger,          new Int2(30, 200));
            DebugText.Print("Float: " +             aFloat,             new Int2(30, 220));
            DebugText.Print("Boolean: " +           aBoolean,           new Int2(30, 240));
            DebugText.Print("String: " +            aString,            new Int2(30, 260));
            DebugText.Print("Vector2: " +           aVector2,           new Int2(30, 280));
            DebugText.Print("Vector3: " +           aVector3,           new Int2(30, 300));
            DebugText.Print("Vector4: " +           aVector4,           new Int2(30, 320));
            DebugText.Print("Color: " +             aColor,             new Int2(30, 340));
            DebugText.Print("Entity: " +            entity.Name,        new Int2(30, 360));
            DebugText.Print("String list count: " + stringList.Count,   new Int2(30, 380));
            DebugText.Print("Entity list count: " + entityList.Count,   new Int2(30, 400));

        }
    }
}
