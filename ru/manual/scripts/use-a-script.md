# Use a script
# Использовать скрипт

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

To use a script, add it to an entity as a component. You can do this in Game Studio or in code. Stride runs scripts when the entity they are attached to loads.
Чтобы использовать скрипт, добавьте его в сущность как компонент.  Вы можете сделать это в Game Studio или в коде.  Stride запускает скрипты, когда сущность, к которой они прикреплены, загружается.

You can add a single script to as many entities as you need. You can also add multiple scripts to single entities; in this case, Stride creates multiple instances of the script. This means the same script can have different values in its [public properties and fields](public-properties-and-fields.md).
Вы можете добавить один скрипт к любому количеству сущностей, которое вам нужно.  Вы также можете добавить несколько сценариев к одному объекту;  в этом случае Stride создает несколько экземпляров скрипта.  Это означает, что один и тот же скрипт может иметь разные значения в своих [публичных свойствах и полях](public-properties-and-fields.md).

## Add a script in Game Studio
## Добавляем скрипт в Game Studio

There are three ways to add scripts to entities in Game Studio: 
Есть три способа добавить скрипты в объекты в Game Studio:

* drag the script from the asset view to the **entity tree**
* перетащите скрипт из представления ресурсов в **дерево сущностей**
* drag the script from the asset view to the **entity properties**
* перетащите скрипт из представления активов в **свойства сущности**
* add the script in the **property grid**
* добавьте скрипт в **сетку свойств**

### Drag to the entity tree
### Перетащите в дерево сущностей

This method automatically creates a new entity that contains the script.
Этот метод автоматически создает новую сущность, содержащую скрипт.

1. In the **solution explorer** (in the bottom left by default), select the assembly that contains your script. Game Studio shows your script in the **asset view**.
1. В **обозревателе решений** (по умолчанию внизу слева) выберите сборку, содержащую ваш скрипт.  Game Studio показывает ваш сценарий в **представлении ресурсов**.

    ![Script in asset folder](../get-started/media/create-a-script-new-script-asset-view.png)
![Скрипт в папке ресурса](../get-started/media/create-a-script-new-script-asset-view.png)

2. Drag the script from the asset view to the **entity tree**.
2. Перетащите скрипт из представления ресурсов в **дерево объектов**.

Game Studio adds an entity to your scene, with the script as a component on the entity.
Game Studio добавляет объект в вашу сцену со сценарием в качестве компонента объекта.

![Entity tree](../troubleshooting/media/game-profiler-in-entity-tree.png)
![Дерево сущностей](../troubleshooting/media/game-profiler-in-entity-tree.png)

### Drag to the property grid
### Перетащите в сетку свойств

1. In the **entity tree** (on the left by default), or in the scene, select the entity you want to add the script to.
1. В **дереве сущностей** (по умолчанию слева) или в сцене выберите сущность, к которой вы хотите добавить скрипт.

2. In the **solution explorer** (in the bottom left by default), select the assembly that contains your script. Game Studio shows your script in the **asset view**.
2. В **обозревателе решений** (по умолчанию внизу слева) выберите сборку, содержащую ваш скрипт.  Game Studio показывает ваш сценарий в **представлении ресурсов**.

    ![Script in asset folder](../get-started/media/create-a-script-new-script-asset-view.png)
![Скрипт в папке ресурса](../get-started/media/create-a-script-new-script-asset-view.png)

3. Drag the script from the **asset view** to the **property grid**.
3. Перетащите скрипт из **представления активов** в **сетку свойств**.
   
   Game Studio adds the script to the entity.
Game Studio добавляет сценарий к объекту.

### Add the script in the property grid
### Добавьте скрипт в сетку свойств

1. In the **scene editor**, select the entity you want to add the script to.
1. В **редакторе сцен** выберите сущность, к которой вы хотите добавить сценарий.

    ![Select an entity](media/select-entity.png)
![Выберите объект](media/select-entity.png)

2. In the **property grid** (on the right by default), click **Add component** and select the script you want to add.
2. В **сетке свойств** (по умолчанию справа) нажмите **Добавить компонент** и выберите скрипт, который хотите добавить.

    ![Add script component](media/add-script-component.png)
![Добавить компонент скрипта](media/add-script-component.png)

    Game Studio adds the script to the entity.
Game Studio добавляет сценарий к объекту.

>[!Note]
>[!Примечание]
>You can customize where scripts appear in the dropdown using the `ComponentCategoryAttribute`:
>Вы можете настроить, где скрипты будут отображаться в раскрывающемся списке, используя `ComponentCategoryAttribute`:

>```cs
>```CS
>[ComponentCategory("My Startup Scripts")]
>[ComponentCategory(
>public class SampleStartupScript : StartupScript
> открытый класс SampleStartupScript : StartupScript
>{
>{
>    public override void Start()
> публичное переопределение void Start()
>    {
> {
>        // Do some stuff during initialization
> // Делаем что-то во время инициализации
>    }
> }
>}
>}
>```
>```

## Add a script from code
## Добавить скрипт из кода

The code below adds a script to an entity.
Приведенный ниже код добавляет скрипт к сущности.

```cs
```CS
// myEntity is an existing entity in the scene; myAsyncScript is the script you want to add to the entity
// myEntity — существующий объект в сцене;  myAsyncScript — это скрипт, который вы хотите добавить к объекту.
myEntity.Add(new myAsyncScript());
myEntity.Add(новый myAsyncScript());
``` 
```

## See also
## Смотрите также

* [Types of script](types-of-script.md)
* [Типы скриптов](types-of-script.md)
* [Create a script](create-a-script.md)
* [Создать скрипт](create-a-script.md)
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
