# 空間オーディオ

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>
<span class="label label-doc-audience">プログラマー</span>

**空間オーディオ**は **3D オーディオ**とも呼ばれ、3 次元のサウンドをシミュレートします。
これにより、[非空間オーディオ](non-spatialized-audio.md)よりはるかに現実的なオーディオが作成されます。

現実の世界で聞こえる音は、ボリューム、周囲の環境 (洞窟、小さい部屋など)、音源の位置と動きなどの要因によって影響を受けます。たいていは、音がどちらから聞こえてきて、音源が動いているかどうかが、だいたいわかります。

![Spatialized audio](media/audio-index-spatialized-audio.png)

たとえば、動いている物体から聞こえてくる音の周波数 (ピッチ) は、観察者の位置によって異なります ([ドップラー効果](https://en.wikipedia.org/wiki/Doppler_effect))。近づいている音源からの音は、遠ざかっている音源からの音より、周波数が高くなります。

![Doppler effect](media/audio-index-play-audio-doppler-effect.png)

リアルな 3D オーディオをシミュレートするため、Stride はシーン内にある次の 2 つのエンティティの位置を追跡しています。

* **[オーディオ エミッター](audio-emitters.md)**: オーディオを生成します
* **[オーディオ リスナー](audio-listeners.md)**: オーディオ エミッターによって生成されたサウンドを聴きます

シーン内の空間オーディオを聴くには、オーディオ エミッターとオーディオ リスナーの両方が必要です。

空間オーディオは、プラットフォーム、デスクトップ、VR ゲームのサウンド エフェクトに広く利用されています。たとえば、銃の発砲音や、キャラクターの足音などです。

> [!NOTE]
> 空間オーディオは、非空間オーディオより多くの CPU を使用します。

## 空間オーディオを有効にする

[サウンド アセットをインポートする](import-audio.md)ときに、アセットの種類として［Spatialized Sound］を選択します。

アセットの［Property grid］で空間オーディオに設定することもできます。

1. ［Asset View］で［Audio Asset］を選択します。

2. ［Property grid］で、［Spatialized］チェック ボックスをオンにします。

    ![Select spatialized sound](media/audio-asset-properties-property-grid-spatialized-sound.png)

> [!NOTE]
> Stride は空間オーディオをモノラル (単一チャンネル) オーディオとして処理します。ソース ファイルが変更されることはありません。

## 関連項目

* [オーディオ エミッター](audio-emitters.md)
* [オーディオ リスナー](audio-listeners.md)
* [HRTF](hrtf.md)
* [グローバル オーディオ設定](global-audio-settings.md)
