# オーディオのインポート

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

プロジェクトで**サウンド アセット**として使用するオーディオ ファイルをインポートできます。インポートできるファイルの種類は、.wav、.mp3、.ogg、.aac、.aiff、.flac、.m4a、.wma、.mpc です。

1. Windows エクスプローラーから［Asset view］にオーディオ ファイルをドラッグ アンド ドロップします。

    ![](media/import-setup-drag-and-drop-audio-to-asset-view.gif)

    または、［Asset view］で次のようにします。

    1. ![](media/index-audio-add-new-asset-button.png) をクリックします。
    2. ![](media/index-audio-import-audio-directly-from-file.png) (［Import audio directly from file］) をクリックし、オーディオ ファイルを選択します。

2. サウンド アセットに既定のプロパティを設定するには、プリセット値を選択します。([後でプロパティ グリッドを使ってプロパティを変更](sound-asset-properties.md)できます。)

    ![Choose Asset type](media/import-audio-choose-asset-type.png)

    * ［Sound effect］: メモリから直接再生する小さいファイルに推奨されます。
    * ［Spatialized sound］: サウンド アセットを[空間オーディオ](spatialized-audio.md)として処理します。Stride はオーディオ ファイルをモノラル (単一チャンネル) オーディオとして処理することに注意してください。ソース ファイルは影響を受けません。
    * ［Music］: メモリを節約するためにディスクからストリーミングする大きいファイルに推奨されます。

インポートしたオーディオ ファイルは、［Asset view］でアセットとして選択できます。

## 関連項目
* [空間オーディオ](spatialized-audio.md)
* [非空間オーディオ](non-spatialized-audio.md)
* [グローバル オーディオ設定](global-audio-settings.md)
