# Organize your files in version control
# Организуйте свои файлы в системе контроля версий

We recommend you use a version control system such as Git, SVN, or Perforce Helix to save a history of changes to your project. 
Мы рекомендуем вам использовать систему контроля версий, такую ​​как Git, SVN или Perforce Helix, чтобы сохранить историю изменений вашего проекта.

How you organize and share your files is up to you, but there are some things to keep in mind.
То, как вы упорядочиваете и делитесь своими файлами, зависит от вас, но есть некоторые вещи, о которых следует помнить.

## Files you shouldn't add to version control
## Файлы, которые не следует добавлять в систему контроля версий

### **Bin** and **obj** folders
### Папки **Bin** и **obj**

We don't recommend you add the **Bin** or **obj** folders to version control. This is because:
Мы не рекомендуем добавлять папки **Bin** или **obj** в систему контроля версий.  Это потому что:

* Game Studio builds these folders every time you run the game, so you don't need to keep a history of them.
* Game Studio создает эти папки каждый раз, когда вы запускаете игру, поэтому вам не нужно вести их историю.
* You can't see if they match the source files they were generated from in a given commit.
* Вы не можете видеть, соответствуют ли они исходным файлам, из которых они были сгенерированы в данном коммите.
* They take up space and slow down version control synchronization.
* Они занимают место и замедляют синхронизацию контроля версий.

Visual Studio also puts **.obj** folders inside each code folder. For the same reasons, we don't recommend you add these to version control.
Visual Studio также помещает папки **.obj** в каждую папку кода.  По тем же причинам мы не рекомендуем добавлять их в систему контроля версий.

### Resource files
### Файлы ресурсов

**Resource files** are files imported into Game Studio and used by assets. They include image files (eg `.png`, `.jpg`), audio files (eg `.mp3`, `.wav`), and models (eg `.fbx`). We recommend you save these files in the **Resources** folder in your project folder.
**Файлы ресурсов** — это файлы, импортированные в Game Studio и используемые активами.  К ним относятся файлы изображений (например, `.png`, `.jpg`), аудиофайлы (например, `.mp3`, `.wav`) и модели (например, `.fbx`).  Мы рекомендуем вам сохранить эти файлы в папке **Resources** в папке вашего проекта.

We don't recommend you save resource files in the Assets folder. You might be used to organizing files this way if you use Unity®, as Unity® requires resource files and asset files to be in the same folder. Stride doesn't require this, and doing so has downsides.
Мы не рекомендуем сохранять файлы ресурсов в папке Assets.  Вы можете привыкнуть к такой организации файлов, если используете Unity®, поскольку Unity® требует, чтобы файлы ресурсов и файлы ресурсов находились в одной папке.  Stride не требует этого, и это имеет свои недостатки.

For example, imagine an artist has edited 10GB of textures and committed them to source control. At the same time, a designer needs to edit an asset quickly. To do this, the designer gets the latest version of the asset from source control. However, because the assets and resource files are in the same folder, the designer is forced to get the 10gb of files at the same time. If the files are in a separate folder, however, the designer only has to get the folder they need. Additionally, as asset files are much smaller than resource files, it's much faster to navigate the asset history in a dedicated asset folder.
Например, представьте, что художник отредактировал 10 ГБ текстур и передал их системе управления версиями.  В то же время дизайнеру необходимо быстро отредактировать ассет.  Для этого дизайнер получает последнюю версию актива из системы управления версиями.  Однако, поскольку ресурсы и файлы ресурсов находятся в одной и той же папке, дизайнер вынужден одновременно получать 10 ГБ файлов.  Однако, если файлы находятся в отдельной папке, дизайнеру нужно получить только ту папку, которая ему нужна.  Кроме того, поскольку файлы активов намного меньше, чем файлы ресурсов, намного быстрее перемещаться по истории активов в специальной папке активов.

### Content creation files
### Файлы для создания контента

**Content creation files** are created with external content creation tools, such as `.psd` files (Photoshop) or `.max` files (3D Studio Max).
**Файлы для создания контента** создаются с помощью внешних инструментов для создания контента, таких как файлы `.psd` (Photoshop) или файлы `.max` (3D Studio Max).

We don't recommend you save content creation files in your project folder. This is because the files are often large and aren't used in the project directly. Instead, we recommend you save the files in a different version control repository - or, if your version control system supports partial checkouts (such as SVN or Perforce), a different root folder. This means team members only get the files they need.
Мы не рекомендуем сохранять файлы создания контента в папке проекта.  Это связано с тем, что файлы часто имеют большой размер и не используются в проекте напрямую.  Вместо этого мы рекомендуем сохранять файлы в другом репозитории системы контроля версий или, если ваша система контроля версий поддерживает частичное извлечение (например, SVN или Perforce), в другой корневой папке.  Это означает, что члены команды получают только те файлы, которые им нужны.

## Suggested directory structure
## Предлагаемая структура каталогов

Following these suggestions, an example folder structure might look like this:
Следуя этим предложениям, примерная структура папок может выглядеть так:

```cs
```CS
- MyGame
- Моя игра
    - Assets
- Ресурсы
        - texture.sdtex
- текстура.sdtex
    - Bin
- Бин
    - MyGame.Game
- Моя Игра.Игра
    - MyGame.Platform
- MyGame.Платформа
    - obj
- объект
    - Resources
- Ресурсы
        - texture.png
- текстура.png
- ContentCreationFiles
- Файлы Создания Контента
    - texture.psd
- текстура.psd
  ```
```

You could even create separate folders for different kinds of content creation file:
Вы даже можете создать отдельные папки для разных типов файлов создания контента:

```cs
```CS
- MyGame
- Моя игра
    - Assets
- Ресурсы
        - texture.sdtex
- текстура.sdtex
        - model.sdtex
- модель.sdtex
    - Bin
- Бин
    - MyGame.Game
- Моя Игра.Игра
    - MyGame.Platform
- MyGame.Платформа
    - obj
- объект
    - Resources
- Ресурсы
        - texture.png
- текстура.png
        - model.fbx
- модель.fbx
- PhotoshopProjects
- PhotoshopProjects
    - texture.psd
- текстура.psd
- MayaProjects
- МайяПроекты
     - model.mb
- модель.mb
  ```
```

## Example
## Пример

Imagine a team with two programmers, two 2D artists, and two 3D artists.
Представьте себе команду из двух программистов, двух 2D-художников и двух 3D-художников.

* The programmers check out the *MyGame* project folder containing code, assets, and resources.
* Программисты проверяют папку проекта *MyGame*, содержащую код, активы и ресурсы.
* The 2D artists check out the game project and the *PhotoshopProjects* folder containing `.psd` files.
* 2D-художники проверяют проект игры и папку *PhotoshopProjects*, содержащую файлы `.psd`.
* The 3D artists check out the game project and the *MayaProjects* folder containing `.mb` (Maya project) files.
* 3D-художники изучают игровой проект и папку *MayaProjects*, содержащую файлы `.mb` (проект Maya).

Now imagine one of the 2D artists changes several `.psd` files and commits 2GB of changes to version control. Because only the 2D artists have the *PhotoshopProjects* folder checked out, only the other 2D artist gets this change. The other team members don't need it. This is an efficient way to share files across projects.
Теперь представьте, что один из 2D-художников изменяет несколько файлов `.psd` и передает 2 ГБ изменений в систему управления версиями.  Поскольку папка *PhotoshopProjects* извлечена только у 2D-художников, это изменение получит только другой 2D-художник.  Остальным членам команды это не нужно.  Это эффективный способ обмена файлами между проектами.

## See also
## Смотрите также

* [Project structure](project-structure.md)
* [Структура проекта](project-structure.md)
* [Distribute a game](distribute-a-game.md)
* [Распространить игру](distribute-a-game.md)
