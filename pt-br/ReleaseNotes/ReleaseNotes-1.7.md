# Notas de lançamento do Xenko 1.7

## Destaques

### Renderização

#### Em frente

Xenko agora possui [Practical Clustered Shading](http://www.humus.name/Articles/PracticalClusteredShading.pdf), uma técnica semelhante à renderização Forward+.

Ele permite que você use muitas luzes de ponto e ponto ao mesmo tempo.
Você vai ganhar mais controle sobre a iluminação de sua cena adicionando luzes onde quer que sejam necessárias.
Ele também funciona com objetos transparentes fora da caixa, assim como renderização ordinária.

[![ Centrais de luzes](media/ReleaseNotes-1.7/launcher_lights.jpg)](https://www.youtube.com/watch?v=QWZqNT9xD5Q " Centenas de luzes")

Se o seu jogo requer Direct3D10+ (ou OpenGL equivalente), esta será a configuração padrão - sem alterações necessárias! Como um bônus, você verá uma diminuição nos tempos de compilação e o número de permutações de shader.

Também aproveitamos esta oportunidade para reescrever a maior parte do nosso código de iluminação para melhorar o desempenho e a extensibilidade.

#### Vulc

[Vulkan](https://www.khronos.org/vulkan/) junta-se à nossa família feliz de plataformas gráficas!
O suporte experimental também foi adicionado para Windows e Linux. O Android seguirá em breve.

![Vulkan](media/ReleaseNotes-1.7/Vulkan.png)

Juntamente com o Direct3D12 e a recente revisão do nosso pipeline de renderização, este é outro passo para preparar o Xenko para a próxima geração de gráficos. Fique atento para melhorias de desempenho e números duros no futuro próximo.

Tente executar seu projeto no Vulkan selecionando-o como o **Plataforma gráfica preferida** nas configurações de **Rendering** do seu ativo **Configurações de jogo**.

### Melhorias do GameStudio

#### Criação de ativos simplificados

O fluxo de trabalho para criar ativos foi simplificado! O novo menu para criação de ativos contém vários modelos para cada tipo de ativo. Agora você pode importar ativos de arquivos mais diretamente. Com a função de pesquisa eficiente do Xenko, a criação de ativos deve ser mais rápida e mais fácil do que nunca!

![ Novo adicionar menu de ativos](media/ReleaseNotes-1.7/NewAddAsset.png)

#### Visualização da câmera

Nós atualizamos a visualização da câmera do GameStudio para agora exibir apenas a câmera selecionada atualmente. Também agora exibe as bordas e o nome da câmera facilitando a visualização da câmera e suas configurações.

![ Visualização da câmara ](media/ReleaseNotes-1.7/CameraPreview.png)

#### Arrastar e soltar ativos na grade de propriedade

Até agora, você pode arrastar e soltar ativos em sua cena ou a vista da árvore.

Nova nesta versão, os componentes agora podem ser adicionados a entidades apenas arrastando e soltando ativos correspondentes na grade de propriedade.

![Drag & Drop in the Property Grid](media/ReleaseNotes-1.7/dragdrop_propertyview.gif)

#### Drag & Drop scripts

Você também pode arrastar e soltar scripts diretamente na cena, vista da árvore e vista da propriedade:

![Drag & Drop in the Property Grid](media/ReleaseNotes-1.7/dragdrop_scripts.gif)

### Linux

Usuários do Linux se alegram! Linux é agora uma plataforma suportada de Xenko entre Windows, Android, iOS e muito mais! Tudo que você precisa é de um PC com Linux Ubuntu 16.04 x64 ou equivalente com uma placa de vídeo que suporta OpenGL 4.2 ou Vulkan 1.0. Mono ou .NET Core (que precisa ser instalado separadamente) estará alimentando seu jogo.

A fim de usar a plataforma **Linux**, verifique **Linux** da lista de plataformas no GameStudio então compile.

![Selecionar Plataformas Diálogo](media/ReleaseNotes-1.7/linux2.png)

A implantação para uma caixa remota do Linux é feita via SSH ao executar seu projeto no GameStudio.

![ Seletor de formulários ](media/ReleaseNotes-1.7/Platform_selector.png)

Para saber mais sobre nosso suporte ao Linux, leia a documentação [Linux](/manual/platforms/linux/index.md)

### Áudio

Reescritamos o nosso motor de áudio!
Embora a maioria das mudanças sejam internas, a API pública melhorou, e ainda estamos trabalhando para torná-lo ótimo!

As classes `SoundEffect` e `SoundMusic` foram consolidadas em `Sound`, também `SoundEffectInstance` é agora `SoundInstance`. Os formatos de som agora são convertidos usando [FFmpeg](https://ffmpeg.org/). Devido a essas atualizações, a gama de formatos suportados também melhorou.

Sob o capô, o [CELT](http://celt-codec.org/) codec (parte de [Opus](https://www.opus-codec.org/)) agora está sendo usado. Temos o prazer de dizer que o desempenho desde o início! A música agora pode ser misturada e cruzada ao transmitir e descomprimir diretamente do disco.

A API do Xenko agora baseia-se no OpenAL para Linux/macOS/iOS, no OpenSLES para Android e no XAudio2 para plataformas Windows.

## Como atualizar

Esta seção explica como migrar um projeto da versão 1.6.x para a versão 1.7.x.

### UIComponent

- `VirtualResolução` propriedade foi renomeada para `Resolução`
- `VirtualResolutionMode` propriedade foi renomeada para `ResolutionStretch`

### Espécie de Província

As propriedades do tipo `Sprite` foram alteradas para propriedades do tipo `ISpriteProvider`. Atualmente, duas implementações de `ISpriteProvider` estão disponíveis:
* `SpriteFromSheet` para uso com um `SpriteSheet` (ou seja, uma coleção de `Sprite`)
* `SpriteFromTexture` para uso com um único `Texture`

Para atualizar onde um único Sprite foi usado anteriormente elenco a atribuição com o seguinte (`SpriteFromTexture` fornece um conversor explícito conveniente de `Sprite`).

```
botão var = novo botão
(
  PressedImage = (SpriteFromTexture)new Sprite(Content.Load<Texture>("ImageButtonPressed")))
}
```

Para atualizar onde um sprite de um SpriteSheet foi usado anteriormente:
Crie uma nova instância `SpriteFromSheet` e forneça uma referência à instância `SpriteSheet` e ao índice de quadros correspondente.

```
botão var = novo botão
(
  PressionadoImage = novo SpriteFromSheet
  (
    Folha = sprites,
    CurrentFrame = sprites.FindImageIndex("ButtonPresed")
  }
}
```

Para conveniência, nós fornecemos um método auxiliar que faz exatamente o mesmo: `SpriteFromSheet.Create(sprites, "ButtonPresed")`.

Para mudar o `CurrentFrame` (que agora só existe em `SpriteFromSheet`), é necessário um elenco:

```
var provider = Entity.Get<SpriteComponent>(). SpriteProvider como SpriteFromSheet;
se (provider!= null)
  provedor. CurrentFrame = SomeIndex;
```

### SoundEffect (Instance) e SoundMusic to Sound (Instance)

Por favor, note que não há mais `SoundMusic`. Em vez disso, você deve agora usar `Sound` e `SoundInstance` para qualquer tipo de som.

A partir do estúdio de jogo, você agora pode definir relação de compressão, espacialização ou você tem a opção de transmitir o som diretamente do disco.
Agora você precisa de um `SoundInstance` para tocar um som, os métodos auxiliares em `Sound` foram convenientes, mas um pouco confusos.
Você ainda pode atribuir `Sound` ativos para Scripts como antes:

```
público Sound MySound;
privado SoundInstance mySoundInstance;
```
Observe também, a maneira como você usá-los mudou.
Antes:

```
MySound.Play();
```
Depois:

```
mySoundInstance = MySound.CreateInstance();
mySoundInstance.Play();
```

Por último, você já não precisa se registrar (`AddListener`/`RemoveListener`) `AudioListenerComponent` de seu código mais.

## Alterações de ruptura

### Áudio

- Removedo `DistanceScale` e `DopplerScale` uma vez que internamente nem todos os backends estavam apoiando-o (podemos adicioná-lo no futuro como um fator global se necessário)
- `DynamicSoundEffectInstance` foi removido, você agora pode usar `DynamicSoundSource` para transmitir suas fontes de som personalizadas. Funciona em todas as plataformas
- Removedo `SoundEffect`, `SoundEffectInstance`, `SoundMusic`. Por favor, use `Sound` e `SoundInstance` em vez de todo o tipo de sons
- Removedo `AddListener`, `RemoveListener` de `AudioSystem`
- Muitos Métodos que tinham `SoundEffect` ou `SoundMusic` na assinatura agora têm apenas `Sound`, e.g. `AudioEmitterComponent.AttachSound`

### UI

- O tamanho da fonte foi completamente alterado para a altura do pixel. Os ativos de fonte sprite existentes serão atualizados automaticamente
- Propriedades do tipo `Sprite` foram alteradas para propriedades do tipo `ISpriteProvider`

## Mudança

### Versão 1.7.0-Beta

Data de lançamento: 2016/07/01

#### Melhorias

##### Geral

- Os locais de depuração não estavam exibindo corretamente em alguns casos devido ao Mono. Processamento de cimento. Isto foi corrigido e agora deve funcionar corretamente.

##### Áudio

- Agora você pode mudar o Pitch/Speed de um `SoundInstance`!
- Adicionado controle de volume mestre em `AudioEngine` (`AudioEngine.MasterVolume`)

##### Partes

Esta versão traz muitas melhorias para o motor de partículas.

- Agora você pode criar efeitos relâmpagos e laser graças aos inicializadores de posição de arco e capacidade de seguir dois pontos de alvo
- As partículas de criança suportam e atribuem herança adicionada, permitindo que as partículas de um emissor sigam e herdam atributos de outras partículas de emissor
- Amostras de partículas de fita infantil mostrando como criar trilhas de partículas wispy em um único efeito
- As partículas de borda macia permitem que você alise as bordas do outdoor ao renderizar partículas próximas a objetos opacos
- Mais tipos de spawner, incluindo Burst, On-Hit e alguns outros condicional
- Atualizador de cores agora usa uma curva Color4

##### Game Studio

- O asset de histórico de seleção foi reescrito. Agora é compartilhado por todos os editores e a vista dos ativos. Os botões para navegar no histórico de seleção foram movidos para a grade da propriedade
- A operação de re-import foi substituída por um "Update asset from source" que aplica diretamente as mudanças da fonte para o ativo sem exibir a interface de usuário de importação. (Para esqueleto, modelo, ativos de estúdio sprite...)
- Deixar cair um grande número de arquivos para importar é agora muito mais rápido
- A notificação quando as fontes de alguns ativos mudaram é agora uma mensagem de diálogo em vez de um pop-up de notificação no canto da tela
- Agora você pode arrastar e soltar ativos diretamente na Grade de Propriedades para criar componentes

##### UI

- Signed Distance Field sprite tipo de fonte adicionado, permitindo que os usuários criem fontes afiadas e escaláveis que podem ser facilmente redimensionadas no tempo de execução sem custo extra
- Adicionado suporte para EditText no Windows 10, Windows Store e Windows Phone plataformas

##### Activos

- O formato YAML interno do SceneAsset e PrefabAsset foi atualizado para ser mais genérico em relação ao composto de ativos.
- O rastreamento de arquivos de origem para ativos, em particular, foi melhorado e fixo

##### Gráficos

- Adicionado uma maneira de manter uma relação de aspecto restrito em Render Camera, e automaticamente ter pilarboxes/letterboxes quando há telas com diferentes razões
- Adicionado o conceito de "LogicalGroup" para facilmente fazer atualizações parciais de buffer constante e recursos
- Suporte OpenGL aprimorado: buffers de textura, mais formatos de textura, marcadores de depuração, etc.
- OpenTK Unified: agora compilamos nosso próprio OpenTK para Windows, iOS e Android. Isso significa que nosso código do renderizador OpenGL está agora unificado e deve ter menos bugs
- A câmera não é mais afetada pelo escalonamento
- Implementou as mudanças necessárias para permitir renderização para dispositivos Oculus Rift. Além disso, já começamos a incluir as interfaces nativas na API para o Oculus Rift SDK. Veja a documentação [VR](../manual/virtual-reality/index.md) para mais informações.

##### Entrada

- Adicionado um método auxiliar `InputManager.TransformPosition` para permitir que você transforme eventos de entrada no caso de vários viewports.

#### Questões corrigidas

##### Game Studio

- Desfazer/refazer foi corrigido em muitos cenários
- GameStudio layout questão ao criar um novo jogo com o mesmo nome que um jogo anterior (mas excluído)
- Emitir impedir que um script recém-criado seja marcado como salvo
- Regressão introduzida em 1.6.5 onde a região de textura de um sprite não foi corretamente redimensionada quando a imagem de origem tinha sido alterada
- Erros de compilação ocorrem ao criar um projeto com um caractere de traço em seu nome. Verificações adicionais foram adicionadas para substituir caracteres ilegais em nomes de script
- Múltiplos casos em que as modificações de um prefab não foram propagadas para as instâncias deste pré-fabricado
- Preserve Nodes que estavam trabalhando indevidamente
- Alterações de rastreamento em imagens de origem no editor de folhas de sprite
- Alguns cenários onde as miniaturas nunca são completas para construir
- Manuseio melhorado da colisão do nome ao criar/importar ativos
- Questões com a seleção de entidades no editor de cena (algumas entidades permaneceram selecionadas do ponto de vista da rede de propriedade mesmo depois de não serem selecionadas da vista da árvore)
- Alguns problemas de janela quando vários diálogos modais são exibidos na ordem errada, evitando fechá-los
- Várias falhas ocorrem ao modificar propriedades de entidades
- Drag'n'drop problemas onde às vezes era difícil arrastar o ativo correto ou entidade

### Versão 1.7.1-Beta

Data de lançamento: 2016/07/04

#### Melhorias

- Aumentar a velocidade quando manipular entidades que vem de pré-fabs

#### Questões corrigidas

- Corrigir editor de cena não refrescante ao alterar propriedades de um componente que foi adicionado pouco antes
- Corrigir a criação do motor de áudio no Windows 7 32bits
- zlib1.dll estava faltando e impedindo de usar fontes SDF
- Corrigir a rotação ao longo do tempo de atualização para sistemas de partículas
- Corrigir a visualização da câmera que não estava funcionando corretamente ao adicionar ou remover o componente da câmera

### Versão 1.7.2-Beta

Data de lançamento: 2016/07/2009

#### Melhorias

- Mensagens de erro adicionadas quando as fontes não carregarem.
- Adicionar novo esquema de identificação para implantação Linux
- Inicialização ligeiramente mais rápida de projetos no Game Studio

#### Questões corrigidas

- Corrigir problema fazendo com que as propriedades da curva de computação sejam exibidas incorretamente no Game Studio.
- Fix upgrade de ativos que tinham SourceKeepSide BySide definido como verdadeiro
- Corrigir um problema de serialização com cenas que estão usando prefabs
- Corrigir um possível acidente que pode ocorrer ao navegar pelo histórico de seleção
- A espessura da borda fixa na interface do usuário não levou em conta a opacidade
- Cópia fixa de glslangValidator
- Fix estado de estêncil de GameProfilingSystem

### Versão 1.7.3-Beta

Data de lançamento: 2016/07/16

#### Melhorias

- Evite a exceção não identificada para ocorrer quando a câmera não estiver definida no compositor gráfico

#### Questões corrigidas

- Corrigir a grade de propriedade que estava funcionando mal após certos tipos de operação
- Corrigir atualizações do prefab que às vezes não foram propagadas para as instâncias deste pré-fabricado
- Corrigir miniaturas de ativos de código fonte que não foram gerados corretamente às vezes
- DDS agora definir corretamente bandeiras de cabeçalho ao salvar cubemaps

### Versão 1.7.4-Beta

- Lançamento Hotfix (penha crítico no editor)

### Versão 1.7.5-Beta

Data de lançamento: 2016/07/21

#### Novos recursos

- Os efeitos agora podem ser compilados diretamente pelo tempo de execução sem precisar de um computador de desenvolvedor anexado com o Connection Router. Isso ainda é bastante lento (e será otimizado mais tarde), mas pelo menos resolve muitos problemas causados pelo fluxo de trabalho anterior. Você ainda pode voltar ao modo anterior nas "propriedades do pacote" (clique com o botão direito do mouse no pacote no explorador da solução), e definir o "Remote Compiler"

#### Melhorias

- Tempo de inicialização mais rápido (o código de serialização é inicializado e JIT-ed mais preguiçoso)
- Compatível com o mais recente Xamarin iOS Alpha (símbolos são ligados à estática, então P/Invoke não utilizado precisa ser removido)

#### Questões corrigidas

- Algumas fontes não estavam funcionando corretamente com o novo campo de distância assinado ([#436](https://github.com/SiliconStudio/xenko/issues/436))
- Canais verdes e azuis foram invertidos no editor da curva de cor

### Versão 1.7.6-Beta

Data de lançamento: 2016/07/22

#### Novos fatures

- No componente Sprite, agora você pode escolher o sampler entre linear, ponto (nearest) e anisotropic ([#409](https://github.com/SiliconStudio/xenko/issues/409))

#### Questões corrigidas

- SpriteBatch padrão e outros shaders pré-compilados estavam faltando precisão inteiro, resultando erro de links shader no iOS
- Partes: A geometria das fitas agora pode ser dividida, útil para emitir vários grupos separados de partículas
- D3D11: Verifique se a QueryInterface de DebugDevice realmente funcionou (às vezes não funciona, ou seja, quando estiver usando RenderDoc)
- Várias correções para animação aditiva
- Texto de exceção errado corrigido na inicialização do AudioLayer

### Versão 1.7.7-Beta

Data de lançamento: 2016/07/29

#### Novos recursos

- FBX: Adicionado PivotPosition em ModelAsset (no caso não é devidamente centrado)
- Motor: Adicionado um experimental "DebugConsoleSystem" para exibir facilmente texto (API pode mudar)

#### Questões corrigidas

- GameStudio: Desfazer não estava funcionando corretamente para a primeira mudança (devido à bandeira desfazer não sendo corretamente reset)
- GameStudio: Algumas notificações de alteração de ativos não foram enviadas corretamente em caso de desfazer/refazer
- GameStudio: Foco de entidade não estava funcionando em alguns casos
- GameStudio: Fix EntityComponent reloading após a recarga de montagem
- GameStudio: Escolher no GameStudio não estava funcionando corretamente com alguns cartões AMD
- GameStudio: A corda não poderia ser usada no lado do valor de um dicionário (em grade de propriedade)
- Áudio: Apenas crie um motor de áudio, mesmo que vários jogos sejam iniciados
- FBX: Corrigir alguns casos em que um material não foi corretamente definido
- Várias correções de bugs

### Versão 1.7.8-Beta

Data de lançamento: 2016/08/05

#### Novos recursos

- Excelente desempenho melhorado quando a construção de ativos (esp. quando nenhuma mudança) e o carregamento da solução Visual Studio; foi devido a padrões wildcard em nossos arquivos de destino de compilação, forçando MSBuild a listar arquivos recursivamente
- Código de serialização é agora sem fechadura para o caminho quente (iniciação mais baixa)
- O perfil gráfico agora está em cache no D3D, tornando-o mais rápido para abrir novas janelas 3D no GameStudio

#### Questões corrigidas

- Física bugfixes & optimizations (não processe osso quando desativado, e desativado no editor)
- O SDL2.dll estava faltando ao segmentar OpenGL
- Vulkan: às vezes o tamanho do pixel de textura não foi devidamente computado, resultando em retorno inválido da CPU Texture
- Corrigido um acidente ao criar novos pacotes
- D3D12: o estado do pipeline não foi devidamente redefinido em ClearState & CommandList resets
- D3D12: reescrever textura e buffer upload de dados iniciais, que estava falhando no hardware AMD
- D3D12: otimizações para evitar chamar mudanças de estado não-ecessárias

### Versão 1.7.9-Beta

Data de lançamento: 2016/08/05

Nota: bugfix de emergência para versão 1.7.8, que não estava copiando corretamente bibliotecas nativas.

## Questões conhecidas

- Às vezes, contatos duplicados são detectados pelo motor de física.
- No Linux, ao alternar a plataforma gráfica subjacente, a renderização não ocorrerá. Excluir o cache, local e roaming pasta no host Linux e reiniciar o jogo deve corrigir o problema.
- Linux Mono tem alguns problemas com o novo compilador de efeitos (desde 1.7.5-Beta). Por favor, use o "compilador remoto" nas "propriedades do pacote" (clique com o botão direito do mouse no pacote em explorador de soluções), ou use Linux CoreCLR entretanto.
