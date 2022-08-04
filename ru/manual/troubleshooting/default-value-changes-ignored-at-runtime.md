# Default value changes ignored at runtime
# Изменения значений по умолчанию игнорируются во время выполнения
  
When you add a script to your project as a component, Game Studio lists its public variables in the Property Grid. These are the values used at runtime.
Когда вы добавляете скрипт в свой проект в качестве компонента, Game Studio перечисляет его общедоступные переменные в сетке свойств.  Это значения, используемые во время выполнения.

However, if you then change the default value in the script, Game Studio doesn't update the component with the new value.
Однако если вы затем измените значение по умолчанию в сценарии, Game Studio не обновит компонент новым значением.

For example, imagine you have a script with the variable `SpeedFactor` with a default value of `5.0f`. You add the script to the project as a component. Now, in the script, you change the default value of the `SpeedFactor` variable to `6.0f`, save the script, and run the project. Game Studio doesn't update the component with the script changes, so the speed `SpeedFactor` value is still `5.0f`.
Например, представьте, что у вас есть скрипт с переменной `SpeedFactor` со значением по умолчанию `5.0f`.  Вы добавляете скрипт в проект как компонент.  Теперь в сценарии вы меняете значение по умолчанию для переменной «SpeedFactor» на «6.0f», сохраняете сценарий и запускаете проект.  Game Studio не обновляет компонент с изменениями сценария, поэтому значение SpeedFactor по-прежнему равно 5.0f.

## Fix
## Исправить

In your project, delete and re-add the script component.
В своем проекте удалите и снова добавьте компонент скрипта.

Alternatively, if you want Game Studio to update the values in the component properties after you change them in the script, you can do this with additional code. You need to add a new line of code for every property you want this to apply to.
В качестве альтернативы, если вы хотите, чтобы Game Studio обновляла значения в свойствах компонента после их изменения в сценарии, вы можете сделать это с помощью дополнительного кода.  Вам нужно добавить новую строку кода для каждого свойства, к которому вы хотите применить это.

1. Add `using System.ComponentModel` at the top of the script.
1. Добавьте `using System.ComponentModel` в начало скрипта.

2. Above the variable you want to update, add ``[DefaultValue()]``. For example, if the variable is `SpeedFactor`, use:
2. Над переменной, которую вы хотите обновить, добавьте ``[DefaultValue()]``.  Например, если переменная `SpeedFactor`, используйте:

```cs
```CS
[DefaultValue(6.0f)]
[Значение по умолчанию (6.0f)]
public float SpeedFactor { get; set; } = 6.0f;
общественный поплавок SpeedFactor { получить;  установлен;  } = 6,0f;
```
```

When you change the value, update both the `SpeedFactor` and the `DefaultValue` to the same value.
Когда вы меняете значение, обновите и SpeedFactor, и DefaultValue до одного и того же значения.

> [!Note]
> [!Примечание]
> This doesn't work in both directions. If you set a value other than the `DefaultValue` in the Property Grid, Game Studio saves the value in the asset and overrides the default value at runtime.
> Это не работает в обе стороны.  Если вы установите значение, отличное от «DefaultValue», в сетке свойств, Game Studio сохранит значение в активе и переопределит значение по умолчанию во время выполнения.
