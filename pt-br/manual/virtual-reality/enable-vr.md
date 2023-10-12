# Habilitar VR

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Esta página explica como adicionar suporte para os dispositivos Oculus Rift e Vive ao seu jogo. O Stride ainda não suporta outros dispositivos VR.

1. No **Asset View** (no painel inferior por padrão), clique duas vezes no **Graphics Compositor** ativo.

   ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

   O editor de compositores gráficos abre.

2. No editor de compositores gráficos, selecione o nó **forward renderer**.

   ![Selecionar renderizador ](media/select-forward-renderer.png)

3. No **Property Grid** (à direita por padrão), expanda **VR Settings**.

   ![VR configurações](media/vr-settings.png)

4. Ao lado de ** APIs exigidas**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

   Game Studio adiciona uma nova API à lista.

   ![ Adicionar item VR](media/add-vr-api.png)

5. No menu drop-down **Item**, selecione uma API VR que você deseja que seu jogo suporte.

   ![ Adicionar API](media/select-vr-api.png)

   | API | Descrição |
   |--------| --------
   | Oculus | Suporta dispositivos Oculus Rift (melhor suporte para Oculus Rift) |
   | OpenVR | Suporta dispositivos Vive e Oculus Rift (melhor suporte para Vive) |
   | Pateta | Exibe o jogo na tela com duas câmeras (um por olho), em vez do dispositivo VR. Isto é principalmente útil para o desenvolvimento. Para exibir a visualização fictícia no Game Studio Scene Editor, certifique-se de que o editor está conectado ao renderizador para a frente. |

6. Repita os passos 4 e 5 para adicionar quantas APIs precisar.

7. Certifique-se de que a ordem da lista está correta. Quando seu jogo é executado, ele tenta usar os dispositivos na ordem de lista. Por exemplo, se o primeiro item é Dummy, o jogo não usa nenhum dispositivo VR. Se o último item é Dummy, o jogo só o usa se não houver nenhum dispositivo VR disponível.

   Para alterar a ordem, altere o dispositivo VR selecionado em cada item.

   > [!Tip]
   > Embora a API OpenVR suporta dispositivos Vive e Oculus Rift, a API Oculus oferece melhor suporte para o Oculus Rift. Por esta razão, recomendamos a seguinte ordem de lista para a maioria das situações:
   >
   > * Item 0: Oculus
   >
   > * Item 1: OpenVR
   >
   > Isso significa que seu jogo usa a API Oculus se um dispositivo Oculus Rift estiver conectado, e a API OpenVR se outro dispositivo (por exemplo, a Vive) estiver conectado.

8. Habilitar **VRRendererConfigurações**.

   ![VR configurações de renderizador](media/vr-renderer-settings.png)

Seu jogo agora está pronto para usar VR.

> [!Note]
> Depois de alterar APIs, você precisa recarregar o projeto (**File > Recarregue projeto**) para que a mudança tenha efeito no tempo de execução.

## Propriedades de VR

| Propriedade | Descrição |
|-------------------------|--------
| Ignorar a rotação da câmera | Desativar o movimento da câmera de entradas diferentes de dispositivos VR, ajudando a reduzir a doença [VR](vr-sickness.md) |
| Escala de resolução | A resolução da imagem exibida no dispositivo VR. As resoluções mais altas produzem imagens melhores, mas exigem mais GPU. |

## Multisample anti-aliasing

Como os artefatos de aliasing são mais óbvios em VR, recomendamos que você **MSAA** (multisample anti-aliasing) nas propriedades de renderizador para a frente (acima das configurações de VR).

![MSAA](media/MSAA.png)

> [!Note]
> MSAA não é suportado para Direct3D 11 ou inferior.

## Sincronização de tela desabilitada

Para melhor desempenho, os jogos VR precisam ser executados em 90FPS. Isso significa que você tem que desligar a sincronização com seu monitor.

Por enquanto, isso é feito em um script. Recomendamos que você use `IsDrawDesynchronized` em `IsFixedTimeStep`.

```cs
usando o sistema;
usando Stride. Motor;

namespace VRSandbox
(
    classe VRSandboxApp
    (
        vazio estático Principal (string[] args)
        (
            usando (jogo devar = novo Jogo()))
            (
                //VR precisa ser executado em 90 fps, vsync deve ser desativado, o sorteio não deve ser sincronizado
                //Você pode querer definir o passo do tempo da física para 90 fps, bem se você usar o controlador de caracteres com movimentos não regulares, mas, por favor, evite isso! usar rígidas Kinematic quando possível.
                game.IsFixedTimeStep = true;
                game.IsDrawDesynchronized = true;
                game.GraphicsDeviceManager.SynchronizeWithVerticalRetrace = false;
                game.TargetElapsedTime = TimeSpan.FromSeconds(1 / 90.0f);
                game.Run();
            }
        }
    }
}
```

## Ver também

* [Doença de RV](vr-sickness.md)
* [Compositor gráfico](../graphics/graphics-compositor/index.md)