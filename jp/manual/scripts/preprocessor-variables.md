# プリプロセッサ変数

<span class="label label-doc-level">上級</span>
<span class="label label-doc-audience">プログラマー</span>

複数のプラットフォームを対象とする開発を行っていると、プラットフォームごとにカスタム コードを作成することが必要な場合がよくあります。通常、そのための最善の方法は [Platform.Type](xref:Stride.Core.Platform.Type) および [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform) を使用することです。もう 1 つの方法として、**プリプロセッサ変数**を使用することもできます。

> [!WARNING]
> 可能な場合はプリプロセッサ変数を使わずに、[Platform.Type](xref:Stride.Core.Platform.Type) および [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform) を使用することをお勧めします。これは、コンパイル時にターゲット プラットフォーム用のコードのみがチェックされ、コードのエラーが見落とされる可能性があるためです。

## プラットフォーム

| 変数                               | 値                          |
| -------------------------------------- | ------------------------------ |
| SILICONSTUDIO_PLATFORM_WINDOWS         | Windows (標準および RT)      |
| SILICONSTUDIO_PLATFORM_WINDOWS_DESKTOP | Windows (非 RT)               |
| SILICONSTUDIO_PLATFORM_WINDOWS_RT      | Windows RT                     |
| SILICONSTUDIO_PLATFORM_WINDOWS_PHONE   | Windows Phone                  |
| SILICONSTUDIO_PLATFORM_MONO_MOBILE     | Xamarin.iOS または Xamarin.Android |
| SILICONSTUDIO_PLATFORM_ANDROID         | Xamarin.Android                |
| SILICONSTUDIO_PLATFORM_IOS             | Xamarin.iOS                    |

## グラフィックス API

| 変数                                      | 値                 |
| --------------------------------------------- | --------------------- |
| Stride_GRAPHICS_API_DIRECT3D   | Direct3D 11           |
| Stride_GRAPHICS_API_OPENGL     | OpenGL (Core および ES)  |
| Stride_GRAPHICS_API_OPENGLCORE | OpenGL Core (Desktop) |
| Stride_GRAPHICS_API_OPENGLES   | OpenGL ES             |
| Stride_GRAPHICS_API_VULKAN     | Vulkan                |

## 例

```cs

#if SILICONSTUDIO_PLATFORM_WINDOWS
    // Windows 固有のコードはここに記述する...

#elif SILICONSTUDIO_PLATFORM_MONO_MOBILE
    // iOS および Android 固有のコードはここに記述する...

#else
    // その他のプラットフォームのコードはここに記述する...

#endif
```

## 関連項目

* [プラットフォーム](../platforms/index.md)
* [スクリプトの種類](types-of-script.md)
* [スクリプトを作成する](create-a-script.md)
* [スクリプトを使用する](use-a-script.md)
* [パブリック プロパティとフィールド](public-properties-and-fields.md)
* [スケジュール設定と優先順位](scheduling-and-priorities.md)
* [イベント](events.md)
* [デバッグ](debugging.md)
