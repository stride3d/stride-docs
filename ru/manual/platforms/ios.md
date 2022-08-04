# iOS
# iOS

To deploy your game on iOS devices, you need to connect the device to a Mac with Xamarin.
Чтобы развернуть игру на устройствах iOS, вам необходимо подключить устройство к Mac с помощью Xamarin.

1. Make sure Xamarin is installed on the PC and the Mac. For instructions about how to install and set up Xamarin, see the Xamarin documentation:
1. Убедитесь, что Xamarin установлен на ПК и Mac.  Инструкции по установке и настройке Xamarin см. в документации по Xamarin:

    * [Installing Xamarin in Visual Studio on Windows](https://developer.xamarin.com/guides/cross-platform/getting_started/installation/windows/)
* [Установка Xamarin в Visual Studio в Windows](https://developer.xamarin.com/guides/cross-platform/getting_started/installation/windows/)

    * [Connecting to Mac](https://developer.xamarin.com/guides/ios/getting_started/installation/windows/connecting-to-mac/)
* [Подключение к Mac](https://developer.xamarin.com/guides/ios/getting_started/installation/windows/connecting-to-mac/)

2. Make sure your iOS device is provisioned. For instructions, see [Device provisioning](https://developer.xamarin.com/guides/ios/getting_started/installation/device_provisioning/) in the Xamarin documentation.
2. Убедитесь, что ваше устройство iOS подготовлено.  Инструкции см. в разделе [Подготовка устройства](https://developer.xamarin.com/guides/ios/getting_started/installation/device_provisioning/) в документации Xamarin.

3. Make sure the iOS platform is added to your Stride project. To do this, in Game Studio, right-click the solution, select **Update package > Update Platforms**, and make sure **iOS** is selected.
3. Убедитесь, что платформа iOS добавлена ​​в ваш проект Stride.  Для этого в Game Studio щелкните решение правой кнопкой мыши, выберите **Обновить пакет > Обновить платформы** и убедитесь, что выбрано **iOS**.

    ![Add iOS](media/add-ios-platform.png)
![Добавить iOS](media/add-ios-platform.png)

    For more information about adding platforms in Game Studio, see [Add or remove a platform](add-or-remove-a-platform.md).
Дополнительные сведения о добавлении платформ в Game Studio см. в разделе [Добавить или удалить платформу](add-or-remove-a-platform.md).

4. Open your solution in Visual Studio.
4. Откройте свое решение в Visual Studio.

    >[!Tip]
>[!Подсказка]
    >To open your project in Visual Studio from Game Studio, in the Game Studio toolbar, click ![Open in IDE](../scripts/media/launch-your-game-ide-icon.png) (**Open in IDE**).
>Чтобы открыть проект в Visual Studio из Game Studio, на панели инструментов Game Studio нажмите ![Открыть в IDE](../scripts/media/launch-your-game-ide-icon.png) (**Открыть в  ИДЕ**).

5. In the Visual Studio toolbar, click ![Xamarin button](media/xamarin-button.png).
5. На панели инструментов Visual Studio щелкните ![Кнопка Xamarin](media/xamarin-button.png).

    ![Connect to Xamarin](media/xamarin-button-in-toolbar.png)
![Подключиться к Xamarin](media/xamarin-button-in-toolbar.png)

     **Xamarin Agent** opens.
**Агент Xamarin** открывается.

    ![Xamarin agent](media/xamarin-agent.png)
![Агент Xamarin](media/xamarin-agent.png)

6. Connect to the Mac via Xamarin. For instructions, see [Introduction to Xamarin iOS for Visual Studio](https://developer.xamarin.com/guides/ios/getting_started/installation/windows/introduction_to_xamarin_ios_for_visual_studio/) in the Xamarin documentation.
6. Подключитесь к Mac через Xamarin.  Инструкции см. в разделе [Введение в Xamarin iOS для Visual Studio](https://developer.xamarin.com/guides/ios/getting_started/installation/windows/introduction_to_xamarin_ios_for_visual_studio/) в документации Xamarin.

7. In the **Solution Explorer**, right-click the project and select **Set as StartUp Project**.
7. В **Solution Explorer** щелкните проект правой кнопкой мыши и выберите **Set as StartUp Project**.

    ![Set as startup](media/set-ios-as-startup-project.png)
![Установить как запуск](media/set-ios-as-startup-project.png)

8. In the **Solution Platforms** menu, select **iPhone** to build on physical iOS devices (including iPad), or **iPhoneSimulator** to build for the simulator. The simulator emulates iOS devices on your machine, but has some drawbacks (see below).
8. В меню **Платформы решений** выберите **iPhone** для сборки на физических устройствах iOS (включая iPad) или **iPhoneSimulator** для сборки для симулятора.  Симулятор эмулирует iOS-устройства на вашем компьютере, но имеет некоторые недостатки (см. ниже).

    ![Solution platform](media/solution-platform.png)
![Платформа решения](media/solution-platform.png)
 
9. In the Visual Studio toolbar, select the iOs device you want to build for.
9. На панели инструментов Visual Studio выберите устройство iOS, для которого вы хотите выполнить сборку.

    ![Select device](media/select-ios-device-dropdown.png)
![Выберите устройство](media/select-ios-device-dropdown.png)
 
10. From the **Solution Explorer**, open `info.plist`.
10. В **Solution Explorer** откройте `info.plist`.

    ![Select info file](media/info-plist.png)
![Выберите информационный файл](media/info-plist.png)

11. If you want to create a release build, set the **bundle identifier**. This is a unique ID for your application.
11. Если вы хотите создать релизную сборку, установите **идентификатор пакета**.  Это уникальный идентификатор вашего приложения.

    ![Select bundle ID](media/bundle-identifier.png)
![Выберите идентификатор пакета](media/bundle-identifier.png)

12. If you want to deploy on iPad, under **Targeted device family**, click ![Add device icon](media/add-device-icon.png).
12. Если вы хотите выполнить развертывание на iPad, в разделе **Целевое семейство устройств** нажмите ![Добавить значок устройства](media/add-device-icon.png).

    ![Added iPad](media/ipad-device-added.png)
![Добавлен iPad](media/ipad-device-added.png)

## Speed up builds on iOS devices
## Ускорение сборки на устройствах iOS

It takes a long time to build on iOS devices. This is because:
Сборка на устройствах iOS занимает много времени.  Это потому что:

* the Mac needs to build code ahead of time (AOT) for the different devices
* Mac необходимо заблаговременно создавать код (AOT) для разных устройств

* the Apple sandbox system doesn't let you update packages incrementally, so the Mac needs to completely redeploy the application on the device for every change
* Система песочницы Apple не позволяет вам обновлять пакеты постепенно, поэтому Mac необходимо полностью переустанавливать приложение на устройстве для каждого изменения

To compile code more quickly, in the Solution Explorer, right-click the iOS project and select **Properties**.
Чтобы быстрее скомпилировать код, в обозревателе решений щелкните правой кнопкой мыши проект iOS и выберите **Свойства**.

![Project properties](media/ios-project-properties.png)
![Свойства проекта](media/ios-project-properties.png)

* Under **Linker Behavior**, select **Don't link**.
* В разделе **Поведение компоновщика** выберите **Не связывать**.
* Under **Supported Architectures**, select only the architecture of the debug device.
* В разделе **Поддерживаемые архитектуры** выберите только архитектуру отладочного устройства.
* Disable **Strip native debugging symbols**.
* Отключите **Удалить собственные символы отладки**.
* Enable **incremental builds** (only code that changes from one execution to another is AOT)
* Включить **инкрементные сборки** (только код, который изменяется от одного выполнения к другому, является AOT)

For more information, see [iOS Build Mechanics](https://developer.xamarin.com/guides/ios/advanced_topics/ios-build-mechanics/) in the Xamarin documentation. For information about profiling, see [Using instruments to detect native leaks using markheap]( 
Дополнительные сведения см. в разделе [Механика сборки iOS](https://developer.xamarin.com/guides/ios/advanced_topics/ios-build-mechanics/) в документации Xamarin.  Сведения о профилировании см. в разделе [Использование инструментов для обнаружения собственных утечек с использованием markheap](
https://developer.xamarin.com/guides/ios/deployment,_testing,_and_metrics/using_instruments_to_detect_native_leaks_using_markheap).
https://developer.xamarin.com/guides/ios/deployment,_testing,_and_metrics/using_instruments_to_detect_native_leaks_using_markheap).

To make redeploying each time faster, make your debug packages as small as possible.
Чтобы каждое повторное развертывание происходило быстрее, делайте пакеты отладки как можно меньше.

* In Game Studio, reduce the **Size** of the [textures](../graphics/textures/index.md) in your project.
* В Game Studio уменьшите **Размер** [текстур](../graphics/textures/index.md) в вашем проекте.

* Remove unused assets.
* Удалить неиспользуемые активы.

* Test your scenes one by one rather than loading them simultaneously.
* Проверяйте свои сцены одну за другой, а не загружайте их одновременно.

* Debug your application on the **iPhone simulator** instead of a real device. However, execution is slow on the simulator and it produces some rendering artifacts, so we don't recommend using it to debug real-time graphics.
* Отлаживайте приложение на **симуляторе iPhone**, а не на реальном устройстве.  Однако выполнение в симуляторе происходит медленно и создает некоторые артефакты рендеринга, поэтому мы не рекомендуем использовать его для отладки графики в реальном времени.

## Compile shaders on iOS
## Компиляция шейдеров на iOS

As converting Stride shaders to OpenGL shaders on iPhone devices is slow, we recommend you convert them remotely (ie in Game Studio).
Поскольку преобразование шейдеров Stride в шейдеры OpenGL на устройствах iPhone происходит медленно, мы рекомендуем вам конвертировать их удаленно (например, в Game Studio).

Our recommended workflow is:
Рекомендуемый нами рабочий процесс:

1. Execute the app on Windows. This creates the shader permutations.
1. Запустите приложение в Windows.  Это создает перестановки шейдера.

    ![New effects](../graphics/effects-and-shaders/media/new-effects-to-import.png)
![Новые эффекты](../graphics/effects-and-shaders/media/new-effects-to-import.png)

2. Import the new shaders in Game Studio. This generates an effect log.
2. Импортируйте новые шейдеры в Game Studio.  Это создает журнал эффектов.

    ![Effect log](../graphics/effects-and-shaders/media/effect-log.png)
![Журнал эффектов](../graphics/effects-and-shaders/media/effect-log.png)

3. Save and run the game on iOS.
3. Сохраните и запустите игру на iOS.

Ideally, this creates all the shader permutations remotely, so you don't need to convert them on the device. However, new permutations might still occur due to differences such as supported screen resolutions. For more information, including information about how to compile shaders remotely on iOS, see [Compile shaders](../graphics/effects-and-shaders/compile-shaders.md).
В идеале это создает все перестановки шейдеров удаленно, поэтому вам не нужно преобразовывать их на устройстве.  Однако новые перестановки все еще могут возникать из-за различий, таких как поддерживаемые разрешения экрана.  Для получения дополнительной информации, включая информацию о том, как удаленно компилировать шейдеры на iOS, см. [Компиляция шейдеров](../graphics/effects-and-shaders/compile-shaders.md).

## See also
## Смотрите также

* [iOs in the Xamarin documentation](https://developer.xamarin.com/guides/ios/)
* [iOs в документации Xamarin] (https://developer.xamarin.com/guides/ios/)
* [Compile shaders](../graphics/effects-and-shaders/compile-shaders.md)
* [Скомпилировать шейдеры](../graphics/effects-and-shaders/compile-shaders.md)
