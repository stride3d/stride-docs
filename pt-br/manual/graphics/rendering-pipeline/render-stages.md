# Etapas de renderização

** Etapas de gênero** definem como os objetos dados são renderizados (geralmente com seu [effect/shader](../effects-and-shaders/index.md)). Eles também permitem que você controle propriedades avançadas, como classificação e filtragem de objetos.

Os objetos podem se inscrever em várias etapas de renderização. Por exemplo, uma malha geralmente se inscreve tanto nos estágios `Opaque` e `ShadowCaster`, ou no estágio `Transparent`.

> [!Note]
> Os estágios de renderização não definem a ordem de renderização. A ordem de renderização é controlada pelo compositor [graphics](../graphics-compositor/index.md).

## Slots de efeito

**Effect slots** determinam qual [effect/shader](../effects-and-shaders/index.md) um estágio de renderização usa. Você escolhe o slot de efeito com @'Stride.Rendering.RenderStage.EffectSlotName'.

Se várias etapas de renderização exclusivamente renderizar objetos diferentes, as etapas podem compartilhar o mesmo slot de efeito. Por exemplo, como a fase opaca só torna objetos opacos e a fase transparente apenas torna objetos transparentes, ambas as etapas podem usar o slot de efeito principal.

Se eles renderizarem qualquer um dos mesmos objetos, eles não podem compartilhar slots de efeito. É por isso que, por exemplo, nós tipicamente renderizamos malhas opacas com o slot de efeito principal, em seguida, renderiza malhas opacas novamente com o slot de efeito de rodízio sombra para criar sombras.

Uma configuração típica de etapas de renderização:

| Fase de renderização | Fenda de efeito |
| ---------------- | ------------ 
| Opaco | Principal |
| Transparente | Principal |
| UI | Principal |
| Lançador de sombra | Lançador de sombra |

## Classifique objetos em um estágio de renderização

@'Stride.Rendering.RenderStage.SortMode' define como Stride classifica objetos nessa fase de renderização. Stride vem com vários @'Stride. Renderização. Implementações da SortMode, como:

- @'Stride.Rendering.FrontToBackSortMode', que torna objetos de frente para trás com precisão limitada, e tenta evitar mudanças de estado na mesma faixa de profundidade de objetos (útil para objetos e sombras opacas)
- @'Stride.Rendering.BackToFrontSortMode', que torna os objetos estritamente de volta para a frente (útil para objetos transparentes)
- @'Stride.Rendering.StateChangeSortMode', que tenta reduzir as mudanças do estado

Claro que também podes implementar o teu.

## Filtrar objetos em uma etapa de renderização

Para criar seu próprio filtro para objetos em uma etapa de renderização, herda de @'Stride. Renderização. RenderStageFilter'.

### Render seletores de palco

**Render fase selectors** definir quais objetos em sua cena são enviados para que fase de renderização, e escolher qual [effect](../effects-and-shaders/effect-language.md)effect> usar ao renderizar um determinado objeto.

Por exemplo, esta é a configuração típica para malhas:

- @'Stride.Rendering.MeshTransparentRenderStageSelector' escolhe a etapa de renderização `Main` ou `Transparent`, dependendo das propriedades materiais. O efeito padrão é `StrideForwardShadingEffect` definido por Stride (você pode criar seu próprio se quiser).
- @'Stride.Rendering.Shadows.ShadowMapRenderStageSelector' seleciona malhas opacas que lançam sombras e os adiciona à fase de renderização `ShadowMapCaster`. O efeito padrão é `StrideForwardShadingEffect.ShadowMapCaster`, definido por Stride.

Ou pode filtrar por [render group](../graphics-compositor/render-groups-and-masks.md).

Você pode personalizar tudo, para que você possa adicionar outros seletores de fase de renderização predefinidos (por exemplo, adicionar interface de usuário a um passe de tela cheia posterior), ou criar seu próprio seletor específico para o seu jogo.

## Ver também

* [Oleoduto de renderização](index.md)
* [Render características](render-features.md)
* [Efeitos e shaders](../effects-and-shaders/index.md)
* [Compositor gráfico](../graphics-compositor/index.md)