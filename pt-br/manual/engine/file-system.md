# Sistema de arquivos

[! INCLUÍDO [stride-studio-note](../../includes/under-construction-note.md)]

Recomendamos que você use a classe estática @'Stride. Core.IO.VirtualFileSystem' para acessar arquivos em plataformas. Ele oferece todas as operações básicas, como ler, escrever, copiar, verificar a existência e excluir arquivos.

> [!Note]
> O separador de caminho é / (Convenção Unix/Linux).

## Exemplo de código

```cs
// Abra um arquivo através do VirtualFileSystem
var gamesave1 = VirtualFileSystem.OpenStream("/roaming/gamesave001.dat", VirtualFileMode. Abrir, VirtualFileAccess.Read);
 
// Alternativamente, acesse diretamente o mesmo arquivo através de seu provedor de sistema de arquivos (ponto de montagem)
var gamesave2 = VirtualFileSystem.ApplicationRoaming.OpenStream("gamesave001.dat", VirtualFileMode. Abrir, VirtualFileAccess.Read);
```

## Pontos de montagem padrão

| Mount point | Descrição | Writable | Cloud | Notes | PC | Android | iOS | Windows Phone 8.1   
| ------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| data | Application data, deployed by package | | | | | diretório de saída/data | APK em si | Deployed package diretório | InstalledLocation. Caminho
| binário | Application binaries, implantado pelo pacote | | | | | Normalmente o mesmo que *app_data* (exceto no Android) | Assembly diretório | Assembly diretório | Assembly diretório | Assembly diretório
| roaming | User specific data (roaming) | ✓ ✓ | Backup | Output diretório/roaming, *%APPDATA%* | *$(Context.getFilesDir)/roaming* | Library/roaming | Roaming
| local | User application data | ✓ | ✓ | Backup | Diretório de saída/local | $(Context.getFilesDir)local | Library/local | Local
| cache | Application cache | ✓ | | | DLC, etc. Pode ser excluído manualmente pelo usuário (restaurar, dados claros, etc...)   | Diretório/cache de saída, com bandeiras não-back-up | *$(Context.getFilesDir)/cache* | Library/caches | LocalCache  
| tmp | Aplicação dados temporários | ✓ | | | Pode ser excluído sem aviso prévio por OS | Diretório de saída/temp, *%TEMP%/%APPNAME%* | *$(Context.getCacheDir)* | tmp | Temporary