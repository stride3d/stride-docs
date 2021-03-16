# iOS

ゲームを iOS デバイスでデプロイするには、Xamarin がインストールされた Mac に接続するためのデバイスが必要です。
<!--
To deploy your game on iOS devices, you need to connect the device to a Mac with Xamarin.
-->

1. PC と Mac に Xamarin がインストールされていることを確認します。Xamarin のインストールとセットアップの手順については、Xamarin のドキュメントを参照してください。

    * [Visual Studio 2019 での Xamarin のインストール](https://docs.microsoft.com/ja-jp/xamarin/get-started/installation/windows)

    * [Xamarin.iOS 開発のために Mac とペアリングする](https://docs.microsoft.com/ja-jp/xamarin/ios/get-started/installation/windows/connecting-to-mac/)

2. iOS がプロビジョニングされていることを確認します。手順については、Xamarin ドキュメントの [Xamarin.iOS のデバイス プロビジョニング](https://docs.microsoft.com/ja-jp/xamarin/ios/get-started/installation/device-provisioning/) を参照してください。

3. iOS プラットフォームが自身の Stride プロジェクトに追加されていることを確認します。追加するには、Game Studio でソリューションを右クリックし、[**Update package**] > [**Update platforms**] を選択して **iOS** をオンにします。

    ![Add iOS](media/add-ios-platform.png)

    Game Studio でプラットフォームを追加する手順の詳細については、[プラットフォームの追加と削除](add-or-remove-a-platform.md) を参照してください。

4. Visual Studio で、自身のソリューションを開きます。

    >[!Tip]
    > Game Studio から Visual Studio でプロジェクトを開くには、Game Studio のツールバーにある ![Open in IDE](../scripts/media/launch-your-game-ide-icon.png) (**Open in IDE**) をクリックします。

5. Visual Studio のツールバーにある ![Xamarin button](media/xamarin-button.png) をクリックします。

    ![Connect to Xamarin](media/xamarin-button-in-toolbar.png)

    すると、**Xamarin Agent** が開きます。

    ![Xamarin agent](media/xamarin-agent.png)

6. Xamarin 経由で Mac に接続します。手順については、Xamarin ドキュメントの [Xamarin.iOS for Visual Studio の概要](https://docs.microsoft.com/ja-jp/xamarin/ios/get-started/installation/windows/introduction-to-xamarin-ios-for-visual-studio) を参照してください。

7. **ソリューションエクスプローラー** で、プロジェクトを右クリックし、[**スタートアップ プロジェクトに設定**] を選択します。

    ![Set as startup](media/set-ios-as-startup-project.png)

8. **ソリューションエクスプローラー** のメニューから [**iPhone**] を選択して、物理 iOS デバイス（iPad を含む）でビルドするか、あるいは [**iPhoneSimulator**] を選択してシミュレーター用にビルドします。シミュレーターはあなたのマシン上で iOS デバイスをエミュレートしますが、難点がいくつかあります（後述）。

    ![Solution platform](media/solution-platform.png)
 
9. Visual Studio のツールバーから、ビルドしたい iOS デバイスを選択します。

    ![Select device](media/select-ios-device-dropdown.png)
 
10. **ソリューションエクスプローラー** から、`info.plist` を開きます。

    ![Select info file](media/info-plist.png)

11. リリースビルドを作成したい場合には、[**bundle identifier**] を設定します。これは、あなたのアプリケーション用の一意な ID です。

    ![Select bundle ID](media/bundle-identifier.png)

12. iPad にもデプロイしたい場合には、[**Targeted device family**] の下の ![Add device icon](media/add-device-icon.png) をクリックします。

    ![Added iPad](media/ipad-device-added.png)

<!--
1. Make sure Xamarin is installed on the PC and the Mac. For instructions about how to install and set up Xamarin, see the Xamarin documentation:

    * [Installing Xamarin in Visual Studio on Windows](https://developer.xamarin.com/guides/cross-platform/getting_started/installation/windows/)

    * [Connecting to Mac](https://developer.xamarin.com/guides/ios/getting_started/installation/windows/connecting-to-mac/)

2. Make sure your iOS device is provisioned. For instructions, see [Device provisioning](https://developer.xamarin.com/guides/ios/getting_started/installation/device_provisioning/) in the Xamarin documentation.

3. Make sure the iOS platform is added to your Stride project. To do this, in Game Studio, right-click the solution, select **Update package > Update Platforms**, and make sure **iOS** is selected.

    ![Add iOS](media/add-ios-platform.png)

    For more information about adding platforms in Game Studio, see [Add or remove a platform](add-or-remove-a-platform.md).

4. Open your solution in Visual Studio.

    >[!Tip]
    >To open your project in Visual Studio from Game Studio, in the Game Studio toolbar, click ![Open in IDE](../scripts/media/launch-your-game-ide-icon.png) (**Open in IDE**).

5. In the Visual Studio toolbar, click ![Xamarin button](media/xamarin-button.png).

    ![Connect to Xamarin](media/xamarin-button-in-toolbar.png)

     **Xamarin Agent** opens.

    ![Xamarin agent](media/xamarin-agent.png)

6. Connect to the Mac via Xamarin. For instructions, see [Introduction to Xamarin iOS for Visual Studio](https://developer.xamarin.com/guides/ios/getting_started/installation/windows/introduction_to_xamarin_ios_for_visual_studio/) in the Xamarin documentation.

7. In the **Solution Explorer**, right-click the project and select **Set as StartUp Project**.

    ![Set as startup](media/set-ios-as-startup-project.png)

8. In the **Solution Platforms** menu, select **iPhone** to build on physical iOS devices (including iPad), or **iPhoneSimulator** to build for the simulator. The simulator emulates iOS devices on your machine, but has some drawbacks (see below).

    ![Solution platform](media/solution-platform.png)
 
9. In the Visual Studio toolbar, select the iOs device you want to build for.

    ![Select device](media/select-ios-device-dropdown.png)
 
10. From the **Solution Explorer**, open `info.plist`.

    ![Select info file](media/info-plist.png)

11. If you want to create a release build, set the **bundle identifier**. This is a unique ID for your application.

    ![Select bundle ID](media/bundle-identifier.png)

12. If you want to deploy on iPad, under **Targeted device family**, click ![Add device icon](media/add-device-icon.png).

    ![Added iPad](media/ipad-device-added.png)
-->

## iOS デバイスでのビルドの高速化
<!--
## Speed up builds on iOS devices
-->

iOS デバイスでのビルドには時間がかかります。以下がその理由です。
<!--
It takes a long time to build on iOS devices. This is because:
-->

* Mac では、さまざまなデバイスに対応したコードを事前に作成する必要があります（AOT）。

* Apple のサンドボックスシステムでは、パッケージを段階的に更新することができないため、Mac では変更のたびにアプリケーションをデバイスにまるごとデプロイし直す必要があります。

<!--
* the Mac needs to build code ahead of time (AOT) for the different devices

* the Apple sandbox system doesn't let you update packages incrementally, so the Mac needs to completely redeploy the application on the device for every change
-->

より高速にコードをコンパイルするには、ソリューションエクスプローラーで iOS プロジェクトを右クリックし、[**プロパティ**] を選択します。
<!--
To compile code more quickly, in the Solution Explorer, right-click the iOS project and select **Properties**.
-->

![Project properties](media/ios-project-properties.png)

* [**Linker Behavior**] > [**Don't link**] を選択します。
* [**Supported Architectures**] から、デバッグデバイスのアーキテクチャーだけを選択します。
* [**Strip native debugging symbols**] を無効にします。
* [**incremental builds**] を有効にします（ある実行から別の実行へと変化できるコードは、AOT だけです)。

<!--
* Under **Linker Behavior**, select **Don't link**.
* Under **Supported Architectures**, select only the architecture of the debug device.
* Disable **Strip native debugging symbols**.
* Enable **incremental builds** (only code that changes from one execution to another is AOT)
-->

詳細については、Xamarin ドキュメントの [iOS ビルドのしくみ](https://docs.microsoft.com/ja-jp/xamarin/ios/deploy-test/ios-build-mechanics?tabs=windows) を参照してください。プロファイリングについては、Xamarinドキュメントの [Instruments を使用した Xamarin.iOS アプリケーションのプロファイリング](
https://docs.microsoft.com/ja-jp/xamarin/ios/deploy-test/using-instruments-to-detect-native-leaks-using-markheap) を参照してください。
<!--
For more information, see [iOS Build Mechanics](https://developer.xamarin.com/guides/ios/advanced_topics/ios-build-mechanics/) in the Xamarin documentation. For information about profiling, see [Using instruments to detect native leaks using markheap]( 
https://developer.xamarin.com/guides/ios/deployment,_testing,_and_metrics/using_instruments_to_detect_native_leaks_using_markheap).
-->

毎回の再デプロイを高速化するために、デバッグパッケージをできるだけ小さくします。
<!--
To make redeploying each time faster, make your debug packages as small as possible.
-->

* Game Studio で、プロジェクトに含まれる [テクスチャー](../graphics/textures/index.md)の**サイズ** を削減します。

* 不要なアセットバンドルを削除します。

* シーンを同時にロードするのではなく、1 つずつテストします。

* 実デバイスの代わりに、**iPhoneシミュレーター**でアプリケーションをデバッグすることができます。ただし、シミュレーター上では実行速度が遅く、また、レンダリング時にいくつかのアーティファクトが発生するため、リアルタイムグラフィックスのデバッグに使用することはお勧めできません。

<!--
* In Game Studio, reduce the **Size** of the [textures](../graphics/textures/index.md) in your project.

* Remove unused assets.

* Test your scenes one by one rather than loading them simultaneously.

* Debug your application on the **iPhone simulator** instead of a real device. However, execution is slow on the simulator and it produces some rendering artifacts, so we don't recommend using it to debug real-time graphics.
-->

## iOS でシェーダーをコンパイルする
<!--
## Compile shaders on iOS
-->

iPhone デバイスで Stride シェーダーを OpenGL シェーダーに変換するのには時間がかかるので、リモートで（つまり Game Studio で）変換することをお勧めします。
<!--
As converting Stride shaders to OpenGL shaders on iPhone devices is slow, we recommend you convert them remotely (ie in Game Studio).
-->

おすすめのワークフローは次の通りです。
<!--
Our recommended workflow is:
-->

1. Windows でアプリを実行します。シェーダーのパーミュテーション（不要な機能を生成しないようにしたバージョン）が作成されます。

    ![New effects](../graphics/effects-and-shaders/media/new-effects-to-import.png)

2. Game Studio で新しいシェーダーをインポートします。これにより、エフェクトログが生成されます。

    ![Effect log](../graphics/effects-and-shaders/media/effect-log.png)

3. iOS 上で、ゲームを保存し、実行します。

<!--
1. Execute the app on Windows. This creates the shader permutations.

    ![New effects](../graphics/effects-and-shaders/media/new-effects-to-import.png)

2. Import the new shaders in Game Studio. This generates an effect log.

    ![Effect log](../graphics/effects-and-shaders/media/effect-log.png)

3. Save and run the game on iOS.
-->

理想的には、すべてのシェーダーのパーミュテーションをリモートで作成するので、デバイス上で変換する必要はありません。しかし、サポートされている画面解像度などの違いにより、新しいパーミュテーションが発生する可能性があります。iOS でシェーダーをリモートでコンパイルする方法などの詳細は、[シェーダーのコンパイル](../graphics/effects-and-shaders/compile-shaders.md)を参照してください。
<!--
Ideally, this creates all the shader permutations remotely, so you don't need to convert them on the device. However, new permutations might still occur due to differences such as supported screen resolutions. For more information, including information about how to compile shaders remotely on iOS, see [Compile shaders](../graphics/effects-and-shaders/compile-shaders.md).
-->

## 関連項目
<!--
## See also
-->

* [Xamarin.iOS（Xamarin ドキュメント）](https://docs.microsoft.com/ja-jp/xamarin/ios/)
* [シェーダーのコンパイル](../graphics/effects-and-shaders/compile-shaders.md)

<!--
* [iOs in the Xamarin documentation](https://developer.xamarin.com/guides/ios/)
* [Compile shaders](../graphics/effects-and-shaders/compile-shaders.md)
-->
