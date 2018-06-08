# 非空間オーディオ

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

**非空間オーディオ**は、エンティティ (プレイヤー カメラなど) の位置に関係なく、シーン全体で同じように聴こえます。非空間オーディオはステレオで、1 つの軸 (通常は X 軸) に沿って移動します。[空間オーディオ](spatialized-audio.md)とは異なり、非空間オーディオの_ボリューム_、_ピッチ_ (_周波数_)、その他のパラメーターは変化しません。背景音楽やメニューのサウンド エフェクトなどに便利です。

![Non-spatialized audio](media/audio-index-non-spatialized-audio.png)

非空間オーディオでは、[オーディオ エミッター](audio-emitters.md)または[オーディオ リスナー](audio-listeners.md)は必要ありません。

## 1. オーディオをインポートしてビルドに含める

1. [オーディオをサウンド アセットとしてインポート](import-audio.md)します。

2. サウンド アセットが**ルート アセット**であることを確認します。ルート アセットとは、実行時に使用できるようにビルドに組み込まれるアセットです。

   ［Asset view］で、アセットを右クリックして［Include in build as root asset］を選択します。

    ![Include in build as root asset](media/audio-include-in-build-as-root-asset.png)

    メニュー オプションの表示が［Do not include in build as root asset］になっている場合は、オプションは既に選択されているので、変更する必要はありません。

## 2. オーディオを再生するスクリプトを作成する

非空間オーディオを実行時に再生するには、コードでインスタンスを作成して動作を定義します。

[SoundInstance](xref:SiliconStudio.Xenko.Audio.SoundInstance) は、以下のプロパティで実行時にオーディオを制御します。

| プロパティ  | 機能 |
|-------    |-------|
| [IsLooping](xref:SiliconStudio.Xenko.Audio.SoundInstance.IsLooping) | オーディオのループを取得または設定します。 |
| [Pan](xref:SiliconStudio.Xenko.Audio.SoundInstance.Pan)       | 左右のスピーカーのバランスを設定します。既定では、各スピーカーの値は 0.5 です。 |
| [Pitch](xref:SiliconStudio.Xenko.Audio.SoundInstance.Pitch)     | オーディオのピッチ (周波数) を取得または設定します。 |
| [PlayState](xref:SiliconStudio.Xenko.Audio.SoundInstance.PlayState)	| [SoundInstance](xref:SiliconStudio.Xenko.Audio.SoundInstance) の状態を取得します。 |
| [Position](xref:SiliconStudio.Xenko.Audio.SoundInstance.Position)	| オーディオの現在の再生位置を取得します。 |
| [Volume](xref:SiliconStudio.Xenko.Audio.SoundInstance.Volume)	| オーディオのボリュームを設定します。 |

詳細については、[SoundInstance API のドキュメント](xref:SiliconStudio.Xenko.Audio.SoundInstance)を参照してください。

> [!NOTE]
サウンドが既に再生中の場合に [SoundInstance.Play](xref:SiliconStudio.Xenko.Audio.SoundInstance.Play) をさらに呼び出してもすべて無視されます。
[SoundInstance.Pause](xref:SiliconStudio.Xenko.Audio.SoundInstance.Pause) (サウンドが既に一時停止されているとき) および [SoundInstance.Stop](xref:SiliconStudio.Xenko.Audio.SoundInstance.Stop) (サウンドが既に停止されているとき) についても同じです。

たとえば、次に示すコードは次の処理を行います。

* 非空間オーディオをインスタンス化します
* ループするようにオーディオを設定します
* ボリュームを設定します
* オーディオを再生します

```cs
public override async Task Execute()
{
    // サウンドを読み込む
    Sound musicSound = Content.Load<Sound>("MySound");

    // サウンドのインスタンスを作成する
    SoundInstance music = musicSound.CreateInstance();

    // ループする
    music.IsLooping = true;

    // ボリュームを設定する
    music.Volume = 0.25f;

    // 音楽を再生する
    music.Play();
}
```

### 代替手段: パブリック変数でスクリプトを作成する

使用するサウンド アセットごとにパブリック変数を作成します。上に列記したものと同じプロパティを使用できます。
次に例を示します。

```cs
public class MySoundScript : SyncScript
{
    public Sound MyMusic;

    private SoundInstance musicInstance;
    public bool PlayMusic;

    public override void Start()
    {
        musicInstance = MyMusic.CreateInstance();
    }

    public override void Update()
    {
        // 音楽が再生されていなくて、再生する必要がある場合は、音楽を再生する。
        if (PlayMusic & musicInstance.PlayState != SoundPlayState.Playing)
        {
            musicInstance.Play();
        }

        // 音楽が再生されていて、再生してはならない場合は、音楽を停止する。
        else if (!PlayMusic)
        {
            musicInstance.Stop();
        }
    }
}
```
## スクリプトをエンティティに追加する

1. ［Scene view］で、スクリプトを追加するエンティティを選択します。

    ![Select an entity](media/audio-add-audiolistener-component-select-entity.png)

2. ［Property grid］で、［Add component］をクリックして、スクリプトを選択します。

    ![Click Add component](media/audio-emitters-add-script-component.png)

    スクリプトがエンティティに追加されます。

3. **パブリック変数**をスクリプトに追加した場合、パブリック変数をサウンド アセットに関連付ける必要があります。

   ［Asset view］から各変数にアセットをドラッグ アンド ドロップします。

    ![Drag and drop a sound asset](media/entity-audio-drag-and-drop-audio-asset-to-script-component.gif)

    または、![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Select an asset］) をクリックします。

    ![Pick up an asset](media/audio-play-script-component-pick-an-asset.png)

    次に、使用するサウンド アセットを選択します。

    ![Select a sound asset](media/audio-play-audioemitter-component-add-select-audio-asset.png)

## 関連項目
* [オーディオのインポート](import-audio.md)
* [グローバル オーディオ設定](global-audio-settings.md)
* [空間オーディオ](spatialized-audio.md)
