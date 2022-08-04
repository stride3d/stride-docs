# Cached files
# Кэшированные файлы

When you build your project, Stride caches the assets and code in folders inside the project.
Когда вы создаете свой проект, Stride кэширует ресурсы и код в папках внутри проекта.

You might want to clean the cache if:
Вам может понадобиться очистить кеш, если:

* the cache is taking up too much space on disk
* кеш занимает слишком много места на диске

* assets don't update in-game after you edit or delete them
* активы не обновляются в игре после их редактирования или удаления

## Clean the cache from Visual Studio
## Очистите кеш от Visual Studio

1. To clean the code cache, under **Build**, select **Clean Solution**.
1. Чтобы очистить кеш кода, в разделе **Сборка** выберите **Очистить решение**.

    ![Clean solution](media/clean-solution.png)
![Чистое решение](media/clean-solution.png)

2. If you have the [Stride Visual Studio extension](../get-started/visual-studio-extension.md) installed, you can also clean the asset cache. To do this, under **Stride**, select **Clean intermediate assets for Solution**.
2. Если у вас установлено [Расширение Stride Visual Studio](../get-started/visual-studio-extension.md), вы также можете очистить кэш активов.  Для этого в разделе **Шаг** выберите **Очистить промежуточные активы для решения**.

    ![Clean solution](media/clean-assets.png)
![Чистое решение](media/clean-assets.png)

3. Rebuild the project to rebuild the cache from scratch.
3. Пересоберите проект, чтобы восстановить кеш с нуля.

## Clean the cache manually
## Очистить кеш вручную

If cleaning the cache from Visual Studio doesn't work, try deleting the files manually.
Если очистка кеша из Visual Studio не работает, попробуйте удалить файлы вручную.

1. Delete the following folders:
1. Удалите следующие папки:

    * the binary cache: *~/MyGame/MyGame/Bin*
* бинарный кеш: *~/MyGame/MyGame/Bin*

    * the asset cache: *~/MyGame/MyGame/Cache*
* кэш ресурсов: *~/MyGame/MyGame/Cache*

    * the **obj** folders in the platform folders for your game (eg *~/MyGame.iOS/obj*)
* папки **obj** в папках платформы для вашей игры (например, *~/MyGame.iOS/obj*)

2. If you're developing for iOS, on your Mac, also delete: *~/Library/Caches/Xamarin/mtbs/builds/MyGame*
2. Если вы разрабатываете для iOS, на вашем Mac также удалите: *~/Library/Caches/Xamarin/mtbs/builds/MyGame*

3. Rebuild the project to rebuild the cache from scratch.
3. Пересоберите проект, чтобы восстановить кеш с нуля.

## Clear the Game Studio caches
## Очистить кеши Game Studio

In addition to the caches Stride creates for your project, Game Studio keeps caches for the editor.
В дополнение к кешам, которые Stride создает для вашего проекта, Game Studio хранит кеши для редактора.

### Asset cache
### Кэш активов

To speed up asset loading in the editor, Game Studio saves a cache of asset references. It contains data about every asset ever loaded in every project. This means it can grow very large over time.
Чтобы ускорить загрузку ассетов в редакторе, Game Studio сохраняет кэш ссылок на ассеты.  Он содержит данные о каждом ресурсе, когда-либо загруженном в каждом проекте.  Это означает, что со временем он может стать очень большим.

By default, the folder is in: *%temp%/Stride*
По умолчанию папка находится в: *%temp%/Stride*

>[!Tip]
>[!Подсказка]
>To check or change where Game Studio saves the cache, see **Edit > Settings > Environment > Build cache directory.**
>Чтобы проверить или изменить, где Game Studio сохраняет кеш, см. **Правка > Настройки > Среда > Создать каталог кеша.**
>![Settings](media/settings-window.png)
>![Настройки](media/settings-window.png)

To clean the cache, delete the folder and run Game Studio again.
Чтобы очистить кеш, удалите папку и снова запустите Game Studio.

### Settings cache
### Кэш настроек

Game Studio saves editor information (such as window positions and recently-opened projects) in: *%AppData%/Stride*
Game Studio сохраняет информацию о редакторе (например, расположение окон и недавно открытые проекты) в: *%AppData%/Stride*.

Game Studio also saves information about open tabs and the editor camera position in the `.sdpkg.user` file in the project folder (eg *~/MyGame/MyGame/MyGame.sdpkg.user*).
Game Studio также сохраняет информацию об открытых вкладках и положении камеры редактора в файле `.sdpkg.user` в папке проекта (например, *~/MyGame/MyGame/MyGame.sdpkg.user*).

These files are small, but you might want to delete them if you get Game Studio into a bad state. Deleting them doesn't affect anything in your project.
Эти файлы небольшие, но вы можете удалить их, если Game Studio выйдет из строя.  Их удаление никак не повлияет на ваш проект.

After you delete cache files, when you start Game Studio, it builds a new cache using the default settings.
После удаления файлов кеша при запуске Game Studio создается новый кеш с настройками по умолчанию.

>[!Tip]
>[!Подсказка]
>You can also reset the Game Studio layout without clearing the cache in **Edit > Settings > Interface > Reset Game Studio layout**.
> Вы также можете сбросить макет Game Studio без очистки кеша в **Правка > Настройки > Интерфейс > Сбросить макет Game Studio**.
>![Reset Game Studio layout](media/game-studio-layout-reset-button.png)
>![Сбросить раскладку Game Studio](media/game-studio-layout-reset-button.png)

## See also
## Смотрите также

* [Project structure](project-structure.md)
* [Структура проекта](project-structure.md)
* [Version control](version-control.md)
* [Контроль версий](version-control.md)
