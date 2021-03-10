# ファイル システム
<!--
# File system
-->

<div class="doc-incomplete"/>

プラットフォームをまたいでファイルにアクセスするには、@'Stride.Core.IO.VirtualFileSystem' を使用することをお勧めします。この静的クラスは、ファイルの読み込み、書き込み、コピー、存在確認、削除などの基本的な操作をすべて提供します。
<!--
We recommend you use the static class @'Stride.Core.IO.VirtualFileSystem' to access files across platforms. It offers all basic operations such as reading, writing, copying, checking existence and deleting files.
-->

> [!Note]
> パスの区切り文字は `/` です（Unix/Linux の規約）。
<!--
>> [!Note]
> The path separator is / (Unix/Linux convention).    
-->

## コード例
<!--
## Code example
-->

```cs
// VirtualFileSystem でファイルを開く
var gamesave1 = VirtualFileSystem.OpenStream("/roaming/gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
 
// あるいは、ファイルシステムプロバイダ（マウントポイント）を介して、同じファイルに直接アクセスすることもできます。
var gamesave2 = VirtualFileSystem.ApplicationRoaming.OpenStream("gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
```
<!--
```cs
// Open a file through VirtualFileSystem
var gamesave1 = VirtualFileSystem.OpenStream("/roaming/gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
 
// Alternatively, directly access the same file through its file system provider (mount point)
var gamesave2 = VirtualFileSystem.ApplicationRoaming.OpenStream("gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
```
-->

## 既定のマウントポイント
<!--
## Default mount points
-->

| マウントポイント | 説明 | 書き込み | クラウド | 備考 | PC | Android | iOS  | Windows Phone 8.1   
| ----------- | -------------| -------- | ----- | -------| ---- | -------- | ------- | --
| data        | パッケージによってデプロイされたアプリケーションデータ | ✗    | ✗     |           | <出力ディレクトリ>/data    | APK 自身  | デプロイされたパッケージのディレクトリ | InstalledLocation.Path
| binary   | ッケージによってデプロイされたアプリケーションバイナリ | ✗  | ✗   | 通常は *app_data* と同じ（Androidを除く） | アセンブリディレクトリ | アセンブリディレクトリ | アセンブリディレクトリ | アセンブリディレクトリ
| roaming   | ユーザー固有のデータ（roaming）| ✓    |  ✓    | バックアップ  | 出力ディレクトリ/roaming, *%APPDATA%* | *$(Context.getFilesDir)/roaming* | Library/roaming  | Roaming 
| local  | ユーザーアプリケーションデータ | ✓     |  ✓    | バックアップ   | 出力ディレクトリ/local | $(Context.getFilesDir)local    | Library/local  | Local 
| cache   | アプリケーションキャッシュ  | ✓   | ✗    | DLC など。ユーザーが手動で削除する可能性があります（復元、データ消去など）。  | 出力ディレクトリ/cache, do-not-back-up フラグなし   | *$(Context.getFilesDir)/cache*   | Library/caches  | LocalCache  
| tmp    | アプリケーション一時データ    | ✓        | ✗     | OSが通知なしに削除する可能性があります。   | 出力ディレクトリ/temp, *%TEMP%/%APPNAME%*   | *$(Context.getCacheDir)*  | tmp | Temporary

<!--
| Mount point | Description  | Writable | Cloud | Notes  | PC   | Android  | iOS   | Windows Phone 8.1   
| ----------- | -------------| -------- | ----- | -------| ---- | -------- | ------- | --
| data        | Application data, deployed by package    | ✗    | ✗     |           | Output directory/data    | APK itself  | Deployed package directory | InstalledLocation.Path
| binary   | Application binaries, deployed by package | ✗  | ✗   | Usually the same as *app_data* (except on Android)  | Assembly directory | Assembly directory  | Assembly directory  | Assembly directory
| roaming   | User specific data (roaming) | ✓    |  ✓    | Backup   | Output directory/roaming, *%APPDATA%* | *$(Context.getFilesDir)/roaming* | Library/roaming  | Roaming 
| local  | User application data | ✓     |  ✓    | Backup   | Output directory/local | $(Context.getFilesDir)local    | Library/local  | Local 
| cache   | Application cache   | ✓   | ✗    | DLC, etc. Might be deleted manually by user (restore, clear data, etc...)   | Output directory/cache, with do-not-back-up flags   | *$(Context.getFilesDir)/cache*   | Library/caches  | LocalCache  
| tmp    | Application temporary data    | ✓        | ✗     | Might be deleted without notice by OS   | Output directory/temp, *%TEMP%/%APPNAME%*   | *$(Context.getCacheDir)*  | tmp | Temporary
-->
