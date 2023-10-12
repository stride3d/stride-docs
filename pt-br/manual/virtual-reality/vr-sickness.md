# Doença da realidade virtual

Alguns jogadores experimentam náuseas e desconforto ao jogar jogos VR. Embora as causas não sejam completamente compreendidas, parece ser causada principalmente pelo jogador se movendo em torno de um ambiente virtual, enquanto seu corpo do mundo real permanece ainda.

Pode não haver nenhuma maneira de evitar completamente a doença de VR em cada jogador. No entanto, existem algumas coisas para ter em mente para minimizar isso em seu jogo. Recomendamos que você teste seu jogo com o maior número possível de jogadores.

## Movimento da câmera

Em geral, os jogadores devem controlar a câmera movendo sua cabeça. Mover a câmera por outros métodos, como gamepads ou teclados, parece ser a maior causa de doença VR, especialmente com movimento horizontal (yaw).

### Disable câmera movimento

Para desativar o movimento da câmera de entradas diferentes de dispositivos VR:

1. No **Asset View** (no painel inferior por padrão), clique duas vezes no **Graphics Compositor** ativo.

   ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

   O editor de compositores gráficos abre.

2. Selecione o **ForwardRenderer**.

   ![Selecionar renderizador ](media/select-forward-renderer.png)

3. No **Property Grid** (à direita por padrão), expanda **VR Settings**.

   ![VR configurações](media/vr-settings.png)

4. Selecione **Ignore rotação da câmera**.

   ![Ignore a rotação da câmera](media/ignore-camera-rotation.png)

Para obter mais informações sobre o compositor gráfico, consulte a página [Graphics compositor](../graphics/graphics-compositor/index.md).

## Taxa de quadros

Em geral, quanto maior o framerate, menos provável os jogadores devem ficar doentes. As taxas de quadros abaixo de 60fps parecem especialmente susceptíveis de causar doença.

## Vecção

A vecção é a sensação de movimento causada pela mudança do ambiente. Você pode ter experimentado isso no mundo real; por exemplo, se você esteve em um trem estacionário e em um trem próximo, criando a sensação de que seu próprio trem está se movendo na direção oposta. Isso pode causar doença em VR.

Para reduzir a vecção em seu jogo, use texturas simples e reduza a velocidade de movimento do jogador.

## Aceleração

Aceleração pode causar doença VR. Por exemplo, se o jogador se move em um trem que acelera e diminui, isso causa mais doença do que se o trem se move em uma velocidade constante.

## Ponto de referência estático

Adicionar um ponto estático de referência à vista do jogador, como um HUD ou "helmet" virtual, pode ajudar a reduzir a doença.

## Ver também

* [Doença da realidade virtual (Wikipedia)](https://en.wikipedia.org/wiki/Virtual_reality_sickness)