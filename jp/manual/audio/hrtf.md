# 頭部伝達関数 (HRTF) オーディオ

**頭部伝達関数 (HRTF)** は、サウンドが 3D 空間内の特定のポイントで生成されているようにしてバイノーラル オーディオを合成する、高度なオーディオ表現手法です。標準の[空間オーディオ](spatialized-audio.md)より現実に近いオーディオが提供されます。たとえば、HRTF を有効にすると、プレイヤーはキャラクターが自分より上にいるのか下にいるのかを聞き分けることができます。没入感が増すので、[VR アプリケーション](../virtual-reality/index.md)に特に適しています。

HRTF を使用するためにプレイヤーが特別なハードウェアを装着する必要はありません。ただし、スピーカーよりヘッドホンの方が、はるかに良い効果が得られます。

次のビデオでは、HRTF オーディオの効果を実際にご覧に体験できます。

<p>
<video class="embed-responsive-item" poster="media/hrtf-first-frame.jpg" controls>
   <source src="media/hrtf.mp4" type="video/mp4">
</video>
</p>

>[!NOTE]
>現在、HRTF は Windows 10 でのみ使用できます。

## HRTF を有効にする

HRTF を使用するには、最初に［Game Settings］アセットでグローバルに有効にした後、使用するエンティティで HRTF を有効にします。

### 1. HRTF をグローバルに有効にする

1. ［Solution explorer］(既定では左下のペイン) で、［Assets］フォルダーを選択します。

    ![Select Assets folder asset](../game-studio/media/select-asset-folder.png)

2. ［Asset view］(既定では下部のペイン) で、［Game Settings］アセットを選択します。

    ![Select Game Settings asset](../game-studio/media/select-game-settings-asset.png)

3. ［Property grid］(既定では右側のペイン) で、［Audio Settings］の［HRTF support］を選択します。

    ![Audio settings](../game-studio/media/audio-settings.png)

ゲーム設定アセットの詳細については、「[ゲームの設定](../game-studio/game-settings.md)」を参照してください。

### 2. HRTF をエンティティで有効にする

1. HRTF を有効にするサウンドを含むエンティティを[オーディオ エミッター](audio-emitters.md)で選択します。

2. ［Property grid］(既定では右側) の［Audio Emitter］で、［Use HRTF］を選択します。

    ![Audio emitter properties](media/audio-emitter-properties.png)

    このエンティティから生成されるサウンドは、HRTF を使用するようになります。

    >[!NOTE]
    >HRTF オプションは、このオーディオ エミッターから生成されるすべてのサウンドに適用されます。

変更できるプロパティなど、オーディオ エミッターの詳細については、「[オーディオ エミッター](audio-emitters.md)」を参照してください。

### 関連項目

* [Head-related transfer function (頭部伝達関数) (Wikipedia)](https://en.wikipedia.org/wiki/Head-related_transfer_function)
* [空間オーディオ](spatialized-audio.md)
* [オーディオ エミッター](audio-emitters.md)
* [オーディオ リスナー](audio-listeners.md)
* [ゲームの設定](../game-studio/game-settings.md)
