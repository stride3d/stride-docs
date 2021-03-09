---
breaks: false
---

# ガイドライン
<!--
# Guidelines
-->

日々の作業において、Stride ユーザーは、あなたの書いた記事を読んで Stride Game Engine について学習することになるでしょう。
誰にでもわかりやすく、利用しやすいページを書くことを心がけてください。
あなたの探求をお手伝いし、ドキュメントを統一し使いやすいものにするために、以下のガイドラインに沿って執筆してくださるようお願いします。
<!--
Stride users will be reading your articles to learn about the engine in their every day work. 
Your goal is to write pages that are easy to understand and accessible to all. 
To help you in your quest and to have an unified documentation easy to use,
we ask you to follow to the below Guidelines when writing.
-->

* [執筆スタイル](#Style)
  * [会話のトーン](#Tone)
  * [二人称](#Person)
  * [能動態](#ActiveVoice)
  * [簡単な言葉](#SimpleVocabulary)
* [ページの構成](#PagesContent)
  * [「はじめに(Getting Started)」ページ](#GettingStarted)
  * [チュートリアル ページ](#Tutorials)
  * [セクション ヘッダー ページ](#SectionHeader)
  * [参照ページ](#Reference)
  * [HOWTOページ](#Howtos)
  * [長い説明は避けよう](#LongExplanations)
  * [長い文章は避けよう](#LongArticles)
  * [画像とビデオを使おう](#UseImagesVideos)
* [ページとファイルの構造](#FilesStructure)
  * [ページの階層](#PagesHierarchy) 
  * [ページの順序](#PagesOrder)
  * [ファイルの階層](#FilesHierarchy)
  * [ファイルの名前](#FilesName)
* [書式](#Formatting)
  * [テキストスタイル](#Styling)
  * [用語の定義](#Definitions)
    * [Stride 用語](#StrideTerms)
    * [ビデオゲーム用語](#VideoGameTerms)
    * [作業固有の用語](#JobTerms)
  * [ページの参照](#References)
  * [関連するトピック](#RelatedTopics)
  * [API リファレンス](#APIReferences)
  * [コードリファレンス](#CodeReference)
  * [プレースホルダー](#Placeholders)
  * [ラベル](#Labels)
  * [備考](#Remarks)
  * [プラットフォーム固有の補足](#PlatformRemarks)
  * [通知事項](#Notices)
  * [メディア](#Media)
    * [ビデオ]](#Videos)
    * [画像](#Images)
    * [ダイアグラム](#Diagrams)
  * [表（テーブル）](#Tables)
  * [箇条書き（リスト）](#Lists)
  * [ヘッダー](#Headers)
  * [大文字表記](#Capitalization)
  
注意：以下に述べる方向性はただのガイドラインであり、規則ではありません。
特定の状況に適さない場合は、無視して構いません。
<!--
Note: The following directions are just guidelines not rules. 
If they are not appropriate to your specific use-case, feel free to ignore them.
-->

# <a name="Style"> 執筆スタイル </a>
<!--
# <a name="Style"> Writing Style </a>
-->

## <a name="Tone"> 会話のトーン </a>
<!--
## <a name="Tone"> Conversation Tone </a>
-->

> **適切**
>
> ドキュメントは会話調にしたいと思っています。
> 私たちのチュートリアルや解説を読んでいると、著者と会話をしているような感覚になることでしょう。
> 読者として、形式張らず、くだけた、有益な体験をして、筆者が説明してくれるのを聞いているような感覚になるはずです。
>
> **不適切**
>
> 会話調の文体と、技術的な話題に対する学術的な扱いの文体が混在しています。
> とても役に立つ情報ですが、それらの記事は私たちのドキュメントとは全く異なるスタイルで書かれています。
> 学術雑誌を読むときのような、非常に異なるトーンとスタイルで書かれているのを目にします。
> 非常に乾いた話題の、乾いた説明を読んでいるような気がします。 

<!--
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
-->

上段は、私たちの推奨する会話スタイルです。下段は、より学術的なスタイルです。すぐに違いがわかります。

一方で、口語的になりすぎないように注意が必要です。
"You gonna see", "We'll see", "We've" などの表現は避けるべきです。

<!--
The first paragraph above follows our recommendation conversational style. The second
is a more academic style. You see the difference immediately. 

One the other hand, you should be careful not to become too much colloquial too.
Expressions like "You gonna see", "We'll see", "We've" are to avoid.
-->

##  <a name="Person"> 二人称 </a>
<!--
##  <a name="Person"> Second Person </a>
-->

> **適切**
>
> あなたは、記事を読者に直接話しかけているかのように書くべきです。
> あなたは、二人称を頻繁に使うべきです。（この2つの文章で私が使ったように）
> 二人称は必ずしも「あなた」という言葉を使うわけではありません。読者に直接向かって書きなさい。
> 命令文を書きなさい。読者に何を学んでほしいかを伝えなさい。
>
> **不適切**
>
> 著者が、三人称で書くことを選択するかもしれません。
> その場合、彼は、読者を表す代名詞や名詞を見つけなければなりません。
> 読者は、この三人称スタイルが好ましくなく、読んでいて楽しくないと思うかもしれません。

<!--
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
-->

上段は、私たちの推奨するスタイルです。下段では三人称を使用しています。
二人称で書いてください。あなたもその方が読みやすいと思ったのではないでしょうか。
<!--
The first paragraph follows our recommended style. The second uses 3rd person. 
Please write in second person. You probably found that much easier to read.
-->

##  <a name="ActiveVoice"> 能動態 </a>
<!--
##  <a name="ActiveVoice"> Active Voice </a>
-->

能動態で記事を書きましょう。
能動態とは、文の主語がその文の動作（動詞）を行うことを意味します。
これは、主語が従わせられるように記述される受動態とは対照的です。
次の2つの例を比べてみてください。
<!--
Write your articles in active voice. Active voice means that the subject of 
the sentence performs the action (verb) of that sentence. It contrasts with passive voice, 
where the sentence is arranged such that the subject of the sentence is acted upon. 
Contrast these two examples:
-->

> **適切**
> 
> コンパイラは、ソースコードを実行ファイルに変換しました。
>
> **不適切**
> 
> ソースコードは、コンパイラによって実行ファイルに変換されました。

<!--
> **Appropriate**
> 
> The compiler transformed source code into an executable.

> **Inappropriate**
> 
> The source code was transformed into an executable by the compiler.
-->

最初の文は、能動態を使っています。2つ目の文は、受動態で書かれています。
（この2つの文も、それぞれのスタイルの例になっていますね。）

能動態の方が読みやすいのでおすすめです。受動態は読みにくくなることがあります。

<!--
The first sentence uses active voice. The second sentence was written in passive voice. 
(Those two sentences provide another example of each style).

We recommend active voice because it is more readable. Passive voice can be more difficult to read.
-->

##  <a name="SimpleVocabulary"> 簡単な言葉 </a>
<!--
##  <a name="SimpleVocabulary"> Simple Vocabulary </a>
-->

記事を書くときは、Stride のユーザーは全員が英語を母国語としているわけではないことを覚えておいてください。
あなたの記事を読む人はさまざまであり、あなたが知っている語彙を知らない可能性もあります。

一般的に、「5年生の読解力」を目処に書いてみてください。

<!--
Keep in mind that Stride users are not all native English speaker when you write your articles.
Your audience is international and they probably don't have the vocabulary you have.

As a general rule try to *target a 5th grade reading level" when you write.
-->

#  <a name="PagesContent"> ページの構成 </a>
<!--
#  <a name="PagesContent"> Pages Content </a>
-->

Stride のドキュメントは、さまざまな種類のページで構成されます。
期待される内容とページレイアウトは、その種類に強く依存します。
記事を書く前にまずどんな種類のページにするのかを決め、それから、次に示す、内容とレイアウトのテンプレートに従ってください。

ページの種類に基づく内容とレイアウトのガイドラインに加えて、
このセクションの最後に、内容に関する一般的な推奨事項をいくつか挙げておきます。

<!--
Stride documentation is composed of different types of pages. The expected content and layout
of the page directly depends on the type. Before writing your article, start by identifying the 
type of page you are targeting, then follow the below templates for content and layout.

In addition to content and layout guidelines based on the type of page, we finish this section 
with a few generic recommendations for the content.
-->

##  <a name="GettingStarted"> 「はじめに(Getting Started)」ページ </a>
<!--
##  <a name="GettingStarted"> Getting Started Pages </a>
-->

「はじめに」の記事は、Stride の新規ユーザーの最初の一歩を導くことを目的としています。
このページでは、基本的で本質的な話題のみをカバーし、その概念を深く説明する必要はありません。
1ページに1つのテーマだけを取り上げてください。
<!--
Getting Started articles aim at guiding new Stride users in their first steps. Pages should cover only basic 
and essential topics and don't need to explain concepts in depth. Only one subject should be covered per page.
-->

あらゆるタイプの読者を対象にしたページは、「はじめに」ページのルートページの直下に挿入してください。
特定の読者をターゲットにするページは、読者を特定したページの下に挿入してください。
Stride の新規ユーザーをフォローできるように、「はじめに」ページの順序を決めてください。
<!--
Pages targeting any kind of audience should be inserted directly under the Getting Started root page.
Pages targeting a specific audience should be inserted under a page specifying the audience. Getting
Started pages order should follow the progress of a Stride new user.
-->

「はじめに」ページは、次のような内容で構成されます。

1. ページタイトル（そのページで扱っているテーマ）。
2. その内容が重要である理由と、機能やツールの目的の簡単な説明。
3. このページで読者が具体的に何をするかを説明する短い段落。
4. 学習内容を説明する画像または動画（可能であれば）。
5. サブタイトルとページの内容。

<!--
A Getting Started page consists of the following content:

1. The page title (the subject dealt in the page).
2. A short introduction explaining why the topic matters and the purposes of the feature or tool.
3. A short paragraph explaining what the reader will concretely learn to do in the page.
4. An image or a video illustrating what the user will learn (if possible).
5. The sub-titles and the content of the page.
-->

例：
```
# Stride でシーンを設計する

シーンはゲームに欠かせない要素です。
シーンを使うと、ゲームの内容を複数の段階やモジュールに分割することができます。
ここでは、Stride のエディターを使って、シーンを作る方法について学びます。

[シーンイメージ](media/scene.png)

## シーンに要素をドラッグ＆ドロップする

...
```
<!--
Example:
```
# Design Scenes with Stride.

Scenes are an essential element of your game. They allow you to divide the content of your game into levels and modules.
In this article you will learn how to create and populate scenes from the editor in Stride.

[Scene Image](media/scene.png)

## Drag and drop elements in your scene

...
```
-->

##  <a name="Tutorials"> チュートリアル ページ </a>
<!--
##  <a name="Tutorials"> Tutorial Pages </a>
-->

チュートリアルの目的は、ユーザーによるゲームコンポーネントの作成に付き添うことです。
各チュートリアルは、初期の状態（ほとんどの場合、空っぽのゲーム）から始まって、最終の状態（ミニゲームやゲームコンポーネントの完成）まで続きます。
最終的に実現するまでの、主要なステップごとにページを作成してください。
ページは時系列に並べて、次のページが前のページで終わったところから始まるようにします。
チュートリアル用のフォルダを1つ作成してください。
<!--
The purpose of tutorials is to accompany users through the creation of a game component. Each tutorial 
starts from a initial state (most of the time an empty game) and ends to a final state (mini game or 
game component completed). A page should be created for each main step of the final realization.
Pages should be ordered chronologically and next pages should start exactly were previous pages stop.
A folder should be created for each tutorial. 
-->

チュートリアルのヘッダーページは、次のような内容にで構成されます。

1. ページタイトル（チュートリアルの名前）。
2. チュートリアルで実現することと、学べることに関する説明。
3. チュートリアルの完了に必要となる知識（あれば）。
4. 最終イメージの画像（可能であれば）。
5. チュートリアルのサブページへのリンクを持った目次（順序付きリスト）。
<!--
A tutorial header page consists of the following content:

1. The page title (name of the tutorial).
2. A description of what will be realized and what can be learned from the tutorial. 
3. The knowledge needed to be able to complete the tutorial (if any). 
4. One or several images of the final realization (if possible). 
5. A table of content with the links to the tutorial sub-pages (ordered list).
-->

例：
```
# 2Dゲームのチュートリアル

このチュートリアルでは、簡単な2Dゲームをゼロから作成します。
シーンの作成方法、要素間のコリジョン判定の方法、そしてゲームに UI を追加する方法について学びます。
このチュートリアルは、Stride で新しいプロジェクトを作成する方法と、アセットをインポートする方法を知っていることを前提としています。

[2Dゲームイメージ](media/my2dGame.png)

1. [アセットをインポートする](ImportAsset.md)
2. [レベルを作成する](CreateLevel.md)
3. [コリジョンを追加する](AddCollisions.md)
4. [UI を追加する](AddUI.md)
```
<!--
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
-->

チュートリアルページは、次のような内容で構成されます。

1. ページタイトル（ページで実現すること）
2. 前後のページへのリンク
3. このページで実現することと学ぶことの説明。
4. ページで実現することを示した画像（可能であれば）。
5. ページのサブステップとその内容。
6. チュートリアルの次のページへのリンクを持った紹介文。

<!--
A tutorial page consists of the following content:

1. The page title (realization of the page) 
2. Links to previous and next tutorial pages
3. A description of what will be realized in the current page and what will be learned. 
4. One or several pictures illustrating the realization of the page (if possible).
5. The sub-steps and the content of the page.
6. A sentence introducing the next page of the tutorial including a link.
-->

例：
```
# ゲームに UI を追加する

前のページ [物理コリジョンを使う](UsePhysicsCollision.md) | 次のページ [ゲームを配布する](DeployYourGame.md)

このページでは、ゲームに簡単なUIを追加していきます。
Stride のデフォルトのデザインを使って UI を作成し、ゲームプレイと連動させる方法について学びます。

[ゲームのUIのイメージ](media/MyGameUI.png)

1. [UI コンポーネントを追加する](# Add a UI component)
2. [UI を設定する](# Set the UI)
3. [UI をゲームに関連付ける](# Make UI interact with your game)

## UI コンポーネントを追加する

...

次のセクションでは、[ゲームを配布する方法](DeployYourGame.md)について学びましょう。

```
<!--
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
-->

注意：それぞれの指示は、可能な限り、指示の前後の状態を示す2つの画像で囲みましょう。
最初の指示の前に置いた画像が初期状態で、最後に置いた画像が最終の状態に対応します。
<!--
Note: as much as possible each instruction should be surrounded by two images showing the state 
before and after the instruction. Image before the first instruction should correspond to the initial
state and last image should correspond to the final state.
-->

##  <a name="SectionHeader"> セクション ヘッダー ページ </a>
<!--
##  <a name="SectionHeader"> Section Header Pages </a>
-->

セクションヘッダーは、ドキュメントフォルダに置かれるトップページです。
ヘッダーページの目的は、セクションの話題を紹介し、エンジンの最適な機能を公開し、セクションの概要を提供することです。
<!--
Section headers are the top pages of the folders of the documentation. The goal of header pages is 
to introduce the section topic, to expose the best features of the engine and to provide an overview of the section.
-->

ヘッダーページの内容は次の通りです。

1. タイトルとしてのセクション名
2. セクションの内容を説明する画像（サブフォルダの場合、この画像を省略できます）
3. このセクションで紹介する内容を示す短い導入文。
4. その話題における、エンジンの主な機能や最適な機能について公開する段落。
5. このセクションを読解することで学べることついて説明する短い段落。
6. 話題に関するすべての視点を与えるセクションの概要（目的、課題、基本概念）。
<!--
A header page consists of:

1. The name of the section as title
2. An image illustrating the section (for sub-folder this image can be skipped)
3. A short introduction sentence explaining what is the section about.
4. A paragraph exposing the main and best features of the engine on the topic.
5. A short paragraph explaining what can be learned by reading this section. 
6. An overview of the section giving a full insight of the topic (objectives, challenges, base concepts).
-->

注意: サブフォルダのヘッダの場合、セクションのヘッダページは概要やメインテーマへのリンクだけで十分な場合があります。
<!--
Note: for sub-folder headers only an overview or links to main subjects can be enough for a section header page.
-->

例：
```
# 物理演算

![物理演算セクションのイメージ](media/PhysicSection.png)

物理演算を使って、ゲーム内で物理シミュレーションを行うことができます。

Stride は、Game Studio に完全に統合された物理演算システムを持っています。
専用の物理エディタを使って、オブジェクトの物理形状を直接編集したり、モデルから自動的に生成したりすることができます。

このセクションでは、オブジェクト間の衝突のシミュレーション、トリガー領域の追加、オブジェクトへの物理法則の適用などについて学びます。

## 概要

物理エンジンの目標は、ゲーム要素のアクションを生成して自動化する方法を提供し、それらが物理法則に従っているように見せることです。
正確な物理シミュレーションは非常にコストがかかるので、物理的な振る舞いはすべて近似的に計算されます。

# 物理形状

![物理形状のイメージ](media/PhysicShapes.png)
...

# 物理オブジェクトの種類
...
```
<!--
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
-->

##  <a name="Reference"> 参考ページ </a>
<!--
##  <a name="Reference"> Reference Pages </a>
-->

参考ページでは、特定のコンセプトや機能、要素について、深い説明を行います。
<!--
Reference pages explain in depth a specific concept, feature, or element.
-->

参考ページの内容は次の通りです。

1. ページタイトル（コンセプトの名前）。
2. コンセプトの定義と説明。
3. コンセプトの標準的な使い方と、なぜその話題が重要なのかの説明。
4. コンセプトを示す画像（可能であれば）。
5. コンセプトのサブトピック（機能性、使用例など）。
<!--
A reference page consists of:

1. The page title (name of the concept)
2. The definition and explanation of the concept.
3. The standard usages of the concept and a explanation why the topic matters.
4. An image illustrating the concept (if possible)
6. The sub-topics with the content (functionalities, usages samples, etc)
-->

例：
```
# マテリアル

マテリアルとは、要素をどのようにレンダリングするかを定義するルールのセットです。

モデル、パーティクル、スプライトに対してマテリアルを適用することで、要素の色、ライティング、シャドウイングを定義することができます。

![マテリアルのイメージ](media/Material.png)

1. オブジェクトジオメトリ

...

2. オブジェクトシェーディング
...

```
<!--
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
-->

##  <a name="Howtos"> HOWTO ページ </a>
<!--
##  <a name="Howtos"> HOWTO Pages </a>
-->

HOWTO ページの目的は、何かを実現するための明確な手順を提供することです。
各 HOWTO ページは、他の HOWTO ページから独立していて、読者を一つの目標に導くものでなければなりません。
コンセプトを定義したり、説明したりすることは避けましょう。
<!--
The goal of the HOWTO pages is to provide a list of clear instructions to realize a specific thing. 
Each HOWTO page should be independent from other HOWTO pages and guide the reader towards 
a single target. It should not define nor explain any concept.
-->

HOWTO ページの内容は次の通りです。

1. ページタイトル（ねらいを表す動詞で終わるフレーズ） <!--訳注：原文では動詞は「始まる」だが、日本語では「終わる」とした -->
2. 説明を理解するために必要な知識。
3. ページの目的と、何について学ぶか
4. 最終イメージの画像（可能であれば）
5. 主な手順とその説明、そして副題（副題には手順番号を付けましょう）
<!--
A HOWTO page consists of:

1. The page title (phrase starting with a verb describing the target)
2. The knowledge needed to understand the instructions.
3. The goal of the page and what the user will learn to doc-audience
4. An image of the final realization (if possible)
5. The main steps and their explanations and sub-instructions (add the step number in the sub-title)
-->

例：
```
# UI にパーティクルを追加する

前提条件：このページでは、パーティクルや UI の一般的な使い方を知っていることを前提とします。

このページでは、UI にパーティクルを割り当てる方法について説明します。

![UIに割り当てられたパーティクルのイメージ](media/ParticlesInUI.png)

## 1. パーティクルエフェクトを作成する
...

## 2. UI を作成する
...

## 3. UI リンクコンポーネントを追加する
...

```
<!--
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
-->

注意：それぞれの指示は、可能な限り、指示の前後の状態を示す2つの画像で囲みましょう。
最初の指示の前に置いた画像が初期状態で、最後に置いた画像が最終の状態に対応します。
<!--
Note: as much as possible each instruction should be surrounded by two images showing the state 
before and after the instruction. Image before the first instruction should correspond to the initial
state and last image should correspond to the final state.
-->

##  <a name="LongExplanations"> 長い説明は避けよう </a>
<!--
##  <a name="LongExplanations"> Avoid Long Explanations </a>
-->

説明が長いと、読者は消化不良になってしまいます。ほとんどの場合、読者はそれらを無視してしまうか、
あるいは説明の本質的なポイントを押さえることができなくなります。
<!--
Long explanation are quite indigestible for the reader. Most of the time, he simply skips them.
If not, he is not able to remember the essential point of the explanation. 
-->

そのため、1つの段落では2つ以上のことを説明しないようにしましょう。
説明は短くシンプルにして、可能であれば、説明文の横に、概念を示す画像や図を追加するようにしましょう。
<!--
To avoid this, try to never explain more than one concept in a simple paragraph.
Try to keep your explanation short and simple and when possible add an image or a diagram 
that corresponds to the concept next to your text.
-->

このことは、「はじめに」ページ、チュートリアルページ、HOWTO ページではさらに重要です。
これらのページでは、コンセプトを数行で説明するか、あるいは説明するかわりにコンセプト専用のページを参照するようにしてください。
<!--
This guideline is even more important for Getting Started, Tutorials and HOWTO pages,
where the text should correspond more to instructions than explanations about Stride concepts.
In those pages, you should either try to explain the concept in a simple lline or replace the
explanation by a reference to the page dedicated to the concept.
-->

##  <a name="LongArticles"> 長い文章は避けよう </a>
<!--
##  <a name="LongArticles"> Avoid Long Articles </a>
-->

8～10 画面よりも長い記事は避けるようにしましょう。
記事が長いと、読者は読み始めることすら難しくなり、読者の学習を妨げてしまいます。
記事の内容がこの画面数に収まらない場合は、記事を複数の記事に分割しましょう。
<!--
Try to avoid writing articles longer than 8 to 10 screen heights. Long articles discourage users 
to start reading and make the navigation harder. If the content of your article cannot fit in
the above number of screen, split your article into several articles.
-->

##  <a name="UseImagesVideos"> 画像とビデオを使おう </a>
<!--
##  <a name="UseImagesVideos"> Use Images & Videos </a>
-->

可能な限り、説明には画像やビデオを追加しましょう。読者は大変助かります。

また、理にかなっている場合は、画像ではなく小さなビデオを使うことをお勧めします。
ビデオは重いからといって、たくさんの矢印が描かれた図を使わなければならなかった時代は終わったと考えています。
現在ではインターネットと圧縮技術のおかげで短いビデオならドキュメントに含めることができ、わかりやすさをさらに向上することができます。
<!--
Also whenever it makes sense, we recommend you to use small videos instead of images. 
We believe that the time where we had to use diagrams with lots of arrows going in all directions
because videos were too heavy is over. Nowadays Internet connections and compression algorithms 
are good enough to include short videos in the documentation and increase even more the ease of
understanding.
-->

### ビデオのエンコード方法
<!--
### How to encode videos
-->

いろんなブラウザやデバイスで再生できるように、ビデオのフォーマット要件は低くしましょう。
H.264 baseline プロファイルなどを使います（ほぼどこでも再生できます）。
<!--
To make sure videos play well in different browsers and on different devices, stick to a format with low requirements, such as H264 baseline profile (which works almost everywhere).
-->

ビデオをこのフォーマットに変換するには、[ffmpeg](https://ffmpeg.org/download.html) を使用します。

1. ffmpeg をダウンロードします。

2. ff-prompt.bat を実行します。

3. ff-prompt.bat のコマンドラインで、変換したいビデオがあるフォルダを指定します。

4. 次のコマンドを実行します。``myvideo_original.mp4`` は変換したいビデオのファイル名に、``myvideo.mp4`` は変換後に出力されるファイル名に、それぞれ置き換えてください。

```
ffmpeg -i myvideo_original.mp4 -profile:v baseline -level 3.0 -an myvideo.mp4
```
<!--
To convert a video to this format, process the file using [fmpeg](https://ffmpeg.org/download.html).

1. Download the Ffmpeg package for your operating system.

2. Run the ff-prompt.bat file.

3. In the ff-prompt.bat command line, browse to the folder with the video you want to convert.

4. Run the following command, replacing ``myvideo_original.mp4`` with the filename of the video you want to convert, and ``myvideo.mp4`` with the filename of the output file you want to create:

```
ffmpeg -i myvideo_original.mp4 -profile:v baseline -level 3.0 -an myvideo.mp4
```
-->

続けて、モバイルユーザーがビデオをダウンロードする前にプレビューできるように、静的なサムネイルを生成します。これを行うには、次のコマンドを実行します。

```
ffmpeg -i myvideo.mp4 -vframes 1 -f image2 -y myvideo.jpg
```
<!--
After you do this, generate a static thumbnail so that mobile users can preview the video before downloading. To do this, run:

```
ffmpeg -i myvideo.mp4 -vframes 1 -f image2 -y myvideo.jpg
```
-->

### ビデオを埋め込む
<!--
### Embed videos
-->

次のコードを .md ファイルに記入します。
ディレクトリ名とファイル名は、使用したいファイルに置き換えてください。

```
<p>
    <video autoplay loop class="responsive-video" poster="folder/myvideo.jpg">
       <source src="folder/myvideo.mp4" type="video/mp4">
    </video>
</p>
```
<!--
Put this syntax in the .md file, replacing the directories and filenames with the files you want to use:

```
<p>
    <video autoplay loop class="responsive-video" poster="folder/myvideo.jpg">
       <source src="folder/myvideo.mp4" type="video/mp4">
    </video>
</p>
```
-->

# <a name="FilesStructure"> ページとファイルの構造 </a>
<!--
# <a name="FilesStructure"> Pages & Files Structure </a>
-->

ドキュメントページの階層は目次ファイル [manual/toc.md](manual/toc.md) に記載し、このリポジトリのファイル階層から独立させます。一つの記事をドキュメントの異なる場所に必要に応じていくつも追加することもできますが、分かりやすいように、ドキュメントのページとリポジトリのファイルは同じ階層を保つようにしてください。
<!--
The hierarchy of the documentation pages is specified in the [manual/toc.md](manual/toc.md) file
and is independent from the file hierarchy of this repository. For example, a single article can
be added several times at different location in the documentation if needed. Nevertheless for ease
we ask you to try to keep the same hierarchy between the documentation pages and this
repository files.
-->

ドキュメントに新しいページを追加するには、[toc](manual/toc.md) ファイルの適切な場所に新しいエントリを追加してください。
<!--
To add a new page in the documentation, just add a new entry at the appropriate place in the 
[toc](manual/toc.md) file.
-->

## <a name="PagesHierarchy"> ページの階層 </a>
<!--
## <a name="PagesHierarchy"> Pages Hierarchy </a>
-->

原則としては、ナビゲーションのしやすさを考えて、階層を深くすることは避けたいところです。
可能な限り、深さは4段階までに収めることをお勧めします。

> - はじめに
>   - 共通事項
>   - 想定する読者
>      - トピック
> - チュートリアル
>   - 2D ゲーム
>   - 3D ゲーム
> - エンジン
>   - トピック
>   - サブカテゴリ
>     - サブトピック
>   - HOWTO
>   - 何かをする

<!--
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
-->

ページの命名規則：
* HOWTO フォルダの中にあるページの名前は動詞で終わり、目的（「ゲームでポストエフェクトを有効にする」など）を記述するようにしてください。 <!--訳注：原文では動詞で「始まる」だが、日本語では「終わる」とした -->
<!--
Page naming conventions:
* The name of the pages under the HOWTO folder should start with a verb and describe an objective ('Activate post-effects to your game', etc)
-->

## <a name="PagesOrder"> ページの順序 </a>
<!--
## <a name="PagesOrder"> Pages Order </a>
-->

ページは、アルファベット順に並べる必要はありません。
<!--
Documentation pages don't necessary need to be alphabetically ordered.
-->

原則として、新しいページは次のように並べてください。

1. 時系列に従うものはその順番に（「はじめに」/チュートリアル)。
2. 重要なものから順番に（概要ページ→参考文献ページ→HOWTOs）。
3. 重要度が同じであれば、アルファベット順に。

<!--
As a general rule, order your new pages as follow:

1. Chronologically when there is a chronological order (Getting started / tutorial pages)
2. Most important subjects first (Overview pages -> References pages -> HOWTOs) 
3. When pages have the same importance, order them alphabetically.
-->

## <a name="FilesHierarchy"> ファイルの階層 </a>
<!--
## <a name="FilesHierarchy"> Files Hierarchy </a>
-->

記事ファイルは、フォルダを使って整理してください。
可能な限りドキュメントと同じ階層にする、ということを尊重しましょう。
セクションヘッダーに対応するファイルは、セクション名と同じ名前のフォルダの先頭に置いて、'index.md' という名前にしてください。**フォルダ名とファイル名は小文字のみで構成し、単語はダッシュで区切ってください。**
<!--
Article files should be organized into folders. As much as possible we will try to respect the
same hierarchy as the documentation. Files corresponding to section header should be included at the 
top of the folder having the same name and be named 'index.md'. Folder and file names should be
composed of only **lower case letters, words should be separated by dashes**.
-->

記事内で参照されているメディアファイル（画像やビデオ）は 'media' という名前の専用フォルダに入れて、その専用フォルダは、参照している記事と同じフォルダの中に置くようにしてください。
<!--
Media files (images and videos) referenced in articles should be placed in a dedicated folder
named 'media' and put next to the referencing articles.
-->

記事内で参照されているコードサンプルファイル（C#、スクリプトなど）は
'code' という名前の専用フォルダに入れて、その専用フォルダは、参照している記事と同じフォルダの中に置くようにしてください。
<!--
Code sample files (C#, scripts, etc) referenced in articles should be placed in a dedicated 
folder named 'code' and put next to the referencing articles.
-->

階層の例：

> - graphic
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
<!--
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
-->

## <a name="FilesName"> ファイルの名前 </a>
<!--
## <a name="FilesName"> Files Name </a>
-->

ファイル名には、**小文字**と**単語を区切るためのダッシュ**だけを使用するようにしてください。
また、ファイルには可能な限り明示的で分かりやすい名前をつけて、ページ名の末尾には動詞か名詞をつけてください（現在分詞（動詞-ing形）は避けてください）。
<!--
File names should consist only of **lower case letters** and **dashes to separate the words**.
Also as much as possible, you should give explicit and human-understandable names to files and 
start the page name by either an active verb or a noun (avoid -ing form verbs).
-->

私たちの推奨事項は次の通りです。
- セクションヘッダーファイルは、常に'index.md' という名前にします。
- 記事ファイルは、ページのメインタイトルを使った名前にします（空白は除きます）。
- メディアファイルは、ファイルの内容に沿ったシンプルな名前にします。
<!--
Our recommendations are the following:
- Section Header files should always be named 'index.md'
- Article files should be named using the main title of the page (without spaces)
- Media files should have a simple name corresponding to the content of the file
-->

例：
> **適切**  
> index.md  
> point-light.md  
> point-light-diagram.png  
>
> **不適切**  
> graphics-index.md  
> PointLightFile1.md  
> Img20150902.png  
<!--
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
-->

#  <a name="Formatting"> 書式 </a>
<!--
#  <a name="Formatting"> Formatting </a>
-->

##  <a name="Styling"> テキストスタイル </a>
<!--
##  <a name="Styling"> Text Styling </a>
-->

ドキュメントを読みやすくするために、太字と斜体を適切に使用することが重要です。

重要な単語や手順は、**太字**で表示します。

UI 要素やウィンドウ名は、*斜体*で表示します。
<!--
In order to simplify the reading of the documentation, it is important that you properly use bold and italic styles.

Put every important word or step in bold using the **Text in bold** syntax.

Put every UI element or Window names in italic using the *Text in italic* syntax.
-->

##  <a name="Definitions"> 用語の定義 </a>
<!--
##  <a name="Definitions"> Definitions </a>
-->

記事を書くときに気をつけなければならないのは、ユーザーが知らない用語をきちんと定義することです。
基本的には、次の3種類の用語を区別するようにします。
<!--
When you write your articles, you should be careful of properly defining all the terms that can be
unknown by the user. We can basically distinguish the following three types of terms.
-->

###  <a name="StrideTerms"> Stride 用語 </a>
<!--
###  <a name="StrideTerms"> Stride Terms </a>
-->

アセット、ライブスクリプティング、グラフィックコンポジターなどの Stride 特有の用語は、必ず定義する必要があります。
用語ごとに専用のページを作る必要はありません。
簡単に説明できるのであれば、親ページの中で用語を定義しても構いません。
エディタでの記述が終わったら、TODO タグに続けて virgile を追加してください。
そして、記事の中で単語が最初に出てくる箇所にそれをリンクしてください。
さらに、短い定義をページのメタデータとして追加します。
これは後で定義のツールチップを作成するために使用されます。

例：
```
TODO @virgile: update this
```
<!--
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
-->

###  <a name="VideoGameTerms"> ビデオゲーム用語 </a>
<!--
###  <a name="VideoGameTerms"> Video Game Terms </a>
-->

ビデオゲーム用語は、ゲームおよびグラフィック業界に特有の用語です。
これらの用語は、Stride のドキュメントでは一文で簡潔に定義されていなければなりません。
用語が Stride にとって重要なものである場合（例：フォワードレンダリングなど）は、その内容について詳しく説明します。
重要でない場合には、外部サイト（wikipedia　など）にリンクすることも可能です。
簡潔な定義は、ドキュメントや Game Studio でツールチップを作る際に使われます。
ページで最初に出現した箇所にのみ、リンクを貼ってください。
<!--
These terms are specific to the game and graphic industry. 
They should be briefly defined in one sentence in the Stride documentation.
If the topic is important for Stride (e.g.: Forward rendering, etc.) we will elaborate more on the matter.
If not a link to an external site (wikipedia, etc) can also be used.
The brief definition will be used to build tooltip in the documentation and Game Studio. 
Only the first occurrence of the page should be linked.
-->

例：
```
TODO @virgile

Stride では、@forward-rendering か @defferd-rendering のいずれかを選択することができます。（←専用ページへのリンク）

レンダリングモデルにより、[シェーダー](http://wikipedia/shaders)は完全に異なります。（←外部リンク）

より複雑なシェーダーは云々（←2回目にはリンクを貼らない）
```
<!--
Example
```
TODO @virgile

In Stride you can choose between @forward-rendering and @deffered-rendering. (<-link to a dedicated pages).

Depending on the rendering model the [Shaders](http://wikipedia/shaders) are completely different. 
(<- external reference)

The more complex shaders are blablabla (<- second reference no link)
```
-->

注意：想定する読者が「中級者」や「上級者」である場合には、基本的な用語の定義は不要です。
<!--
Note: If the expected audience for the page is 'Intermediate' or 'Advanced' basic term definitions can 
be skipped. 
-->

###  <a name="JobTerms"> 作業固有の用語 </a>
<!--
###  <a name="JobTerms"> Job Specific Terms </a>
-->

作業固有の用語は、開発プロセスにおける役割に特有のものです。
これらの用語を定義する必要があるのは、期待される読者が特定の仕事だけでなくより広い範囲に及んでいる場合や、Stride API で用語が使用される場合のみです。
ほとんどの場合、外部ページへのリンクを使用してツールチップの定義を追加することで定義します。
ページの最初の出現箇所のみ定義する必要があります。
<!--
These terms are specific to a role in the development process. They need to be defined only the when 
the expected audience for the page is wider than just the specific job or when the term is used in the Stride API. Most of the time we will 
define them by using a link to an external page and adding a tooltip definition. Only the first occurrence
of the page has to be defined.
-->

##  <a name="References"> ページの参照 </a>
<!--
##  <a name="References"> Page References </a>
-->

読者を簡単にナビゲーションできるように、できるだけ他のドキュメントページへのクロスリファレンスを追加することをお勧めします。
<!--
We recommend you to add cross reference to other documentation pages as much as possible to ease
to reader navigation. 
-->

クロスリファレンスを追加する手順は、次の通りです。

1. 定義しているファイルの先頭に、uid を追加します。
2. ページにリンクしたい箇所で、@uid ショートカットを使って参照します。
<!--
To add a cross reference proceed as follow:

1. Add a uid at the top of the destination file
2. Everytimes you want to link the page just reference it using the @uid shortcut.
-->

例：
```
material.md:
---
uid: material
---

# マテリアル
...

sprite.md:
スプライトカラーに関する詳細については、@material を参照してください。
```
<!--
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
-->

注意：詳細については、DocFX のドキュメントを参照してください。
<!--
Note: for more information please refer to DocFX documentation.
-->

## <a name="RelatedTopics"> 関連するトピック </a>
<!--
## <a name="RelatedTopics"> Related Topics </a>
-->

読者にトピックについての知識を深めてもらい、簡単にナビゲーションできるように、
できるだけ記事の下部に関連するトピックへのリンクを追加することをお勧めします。
<!--
To encourage readers to learn more about a topic and also to ease their navigation,
we recommend you as much as possible to add links to related topics at the bottom of your articles.
-->

次のように、doc-relatedtopics スタイルを使用します。
```
<div class="doc-relatedtopics">
* [Page1](link-to-page1)
* [Page2](link-to-page2)
* [Page3](link-to-page3)
</div>
```
<!--
For this use the doc-relatedtopics style, as follow: 
```
<div class="doc-relatedtopics">
* [Page1](link-to-page1)
* [Page2](link-to-page2)
* [Page3](link-to-page3)
</div>
```
-->

## <a name="APIReferences"> API リファレンス</a>
<!--
## <a name="APIReferences"> API References </a>
-->

API クラス、インターフェース、関数などについて言及する際には、API リファレンスへのリンクを追加しましょう。
同じリンクを何度も追加するのを避けるために、関数名を動作動詞に置き換えることができます。
<!--
A link to the API reference should be added for EACH mention of an API class, interface, function, etc.
To avoid to add too many times the same links, you can replace the function name by an action verb.
-->

API リファレンスへのリンクは、次のように行います。
> @'MyNamespace.MyClass.MyFunction'
<!--
Adding a link to a reference API can be done the following way:
> @'MyNamespace.MyClass.MyFunction'
-->

例：
```
サウンドを再生するには、@'Stride.Audio.SoundEffectInstance.Play' 関数を使用します。
再生中の音を再び再生しても効果はありません。停止中の音を再生すると、初めから再生を再開します。
```
<!--
Example:
```
Use the @'Stride.Audio.SoundEffectInstance.Play' function start playing a sound.
Playing an ongoing sound has no effect. Playing a stopped sound restart the sound from beginning.
```
-->

## <a name="CodeReference"> コードリファレンス </a>
<!--
## <a name="CodeReference"> Code References </a>
-->

サンプルコードを記事に含める際には、可能な限り小さくし、コメントを十分につけて、適切なフォーマットにしてください。
記事にコードを挿入するには2つの方法があります。
コード内容を適切な書式で記事内に直接追加する方法と、既存のコードファイルへの参照を追加する方法です。
お勧めは直接追加する方法ですが、サンプルコードが複数の場所で何度も使用される場合には、コードファイルへの参照を使うことをお勧めします。
メンテナンスという意味ではかなり効率的になります。
<!--
Code samples should be as small as possible, well commented and be properly formatted when included. 
There are two different ways to insert some code in your article. First add the code content directly in your 
article with the proper formatting or add a reference to an existing code file. 
We recommend you to add the code sample directly in your article except when the code sample is used
in several different places. In that case we recommend you to use a reference to a code file.
It can be much more efficient in term of maintenance.
-->

例：
> **コードを記事に直接含める場合**
> 
> \`\`\`cs  
> Asset.Unload(asset);  
> \`\`\`
>
> **外部のコードファイルを参照する場合**  
> \[\!code-csharp\[Main\]\(index.cs?start=5&end=9\)\]  // index.cs ファイルの 5～9 行目が追加されます。
<!--
Example:
> **Code directly included in the article**
> 
> \`\`\`cs  
> Asset.Unload(asset);  
> \`\`\`
>
> **Reference to an external code file**  
> \[\!code-csharp\[Main\]\(index.cs?start=5&end=9\)\]  // add line 5 to 9 of file index.cs
-->

## <a name="Placeholders"> プレースホルダー </a>
<!--
## <a name="Placeholders"> Placeholders </a>
-->

分かりやすいように、プレースホルダーはすべて 'My' で始まるようにしてください。

例：
> Content.Load("MyFolder/MyAsset");
<!--
For ease of understanding make all placeholders start by 'My'.

Example:
> Content.Load("MyFolder/MyAsset");
-->

## <a name="Labels"> ラベル </a>
<!--
## <a name="Labels"> Labels </a>
-->

ラベルとは、対象読者のレベルを表すオプション情報です。
ラベルは、読者が素早く理解できるように、ページの上部に表示します。

トップレベルのタイトルの直後に配置してください。
<!--
Labels are optional info displayed at the top of the page so that readers can quickly understand intended target audience.

Please place them right after the top-level title.
-->

ラベルにはいくつかの種類があります。

* レベル（初級、中級、上級）を表す `label-doc-level`
* 役割（アーティスト、プログラマー、デザイナー）を表す `label-doc-audience`
* プラットフォーム（iOS, Android など）を表す `label-doc-platform`
* その機能が導入されたバージョン（Stride 2.1 など）を表す `label-doc-version`
<!--
There are several kinds of labels:

* Level (Beginner, Intermediate, Advanced) with `label-doc-level`
* Audience (Artist, Programmer, Designer) with `label-doc-audience`
* Platform (iOS, Android, etc.) with `label-doc-platform`
* Version where the feature have been introduced (Stride 2.1, etc.)with `label-doc-version`
-->

例：
```
# Title

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">アーティスト</span>

## 概要

……略……
```
<!--
Example:
```
# Title

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>

## Overview

Lorem ipsum...
```
-->

## <a name="Remarks"> 備考 </a>
<!--
## <a name="Remarks"> Remarks </a>
-->

理解するために必要なくても応用上非常に有用な説明がある場合には、読者が読み飛ばすことができる余分な情報であることがわかるように、備考として追加してください。
どのような情報であるかのヒントとして、注意、警告、ヒントなどのいくつかのタイプの備考を使用します。
<!--
Whenever you have explanations that is not necessary for the understanding of a concept but that
can be very useful in application, add them as remarks so that the reader knows that it is extra information
that can be skipped depending on his objective. We provide several types of remarks such as notes, warnings and
tips to give an addition clue to the reader on what kind of extra information he is going to find.  
-->

次の構文を使って、注意、Tips、警告を追加することができます。

```
> [!NOTE]
> 何らかの役立つ情報
```
<!--
You can add note, tip and warnings using the following syntax:

```
> [!NOTE]
> Some useful notes
```
-->

利用可能なタイプは次の通りです。
* NOTE
* TIP
* WARNING
<!--
Available types:
* NOTE
* TIP
* WARNING
-->

書式は今後も改善されていきますのでご注意ください。
<!--
Note that current styling will be improved.
-->

## <a name="PlatformRemarks"> プラットフォーム固有の補足 </a>
<!--
## <a name="PlatformRemarks"> Platform Specific Remarks </a>
-->

特定のプラットフォームに固有の説明や備考がある場合には、次のような書式を使って読者に示してください。
<!--
Whenever there are explanations or remarks that are specific to a given platform, you should
use the following formatting style to show the reader that the section can be skipped depending on 
the targeted platform.
-->

次のスタイルクラスのいずれかを追加するだけです。
```
<div class="doc-android">Android に固有の情報</div>
<div class="doc-iOS">iOS に固有の情報</div>
<div class="doc-Windows">Windows に固有の情報</div>
<div class="doc-Linux">Linux に固有の情報</div>
```
<!--
To do this, simply add one of the following style classes:
```
<div class="doc-android">Android specific text</div>
<div class="doc-iOS">iOS specific text</div>
<div class="doc-Windows">Windows specific text</div>
<div class="doc-Linux">Linux specific text</div>
```
-->

## <a name="Notices"> 通知事項 </a>
<!--
## <a name="Notices"> Notices </a>
-->

重要な情報が欠けていたり、古くなっていたりする場合には、
ページの上部に通知を追加して、読者に知らせるようにしましょう。
<!--
Whenever your page is missing some key information or is out-of-date, you should  
add a notice at the top of the page to inform the reader.
-->

ページの上部に、次のタグのいずれかを追加するだけです。
```
<div class="doc-incomplete"/>  → 現在のページは不完全です。
<div class="doc-outofdate"/> → 現在のページは古くなっています。
```
<!--
To do this, simply add one of the following tag at the top of the page:
```
<div class="doc-incomplete"/>  -> The current page is incomplete
<div class="doc-outofdate"/> -> The current page is out-of-date
```
-->

これを記述すると、ページタイトルに自動的に 🔧 という文字が追加され、ユーザーに警告が表示されます。
<!--
Doing so will automatically add the 🔧 character to the page title to warn the user.
-->

## <a name="Media"> メディア </a>
<!--
## <a name="Media"> Media </a>
-->

次の構文を使って、記事にメディアを追加することができます。
> \!\[グラフィックコンポーザーダイアグラム\]\(media/graphics-compositor.png\)  
<!--
You can add media content to your articles using the following syntax:
> \!\[Graphics Compositor Diagram\]\(media/graphics-compositor.png\)  
-->

「グラフィックコンポーザーダイアグラム」は、画像ファイルが見つからなかった場合にフォールバックとして表示されるメッセージです。
'media/graphics-compositor.png'は、ファイルの相対パスです。
<!--
'Graphic Compositor Diagram' is the message displayed as fall-back if the image file can't be find.
'media/graphics-compositor.png' is the relative path to the file.
-->

メディアファイルを追加する際には、メディアファイルを作成する際に使用した「ソース」ファイルを、必ず一緒に含めるようにしてください。
これにより、エンジン側で変更があった場合でも、画像、ダイアグラム、ビデオを迅速に更新することができます。
ソースファイルとは、Photoshop ファイル、Visio ファイル、Adobe Premiere ファイルなどを指します。
私たちが使うメディアを作成する際には、できるだけ無料または主流のツールを使用するようにしてください。
<!--
For each media file added, we kindly ask you to always include the 'source' file used to create 
your media file next to it. This will allow us to quickly update the images, diagrams and videos 
after some changes happen on the engine side. By source files we mean photoshop files, visio files, 
adobe premiere files, etc. When you create your media, try as much as possible to use either free
or mainstream tools.
-->

メディアの作成時には、ソースデータのサイズを変更しないようにしましょう。
画面に合わせて縮小する必要がある場合でも、縮小されたメディアを自分で作成することは避けましょう。
代わりに、画像は元の解像度のままにしておき、ドキュメントシステムが自動的にユーザーのために適応させるようにしてください。
私たちがこれをお願いしているのは、ある時点でドキュメントの幅を変更したり、画像をズームインする方法を提供することになるかもしれないからです。
唯一の例外は、重たいビデオです。ページの読み込みを高速化するために、軽くされた動画を作成していただきたいと思います。
<!--
Avoid to resize the source data when you create your media. Even if your media needs to be scaled down
to fit the screen, avoid to create scaled-down media by yourself. Instead keep your image in the
original resolution and let the documentation system automatically adapt it for the user. We are asking 
this because at some point we may decide to change the width of our documentation or to provide 
a way to zoom into images. The only exceptions to this are heavy videos. We would like you to create 
a lighter version of the videos to speed up the loading of the pages.
-->

### <a name="Videos"> ビデオ </a>
<!--
### <a name="Videos"> Videos </a>
-->

できる限り、**MP4** 形式と **H.265** で暗号化された動画をご利用ください。

動画の編集におすすめのソフトは、Adobe After Effect です。
<!--
As much as possible, we ask you to use the **MP4** format and the **H265** encryption for videos.

Recommenced software to edit the videos is Adobe After Effect.
-->

### <a name="Images"> 画像 </a>
<!--
### <a name="Images"> Images </a>
-->

負荷の高い高解像度画像は **JPEG** 形式で、それ以外の画像（おそらくほとんどの画像がそうでしょう）は **PNG** 形式でお願いします。

ソースファイルは、Photoshop, GIMP, Paint.NET の形式が望ましいです。
<!--
We ask you to use the **JPEG** format for heavy high resolution images to reduce the load time and
and the **PNG** format all the others (probably most of the images).

For the source files, we prefer the following formats: Photoshop, GIMP, Paint.net.
-->

### <a name="Diagrams"> ダイアグラム </a>
<!--
### <a name="Diagrams"> Diagrams </a>
-->

ダイアグラム（図）は、**PNG** 形式、またはベクター画像で描画してください。
ドキュメントシステムは画像のサイズを自動的に調整しますので、サイズが調整されても図に含まれるテキストが読み取れるようにしてください。
図が大きすぎて縮小できない場合は、読者がクリックしたときにフルサイズで表示するようにしてください。
<!--
Diagrams should be rendered as **PNG** or vector image. Since the documentation system automatically 
adjust the size of the images be careful that all text that you include in diagrams are still
readable after size readjustment. When a diagram is too big and can't be reduced, allow the reader to 
click and open it in full size.
-->

次の構文を使用して、図をクリック可能にすることができます。
TODO virgile
<!--
You can make diagrams clickable using the following syntax:
TODO virgile
-->

図は、Visio などの標準的な画像編集ツールで作成してください。
<!--
Diagrams can be created with Visio or standard image editing tools.
-->

## <a name="Tables"> 表（テーブル） </a>
<!--
## <a name="Tables"> Tables </a>
-->

Markdown の構文に従って、ドキュメントに表（テーブル）を追加することができます。
表は情報を見やすくすることができますが、時には適切に表示されないことがあります。
そのため、ページを投稿する前に、スマートフォンのような小さな解像度の画面で試してみてください。
<!--
You can add tables to the documentation by following the markdown syntax. Tables can improve the
way information is display but sometimes does not properly scale down. So be sure to try your page
on small resolution screen like Smart-phones before submitting your page.
-->

## <a name="Lists"> 箇条書き（リスト） </a>
<!--
## <a name="Lists"> Lists </a>
-->

可能な限り、リストの項目には全文よりも短いフレーズを使用してください。
そうすることで読みやすくなり、読む速度がスピードアップします。
各項目は、大文字で始めてください。
<!--
When possible prefer a short phrase than a full sentence for each item of a list. This simplifies and
speeds the reading up. Start each item with a capital letter.
-->

ステップ・バイ・ステップのプロセスを示すとき、または順序が重要なときは、箇条書きリストではなく順序付きのリストを使用してください。
<!--
When showing a step by step process or when order matters use ordered list rather of bullet points.
-->

例：
> **適切**
> 
> リストの使い方：
> - それぞれの最初の文字を大文字にする
> - 短いフレーズで書く
> 
> **不適切**
> 
> リストの正しくない使い方：
> - 各項目の最初の文字を大文字にする必要があります。
> - 箇条書きを使うメリットを減らすような長文を書いてはいけません。
<!--
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
-->

## <a name="Headers"> ヘッダー </a>
<!--
## <a name="Headers"> Headers </a>
-->

ヘッダの作成には、Markdown の '#' 記号を使用します。
ページのトップタイトルのみ、h1 スタイルにしてください。
他のすべてのタイトルはサブタイトルであり、h2～ に整形してください。
<!--
The markdown '#' mark should be used to make headers. Only top title of the page should have the h1 style.
All other titles are sub-titles and should be formated into h2+.
-->

可能な限り、ヘッダー文は短くシンプルなものにしてください。
また、可能な限り、ヘッダーの末尾には動詞や名詞を使用してください。<!--訳注：原文では「冒頭」だが、日本語では「末尾」とした -->
現在分詞（動詞-ing形）は避けてください。
<!--
As much as possible header text should be short and simple. Whenever possible use a active verb 
or a noun to start your header. Avoid verbs in -ing form.
-->

例：
> \# トップタイトル： ヘッダーを書く方法  
> \___  
> \## サブタイトルを書く  
> \### サブサブフォルダを書く  
> \### サブサブフォルダを書く  
> \## サブフォルダを書く  
<!--
Example
> \# Top Title: How to write headers.  
> \___  
> \## Write a sub-Title
> \### Write a sub-sub-folder  
> \### Write a sub-sub-folder  
> \## Write a sub-folder  
-->

## <a name="Capitalization"> 大文字表記 </a>
<!--
## <a name="Capitalization"> Letter Capitalization </a>
-->

タイトルが完全な文章に近い場合には、最初の単語の最初の文字だけを大文字にしてください。
タイトルがいくつかの単語（1～5 個）で構成されている場合には、それぞれの単語の数文字を大文字にしてください。
<!--
When a title is close to a full sentence you should only capitalize first letter of first work.
When a title is just composed of a few words (1 to 5) you should capitalize the few letter of each 
word.
-->

ある事実を強く主張したいとき以外は、文中の単語をすべて大文字にしてはいけません。
一般的に使われる単語は次の通りです。  
ONLY, DO NOT, YES, NO, MAKE SURE TO, BE CAREFUL (TO/OF)
<!--
You should NEVER fully capitalize a word inside a sentence except when you want to strongly insist on 
a fact. Words commonly used for this are: ONLY, DO NOT, YES, NO, MAKE SURE TO, BE CAREFUL (TO/ OF).
-->
