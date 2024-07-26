# Gizmos

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

**Gizmos** are a tool which you can implement over your components to provide visual assistance for designers when manipulating component values.

Here's an exhaustive example one could implement:
```cs
using Stride.Core;
using Stride.Core.Mathematics;
using Stride.Engine;
using Stride.Engine.Gizmos;
using Stride.Graphics;
using Stride.Graphics.GeometricPrimitives;
using Stride.Rendering;
using Stride.Rendering.Materials;
using Stride.Rendering.Materials.ComputeColors;

// We will be implementing a Gizmo for the following class
public class MyScript : StartupScript
{
    
}

// This attribute specifies to the engine that the following gizmo class is bound to 'MyScript', 
// the game studio will pick that up and spawn an instance of that class for each 'MyScript' in the scene
[GizmoComponent(typeof(MyScript), isMainGizmo:false/*When true, only the first gizmo on an entity with true is visible, false means that it is always visible*/)]
public class Gizmo : IEntityGizmo
{
    private bool _selected, _enabled;
    private MyScript _component;
    private ModelComponent _model;
    private Material _material, _materialOnSelect;

    // This property is set based on whether the gizmo is globally turned on or off in the editor's view settings
    public bool IsEnabled
    {
        get
        {
            return _enabled;
        }
        set
        {
            _enabled = value;
            _model.Enabled = _enabled;
        }
    }

    // The size slider value in the view settings pane
    public float SizeFactor { get; set; }

    // The editor will set this property whenever the entity the component is on is selected
    public bool IsSelected
    {
        get
        {
            return _selected;
        }
        set
        {
            _selected = value;
            _model.Materials[0] = _selected ? _materialOnSelect : _material;
            // The logic below shows gizmos for all components when they are on in the gizmo settings, and when off, only shows the one from the selected entity
            // Removing the line hides gizmos even when selected when the gizmo settings is off
            _model.Enabled = _selected || _enabled;
        }
    }

    // This constructor is called by the editor, 
    // A gizmo class MUST contain a constructor with a single parameter of the component's type
    public Gizmo(MyScript component)
    {
        _component = component;
    }

    public bool HandlesComponentId(OpaqueComponentId pickedComponentId, out Entity? selection)
    {
        // This function is called when scene picking/mouse clicking in the scene on a gizmo
        // The engine calls this function on each gizmos, gizmos in term notify the engine
        // when the given component comes from them by returning true, and provide the editor with the corresponding entity this gizmo represents
        if (pickedComponentId.Match(_model))
        {
            selection = _component.Entity;
            return true;
        }
        selection = null;
        return false;
    }

    public void Initialize(IServiceRegistry services, Scene editorScene)
    {
        // As part of initialization, we create a model in the editor scene to visualize the gizmo
        var graphicsDevice = services.GetSafeServiceAs<IGraphicsDeviceService>().GraphicsDevice;

        // In our case we'll just rely on the GeometricPrimitive API to create a sphere for us
        // You don't have to create one right away, you can delay it until the component is in the appropriate state
        // You can also dynamically create and update one in the Update() function further below
        var sphere = GeometricPrimitive.Sphere.New(graphicsDevice);

        var vertexBuffer = sphere.VertexBuffer;
        var indexBuffer = sphere.IndexBuffer;
        var vertexBufferBinding = new VertexBufferBinding(vertexBuffer, new VertexPositionNormalTexture().GetLayout(), vertexBuffer.ElementCount);
        var indexBufferBinding = new IndexBufferBinding(indexBuffer, sphere.IsIndex32Bits, indexBuffer.ElementCount);

        _material = Material.New(graphicsDevice, new MaterialDescriptor
        {
            Attributes =
            {
                Emissive = new MaterialEmissiveMapFeature(new ComputeColor(new Color4(0.25f,0.75f,0.25f,0.05f).ToColorSpace(graphicsDevice.ColorSpace))) { UseAlpha = true },
                Transparency = new MaterialTransparencyBlendFeature()
            },
        });
        _materialOnSelect = Material.New(graphicsDevice, new MaterialDescriptor
        {
            Attributes =
            {
                Emissive = new MaterialEmissiveMapFeature(new ComputeColor(new Color4(0.25f,0.75f,0.25f,0.5f).ToColorSpace(graphicsDevice.ColorSpace))) { UseAlpha = true },
                Transparency = new MaterialTransparencyBlendFeature()
            },
        });

        _model = new ModelComponent
        {
            Model = new Model
            {
                (_selected ? _materialOnSelect : _material),
                new Mesh
                {
                    Draw = new MeshDraw
                    {
                        StartLocation = 0,
                        // You can swap to LineList or LineStrip to show the model in wireframe mode, you'll have to adapt your index buffer to that new type though
                        PrimitiveType = PrimitiveType.TriangleList,
                        VertexBuffers = new[] { vertexBufferBinding },
                        IndexBuffer = indexBufferBinding,
                        DrawCount = indexBuffer.ElementCount,
                    }
                }
            },
            RenderGroup = IEntityGizmo.PickingRenderGroup, // This RenderGroup allows scene picking/selection, use a different one if you don't want selection
            Enabled = _selected || _enabled
        };

        var entity = new Entity($"{nameof(Gizmo)} for {_component.Entity.Name}"){ _model };
        entity.Transform.UseTRS = false; // We're controlling the matrix directly in this case
        entity.Scene = editorScene;

        vertexBuffer.DisposeBy(entity);
        indexBuffer.DisposeBy(entity); // Attach buffers to the entity for manual disposal later
    }

    public void Dispose()
    {
        _model.Entity.Scene = null;
        _model.Entity.Dispose(); // Clear the two buffers we attached above
    }

    public void Update()
    {
        // This is where you'll update how the gizmo looks based on MyScript's state
        // Here we'll just ensure the gizmo follows the entity it is representing whenever that entity moves, 
        // note that UseTRS is disabled above to improve performance and ensure that there are no world space issues
        _model.Entity.Transform.LocalMatrix = _component.Entity.Transform.WorldMatrix;
    }
}
```
And the result:

![Green sphere gizmo](media/gizmo.png)

Do note that you may have to restart the editor if it was open while you introduced this new gizmo.