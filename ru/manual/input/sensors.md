# Sensors
# Датчики

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

You can use various **sensors**, such as gyroscopes and accelerometers, as input devices in your project. Sensors are often used in mobile games.
Вы можете использовать различные **сенсоры**, такие как гироскопы и акселерометры, в качестве устройств ввода в вашем проекте.  Датчики часто используются в мобильных играх.

Use @'Stride.Input.InputManager' to access sensors and:
Используйте @'Stride.Input.InputManager' для доступа к датчикам и:

* check if a sensor is supported by Stride
* проверьте, поддерживается ли датчик Stride
* disable a sensor
* отключить датчик
* retrieve sensor data
* получить данные датчика

Stride can receive data from six types of sensor: 
Stride может получать данные от шести типов датчиков:

* Orientation
* Ориентация
* Accelerometer
* Акселерометр
* UserAcceleration
* Ускорение пользователя
* Gravity
* Сила тяжести
* Compass
* Компас
* Gyroscope 
* Гироскоп

They inherit from @'Stride.Input.ISensorDevice'.
Они наследуются от @'Stride.Input.ISensorDevice'.

Stride creates a default instance for each sensor type. You can access each instance from the @'Stride.Input.InputManager'.
Stride создает экземпляр по умолчанию для каждого типа датчика.  Вы можете получить доступ к каждому экземпляру из @'Stride.Input.InputManager'.

Sensors are state-based. Each sensor instance is automatically updated every frame, and contains the value of the sensor just before the update.
Датчики зависят от состояния.  Каждый экземпляр датчика автоматически обновляется в каждом кадре и содержит значение датчика непосредственно перед обновлением.

For example, to access the accelerometer, use:
Например, чтобы получить доступ к акселерометру, используйте:

```cs
```CS
var accelerometer = Input.Accelerometer;
var акселерометр = Input.Accelerometer;
```
```

## Check if a sensor is available
## Проверить, доступен ли датчик

Before you get the value of a sensor, check that the sensor is available in the device (ie not null). For example, to check if the compass is available:
Прежде чем получить значение датчика, убедитесь, что датчик доступен в устройстве (т.е. не является нулевым).  Например, чтобы проверить, доступен ли компас:

```cs
```CS
var hasCompass = Input.Compass != null;
var hasCompass = Input.Compass != null;
```
```

> [!Note]
> [!Примечание]
> If a sensor isn't natively supported by the device, Stride tries to emulate it using the device's other sensors.
> Если датчик изначально не поддерживается устройством, Stride пытается эмулировать его, используя другие датчики устройства.

## Enable a sensor
## Включить датчик

By default, Stride disables all available sensors, as retrieving and updating sensor data takes significant CPU time.
По умолчанию Stride отключает все доступные датчики, поскольку получение и обновление данных датчиков занимает значительное время ЦП.

To enable a sensor, set @'Stride.Input.ISensorDevice.IsEnabled' to `true`. When you don't need the sensor, disable it by setting the property to `false`.
Чтобы включить датчик, установите для параметра @'Stride.Input.ISensorDevice.IsEnabled' значение true.  Если датчик вам не нужен, отключите его, установив для свойства значение false.

## Use the orientation sensor
## Используйте датчик ориентации

The **orientation sensor** indicates the **orientation of the device** with respect to gravity and the Earth's north pole. The orientation is null when the device's Y-axis is aligned with the magnetic north pole and the Z-axis with the gravity. You can use orientation data to control various actions in a game.
**Датчик ориентации** указывает **ориентацию устройства** относительно силы тяжести и северного полюса Земли.  Ориентация является нулевой, когда ось Y устройства совмещена с магнитным северным полюсом, а ось Z — с гравитацией.  Вы можете использовать данные об ориентации для управления различными действиями в игре.

![Orientation sensor](media/sensor-overview-orientation-sensor.png)
![Датчик ориентации](media/sensor-overview-orientation-sensor.png)

Use [Input.Orientation](xref:Stride.Input.InputManager.Orientation) to get the current orientation of the device.
Используйте [Input.Orientation](xref:Stride.Input.InputManager.Orientation), чтобы получить текущую ориентацию устройства.

| Property        | Description     | Declaration 
|  Недвижимость |  Описание |  Декларация
|-----------------|----------------|---------------
|-----------------|----------------|---------------  -
| [Roll](xref:Stride.Input.IOrientationSensor.Roll) | The rotation around the X-axis | `public float Roll { get; }`
|  [Roll](xref:Stride.Input.IOientationSensor.Roll) |  Вращение вокруг оси X |  `public float Roll {получить;  }`
| [Pitch](xref:Stride.Input.IOrientationSensor.Pitch) | The rotation around the Y-axis| `public float Pitch { get; }`
|  [Шаг](внешняя ссылка:Stride.Input.IOientationSensor.Pitch) |  Вращение вокруг оси Y|  `public float Pitch { get;  }`
| [Yaw](xref:Stride.Input.IOrientationSensor.Yaw)  | The rotation around the Z-axis | `public float Yaw { get; }`
|  [Yaw](xref:Stride.Input.IOientationSensor.Yaw) |  Вращение вокруг оси Z |  `public float Yaw { получить;  }`
| [Rotation Matrix](xref:Stride.Input.IOrientationSensor.RotationMatrix) | The device rotation | `public Matrix RotationMatrix { get; }`
|  [Матрица вращения](xref:Stride.Input.IOrientationSensor.RotationMatrix) |  Устройство вращения |  `public Matrix RotationMatrix { get;  }`
| [Quaternion](xref:Stride.Input.IOrientationSensor.Quaternion) | The device orientation and rotation |  `public Quaternion Quaternion { get; }`
|  [Quaternion](xref:Stride.Input.IOrientationSensor.Quaternion) |  Ориентация и вращение устройства |  `общественный кватернион кватернион { получить;  }`

For example:
Например:

```cs
```CS
  var orientation = Input.Orientation.Quaternion;
переменная ориентация = Ввод.Ориентация.Кватернион;
```
```

> [!Note]
> [!Примечание]
> Stride provides the orientation under the pitch/yaw/roll, rotation matrix, or quaternion forms. We recommend the quaternion form as it doesn't suffer from [gimbal lock](https://en.wikipedia.org/wiki/Gimbal_lock).
> Шаг обеспечивает ориентацию в соответствии с тангажом/рысканием/креном, матрицей вращения или формами кватерниона.  Мы рекомендуем форму кватерниона, поскольку она не страдает от [карданной блокировки] (https://en.wikipedia.org/wiki/Gimbal_lock).

## Motion sensors
## Датчики движения
**Motion sensors** measure **acceleration forces** such as tilts, shakes, and swing. Stride supports three types of motion sensor:
**Датчики движения** измеряют **силы ускорения**, такие как наклоны, тряска и раскачивание.  Stride поддерживает три типа датчиков движения:

* **Accelerometer**: measures the **raw acceleration**
* **Акселерометр**: измеряет **грубое ускорение**
* **Gravity**: measures gravity only
* **Гравитация**: измеряет только гравитацию
* **UserAcceleration**: measures only the acceleration applied by the user
* **UserAcceleration**: измеряет только ускорение, примененное пользователем

The sensors use the physic relation ```Accelerometer = Gravity + UserAcceleration```.
Датчики используют физическое соотношение «Акселерометр = Гравитация + UserAcceleration».

![Motion sensors](media/sensor-overview-accelerometer-acceleration-gravity.png)
![Датчики движения](media/sensor-overview-accelerometer-acceleration-gravity.png)

Motion sensors have a single field that specifies the current **acceleration vector** on the device. Stride measures the acceleration in **meters per second squared**.
Датчики движения имеют одно поле, которое указывает текущий **вектор ускорения** на устройстве.  Шаг измеряет ускорение в **метрах в секунду в квадрате**.

This image shows the **coordinate basis** Stride uses to measure acceleration on smartphones and tablets:
На этом изображении показана **координатная основа**, которую Stride использует для измерения ускорения на смартфонах и планшетах:

![Accelerometer](media/sensor-overview-accelerometer-sensor.png)
![Акселерометр](media/sensor-overview-accelerometer-sensor.png)

### Use the accelerometer
### Используйте акселерометр

The **accelerometer** measures the raw acceleration applied to the device. This includes **gravity** and **user acceleration**.
**Акселерометр** измеряет исходное ускорение, прикладываемое к устройству.  Сюда входят **гравитация** и **ускорение пользователя**.

> [!NOTE]
> [!ПРИМЕЧАНИЕ]
> When the user isn't applying force, the **device acceleration** is equal to its **gravity**.
> Когда пользователь не применяет силу, **ускорение устройства** равно его **силе тяжести**.

To get the raw acceleration, use [Accelerometer.Acceleration](xref:Stride.Input.IAccelerometerSensor.Acceleration). For example:
Чтобы получить необработанное ускорение, используйте [Accelerometer.Acceleration](xref:Stride.Input.IAccelerometerSensor.Acceleration).  Например:
```
```
var acceleration = Input.Accelerometer.Acceleration;
var ускорение = Input.Accelerometer.Acceleration;
```
```

### Use the user acceleration sensor
### Использовать пользовательский датчик ускорения
The **user acceleration sensor** is similar to the accelerometer, but measures the acceleration applied **only** by a user (without gravitational acceleration). 
**Датчик ускорения пользователя** аналогичен акселерометру, но измеряет ускорение, приложенное **только** пользователем (без гравитационного ускорения).

To get the user acceleration, use [UserAcceleration.Acceleration](xref:Stride.Input.IUserAccelerationSensor.Acceleration). For example:
Чтобы получить ускорение пользователя, используйте [UserAcceleration.Acceleration](xref:Stride.Input.IUserAccelerationSensor.Acceleration).  Например:

```cs                       
```CS
var userAcceleration = Input.UserAcceleration.Acceleration;
вар userAcceleration = Input.UserAcceleration.Acceleration;
```
```

### Use the gravity sensor
### Используйте датчик гравитации
The gravity sensor gives a 3D vector indicating the direction and magnitude of gravity (meters per second squared) acting on the device.
Датчик гравитации выдает трехмерный вектор, указывающий направление и величину силы тяжести (метры в секунду в квадрате), действующей на устройство.

To get the gravity vector, use [GravitySensor](xref:Stride.Input.IGravitySensor). For example:
Чтобы получить вектор гравитации, используйте [GravitySensor](xref:Stride.Input.IGravitySensor).  Например:

```cs
```CS
 var gravityVector = Input.Gravity.Vector;
vargravityVector = Input.Gravity.Vector;
```
```

### Use the compass sensor
### Используйте датчик компаса

The **compass** indicates measures the angle between the top of the device and the **North Pole**. This is useful, for example, to rotate and align digital maps.
**Компас** показывает угол между верхней частью устройства и **Северным полюсом**.  Это полезно, например, для поворота и выравнивания цифровых карт.

![Compass](media/sensor-overview-compasss.png)
![Компас](media/sensor-overview-compasss.png)

To get this angle, use [CompassSensor.Heading](xref:Stride.Input.ICompassSensor.Heading). For example:
Чтобы получить этот угол, используйте [CompassSensor.Heading](xref:Stride.Input.ICompassSensor.Heading).  Например:

```cs
```CS
var heading = Input.Compass.Heading;
var heading = Input.Compass.Heading;
```
```

### Use the gyroscope
### Используйте гироскоп

The gyroscope measures the **rotation speed** of the device (**radians per second**).
Гироскоп измеряет **скорость вращения** устройства (**радиан в секунду**).

![Gyroscope](media/sensor-overview-gyroscope-sensor.png)
![Гироскоп](media/sensor-overview-gyroscope-sensor.png)

To get the rotation speed, use [GyroscopeSensor.RotationRate](xref:Stride.Input.IGyroscopeSensor.RotationRate). For example:
Чтобы получить скорость вращения, используйте [GyroscopeSensor.RotationRate](xref:Stride.Input.IGyroscopeSensor.RotationRate).  Например:

```cs
```CS
  var rotationRate = Input.Gyroscope.RotationRate; 
var rotateRate = Input.Gyroscope.RotationRate;
  var rotationSpeedX =  rotationRate.X;
вар скорость вращенияX = скорость вращения.X;
  var rotationSpeedY =  rotationRate.Y;
вар вращениеSpeedY = вращениеRate.Y;
  var rotationSpeedZ =  rotationRate.Z;
вар вращениеSpeedZ = вращениеRate.Z;
```
```

## Example code
## Пример кода

```cs
```CS
public class SensorScript : AsyncScript
открытый класс SensorScript: AsyncScript
{
{
	public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
	{
{
		// Check availability of the sensor
// Проверяем наличие датчика
		if(Input.Accelerometer != null)
если (Ввод. Акселерометр! = ноль)
			return;
возвращаться;
			
		// Activate the sensor
// Активируем датчик
		Input.Accelerometer.IsEnabled = true;
Input.Accelerometer.IsEnabled = true;
				
		while (Game.IsRunning)
пока (Game.IsRunning)
		{
{
			// read current acceleration
// читаем текущее ускорение
			var accel = Input.Accelerometer.Acceleration;
var accel = Ввод.Акселерометр.Ускорение;
			
			// perform require works...
// выполнить требуемые работы...
			await Script.NextFrame();
ожидайте Script.NextFrame();
		}		
}
		// Disable the sensor after use
// Отключаем датчик после использования
		Input.Accelerometer.IsEnabled = false;
Input.Accelerometer.IsEnabled = ложь;
	}
}
}
}
```
```

## See also
## Смотрите также
* [Gestures](gestures.md)
* [Жесты](gestures.md)
* [Pointers](pointers.md)
* [Указатели](pointers.md)
* [Input overview](index.md)
* [Обзор ввода](index.md)
