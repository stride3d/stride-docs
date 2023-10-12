# Gestos

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

Gestos são padrões predefinidos [pointer](pointers.md). Stride pode reconhecer gestos e desencadear eventos correspondentes. Por exemplo, em um jogo de estratégia, o jogador pode arrastar e soltar uma unidade para o campo de batalha com um gesto **drag**. Gestos podem usar um ou vários dedos.

> [!Note]
> Todos os comprimentos, velocidades e margens de erro dos arquivos de configuração devem usar valores normalizados.

## Vire o reconhecimento de gestos

Por padrão, o sistema de entrada não reconhece gestos, pois isso requer tempo de CPU.

Para ativar o reconhecimento de gestos:

1. Crie uma instância da classe de configuração para o gesto que deseja reconhecer. Por exemplo, para o gesto de arrastar, crie uma instância de @'Stride.Input.GestureConfigDrag'.
2. Configurar os parâmetros de classe.
3. Adicione a configuração de gesto à coleção @'Stride.Input.InputManager.Gestures.

> [!Warning]
> Depois de ativar o reconhecimento por um gesto, você não pode modificar os parâmetros do gesto. Se você precisar fazer isso, exclua o gesto do @'Stride. Input.InputManager.Gestures' coleção e criar uma nova entrada com novos parâmetros.

### Desligue o reconhecimento do gesto

Exclua o gesto do [InputManager. Gestures](xref:Stride.Input.InputManager.Gestures) coleção.

## Reconhecimento de natureza

Quando o sistema de entrada detecta um gesto, ele adiciona um @'Stride. Input.GestureEvent' para a lista de [InputManager.GestureEvents](xref:Stride.Input.InputManager.GestureEvents). O evento contém informações sobre o gesto e seu estado, como sua localização e o número de dedos usados.

> [!Note]
> Cada gesto tem sua própria classe de evento de gesto (veja abaixo).

O campo [GestureEvent.Type](xref:Stride.Input.GestureEvent.Type) indica qual gesto foi reconhecido. Você pode então lançar o evento de gesto de base no tipo de evento específico de gestos para ter informações específicas sobre o evento.

Stride pode detectar vários gestos simultaneamente, de modo que a lista de eventos pode conter mais de um item em uma atualização.

A lista é limpa com cada atualização, então você não precisa limpá-la manualmente.

## Configurar gestos

Nas classes @'Stride.Input.GestureConfig', você pode configurar parâmetros incluindo:

* o número de dedos que o gesto usa

* o número e duração de torneiras que o gesto usa

* a direção do gesto

> [!Note]
> Cada gesto tem sua própria classe de configuração com parâmetros de configuração específicos (veja abaixo).

## Tipos de gesto

Stride suporta dois tipos principais de gesto:

* **Discrete** gestos (tap, flick, long press) desencadear um único evento.

   * [Toca a tocar](#Tap)

   * [Flick](#Flick)

   * [Imprensa longa](#Long-press)

* ** Os gestos contínuos** (drag e compósito) desencadeiam uma série de eventos quando o usuário muda a direção do gesto.

   * [Arraste](#Drag)

   * [Composto](#Composite)

### Gestos discretos

#### <a name="Tap"> Toque </a>

![Tap gesto](media/gestures_tap_gesture.png)

O usuário toca a tela e remove rapidamente o dedo.

**Configuration class**: @'Stride.Input.GestureConfigTap '

**Event class**: @'Stride.Input.GestureEventTap '

O número de dedos na tela não pode variar durante o gesto. Para definir o número de dedos necessários para uma torneira, modifique @'Stride.Input.GestureConfig.RequiredNumberOfFingers'.

> [!TIP]
> Para distinguir torneiras únicas de multi-taps, o sistema usa latência em eventos de torneira. Para desativar isso, defina o campo [GestureConfigTap.MaximumTimeBetweenTaps](xref:Stride.Input.GestureConfigTap.MaximumTimeBetweenTaps) para **0**.

#### <a name="Flick"> Flick</a>

![Flick gesto](media/gestures_flick_gesture.png)

O usuário toca a tela, executa uma tradução direta rápida e retira seu dedo (s).

**Configuration class**: @'Stride.Input.GestureConfigFlick '

**Event class**: @'Stride.Input.GestureEventFlick '

O número de dedos na tela não pode durante o gesto.

Para definir um comprimento mínimo para o gesto flick, use [GestureConfigFlick.MinimumFlickLength](xref:Stride.Input.GestureConfigFlick.MinimumFlickLength).

Para restringir a direção do flick a **vertical** ou **horizontal**, use
[GestureConfigFlick.FlickShape](xref:Stride.Input.GestureConfigFlick.FlickShape).

#### <a name="Long-press"> Imprensa longa </a>

![Long press gesto](media/gestures_long_pres_gesture.png)

O usuário toca a tela e mantém a pressão sem remover seu dedo por um determinado período de tempo (o tempo padrão é um segundo).

**Configuration class**: [GestureConfigLongPress](xref:Stride.Input.GestureConfigLongPress)

**Event class**: [GestureEventLong Imprensa](xref:Stride.Input.GestureEventLongPress)

O número de dedos na tela não pode variar durante o gesto.

Para alterar o comprimento da prensa mínima para o gesto de prensa longa, modifique [GestureConfigLongPress.RequiredPressTime](xref:Stride.Input.GestureConfigLongPress.RequiredPressTime).

### Gestos contínuos

#### <a name="Drag"> Drag</a>

![Drag gesto](media/gestures_drag_gesture.png)

O usuário toca a tela, executa uma tradução e retira seus dedos.

**Configuration class**: [GestureConfigDrag](xref:Stride.Input.GestureConfigDrag)

**Event class**: [GestureEventDrag](xref:Stride.Input.GestureEventDrag)

O número de dedos na tela não pode variar durante o gesto.

Para detectar arrastos menores, diminua [GestureConfigDrag.MinimumDragDistance](xref:Stride.Input.GestureConfigDrag.MinimumDragDistance).

Para restringir a direção do arrasto para **vertical** ou **horizontal**, use [GestureConfigDrag.DragShape](xref:Stride.Input.GestureConfigDrag.DragShape).

#### <a name="Composite"> Composite</a>

![Gestão de tradução](media/gestures_translation_gesture.png) ![Gestão de cálculo ](media/gestures_scale_gesture.png)Gestão de rotação](media/gestures_rotation_gesture.png)![

O usuário toca a tela com dois dedos e os move de forma independente.

**Configuration class**: @'Stride.Input.GestureConfigComposite '

**Event class**: @'Stride.Input.GestureEventComposite '

O gesto composto requer exatamente dois dedos na tela. É acionado quando o sistema detecta uma das três ações básicas:
* _Translation_: o usuário traduz dois dedos juntos na mesma direção.
* _Scale_: o usuário move dois dedos mais próximos ou mais distantes.
* _Rotação_: o usuário gira dois dedos em torno de um ponto central.

## Estado de Gesture

Um gesto sempre tem um dos quatro estados:

* Began

* Mudança

* Fim

* Ocorrência

**Discrete** gestos (tap, flick, long press) sempre têm o estado _occurred_. ** Os gestos (drag e compósito) sempre começam com o estado _began_, seguidos por quaisquer estados _changed_ e terminam com o estado _ended_.**

Para consultar o estado atual de um gesto, use o campo [GestureEvent.State](xref:Stride.Input.GestureEvent.State) do evento de gesto acionado.

## Exemplo de código

### Ativar ou desativar o reconhecimento de gestos

Para criar a configuração de um gesto que você deseja reconhecer:

```cs
// Crie a configuração de um gesto que deseja reconhecer.
var single TapConfig = novo GestureConfigTap();

// Iniciar reconhecimento de gestos.
Entrada.Gestures.Add (singleTapConfig);

// Crie a configuração do gesto que deseja reconhecer.
var duplo TapConfig = novo GestureConfigTap(2, 1);

// Iniciar reconhecimento de gesto de torneira dupla.
Entrada.Gestures.Add (doubleTapConfig);

// Pare de reconhecer gestos.
Input.Gestures.Remover(singleTapConfig);

// Parem todos os reconhecimentos de gestos.
Entrada.Gesturas.Clear();
```

### Configurar o gesto

Cada classe de configuração tem um construtor sem parâmetro que corresponde à configuração de gesto padrão. Você pode usar construtores especiais para parâmetros frequentemente modificados.

> [!warning]
> Não recomendamos que você modifique outros campos, pois isso pode quebrar o sistema de entrada. Mas se você precisar, você pode modificá-los usando as propriedades correspondentes.

```cs
// Default gesto config.
var single TapConfig = novo GestureConfigTap();

// Personalizar a configuração do gesto usando o construtor dedicado.
var duplo TapConfig = novo GestureConfigTap(2, 2);

// Personalizar a configuração do gesto acessando diretamente a propriedade desejada.
// Certifica-te que sabes o que estás a fazer! Modificar isso pode quebrar o sistema de entrada.
var noLatencyTap = novo GestureConfigTap() { MaximumTimeBetweenTaps= TimeSpan.Zero };
```

### Eventos de gesto de acesso

Você pode acessar a lista de eventos desencadeados por gestos reconhecidos usando a coleção [InputManager.GestureEvents](xref:Stride.Input.InputManager.GestureEvents). A coleção é automaticamente limpa em cada atualização.

```cs
linha de produção Eventos = Entrada.Gestura Eventos;
```

### Identificar o tipo de gesto

Use o campo [GestureEvent.Type](xref:Stride.Input.GestureEvent.Type) para identificar o tipo de gesto, então lançá-lo para o tipo de evento apropriado para obter informações adicionais sobre o evento.

```cs
foreach( var gesto Evento em Input.GestureEvents)
(
   	// Determinar se o evento é de um gesto de toque
	if (gestureEvent. Tipo! GestureType.Tap)
		continuar;
   
	// Elenco uma classe específica de eventos de torneira.
	GestureEvent Toque em tapEvent = (GestureEventTap) gesto Evento;
	
    // Acesso campo específico de tap-event.
    log.Info("Tap position: (0}.", tapEvent.TapPosition);
}
```

### Identificar o estado de gesto

Use o campo [GestureEvent.State](xref:Stride.Input.GestureEvent.State) para obter estado de evento de gesto.

```cs
switch (compositeGestureEvent.State)
(
caso GestureState. Começou
	image.ComputePreview();
	quebrar;
caso GestureState. Alterado:
	image.TransformPreview (compositeGestureEvent.TotalScale, composiçãoGestureEvent.TotalRotation);
	quebrar;
caso GestureState. Fim:
	image.TransformReal (Imagem compostaGestureEvent.TotalScale, composiçãoGestureEvent.TotalRotation);
	quebrar;
padrão:
	quebrar;
}
```

## Ver também

* [Pontos](pointers.md)
* [Botões virtuais](virtual-buttons.md)
* [Visão geral da entrada](index.md)
