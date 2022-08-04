# Sprite fonts
# Спрайтовые шрифты

<span class="label label-doc-level">Intermediate</span>
<span class=

**Sprite fonts** take a TrueType font as an input (either a system font or a file you assign) and then create all the images (sprites) of characters (glyphs) for your game.
**Шрифты спрайтов** используют шрифт TrueType в качестве входных данных (либо системный шрифт, либо назначенный вами файл), а затем создают все изображения (спрайты) символов (глифов) для вашей игры.

It's often inefficient to render fonts directly. We usually want to create (rasterize) them just once, then only render the image of a letter character (eg A, a, B, C etc) every time we need it. This involves creating a sprite (billboarded rectangular image) of the character, which is displayed on the screen as a regular image. A text block would be a collection of sprites rendered as quads so all the characters are aligned and spaced properly.
Часто неэффективно отображать шрифты напрямую.  Обычно мы хотим создать (растеризовать) их только один раз, а затем отображать только изображение буквенного символа (например, A, a, B, C и т. д.) каждый раз, когда нам это нужно.  При этом создается спрайт (прямоугольное изображение рекламного щита) персонажа, который отображается на экране как обычное изображение.  Текстовый блок будет представлять собой набор спрайтов, отображаемых в виде четырехугольников, поэтому все символы выровнены и расположены правильно.

## Offline-rasterized sprite fonts
## Автономные растеризованные шрифты спрайтов

**Offline-rasterized** sprite fonts create (rasterize) a fixed number of characters (glyphs) of a certain size, and bake them into an atlas texture when building the assets for your game.
**Растеризованные в автономном режиме** спрайт-шрифты создают (растрируют) фиксированное количество символов (глифов) определенного размера и запекают их в текстуру атласа при создании ресурсов для вашей игры.

In the game, they can only be drawn with this size. Only the characters you specify can be displayed.
В игре их можно рисовать только с этим размером.  Могут отображаться только указанные вами символы.

### When to use offline-rasterized fonts
### Когда использовать автономные растеризованные шрифты

Use offline-rasterized fonts when:
Используйте автономные растеризованные шрифты, когда:

- you use a font of known size with a known character set in your game
- вы используете в игре шрифт известного размера с известным набором символов

- you need anti-aliasing on your fonts
- вам нужно сглаживание шрифтов

- your UI is only used in fullscreen mode
- ваш интерфейс используется только в полноэкранном режиме

Do **not** use offline-rasterized fonts when:
**Не** используйте офлайн-растрированные шрифты, когда:

- your UI is rendered as part of the 3D world scene
- ваш пользовательский интерфейс визуализируется как часть 3D-сцены мира

- you have a varied or unknown number of font sizes and character sets
- у вас разное или неизвестное количество размеров шрифта и наборов символов

### Offline-rasterized sprite font properties
### Свойства шрифта спрайта, растеризованного в автономном режиме

![media/fonts-1.png](media/fonts-1.png) 
![медиа/шрифты-1.png](медиа/шрифты-1.png)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|-------------------
|------------------------------------
| Font Source                 | System (installed on this machine) or from file. The system fonts can also take **Bold** and *Italic* options.
|  Источник шрифта |  Системный (установлен на этой машине) или из файла.  Системные шрифты также могут принимать значения **Жирный** и *Курсив*.
| Font Type                   | Offline Rasterized  
|  Тип шрифта |  Офлайн растеризованный
| Size (in pixels)            | The font is baked with this size. No other font size can be displayed. 
|  Размер (в пикселях) |  Шрифт запекается с этим размером.  Никакой другой размер шрифта не может отображаться.
| Character set               | (Optional) A text file containing all characters which need to be baked. 
|  Набор символов |  (Необязательно) Текстовый файл, содержащий все символы, которые необходимо запечь.
| Character regions           | Code for regions of characters which need to be baked. For example, (32 - 127) is a region sufficient for ASCII character sets.
|  Регионы символов |  Код областей символов, которые необходимо запечь.  Например, (32 - 127) — это область, достаточная для наборов символов ASCII.
| Anti alias                  | None, Grayscale or [ClearType ](http://alienryderflex.com/sub_pixel/)   
|  Анти-псевдоним |  Нет, Оттенки серого или [ClearType] (http://alienryderflex.com/sub_pixel/)
| Premultiply                 | If the alpha should be premultiplied. Default is yes to match the rest of the engine pipeline.   
|  Предумножить |  Если альфа должна быть предварительно умножена.  По умолчанию установлено значение «да», чтобы соответствовать остальной части конвейера движка.
| Default character           | Missing characters default to this when rendered. The default code is 32 which is space. 
|  Символ по умолчанию |  Отсутствующие символы по умолчанию используются при рендеринге.  Код по умолчанию — 32, это пробел.

## Runtime-rasterized sprite fonts
## Спрайтовые шрифты, растеризованные во время выполнения

**Runtime-rasterized** sprite fonts create (rasterize) a varied number of characters (glyphs) of any size and bake them into an atlas texture **on demand**.
**Растеризованные во время выполнения** спрайтовые шрифты создают (растрируют) различное количество символов (глифов) любого размера и запекают их в текстуру атласа **по запросу**.

This function is invoked at runtime when you change the font size or request characters that haven't been drawn before.
Эта функция вызывается во время выполнения, когда вы меняете размер шрифта или запрашиваете символы, которые раньше не рисовались.

Under the hood, the runtime-rasterized fonts use similar atlas textures to the offline-rasterized fonts. This means that if you have three different font sizes, they take about three times more memory than a single font size. The font sizes are also taken into account.
Под капотом растеризованные во время выполнения шрифты используют текстуры атласа, аналогичные офлайн-растеризованным шрифтам.  Это означает, что если у вас есть три разных размера шрифта, они занимают примерно в три раза больше памяти, чем один размер шрифта.  Размер шрифта также учитывается.

### When to use runtime-rasterized fonts
### Когда использовать растеризованные во время выполнения шрифты

Use runtime-rasterized fonts when:
Используйте растеризованные во время выполнения шрифты, когда:

- you need multiple sizes for your font or don't know which characters you need
- вам нужно несколько размеров шрифта или вы не знаете, какие символы вам нужны

- the number of possible characters in the font greatly outnumbers the number of characters you need to display at runtime (eg Japanese or Chinese, which use thousands of characters)
- количество возможных символов в шрифте значительно превышает количество символов, которое необходимо отображать во время выполнения (например, японский или китайский, которые используют тысячи символов)

- you need anti-aliasing on your fonts
- вам нужно сглаживание шрифтов

- your UI is only used in fullscreen mode
- ваш интерфейс используется только в полноэкранном режиме

Do **not** use runtime-rasterized fonts when:
**Не** используйте растеризованные во время выполнения шрифты, когда:

- your UI is rendered as part of the 3D world scene
- ваш пользовательский интерфейс визуализируется как часть 3D-сцены мира

- you only need one or two known sizes for a small character set
- вам нужен только один или два известных размера для небольшого набора символов

- you have a scaling text (as runtime-rasterized fonts will recreate every single font size)
- у вас есть масштабируемый текст (поскольку растеризованные во время выполнения шрифты будут воссоздавать каждый отдельный размер шрифта)

### Runtime-rasterized sprite font properties
### Свойства шрифта спрайта, растеризованного во время выполнения

![media/fonts-2.png](media/fonts-2.png)
![медиа/шрифты-2.png](медиа/шрифты-2.png)

| Property                    | Description 
|  Недвижимость |  Описание
|-----------------------------|-------------
|-----------------------------|--------------
| Font Source                 | System (installed on this machine) or from file. The system fonts can also take **Bold** and *Italic* options.
|  Источник шрифта |  Системный (установлен на этой машине) или из файла.  Системные шрифты также могут принимать значения **Жирный** и *Курсив*.
| Font Type                   | Runtime Rasterized  
|  Тип шрифта |  Растрированный
| Default Size (in pixels)    | If size isn't specified the text is rendered with this one.   
|  Размер по умолчанию (в пикселях) |  Если размер не указан, текст отображается с этим.
| Anti alias                  | None, Grayscale or [ClearType ](http://alienryderflex.com/sub_pixel/) 
|  Анти-псевдоним |  Нет, Оттенки серого или [ClearType] (http://alienryderflex.com/sub_pixel/)
| Default character           | Missing characters will default to this one when rendered. The default code is 32, which is space.   
|  Символ по умолчанию |  Отсутствующие символы по умолчанию будут соответствовать этому при рендеринге.  Код по умолчанию — 32, то есть пробел.

## Signed distance field sprite fonts
## Шрифты спрайтов поля расстояния со знаком

**Signed distance field** (SDF) fonts use an entirely different technique to render fonts. Rather than rasterize the color of the character on the sprite, they output the distance of the current pixel to the closest edge of the glyph.
Шрифты **Signed Distance Field** (SDF) используют совершенно другую технику для отображения шрифтов.  Вместо того, чтобы растрировать цвет символа на спрайте, они выводят расстояние от текущего пикселя до ближайшего края глифа.

The distance is positive if the pixel is **inside** the glyph boundaries, and negative if the pixel is **outside** the glyph (hence the name signed). 
Расстояние является положительным, если пиксель находится **внутри** границ глифа, и отрицательным, если пиксель находится **вне** глифа (отсюда и название sign).

When rendering, check the distance and output a white pixel if it's positive or `0`, and a black pixel if it's negative. This allows very sharp and clean edges to be rendered even under magnification (which otherwise makes traditional sprites look pixelated).
При рендеринге проверьте расстояние и выведите белый пиксель, если он положительный или `0`, и черный пиксель, если он отрицательный.  Это позволяет отображать очень четкие и четкие края даже при увеличении (в противном случае традиционные спрайты выглядят пикселизированными).

The image below compares SDF fonts and the offline-rasterized fonts under magnification:
На изображении ниже сравниваются шрифты SDF и растеризованные в автономном режиме шрифты при увеличении:

![media/fonts-5.png](media/fonts-5.png) 
![медиа/шрифты-5.png](медиа/шрифты-5.png)

### When to use SDF fonts
### Когда использовать шрифты SDF

Use SDF fonts when:
Используйте шрифты SDF, когда:

- your UI is rendered as part of the 3D world scene or fullscreen (SDF works well for both cases)
- ваш пользовательский интерфейс отображается как часть 3D-сцены мира или в полноэкранном режиме (SDF хорошо работает в обоих случаях)

- you have a scaling text or expect the user to be able to zoom in
- у вас есть масштабируемый текст или вы ожидаете, что пользователь сможет увеличить масштаб

- you require multiple sizes for your font
- вам нужно несколько размеров для вашего шрифта

- you have very large font sizes (SDF consumes less memory than runtime-rasterized fonts)
- у вас очень большие размеры шрифтов (SDF потребляет меньше памяти, чем растеризованные во время выполнения шрифты)

Do **not** use SDF fonts when:
**Не** используйте шрифты SDF, когда:

- you need anti-aliasing on your fonts (SDF fonts currently don't support it)
- вам нужно сглаживание ваших шрифтов (шрифты SDF в настоящее время не поддерживают его)

- you only require one or two known sizes for a small character set (better use offline-rasterized font)
- вам требуется только один или два известных размера для небольшого набора символов (лучше использовать автономный растеризованный шрифт)

- the number of possible characters in the font greatly outnumbers the number of characters you need to display at runtime (eg Japanese or Chinese, which use thousands of characters). If a runtime-rasterized font is not an option (eg because of scaling), make sure you bake every character you might need, or they won't be displayed.
- количество возможных символов в шрифте значительно превышает количество символов, которое необходимо отображать во время выполнения (например, японский или китайский, которые используют тысячи символов).  Если растеризованный во время выполнения шрифт не подходит (например, из-за масштабирования), убедитесь, что вы запечете все символы, которые могут вам понадобиться, иначе они не будут отображаться.

### SDF properties
### Свойства SDF

![media/fonts-3.png](media/fonts-3.png) 
![медиа/шрифты-3.png](медиа/шрифты-3.png)

| Property                    | Description  
|  Недвижимость |  Описание
|-----------------------------|--------------
|-----------------------------|---------------
| Font Source                 | System (installed on this machine) or from file. The system fonts can also choose **Bold** and *Italic* options.
|  Источник шрифта |  Системный (установлен на этой машине) или из файла.  Системные шрифты также могут выбирать варианты **Жирный** и *Курсив*.
| Font Type                   | Offline Rasterized    
|  Тип шрифта |  Офлайн растеризованный
| Size (in pixels)            | The font will be baked with this size. All font sizes can still be displayed. Bigger size usually results in better quality, and generally you want to keep this at 20 or more to avoid visual glitches. 
|  Размер (в пикселях) |  Шрифт будет запечен с этим размером.  Все размеры шрифта могут отображаться.  Большой размер обычно приводит к лучшему качеству, и, как правило, вы хотите оставить его на уровне 20 или более, чтобы избежать визуальных сбоев.
| Character set               | (Optional) A text file containing all characters which need to be baked.   
|  Набор символов |  (Необязательно) Текстовый файл, содержащий все символы, которые необходимо запечь.
| Character regions           | Code for regions of characters which need to be baked. For example (32 - 127) is a region sufficient for ASCII character sets. 
|  Регионы символов |  Код областей символов, которые необходимо запечь.  Например, (32 - 127) — это область, достаточная для наборов символов ASCII.
| Default character           | Missing characters will default to this one when rendered. The default code is 32 which is space.
|  Символ по умолчанию |  Отсутствующие символы по умолчанию будут соответствовать этому при рендеринге.  Код по умолчанию — 32, это пробел.

## Texture atlases for different sprite fonts
## Текстурные атласы для разных шрифтов спрайтов

### Offline rasterized
### Оффлайн растеризован

![media/fonts-6.png](media/fonts-6.png) 
![медиа/шрифты-6.png](медиа/шрифты-6.png)

The offline-rasterized sprite font bakes all requested characters once in a grayscale texture. If you zoom in, you'll see that they are pixelated. The font has a fixed size and doesn't work well for scaling text.
Автономный растеризованный спрайтовый шрифт запекает все запрошенные символы один раз в текстуре в градациях серого.  Если вы увеличите масштаб, то увидите, что они пикселизированы.  Шрифт имеет фиксированный размер и плохо подходит для масштабирования текста.

### Runtime rasterized
### Время выполнения растеризовано

![media/fonts-8.png](media/fonts-8.png) 
![медиа/шрифты-8.png](медиа/шрифты-8.png)

The runtime-rasterized sprite font only bakes (rasterizes) the characters that are drawn in the game. The initial atlas texture is intentionally bigger so it can hold more characters of potentially different sizes before it needs resizing.
Спрайт-шрифт, растеризованный во время выполнения, запекает (растрирует) только те символы, которые нарисованы в игре.  Исходная текстура атласа намеренно больше, чтобы она могла содержать больше символов потенциально разных размеров, прежде чем потребуется изменение размера.

### Signed distance field
### Поле расстояния со знаком

![media/fonts-7.png](media/fonts-7.png) 
![медиа/шрифты-7.png](медиа/шрифты-7.png)

Like the offline-rasterized sprite font, the signed distance field sprite font bakes all requested characters once. The major difference is that it encodes distances from the character lines rather than actual color, and it uses all three channels' RGB. You can still recognize each character, but a special shader is needed to render them properly. The upside is that the edges remain sharp, even under magnification.
Как и шрифт спрайта, растеризованный в автономном режиме, шрифт спрайта поля расстояния со знаком запекает все запрошенные символы один раз.  Основное отличие состоит в том, что он кодирует расстояния от строк символов, а не фактический цвет, и использует все три канала RGB.  Вы по-прежнему можете распознавать каждый символ, но для их правильной визуализации необходим специальный шейдер.  Положительным моментом является то, что края остаются четкими даже при увеличении.

## Further reading
## Дальнейшее чтение

* [Paper on how distance fields and multi-channel distance fields in particular work](https://dspace.cvut.cz/bitstream/handle/10467/62770/F8-DP-2015-Chlumsky-Viktor-thesis.pdf)
* [Документ о том, как работают поля расстояний и, в частности, многоканальные поля расстояний] (https://dspace.cvut.cz/bitstream/handle/10467/62770/F8-DP-2015-Chlumsky-Viktor-thesis.pdf)

* [Stack Exchange thread outlining the differences between single-channel SDF and multi-channel SDF fonts](https://computergraphics.stackexchange.com/questions/306/sharp-corners-with-signed-distance-fields-fonts)
* [Ветка Stack Exchange с изложением различий между одноканальными шрифтами SDF и многоканальными шрифтами SDF] (https://computergraphics.stackexchange.com/questions/306/sharp-corners-with-signed-distance-fields-fonts)
