# プラットフォーム

![Platforms](media/game-engine-system-requirements-intro-pic.png)

Xenko はクロスプラットフォームのゲーム エンジンです。つまり、ゲームをいったん作成すると、Xenko がサポートするすべてのプラットフォームでそれをコンパイルして展開できます。エンジンは、C# とシェーダーを異なるネイティブ言語に変換し、プラットフォームによって異なる概念を抽象化するので、プラットフォームごとにコードを変更する必要はありません。

## サポートされるプラットフォーム

* Windows Desktop 7、8、10
* ユニバーサル Windows プラットフォーム (UWP)
* [Linux (Ubuntu)](linux/index.md)
* Android 2.3 以降
* iOS 8.0 以降

> [!TIP]
> プロジェクトが使用しているプラットフォームを確認するには、コード (スクリプト内など) にブレーク ポイントを追加し、プロジェクトを実行して、[Platform.Type](xref:SiliconStudio.Core.Platform.Type) 変数を調べます。

## サポートされるグラフィックス プラットフォーム

* DirectX 9、10、11、12
* OpenGL 3、4
* OpenGL ES 2、3
* Vulkan

> [!TIP]
> **Game settings** アセットの［Rendering settings］>［Target graphics platform］でグラフィックス プラットフォームを設定します。詳細については、「[ゲームの設定](../game-studio/game-settings.md)」を参照してください。

## プリプロセッサ変数

特定のプラットフォームにおいてのみコンパイルされるコードを記述する必要がある場合のために、Xenko ではプリプロセッサ変数が定義されています。詳細については、「[プリプロセッサ変数](../scripts/preprocessor-variables.md)」を参照してください。

## このセクションの内容

* [Linux](linux/index.md)
* [UWP](uwp/index.md)
    * [Xbox Live](uwp/xbox-live.md)
* [プラットフォームを追加または削除する](add-or-remove-a-platform.md)
* [グラフィックス プラットフォームを変更する](change-the-graphics-platform.md)
