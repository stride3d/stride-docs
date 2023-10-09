# シェーダーのコンパイル
<!--
# Compile shaders
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>
-->

Stride は、Stride シェーダーファイル（`sdsl` および `.sdfx`）を、[グラフィックスプラットフォーム](../../platforms/set-the-graphics-platform.md)で使用されるシェーダー言語に変換します。

<!--
Stride converts Stride shaders (`sdsl` and `.sdfx` files) into the shader language used by the [graphics platform](../../platforms/set-the-graphics-platform.md).
-->

| プラットフォーム | シェーダー言語
| -------------- | ---- 
| Direct3D       | HLSL
| OpenGL         | GLSL
| Vulkan         | SPIR-V
| iOS            | OpenGL ES

<!--
| Platform       | Shader language 
| -------------- | ---- 
| Direct3D       | HLSL
| OpenGL         | GLSL
| Vulkan         | SPIR-V
| iOS            | OpenGL ES
-->

Stride では、実行時（ゲームが実行されている時）またはビルド時（エディタがゲームアセットをビルドする時）に、シェーダーを変換することができます。Stride が実行時にシェーダーを生成すると、シェーダーがコンパイルされるまでレンダリングが停止します。これは通常、リリースビルドでは避けたいことです。特にモバイルプラットフォームでは CPU パワーが少ないため、停止がより目立ってしまいます。
<!--
Stride can convert the shaders at runtime (when the game is running) or at build time (when the editor builds the game assets). When Stride generates shaders at runtime, rendering stops until the shader is compiled. This is usually something you want to avoid in your release build — especially on mobile platforms, which have less CPU, so the pause can be more noticable.
-->

## Stride が実行時にシェーダーを変換する方法
<!--
## How Stride converts shaders at runtime
-->

Stride は、実行時にどのシェーダーが使用されるかを事前に知ることができません。これは、ユーザーがマテリアルのパラメーターを変更したり、スクリプトからポストエフェクトのパラメーターを変更したりすることで、新しいシェーダーの組み合わせを生成する可能性があるからです。また、最終的なシェーダーは、実行プラットフォームのグラフィックス機能に依存します。
<!--
Stride can't know in advance which shaders will be used at runtime. This is because users might generate new shader permutations by, for example, changing material parameters or modifying post-effect parameters from scripts. Additionally, the final shaders depend on the graphics features on the execution platform.
-->

1. Stride は、実行時に新しいシェーダーが必要になると、データベースをチェックして、シェーダーがすでに変換済みであるかどうかを確認します。シェーダーがデータベースにあれば、Stride はそれを使用します。

2. シェーダーがまだ変換されていない場合、Stride はパッケージの**ユーザー設定**（下記参照）に応じて、ローカル（デバイス上）またはリモート（Game Studio を使用）でシェーダーをコンパイルします。

3. パッケージの**ユーザー設定**（下記参照）で **Record used effects** が有効になっている場合、Stride は新しいシェーダーが必要であることを Game Studio に通知します。

4. Game Studio は、インポートすべき新しいシェーダーがあることをユーザーに通知します。

    ![New effects](media/new-effects-to-import.png)

    **アセットビュー**で、[**Import Effects**] ボタンが有効化されます。

    ![Import effects](media/import-effects-button.png)

5. [**Import Effects**] ボタンをクリックすると、Game Studio は **エフェクトロク**を更新（存在しない場合は作成）し、ゲームのデータベースに追加して、それを次回のビルド時に使用します（1. 参照）。

    ![Effect log](media/effect-log.png)

<!--
1. When Stride needs a new shader at runtime, it checks its database to see if the shader has already been converted. If the shader is in the database, Stride uses it.

2. If the shader hasn't already been converted, Stride compiles it — either locally (on the device) or remotely (in Game Studio), depending on the package **User Settings** (see below).

3. If **Record used effects** is enabled in the package **User Settings** (see below), Stride notifies Game Studio that it needs a new shader.

4. Game Studio notifies you that there are new shaders to import.

    ![New effects](media/new-effects-to-import.png)

    In the **Asset View**, the **Import effects** button becomes available.

    ![Import effects](media/import-effects-button.png)

5. If you click **Import effects**, Game Studio updates the **Effect Log** (or creates it if it doesn't exist) and adds them to the game database to be used the next time you build (see step 1).

    ![Effect log](media/effect-log.png)
-->

## シェーダーのコンパイル方法を変更する
<!--
## Change how Stride compiles shaders
-->

1. Game Studio の**ソリューションエクスプローラー**で、パッケージを選択し、[**Package properties**] をクリックします。

    ![Package properties](media/package-properties-button.png)

2. **プロパティグリッド**で、ユーザー設定プロパティを設定します。

    ![Package properties](media/package-properties.png)

<!--
1. In Game Studio, in the **Solution Explorer**, select the package and click **Package properties**.

    ![Package properties](media/package-properties-button.png)

2. In the **Property Grid**, set the properties.

    ![Package properties](media/package-properties.png)

-->

**Effect Compiler** プロパティでは、シェーダーのコンパイル方法を指定します。
<!--
The **Effect compiler** property specifies how to compile the shader.
-->

* **Local**: デバイス上でシェーダーを変換します。これは、ゲームのリリースバージョンで推奨されます。

* **Remote**: 開発機でシェーダーを変換します。ゲームのリリースバージョンでこれを使う理由はありません。開発機に接続できないからです。

* **LocalOrRemote**: 開発機でシェーダーを変換しますが、失敗した場合はデバイス上で変換を試みます。**Remote** と同様に、ゲームのリリースバージョンには使用できません。

* **None**: シェーダーを変換しません。データベースにないシェーダーを要求すると、アプリケーションがクラッシュしますのでご注意ください。現在のところ、この機能を使ってもアプリケーションのサイズを節約できることはないので、使用するメリットはありません。しかし、データベースにすべてのシェーダーが入っていることを確認するには便利かもしれません。ゲームがクラッシュした場合、データベースに少なくとも1つのシェーダーが欠けていることがわかるためです。

<!--
* **Local**: Convert the shader on the device. This is recommended for release versions of your game.

* **Remote**: Convert the shader on the developer machine. There's no reason to use this for release versions of your game, as it won't be able to connect to the developer machine.

* **LocalOrRemote**: Convert the shader on the developer machine; if this fails, try to convert it on the device. Like the **Remote** setting, this has no use for release versions of your game.

* **None**: Don't convert shaders. Note that the application will crash if it requires a shader that isn't in the database. Currently, using this feature doesn't save any space your application, so there's no advantage in using it. However, it might be useful for making sure you have every shader in the database; if the game crashes, you know the database is missing at least one shader.
-->

**Record used effects** を有効にすると、Game Studio は、新しいシェーダーが必要になった時点でエフェクトログに追加します。ゲームのリリースバージョンでは開発機には接続できないため、これを無効にすることをお勧めします。
<!--
If you enable **Record used effects**, Game Studio adds new shaders to the Effect Log as soon as they're needed. We recommend you disable this for release versions of your game, as it can't connect to the developer machine.
-->

## iOS 向け開発においてリモートでシェーダーをコンパイルする
<!--
## Compile shaders remotely when developing for iOS
-->

iOS デバイスは PC に直接接続できないため、iOS 向けの開発では Stride シェーダーをリモートで変換する必要があります。ここで、iOS デバイス、Mac、開発用 PC 間の連携のために、Python スクリプトを使う必要があります。
<!--
As iOS devices can't connect directly to PC, to convert Stride shaders remotely when developing for iOS, you need to use a Python script as a relay between the device, a Mac, and the developer PC.
-->

1. PC と Mac が同じネットワークに接続されていることを確認してください。

2. Mac に Python をインストールします。Pythonは、[Python 公式サイト](https://www.python.org/downloads/)からダウンロードできます。

3. [ios-tcreplay.zip](media/ios-tcprelay.zip) をダウンロードして、解凍します。

4. **ターミナル**を開き、ファイルを解凍したフォルダに移動して、`stride-ios-relay.py MyPcName`（`MyPcName` は開発 PC の名前）を実行します。

    >[!Tip]
    >開発 PC の名前を調べるには、PC 上で Windows キーを押し、**About** と入力して **Enter** キーを押します。PC の名前は**デバイス名**として表示されます。

<!--
1. Make sure your PC and Mac are connected to the same network.

2. On your Mac, install Python. You can download Python from the [Python site](https://www.python.org/downloads/).

3. Download and unzip [ios-tcreplay.zip](media/ios-tcprelay.zip).

4. Open **Terminal**, navigate to the folder where you unzipped the file, and execute **stride-ios-relay.py MyPcName**, where **MyPcName** is the name of your developer PC.

    >[!Tip]
    >To find the name of your developer PC, on the PC, press the Windows key, type **About**, and press **Enter**. The PC name is listed under **PC name**.
-->

これで、iOS デバイスが Mac を介して PC と通信し、リモートでシェーダーを構築できるようになったはずです。
<!--
The iOS device should now be able to communicate with the PC via your Mac to build shaders remotely.
-->

## エラーメッセージ
<!--
## Error messages
-->

アプリケーションが、シェーダーをコンパイルするため、または新しいシェーダーが必要であることを通知するために Game Studio に接続しようとして失敗した場合、Visual Studio の出力に次のエラーが表示されます。
<!--
If your application tries to connect to Game Studio to compile a shader or to notify Game Studio that it needs new shaders, but can't connect, the Visual Studio output displays this error:
-->

「[RouterClient]: エラーが発生しました。モード Connect を使用してコネクションルーターに接続できませんでした。System.AggregateException: 1つ以上のエラーが発生しました。---> System.Net.Sockets.SocketException: ターゲットマシンが 127.0.0.1:31254 を動的に拒否したため、接続できません。」
<!--
"[RouterClient]: Error: Could not connect to connection router using mode Connect. System.AggregateException: One or more errors occurred. ---\> System.Net.Sockets.SocketException: No connection could be made because the target machine actively refused it 127.0.0.1:31254"
-->
