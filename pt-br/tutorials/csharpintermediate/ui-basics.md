# UI Basics

Este é o primeiro O tutorial intermediário C# cobre os conceitos básicos de criação de interface do usuário com Stride.

## Explicação

Vamos aprender sobre o editor de interface do usuário, acessando elementos de página de interface do usuário e até como configurar a interface do usuário inteiramente por código. O editor Stride vem com um editor de interface do usuário que podemos utilizar para criar páginas de interface do usuário. Podemos então adicionar elementos de interface do usuário a essas páginas, como botões e campos de texto.

Esses elementos de IU podem ser referenciados em código, para que possam configurar eventos como `button-clicked` ou `text-changed`.

> [!Vídeo https://www.youtube.com/embed/rB5duwfs1mU]

> [!Vídeo https://www.youtube.com/embed/NnnbHn9LQU]

## Stride editor UI páginas
O código abaixo procurará um componente Page que foi adicionado à entidade atual. Nessa página buscamos elementos de interface do usuário como botões e campos de texto. Nós do que dizer a esses elementos de interface do usuário o que acontece quando clicamos neles, ou que algo precisa ser feito quando um valor de texto muda.
[!code-csharp[editorpages](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/01_UI-Basics/UIByEditor.cs)]

## Páginas UI feitas inteiramente por código
Este script irá criar tudo a partir do zero: uma página UI, um stackpanel, um botão, um campo de texto e a lógica interativa por trás dele.
[!code-csharp[uibycode](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/01_UI-Basics/UIByCode.cs)]
