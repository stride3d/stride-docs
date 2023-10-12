# Definições do jogo

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>
<span class="badge text-bg-success">Designer</span>

Você pode configurar as configurações globais do seu jogo no ativo **Game Settings**. Por padrão, o ativo Configurações de Jogo é armazenado na pasta **Assets** do seu projeto.

## Editar configurações de jogo

1. No **Solution Explorer** (o painel inferior esquerdo por padrão), selecione a pasta **Assets**.

   ![Select Assets pasta asset](media/select-asset-folder.png)

2. No **Asset View** (o painel inferior por padrão), selecione o ativo **GameSettings**.

   ![Selecionar configurações de jogo asset](media/select-game-settings-asset.png)

3. No **Property Grid** (o painel direito por padrão), edite as propriedades Configurações de Jogo.

   ![ Configurações do jogo ](media/game-settings.png)

## A cena padrão

Você pode ter várias cenas em seu projeto. O **default cena** é a cena Stride carrega no tempo de execução.

Para definir a cena padrão:

1. Nas propriedades **GameSettings**, ao lado de **Default Scene**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   ![ Definir a cena padrão](media/game-settings-default-scene.png)

   A janela **Selecione um ativo** abre.

2. Selecione a cena padrão e clique em **OK**.

Para obter mais informações sobre cenas, consulte [Gerenciar cenas](../game-studio/manage-scenes.md).

## Compositor gráfico

Você pode ter vários compositores gráficos em seu projeto, mas você só pode usar um de cada vez.

Para definir o compositor gráfico:

1. Nas propriedades **GameSettings**, ao lado de **Graphics compositor**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   ![ Definir a cena padrão](media/game-settings-graphics-compositor.png)

   A janela **Selecione um ativo** abre.

2. Selecione o compositor gráfico e clique em **OK**.

Para mais informações, consulte o compositor [Graphics](../graphics/graphics-compositor/index.md).

## Áudio

![ Configurações de áudio ](media/audio-settings.png)

| Propriedade | Descrição |
|--------------|--------------
| Suporte HRTF | Ativar áudio HRTF. Note que apenas emissores de áudio com HRTF habilitado produzirá áudio HRTF. Para mais detalhes, consulte [HRTF](../audio/hrtf.md). |

Para mais detalhes sobre áudio, veja [Audio](../audio/index.md).

## Editor

As configurações **editor** controlam como Game Studio exibe entidades no Editor de cena. Essas configurações não têm efeito no seu jogo.

> [!Note]
> Como o Game Studio exibe entidades também é afetado pela configuração **Color space** abaixo de **Rendering**.

![ Configurações do editor](media/editor-settings.png)

| Propriedade | Descrição |
|---------------------|--------------
| Modo de renderização | Como o Game Studio renderiza miniaturas e Visualizações de ativos |
| Quadro de animação | O framerate das animações mostradas no Game Studio. Isso não afeta os dados de animação. |

## Navegação

![ Configurações de navegação](../navigation/media/navigation-settings.png)

### Propriedades de malha de navegação dinâmica

| Propriedade | Descrição |
|---------------------------|--------------
| Activado | Ativar navegação dinâmica em componentes de navegação que não tenham rede de navegação atribuída |
| Grupos de colisão incluídos | Defina quais grupos de colisão usam malhas de navegação geradas dinamicamente. Por padrão, as malhas usam todos os grupos de colisão |
| Configurar configurações | Configurações avançadas para malhas de navegação geradas dinamicamente |

Para mais detalhes, consulte [ Navegação dinâmica](../navigation/dynamic-navigation.md).

### Propriedades do grupo de navegação

| Propriedade | Descrição |
|----------------------|------------
| Item | O nome do grupo. |
| Altura | A altura das entidades neste grupo. As entidades não podem entrar em áreas com tectos inferiores a este valor. |
| Altura de escalada máxima | A altura máxima que as entidades deste grupo podem subir. |
| Inclinação máxima | A inclinação máxima (em graus) que as entidades neste grupo podem subir. As entidades não podem subir ou descer declives superiores a este valor. |
| Radius | Quanto maior este valor, maior a área das entidades de malha de navegação usar. As entidades não podem passar por lacunas de menos do do dobro do raio. |

Para mais detalhes, veja [Navigation](../navigation/index.md).

## Física

![ Configurações de tópico ](media/physics-settings.png)

| Propriedade | Descrição |
|-----------------|----------------
| Bandeiras | **CollisionsOnly** desabilita [física](../physics/index.md) exceto para colisões. Por exemplo, se isso estiver ativado, os objetos não são movidos pela gravidade, mas ainda colide se você os mover manualmente. **ContinuousCollisionDetection** impede que as entidades em movimento rápido passem erroneamente por outras entidades. Nota: outras bandeiras listadas aqui atualmente não estão habilitados em Stride. |
| Max sub passos | O número máximo de simulações que o motor de física pode executar em um quadro para compensar a desaceleração. |
| Passo de tempo fixo | O comprimento em segundos de um quadro de simulação de física. O padrão é 0,016667 (um sexto de segundo). |

## Renderização

![ Configurações de reprodução](media/rendering-settings.png)

| Propriedade | Descrição |
|-----------------------------|----------------
| Largura do amortecedor traseiro padrão | Isso pode ser substituído dependendo da relação e/ou resolução do dispositivo. No Windows, este é o tamanho da janela. No Android/iOS, esta é a resolução de alvo fora da tela. |
| Altura do amortecedor traseiro padrão | Isso pode ser substituído dependendo da relação e/ou resolução do dispositivo. No Windows, este é o tamanho da janela. No Android/iOS, esta é a resolução de alvo fora da tela. |
| Adapte o buffer de volta para a tela | Adapte a relação do buffer traseiro para ajustar a relação de tela |
| Perfil gráfico padrão | O nível de recursos gráficos exigido pelo projeto |
| Espaço de cor | O espaço de cor (gama ou linear) usado para renderização. Isso afeta o jogo em tempo de execução e como os elementos são exibidos no Game Studio. |
| Orientação de exibição | A orientação de exibição do jogo (padrão, retrato, paisagem esquerda ou paisagem direita). |
| Plataforma gráfica de destino | A plataforma de destino Stride constrói o projeto para. Se você definir isso para **Default**, Stride escolhe a plataforma mais apropriada. Para obter mais informações, consulte [Defina a plataforma gráfica](../platforms/set-the-graphics-platform.md). |

> [!Tip]
> Para verificar qual plataforma padrão seu projeto usa, adicione um ponto de interrupção ao seu código (por exemplo, em um script), execute o projeto e verifique o valor da variável [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform).

## Streaming

![Streaming settings](media/streaming-settings.png)

| Propriedade | Descrição |
|----------------------|------------
| Streaming | Activar streaming |
| Intervalo de atualização | Com que frequência Stride atualiza o streaming. Intervalos menores significam que o sistema de streaming reage mais rápido, mas use mais CPU e cause mais flutuações de memória. |
| Recursos máximos por atualização | O número máximo de texturas carregadas ou descarregadas por atualização de streaming. Números mais elevados reduzem o pop-in, mas podem retardar o framerate. |
| Tempo de recurso (ms) | Quanto tempo os recursos permanecem carregados após não serem mais utilizados (quando o orçamento de memória **** é excedido) |
| Orçamento de memória (em MB) | Quando a memória usada por streaming excede este orçamento, Stride descarrega texturas não utilizadas. Você pode aumentar isso para manter mais texturas carregadas quando você tem memória para poupar, e vice-versa. |

> [!Note]
> Atualmente, apenas texturas podem ser transmitidas.

Para mais detalhes, consulte [Streaming](../graphics/textures/streaming.md).

## Texturas

![ Configurações de exposição](media/texture-settings.png)

| Propriedade | Descrição |
|-----------------|--------------
| Qualidade da textura | A qualidade da textura ao codificar texturas. **Fast** usa o menor CPU, mas tem a menor qualidade. As configurações mais altas podem resultar em compilações mais lentas, dependendo da plataforma de destino. |

## Substituições

Você pode substituir configurações para plataformas específicas, APIs gráficas e assim por diante. Por exemplo, você pode definir diferentes qualidades de textura para diferentes plataformas.

1. Com o ativo **GameSettings** selecionado, no **Property Grid**, abaixo de **Overrides**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

   ![ Selecione a plataforma gráfica](../platforms/media/add-override.png)

   Game Studio adiciona uma substituição.

2. Na nova substituição, ao lado de **Platforms**, selecione as plataformas às quais deseja que a substituição se aplique. Você pode selecionar quantos precisar.

   ![Selecione a plataforma de gráficos sobrescrevendo](../platforms/media/select-override-platform.png)

3. **Opcional**: Se você quiser que essa substituição se aplique apenas a uma plataforma GPU específica, escolha-a na lista suspensa **Specific filter**.

   ![ Filtro específico ](media/specific-filter.png)

   Você pode adicionar plataformas GPU a esta lista em filtros **Platform** (veja **Adicione um filtro de plataforma** abaixo).

4. No menu suspenso **Configuration**, selecione o tipo de configuração que deseja substituir (**Editor**, **Texture**, **Rendering** ou **Physics**).

   ![Selecione a plataforma de gráficos sobrescrevendo](../platforms/media/select-override-configuration.png)

5. Defina as opções que deseja substituir.

### Adicionar um filtro de plataforma

Você pode escolher itens na lista **Platform Filters** como um filtro de plataforma específico quando você definir uma substituição (veja acima).

![ Filtro específico ](media/specific-filter.png)

1. Com o ativo **GameSettings** selecionado, no **Property Grid**, expanda **Platform Filters**.

   A Grade de Propriedade exibe uma lista de filtros de plataforma que você pode usar.

   ![Lista de filtros de plataforma](media/list-of-platform-filters.png)

2. Na parte inferior da lista, clique em **Add to Platform Filters**.

   Game Studio adiciona um novo item vazio.

3. No campo do item, digite o filtro GPU que deseja adicionar.

   ![Tipe filtro de plataforma](media/add-platform-filter-name.png)

Depois de adicionar um filtro de plataforma, você pode selecioná-lo em **Override > Filtro específico**.

![Override](media/new-GPU-in-override-list.png)

> [!Note]
> Se o novo filtro não estiver listado, remova a substituição e volte a adicioná-lo.

## Tela de Splash

A tela **splash** é exibida quando seu jogo começa. O padrão é a tela de respingo Stride.

> [!Note]
> A tela de respingo só é exibida quando o jogo é construído no modo de lançamento.

![Configurações ](media/splash-screen.png)

| Propriedade | Descrição |
|----------|------------
| Textura | A imagem (por exemplo, logotipo da empresa) exibida como a tela de respingo. Por padrão, isso é *StrideDefaultSplashScreen*. |
| Cor | A cor da tela de respingo desaparece em cima de. Por padrão, isso é preto (*#FF000000*). |

Para mais informações, consulte [Splash screen](/splash-screen.md).

## Ver também

* [Activos](../game-studio/assets.md)