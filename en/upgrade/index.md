# Upgrade guide

When you open a project made with an older version of Stride, Game Studio (or `stride upgrade`) upgrades it in steps. Each step has an ID, such as `Stride-4.5.0-P2`:

- `Stride` is the upgrader: Stride itself, or a plugin.
- `4.5.0` is the version where the change happened. The step runs for a project upgraded from an older version.
- The letter is the kind of step: `C` changes your C# code, `P` changes your project file and the files next to it.
- The number is the order of the step among the steps of that kind and version.

The log and `upgrade-report.md` link each step to its section below. A section says what the step does, and how to do it by hand when the step failed or didn't run.

## What happens when a step fails

- A step that can't change one file leaves that file as it was and changes the others. The upgrade goes on, and `upgrade-report.md`, next to the project file, lists the files to fix by hand.
- A step of the whole project (the project file, the package references, or the code as a whole) stops the upgrade of that project. Game Studio then asks what to do with its files:
  - **Revert** (the default) puts every file of the project back as it was before the upgrade. The project stays on its version, and its next upgrade runs every step again.
  - **Keep** leaves the files as the upgrade left them. The project records the steps that are left (`Unfinished` in its `StridePackageUpgradeRecord`), and no upgrade runs on it until you mark the upgrade as finished: Game Studio asks when you open the project, and `stride upgrade --mark-finished` does it from the command line.
- `stride upgrade` reverts by default. Pass `--keep-partial` to keep the files, and `--report <file>` to write what the upgrade did to a file.

Delete `upgrade-report.md` once you handled its items. Game Studio shows a banner while the file is there.

## Versions

- [Stride 4.5](4.5.md)
- [Stride 4.4](4.4.md)
- [Stride 4.3](4.3.md)
- [Stride 4.2](4.2.md)
- [Stride 4.1](4.1.md)
