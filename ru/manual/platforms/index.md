# Platforms
# Платформы

![Platforms](media/game-engine-system-requirements-intro-pic.png)
![Платформы](media/game-engine-system-requirements-intro-pic.png)

Stride is cross-platform game engine. This means you can create your game once, then compile and deploy it on all the platforms Stride supports. The engine converts C# and shaders to the different native languages, and abstracts the concepts that differ between platforms, so you don't have to adapt your code for each platform.
Stride — кроссплатформенный игровой движок.  Это означает, что вы можете создать свою игру один раз, а затем скомпилировать и развернуть ее на всех поддерживаемых Stride платформах.  Движок преобразует C# и шейдеры в разные нативные языки и абстрагирует концепции, которые различаются между платформами, поэтому вам не нужно адаптировать свой код для каждой платформы.

## Supported platforms
## Поддерживаемые платформы

* Windows Desktop 7, 8, 10
* Рабочий стол Windows 7, 8, 10
* Windows Universal (UWP)
* Универсальная Windows (UWP)
* [Linux (Ubuntu)](linux/index.md)
* [Линукс (Убунту)] (linux/index.md)
* Android 2.3 and later
* Android 2.3 и выше
* [iOS 8.0 and later](ios.md)
* [iOS 8.0 и более поздние версии](ios.md)

> [!TIP]
> [!СОВЕТ]
> To check which platform your project uses, add a break point to your code (eg in a script), run the project, and check the [Platform.Type](xref:Stride.Core.Platform.Type) variable.
> Чтобы проверить, какую платформу использует ваш проект, добавьте в код точку останова (например, в скрипт), запустите проект и проверьте переменную [Platform.Type](xref:Stride.Core.Platform.Type).

## Supported graphics platforms
## Поддерживаемые графические платформы

* Direct3D 9 (limited support), 10, 11, 12
* Direct3D 9 (ограниченная поддержка), 10, 11, 12
* OpenGL 3, 4
* OpenGL 3, 4
* OpenGL ES 2 (limited support), 3
* OpenGL ES 2 (ограниченная поддержка), 3
* Vulkan
* Вулкан

>[!Note]
>[!Примечание]
>Stride only supports MSAA (multisample anti-aliasing) for Direct3D 11 and later.
>Stride поддерживает только MSAA (множественное сглаживание) для Direct3D 11 и более поздних версий.
>Depending on your device's OpenGL shader compiler, Stride might not run with OpenGL ES2.
>В зависимости от компилятора шейдеров OpenGL вашего устройства Stride может не работать с OpenGL ES2.

>[!Warning]
>[!Предупреждение]
>Direct3D 9 doesn't support HDR textures. Using HDR textures with DirextX 9 will crash your game.
>Direct3D 9 не поддерживает текстуры HDR.  Использование HDR-текстур с DirextX 9 приведет к сбою игры.

## Set the graphics platform
## Установить графическую платформу

You set the graphics platform in the **Game settings** asset under **Rendering settings > Target graphics platform**.
Вы задаете графическую платформу в ресурсе **Настройки игры** в разделе **Настройки рендеринга > Целевая графическая платформа**.

![Select graphics platform](media/change-graphics-platform.png)
![Выберите графическую платформу](media/change-graphics-platform.png)

For more information, see [Set the graphics platform](set-the-graphics-platform.md).
Для получения дополнительной информации см. [Установка графической платформы](set-the-graphics-platform.md).

## Preprocessor variables
## Переменные препроцессора

Stride defines preprocessor variables if you want to write code that compiles only under a specific platform. For more information, see [Preprocessor variables](../scripts/preprocessor-variables.md).
Stride определяет переменные препроцессора, если вы хотите написать код, который компилируется только под определенной платформой.  Для получения дополнительной информации см. [Переменные препроцессора](../scripts/preprocessor-variables.md).

## In this section
## В этой секции

* [Linux](linux/index.md)
* [Линукс](linux/index.md)
* [UWP](uwp/index.md)
* [UWP](uwp/index.md)
    * [Xbox Live](uwp/xbox-live.md)
* [Xbox Live](uwp/xbox-live.md)
* [iOS](ios.md)
* [iOS](ios.md)
* [Add or remove a platform](add-or-remove-a-platform.md)
* [Добавить или удалить платформу](add-or-remove-a-platform.md)
* [Set the graphics platform](set-the-graphics-platform.md)
* [Установить графическую платформу](set-the-graphics-platform.md)
* [Game settings](../game-studio/game-settings.md)
* [Настройки игры](../game-studio/game-settings.md)
