# File system

[!INCLUDE [stride-studio-note](../../includes/under-construction-note.md)]

We recommend you use the static class @'Stride.Core.IO.VirtualFileSystem' to access files across platforms. It offers all basic operations such as reading, writing, copying, checking existence and deleting files.

> [!Note]
> The path separator is / (Unix/Linux convention).    

## Code example

```cs
// Open a file through VirtualFileSystem
var gamesave1 = VirtualFileSystem.OpenStream("/roaming/gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
 
// Alternatively, directly access the same file through its file system provider (mount point)
var gamesave2 = VirtualFileSystem.ApplicationRoaming.OpenStream("gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
```

## Default mount points

| Mount point | Description  | Writable | Cloud | Notes  | PC   | Android  | iOS   | Windows Phone 8.1   
| ----------- | -------------| -------- | ----- | -------| ---- | -------- | ------- | --
| data        | Application data, deployed by package    | ✗    | ✗     |           | Output directory/data    | APK itself  | Deployed package directory | InstalledLocation.Path
| binary   | Application binaries, deployed by package | ✗  | ✗   | Usually the same as *app_data* (except on Android)  | Assembly directory | Assembly directory  | Assembly directory  | Assembly directory
| roaming   | User specific data (roaming) | ✓    |  ✓    | Backup   | Output directory/roaming, *%APPDATA%* | *$(Context.getFilesDir)/roaming* | Library/roaming  | Roaming 
| local  | User application data | ✓     |  ✓    | Backup   | Output directory/local | $(Context.getFilesDir)local    | Library/local  | Local 
| cache   | Application cache   | ✓   | ✗    | DLC, etc. Might be deleted manually by user (restore, clear data, etc...)   | Output directory/cache, with do-not-back-up flags   | *$(Context.getFilesDir)/cache*   | Library/caches  | LocalCache  
| tmp    | Application temporary data    | ✓        | ✗     | Might be deleted without notice by OS   | Output directory/temp, *%TEMP%/%APPNAME%*   | *$(Context.getCacheDir)*  | tmp | Temporary