# Notas de versão do Stride 4.0

1 de Fevereiro, 2021

## Xenko é agora Stride!

O motor de jogo Xenko foi renomeado para Stride. A partir de agora, todo o código fonte, blogs e tutoriais usarão o nome ‘Stride’ em vez de ‘Xenko’.

Aqui está o novo logotipo:

![Stride Logo](media/ReleaseNotes-4.0/stride-logo.png)

Mais detalhes disponíveis no blog [dedicado post](https://stride3d.net/blog/xenko-has-been-renamed-to-stride/)

## Travessia de cone de Voxel GI

Graças a uma contribuição substancial de Sean Boettger e patrocinado por David Jeske, Stride agora suporta Voxel Cone Tracing GI!

Aqui está em ação:

<iframe width="560" height="315" src="https://www.youtube.com/embed/AZytf15FRks" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Como você pode ver, existem muitas personalizações e configurações disponíveis no editor:

![Voxel Cone Tracing GI](media/ReleaseNotes-4.0/voxelgi.jpg)

Há uma página de documentação explicando [ como configurar o projeto com a Voxel Cone Tracing GI](../manual/graphics/lights-and-shadows/voxel-cone-tracing-gi.md).

Aqui está o original [forum post](https://forums.stride3d.net/t/voxel-gi-implementation/1947) e [pull request](https://github.com/stride3d/stride/pull/583). Obrigado novamente por esta grande contribuição!

## .NET 5

Stride editor e toolchain está agora em execução com .NET 5! Runtime tem trabalhado com . NET Core para algumas versões já.

Isso nos permite ter scripts e ativos personalizados em um projeto segmentando `. NET Standard 2.1` ou `.NET 5`.

Se você tiver scripts ou ativos personalizados em um projeto .NET Framework em vez de um projeto .NET Standard, você ainda pode escolher entre `.NET 5` e `.NET Framework` dentro do lançador:

![Framework seleção no lançador](media/ReleaseNotes-4.0/launcher-net5.png)

O framework também será exibido na barra de ferramentas Game Studio para facilitar a identificação enquanto ambos coexistem.

. A versão NET Framework pode ser considerada desprecaída e provavelmente será removida em uma versão futura (como 4.1) para nos permitir aproveitar plenamente de [C# 8.0](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8) e em breve-to-come [C# 9.0](https://devblogs.microsoft.com/dotnet/welcome-to-c-9-0/).

Também esperamos cair . NET Framework e suportando apenas . O NET 5 simplificará muito nosso processo de instalação, já que não dependeremos de cargas de trabalho ou pacotes específicos do Visual Studio sendo instalado. Este foi um problema recorrente com nossos usuários.

## GPU flexível Instância

Geometria Aka instancing. Graças a outra grande contribuição comunitária patrocinada por [vvvv](https://visualprogramming.net/), Stride agora suporta GPU instancing por modelo.

![Instanciando cabeçalho](media/ReleaseNotes-4.0/instancing-header.jpg)

A coisa boa sobre ele é, que ele joga junto com o sistema de entidade-componente: Basta adicionar um componente Instancing a uma entidade com um modelo. Então você pode escolher entre 3 maneiras de gerar as instâncias:

* _EntityTransform_, usa a transformação de outras entidades com um componente de instância. Isso permite que você adicione componentes como física, áudio, etc para cada instância.
* _UserArray_, para fornecer um array de matrizes via script
* _UserBuffer_, para fornecer um buffer estruturado (asset GPU) de matrizes via script

![Instanciando tipos](media/ReleaseNotes-4.0/instancing-types.png)

_UserArray_ e _UserBuffer_ mesmo permitem que você especifique como a matriz é multiplicada com a transformação pai.

Até funciona com esfolar:

![Instanciando Skinning](media/ReleaseNotes-4.0/instancing-skinning.jpg)

Escolher instâncias individuais no Game Studio também funciona e seleciona a entidade com o respectivo componente de instância.

Há também dois novos modelos de entidade para fácil configuração:

![Instancing Templates](media/ReleaseNotes-4.0/instancing-templates.png)

Um projeto de exemplo que mostra os novos recursos pode ser encontrado aqui: [Insistência de Transferência](https://github.com/tebjan/StrideTransformationInstancing)


## API gráfica: mecanismo de seleção diferente + melhorias Vulkan

Houve uma grande revisão no sistema de compilação Stride para fazer a seleção de APIs gráfica funcionar de uma forma mais à prova de futuro.

Ele estava anteriormente confiando no personalizado `RuntimeIdentifier` sendo definido na solução. Isso não funcionou muito bem porque era completamente ortogonal para o existente `RuntimeIdentifier`, e às vezes não ter boas desvantagens.

A partir de agora, o projeto de usuário usará `StrideGraphicsApi` no arquivo de projeto `.csproj` para especificar a API gráfica. Esperamos expor isso no editor mais tarde.

Também aproveitamos a oportunidade para melhorar o estado do renderizador Vulkan (graças a um interruptor para [Vortice.Vulkan vinculações](https://github.com/amerkoleci/Vortice.Vulkan) de [Amer Koleci](https://github.com/amerkoleci)) e automatizar testes de unidade gráfica, atualmente em execução para D3D11 e Vulkan.

Ainda é um trabalho em andamento, então espere mais em versões futuras.

## Documentação e Tutoriais

Os primeiros 10 tutoriais iniciantes C# são gravados e enviados para o canal oficial Stride Youtube. Você verifica [ a lista de reprodução aqui](https://www.youtube.com/playlist?list=PLRZx2y7uC8mNySUMfOQf-TLNVnnHkLfPi).

![Youtube Playlist](media/ReleaseNotes-4.0/doc-playlist.jpg)

Estes vídeos são o vídeo equivalente ao existente [documentação online](../tutorials/csharpbeginner/index.md) para os tutoriais do modelo de iniciante C# e o modelo de "novo projeto" ao criar um novo projeto do lançador Stride.

A série de iniciantes C# deve ser totalmente gravada até o final de julho de 2020.
Depois que esses vídeos são feitos, Jorn vai colocar seu foco no modelo de projeto intermediário C#. Aqui está um trabalho na captura de tela de progresso no tutorial de transmissão de raios:

![Raycast tutorial](media/ReleaseNotes-4.0/doc-raycast-tutorial.jpg)

## Novos desenvolvedores são bem-vindos!
O repositório Stride GitHub tem solicitações de pull mais fechadas do que problemas abertos. Este é um bom sinal! Mas para se mover mais rápido e se adaptar às novas tecnologias, ficaríamos muito felizes em ver mais novos talentos em nossa comunidade de desenvolvedores amigável e profissional.

Há várias boas razões para se juntar a nós:

* Escrever código do motor em C# é divertido e bastante produtivo
* Usuários Stride irão trabalhar com o que você criar
* Estamos felizes em ajudar, se você ficar preso
* Você pode aprender muito, a base de código Stride é muito profissional e tem padrões de alta qualidade
* Uma contribuição de código aberto é uma grande adição ao seu portfólio

Não importa se você (ou alguém que você conhece) pode contribuir com atualizações de documentação, melhorias de interface do usuário, correções de bugs ou novas tecnologias de renderização, acolhemos todos!
