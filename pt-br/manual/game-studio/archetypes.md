# Arquétipos

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Designer</span>

Um **archetype** é um ativo mestre que controla as propriedades de ativos que você **derive** a partir dele. Os ativos derivados são úteis quando você quer criar uma versão "remixada" de um ativo.

Por exemplo, imagine que temos três entidades de esferas que compartilham um ativo material chamado *Metal*. O ativo de metal tem propriedades, incluindo cor, brilho e assim por diante.

![ Três esferas metálicas](media/archetypes-three-spheres-metal.webp)

Se mudarmos uma propriedade no ativo **Metal**, ela se aplica a todas as três esferas. Então, por exemplo, se mudarmos a propriedade da cor, todas as três esferas mudam de cor.

![ Três esferas de ouro](media/archetypes-three-spheres-gold.webp)

Agora imagine que queremos mudar a cor de apenas *one* esfera, mas mantenha suas outras propriedades iguais. Podemos duplicar o ativo material, mudar sua cor e, em seguida, aplicar o novo ativo a apenas uma esfera. Mas se mais tarde queremos mudar uma propriedade diferente em *all* as esferas, temos que modificar ambos os ativos. Isso é demorado e deixa espaço para erros.

A melhor abordagem é derivar um novo ativo do arquétipo. O ativo derivado herda propriedades do arquétipo e permite que você substitua propriedades individuais onde você precisa delas. Por exemplo, podemos derivar o ativo material da esfera e substituir sua cor. Então, se mudarmos o brilho do arquétipo, o brilho de todas as três esferas muda.

![Create derivado asset](media/archetypes-three-spheres.png)

Você pode derivar um ativo de um arquétipo, então, por sua vez, deriva outro ativo daquele ativo derivado. Desta forma, você pode criar diferentes camadas de ativos para manter seu projeto organizado:

```cs
Arquétipo
    Activo derivado
        Activo derivado
```

## Derive um ativo de um arquétipo

No **Asset View**, clique com o botão direito do mouse no ativo que você deseja obter um ativo de e selecione **Create derivado asset**:

![Create derivado asset](media/archetypes-create-derived-asset.png)

Game Studio adiciona um novo **derived asset** ao projeto. Este ativo deriva suas propriedades do ativo **archetype**.

As propriedades de ativos derivadas exibem o ativo do arquétipo sob **Arquétipo**:

![Ativos derivados na propriedade Grid](media/archetypes-archetype-in-property-grid.png)

Você pode clicar com o botão direito do mouse no atributo arquétipo na Grade de Propriedades e selecionar **Selecione o aset referenciado** para selecionar rapidamente o ativo arquétipo:

![Select referenciado asset](media/archetypes-select-the-referenced-asset.png)

### Propriedades de Overridden

O **Property Grid** mostra quais propriedades do ativo derivado diferem do arquétipo. **Overridden** e **unique** propriedades são **white**, e **inherited** (identical) propriedades são **gray**.

Nesta captura de tela, a propriedade **Diffuse Map** é substituída. As outras propriedades são herdadas:

![ Propriedades anteriores são brancas](media/archetypes-overriden-properties-appear-white.png)

### Repor uma propriedade ao valor arquétipo

Você pode redefinir propriedades sobrepostas ou únicas de um ativo derivado para os valores no arquétipo. Para fazer isso, clique com o botão direito do mouse na propriedade overridden e selecione **Reset to base value**.

![ Repor ao valor de base](media/archetypes-reset-property-to-base-value.png)

### Limpar um arquétipo

Você pode remover a ligação entre o arquétipo e o ativo derivado. Isso significa que o ativo derivado não herda mais mudanças no arquétipo; torna-se completamente independente.

Para fazer isso, no **Asset View**, clique com o botão direito do mouse no ativo derivado e selecione **Clear arquétype**.

![Clear arquétipo](media/archetypes-clear-archetypes.png)

## Ver também

* [Activos](../game-studio/assets.md)
* [Pré-fabricados](prefabs/index.md)