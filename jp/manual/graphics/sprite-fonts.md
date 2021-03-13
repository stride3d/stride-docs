# スプライト フォント
<!--
# Sprite fonts
-->

<span class="label label-doc-level">中級</span>
<!--
<span class="label label-doc-level">Intermediate</span>
-->

**スプライト フォント**は、入力として TrueType フォント（システムフォントまたはユーザーが割り当てたファイル）を受け取り、ゲームの文字（グリフ）のすべての画像（スプライト）を作成します。
<!--
**Sprite fonts** take a TrueType font as an input (either a system font or a file you assign) and then create all the images (sprites) of characters (glyphs) for your game.
-->

フォントを直接レンダリングすることは大体非効率です。
通常、フォントの作成（ラスタライズ）は一度だけにして、あとは必要なときに文字（例：A、a、B、Cなど）の画像をレンダリングするだけにしたいと考えます。
そのためには、文字のスプライト（ビルボード化された長方形の画像）を作成し、それを通常の画像として画面に表示するようにします。
テキストブロックは、すべての文字が適切な位置と間隔で配置されるように、四角形としてレンダリングされたスプライトの集合体となります。
<!--
It's often inefficient to render fonts directly. We usually want to create (rasterize) them just once, then only render the image of a letter character (eg A, a, B, C etc) every time we need it. This involves creating a sprite (billboarded rectangular image) of the character, which is displayed on the screen as a regular image. A text block would be a collection of sprites rendered as quads so all the characters are aligned and spaced properly.
-->

## オフライン ラスタライズ スプライトフォント
<!--
## Offline-rasterized sprite fonts
-->

**オフライン ラスタライズ** スプライトフォントは、一定の大きさの文字（グリフ）を一定数作成（ラスタライズ）し、ゲームのアセットを構築する際に[アトラス テクスチャー](https://en.wikipedia.org/wiki/Texture_atlas)に[ベイク](https://entry.cgworld.jp/terms/%E3%83%99%E3%82%A4%E3%82%AF%E5%87%A6%E7%90%86.html)します。
<!--
**Offline-rasterized** sprite fonts create (rasterize) a fixed number of characters (glyphs) of a certain size, and bake them into an atlas texture when building the assets for your game.
-->

なお、ゲームでは、このサイズでしか描けません。また、指定した文字しか表示されません。
<!--
In the game, they can only be drawn with this size. Only the characters you specify can be displayed.
-->

### オフライン ラスタライズ フォントを使用するケース
<!--
### When to use offline-rasterized fonts
-->

オフライン ラスタライズ フォントは、以下のような場合に使用します。

- 決まったサイズのフォントと決まった文字セットをゲームで使用する場合

- フォントにアンチエイリアスが必要な場合

- UI がフルスクリーンモードでのみ使用される場合

<!--
Use offline-rasterized fonts when:

- you use a font of known size with a known character set in your game

- you need anti-aliasing on your fonts

- your UI is only used in fullscreen mode
-->

オフライン ラスタライズ フォントは、以下のような場合に**使用すべきではありません**。

- UI が3D ワールドシーンの一部としてレンダリングされる場合

- フォントサイズや文字セットの数にばらつきがあったり不明である場合

<!--
Do **not** use offline-rasterized fonts when:

- your UI is rendered as part of the 3D world scene

- you have a varied or unknown number of font sizes and character sets
-->

### オフライン ラスタライズ スプライトフォントのプロパティ
<!--
### Offline-rasterized sprite font properties
-->

![media/fonts-1.png](media/fonts-1.png) 

| プロパティ                   | 説明
|-----------------------------|-------------------
| Font Source                 | （実行しているマシンにインストールされている）システムまたはファイルから作成します。システムフォントには、**Bold（太字）** と *Italic（斜体）* のオプションもあります。
| Font Type                   | 'Offline Rasterized' を指定します。
| Size (in pixels)            | このサイズでフォントをベイクします。それ以外のフォントサイズを表示することはできません。
| Character set               | （オプション）ベイクする必要のあるすべての文字を含むテキストファイル。
| Character regions           | ベイクが必要な文字の範囲を示すコード。例えば、(32 - 127) は ASCII 文字セットには十分な範囲です。
| Anti alias                  | None, Grayscale, [ClearType](http://alienryderflex.com/sub_pixel/)のいずれかを指定します。
| Premultiply                 | アルファを事前に乗算する場合にオンにします。既定は、他のエンジンパイプラインに合わせるため、オンです。 
| Default character           | 欠落している文字は、レンダリング時には既定のこのコードで表示されます。既定のコードは 32 で、これはスペース文字を意味します。

<!--
| Property                    | Description
|-----------------------------|-------------------
| Font Source                 | System (installed on this machine) or from file. The system fonts can also take **Bold** and *Italic* options.
| Font Type                   | Offline Rasterized  
| Size (in pixels)            | The font is baked with this size. No other font size can be displayed. 
| Character set               | (Optional) A text file containing all characters which need to be baked. 
| Character regions           | Code for regions of characters which need to be baked. For example, (32 - 127) is a region sufficient for ASCII character sets.
| Anti alias                  | None, Grayscale or [ClearType ](http://alienryderflex.com/sub_pixel/)   
| Premultiply                 | If the alpha should be premultiplied. Default is yes to match the rest of the engine pipeline.   
| Default character           | Missing characters default to this when rendered. The default code is 32 which is space. 
-->

## ランタイム ラスタライズ スプライト フォント
<!--
## Runtime-rasterized sprite fonts
-->

**ランタイム ラスタライズ** スプライトフォントは、任意のサイズの様々な数の文字（グリフ）を作成（ラスタライズ）し、**必要に応じて**アトラステクスチャーにベイクします。
<!--
**Runtime-rasterized** sprite fonts create (rasterize) a varied number of characters (glyphs) of any size and bake them into an atlas texture **on demand**.
-->

この作業は、フォントサイズを変更したり、まだ描かれていない文字を要求したときに、実行時に行われます。
<!--
This function is invoked at runtime when you change the font size or request characters that haven't been drawn before.
-->

内部では、ランタイム ラスタライズ フォントは、オフライン ラスタライズ フォントと同様のアトラステクスチャーを使用しています。つまり、3 つの異なるフォントサイズがある場合、1 つのフォントサイズに比べて約 3 倍のメモリを消費することになります。フォントサイズも考慮されます。
<!--
Under the hood, the runtime-rasterized fonts use similar atlas textures to the offline-rasterized fonts. This means that if you have three different font sizes, they take about three times more memory than a single font size. The font sizes are also taken into account.
-->

### ランタイム ラスタライズ フォントを使用するケース
<!--
### When to use runtime-rasterized fonts
-->

ランタイム ラスタライズ フォントは、以下のような場合に使用します。

- フォントに複数のサイズが必要な場合や、どの文字が必要かわからない場合

- フォントに含まれる可能な文字数が、実行時に表示する必要のある文字数を大幅に上回る場合（数千文字を使用する日本語や中国語など）

- フォントにアンチエイリアスが必要な場合

- UI がフルスクリーンモードでのみ使用される場合

<!--
Use runtime-rasterized fonts when:

- you need multiple sizes for your font or don't know which characters you need

- the number of possible characters in the font greatly outnumbers the number of characters you need to display at runtime (eg Japanese or Chinese, which use thousands of characters)

- you need anti-aliasing on your fonts

- your UI is only used in fullscreen mode
-->

ランタイム ラスタライズ フォントは、以下のような場合に**使用すべきではありません**。

- UI が 3D ワールドシーンの一部としてレンダリングされる場合

- 小さな文字セットでで 1 つか 2 つの既知のサイズしか必要としない場合

- スケーリングテキストがある場合（ランタイム ラスタライズ フォントはすべてのフォントサイズを生成するため）

<!--
Do **not** use runtime-rasterized fonts when:

- your UI is rendered as part of the 3D world scene

- you only need one or two known sizes for a small character set

- you have a scaling text (as runtime-rasterized fonts will recreate every single font size)
-->

### ランタイム ラスタライズ スプライト フォントのプロパティ
<!--
### Runtime-rasterized sprite font properties
-->

![media/fonts-2.png](media/fonts-2.png)

| プロパティ                   | 説明
|-----------------------------|-------------
| Font Source                 | （実行しているマシンにインストールされている）システムまたはファイルから作成します。システムフォントには、**Bold（太字）** と *Italic（斜体）* のオプションもあります。
| Font Type                   | 'Runtime Rasterized' を指定します。
| Default Size (in pixels)    | サイズが指定されていない場合、テキストはこのサイズでレンダリングされます。 
| Anti alias                  | None, Grayscale, [ClearType ](http://alienryderflex.com/sub_pixel/) のいずれか。
| Default character           | 欠落している文字は、レンダリング時には既定のこのコードで表示されます。既定のコードは 32 で、これはスペース文字を意味します。

<!--
| Property                    | Description 
|-----------------------------|-------------
| Font Source                 | System (installed on this machine) or from file. The system fonts can also take **Bold** and *Italic* options.
| Font Type                   | Runtime Rasterized  
| Default Size (in pixels)    | If size isn't specified the text is rendered with this one.   
| Anti alias                  | None, Grayscale or [ClearType ](http://alienryderflex.com/sub_pixel/) 
| Default character           | Missing characters will default to this one when rendered. The default code is 32, which is space.   
-->

## SDF（Signed distance field）スプライトフォント
<!--
## Signed distance field sprite fonts
-->

**Signed Distance Field**（SDF）フォントは、フォントのレンダリングに全く異なる手法を用います。
スプライト上の文字の色をラスタライズするのではなく、現在のピクセルからグリフの最も近い輪郭までの距離を算出します。
<!--
**Signed distance field** (SDF) fonts use an entirely different technique to render fonts. Rather than rasterize the color of the character on the sprite, they output the distance of the current pixel to the closest edge of the glyph.
-->

この距離は、ピクセルがグリフの境界の**内側**にある場合は正の値、**外側**にある場合は負の値となります（これが signed という名前の由来です）。
<!--
The distance is positive if the pixel is **inside** the glyph boundaries, and negative if the pixel is **outside** the glyph (hence the name signed). 
-->

レンダリングの際には、距離をチェックして、正または `0` の場合は白、負の場合は黒のピクセルを出力します。これにより、拡大表示時でも非常にシャープできれいな輪郭をレンダリングすることができます（従来のスプライトではピクセルが見えてしまいます）。
<!--
When rendering, check the distance and output a white pixel if it's positive or `0`, and a black pixel if it's negative. This allows very sharp and clean edges to be rendered even under magnification (which otherwise makes traditional sprites look pixelated).
-->

次の画像は、SDF フォントとオフライン ラスタライズ フォントを拡大して比較したものです。
<!--
The image below compares SDF fonts and the offline-rasterized fonts under magnification:
-->

![media/fonts-5.png](media/fonts-5.png) 

### SDF フォントを使用するケース
<!--
### When to use SDF fonts
-->

SDF フォントは、以下のような場合に使用します。

- UI を 3D ワールドシーンの一部としてレンダリングするか、フルスクリーンで使用する（SDF はどちらの場合にも有効です）。

- スケーリングテキストを使用している場合や、ユーザーがズームインできるようにする場合

- フォントに複数のサイズが必要な場合

- フォントサイズが非常に大きい場合（SDF　はランタイム　ラスタライズ　フォントよりもメモリ消費量が少ない)

<!--
Use SDF fonts when:

- your UI is rendered as part of the 3D world scene or fullscreen (SDF works well for both cases)

- you have a scaling text or expect the user to be able to zoom in

- you require multiple sizes for your font

- you have very large font sizes (SDF consumes less memory than runtime-rasterized fonts)
-->

SDF フォントは、以下のような場合に**使用すべきではありません**。

- フォントにアンチエイリアシングが必要な場合（今のところ、SDF フォントはアンチエイリアシングには対応していません）

- 小さな文字セットで必要な既知のサイズが 1 つか 2 つしかない場合（オフライン ラスタライズ フォントを使用した方がよい）

- フォントに含まれる文字の数が、実行時に表示する必要のある文字の数を大幅に上回る場合（数千の文字を使用する日本語や中国語など）。ランタイム ラスタライズ フォントが選択できない場合（スケーリングのためなど）、必要となる可能性のあるすべての文字をベイクしておかなければ表示できません。

<!--
Do **not** use SDF fonts when:

- you need anti-aliasing on your fonts (SDF fonts currently don't support it)

- you only require one or two known sizes for a small character set (better use offline-rasterized font)

- the number of possible characters in the font greatly outnumbers the number of characters you need to display at runtime (eg Japanese or Chinese, which use thousands of characters). If a runtime-rasterized font is not an option (eg because of scaling), make sure you bake every character you might need, or they won't be displayed.
-->

### SDF のプロパティ
<!--
### SDF properties
-->

![media/fonts-3.png](media/fonts-3.png) 

| プロパティ                   | 説明
|-----------------------------|--------------
| Font Source                 | （実行しているマシンにインストールされている）システムまたはファイルから作成します。システムフォントには、**Bold（太字）** と *Italic（斜体）* のオプションもあります。
| Font Type                   | 'Signed Distance Field' を指定します。
| Size (in pixels)            | このサイズのフォントがベイクされます。あらゆるサイズのフォントを表示することができます。通常、サイズが大きいほど品質が向上しますが、視覚的な不具合を避けるために、一般的には20 以上のサイズを維持することをお勧めします。
| Character set               | （オプション）ベイクする必要のあるすべての文字を含むテキストファイル。  
| Character regions           | ベイクが必要な文字の範囲を示すコード。例えば、(32-127) は、ASCII 文字セットには十分な範囲です。
| Default character           | 欠落している文字は、レンダリング時には既定のこのコードで表示されます。既定のコードは 32 で、これはスペース文字を意味します。

<!--
| Property                    | Description  
|-----------------------------|--------------
| Font Source                 | System (installed on this machine) or from file. The system fonts can also choose **Bold** and *Italic* options.
| Font Type                   | Offline Rasterized    
| Size (in pixels)            | The font will be baked with this size. All font sizes can still be displayed. Bigger size usually results in better quality, and generally you want to keep this at 20 or more to avoid visual glitches. 
| Character set               | (Optional) A text file containing all characters which need to be baked.   
| Character regions           | Code for regions of characters which need to be baked. For example (32 - 127) is a region sufficient for ASCII character sets. 
| Default character           | Missing characters will default to this one when rendered. The default code is 32 which is space.
-->

## スプライトフォントのテクスチャーアトラス
<!--
## Texture atlases for different sprite fonts
-->

### オフライン ラスタライズ
<!--
### Offline rasterized
-->

![media/fonts-6.png](media/fonts-6.png) 

オフライン ラスタライズ スプライトフォントは、要求されたすべての文字を一度にグレースケールのテクスチャーにベイクします。拡大するとカクカクしているのがわかります。このフォントはサイズが固定されていて、テキストの拡大縮小には適していません。
<!--
The offline-rasterized sprite font bakes all requested characters once in a grayscale texture. If you zoom in, you'll see that they are pixelated. The font has a fixed size and doesn't work well for scaling text.
-->

### ランタイム ラスタライズ
<!--
### Runtime rasterized
-->

![media/fonts-8.png](media/fonts-8.png) 

ランタイム ラスタライズ スプライトフォントは、ゲーム中に描かれる文字だけをベイク（ラスタライズ）します。初期のアトラステクスチャーは、サイズ変更が必要になるまでに潜在的に異なるサイズの文字をより多く格納できるよう、意図的に大きくなっています。
<!--
The runtime-rasterized sprite font only bakes (rasterizes) the characters that are drawn in the game. The initial atlas texture is intentionally bigger so it can hold more characters of potentially different sizes before it needs resizing.
-->

### SDF（Signed distance field）
<!--
### Signed distance field
-->

![media/fonts-7.png](media/fonts-7.png) 

オフライン ラスタライズ スプライト フォントと同様に、SDF スプライトフォントは、要求されたすべての文字を一度にベイクします。大きな違いは、実際の色ではなく、文字の線からの距離をエンコードすることと、3 つのチャンネル RGB のすべてを使用することです。各文字を認識することはできますが、適切にレンダリングするには特別なシェーダーが必要です。また、拡大しても輪郭が鮮明なままであることも良い点です。
<!--
Like the offline-rasterized sprite font, the signed distance field sprite font bakes all requested characters once. The major difference is that it encodes distances from the character lines rather than actual color, and it uses all three channels' RGB. You can still recognize each character, but a special shader is needed to render them properly. The upside is that the edges remain sharp, even under magnification.
-->

## 参考資料
<!--
## Further reading
-->

* [Paper on how distance fields and multi-channel distance fields in particular work](https://dspace.cvut.cz/bitstream/handle/10467/62770/F8-DP-2015-Chlumsky-Viktor-thesis.pdf)

* [Stack Exchange thread outlining the differences between single-channel SDF and multi-channel SDF fonts](https://computergraphics.stackexchange.com/questions/306/sharp-corners-with-signed-distance-fields-fonts)
