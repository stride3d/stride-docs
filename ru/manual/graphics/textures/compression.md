# Texture compression
# Сжатие текстур

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Compressed textures** use up to 50% less space and are faster to load. Compression produces results similar to JPEG compression. The animation below was recorded with the camera positioned extremely close to the texture; at normal distances, the difference isn't noticable.
**Сжатые текстуры** занимают до 50 % меньше места и загружаются быстрее.  Сжатие дает результаты, аналогичные сжатию JPEG.  Анимация ниже была записана с камерой, расположенной очень близко к текстуре;  на нормальных расстояниях разница не заметна.

![Texture compression](media/texture-compression.gif)
![Сжатие текстур](media/texture-compression.gif)

For color textures, compression is best used for visually busy images, where the effects are less noticeable. You probably don't want to compress textures with fine edges, such as logos used in [splash screens](../../game-studio/splash-screen.md).
Для цветных текстур сжатие лучше всего использовать для визуально загруженных изображений, где эффекты менее заметны.  Вы, вероятно, не хотите сжимать текстуры с тонкими краями, такие как логотипы, используемые в [заставках](../../game-studio/splash-screen.md).

Compression converts the texture to a multiple of 4. If the texture isn't already a multiple of 4, Stride expands it.
Сжатие преобразует текстуру в число, кратное 4. Если текстура еще не кратна 4, Stride расширяет ее.

Compression removes data from the image based on the texture type:
Сжатие удаляет данные из изображения в зависимости от типа текстуры:

| Texture type | Compression 
|  Тип текстуры |  Сжатие
|--------------|----------
|--------------|----------
| Color        | Compresses all RGBA channels. If the `Alpha` property is set to `None` in the texture properties, the alpha channel is removed
|  Цвет |  Сжимает все каналы RGBA.  Если для свойства `Alpha` в свойствах текстуры установлено значение `None`, альфа-канал удаляется.
| Grayscale    | Removes all RGBA channels except red
|  Оттенки серого |  Удаляет все каналы RGBA, кроме красного.
| Normal map   | Removes the blue and alpha channels (alpha isn't used in normal maps anyway). The blue channel is reconstructed from the red and green channels (assuming a pixel has a vector length of 1)
|  Нормальная карта |  Удаляет синий и альфа-каналы (альфа все равно не используется в картах нормалей).  Синий канал восстанавливается из красного и зеленого каналов (при условии, что длина вектора пикселя равна 1).

* [Textures index](index.md)
* [Индекс текстур](index.md)
* [Normal maps](normal-maps.md)
* [Карты нормалей](normal-maps.md)
* [Materials](../materials/index.md)
* [Материалы](../materials/index.md)
* [Sprites](../../sprites/index.md)
* [Спрайты](../../sprites/index.md)
* [Render textures](../graphics-compositor/render-textures.md)
* [Рендеринг текстур](../graphics-compositor/render-textures.md)
