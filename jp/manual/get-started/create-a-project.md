# プロジェクトを作成する

<span class="label label-doc-level">初級</span>

このページでは、次の方法について説明します。

* 新しい空のプロジェクトを作成する
* テンプレートまたはサンプルを基にしてプロジェクトを作成する

**テンプレート**とは、ゲームについての作業を始めるために必要な要素だけを含むプロジェクトです。

**サンプル**とは完成したゲームであり、それから学習したり、新しいゲームの基礎にすることができます。

## 空のプロジェクトを作成する

**空のプロジェクト**とは、ゲームを作成するために必要な最低限のものだけを含むプロジェクトです。最低限のものとは、ライト、カメラ、およびカメラを移動するためのスクリプトを含むシンプルなシーンと、あらかじめ構成されているレンダリング パイプラインです。これは、必要のない要素を含まないゲームを最初から作成するときに便利です。

空のプロジェクトを作成するには:

1. **Stride Launcher** で［Start］をクリックして Game Studio を開始します。

   ［New/open project］ダイアログが開きます。

    ![New Project dialog](media/create-project-new-open-project-window.png)

    Game Studio で［File］>［New］から新しいプロジェクトを開くこともできます。

2. ［New game］を選択します。

3. ［Name］および［Location］フィールドで、プロジェクトの名前と保存するフォルダーを指定します。

4. ［Select］をクリックします。

［Create a new game］ダイアログが開きます。

![Create a new game dialog](media/create-project-create-new-game.png)

5. ［Namespace］フィールドで、使用する名前空間を指定します。使用する名前空間がわからない場合は、既定のままにします。

6. ［Platforms］で、ゲームがサポートするプラットフォームを選択します。  

    > [!NOTE]
    > iOS および Android をサポートするには、<a href="https://www.xamarin.com/studio" target="_blank">Xamarin</a> をインストールする必要があります (Visual Studio がある場合は無料です)。

    選択したいずれかのプラットフォームの前提条件の中に開発システムに存在しないものがある場合は、警告が表示されます。

7. ［Asset Packs］では、プロジェクトに含める追加アセットを選択できます。たとえば、アニメーションやマテリアルなどのアセットです。アセット パックは、Stride の使い方を学習するときには役に立ちますが、必須のものではありません。

8. ［Rendering］で、必要なオプションを選択します。  

    ［Graphics API］: プロジェクトで使用できるグラフィックス機能は、選択する API によって異なります。高度なグラフィックス機能を使用する場合は、最新バージョンのグラフィックス API を選択してください。

    >[!WARNING]
    >グラフィックス カードによっては、最新の API がサポートされていない場合があります。一部のモバイル デバイスでは、DirectX 9.3/OpenGL ES 2.0 および DirectX 10.0/OpenGL ES 3.0 だけを使用できます。

    ［High or Low dynamic range (HDR/LDR)］: これは、プロジェクトでの色の計算方法を定義します。LDR モードでは、色の範囲は 0 ～ 1 になります。HDR モードでは、任意の浮動小数点値を色に使用できます。HDR はより高度で現実に近いレンダリングを提供しますが、より高い処理能力と、DirectX 10.0/OpenGL ES 3.0 以降のプロファイルが必要になります。

9. ［Orientation］で、プロジェクトの向きを選択します。PC ゲームの場合は、横方向を使用します。縦方向は通常、モバイル ゲームに対してのみ使用する必要があります。

10. ［OK］をクリックします。

プロジェクトが作成されて、Game Studio で開かれます。詳細については、「[Game Studio](../game-studio/index.md)」を参照してください。

## サンプルまたはテンプレートからプロジェクトを作成する

Stride には、エンジンの各部分 (2D、3D、スプライト、フォント、UI、オーディオ、入力など) をデモンストレーションする複数のサンプル プロジェクトが含まれます。また、テンプレート ゲームも含まれており、独自のゲームの作成に利用できます。

サンプルまたはテンプレートからプロジェクトを作成するには:

 1. ［New Project］ダイアログを開きます。

 2.	左側で、［New project］>［Samples］に移動します。

 2. **プロジェクト作成の基にするサンプルを選択**します。

   ![New Project window - samples](media/create-project-new-open-project-samples.png)

 3. ［Select］をクリックします。

   ［Select Platforms］ウィンドウが開きます。

    ![Select Platforms window](media/create-project-select-platform.png)

 4. ゲームでサポートするプラットフォームを選択し、［OK］をクリックします。

プロジェクトが作成されて、Game Studio で開かれます。

## 次に学習すること

* [Game Studio の概要](../game-studio/index.md)
