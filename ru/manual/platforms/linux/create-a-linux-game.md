# Create a Linux game
# Создать игру для Linux

>[!Note]
>[!Примечание]
>Before following these instructions, make sure you've followed the instructions in [Linux - Setup and requirements](setup-and-requirements.md).
>Прежде чем следовать этим инструкциям, убедитесь, что вы выполнили инструкции в [Linux - Установка и требования](setup-and-requirements.md).

1. In the Stride launcher, create a new game and select Linux as a target platform.
1. В программе запуска Stride создайте новую игру и выберите Linux в качестве целевой платформы.

    ![New Game](media/platform_choice.png)
![Новая игра](media/platform_choice.png)

2. In Game Studio, in the platforms menu, select **Linux**.
2. В Game Studio в меню платформ выберите **Linux**.

    ![Platform Selector](media/platform_selector.png)
![Выбор платформы](media/platform_selector.png)

3. Press **F5** to build and run the project.
3. Нажмите **F5**, чтобы построить и запустить проект.

4. The first time you run the project, enter information about your Linux host:
4. При первом запуске проекта введите информацию о вашем хосте Linux:

    ![Credential Dialog](media/default_credential_dialog.png)
![Диалог учетных данных](media/default_credential_dialog.png)

    Enter your information as below:
Введите информацию, как показано ниже:

    ![Filled Credential Dialog](media/filled_credential_dialog.png)
![Диалог заполненных учетных данных](media/filled_credential_dialog.png)

5. Click **Test settings** to test the credentials. 
5. Нажмите **Проверить настройки**, чтобы проверить учетные данные.

    If you made an error, Game Studio displays:
Если вы допустили ошибку, Game Studio отобразит:

    ![Invalid Settings](media/unreachable_host.png)
![Неверные настройки](media/unreachable_host.png)

    If the credentials are correct, Game Studio displays:
Если учетные данные верны, Game Studio отображает:

    ![Success](media/successful_login.png)
![Успех](media/successful_login.png)

    Click the **OK** button to continue. 
Нажмите кнопку **ОК**, чтобы продолжить.
    
    Game Studio copies the files over your Linux host in a subdirectory of the location you have provided. The name of the subdirectory is the name of your game.
Game Studio копирует файлы на ваш Linux-хост в подкаталог указанного вами места.  Название подкаталога — это название вашей игры.

    If something goes wrong, check the **Output** pane for details.
Если что-то пойдет не так, проверьте подробности на панели **Вывод**.

## Settings
## Настройки

Your credentials are saved in the **Settings** dialog:
Ваши учетные данные сохраняются в диалоговом окне **Настройки**:

![Settings Dialog](media/remote_settings.png)
![Диалоговое окно настроек](media/remote_settings.png)

The password is encrypted using the Micrsoft *System.Security.Cryptograph.ProtectedData.Protect* method for the current user, and saved in Base64, displayed in the Settings. You can't change the password from the Settings dialog.
Пароль шифруется с использованием метода Microsoft *System.Security.Cryptograph.ProtectedData.Protect* для текущего пользователя и сохраняется в формате Base64, отображаемом в настройках.  Вы не можете изменить пароль в диалоговом окне настроек.

There are two additional settings that control the execution of a game:
Есть две дополнительные настройки, которые контролируют выполнение игры:

* Use CoreCLR: forces execution using .NET Core
* Использовать CoreCLR: принудительное выполнение с использованием .NET Core.

* X Display: forces execution on a specific X display of your Linux host
* X Display: принудительное выполнение на определенном X-дисплее вашего хоста Linux.

## Compile outside Game Studio
## Компилировать вне Game Studio

Like any Stride project, you can also compile the project directly from Visual Studio or from the command line. In both cases, you need to select a valid configuration:
Как и любой проект Stride, вы также можете скомпилировать проект непосредственно из Visual Studio или из командной строки.  В обоих случаях необходимо выбрать допустимую конфигурацию:

* Debug
* Отладка
* Release
* Выпускать
* CoreCLR_Debug
* CoreCLR_Debug
* CoreCLR_Release
* CoreCLR_Release

Debug and Release target Mono. The others target .NET Core.
Отладка и выпуск целевого Mono.  Остальные нацелены на .NET Core.

### Visual Studio
### Визуальная студия

Once your project is loaded in Visual Studio, select the Linux project. In the **Solution Configurations** drop-down menu, you select a valid Linux configuration:
После загрузки проекта в Visual Studio выберите проект Linux.  В раскрывающемся меню **Конфигурации решения** выберите допустимую конфигурацию Linux:

![Configuration selection](media/vs_configuration_selection.png)
![Выбор конфигурации](media/vs_configuration_selection.png)

### MSBuild
### MSBuild

To compile for Linux, from a command line, use:
Для компиляции для Linux из командной строки используйте:

```
```
msbuild /p:Platform=Linux /p:Configuration=CONFIG YourGame.sln
msbuild /p:Platform=Linux /p:Configuration=CONFIG YourGame.sln
```
```

Where **CONFIG** is a valid Linux configuration.
Где **CONFIG** — допустимая конфигурация Linux.

## Limitations
## Ограничения

* No debugging facility yet
* Пока нет возможности отладки

* Switching the rendering graphics platform might cause the game to hang on startup. As a workaround, on the Linux host, in the directory where the game is deployed, delete the following directories: 
* Переключение графической платформы рендеринга может привести к зависанию игры при запуске.  В качестве обходного пути на хосте Linux в каталоге, где развернута игра, удалите следующие каталоги:

    * `cache`
* `кэш`
    * `local`
* `местный`
    * `roaming`
* `роуминг`

## See also
## Смотрите также

* [Linux — Setup and requirements](setup-and-requirements.md)
* [Linux — Настройка и требования](setup-and-requirements.md)
