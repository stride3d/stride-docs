# Grupos de navegação

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success"> Designer de nível </span>
<span class="badge text-bg-success">Programação</span>

** Grupos de navegação** definem diferentes propriedades de navegação para as entidades que você adiciona a elas. Você define grupos de navegação no projeto **game settings**.

Você pode criar diferentes grupos de navegação para diferentes tipos de entidade. Por exemplo, se o seu jogo possui veículos controlados por scripts, você pode criar diferentes grupos de navegação para diferentes tamanhos de veículo, cada um com diferentes propriedades: um grupo de carros, um grupo de ônibus, um grupo de motocicletas e assim por diante.

## Criar um grupo de navegação

1. No **Solution Explorer** (o painel inferior esquerdo por padrão), selecione a pasta **Assets**.

   ![Select Assets pasta asset](media/select-asset-folder.png)

2. No **Asset View** (o painel inferior por padrão), selecione o ativo **Game Settings**.

   ![Selecionar configurações de jogo asset](media/select-game-settings-asset.png)

3. No **Property Grid** (o painel direito por padrão), expanda **Configurações de navegação**.

   ![ Configurações do jogo ](media/navigation-settings.png)

4. Ao lado de **Groups**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

   Game Studio adiciona um novo item à lista de grupos de navegação.

   ![ Propriedades do grupo de navegação](media/navigation-group-properties.png)

5. Defina as propriedades para o grupo de navegação. As entidades que você adicionar a este grupo usam essas propriedades.

## Propriedades do grupo de navegação

Na maioria dos casos, as propriedades do grupo de navegação devem corresponder aproximadamente às propriedades no componente [caracter](../physics/characters.md) das entidades do grupo, se tiverem uma.

| Propriedade | Descrição |
|----------------------|------------
| Item | O nome do grupo |
| Altura | A altura das entidades neste grupo. As entidades não podem entrar em áreas com tectos inferiores a este valor |
| Altura de escalada máxima | A altura máxima que as entidades deste grupo podem subir |
| Inclinação máxima | A inclinação máxima (em graus) que as entidades neste grupo podem subir. As entidades não podem subir ou descer declives superiores a este valor. Na maioria dos casos, este deve ser aproximadamente o mesmo valor que a propriedade **max inclinação** no componente [caracter](../physics/characters.md) das entidades neste grupo, se tiverem uma. |
| Radius | Quanto maior este valor, maior a área das entidades de malha de navegação usar. As entidades não podem passar por lacunas de menos do do dobro do raio. |

## Ver também

* [Malhas de navegação](navigation-meshes.md)
* [Caixas de ligação de navegação](navigation-bounding-boxes.md)
* [Componentes de navegação](navigation-components.md)
* [Navegação dinâmica](dynamic-navigation.md)
* [Física — Personagens](../physics/characters.md)