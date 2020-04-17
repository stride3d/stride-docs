# オーディオ リスナー

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

**オーディオ リスナー**は、[空間オーディオ](spatialized-audio.md)を作成するために[オーディオ エミッター](audio-emitters.md)によって生成されるオーディオを聴くエンティティです。シーン内には複数のオーディオ リスナーが存在できます。これはよくあることであり、たとえばマルチプレイヤー ゲームで各プレイヤー カメラがオーディオ リスナーである場合などに発生します。

オーディオ リスナーを構成する必要はありません。_ボリューム_や_ピッチ_ (_周波数_) など、サウンド エフェクトのすべての設定は、オーディオ エミッターで構成します。

シーンにオーディオ リスナーが存在しない場合、オーディオ エミッターで生成されたオーディオは聴こえません。

## オーディオ リスナー コンポーネントをエンティティに追加する

オーディオ リスナーを作成するには、**オーディオ リスナー コンポーネント**をエンティティにアタッチします。このコンポーネントは任意のエンティティにアタッチできます。

1. ［Scene view］で、オーディオ リスナーにするエンティティを選択します。

    ![Select an entity](media/audio-add-audiolistener-component-select-entity.png)

2. ［Property grid］で、［Add component］をクリックし、[オーディオ リスナー コンポーネント](xref:Stride.Audio.AudioListener)を選択します。

    ![Add AudioListener Component](media/audio-add-audiolistener-component.png)

    エンティティはオーディオ リスナーになりました。

> [!WARNING]
iOS では、シーン内の[オーディオ リスナー コンポーネント](xref:Stride.Audio.AudioListener)に対して複数のオブジェクトを作成できますが、実行時に使用されるオブジェクトは 1 つだけです。

## 関連項目
* [空間オーディオ](spatialized-audio.md)
* [オーディオ エミッター](audio-emitters.md)
* [グローバル オーディオ設定](global-audio-settings.md)
