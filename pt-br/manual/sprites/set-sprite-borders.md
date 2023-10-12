# Definir bordas de sprite

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>

** As bordas privadas ** são áreas que não deformam quando escalam o sprite. Estes são frequentemente úteis para sprites usados para elementos [UI](../ui/ui-libraries.md) como botões de menu. Você só pode definir bordas de sprite para sprites definidos para o tipo de folha **UI**.

| Original sprite | Escalada sem fronteiras | Escalada com fronteiras |
|----------|---|---|
| ![Escritura original](media/original-sprite.png) | ![ Com fronteira](media/sprite-stretched-no-border.png) | ![ Com fronteira](media/sprite-stretched-with-border.png) |
|  | As bordas são deformadas | Bordas não deformadas |


### Definir bordas de sprite

1. No Editor Sprite, certifique-se de que o tipo **sheet** está definido como **UI**.

   ![ Escolha UI](media/select-type-UI.png)

   > [!Note]
   > Isso não tem efeito sobre como o sprite é renderizado em tempo de execução, mas permite definir propriedades ligeiramente diferentes, incluindo bordas de sprite.

2. A partir da lista **Sprites**, selecione o sprite que deseja adicionar bordas de sprite.

3. Certifique-se de que a região de textura para o sprite está correta. Para obter informações sobre como fazer isso, veja [Edit sprites](edit-sprites.md).

   ![Selecione a região de textura ](media/select-starbox.png)

4. Na barra de ferramentas do Editor Sprite, selecione a ferramenta **Sprite border resize**.

   ![Border redimensionar ferramenta](media/border-resize-tool-icon.png)

5. Arraste as bordas de sprite em posição.

<p>
    <video autoplay loop class="responsive-video" poster="media\adjust-sprite-border.png">
       <source src="media\adjust-sprite-border.mp4" type="video/mp4">
    </video>
</p>

> [!Note]
> Por padrão, as bordas de sprite coincidem com a região de textura sprite.

> [!TIP]
> Você pode fazer zoom dentro e fora usando **Ctrl + mousewheel** para fazer seleções precisas.

> [!TIP]
>
> Para controle de ajuste fino sobre as bordas de sprite, ajustando one-by-one no **Property Grid**
>
> ![Ajustar bordas sprite da grade de propriedade](media/adjust-sprite-border-from-property-grid.png)

## Bloquear as bordas de sprite

Por padrão, as bordas de sprite se movem enquanto você redimensiona a região de textura. Para evitar que isso aconteça, clique em ** Lock as bordas sprite** na barra de ferramentas.

![Lock icon](media/lock-icon.png)

> [!Note]
> As bordas Sprite sempre ficam dentro da região da textura.

## Ver também

* [Folhas de sprite de importação](import-sprite-sheets.md)
* [Editar sprites](edit-sprites.md)
* [Use sprites](use-sprites.md)
* [UI](../ui/index.md)