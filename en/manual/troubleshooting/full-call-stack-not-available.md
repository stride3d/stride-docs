# Full call stack not available

Depending on your Visual Studio settings, when an exception is thrown in Stride, Visual Studio might only show the call stack from the Stride runtime .DLL files or .NET framework assemblies, not user code.

To break as soon as an exception is thrown, add additional conditions to the Visual Studio **Exception Settings**.

1. In the Visual Studio toolbar, under the **Debug** menu, select **Windows > Exception Settings**. 

    ![Exception settings](media/exception-settings.png)

2. Expand **Common Language Runtime Exceptions** and select **All Common Language Runtime Exceptions not in this list**. You might need to select other conditions too.

    ![All common language runtime exceptions not in this list](media/all-common-language-runtime-exceptions.png)

>[!Tip]
>To restore the default list of exceptions, right-click and select **Restore Defaults**.

For more information about managing exceptions in Visual Studio, see [Manage exceptions with the debugger in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/debugger/managing-exceptions-with-the-debugger) in the Microsoft Visual Studio documentation.