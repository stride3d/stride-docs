# Asset control
# Контроль активов

>[!Warning]
>[!Предупреждение]
>This section is out of date. For now, you should only use it for reference.
>Этот раздел устарел.  На данный момент вы должны использовать его только для справки.

Until now, all assets of a game package, and its dependencies, were compiled as part of your game.
До сих пор все активы игрового пакета и его зависимости компилировались как часть вашей игры.

Starting with 1.3, we compile only the assets required by your game.
Начиная с версии 1.3, мы собираем только те ресурсы, которые требуются для вашей игры.

Don’t worry, most of it is done automatically for you! We do that by starting to collect dependencies from the new Game Setting asset: it references the Default Scene, and we can easily detect all the required asset references (Models, Materials, Asset referenced by your scripts and so on).
Не беспокойтесь, большая часть работы будет сделана за вас автоматически!  Мы делаем это, начав собирать зависимости от нового актива «Настройки игры»: он ссылается на сцену по умолчанию, и мы можем легко обнаружить все необходимые ссылки на активы (модели, материалы, активы, на которые ссылаются ваши сценарии и т. д.).

In case you were loading anything in your script using Content.Load, you can still tag those assets specifically with “Mark as Root” in the editor.
Если вы загружали что-либо в свой скрипт с помощью Content.Load, вы все равно можете специально пометить эти активы с помощью «Пометить как корень» в редакторе.

However, we now recommend to instead create a field in your script and fill it directly in the editor. All the samples have been updated to this new practice, so please check them out.
Однако теперь мы рекомендуем вместо этого создать поле в вашем скрипте и заполнить его прямо в редакторе.  Все образцы были обновлены в соответствии с этой новой практикой, поэтому, пожалуйста, ознакомьтесь с ними.

## Which assets are compiled?
## Какие ресурсы компилируются?

Assets that will be compiled and packaged in your project are:
Активы, которые будут скомпилированы и упакованы в вашем проекте:

- **Root assets (blue)**
– **Корневые активы (синие)**
  - **Automatic** for a few asset types (i.e. Game Settings, Shaders)
- **Автоматически** для некоторых типов ресурсов (например, настройки игры, шейдеры)
  - Explicit (using "**Mark as Root**" on the asset)
- Явный (используя «**Пометить как корень**» на активе)
- **Dependencies of root assets (green)**
- **Зависимости корневых активов (зеленый)**
  - Since Game Settings is collected, that means that Default Scene and all its dependencies will be compiled as well (includes Model, Script field members pointing to other assets, etc...)
- Поскольку настройки игры собираются, это означает, что сцена по умолчанию и все ее зависимости также будут скомпилированы (включая модель, элементы поля сценария, указывающие на другие активы, и т. д.).
  - Also, we encourage our users to switch your script from Content.Load (which require "Mark as Root") to a field member that you can set within the editor using drag and drop. That will create an implicit dependency that will force that asset to be compiled as well.
- Кроме того, мы рекомендуем нашим пользователям переключить ваш скрипт с Content.Load (для которого требуется «Пометить как корень») на элемент поля, который вы можете установить в редакторе с помощью перетаскивания.  Это создаст неявную зависимость, которая также заставит скомпилировать этот актив.
- **Everything else (white)** (objects not marked as root and not referenced directly or indirectly by a root) **won't be packaged**
- **Все остальное (белое)** (объекты, не помеченные как корневые и на которые прямо или косвенно не ссылается корень) **не будут упакованы**

![media/26968245.png](media/26968245.png) 
![медиа/26968245.png](медиа/26968245.png)

## "Mark as root"
## 

One important thing to understand is that "Mark as root" is not part of the asset, it is stored in the "current" package (the one that is in bold in the Solution Explorer).
Важно понимать, что «Пометить как root» не является частью актива, он хранится в «текущем» пакете (тот, который выделен жирным шрифтом в обозревателе решений).

It means that if "MyGame" is current package, if you check "Mark as Root" on Silver Material (part of SharedPackage), this information will be stored in MyGame.sdpkg as part of the reference to SharedPackage.
Это означает, что если «MyGame» является текущим пакетом, если вы установите флажок «Пометить как корневой» на материале Silver (часть SharedPackage), эта информация будет сохранена в MyGame.sdpkg как часть ссылки на SharedPackage.

As a result, you can use a shared package from multiple games even if you have different explicit roots.
В результате вы можете использовать общий пакет из нескольких игр, даже если у вас разные явные корни.
 
## See also
## Смотрите также

For additional information about asset management, see [Manage Assets](../../game-studio/manage-assets.md)
Для получения дополнительной информации об управлении активами см. [Управление активами](../../game-studio/manage-assets.md)
