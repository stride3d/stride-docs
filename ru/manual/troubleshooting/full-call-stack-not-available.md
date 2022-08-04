# Full call stack not available
# Полный стек вызовов недоступен

Depending on your Visual Studio settings, when an exception is thrown in Stride, Visual Studio might only show the call stack from the Stride runtime .DLL files or .NET framework assemblies, not user code.
В зависимости от настроек Visual Studio при возникновении исключения в Stride Visual Studio может отображать стек вызовов только из файлов .DLL среды выполнения Stride или сборок платформы .NET, а не пользовательский код.

To break as soon as an exception is thrown, add additional conditions to the Visual Studio **Exception Settings**.
Чтобы прервать работу сразу после создания исключения, добавьте дополнительные условия в **Настройки исключений** Visual Studio.

1. In the Visual Studio toolbar, under the **Debug** menu, select **Windows > Exception Settings**. 
1. На панели инструментов Visual Studio в меню **Отладка** выберите **Windows > Настройки исключений**.

    ![Exception settings](media/exception-settings.png)
![Настройки исключений](media/exception-settings.png)

2. Expand **Common Language Runtime Exceptions** and select **All Common Language Runtime Exceptions not in this list**. You might need to select other conditions too.
2. Разверните **Исключения общеязыковой среды выполнения** и выберите **Все исключения общеязыковой среды выполнения, которых нет в этом списке**.  Возможно, вам потребуется выбрать и другие условия.

    ![All common language runtime exceptions not in this list](media/all-common-language-runtime-exceptions.png)
![Все исключения общеязыковой среды выполнения, которых нет в этом списке](media/all-common-language-runtime-exceptions.png)

>[!Tip]
>[!Подсказка]
>To restore the default list of exceptions, right-click and select **Restore Defaults**.
>Чтобы восстановить список исключений по умолчанию, щелкните правой кнопкой мыши и выберите **Восстановить значения по умолчанию**.

For more information about managing exceptions in Visual Studio, see [Manage exceptions with the debugger in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/debugger/managing-exceptions-with-the-debugger) in the Microsoft Visual Studio documentation.
Дополнительные сведения об управлении исключениями в Visual Studio см. в разделе [Управление исключениями с помощью отладчика в Visual Studio] (https://docs.microsoft.com/en-us/visualstudio/debugger/managing-exceptions-with-the-debugger).  в документации Microsoft Visual Studio.
