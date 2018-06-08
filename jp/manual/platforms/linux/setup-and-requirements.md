# セットアップと要件

Xenko を使用して Linux 用の開発を行うには、少なくとも OpenGL 4.2 または Vulkan 1.0 をサポートするグラフィックス カードを備えた Linux PC が必要です。Xenko の推奨される Linux ディストリビューションは、Ubuntu 16.04 以降です。Linux バージョンの Xenko の開発には、このセットアップが使用されました。

以下の説明では、Ubuntu 16.04 がインストールされているものとします。Linux のディストリビューションに従って調節することが必要な場合があります。

また、Game Studio を使用して Linux 用のプロジェクトをビルドするには、Windows PC も必要です。

## セットアップ

以下のパッケージが必要です。

* [FreeType](#freetype)

* [OpenAL](#openal)

* [SDL2](#sdl2)

* Mono または .NET Core (両方インストールしてもかまいません)

## FreeType

フォントのレンダリングには、[FreeType](https://www.freetype.org/) ライブラリを使用します。バージョン 2.6 以降が必要であり、次のコマンドでインストールできます。

```
sudo apt-get install libfreetype6-dev
```

## OpenAL

サウンドと音楽の再生には、[OpenAL](https://www.openal.org/) ライブラリを使用します。次のコマンドでインストールできます。

```
sudo apt-get install libopenal-dev
```

## SDL2

Linux でゲームを実行するには、[SDL2](https://www.libsdl.org/) ライブラリを使用します。このライブラリを使用すると、ウィンドウを作成し、マウス、キーボード、ジョイスティックのイベントを処理できます。バージョン 2.0.4 以降が必要であり、次のコマンドでインストールできます。

```
sudo apt-get install libsdl2-dev
```

## Mono

Mono のインストールについては、Debian/Ubuntu 向けの [Mono Project](http://www.mono-project.com/docs/getting-started/install/linux/) のインストールの説明を参照してください。

バージョン 4.4 がインストールされていることを確認します。インストールされているバージョンを確認するには、次のように入力します。

```
mono --version
```

### .NET Core

.NET Core のインストール方法については、[Debian/Ubuntu についての .NET Core の説明](https://www.microsoft.com/net/core#ubuntu)を参照してください。

バージョン 1.0 がインストールされていることを確認します。インストールされているバージョンを確認するには、次のように入力します。

```
dotnet --version
```

## 関連項目

* [Linux 用ゲームを作成する](create-a-linux-game.md)
