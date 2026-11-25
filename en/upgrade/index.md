# Upgrade guide

When you open a project made with an older version of Stride, Game Studio (or `stride upgrade`) upgrades it in steps. Each step has an ID, such as `Stride-4.5.0-P2`:

- `Stride` is the upgrader: Stride itself, or a plugin.
- `4.5.0` is the version where the change happened. The step runs for a project upgraded from an older version.
- The letter is the kind of step: `C` changes your C# code, `P` changes your project file and the files next to it.
- The number is the order of the step among the steps of that kind and version.

The log and `upgrade-report.md` link each step to its section below. A section says what the step does, and how to do it by hand when the step failed or didn't run.

## What happens when a step fails

- A step that can't change one file leaves that file as it was and changes the others. The upgrade goes on, and `upgrade-report.md`, next to the project file, lists the files to fix by hand.
- A step of the whole project (the project file, the package references, or the code as a whole) stops the upgrade of the whole solution, so that its projects stay on one version. Game Studio then asks what to do with the files:
  - **Revert** (the default) puts back every file the upgrade changed, in every project. The projects stay on their version, and their next upgrade runs every step again. The report of the upgrade goes in the backup folder (`.stride-backup-<date>`, next to the solution), with the files it explains.
  - **Keep** leaves the files as the upgrade left them, and opens the solution. Each project that didn't finish records the steps that are left (`Unfinished` in its `StridePackageUpgradeRecord`), also a project that only stopped because a project it references failed.
- Without a backup, there is nothing to put back: the files are always kept.
- `stride upgrade` reverts by default. Pass `--keep-partial` to keep the files, and `--report <file>` to write what the upgrade did to a file.

![Game Studio asks to revert or keep the files of a failed upgrade](media/upgrade-failed.webp)

## Finish an unfinished upgrade

A project with an unfinished upgrade opens as it is. While the upgrade is unfinished, Game Studio shows a banner:

![The banner of an unfinished upgrade](media/upgrade-unfinished-banner.webp)

- **Open the report** opens the `upgrade-report.md` of each project, which lists the steps that are left.
- **Retry** runs the project steps that are left again. The upgrade is finished once none is left. Code steps don't run again, as they read the API of the old version: do them by hand, as `upgrade-report.md` lists them, then mark the upgrade as finished.
- **Mark as finished** records that you did the steps that are left by hand.

No new upgrade runs on a project until its last upgrade is finished. When a newer version of Stride has steps for it, Game Studio asks first, for the whole solution: **Retry**, **Mark as finished**, or **Not now**, which opens the project as it is, without the new upgrade.

![Game Studio asks about an unfinished upgrade before a new one](media/upgrade-unfinished-question.webp)

From the command line:

- `stride upgrade --retry` runs the steps that are left again, and upgrades the project once none is left.
- `stride upgrade --mark-finished` marks the upgrade as finished, and upgrades the project.

On the version the project already has, both only finish the upgrade.

## The upgrade report

Delete `upgrade-report.md` once you handled its items. Once the upgrade is finished, Game Studio shows a banner while a project has the file, with **Remove the report**.

![The banner of an upgrade report](media/upgrade-report-banner.webp)

## Versions

- [Stride 4.5](4.5.md)
- [Stride 4.4](4.4.md)
- [Stride 4.3](4.3.md)
- [Stride 4.2](4.2.md)
- [Stride 4.1](4.1.md)
