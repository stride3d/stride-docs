# Carregar conteúdo
Você pode encontrar esta amostra no projeto tutorial: **Menu** → **Loading content from code**

## Explicação
Este tutorial C# Beginner abrange como carregar conteúdo do código.

Ativos como modelos, texturas, som etc podem ser carregados durante o tempo de execução. Neste ponto já não falamos de bens, mas de 'conteúdo'.

Este tutorial carrega especificamente o conteúdo do tipo `Model`. Conteúdo carregado que não é mais necessário em sua cena, deve ser descarregado novamente para economizar memória. Para obter mais informações sobre ativos veja [Gerenciar ativos](../../manual/game-studio/manage-assets.md).

![Loading content](media/loading-content.webp)


> [!Vídeo https://www.youtube.com/embed/_c4Cv4k3YyI]

## Código
Com a tecla **L** e **U** você pode carregar ou descarregar o modelo de um manequim. Se houver um modelo carregado, você pode usar a chave **S** para gerar uma nova entidade com o modelo de manequim carregado.

O **C** limpa todas as entidades desovadas na cena. Esta demonstração demonstra que quando os modelos são descarregados, quaisquer entidades que referem o modelo ainda estão existentes na cena.

[!code-csharp[Loading content](../../../../stride/samples/Tutorials/CSharpBeginner/CSharpBeginner/CSharpBeginner.Game/Code/LoadingContentDemo.cs)]
