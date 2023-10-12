# Organize seus arquivos no controle de versão

Recomendamos que você use um sistema de controle de versão como Git, SVN ou Perforce Helix para salvar um histórico de mudanças em seu projeto.

Como você organiza e compartilha seus arquivos é até você, mas há algumas coisas para ter em mente.

## Arquivos que você não deve adicionar ao controle de versão

### **Bin** e **obj** pastas

Não recomendamos que você adicione as pastas **Bin** ou **obj** ao controle de versão. Isso é porque:

* Game Studio constrói essas pastas cada vez que você executa o jogo, então você não precisa manter um histórico deles.
* Você não pode ver se eles correspondem aos arquivos de origem que eles foram gerados em um determinado commit.
* Eles ocupam espaço e retardam a sincronização de controle de versão.

O Visual Studio também coloca pastas **.obj** dentro de cada pasta de código. Pelas mesmas razões, não recomendamos que você adicione estes ao controle de versão.

### Arquivos de recurso

**Resource files** são arquivos importados para Game Studio e usados por ativos. Eles incluem arquivos de imagem (por exemplo `.png`, `.jpg`), arquivos de áudio (por exemplo `.mp3`, `.wav`), e modelos (por exemplo `.fbx`). Recomendamos que você salve esses arquivos na pasta **Resources** em sua pasta de projeto.

Não recomendamos que você salve arquivos de recursos na pasta Ativos. Você pode ser usado para organizar arquivos desta forma se você usar Unity®, pois Unity® requer arquivos de recursos e arquivos de ativos para estar na mesma pasta. O Stride não precisa disto, e fazê-lo tem desvantagens.

Por exemplo, imagine que um artista tenha editado 10GB de texturas e comprometido com o controle de fonte. Ao mesmo tempo, um designer precisa editar um ativo rapidamente. Para fazer isso, o designer recebe a versão mais recente do ativo do controle de origem. No entanto, porque os ativos e arquivos de recursos estão na mesma pasta, o designer é forçado a obter o 10gb de arquivos ao mesmo tempo. Se os arquivos estão em uma pasta separada, no entanto, o designer só tem que obter a pasta que eles precisam. Além disso, como arquivos de ativos são muito menores do que arquivos de recursos, é muito mais rápido navegar no histórico de ativos em uma pasta de ativos dedicada.

### Arquivos de criação de conteúdo

** Os arquivos de criação de conteúdo ** são criados com ferramentas de criação de conteúdo externos, como arquivos `.psd` (Photoshop) ou `.max`.> (3D Studio Max).

Não recomendamos que você salve arquivos de criação de conteúdo em sua pasta de projeto. Isso porque os arquivos são muitas vezes grandes e não são usados no projeto diretamente. Em vez disso, recomendamos que você salve os arquivos em um repositório de controle de versão diferente - ou, se o sistema de controle de versão suporta checkouts parciais (como SVN ou Perforce), uma pasta raiz diferente. Isso significa que os membros da equipe só obtêm os arquivos de que precisam.

## Estrutura de diretório sugerida

Seguindo essas sugestões, uma estrutura de pasta de exemplo pode parecer assim:

```cs
- MyGame
    - Activos
        - textura
    - Bin
    - MyGame. Jogo
    - MyGame
    - obj
    - Recursos
        - textura. png
- Ficheiros de Criação de Conteúdo
    - textura.psd
```

Você pode até criar pastas separadas para diferentes tipos de arquivo de criação de conteúdo:

```cs
- MyGame
    - Activos
        - textura
        - modelo
    - Bin
    - MyGame. Jogo
    - MyGame
    - obj
    - Recursos
        - textura. png
        - modelo.fbx
- Projetos do Photoshop
    - textura.psd
- MayaProjects
     - modelo.mb
```

## Exemplo

Imagine uma equipe com dois programadores, dois artistas 2D e dois artistas 3D.

* Os programadores verificam a pasta de projeto *MyGame* contendo código, ativos e recursos.
* Os artistas 2D verificam o projeto do jogo e a pasta *PhotoshopProjects* contendo arquivos `.psd`.
* Os artistas 3D verificam o projeto do jogo e a pasta *MayaProjects* contendo arquivos `.mb` (projeto de maio).

Agora imagine um dos artistas 2D muda vários arquivos `.psd` e comete 2GB de mudanças no controle de versão. Porque apenas os artistas 2D têm a pasta *PhotoshopProjects* verificada, apenas o outro artista 2D recebe esta mudança. Os outros membros da equipa não precisam dele. Esta é uma maneira eficiente de compartilhar arquivos em projetos.

## Ver também

* [Estrutura do projecto](project-structure.md)
* [Distribuir um jogo](distribute-a-game.md)