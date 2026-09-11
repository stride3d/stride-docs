All Stride templates can take additional parameters to change how they are created. Here's a list of the most commonly used ones:

| Parameter | Values | Description |
| :-- | :-- | :-- |
| `-n` | text | Name of the project. |
| `--platform` | `host` (the current os), `window`, `linux`, `macos`, `android`, `ios` | Platform(s) the project should target, separated by the `|` character. |
| `--HDR` | `true`, `false` | Determines if the project uses HDR (required graphics profile >= 10.0). |
| `--graphics-profile` | `9.0`, `10.0`, `11.0`, ... | The graphics profile to use. This can be changed later. |
| `--orientation` | `Default`, `LandscapeLeft`, `LandscapeRight`, `Portrait` | The game's orientation on mobile devices. This can be changed later. |

For a list of all available parameters in a template, use the `--help` flag.

Example command:

### [Powershell (Windows)](#tab/powershell)

```powershell
stride new game -n ProjectX --HDR true --platform windows`|linux
```

### [Bash (Linux)](#tab/bash)

```bash
stride new game -n ProjectX --HDR true --platform windows\|linux
```

---
