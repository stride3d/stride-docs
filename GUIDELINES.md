---
breaks: false
---

# Guidelines

Stride users will be reading your articles to learn about the engine in their every day work. 
Your goal is to write pages that are easy to understand and accessible to all. 
To help you in your quest and to have an unified documentation easy to use,
we ask you to follow to the below Guidelines when writing.

* [Writing Style](#Style)
  * [Conversation Tone](#Tone)
  * [Second Person](#Person)
  * [Active Voice](#ActiveVoice)
  * [Simple Vocabulary](#SimpleVocabulary)
* [Pages Content](#PagesContent)
  * [Getting Started Pages](#GettingStarted)
  * [Tutorials Pages](#Tutorials)
  * [Section Header Pages](#SectionHeader)
  * [Reference Pages](#Reference)
  * [HOWTO Pages](#Howtos)
  * [Avoid Long Explanations](#LongExplanations)
  * [Avoid Long Articles](#LongArticles)
  * [Use Images & Videos](#UseImagesVideos)
* [Pages & Files Structure](#FilesStructure)
  * [Pages Hierarchy](#PagesHierarchy) 
  * [Pages Order](#PagesOrder)
  * [Files Hierarchy](#FilesHierarchy)
  * [Files Name](#FilesName)
* [Formatting](#Formatting)
  * [Text Styling](#Styling)
  * [Definitions](#Definitions)
    * [Stride Terms](#StrideTerms)
    * [Video Game Terms](#VideoGameTerms)
    * [Job Specific Terms](#JobTerms)
  * [Page References](#References)
  * [Related Topics](#RelatedTopics)
  * [API References](#APIReferences)
  * [Code References](#CodeReference)
  * [Placeholders](#Placeholders)
  * [Labels](#Labels)
  * [Remarks](#Remarks)
  * [Platform Specific Remarks](#PlatformRemarks)
  * [Notices](#Notices)
  * [Media](#Media)
    * [Videos](#Videos)
    * [Images](#Images)
    * [Diagrams](#Diagrams)
  * [Tables](#Tables)
  * [Lists](#Lists)
  * [Headers](#Headers)
  * [Letter Capitalization](#Capitalization)
  
Note: The following directions are just guidelines not rules. 
If they are not appropriate to your specific use-case, feel free to ignore them.

# <a name="Style"> Writing Style </a>

## <a name="Tone"> Conversation Tone </a>

> **Appropriate**
> 
> We want our documentation to have a conversational tone. You should feel as though you
> are having a conversation with the author as you read any of our tutorials or explanations.
> Your experience as a reader should be informal, conversational, and informative. You should
> feel as though you are listening to the author explain the concepts to you.
> 
> **Inappropriate Style**
>
> One might see the contrast between a conversational style and the style one finds with
> more academic treatments of technical topics. Those resources are very useful, but the authors
> have written those articles in a very different style than our documentation. When one reads
> an academic journal, one finds a very different tone and a very different style of writing.
> One feels that they are reading a dry account of a very dry topic.  

The first paragraph above follows our recommendation conversational style. The second
is a more academic style. You see the difference immediately. 

One the other hand, you should be careful not to become too much colloquial too.
Expressions like "You gonna see", "We'll see", "We've" are to avoid.

##  <a name="Person"> Second Person </a>

> **Appropriate**
> 
> You should write your articles as though you are speaking directly to the reader. 
> You should use second person often (as I just have in these two sentences). 
> 2nd person doesn't always mean using the word 'you'. Write directly to the reader. 
> Write imperative sentences. Tell your reader what you want them to learn.
> 
> **Inappropriate**
> 
> An author could also choose to write in 3rd person. In that model, an author must find 
> some pronoun or noun to use when referring to the reader. A reader might often find 
> this 3rd person style less engaging and less enjoyable to read.

The first paragraph follows our recommended style. The second uses 3rd person. 
Please write in second person. You probably found that much easier to read.

##  <a name="ActiveVoice"> Active Voice </a>

Write your articles in active voice. Active voice means that the subject of 
the sentence performs the action (verb) of that sentence. It contrasts with passive voice, 
where the sentence is arranged such that the subject of the sentence is acted upon. 
Contrast these two examples:

> **Appropriate**
> 
> The compiler transformed source code into an executable.

> **Inappropriate**
> 
> The source code was transformed into an executable by the compiler.

The first sentence uses active voice. The second sentence was written in passive voice. 
(Those two sentences provide another example of each style).

We recommend active voice because it is more readable. Passive voice can be more difficult to read.

##  <a name="SimpleVocabulary"> Simple Vocabulary </a>

Keep in mind that Stride users are not all native English speaker when you write your articles.
Your audience is international and they probably don't have the vocabulary you have.

As a general rule try to *target a 5th grade reading level" when you write.

#  <a name="PagesContent"> Pages Content </a>

Stride documentation is composed of different types of pages. The expected content and layout
of the page directly depends on the type. Before writing your article, start by identifying the 
type of page you are targeting, then follow the below templates for content and layout.

In addition to content and layout guidelines based on the type of page, we finish this section 
with a few generic recommendations for the content.

##  <a name="GettingStarted"> Getting Started Pages </a>

Getting Started articles aim at guiding new Stride users in their first steps. Pages should cover only basic 
and essential topics and don't need to explain concepts in depth. Only one subject should be covered per page.

Pages targeting any kind of audience should be inserted directly under the Getting Started root page.
Pages targeting a specific audience should be inserted under a page specifying the audience. Getting
Started pages order should follow the progress of a Stride new user.

A Getting Started page consists of the following content:

1. The page title (the subject dealt in the page).
2. A short introduction explaining why the topic matters and the purposes of the feature or tool.
3. A short paragraph explaining what the reader will concretely learn to do in the page.
4. An image or a video illustrating what the user will learn (if possible).
5. The sub-titles and the content of the page.

Example:
```
# Design Scenes with Stride.

Scenes are an essential element of your game. They allow you to divide the content of your game into levels and modules.
In this article you will learn how to create and populate scenes from the editor in Stride.

[Scene Image](media/scene.png)

## Drag and drop elements in your scene

...
```

##  <a name="Tutorials"> Tutorial Pages </a>

The purpose of tutorials is to accompany users through the creation of a game component. Each tutorial 
starts from a initial state (most of the time an empty game) and ends to a final state (mini game or 
game component completed). A page should be created for each main step of the final realization.
Pages should be ordered chronologically and next pages should start exactly were previous pages stop.
A folder should be created for each tutorial. 

A tutorial header page consists of the following content:

1. The page title (name of the tutorial).
2. A description of what will be realized and what can be learned from the tutorial. 
3. The knowledge needed to be able to complete the tutorial (if any). 
4. One or several images of the final realization (if possible). 
5. A table of content with the links to the tutorial sub-pages (ordered list).

Example
```
# My 2D game tutorial

In this tutorial you will create a simple 2D game from scratch. You will learn how to create a scene,
perform collisions between elements and add a UI to your game.
This tutorial assumes that you know how to create a new project and import assets in Stride.

[My 2D Game Image](media/my2dGame.png)

1. [Import assets](ImportAsset.md)
2. [Create your level](CreateLevel.md)
3. [Add Collisions](AddCollisions.md)
4. [Add a UI](AddUI.md)
```

A tutorial page consists of the following content:

1. The page title (realization of the page) 
2. Links to previous and next tutorial pages
3. A description of what will be realized in the current page and what will be learned. 
4. One or several pictures illustrating the realization of the page (if possible).
5. The sub-steps and the content of the page.
6. A sentence introducing the next page of the tutorial including a link.

Example
```
# Add UI to the game

Previous [Use Physics Collisions](UsePhysicsCollision.md) | Next [Deploy your game](DeployYourGame.md)

In this page you will add a simple UI to your game. You will learn how to create a UI using Stride default 
design and make it interact with the gameplay.

[My Game UI Image](media/MyGameUI.png)

1. [Add a UI component](# Add a UI component)
2. [Set the UI](# Set the UI)
3. [Make UI interact with your game](# Make UI interact with your game)

## Add a UI component 

...

In the next section we will see how you can [Deploy your game](DeployYourGame.md).

```

Note: as much as possible each instruction should be surrounded by two images showing the state 
before and after the instruction. Image before the first instruction should correspond to the initial
state and last image should correspond to the final state.

##  <a name="SectionHeader"> Section Header Pages </a>

Section headers are the top pages of the folders of the documentation. The goal of header pages is 
to introduce the section topic, to expose the best features of the engine and to provide an overview of the section.

A header page consists of:

1. The name of the section as title
2. An image illustrating the section (for sub-folder this image can be skipped)
3. A short introduction sentence explaining what is the section about.
4. A paragraph exposing the main and best features of the engine on the topic.
5. A short paragraph explaining what can be learned by reading this section. 
6. An overview of the section giving a full insight of the topic (objectives, challenges, base concepts).

Note: for sub-folder headers only an overview or links to main subjects can be enough for a section header page.

Example
```
# Physics

![Physic Section Image](media/PhysicSection.png)

Physics allows you to make physics simulations in your game.

Stride has a physic system fully integrated in its game studio. Its dedicated physic editor allows you to
directly edit physic shapes of objects or to automatically generate them from the models. 

In this section you will learn how to simulate collisions between objects, add trigger regions, apply 
physic law on objects, etc.

## Overview

The goal of the physic engine is to provide ways to produce and automate actions on your game elements
so that they seems to follow physic laws. Accurate physic simulations being very costly all physic behaviors
have to be approximated. 

# Physic Shapes

![Physic Shapes Image](media/PhysicShapes.png)
...

# Physic Object Types
...
```

##  <a name="Reference"> Reference Pages </a>

Reference pages explain in depth a specific concept, feature, or element.

A reference page consists of:

1. The page title (name of the concept)
2. The definition and explanation of the concept.
3. The standard usages of the concept and a explanation why the topic matters.
4. An image illustrating the concept (if possible)
6. The sub-topics with the content (functionalities, usages samples, etc)

Example
```
# Materials

A material is a set of rules defining how to render an element.

You can use materials with model, particles system and sprites to define the color, lighting and shadowing
of your element.

![Material Image](media/Material.png)

1. Object Geometry

...

2. Object Shading
...

```


##  <a name="Howtos"> HOWTO Pages </a>

The goal of the HOWTO pages is to provide a list of clear instructions to realize a specific thing. 
Each HOWTO page should be independent from other HOWTO pages and guide the reader towards 
a single target. It should not define nor explain any concept.

A HOWTO page consists of:

1. The page title (phrase starting with a verb describing the target)
2. The knowledge needed to understand the instructions.
3. The goal of the page and what the user will learn to doc-audience
4. An image of the final realization (if possible)
5. The main steps and their explanations and sub-instructions (add the step number in the sub-title)

Example
```
# Add particles inside our UI

Prerequisites: This page assumes that you know how to use particles and UI elements in general.

In this page you will learn how to attach particles to an UI element.

![Particles In UI Image](media/ParticlesInUI.png)

## 1. Create your particle Effect.
...

## 2. Create your UI
...

## 3. Add a UI link component
...

```

Note: as much as possible each instruction should be surrounded by two images showing the state 
before and after the instruction. Image before the first instruction should correspond to the initial
state and last image should correspond to the final state.

##  <a name="LongExplanations"> Avoid Long Explanations </a>

Long explanation are quite indigestible for the reader. Most of the time, he simply skips them.
If not, he is not able to remember the essential point of the explanation. 

To avoid this, try to never explain more than one concept in a simple paragraph.
Try to keep your explanation short and simple and when possible add an image or a diagram 
that corresponds to the concept next to your text.

This guideline is even more important for Getting Started, Tutorials and HOWTO pages,
where the text should correspond more to instructions than explanations about Stride concepts.
In those pages, you should either try to explain the concept in a simple lline or replace the
explanation by a reference to the page dedicated to the concept.

##  <a name="LongArticles"> Avoid Long Articles </a>

Try to avoid writing articles longer than 8 to 10 screen heights. Long articles discourage users 
to start reading and make the navigation harder. If the content of your article cannot fit in
the above number of screen, split your article into several articles.

##  <a name="UseImagesVideos"> Use Images & Videos </a>

As much as possible add images or videos to accompany your explanation. This helps the reader a lot.

Also whenever it makes sense, we recommend you to use small videos instead of images. 
We believe that the time where we had to use diagrams with lots of arrows going in all directions
because videos were too heavy is over. Nowadays Internet connections and compression algorithms 
are good enough to include short videos in the documentation and increase even more the ease of
understanding.

### How to encode videos

To make sure videos play well in different browsers and on different devices, stick to a format with low requirements, such as H264 baseline profile (which works almost everywhere).

To convert a video to this format, process the file using [fmpeg](https://ffmpeg.org/download.html).

1. Download the Ffmpeg package for your operating system.

2. Run the ff-prompt.bat file.

3. In the ff-prompt.bat command line, browse to the folder with the video you want to convert.

4. Run the following command, replacing ``myvideo_original.mp4`` with the filename of the video you want to convert, and ``myvideo.mp4`` with the filename of the output file you want to create:

```
ffmpeg -i myvideo_original.mp4 -profile:v baseline -level 3.0 -an myvideo.mp4
```

After you do this, generate a static thumbnail so that mobile users can preview the video before downloading. To do this, run:

```
ffmpeg -i myvideo.mp4 -vframes 1 -f image2 -y myvideo.jpg
```

### Embed videos

Put this syntax in the .md file, replacing the directories and filenames with the files you want to use:


```
<p>
    <video autoplay loop class="responsive-video" poster="folder/myvideo.jpg">
       <source src="folder/myvideo.mp4" type="video/mp4">
    </video>
</p>
```

# <a name="FilesStructure"> Pages & Files Structure </a>

The hierarchy of the documentation pages is specified in the [manual/toc.md](manual/toc.md) file
and is independent from the file hierarchy of this repository. For example, a single article can
be added several times at different location in the documentation if needed. Nevertheless for ease
we ask you to try to keep the same hierarchy between the documentation pages and this
repository files.

To add a new page in the documentation, just add a new entry at the appropriate place in the 
[toc](manual/toc.md) file.

## <a name="PagesHierarchy"> Pages Hierarchy </a>

As a general rule, we want to avoid deep hierarchies for the ease of navigation. 
As much as possible we recommend you not to go beyond 4 levels of depth.

> Getting Started
>   - Common Topic
>   - Targeted Audience
>      - Topic
> Tutorials
>   - My 2D game
>   - My 3D game
> Engine
>   - Topic
>   - Sub-Category
>     - Sub-Topic
>   - HOWTO
>     - Do something

Page naming conventions:
* The name of the pages under the HOWTO folder should start with a verb and describe an objective ('Activate post-effects to your game', etc)

## <a name="PagesOrder"> Pages Order </a>

Documentation pages don't necessary need to be alphabetically ordered.

As a general rule, order your new pages as follow:

1. Chronologically when there is a chronological order (Getting started / tutorial pages)
2. Most important subjects first (Overview pages -> References pages -> HOWTOs) 
3. When pages have the same importance, order them alphabetically.

## <a name="FilesHierarchy"> Files Hierarchy </a>

Article files should be organized into folders. As much as possible we will try to respect the
same hierarchy as the documentation. Files corresponding to section header should be included at the 
top of the folder having the same name and be named 'index.md'. Folder and file names should be
composed of only **lower case letters, words should be separated by dashes**.

Media files (images and videos) referenced in articles should be placed in a dedicated folder
named 'media' and put next to the referencing articles.

Code sample files (C#, scripts, etc) referenced in articles should be placed in a dedicated 
folder named 'code' and put next to the referencing articles.

Hierarchy example:

> graphic
>   - index.md
>   - overview.md
>   - media
>     - overview-image1.png
>     - overview-image2.png
>     - overview-video2.mp4
>   - post-effects
>     - index.md
>     - media
>       - post-effect-image1.png
>     - code
>       - post-effect-code.cs

## <a name="FilesName"> Files Name </a>

File names should consist only of **lower case letters** and **dashes to separate the words**.
Also as much as possible, you should give explicit and human-understandable names to files and 
start the page name by either an active verb or a noun (avoid -ing form verbs).

Our recommendations are the following:
- Section Header files should always be named 'index.md'
- Article files should be named using the main title of the page (without spaces)
- Media files should have a simple name corresponding to the content of the file

Examples:
> **Appropriate**  
> index.md  
> point-light.md  
> point-light-diagram.png  
>
> **Inappropriate**  
> graphics-index.md  
> PointLightFile1.md  
> Img20150902.png  

#  <a name="Formatting"> Formatting </a>

##  <a name="Styling"> Text Styling </a>

In order to simplify the reading of the documentation, it is important that you properly use bold and italic styles.

Put every important word or step in bold using the **Text in bold** syntax.

Put every UI element or Window names in italic using the *Text in italic* syntax.

##  <a name="Definitions"> Definitions </a>

When you write your articles, you should be careful of properly defining all the terms that can be
unknown by the user. We can basically distinguish the following three types of terms.

###  <a name="StrideTerms"> Stride Terms </a>

These terms are specific to Stride and absolutely need to be defined. These are terms like Asset,
Live Scripting, Graphic Compositor, etc. You don't necessary need to create a dedicated page for each term. 
You can define the term in the middle of a parent page if the concept is simple to explain. 
Add the following tagg TODO virgile when we are done in editor doc. 
Then link it at least every first occurrence of the word in an article. 
In addition add a shorter version of the definition as metadata in the page.
This will be used later to create definition tooltips.

Example

```
TODO @virgile: update this
```

###  <a name="VideoGameTerms"> Video Game Terms </a>

These terms are specific to the game and graphic industry. 
They should be briefly defined in one sentence in the Stride documentation.
If the topic is important for Stride (e.g.: Forward rendering, etc.) we will elaborate more on the matter.
If not a link to an external site (wikipedia, etc) can also be used.
The brief definition will be used to build tooltip in the documentation and Game Studio. 
Only the first occurrence of the page should be linked.

Example
```
TODO @virgile

In Stride you can choose between @forward-rendering and @deffered-rendering. (<-link to a dedicated pages).

Depending on the rendering model the [Shaders](http://wikipedia/shaders) are completely different. 
(<- external reference)

The more complex shaders are blablabla (<- second reference no link)
```

Note: If the expected audience for the page is 'Intermediate' or 'Advanced' basic term definitions can 
be skipped. 

###  <a name="JobTerms"> Job Specific Terms </a>

These terms are specific to a role in the development process. They need to be defined only the when 
the expected audience for the page is wider than just the specific job or when the term is used in the Stride API. Most of the time we will 
define them by using a link to an external page and adding a tooltip definition. Only the first occurrence
of the page has to be defined.

##  <a name="References"> Page References </a>

We recommend you to add cross reference to other documentation pages as much as possible to ease
to reader navigation. 

To add a cross reference proceed as follow:

1. Add a uid at the top of the destination file
2. Everytimes you want to link the page just reference it using the @uid shortcut.

Example
```
material.md:
---
uid: material
---

# Material
...

sprite.md:
For more information about sprite color, read @material.
```

Note: for more information please refer to DocFX documentation.

## <a name="RelatedTopics"> Related Topics </a>

To encourage readers to learn more about a topic and also to ease their navigation,
we recommend you as much as possible to add links to related topics at the bottom of your articles.

For this use the doc-relatedtopics style, as follow: 
```
<div class="doc-relatedtopics">
* [Page1](link-to-page1)
* [Page2](link-to-page2)
* [Page3](link-to-page3)
</div>
```

## <a name="APIReferences"> API References </a>

A link to the API reference should be added for EACH mention of an API class, interface, function, etc.
To avoid to add too many times the same links, you can replace the function name by an action verb.

Adding a link to a reference API can be done the following way:
> @'MyNamespace.MyClass.MyFunction'

Example:
```
Use the @'Stride.Audio.SoundEffectInstance.Play' function start playing a sound.
Playing an ongoing sound has no effect. Playing a stopped sound restart the sound from beginning.
```

## <a name="CodeReference"> Code References </a>

Code samples should be as small as possible, well commented and be properly formatted when included. 
There are two different ways to insert some code in your article. First add the code content directly in your 
article with the proper formatting or add a reference to an existing code file. 
We recommend you to add the code sample directly in your article except when the code sample is used
in several different places. In that case we recommend you to use a reference to a code file.
It can be much more efficient in term of maintenance.

Example:
> **Code directly included in the article**
> 
> \`\`\`cs  
> Asset.Unload(asset);  
> \`\`\`
>
> **Reference to an external code file**  
> \[\!code-csharp\[Main\]\(index.cs?start=5&end=9\)\]  // add line 5 to 9 of file index.cs


## <a name="Placeholders"> Placeholders </a>

For ease of understanding make all placeholders start by 'My'.

Example:
> Content.Load("MyFolder/MyAsset");

## <a name="Labels"> Labels </a>

Labels are optional info displayed at the top of the page so that readers can quickly understand intended target audience.

Please place them right after the top-level title.

There are several kinds of labels:

* Level (Beginner, Intermediate, Advanced) with `label-doc-level`
* Audience (Artist, Programmer, Designer) with `label-doc-audience`
* Platform (iOS, Android, etc.) with `label-doc-platform`
* Version where the feature have been introduced (Stride 2.1, etc.)with `label-doc-version`

Example:
```
# Title

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>

## Overview

Lorem ipsum...
```


## <a name="Remarks"> Remarks </a>

Whenever you have explanations that is not necessary for the understanding of a concept but that
can be very useful in application, add them as remarks so that the reader knows that it is extra information
that can be skipped depending on his objective. We provide several types of remarks such as notes, warnings and
tips to give an addition clue to the reader on what kind of extra information he is going to find.  

You can add note, tip and warnings using the following syntax:

```
> [!NOTE]
> Some useful notes
```

Available types:
* NOTE
* TIP
* WARNING

Note that current styling will be improved.

## <a name="PlatformRemarks"> Platform Specific Remarks </a>

Whenever there are explanations or remarks that are specific to a given platform, you should
use the following formatting style to show the reader that the section can be skipped depending on 
the targeted platform.

To do this, simply add one of the following style classes:
```
<div class="doc-android">Android specific text</div>
<div class="doc-iOS">iOS specific text</div>
<div class="doc-Windows">Windows specific text</div>
<div class="doc-Linux">Linux specific text</div>
```

## <a name="Notices"> Notices </a>

Whenever your page is missing some key information or is out-of-date, you should  
add a notice at the top of the page to inform the reader.

To do this, simply add one of the following tag at the top of the page:
```
<div class="doc-incomplete"/>  -> The current page is incomplete
<div class="doc-outofdate"/> -> The current page is out-of-date
```

Doing so will automatically add the 🔧 character to the page title to warn the user.

## <a name="Media"> Media </a>

You can add media content to your articles using the following syntax:
> \!\[Graphics Compositor Diagram\]\(media/graphics-compositor.png\)  

'Graphic Compositor Diagram' is the message displayed as fall-back if the image file can't be find.
'media/graphics-compositor.png' is the relative path to the file.

For each media file added, we kindly ask you to always include the 'source' file used to create 
your media file next to it. This will allow us to quickly update the images, diagrams and videos 
after some changes happen on the engine side. By source files we mean photoshop files, visio files, 
adobe premiere files, etc. When you create your media, try as much as possible to use either free
or mainstream tools.

Avoid to resize the source data when you create your media. Even if your media needs to be scaled down
to fit the screen, avoid to create scaled-down media by yourself. Instead keep your image in the
original resolution and let the documentation system automatically adapt it for the user. We are asking 
this because at some point we may decide to change the width of our documentation or to provide 
a way to zoom into images. The only exceptions to this are heavy videos. We would like you to create 
a lighter version of the videos to speed up the loading of the pages.

### <a name="Videos"> Videos </a>

As much as possible, we ask you to use the **MP4** format and the **H265** encryption for videos.

Recommenced software to edit the videos is Adobe After Effect.

### <a name="Images"> Images </a>

We ask you to use the **JPEG** format for heavy high resolution images to reduce the load time and
and the **PNG** format all the others (probably most of the images).

For the source files, we prefer the following formats: Photoshop, GIMP, Paint.net.

### <a name="Diagrams"> Diagrams </a>

Diagrams should be rendered as **PNG** or vector image. Since the documentation system automatically 
adjust the size of the images be careful that all text that you include in diagrams are still
readable after size readjustment. When a diagram is too big and can't be reduced, allow the reader to 
click and open it in full size.

You can make diagrams clickable using the following syntax:
TODO virgile

Diagrams can be created with Visio or standard image editing tools.

## <a name="Tables"> Tables </a>

You can add tables to the documentation by following the markdown syntax. Tables can improve the
way information is display but sometimes does not properly scale down. So be sure to try your page
on small resolution screen like Smart-phones before submitting your page.

## <a name="Lists"> Lists </a>

When possible prefer a short phrase than a full sentence for each item of a list. This simplifies and
speeds the reading up. Start each item with a capital letter.

When showing a step by step process or when order matters use ordered list rather of bullet points.

Example. 
> **Appropriate**
> 
> How to use lists:
> - Capitalize each first letter
> - Write short phrases
> 
> **Inappropriate**
> 
> How NOT to use lists:
> - you should capitalize the first letter of each item.
> - you should not write long sentence that will reduce the benefit of using a bullet list.

## <a name="Headers"> Headers </a>

The markdown '#' mark should be used to make headers. Only top title of the page should have the h1 style.
All other titles are sub-titles and should be formated into h2+.


As much as possible header text should be short and simple. Whenever possible use a active verb 
or a noun to start your header. Avoid verbs in -ing form.

Example
> \# Top Title: How to write headers.  
> \___  
> \## Write a sub-Title
> \### Write a sub-sub-folder  
> \### Write a sub-sub-folder  
> \## Write a sub-folder  

## <a name="Capitalization"> Letter Capitalization </a>

When a title is close to a full sentence you should only capitalize first letter of first work.
When a title is just composed of a few words (1 to 5) you should capitalize the few letter of each 
word.

You should NEVER fully capitalize a word inside a sentence except when you want to strongly insist on 
a fact. Words commonly used for this are: ONLY, DO NOT, YES, NO, MAKE SURE TO, BE CAREFUL (TO/ OF).

