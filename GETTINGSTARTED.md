Getting Started
===============
This addresses the following topics:
* [Contribution Terms](#Terms)
* [Contribution Workflow](#Workflow)
* [Edit and Build Locally](#Build)
* [Pages Organization](#Organization)
* [Doc Guidelines](#Guidelines)

# <a name="Terms"> Contribution Terms 

By submitting suggestions, corrections, or content to this repository you hereby agree to the following terms and conditions.

Any content submitted to these forums will be reviewed to check for accuracy, usability, 
and direction for the Stride project. Although all submissions will be considered fairly, 
Stride makes no guarantees to accept and or use any submitted content.

If submitted content is accepted for addition or usage in the documentation, the contributor 
will be asked to agree and electronically sign the [Contributor License Agreement](ContributorLicenseAgreement.md).
Among other things, it stipulates that the contributor keeps the ownership on its contribution but gives
a perpetual license to Stride to re-publish, edit and remove the content at its leisure. 

Note that content containing any offensive material or actions of spam submission or the like will be immediately rejected. 
Any users who make repeat or continuous actions of the above in either submissions or 
Git-hub forums will be banned from access to the either process.

After submitting please remain patient while your content is reviewed whereas the process may take some time. 
All submissions will be answered based on the Stride team priority. 

# <a name="Workflow"> Contribution Workflow 

To facilitate discussions and reviews of new content, please follow the following workflow when you contribute:

1. Start by creating an issue on GitHub describing the changes or the additions you plan to make  
2. Wait for the review and the green-light from the Stride team  
3. Assign the issue to you to show others contributors that you are currently dealing with the issue  
4. Create a branch containing (at least) the name of the issue  
5. Write your article and add media files in the adequate folders  
6. Make a pull request and wait for acceptance and integration of your changes  

Remarks: 
- For minor changes (typos, code update, etc.) you can directly create a pull request, no need to create an issue.
- Alternatively if you don't have specific changes in mind but just want to contribute, 
you can also start from an existing unassigned issue.
- If you stop dealing with an issue, mark it as unassigned to let the other contributors know that this issue is available.

To learn how to use GitHub and what is an issue, a branch and a pull request, 
have a look at the [GitHub Guides](https://guides.github.com/activities/hello-world/).

# <a name="Build"> Edit and Build Locally 

Stride currently uses DocFX to generate its documentation.  
All the documentation content is formatted using the MarkDown format.

To locally edit, build and test the documentation:

1. Checkout this repository on your PC  
2. Make your changes to the adequate MarkDown files  
3. If you added a new MarkDown file, reference it inside the _toc.md_ files to include it in the build  
4. Double-click on the _build.bat_ batch file to build the doc  
5. Double-click on the _run_local_website.bat_ batch file. It opens the local version of the doc in your browser  
6. Every time you want to see your latest changes, run again build.bat and refresh your browser by pressing F5  

Remarks: 
- If you want to locally test links to the API documentation, you need to checkout the 
[Stride Repository](https://github.com/stride3d/stride) next to the documentation 
(or adjust the '../stride' path in the _docfx.json_ file). Note that the build time is much more consequent
when building both Manual and API documentation (you can use _build_manual_only.bat_ script 
to build only the manual in that case).
- For more details about the MarkDown format, see [GitHub MarkDown Guide](https://guides.github.com/features/mastering-markdown/) or this [Tutorial](http://www.markdowntutorial.com/).
- For more details about _DocFX_, see [DocFX Getting Started Page](https://dotnet.github.io/docfx/tutorial/docfx_getting_started.html)

# <a name="Organization"> Pages Organization 

Articles should be organized in folders. Media and code files should be stored in folders named _media_ and _code_
and placed next to the article using them.

For more details about the files structure, read the [Guidelines](GUIDELINES.md).

# <a name="Guidelines"> Doc Guidelines 

In order to create an homogeneous documentation and provide the best experience to all Stride users, 
we would like you to follow the following [Guidelines](GUIDELINES.md) when you write your articles.

Thank you for you contribution!
