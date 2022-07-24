# Запуск игры

<span class="label label-doc-level">Сложность / Лёгкая</span>

Эта статься объясняет как запустить вашу игру, используя Game Studio или Visual Studio.

## Запуск игры используя Game Studio

> [!Note]
> Game Studio Не могу запустить игры для Windows Store или платформ UWP (Universal Windows Platforms). Чтобы запустить игру для этих платформ, используйте Visual Studio (см. Ниже).

  1. В **toolbar**, выберите свою целевую платформу.

      ![Выбор платформы](media/launch-your-game-game-studio-profiles.png)

      > [!Note]
      > Вы можете выбрать только те платформы, которые вы выбрали в **Create a new game** диалоге при создании проекта. Чтобы добавить дополнительные платформы в проект, см. [добавить или удалить платформу](../platforms/add-or-remove-a-platform.md).

  2. Чтобы запустить игру, нажмите ![Иконка играть](media/launch-your-game-play-icon.png) в панели инструментов или нажмите **F5**.

      ![Иконка старта игры в Game Studio](media/game-studio-toolbar-build-button.png)

  В **Output window** окне показан прогресс сборки. 

  ![Окно вывода](media/output-window.png)

  Когда сборка завершена, ваша игра запустится на выбранной платформе.

## Запуск игры используя Visual Studio

1. В Game Studio, на панели инструментов нажмите ![Открыть IDE](media/launch-your-game-ide-icon.png) (**Open in IDE**) что бы запустить Visual Studio.

2. В Visual Studio панели инструментов, выберите соответствующий проект в качестве запускаемого.
         
	![Выбор профиля сборки в Visual Studio](media/launch-your-game-visual-studio-profiles.png)
   
   Конфигурация запуска проекта обновится автоматически.
 
   > [!TIP]
   > Вы можете увидеть свои проекты в обозревателе решения справа. Расширения файла проекта идентифицируют платформу (например, *.Android*, *.iOS* и т.д.).

3. Убедитесь, что конфигурация и платформа должным образом соответствуют тому, что вы ожидаете.
  
4. * Чтобы запустить игру без отладки, нажмите **Ctrl + F5**.
   
   * Чтобы запустить игру с отладкой, нажмите **Start** или нажмите **F5**.

      ![Иконка запуска Visual Studio](media/visual-studio-start-button.png)

## Оконный режим

По умолчанию игра работает в оконном режиме.

| Оконный режим              | Безрамочный режим
|---------------------------|-----------------
| ![С рамкой](media/with-borders.jpg)   | ![Без рамки](media/without-borders.jpg) 

Чтобы запустить игру без рамки, используйте:

```cs
Game.Window.IsBorderLess = true;
```

Для примера:

```cs

...

public class MyScript : StartupScript
{
    public override void Start()
    {
        base.Start();
        Game.Window.IsBorderLess = true;
    }
}

```