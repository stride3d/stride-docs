# Navegação dinâmica

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success"> Designer de nível </span>
<span class="badge text-bg-success">Programação</span>

Se você ativar a navegação **dinâmica**, as entidades com componentes de navegação não precisam de um ativo [navigation mesh](navigation-meshes.md). Em vez disso, as entidades geram malhas de navegação dinamicamente.

> [!Note]
> Certifique-se de que as cenas que você deseja que as entidades naveguem dinamicamente têm [navigação delimitando caixas](navigation-bounding-boxes.md).

## Ativar navegação dinâmica

Você pode ativar e desativar a navegação dinâmica no ativo global [game settings](../game-studio/game-settings.md).

1. Nas entidades que você deseja navegar dinamicamente, sob as propriedades do componente de navegação, ao lado de **Navigation mesh**, certifique-se de que nenhuma malha de navegação é selecionada.

   ![ Nenhuma malha de navegação selecionada](media/no-navigation-mesh-selected.png)

   Para mais informações sobre o componente de navegação, consulte os componentes de navegação [Navigation](navigation-components.md).

2. No **Solution Explorer** (o painel inferior esquerdo por padrão), selecione a pasta **Assets**.

   ![Select Assets pasta asset](media/select-asset-folder.png)

3. No **Asset View** (o painel inferior por padrão), selecione o ativo **Game Settings**.

   ![Selecionar configurações de jogo asset](media/select-game-settings-asset.png)

4. No **Property Grid** (o painel direito por padrão), sob **Configurações de navegação**, expanda ** malha de navegação dinâmica**.

   ![ Configurações do jogo ](media/expand-dynamic-navigation-mesh.png)

5. Selecione a caixa de seleção **Ativar navegação dinâmica**.

   ![ Ativar caixa de verificação de navegação dinâmica](media/enable-dynamic-navigation.png)

## Propriedades de malha de navegação dinâmica

| Propriedade | Descrição |
|---------------------------|--------------
| Activado | Ativar navegação dinâmica em componentes de navegação que não tenham rede de navegação atribuída |
| Grupos de colisão incluídos | Os grupos de colisão usam malhas de navegação geradas dinamicamente. Por padrão, as malhas usam todos os grupos de colisão |
| Configurar configurações | Configurações avançadas para malhas de navegação geradas dinamicamente |

## Ativar e desativar a navegação dinâmica de um script

Exemplo de código:

```cs
// Encontrar e ativar o sistema de malha de navegação dinâmica
dynamicNavigationMeshSystem = Game.GameSystems.OfType<DynamicNavigationMeshSystem>().FirstOrDefault();
dynamicNavigationMeshSystem. Activado = verdadeiro;

// Isso impede o sistema de malha de navegação dinâmica de reconstruir automaticamente nos casos de folowing:
// - cenas de carregamento/descarregamento
// - adicionando/removendo componentes de colisão estática
// - adicionando/removendo caixas de amarração de malha de navegação
dynamicNavigationMeshSystem.AutomaticRebuild = false;

//...

se (/* qualquer condição que deve fazer com que a malha de navegação atualize (por exemplo, porta aberta/fecha) */)
(
	// Comece uma reconstrução assíncrona da malha de navegação
	var reconstruirTask = dinâmicoNavigationMeshSystem.Rebuild();
	reconstruirTask.ContinueWith(x) =>
	(
		se (x.Result. Sucesso)
		(
			// A malha de navegação é reconstruída com sucesso
		}
	});
}
```

## Ver também

* [Grupos de navegação](navigation-groups.md)
* [Malhas de navegação](navigation-meshes.md)
* [Caixas de ligação de navegação](navigation-bounding-boxes.md)
* [Componentes de navegação](navigation-components.md)