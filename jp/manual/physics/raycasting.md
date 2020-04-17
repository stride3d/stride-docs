# レイキャスティング

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">プログラマー</span>

**レイキャスティング**は、シーン内を通る見えない直線をトレースして、交差している[コライダー](colliders.md)を検出します。これは、たとえば、銃の射線内にあるオブジェクトや、ユーザーがクリックしたときにマウス カーソルの下にあるオブジェクトを調べるのに役立ちます。

>[!NOTE]
>レイキャスティングは**コライダー**を使用して交差を計算します。コライダー コンポーネントを持たないエンティティは無視されます。詳細については、「[コライダー](colliders.md)」を参照してください。

レイキャストを使用するには、現在の [Simulation](xref:Stride.Physics.Simulation) で、[Simulation.Raycast](xref:Stride.Physics.Simulation.Raycast\(Stride.Core.Mathematics.Vector3,Stride.Core.Mathematics.Vector3\)) を使用します。

レイキャスティングのレイについては、Stride に含まれる **Physics Sample** プロジェクトを参照してください。

## コード例

次のコードは、マウスの画面位置からレイキャストを送ります。

```cs
public static bool ScreenPositionToWorldPositionRaycast(Vector2 screenPos, CameraComponent camera, Simulation simulation)
{
    Matrix invViewProj = Matrix.Invert(camera.ViewProjectionMatrix);

    // (-1, +1) の範囲に投影空間の位置を再構築する。
    //    Y は画面座標では下だが、投影空間では上であることを忘れないこと
    Vector3 sPos;
    sPos.X = screenPos.X * 2f - 1f;
    sPos.Y = 1f - screenPos.Y * 2f;

    // レイキャストの近い側の (開始) ポイントを計算する
    // 同じ投影空間 (x,y) 座標と z = 0 を持つものと想定する (近い平面上にある)
    // ワールド空間には投影しないようにする必要がある
    sPos.Z = 0f;
    var vectorNear = Vector3.Transform(sPos, invViewProj);
    vectorNear /= vectorNear.W;

    // レイキャストの遠い側の (終了) ポイントを計算する
    // 同じ投影空間 (x,y) 座標と z = 1 を持つものと想定する (遠い平面上にある)
    // ワールド空間には投影しないようにする必要がある
    sPos.Z = 1f;
    var vectorFar = Vector3.Transform(sPos, invViewProj);
    vectorFar /= vectorFar.W;

    // 近い平面のポイントから遠い平面のポイントにレイキャストし、衝突の結果を取得する
    var result = simulation.Raycast(vectorNear.XYZ(), vectorFar.XYZ());
    return result.Succeeded;
}
```

## 関連項目
* [コライダー](colliders.md)
