<div class="doc-incomplete"/>
<div class=

# File system
# Файловая система

We recommend you use the static class @'Stride.Core.IO.VirtualFileSystem' to access files across platforms. It offers all basic operations such as reading, writing, copying, checking existence and deleting files.
Мы рекомендуем вам использовать статический класс @'Stride.Core.IO.VirtualFileSystem' для доступа к файлам на разных платформах.  Он предлагает все основные операции, такие как чтение, запись, копирование, проверка существования и удаление файлов.

> [!Note]
> [!Примечание]
> The path separator is / (Unix/Linux convention).    
> Разделитель пути — / (соглашение Unix/Linux).

## Code example
## Пример кода

```cs
```CS
// Open a file through VirtualFileSystem
// Открыть файл через VirtualFileSystem
var gamesave1 = VirtualFileSystem.OpenStream("/roaming/gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
var gamesave1 = VirtualFileSystem.OpenStream(
 
// Alternatively, directly access the same file through its file system provider (mount point)
// В качестве альтернативы, прямой доступ к тому же файлу через его поставщика файловой системы (точка монтирования)
var gamesave2 = VirtualFileSystem.ApplicationRoaming.OpenStream("gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
var gamesave2 = VirtualFileSystem.ApplicationRoaming.OpenStream(
```
```

## Default mount points
## Точки монтирования по умолчанию

| Mount point | Description  | Writable | Cloud | Notes  | PC   | Android  | iOS   | Windows Phone 8.1   
|  Точка монтирования |  Описание |  Доступно для записи |  Облако |  Примечания |  ПК |  Андроид |  iOS |  Windows Phone 8.1
| ----------- | -------------| -------- | ----- | -------| ---- | -------- | ------- | --
|  ----------- |  -------------|  -------- |  ----- |  -------|  ---- |  -------- |  ------- |  --
| data        | Application data, deployed by package    | ✗    | ✗     |           | Output directory/data    | APK itself  | Deployed package directory | InstalledLocation.Path
|  данные |  Данные приложения, развернутые пакетом |  ✗ |  ✗ |  |  Выходной каталог/данные |  АПК сам |  Каталог развернутых пакетов |  InstalledLocation.Path
| binary   | Application binaries, deployed by package | ✗  | ✗   | Usually the same as *app_data* (except on Android)  | Assembly directory | Assembly directory  | Assembly directory  | Assembly directory
|  двоичный |  Бинарные файлы приложений, развернутые пакетом |  ✗ |  ✗ |  Обычно совпадает с *app_data* (кроме Android) |  Каталог сборки |  Каталог сборки |  Каталог сборки |  Каталог сборки
| roaming   | User specific data (roaming) | ✓    |  ✓    | Backup   | Output directory/roaming, *%APPDATA%* | *$(Context.getFilesDir)/roaming* | Library/roaming  | Roaming 
|  роуминг |  Пользовательские данные (роуминг) |  ✓ |  ✓ |  Резервное копирование |  Выходной каталог/роуминг, *%APPDATA%* |  *$(Context.getFilesDir)/роуминг* |  Библиотека/роуминг |  Роуминг
| local  | User application data | ✓     |  ✓    | Backup   | Output directory/local | $(Context.getFilesDir)local    | Library/local  | Local 
|  местный |  Данные приложения пользователя |  ✓ |  ✓ |  Резервное копирование |  Выходной каталог/локальный |  $(Context.getFilesDir)локальный |  Библиотека/местная |  Местный
| cache   | Application cache   | ✓   | ✗    | DLC, etc. Might be deleted manually by user (restore, clear data, etc...)   | Output directory/cache, with do-not-back-up flags   | *$(Context.getFilesDir)/cache*   | Library/caches  | LocalCache  
|  кеш |  Кэш приложений |  ✓ |  ✗ |  DLC и т. д. Пользователь может удалить вручную (восстановить, очистить данные и т. д.) |  Выходной каталог/кэш с флагами запрета резервного копирования |  *$(Context.getFilesDir)/кеш* |  Библиотека/кеши |  Локальный кеш
| tmp    | Application temporary data    | ✓        | ✗     | Might be deleted without notice by OS   | Output directory/temp, *%TEMP%/%APPNAME%*   | *$(Context.getCacheDir)*  | tmp | Temporary
|  температура |  Временные данные приложения |  ✓ |  ✗ |  ОС может быть удалена без уведомления |  Выходной каталог/temp, *%TEMP%/%APPNAME%* |  *$(Context.getCacheDir)* |  температура |  Временный
