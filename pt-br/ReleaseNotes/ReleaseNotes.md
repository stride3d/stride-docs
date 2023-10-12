# Notas de lançamento do Stride 4.1

16 de Julho de 2022

Os contribuidores Stride orgulham-se de anunciar uma nova versão agora rodando em **.NET 6** suportando o mais recente **C# 10**. Isso significa que agora você pode ir para a página de download e começar a desenvolver seus jogos usando o mais recente . Tecnologias NET.

## Resumo das melhorias

Aqui está uma lista não exaustiva de novas melhorias:

- .NET 6 suporte e [VS 2022 plugin](https://github.com/stride3d/stride/pull/1221)
   - Stride 4.1 aproveita o poder de .NET 6
   - Suporte para C# 10
- [Sombras separadas para materiais semitransparentes](https://github.com/stride3d/stride/pull/1256)
- [Restrições de física](https://github.com/stride3d/stride/pull/1114)
   - Limites de bala envolvidos em funcionalidade fácil de usar
   - Editor gizmos para restrições de física
- [Otimização de desempenho de física](https://github.com/stride3d/stride/pull/1100)
- [ACES tomografia](https://github.com/stride3d/stride/pull/1037)
- [Efeito de imagem de nevoeiro](https://github.com/stride3d/stride/pull/1039)
- [Efeito de imagem de contorno](https://github.com/stride3d/stride/pull/1038)
- [Melhoria do editor gizmos](https://github.com/stride3d/stride/pull/1083)
- [C# Projeto de tutoriais intermediários](https://github.com/stride3d/stride/pull/1401)
   - Este subprojeto Coletivo Aberto foi [sucessomente financiado ](https://opencollective.com/stride3d/projects/stride-intermediate-tutorials) pela comunidade.  Todas as gravações de vídeo relacionadas estão disponíveis no canal do Stride [Youtube](https://www.youtube.com/c/Stride3D) e a página [tutoriais](https://doc.stride3d.net/latest/en/tutorials/index.html) na documentação também será atualizada para refletir o novo projeto.
- Muitas mais pequenas correções e qualidade de melhorias de vida
   - [Jogo de amostra fixa](https://github.com/stride3d/stride/pull/1217)
   - [Procedimento simples Criação de modelos](https://github.com/stride3d/stride/pull/1285)
   - Novas assinaturas matemáticas ([1122](https://github.com/stride3d/stride/pull/1122), [1121](https://github.com/stride3d/stride/pull/1121), [1090](https://github.com/stride3d/stride/pull/1090))
   - Melhorias de dispatcher/threadpool
   - Melhoria da qualidade da oclusão ambiente
   - E muitas outras correções

## Sombras separadas para materiais semitransparentes

Produz sombras semi-transparentes poking mais e mais buracos no mapa de sombra com base na transparência do objeto, a filtragem de mapas de sombra vai borrar esses buracos com seu vizinho que resultará em esses pixels parcialmente opacos.

![ Configurações de sombra diferentes](https://i.imgur.com/xFzuNbl.png)

![ Comparação de efeitos sombra diferenciada](https://i.imgur.com/kHvSy8a.png)


## Restrições de física

O sistema de física de Stride Bullet vem com um conjunto de restrições para você usar em seus projetos. Esses constrangimentos são agora todos visíveis dentro do editor, pré-visualizando as restrições usando vários editor gizmo.

![preview(para ser removido)](https://i.imgur.com/qiaBBpm.png)

Para obter mais informações sobre todos os tipos de restrições, você pode ler sobre eles na documentação [Stride](https://doc.stride3d.net/latest/en/manual/physics/constraints.html) ou assistir o vídeo abaixo.

> [!Vídeo https://www.youtube.com/embed/uMZMYpMD3Wg]

## Otimizações de física

Recuperar informações de colisão e contato foi previamente feito re-testando todos os componentes para colisões, o que, como se poderia esperar, levou a um desempenho terrível para cenas pesadas de física (poderia levar até e acima de 90% do quadro).

Os contatos agora são avaliados preguiçosamente para reduzir a sobrecarga quando nada acaba lendo-os.
Os usuários agora podem ler e iterar sobre todas as colisões através da Simulação. Cores atuais.

## Melhoria do editor gizmos

Os gizmos antigos não eram muito agradáveis de olhar, então este recurso os faz olhar melhor e mais user-friendly. Ele também muda como a rotação gizmo funciona e adiciona planos de escala ao gizmo de escala.

![ Novos gizmos](https://i.imgur.com/8siM2Lc.png)

Este recurso também atualiza o texto no CameraOrientationGizmo para ser XYZ em vez da direita/esquerda. Ainda prefere o texto antigo em vez da coordenada XYZ? Não se preocupe, há uma configuração sob as configurações do viewport que a troca de volta para o texto antigo.

![Rotation](https://i.imgur.com/W4zIf7J.png =400x160)


## Tutoriais intermediários

Um dos primeiros subprojetos Open Collective é o projeto de tutoriais [intermediate C#](https://opencollective.com/stride3d/projects/stride-intermediate-tutorials). Após a discussão em reuniões comunitárias e com vários contribuintes doando diretamente para este projeto, o valor para este projeto ser incluído em Stride rapidamente se tornou uma realização.

![Tutoriais intermediários intro screen](https://i.imgur.com/7GVEiSR.jpg)

Com o Stride 4.1, você poderá selecionar o projeto de tutoriais intermediários C# como um novo projeto de modelo. O projeto de modelo contém (no momento da escrita) 11 tópicos que cada desenvolvedor vai querer dar uma olhada.
1. UI básico
1. Gatilhos de colisão
1. Raycasting
1. Projeto e Unprojecting
1. Scripts Async(hronous)
1. Carregamento de cenas
1. Básicos de animação
1. Áudio
1. Câmera de primeira pessoa
1. Câmera de terceira pessoa
1. Navegação

Cada tutorial tem um tutorial de vídeo que o acompanha, que pode ser encontrado no canal do Stride [Youtube](https://www.youtube.com/c/Stride3D). Abaixo você pode encontrar a lista completa.


> [!Vídeo https://www.youtube.com/embed/videoseries?list=PLRZx2y7uC8mOE6_L0ZiFxNBE7HmzU2dP7]

## Questões conhecidas

### Editor de C# integrado

A transição para . NET6 infelizmente quebrou as dicas de ferramentas de ajuda e a conclusão de código do editor de código C# integrado. Mas decidimos aceitá-lo por agora, como todo mundo está usando um editor C# apropriado de qualquer maneira, como Visual Studio, Rider ou Visual Studio Code.

A razão para o erro é que [RoslynPad](https://github.com/roslynpad/roslynpad), a biblioteca de underlaying, também precisa de uma atualização ou correção. Vamos tratar disto numa das versões menores.

![](https://i.imgur.com/Gn2i6Js.png)


## Uma pequena ajuda

Nós, contribuidores, acreditamos que Stride pode ajudar. Os desenvolvedores de jogos NET fazem os jogos que querem com facilidade usando seus idiomas favoritos. Queremos ter certeza de que Stride oferece o ambiente mais confortável para o desenvolvimento de jogos, e isso leva tempo e esforço.

Desde o lançamento gratuito e de código aberto do Stride, a comunidade tem vindo a crescer lentamente, por isso decidimos abrir um fundo para recompensar os desenvolvedores por qualquer contribuição que eles fazem para o Stride. Configuramos uma página Coletiva [Open](https://opencollective.com/stride3d) para gerenciar nossos fundos e alocar dinheiro para recursos que a comunidade gostaria de ver implementado.

Temos várias recompensas por [bug correções e características](https://opencollective.com/stride3d/projects) (Suporte de Vulkan, decalques, metas de morfação e muitos outros). Se você tem ou conhece alguém com as habilidades para lidar com essas recompensas, por favor, entre em contato conosco através dos tickets [respectivos Github](https://github.com/stride3d/stride/labels/bounty). Você também pode entrar em contato conosco através do nosso servidor de discórdia ou no Github para propor novas recompensas.

## Contribuintes

Muito obrigado a [ todos os contribuidores](https://github.com/stride3d/stride/graphs/contributors?from=2021-02-01&to=2022-06-10&type=c) que doaram seu tempo e habilidade adicionando recursos, fixando bugs, gerenciando os pipelines de compilação, adicionando documentação e revisando PRs.

### Contribuintes financeiros

Além disso, um enorme agradecimento aos indivíduos e empresas que contribuíram financeiramente para o nosso [Open Collective](https://opencollective.com/stride3d)!

* [ORE Sistema](https://ore-system.com) com um patrocínio de diamante
* [xen2](https://opencollective.com/xen2) Contribuidor do núcleo que doou uma grande parte do anterior Patreon de volta através do Open Collect
* [vvvvv](https://visualprogramming.net) Um ambiente visual de programação ao vivo para fácil prototipagem e desenvolvimento. Ele é projetado para facilitar o manuseio de grandes ambientes de mídia com interfaces físicas, gráficos de movimento em tempo real, áudio e vídeo que podem interagir com muitos usuários simultaneamente. vvvvv usa Stride
* [O quê](https://opencollective.com/vaclav)
* [Mitchel Alberti](https://opencollective.com/mitchel-albertz)
* [Bill](https://opencollective.com/bill2)
* [Ideonella](https://opencollective.com/ideonella)
* [Soul Rider](https://opencollective.com/soul-rider)
* [navegador](https://opencollective.com/guest-ce7ccb03)
* [Eideren](https://opencollective.com/eideren)
* [Jorn Aggror](https://opencollective.com/jorn-theunissen)
* [Marian Dziubiak](https://marian.dziubiak.pl)
* [Sua Alteza KAFIA](https://opencollective.com/guest-7253cc41)
* [David Thunderclown](https://www.disruptionworks.co.uk)
* [Christian Clavet](https://opencollective.com/christian-clavet)
* [Marko Viitanen](https://opencollective.com/fador)
* [Aaron Disibio](https://opencollective.com/guest-2f41a631)
* [- sim](https://opencollective.com/z16)
* [Incognito](https://opencollective.com/guest-5635aca5)
* [Walter Hulsebos](https://opencollective.com/guest-2170ad46)
* [A facada](https://opencollective.com/thekeyblader)
* [James Rinker](https://opencollective.com/james-rinker)
* [o que é isto](https://opencollective.com/guest-6653841d)
* [Bruno Garcia](https://brunogarcia.com)
* [Revolta de Bandido](https://opencollective.com/banditrevolver)
* [Em](https://opencollective.com/emmx)
* [SeleDreams](https://opencollective.com/seledreams)
* [Vigneta](https://vignetteapp.org)
* [Jogos de Longplay](https://opencollective.com/guest-a5fa78c8)
* [Redberd36](https://opencollective.com/guest-3fc8bf91)
