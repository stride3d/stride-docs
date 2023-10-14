# Sistema de Arquivos

[!INCLUDE [stride-studio-note](../../includes/under-construction-note.md)]

Recomendamos que você utilize a classe estática '@'Stride.Core.IO.VirtualFileSystem' para acessar arquivos em diferentes plataformas. Essa classe fornece todas as operações essenciais, como leitura, escrita, cópia, verificação de existência e exclusão de arquivos.

> [!Note]
> O separador de caminho é / (convenção Unix/Linux).

## Exemplo de código

```cs
// Abrir um arquivo através do VirtualFileSystem
var gamesave1 = VirtualFileSystem.OpenStream("/roaming/gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
 
// Ou, acessar o mesmo arquivo diretamente usando o provedor de sistema de arquivos associado (ponto de montagem)
var gamesave2 = VirtualFileSystem.ApplicationRoaming.OpenStream("gamesave001.dat", VirtualFileMode.Open, VirtualFileAccess.Read);
```

## Pontos de montagem padrão

| Ponto de Montagem | Descrição | Gravável | Nuvem | Notas | PC | Android | iOS | Windows Phone 8.1 |
|---|---|---|---|---|---|---|---|---|
| data | Dados da aplicação, instalados pelo pacote | ✗ | ✗ | Diretório de saída/dados | O próprio APK | Diretório de instalação do pacote | InstalledLocation.Path |
| binary | Binários da aplicação, instalados pelo pacote | ✗ | ✗ | Normalmente o mesmo que *app_data* (exceto no Android) | Diretório de assemblies | Diretório de assemblies | Diretório de assemblies | Diretório de assemblies |
| roaming | Dados específicos do usuário (roaming) | ✓ | ✓ | Backup | Diretório de saída/roaming, *%APPDATA%* | *$(Context.getFilesDir)/roaming* | Library/roaming | Roaming |   
| local | Dados da aplicação do usuário | ✓ | ✓ | Backup | Diretório de saída/local | $(Context.getFilesDir)/local | Library/local | Local |
| cache | Cache da aplicação | ✓ | ✗ | DLC, etc.  Pode ser excluído manualmente pelo usuário (restaurar, limpar dados, etc...)    | Diretório de saída/cache, com indicação para não ser feito backup | *$(Context.getFilesDir)/cache* | Library/caches | LocalCache |
| tmp | Dados temporários da aplicação | ✓ | ✗ | Pode ser excluído sem notificação pelo SO | Diretório de saída/temp, *%TEMP%/%APPNAME%* | *$(Context.getCacheDir)* | tmp | Temporary |