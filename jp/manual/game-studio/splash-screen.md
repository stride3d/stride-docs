# スプラッシュ画面

<span class="label label-doc-level">初級</span>

**スプラッシュ画面**とは、ゲームの開始時に表示される画像 (通常はロゴ) です。カラーの地の上にフェードインした後、フェードアウトします。

> [!NOTE]
> スプラッシュ画面は、ゲームがリリース モードでビルドされている場合にのみ表示されます。

既定のスプラッシュ画面は Stride のロゴです。

![Default splash screen](media/StrideDefaultSplashScreen.png)

Game Settings で指定できるスプラッシュ画面は 1 つだけです。複数のスプラッシュ画面を使用したい場合は、手動で実装する必要があります。

> [!WARNING]
> [Stride エンド ユーザー ライセンス契約](http://stride3d.net/legal/eula)の条項に従い、Stride Personal (無料) のユーザーは "Powered by Stride" のロゴをスプラッシュ画面に表示する必要があります。無料ライセンスで Stride を使用している場合は、スプラッシュ画面の画像を編集できますが (たとえば、Stride のロゴの上や下にロゴを追加する)、[Stride ロゴの規則 (PDF)](https://stride3d.net/legal/stride-logo-regulations.pdf) に従う必要があります。

## スプラッシュ画面を編集する

スプラッシュ画面の設定は、［Game Settings］アセットの一部です。

1. ［Solution explorer］(既定では左下のペイン) で、［Assets］フォルダーを選択します。

    ![Select Assets folder asset](media/select-asset-folder.png)

2. ［Asset view］(既定では下部のペイン) で、［Game Settings］アセットを選択します。

    ![Select Game Settings asset](media/select-game-settings-asset.png)

3. ［Property grid］(既定では右側のペイン) で、［Splash Screen］を展開します。

    ![Settings](media/splash-screen.png)

### スプラッシュ画面のプロパティ

| プロパティ | 説明
|----------|------------
| Texture  | スプラッシュ画面として表示される画像 (会社のロゴなど) です。既定値は *StrideDefaultSplashScreen* です。
| Color    | スプラッシュ画面がフェードインする色です。既定値は黒 (*#FF000000*) です。

>[!TIP]
>さらに、スプラッシュ画面のテクスチャ自体のプロパティで**ストリーミングを無効にする**ことが必要な場合があります。これにより、テクスチャが常に最高の品質でロードされて表示されることが保証されます。詳細については、「[テクスチャ > ストリーミング](../graphics/textures/streaming.md)」を参照してください。

## 関連項目

* [アセット](../game-studio/game-settings.md)
* [テクスチャ](../graphics/textures/index.md)
