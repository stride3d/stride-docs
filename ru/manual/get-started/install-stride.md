# Установка Stride

<span class="label label-doc-level">Сложность / Лёгкая</span>

1. Скачайте Stride установщик (**StrideSetup.exe**) с [Stride веб-сайта](http://stride3d.net/download/).
 
2. Запустите файл **StrideSetup.exe**.
 
    Откроется окно **Stride Setup Wizard**.

3. Stride зависит от .NET runtime. Если у вас нет конкретной версии, в которой он нуждается, попросит вас установить нужную.

    ![Начальное окно](media/prerequisites-installer.png)

    Нажмите **Next** и следуйте подсказкам.

    > [!Note]
    > В качестве альтернативы вы можете [скачать .NET из центра загрузки Microsoft](https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net472-web-installer) и перезапустить Stride установщик.
	
4. Откроется **Stride Setup Wizard** окно.

     ![Мастер установки Stride](media/install-stride-setup-wizard.png)
 
     Нажмите **Next**.
 
    Откроется окно **Stride License Agreement**.

    ![Окно пользовательского соглашения Stride](media/install-stride-license-agreement.png)

    Нажмите **Accept**.
	
5. Откроется окно **Stride installation type**.

    ![Окно видов установки Stride](media/install-stride-installation-type.png)
	
    Выберите тип установки и нажмите **Next**. 

6.  Откроется окно **Select installation folder**.

    ![Выбор пути установки](media/install-stride-select-installation-folder.png)

    Выберите папку, где хотите установить Stride и нажмите **Next**.
	
7. Откроется окно **Create application shortcuts**.
    
    ![Окно создания ярлыков](media/install-stride-create-application-shortcuts.png)

    Выберите, какие ярлыки вы хотите создать для Stride, и нажмите **Next**.
	
8. Откроется окно **Ready to Install**.
    
    ![Окно Ready to install](media/install-stride-ready-to-install.png)

    Нажмите **Install**.

9.  Начнётся установка.
 
    ![Прогресс установки](media/install-stride-installation-status.png)

    После закрытия установщика Stride создает ярлыки в выбранных вами местах и откроется **Stride Launcher** окно. 

    ![Stride Launcher](media/stride-launcher.png)

    Stride Launcher предложит Вам установить последнюю версию Stride.

    ![Нет установленных версий](media/stride-launcher-install-last-version.png)

    Нажмите **Yes**.

10. Stride Launcher спросит, хотите ли вы установить расширение Visual Studio. Это позволяет вам редактировать шейдеры непосредственно из Visual Studio и обеспечивает выделение синтаксиса, анализ живого кода с проверкой, проверкой ошибок и навигацией. Установка расширения не является обязательной, но мы рекомендуем ее.

    ![Установка Visual Studio расширения](media/install-VS-plug-in-prompt.png)

11. Окно подтверждения, что Stride может вносить изменения на Ваш компьютер.

    ![Окно подтверждения](media/prerequsites-installer2.png)

    Нажмите **Yes**.
    
12. Stride Launcher проверит что **Visual C++ Redistributable** установлен. Если он не установлен, следуйте подсказкам для его установки.

13. Stride Launcher проверит что **Build Tools for Visual Studio** установленны. Если у вас есть Visual Studio, то это уже установлено .Если он не установлен, следуйте подсказкам для его установки.

    ![Установка средст сборки VS ](media/installing-vs-build-tools.png)

    >[!Note]
    > Windows использует установщик Visual Studio для установки **Build Tools for Visual Studio**, но он не устанавливает Visual Studio.

Stride теперь установлен и готов к использованию.

>[!Note]

> Если вы не установите необходимые компоненты, Stride не запустится. В этом случае вы можете загрузить и установить необходимые компоненты отдельно. Для получения инструкций см. [Решение проблем — Stride не запускается](../troubleshooting/stride-doesnt-run.md).

> В качестве альтернативы, удалите  Stride, перезапустите установщик Ыекшву и установите необходимые компоненты.

## Что дальше?

* [Запуск Stride](launch-stride.md)
