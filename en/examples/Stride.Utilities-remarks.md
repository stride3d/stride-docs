---
uid: Stride.Utilities.Test
remarks: *content
---

Use the FileStream class to read from, write to, open, and close files on a file system, and to manipulate other file-related operating system handles, including pipes, standard input, and standard output. You can use the Read, Write, CopyTo, and Flush methods to perform synchronous operations, or the ReadAsync, WriteAsync, CopyToAsync, and FlushAsync methods to perform asynchronous operations. Use the asynchronous methods to perform resource-intensive file operations without blocking the main thread. This performance consideration is particularly important in a Windows 8.x Store app or desktop app where a time-consuming stream operation can block the UI thread and make your app appear as if it is not working. FileStream buffers input and output for better performance.

> [!NOTE]
> This type implements the IDisposable interface. When you have finished using the type, you should dispose of it either directly or indirectly. To dispose of the type directly, call its Dispose method in a `try/catch block`. To dispose of it indirectly, use a language construct such as `using` (in C#) or Using (in Visual Basic). For more information, see the "Using an Object that Implements IDisposable" section in the IDisposable interface topic.

The IsAsync property detects whether the file handle was opened asynchronously. You specify this value when you create an instance of the FileStream class using a constructor that has an isAsync, useAsync, or options parameter. When the property is true, the stream utilizes overlapped I/O to perform file operations asynchronously. However, the IsAsync property does not have to be true to call the ReadAsync, WriteAsync, or CopyToAsync method. When the IsAsync property is false and you call the asynchronous read and write operations, the UI thread is still not blocked, but the actual I/O operation is performed synchronously.

The Seek method supports random access to files. Seek allows the read/write position to be moved to any position within the file. This is done with byte offset reference point parameters. The byte offset is relative to the seek reference point, which can be the beginning, the current position, or the end of the underlying file, as represented by the three members of the SeekOrigin enumeration.

> [!CAUTION]
> Disk files always support random access. At the time of construction, the CanSeek property value is set to true or false depending on the underlying file type. If the underlying file type is FILE_TYPE_DISK, as defined in winbase.h, the CanSeek property value is true. Otherwise, the CanSeek property value is false.