# Sensores

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

Você pode usar vários **sensors**, como giroscópios e acelerômetros, como dispositivos de entrada em seu projeto. Os sensores são frequentemente usados em jogos móveis.

Use o @'Stride.Input.InputManager' para acessar sensores e:

* verificar se um sensor é suportado pelo Stride
* desativar um sensor
* recuperar dados do sensor

O Stride pode receber dados de seis tipos de sensor:

* Orientação
* Acelerador
* Aceleração do usuário
* Gravidade
* Compasso
* Giroscópio

Eles herdam de @'Stride.Input.ISensorDevice'.

O Stride cria uma instância padrão para cada tipo de sensor. Você pode acessar cada instância do @'Stride. Input.InputManager'.

Os sensores são baseados no estado. Cada instância do sensor é atualizada automaticamente cada quadro e contém o valor do sensor antes da atualização.

Por exemplo, para acessar o acelerômetro, use:

```cs
acelerômetro var = Entrada.Acelerômetro;
```

## Verifique se um sensor está disponível

Antes de obter o valor de um sensor, verifique se o sensor está disponível no dispositivo (ou seja, não nulo). Por exemplo, para verificar se a bússola está disponível:

```cs
var hasCompass = Input.Compass!= null;
```

> [!Note]
> Se um sensor não é suportado nativamente pelo dispositivo, a Stride tenta emula-lo usando outros sensores do dispositivo.

## Habilitar um sensor

Por padrão, a Stride desabilita todos os sensores disponíveis, pois a recuperação e a atualização dos dados do sensor leva um tempo significativo da CPU.

Para ativar um sensor, configure @'Stride.Input.ISensorDevice.IsEnabled' para `true`. Quando você não precisa do sensor, desative-o definindo a propriedade para `false`.

## Use o sensor de orientação

O sensor de orientação **** indica a orientação ** do dispositivo** em relação à gravidade e ao pólo norte da Terra. A orientação é nula quando o eixo Y do dispositivo está alinhado com o polo norte magnético e o eixo Z com a gravidade. Você pode usar dados de orientação para controlar várias ações em um jogo.

![ Sensor de orientação](media/sensor-overview-orientation-sensor.png)

Use [Input.Orientation](xref:Stride.Input.InputManager.Orientation) para obter a orientação atual do dispositivo.

| Propriedade | Descrição | Declaração |
|-----------------|----------------|---------------
| [Rolo](xref:Stride.Input.IOrientationSensor.Roll) | A rotação em torno do eixo X | `público float Roll { get; }` |
| [Pitch](xref:Stride.Input.IOrientationSensor.Pitch) | A rotação em torno do eixo Y | `público float Pitch { get; }` |
| [Sim](xref:Stride.Input.IOrientationSensor.Yaw) | A rotação em torno do eixo Z | `flutuação pública Sim` |
| [Matriz de rotação](xref:Stride.Input.IOrientationSensor.RotationMatrix) | A rotação do dispositivo | `rotação da Matriz Pública Matriz` |
| [Quantidade](xref:Stride.Input.IOrientationSensor.Quaternion) | A orientação e rotação do dispositivo | `público Quaternion { get; }` |

Por exemplo:

```cs
  var orientação = Entrada.Orientação. Quaternion;
```

> [!Note]
> Stride fornece a orientação sob as formas pitch/yaw/roll, rotação, ou quaternion. Recomendamos o formulário quaternion como ele não sofre de [gimbal lock](https://en.wikipedia.org/wiki/Gimbal_lock).

## Sensores de movimento
** Sensores de movimento** medem **forças de aceleração** como inclinação, tremores e balanço. Stride suporta três tipos de sensor de movimento:

* **Acelerômetro**: mede a aceleração **raw**
* **Gravidade**: mede apenas a gravidade
* **UserAcceleration**: mede apenas a aceleração aplicada pelo usuário

Os sensores usam a relação física ```Acelerômetro = Gravidade + UserAcceleration```.

![ Sensores de movimento](media/sensor-overview-accelerometer-acceleration-gravity.png)

Sensores de movimento têm um único campo que especifica o vetor de aceleração ** atual** no dispositivo. Stride mede a aceleração em **meters por segundo squared**.

Esta imagem mostra a base coordenada **** Stride usa para medir a aceleração em smartphones e tablets:

![Acelerômetro](media/sensor-overview-accelerometer-sensor.png)

### Use o acelerômetro

O acelerômetro ** acelerômetro** mede a aceleração bruta aplicada ao dispositivo. Isso inclui **gravidade** e **Aceleração do usuário**.

> [!NOTE]
> Quando o usuário não está aplicando força, a aceleração **device** é igual à sua gravidade ****.

Para obter a aceleração bruta, use [Accelerometer.Aceleration](xref:Stride.Input.IAccelerometerSensor.Acceleration). Por exemplo:
```
var aceleração = Entrada.Acelerômetro.Aceleração;
```

### Use o sensor de aceleração do usuário
O sensor de aceleração **user** é semelhante ao acelerômetro, mas mede a aceleração aplicada **only** por um usuário (sem aceleração gravitacional).

Para obter a aceleração do usuário, use [UserAcceleration.Acceleration](xref:Stride.Input.IUserAccelerationSensor.Acceleration). Por exemplo:

```cs
var userAcceleration = Input.UserAcceleration.Aceleration;
```

### Use o sensor de gravidade
O sensor de gravidade dá um vetor 3D indicando a direção e a magnitude da gravidade (metros por segundo quadrado) atuando no dispositivo.

Para obter o vetor de gravidade, use [GravitySensor](xref:Stride.Input.IGravitySensor). Por exemplo:

```cs
 var gravidadeVector = Entrada.Gravidade.Vector;
```

### Use o sensor de bússola

O **compass** indica medidas o ângulo entre o topo do dispositivo e o **North Pole**. Isto é útil, por exemplo, girar e alinhar mapas digitais.

![ Compassa](media/sensor-overview-compasss.png)

Para obter esse ângulo, use [CompassSensor.Heading](xref:Stride.Input.ICompassSensor.Heading). Por exemplo:

```cs
var cabeçalho = Entrada.Compass.Heading;
```

### Use o giroscópio

O giroscópio mede a velocidade de rotação **** do dispositivo (**radians per second**).

![Gyroscope](media/sensor-overview-gyroscope-sensor.png)

Para obter a velocidade de rotação, use [GyroscopeSensor.RotationRate](xref:Stride.Input.IGyroscopeSensor.RotationRate). Por exemplo:

```cs
  rotação da vareta Taxa = Entrada.Giroscópio.Rotação Taxa; 
  rotação da vareta SpeedX = rotaçãoRate.X;
  rotação da vareta SpeedY = rotaçãoRate.Y;
  rotação da vareta SpeedZ = rotação Taxa.Z;
```

## Exemplo de código

```cs
classe pública SensorScript : AsyncScript
(
	override público async Task Execute()
	(
		// Verificar disponibilidade do sensor
		se(Input.Accelerometer!= null)
			voltar;
			
		// Ativar o sensor
		Input.Acelerômetro. É permitido = verdadeiro;
				
		enquanto (Game.IsRunning)
		(
			// leitura da aceleração atual
			var accel = Entrada.Acelerômetro.Aceleração;
			
			// executar requerem trabalhos...
			await Script.NextFrame();
		}		
		// Desativar o sensor após o uso
		Input.Acelerômetro. IsEnabled = false;
	}
}
```

## Ver também
* [Gestos](gestures.md)
* [Pontos](pointers.md)
* [Visão geral da entrada](index.md)