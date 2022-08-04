# Create a script
# Создать скрипт

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

You can create scripts using Game Studio or an IDE such as Visual Studio.
Вы можете создавать сценарии с помощью Game Studio или интегрированной среды разработки, например Visual Studio.

## Create a script in Game Studio
## Создать скрипт в Game Studio

1. In the **Asset View**, click **Add asset > Scripts** and select a script type.
1. В **Просмотре активов** нажмите **Добавить актив > Скрипты** и выберите тип скрипта.

	![Select script type window](media/create-a-script-script-asset-selection.png)
![Окно выбора типа скрипта](media/create-a-script-script-asset-selection.png)

	>[!Note]
>[!Примечание]
	>For information about different types of script, see [Types of script](types-of-script.md).
>Информацию о различных типах скриптов см. в разделе [Типы скриптов](types-of-script.md).

	The **New script** dialog opens.
Откроется диалоговое окно **Новый сценарий**.

	![New script](media/script-wizard.png)
![Новый скрипт](media/script-wizard.png)

2. Specify a class and namespace for the script and click **Create script**.
2. Укажите класс и пространство имен для скрипта и нажмите **Создать скрипт**.

3. To use the script, you need to save it. By default, Game Studio prompts you to save the script now.
3. Чтобы использовать скрипт, его нужно сохранить.  По умолчанию Game Studio предлагает вам сохранить скрипт сейчас.

After you save the script, you can see it in the **Asset View**.
После того, как вы сохраните скрипт, вы сможете увидеть его в **Asset View**.

>[!Note]
>[!Примечание]
> Although scripts are a kind of asset, they're not saved in the Assets folder. Instead, they're saved in the relevant assembly folder. For more information, see [Project structure](../files-and-folders/project-structure.md).
> Хотя сценарии являются своего рода активами, они не сохраняются в папке «Активы».  Вместо этого они сохраняются в соответствующей папке сборки.  Для получения дополнительной информации см. [Структура проекта](../files-and-folders/project-structure.md).
  
You can also see the new script in Visual Studio.
Вы также можете увидеть новый скрипт в Visual Studio.

![New script on Asset View tab](media/create-a-script-new-script-asset-view.png)
![Новый скрипт на вкладке Asset View](media/create-a-script-new-script-asset-view.png)

> [!Tip]
> [!Подсказка]
> To open your solution in Visual Studio from Game Studio, click the ![Open in IDE](media/create-a-script-ide-icon.png) (**Open in IDE**) icon in the Game Studio toolbar.
> Чтобы открыть свое решение в Visual Studio из Game Studio, щелкните значок ![Открыть в IDE](media/create-a-script-ide-icon.png) (**Открыть в IDE**) на панели инструментов Game Studio.  .

```cs
```CS
using System;
с помощью системы;
using System.Text;
используя System.Text;
using System.Threading.Tasks;
использование System.Threading.Tasks;
using Stride.Core.Mathematics;
с помощью Stride.Core.Mathematics;
using Stride.Input;
используя Stride.Input;
using Stride.Engine;
с помощью Stride.Engine;

namespace MyGame
пространство имен MyGame
{
{
	public class BasicAsyncScript : AsyncScript
открытый класс BasicAsyncScript : AsyncScript
	{	
{
		public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
		{
{
			while(Game.IsRunning)
в то время как (Game.IsRunning)
			{
{
				// Do some stuff every frame
// Делаем что-то в каждом кадре
				await Script.NextFrame();
ожидайте Script.NextFrame();
			}
}
		}
}
	}
}
}
}
```
```

## Create a script in Visual Studio
## Создать скрипт в Visual Studio

1. Open Visual Studio.
1. Откройте Visual Studio.

	> [!Tip]
> [!Подсказка]
	> To open your solution in Visual Studio from Game Studio, click the ![Open in IDE](media/create-a-script-ide-icon.png) (**Open in IDE**) icon in the Game Studio toolbar.
> Чтобы открыть свое решение в Visual Studio из Game Studio, щелкните значок ![Открыть в IDE](media/create-a-script-ide-icon.png) (**Открыть в IDE**) на панели инструментов Game Studio.  .

	The game solution is composed of several projects:
Игровое решение состоит из нескольких проектов:
	
	* The project ending *.Game* is the main project, and should contain all your game logic and scripts. 
* Проект с окончанием *.Game* является основным проектом и должен содержать всю вашу игровую логику и скрипты.
	
	* Other projects (eg *MyGame.Windows*, *MyGame.Android* etc) contain platform-specific code.
* Другие проекты (например, *MyGame.Windows*, *MyGame.Android* и т. д.) содержат код, зависящий от платформы.

	For more information, see [Project structure](../files-and-folders/project-structure.md).
Для получения дополнительной информации см. [Структура проекта](../files-and-folders/project-structure.md).

2. Add a new class file to the `.Game` project. To do this, right-click the project and select **Add > New Item**.
2. Добавьте новый файл класса в проект `.Game`.  Для этого щелкните проект правой кнопкой мыши и выберите **Добавить > Новый элемент**.

	The **Add New Item** dialog opens.
Откроется диалоговое окно **Добавить новый элемент**.

3. Select **Class**, type a name for your script, and click **Add**.
3. Выберите **Класс**, введите имя сценария и нажмите **Добавить**.

   Visual Studio adds a new class to your project.
Visual Studio добавляет в проект новый класс.

4. In the file you created, make sure the script is public and derives from either **AsyncScript** or **SyncScript**.
4. В созданном файле убедитесь, что сценарий общедоступен и является производным от **AsyncScript** или **SyncScript**.

5. Implement the necessary abstract methods.
5. Реализуйте необходимые абстрактные методы.

	For example:
Например:

	```cs
```CS
	using System;
с помощью системы;
	using System.Text;
используя System.Text;
	using System.Threading.Tasks;
использование System.Threading.Tasks;
	using Stride.Core.Mathematics;
с помощью Stride.Core.Mathematics;
	using Stride.Input;
используя Stride.Input;
	using Stride.Engine;
с помощью Stride.Engine;
		
	namespace MyGame
пространство имен MyGame
	{
{
		public class SampleSyncScript : SyncScript
открытый класс SampleSyncScript : SyncScript
		{			
{
			public override void Update()
публичное переопределение void Update()
			{
{
				if (Game.IsRunning)
если (Игра.Выполняется)
				{
{
					// Do something every frame
// Делаем что-то каждый кадр
				}
}
			}
}
		}
}
	}
}
	```
```

6. Save the project and script files.
6. Сохраните проект и файлы сценария.

7. Because you modified the script, Game Studio needs to reload the assembly to show the changes.
7. Поскольку вы изменили сценарий, Game Studio необходимо перезагрузить сборку, чтобы отобразить изменения.
   
	![Confirmation message](media/create-a-script-confirmation-message.png)
![Сообщение с подтверждением](media/create-a-script-confirmation-message.png)

	Click **Yes**.
Нажмите **Да**.

You can see the script in the **Asset View**.
Вы можете увидеть скрипт в **Asset View**.

![New script on Asset View tab](media/create-a-script-new-script-asset-view.png)
![Новый скрипт на вкладке Asset View](media/create-a-script-new-script-asset-view.png)

>[!Note]
>[!Примечание]
> Although scripts are a kind of asset, they're not saved in the Assets folder. Instead, they're saved in the relevant assembly folder. For more information, see [Project structure](../files-and-folders/project-structure.md).
> Хотя сценарии являются своего рода активами, они не сохраняются в папке «Активы».  Вместо этого они сохраняются в соответствующей папке сборки.  Для получения дополнительной информации см. [Структура проекта](../files-and-folders/project-structure.md).

## See also
## Смотрите также

* [Types of script](types-of-script.md)
* [Типы скриптов](types-of-script.md)
* [Use a script](use-a-script.md)
* [Использовать скрипт](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Общие свойства и поля](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Расписание и приоритеты](scheduling-and-priorities.md)
* [Events](events.md)
* [События](events.md)
* [Debugging](debugging.md)
* [Отладка](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)
* [Переменные препроцессора](preprocessor-variables.md)
