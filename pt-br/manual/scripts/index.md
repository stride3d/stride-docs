# Scripts

**Scripts** são unidades de código que lidam com eventos de jogo, respondem à entrada do usuário e entidades de controle. Em resumo, scripts fazem jogos interativos adicionando jogabilidade.

Você usa scripts adicionando-os a entidades na cena como componentes. Stride carrega um script quando a entidade a que é adicionada é carregada na cena.

Os scripts Stride são escritos em **C#**. Você pode editar scripts no Game Studio ou outro IDE (como Visual Studio). Os scripts são depurados no Visual Studio.

![Scripts](media/scripting_intro.png)

> [!NOTE]
> Explicação C# está fora do âmbito desta documentação.

Os scripts têm acesso aos principais módulos do motor Stride:

* [Audio](xref:Stride.Engine.ScriptComponent.Audio): o sistema de áudio
* [Content](xref:Stride.Engine.ScriptComponent.Content): carrega e salva conteúdo de ativos
* [DebugText](xref:Stride.Engine.ScriptComponent.DebugText): prints debug text
* [EffectSystem](xref:Stride.Engine.ScriptComponent.EffectSystem): cargas e compila efeitos e shaders
* [Game](xref:Stride.Engine.ScriptComponent.Game): acessa todas as informações relacionadas ao seu jogo
* [GraphicsDevice](xref:Stride.Engine.ScriptComponent.GraphicsDevice): dispositivo gráfico de baixo nível para criar recursos de GPU
* [Input](xref:Stride.Engine.ScriptComponent.Input): estados e eventos de teclado, mouse e gamepad
* [Log](xref:Stride.Engine.ScriptComponent.Log): registra mensagens e erros de scripts
* [SceneSystem](xref:Stride.Engine.ScriptComponent.SceneSystem): a cena exibida atualmente
* [Script](xref:Stride.Engine.ScriptComponent.Script): acessa o gerenciador de scripts para agendar ou esperar pela terminação de scripts
* [Services](xref:Stride.Engine.ScriptComponent.Services): um registro de serviços que você pode usar para registrar seus próprios serviços
* [SpriteAnimation](xref:Stride.Engine.ScriptComponent.SpriteAnimation): anima sprites
* [Streaming](xref:Stride.Engine.ScriptComponent.Streaming): streams content

Você ainda pode usar classes C# padrão no Stride, mas estas não são chamadas de scripts e você não pode anexá-las a entidades no Game Studio.

## Nesta secção

* [Tipos de script](types-of-script.md)
* [Criar um script](create-a-script.md)
* [Use um script](use-a-script.md)
* [Propriedades e campos públicos](public-properties-and-fields.md)
* [Programação e prioridades](scheduling-and-priorities.md)
* [Eventos](events.md)
* [Depuração](debugging.md)
* [Variáveis de pré-processamento](preprocessor-variables.md)
* [Criar um modelo de código](create-a-model-from-code.md)