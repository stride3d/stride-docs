# Scheduling and priorities
# Планирование и приоритеты

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

Stride doesn't run scripts simultaneously; they run one at a time. Where scripts depend on each other, you should make sure they run in the correct order by giving them priorities.
Stride не запускает сценарии одновременно;  они бегут по одному.  Там, где сценарии зависят друг от друга, вы должны убедиться, что они выполняются в правильном порядке, назначив им приоритеты.

Priorities apply to all kinds of scripts. This means that, for example, [synchronous and asynchronous scripts](types-of-script.md) don't have separate priority lists. They both join the same queue.
Приоритеты применяются ко всем видам скриптов.  Это означает, что, например, [синхронные и асинхронные скрипты](types-of-script.md) не имеют отдельных списков приоритетов.  Оба встают в одну очередь.

Scripts with lower priority numbers have higher priorities. For example, a script with priority 1 runs before a script with priority 2, and a script with priority -1 runs before a script with priority 1. By default, scripts have a priority of 0.
Скрипты с более низкими номерами приоритета имеют более высокие приоритеты.  Например, сценарий с приоритетом 1 запускается перед сценарием с приоритетом 2, а сценарий с приоритетом -1 запускается перед сценарием с приоритетом 1. По умолчанию сценарии имеют приоритет 0.

If scripts have the same priority, the order in which Stride runs them isn't deterministic. You might give scripts the same priority if you don't care which order they run in.
Если сценарии имеют одинаковый приоритет, порядок, в котором их запускает Stride, не является детерминированным.  Вы можете дать сценариям одинаковый приоритет, если вам все равно, в каком порядке они выполняются.

> [!Note]
> [!Примечание]
> Currently, there's no way to see a list of priorities in one place. You have to set each priority of each script individually in the script component properties.
> В настоящее время нет возможности просмотреть список приоритетов в одном месте.  Вы должны установить каждый приоритет каждого скрипта отдельно в свойствах компонента скрипта.

## Set a script priority
## Установить приоритет скрипта

Priorities aren't set in the scripts themselves. Instead, they're set in the script component properties on the entity the script is attached to.
Приоритеты не устанавливаются в самих скриптах.  Вместо этого они задаются в свойствах компонента скрипта объекта, к которому прикреплен скрипт.

1. Attach the script to an entity. For information about how to do this, see [Use a script](use-a-script.md).
1. Прикрепите скрипт к объекту.  Информацию о том, как это сделать, см. в разделе [Использовать скрипт](use-a-script.md).

2. With the entity selected, in the **Property Grid**, under the **script component properties**, set the **Priority** you want the script to have.
2. Выбрав объект, в **Сетке свойств** в разделе **Свойства компонента скрипта** установите **Приоритет**, который должен быть у скрипта.

    ![Set script priority](media/set-script-priority.png)
![Установить приоритет сценария](media/set-script-priority.png)

## See also
## Смотрите также

* [Types of script](types-of-script.md)
* [Типы скриптов](types-of-script.md)
* [Create a script](create-a-script.md)
* [Создать скрипт](create-a-script.md)
* [Use a script](use-a-script.md)
* [Использовать скрипт](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Общие свойства и поля](public-properties-and-fields.md)
* [Events](events.md)
* [События](events.md)
* [Debugging](debugging.md)
* [Отладка](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)
* [Переменные препроцессора](preprocessor-variables.md)
