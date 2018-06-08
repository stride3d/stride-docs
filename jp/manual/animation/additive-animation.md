# 加算アニメーション

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">デザイナー</span>

**加算アニメーション**とは、**差分クリップ** (**加算アニメーション クリップ**とも呼ばれます) を使用してアニメーションを結合するプロセスです。

![Additive animations](media/animations-additive-sample.gif)

上の例では、左端のアニメーションは［Walk］アニメーションです。右端のアニメーションは［Idle］アニメーションです。中央の 2 つのアニメーションは、それぞれ［Walk］アニメーションと［Idle］アニメーションですが、それに［Reload］アニメーションが加算されています。

つまり、作成する必要があるアニメーションは、［Walk］、［Idle］、［Reload］の 3 つだけです。さらに、他の適切なアニメーション (［Crouch］、［Strafe］、［Run］など) に［Reload］アニメーションを追加できます。これは、メモリの使用量とアニメーションの数を少なく保つのに役立ちます。

## 差分クリップ

**差分クリップ**は、2 つのアニメーション クリップ（**ソース**と**リファレンス**）の間の差異を記述します。

上の［Reload］アニメーションを例にして、これを他のアニメーション クリップに追加するものとします。これが**ソース**クリップ (S) になります。［Reload］アニメーションは主に腕と関係があるので、腕に関係のないアニメーション (静止している、しゃがむ、など) とうまくブレンドできます。このようなアニメーションの 1 つ (たとえば、［Idle］アニメーション) を**リファレンス**クリップ (R) として使用できます。

Xenko は、ソース クリップとリファレンス クリップの差異を計算して、**差分クリップ** (D) を作成します。差分クリップは、ソース クリップとリファレンス クリップの間の差異をエンコードします。つまり、D = S - R と表すことができます。

差分クリップを使用して、ソース アニメーションとリファレンス アニメーションをブレンドすることができます。また、同じ差分クリップを使用して、ソース アニメーションと**他の**アニメーションをブレンドすることもできます。他のアニメーションが元のリファレンス クリップとよく似ている場合、2 つのアニメーションはうまくブレンドします。たとえば、差分クリップを使用して、Reload アニメーションを、腕を使用していない任意のアニメーション (しゃがむ、など) に追加できます。

>[!NOTE]
>加算アニメーションは、同じスキン メッシュとスケルトンを使用する必要があります。

## 差分クリップを作成する

1. ［Asset view］(既定では下部) で、［Add asset］をクリックし、［Animations］>［Animation］を選択します。参照ダイアログが開きます。

2. このアニメーションにはソースが必要ないので、［Cancel］をクリックします。

    ソース ファイルなしでアニメーションを作成する確認を求められます。

    ![Create animation without source file](media/create-animation-without-source-file.png)

3. ［Yes］をクリックします。新しい空のアニメーション アセットが、［Asset view］に追加されます。

4. アセットに識別しやすい名前を付けます。たとえば、他のアニメーションで使用できる再装弾アニメーションを作成する場合は、アセットの名前を［ReloadAdditive］などとします。

5. ［Asset view］(既定では下部のペイン) で、作成したアニメーション アセットを選択します。

6. ［Property grid］(既定では右側) で、［Source］アニメーション クリップを追加します。これは、他のアニメーションに適用するアニメーションです。

    ![Choose source file](media/animations-additive-animations-1.png)

     >[!NOTE]
     >アニメーションを参照しているアニメーション アセットでは**なく**、アニメーション自体を含むファイル (たとえば、.fbx などのモデル ファイル) を追加してください。通常、アニメーション ファイルは［Resources］フォルダーに保存されます。

7. ［Type］で、［Difference Clip］を選択します。

8. ［Reference］で、**リファレンス クリップ**として使用するアニメーションを指定します。これは、Xenko が差分クリップを作成するために参照するアニメーションです。

    ![Choose reference file](media/animations-additive-animations-2.png)

9. ドロップダウン メニューから［Mode］を選択します。

    *［Animation］は、フレーム単位で参照し、ソース アニメーション全体から差分クリップを作成します。
    *［FirstFrame］は、ソース アニメーションの最初のフレームだけから、静止したポーズとして差分クリップを作成します。

10. ［Skeleton］の隣で、差分クリップのスケルトンを指定します。

    ![Choose skeleton](media/animations-additive-animations-3.png)

    差分クリップとブレンドするすべてのアニメーションで動作するスケルトンを指定する必要があります。ほとんどの場合は、ソース アニメーションとリファレンス アニメーションに使用したものと同じスケルトンを使用する必要があります。

11. アセット プレビューで[アニメーションをプレビューする](preview-animations.md)場合は、
アニメーションに適した［Preview model］を指定します。

    ![Choose play mode](media/animations-additive-animations-4.png)

    >[!NOTE]
    >アセット プレビューでは、差分クリップで指定したソース アニメーションだけが表示されます。

## 加算アニメーションを使用する

加算アニメーションは、同じスケルトンおよびスキン メッシュを使用しているアニメーションでのみ使用できます。

1. ［Asset view］(既定では下部のペイン) で、［Add asset］をクリックします。

2. ［Scripts］>［Animation start］を選択します。

    ![Animation start](media/animations-additive-animations-animation-start.png)

    ［Animation start］は、アニメーションをモデルにロードするために使用できるスタートアップ スクリプトであり、これには加算アニメーションも含まれます。詳細については、「[アニメーションのスクリプト](animation-scripts.md)」を参照してください。

3. プロジェクトを再コンパイルして、変更を適用します。

4. ［Scene view］で、アニメーション化するエンティティを選択します。

    ![Select an entity](media/animations-use-3d-animations-select-entity.png)

    >[!NOTE]
    >エンティティをアニメーション化するには、エンティティにモデル コンポーネントが含まれる必要があります。

5. ［Property grid］(既定では右側) で、［Add component］をクリックし、［Animations］を選択します。

    ![Add animation component](media/animations-use-3d-animations-add-animation-component.png)

    アニメーション コンポーネントがエンティティに追加されます。

6. ［Add component］をクリックし、［AnimationStart］スクリプトを選択します。

    ![Add animation start script](media/add-animation-start-script.png)

    スクリプトを使用すると、エンティティにロードするアニメーションのリストをカスタマイズできます。

7. ［AnimationStart］プロパティで、［Animations］の隣の ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックします。

    ![Add animation to the list](media/add-animation-to-list.png)

8. ［Clip］で、差分クリップで設定した**ソース**アニメーションを指定します。

    ![Specify source](media/specify-clip-1.png)

9. ［Add to Animations］の隣の ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックします。

10. アニメーションのプロパティを展開します。［Clip］で、差分クリップで設定した**リファレンス**アニメーションを指定します。

    ![Specify source](media/specify-clip-2.png)

11. ［Blend Operation］で、［Add］を選択します。

    ![Specify source](media/type-additive.png)

12. 手順を繰り返し、必要なアニメーションをすべて追加します。

    ![Animation start](media/animations-additive-animations-start2.png)

## 関連項目

* [アニメーション](index.md)
* [アニメーションのインポート](import-animations.md)
* [アニメーションのプロパティ](animation-properties.md)
* [アニメーションのセットアップ](set-up-animations.md)
* [アニメーションのプレビュー](preview-animations.md)
* [アニメーションのスクリプト](animation-scripts.md)
* [プロシージャル アニメーション](procedural-animation.md)
* [カスタム ブレンド ツリー](custom-blend-trees.md)
