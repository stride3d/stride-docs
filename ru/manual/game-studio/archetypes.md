# Archetypes
# Архетипы

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

An **archetype** is a master asset that controls the properties of assets you **derive** from it. Derived assets are useful when you want to create a "remixed" version of an asset.
**Архетип** – это главный актив, который управляет свойствами активов, которые вы **извлекаете** из него.  Производные активы полезны, когда вы хотите создать «переработанную» версию актива.

For example, imagine we have three sphere entities that share a material asset named *Metal*. The Metal asset has properties including color, gloss, and so on.
Например, представьте, что у нас есть три сферических объекта, которые имеют общий материальный актив с именем *Металл*.  Актив Metal имеет свойства, включая цвет, блеск и т. д.

![Three metal spheres](media/archetypes-three-spheres-metal.png)
![Три металлические сферы](media/archetypes-three-spheres-metal.png)

If we change a property in the **Metal** asset, it applies to all three spheres. So, for example, if we change the color property, all three spheres change color.
Если мы изменим свойство в активе **Metal**, оно будет применено ко всем трем сферам.  Так, например, если мы изменим свойство цвета, все три сферы изменят цвет.

![Three gold spheres](media/archetypes-three-spheres-gold.png)
![Три золотые сферы](media/archetypes-three-spheres-gold.png)

Now imagine we want to change the color of only *one* sphere, but keep its other properties the same. We could duplicate the material asset, change its color, and then apply the new asset to only one sphere. But if we later want to change a different property across *all* the spheres, we have to modify both assets. This is time-consuming and leaves room for mistakes.
Теперь представьте, что мы хотим изменить цвет только *одной* сферы, но оставить другие ее свойства прежними.  Мы могли бы продублировать материальный актив, изменить его цвет, а затем применить новый актив только к одной сфере.  Но если позже мы захотим изменить другое свойство для *всех* сфер, нам придется изменить оба актива.  Это отнимает много времени и оставляет место для ошибок.

The better approach is to derive a new asset from the archetype. The derived asset inherits properties from the archetype and lets you override individual properties where you need them. For example, we can derive the sphere's material asset and override its color. Then, if we change the gloss of the archetype, the gloss of all three spheres changes.
Лучший подход — получить новый актив из архетипа.  Производный ресурс наследует свойства архетипа и позволяет вам переопределять отдельные свойства там, где они вам нужны.  Например, мы можем получить материальный актив сферы и переопределить ее цвет.  Затем, если мы изменим блеск архетипа, изменится блеск всех трех сфер.

![Create derived asset](media/archetypes-three-spheres.png)
![Создать производный актив](media/archetypes-three-spheres.png)

You can derive an asset from an archetype, then in turn derive another asset from that derived asset. This way you can create different layers of assets to keep your project organized:
Вы можете получить актив из архетипа, а затем, в свою очередь, получить другой актив из этого производного актива.  Таким образом, вы можете создавать различные слои ресурсов, чтобы ваш проект был организован:

```cs
```CS
Archetype
Архетип
    Derived asset
Производный актив
        Derived asset
Производный актив
```
```

## Derive an asset from an archetype
## Получить актив из архетипа

In the **Asset View**, right-click the asset you want to derive an asset from and select **Create derived asset**:
В **Представлении активов** щелкните правой кнопкой мыши актив, из которого вы хотите получить актив, и выберите **Создать производный актив**:

![Create derived asset](media/archetypes-create-derived-asset.png)
![Создать производный ресурс](media/archetypes-create-derived-asset.png)

Game Studio adds a new **derived asset** to the project. This asset derives its properties from the **archetype** asset.
Game Studio добавляет в проект новый **производный ресурс**.  Этот актив получает свои свойства от актива **archetype**.

The derived asset properties display the archetype asset under **Archetype**:
Свойства производного актива отображают актив-архетип в разделе **Архетип**:

![Derived asset in Property Grid](media/archetypes-archetype-in-property-grid.png)
![Производный ресурс в сетке свойств](media/archetypes-archetype-in-property-grid.png)

You can right-click the archetype asset in the Property Grid and select **Select the referenced asset** to quickly select the archetype asset:
Вы можете щелкнуть правой кнопкой мыши ресурс-архетип в сетке свойств и выбрать **Выбрать ресурс, на который указывает ссылка**, чтобы быстро выбрать ресурс-архетип:

![Select referenced asset](media/archetypes-select-the-referenced-asset.png)
![Выбрать указанный ресурс](media/archetypes-select-the-referenced-asset.png)

### Overridden properties
### Переопределенные свойства

The **Property Grid** shows which properties of the derived asset differ from the archetype. **Overridden** and **unique** properties are **white**, and **inherited** (identical) properties are **gray**.
**Сетка свойств** показывает, какие свойства производного актива отличаются от архетипа.  **Переопределенные** и **уникальные** свойства отмечены **белым**, а **унаследованные** (идентичные) свойства — **серым**.

In this screenshot, the **Diffuse Map** property is overridden. The other properties are inherited:
На этом снимке экрана свойство **Diffuse Map** переопределено.  Остальные свойства наследуются:

![Overridden properties are white](media/archetypes-overriden-properties-appear-white.png)
![Переопределенные свойства имеют белый цвет](media/archetypes-overriden-properties-appear-white.png)

### Reset a property to archetype value
### Сброс свойства до значения архетипа

You can reset overridden or unique properties of a derived asset to the values in the archetype. To do this, right-click the overridden property and select **Reset to base value**.
Вы можете сбросить переопределенные или уникальные свойства производного актива к значениям в архетипе.  Для этого щелкните правой кнопкой мыши переопределенное свойство и выберите **Восстановить базовое значение**.

![Reset to base value](media/archetypes-reset-property-to-base-value.png)
![Сбросить до базового значения](media/archetypes-reset-property-to-base-value.png)

### Clear an archetype
### Очистить архетип

You can remove the link between the archetype and the derived asset. This means the derived asset no longer inherits changes to the archetype; it becomes a completely independent.
Вы можете удалить связь между архетипом и производным активом.  Это означает, что производный актив больше не наследует изменения архетипа;  он становится полностью независимым.

To do this, in the **Asset View**, right-click the derived asset and select **Clear archetype**.
Для этого в **Просмотре активов** щелкните правой кнопкой мыши производный актив и выберите **Очистить архетип**.

![Clear archetype](media/archetypes-clear-archetypes.png)
![Очистить архетип](media/archetypes-clear-archetypes.png)

## See also
## Смотрите также

* [Assets](../game-studio/assets.md)
* [Активы](../game-studio/assets.md)
* [Prefabs](prefabs/index.md)
* [Префабы](prefabs/index.md)
