# Xbox Live
# Xbox Live

This page explains how to configure your project to work with Xbox Live.
На этой странице объясняется, как настроить проект для работы с Xbox Live.

## 1. Before you start
## 1. Прежде чем начать

1. Make sure your project uses UWP as a platform. To do this, you can either:
1. Убедитесь, что ваш проект использует UWP в качестве платформы.  Для этого вы можете:

    * [create a project](../../get-started/create-a-project.md) and select **UWP** as a platform, or
* [создайте проект](../../get-started/create-a-project.md) и выберите **UWP** в качестве платформы или
    * [add **UWP** as a platform to an existing project](../add-or-remove-a-platform.md)
* [добавить **UWP** в качестве платформы в существующий проект](../add-or-remove-a-platform.md)

    >[!Tip]
>[!Подсказка]
    >For this tutorial, you might find it useful to create a new project to test the process, then apply the knowledge to your existing projects.
>Для этого руководства вам может быть полезно создать новый проект для тестирования процесса, а затем применить полученные знания к существующим проектам.

2. Make sure you can run the project from UWP. To do this, in Visual Studio, select the platform you want (UWP-64, UWP-32, or UWP-ARM) from the **Solution Platform** drop-down list, and run the project.
2. Убедитесь, что вы можете запустить проект из UWP.  Для этого в Visual Studio выберите нужную платформу (UWP-64, UWP-32 или UWP-ARM) в раскрывающемся списке **Платформа решения** и запустите проект.

3. Download the Xbox Live SDK.
3. Загрузите SDK для Xbox Live.
    
    To write this page, we used XboxLiveSDK-1612-20170114-002. The sample is loosely based on the Achievements sample in the Xbox Live SDK.
Для написания этой страницы мы использовали XboxLiveSDK-1612-20170114-002.  Образец основан на образце достижений в Xbox Live SDK.

4. Change your Xbox Live environment. In the **SDK** folder, under **Tools**, run:
4. Измените среду Xbox Live.  В папке **SDK** в разделе **Инструменты** запустите:

    ```
```
    SwitchSandbox.cmd XDKS.1
SwitchSandbox.cmd XDKS.1
    ```
```

    XDKS.1 is the sandbox used for the Microsoft samples.
XDKS.1 — это песочница, используемая для образцов Microsoft.

    >[!Warning] 
>[!Предупреждение]
    >This blocks regular Xbox accounts and only permits developer accounts. To switch back, run: 
> Это блокирует обычные учетные записи Xbox и разрешает только учетные записи разработчиков.  Чтобы переключиться обратно, запустите:
    
    >```
>```
    >SwitchSandbox.cmd RETAIL
>SwitchSandbox.cmd РОЗНИЧНАЯ ТОРГОВЛЯ
    >```
>```
    
5. Make sure you can run the Achievements sample with your developer account.
5. Убедитесь, что вы можете запустить образец достижений с помощью своей учетной записи разработчика.

## 2. Add the Xbox Live SDK to your solution
## 2. Добавьте Xbox Live SDK в свое решение

1. In Visual Studio, open your game solution.
1. В Visual Studio откройте игровое решение.

2. Open the Package Manager Console (**Tools > NuGet Package Manager > Package Manager Console**).
2. Откройте консоль диспетчера пакетов (**Инструменты > Диспетчер пакетов NuGet > Консоль диспетчера пакетов**).

3. In the **Default project** field, select your UWP project (eg *MyGame.UWP*).
3. В поле **Проект по умолчанию** выберите свой проект UWP (например, *MyGame.UWP*).

	![MyGame.UWP](media/xboxlive01.png)
![MyGame.UWP](media/xboxlive01.png)

4. In the console, type:
4. В консоли введите:

    ```
```
    PM > Install-Package Microsoft.Xbox.Live.SDK.WinRT.UWP
PM > Install-Package Microsoft.Xbox.Live.SDK.WinRT.UWP
    ```
```

    Visual Studio adds the NuGet package to your project. 
Visual Studio добавит пакет NuGet в ваш проект.

5. Make sure the package appears in the **References** list.
5. Убедитесь, что пакет отображается в списке **References**.

	![Package in list](media/xboxlive02.png)
![Пакет в списке](media/xboxlive02.png)

## 3. Configure the UWP project
## 3. Настройте проект UWP

1. Delete *MyGame.UWP.TemporaryKey.pfx*.
1. Удалите *MyGame.UWP.TemporaryKey.pfx*.

2. Add *xboxservices.config* to your project.
2. Добавьте *xboxservices.config* в свой проект.
   
    You can get this file from any Xbox Live SDK sample (eg the Achievements sample) for test purposes. When you want to publish the game, change the **TitleId** and **Service config Id** with the ones provided for your project. For details, see the Xbox Live documentation.
Вы можете получить этот файл из любого образца Xbox Live SDK (например, образца достижений) для целей тестирования.  Если вы хотите опубликовать игру, измените **TitleId** и **Идентификатор конфигурации службы** на те, которые указаны для вашего проекта.  Дополнительные сведения см. в документации Xbox Live.

3. In the *xboxservices.config* properties, under **Build Action**, select **Content**, and under **Copy to Output Directory**, select **Always**.
3. В свойствах *xboxservices.config* в разделе **Действие сборки** выберите **Содержимое**, а в разделе **Копировать в выходной каталог** выберите **Всегда**.

	![Properties](media/xboxlive03.png)
![Свойства](media/xboxlive03.png)

4. Edit *Package.appxmanifest* with details relevant to your project.
4. Отредактируйте *Package.appxmanifest*, указав детали, относящиеся к вашему проекту.

    Again, you can use the manifest file from any Xbox Live SDK sample (eg the Achievements sample) for test purposes. If you associate your game with a store app, use the generated manifest file. For details, see the Xbox Live documentation.
Опять же, вы можете использовать файл манифеста из любого образца Xbox Live SDK (например, образец достижений) в тестовых целях.  Если вы связываете свою игру с приложением магазина, используйте сгенерированный файл манифеста.  Дополнительные сведения см. в документации Xbox Live.

5. Make sure the capability *InternetClientServer* is enabled.
5. Убедитесь, что возможность *InternetClientServer* включена.

## 4. Add user account scripts to your game
## 4. Добавьте в игру сценарии учетных записей пользователей

You need to enable Xbox Live capability in your game project without exposing the Xbox Live SDK. As *MyGame.UWP* already references *MyGame.Game*, we can't reference it. Instead, we can create an interface and implement it from the UWP project side.
Вам необходимо включить возможности Xbox Live в своем игровом проекте, не раскрывая Xbox Live SDK.  Поскольку *MyGame.UWP* уже ссылается на *MyGame.Game*, мы не можем ссылаться на него.  Вместо этого мы можем создать интерфейс и реализовать его со стороны проекта UWP.

>[!Note]
>[!Примечание]
>There are several ways to do this. This page explains one method.
>Есть несколько способов сделать это.  На этой странице объясняется один метод.

1. Add two interfaces to your game, `IAccountManager` and `IConnectedAccount`. 
1. Добавьте в игру два интерфейса: IAccountManager и IConnectedAccount.

2. On your UWP project (eg *MyGame.UWP*), implement the interfaces `public class XboxAccount : IConnectedAccount` and `public class XboxLiveAccountManager : IAccountManager`. 
2. В проекте UWP (например, *MyGame.UWP*) реализуйте интерфейсы `открытый класс XboxAccount : IConnectedAccount` и `открытый класс XboxLiveAccountManager : IAccountManager`.

3. Add the account factory to your game so you can access it later from a game script. In the `MyGameMainPage.xaml.cs`, add the following line:
3. Добавьте фабрику учетных записей в свою игру, чтобы вы могли получить к ней доступ позже из игрового скрипта.  В `MyGameMainPage.xaml.cs` добавьте следующую строку:

    ```
```
    Game.Services.AddService(typeof(IAccountManager), new XboxLiveAccountManager());
Game.Services.AddService(typeof(IAccountManager), новый XboxLiveAccountManager());
    ```
```

    ![References](media/xboxlive04.png)
![Ссылки](media/xboxlive04.png)

    The final script should look like this at minimum:
Окончательный скрипт должен выглядеть как минимум так:

    ```
```
        public class LoginScript : AsyncScript
открытый класс LoginScript: AsyncScript
        {
{
            private IConnectedAccount account;
частная учетная запись IConnectedAccount;

            public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
            {
{
                var accountMgr = Services.GetServiceAs<IAccountManager>();
var accountMgr = Services.GetServiceAs<IAccountManager>();
                account = accountMgr?.CreateConnectedAccount();
account = accountMgr?.CreateConnectedAccount();
			    if (account == null)
если (счет == ноль)
				    return;
возвращаться;

                var result = account.LoginAsync();
результат var = account.LoginAsync();
			
	    		// TODO Add your code here!
// TODO Добавьте сюда свой код!
            }
}
        }
}
    ```
```

Now you can expose the `xbox_live_user` functionality and other classes in your game.
Теперь вы можете использовать функциональность `xbox_live_user` и другие классы в своей игре.

![Property Grid](media/xboxlive05.png)
![Сетка свойств](media/xboxlive05.png)

## Sample project
## Пример проекта

* [Download a sample project](media/XboxLiveSample.zip) with Xbox Live login functionality 
* [Загрузить пример проекта](media/XboxLiveSample.zip) с функцией входа в Xbox Live

    ![Sample project](media/xboxlive08.png)
![Пример проекта](media/xboxlive08.png)

## See also
## Смотрите также

* [Platforms](../index.md)
* [Платформы](../index.md)
