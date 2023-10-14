# Stride diagnostics

Stride.Core.CompilerServices contains Roslyn code analyzers.

> [!IMPORTANT]
> These analyzers do not perform any kind of telemetry. The same analyzers get used by your IDE when you get a CSXXXX Diagnostic

They analyze the code for possible issues in your project with the Stride.Core design.
To avoid unexpected runtime/compile time/editor time behaviour these analyzers try to warn as soon as possible for issues that may occur.
Each of the following pages contain information about Diagnostic codes that can be reported by the Roslyn analyzers, which are built into Stride.Core.CompilerServices.

The Information covers:
    - When is the Diagnostics reported
    - An explanation why it is necessary to report the Diagnostic
    - Examples when such a Diagnostics occurs
    - Information about how to resolve the Diagnostic

If an error is reported it is possible to click in the IDE on the Diagnostic code.
This will open the corresponding Information page about the Diagnostic.

The Stride.Core.CompilerServices is linked to Stride.Core, the Diagnostic Analysis will only occur if your project references Stride.Core in the PackageReferences, this will automatically add the Stride.Core.CompilerServices to your project.

> [!WARNING]
> Note that diagnostic feature is experimental and may not work as expected. Warnings may contain solutions that don't work yet.

## References

- [Rule of Thumb Serialization](../manual/scripts/serialization.md#rule-of-thumb)
- [Serialisation](../manual/scripts/serialization.md)
