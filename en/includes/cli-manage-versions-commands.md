| Command | Description |
| :-- | :-- |
| `stride sdk install` | Install the latest version of the engine or the resolved project's version located in the current directory. |
| `stride sdk install VERSION` | Install a specific version of the engine. Version patch number is optional. |
| `stride sdk available` | List available versions of the engine. |
| `stride sdk list` | List all installed versions. |
| `stride sdk update` | Update all installed versions of the engine to the latest patch. |
| `stride sdk update VERSION` | Update a specific installed version of the engine to the latest patch. Version patch number is optional. |
| `stride sdk uninstall VERSION` | Uninstall a specific version of the engine. |

> [!NOTE]
> For many commands, the patch version can be skipped (e.g. `4.3`).

> [!TIP]
> The CLI will ignore beta versions of the engine, unless you pass the `--prerelease` flag.
