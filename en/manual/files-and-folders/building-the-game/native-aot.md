# Native AOT

C# and other languages from the .NET ecosystem are compiled into **Common Intermediate Language** (CIL), which can't be executed by a computer directly. Instead, it requires an additional piece of software called the **.NET Runtime**, which uses a **Just-In-Time** (JIT) compiler to translate it into native machine code.

This approach has it's benefits and drawbacks:

* 🟩 Your code can run on any platform supported by the **.NET Runtime**
* 🟩 Some high-level language features require it to work (e.g. reflections)
* 🟩 Compiled projects take up less disk space
* 🟥 Some platforms do not support it (mainly iOS and consoles)
* 🟥 Creates additional overhead, slightly decreasing performance
* 🟥 Requires a user to install additional software (unless the app is made to be [self contained](setup.md#self-contained))

An alternative to this is to use **Native Ahead-Of-Time** (AOT) compilation to skip the CIL entirely, creating a native application. Doing this can decrease startup time and improve overall performance, but comes at the cost of all previously listed standard JIT compiled .NET application benefits.

## Preparation

Before enabling Native AOT, you will have to make sure your project can support it.

1. Make sure that additional libraries your project is using support **Native AOT**.
2. Make sure your project doesn't use reflections.
3. Make sure your project doesn't use any other Native AOT incompatible features.

## Enable Native AOT in a project

1. Locate the `.csproj` file of the [platform package](../project-packages/index.md#platform-packages) you want to enable **Native AOT** for (e.g. `MyGame.Windows.csproj`).

2. Add the following line to the `PropertyGroup`:

    ```xml
    <PublishAot>true</PublishAot>
    ```

## Further reading

For more information about native AOT development with .NET, read the [Microsoft article](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/).
