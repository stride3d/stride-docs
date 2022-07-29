# New Language Workflow

As the [Contribution Workflow](https://github.com/stride3d/stride-docs/blob/master/GETTINGSTARTED.md#Workflow) suggests, you should create an [issue](https://github.com/stride3d/stride-docs/issues) first, where you can mention your intention and where we can keep a track of conversation on this subject. You can also ping us in our [Discord Documentation](https://discord.com/channels/500285081265635328/500295611581464576) channel once the issue was created.

Assuming that your request was approved, as an example, let's add a Spanish language. We will use code **es**.

1. Clone the repo ```git lfs clone https://github.com/stride3d/stride-docs.git```
   - Make sure LFS (Large File Storage) is used
1. Create your working branch from the main branch
   - If you make big updates, it is better to keep your updates in this new branch, so you can keep your main branch in the sync with the main repository
1. Copy **\en\manual** folder to **\es\manual**
1. Copy **\en\index.md** file to **\es\index.md**
1. Translate whatever you need in the **\es** folder
    - make sure you don't change file names
    - make sure that all folders and pages from the **\es\manual** folder which are not translated are deleted, this is very important, because the default **\en\manual** pages will be copied automatically through the ps1 script. This way when we update the **en** version, it will also automatically update all **\es\manual** pages which are not translated. The ps1 script then overwrites all **en** pages with translated **es** pages
1. Update **\build.bat** - add ```&& Call ./es-build.bat```
1. Update **\build_manual_only.bat** - add ```& Call ./es-build.bat```
1. Update **\web.config** - add ```|es```
1. Update **\build\web.config**  - add ```|es```
1. Update **\en\template\styles\main.js** - add ```|es```
1. Update **\en\template\partials\navbar.tmpl.partial** - add data-language es
1. Duplicate **\jp-build.ps1** to **\es-build.ps1**
    - Update content jp to es
    - Update ```'doc-no-translated'``` with ```'doc-no-translated doc-no-translated-es'```
        - Note: We keep also the original ```doc-no-translated``` because it is used in the docs generator logic
1. Update **\en\template\styles\main.css**
    - Duplicate class ```.doc-no-translated::after```, and place the new one **below**, rename it to ```.doc-no-translated-es::after```
    - Translate the text to es
1. Duplicate **\jp-build.bat** to **\es-build.bat**
    - Update content jp to es
1. Duplicate **\run_local_website_jp.bat** to **\run_local_website_es.bat**
    - Update content jp to es
1. Test the build with **build.bat** if you also have Stride repository, or just **build_manual_only.bat**, or **es-build.bat**
1. Run **run_local_website.bat**. It opens the local version of the doc in your browser
1. Test that you can switch the languages in the top menu
1. If all is working as expected, submit PR

## Current Language Contributors 

Please notify these contributors if any changes need to be made
- EN language: Anyone in our Discord Documentation channel
- RU language: @\~FallenParadise\~ in our Discord Documentation channel
- JP language:

## Troubleshooting

1. Program 'docfx.exe' failed to run: The specified executable is not a valid application for this OS platform
   - Check the file size. If the repository was cloned without **LFS**, the files in **\\deps\\docfx\\** might be just a reference. Clone again with LFS.
