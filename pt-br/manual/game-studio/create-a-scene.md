# Criar e abrir uma cena

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Level Designer</span>

Quando você cria um novo projeto, o Game Studio cria uma cena inicial e o popula com entidades básicas, como uma luz, uma câmera e um skybox.

Você pode criar cenas como qualquer outro ativo. Como eles são ativos complexos, eles têm um editor dedicado, o **Scene Editor**.

## Criar uma cena

1. No **Asset View** (por padrão no painel inferior), clique em **Add asset** e selecione **Scenes**.

   ![ Adicionar uma cena](media/add-scene.png)

2. Selecione o modelo **scene apropriado**.

   | Modelo | Resultado |
   ---------|--------
   | Cena vazia | Uma cena vazia sem entidades ou pipeline de renderização pré-configurado |
   | Cena com pipeline HDR | Uma cena contendo entidades básicas e pré-configurada para renderização HDR |
   | Cena com gasoduto LDR | Uma cena contendo entidades básicas e pré-configurada para renderização LDR |

## Abra uma cena no Editor de cenas

No **Asset View**:

![ Selecione uma cena no Asset View](media/open-scene-from-asset-view.png)

* clique duas vezes no ativo da cena, ou
* clique com o botão direito do mouse no ativo e selecione **Editar asset**, ou
* selecione o ativo e digite **Ctrl + Enter**

> [!TIP]
> Você pode ter várias cenas abertas simultaneamente.

## Use o editor de cenas

![Scene Editor](media/create-a-scene-default-scene-editor.png)

As guias **Scene Editor** (A) exibem as cenas abertas. Você pode alternar entre cenas abertas usando as abas.

O **Entity Tree** (B) mostra a hierarquia das entidades incluídas na cena. A mesma hierarquia de entidades é aplicada em tempo de execução. Você pode usar o Entity Tree para navegar, selecionar, renomear e reorganizar suas entidades.

Você pode usar o **tool bar** (C) para modificar entidades e alterar a exibição do Editor de cena.

A janela **main** (D) mostra uma representação simplificada de sua cena, com suas entidades posicionadas dentro dela. Para entidades que não têm forma (E), Game Studio os representa com **2D gizmos**; por exemplo, as câmeras são representadas com ícones da câmera.

## Ver também

* [Navegue no Editor de Cena](navigate-in-the-scene-editor.md)
* [Gerenciar cenas](manage-scenes.md)
* [Cenas de carga](load-scenes.md)
* [Adicionar entidades](add-entities.md)
* [Gerenciar entidades](manage-entities.md)