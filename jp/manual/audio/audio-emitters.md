# オーディオ エミッター

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>
<span class="label label-doc-audience">デザイナー</span>

[オーディオ エミッター コンポーネント](xref:Xenko.Audio.AudioEmitter)は、[空間オーディオ](spatialized-audio.md)を作成するために使用されるオーディオを生成します。任意のエンティティにオーディオ エミッター コンポーネントを追加できます。

[オーディオ リスナー](audio-listeners.md)がオーディオ エミッターに近づいたり離れたりすると、サウンドのピッチとボリュームが変化します。

> [!NOTE]
オーディオ エミッターからのオーディオを聴くには、シーン内に少なくとも 1 つの [AudioListenerComponent](xref:Xenko.Audio.AudioListener) が必要です。

## 1. オーディオ エミッター アセットをセットアップする

1. ［Scene view］で、オーディオ エミッターにするエンティティを選択します。

    ![Select an entity](media/audio-add-audiolistener-component-select-entity.png)

2. ［Property grid］で［Add component］をクリックして、［Audio Emitter］を選択します。

    ![Add AudioEmitter Component](media/audio-add-audioemitter-component-select-entity.png)

    次に、サウンドをエミッターに追加する必要があります。

3. ［Audio Emitter］で ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックして、サウンドの名前を指定します。

    ![Add New Sound Entry](media/audio-play-audioemitter-component-add-new-entry.png)

4. ［Asset view］から、前のステップで追加したサウンドに、サウンド アセットをドラッグ アンド ドロップします。

    ![Drag and drop a sound asset](media/audio-play-drag-and-drop-audio-asset.gif)

    または、![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Select an asset］) をクリックします。

    ![Pick up an asset](media/audio-play-audioemitter-component-pick-an-asset.png)

    サウンド アセットを選択します。

    ![Select sound asset](media/audio-play-audioemitter-component-add-select-audio-asset.png)

5. ステップ 3 と 4 を繰り返して、必要なサウンド アセットをすべて追加します。

6. このオーディオ エミッターのプロパティを構成します。

    ![Audio emitter properties](media/audio-emitter-properties.png)

| プロパティ           | 説明                                                                                                                                                                                       |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Use HRTF           | 頭部伝達関数 (HRTF) を有効にします。これを有効にすると、サウンドは 3D 空間内の特定のポイントから発しているように聞こえ、バイノーラル オーディオが合成されます。詳細については、「[HRTF](hrtf.md)」を参照してください。 |
| Directional factor | オーディオの指向性を示します。値は 0 (最小) ～ 1 (最大) です。0 に設定すると、オーディオはすべての方向から放射されます。この設定は、スライダーまたは数値で制御できます。                                 |
| Environment        | オーディオの残響タイプです。実際の環境の残響をシミュレートします (小、中、大、アウトドア)。                                                                                 |

## 2. オーディオを再生するスクリプトを作成する

次に、サウンド アセットの再生と構成を行うスクリプトを作成する必要があります。

1. スクリプトでは、使用する各サウンドに対して [AudioEmitterSoundController](xref:Xenko.Audio.AudioEmitterSoundController) をインスタンス化する必要があります。

   たとえば、2 つのサウンド **MySound1** と **MySound2** がある場合は次のようになります。

	```cs
	AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
	AudioEmitterSoundController mySound1Controller = audioEmitterComponent［"MySound1"］;
	AudioEmitterSoundController mySound2Controller = audioEmitterComponent［"MySound2"］;
	```

2. [AudioEmitterSoundController](xref:Xenko.Audio.AudioEmitterSoundController) の次のプロパティとメソッドを使用して、オーディオを再生および構成します。

| プロパティ/メソッド | 説明 |
|-------    |-------|
| [IsLooping](xref:Xenko.Audio.AudioEmitterSoundController.IsLooping) | オーディオをループします。[PlayAndForget()](xref:Xenko.Audio.AudioEmitterSoundController.PlayAndForget) が true に設定されている場合は、何も行いません。|
| [Pitch](xref:Xenko.Audio.AudioEmitterSoundController.Pitch)     | サウンドのピッチ (周波数) を取得または設定します。空間オーディオの場合は注意して使用する必要があります。 |
| [PlayState](xref:Xenko.Audio.AudioEmitterSoundController.PlayState)	| オーディオ エミッター サウンド コントローラーの現在の状態を取得します。 |
| [Volume](xref:Xenko.Audio.AudioEmitterSoundController.Volume)	| オーディオのボリュームです。 |
| [Pause()](xref:Xenko.Audio.AudioEmitterSoundController.Pause)	| オーディオを一時停止します。 |
| [Play()](xref:Xenko.Audio.AudioEmitterSoundController.Play)      | オーディオを再生します。 |
| [PlayAndForget()](xref:Xenko.Audio.AudioEmitterSoundController.PlayAndForget)| オーディオを 1 回再生してから、メモリをクリアします。発砲音のような短いサウンドに便利です。[IsLooping](xref:Xenko.Audio.AudioEmitterSoundController.IsLooping) をオーバーライドします。|
| [Stop()](xref:Xenko.Audio.AudioEmitterSoundController.Stop)	| オーディオを停止します。 |

次に例を示します。

```cs
mySound1Controller.IsLooping = true;
mySound1Controller.Pitch = 2.0f;
mySound1Controller.Volume = 0.5f;
mySound1Controller.Play();
```

このサウンドは、元のサウンドの 2 倍のピッチと半分のボリュームでループします。詳細については、[AudioEmitterSoundController Xenko API のドキュメント](xref:Xenko.Audio.AudioEmitterSoundController)を参照してください。

## 3. オーディオ エミッター エンティティにスクリプトを追加する

Game Studio では、スクリプトは［Add component］の下にコンポーネントとして一覧表示されます。オーディオ エミッター エンティティにスクリプトを追加します。

1. ［Scene view］で、オーディオ エミッターにするエンティティを選択します。

    ![Select an entity](media/audio-add-audiolistener-component-select-entity.png)

2. ［Add component］をクリックしてスクリプトを選択します。

    ![Add audio script](media/add-sound-script.png)

## 関連項目
* [空間オーディオ](spatialized-audio.md)
* [オーディオ リスナー](audio-listeners.md)
* [グローバル オーディオ設定](global-audio-settings.md)
