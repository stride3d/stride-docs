# Sombreadores computacionais

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Conversões de Stride Stride shaders (`sdsl` e `.sdfx` files) para a linguagem shader usada pela plataforma [graphics](../../platforms/set-the-graphics-platform.md).

| Plataforma | Língua de Shader |
| -------------- | ---- 
| Direct3D | HLSL |
| OpenGL | GLSL |
| Vulc | SPIR-V |
| iOS | OpenGL ES |

Stride pode converter os shaders em tempo de execução (quando o jogo está em execução) ou no tempo de compilação (quando o editor constrói os ativos do jogo). Quando Stride gera shaders em tempo de execução, renderização pára até que o shader seja compilado. Isso geralmente é algo que você quer evitar em sua compilação de lançamento — especialmente em plataformas móveis, que têm menos CPU, então a pausa pode ser mais notável.

## Como Stride converte shaders no tempo de execução

Stride não pode saber com antecedência quais shaders serão usados no tempo de execução. Isso ocorre porque os usuários podem gerar novas permutações de shader, por exemplo, alterando parâmetros de material ou modificando parâmetros de pós-efeito de scripts. Além disso, os shaders finais dependem dos recursos gráficos na plataforma de execução.

1. Quando Stride precisa de um novo shader em tempo de execução, ele verifica seu banco de dados para ver se o shader já foi convertido. Se o shader estiver no banco de dados, Stride o usa.

2. Se o shader ainda não tiver sido convertido, o Stride o compila — seja localmente (no dispositivo) ou remotamente (no Game Studio), dependendo do pacote **User Settings** (veja abaixo).

3. Se **Record usado efeitos** é ativado no pacote **User Settings** (veja abaixo), Stride notifica Game Studio que ele precisa de um novo shader.

4. Game Studio notifica que há novos shaders para importar.

   ![ Novos efeitos](media/new-effects-to-import.png)

   No **Asset View**, o botão **Import effects** torna-se disponível.

   ![ Efeitos de importação ](media/import-effects-button.png)

5. Se você clicar em **Import effects**, Game Studio atualiza o **Effect Log** (ou cria se não existe) e os adiciona ao banco de dados do jogo para ser usado da próxima vez que você construir (veja o passo 1).

   ![ Efeito log](media/effect-log.png)

## Mudar como Stride compila shaders

1. No Game Studio, no **Solution Explorer**, selecione o pacote e clique em **Package properties**.

   ![ Propriedades de embalagem ](media/package-properties-button.png)

2. No **Property Grid**, defina as propriedades.

   ![ Propriedades de embalagem ](media/package-properties.png)

A propriedade **Effect compiler** especifica como compilar o shader.

* **Local**: Converta o shader no dispositivo. Isto é recomendado para versões de lançamento do seu jogo.

* **Remote**: Converta o shader na máquina desenvolvedora. Não há nenhuma razão para usar isso para versões de lançamento do seu jogo, pois não será capaz de se conectar à máquina desenvolvedora.

* **LocalOrRemote**: Converta o shader na máquina do desenvolvedor; se isso falhar, tente convertê-lo no dispositivo. Como a configuração **Remote**, isso não tem uso para versões de lançamento do seu jogo.

* **Nenhum **: Não convertas shaders. No entanto, é importante ressaltar que o aplicativo vai falhar se precisar de um shader que não está no banco de dados. Atualmente, usar este asset não salva nenhum espaço seu aplicativo, então não há nenhuma vantagem em usá-lo. No entanto, pode ser útil para ter certeza de que você tem cada shader no banco de dados; se o jogo falhar, você sabe que o banco de dados está faltando pelo menos um shader.

Se você ativar os efeitos usados **Record**, Game Studio adiciona novos shaders ao Registro de Efeito assim que forem necessários. Recomendamos que você desative isso para versões de lançamento do seu jogo, pois não pode se conectar à máquina desenvolvedora.

## Compilar shaders remotamente ao desenvolver para iOS

Como os dispositivos iOS não podem se conectar diretamente ao PC, para converter shaders Stride remotamente ao desenvolver para iOS, você precisa usar um script Python como um relé entre o dispositivo, um Mac e o PC desenvolvedor.

1. Certifique-se de que seu PC e Mac estão conectados à mesma rede.

2. No Mac, instale Python. Você pode baixar Python do site [Python](https://www.python.org/downloads/).

3. Download e unzip [ios-tcreplay.zip](media/ios-tcprelay.zip).

4. Abra **Terminal**, navegue para a pasta onde você descompactou o arquivo e execute **stride-ios-relay.py MyPcName**, onde **MyPcName** é o nome do seu desenvolvedor PC.

   > [!Tip]
   > Para encontrar o nome do seu desenvolvedor PC, no PC, pressione a chave do Windows, digite **About** e pressione **Enter**. O nome do PC está listado em **PC nome**.

O dispositivo iOS agora deve ser capaz de se comunicar com o PC através do seu Mac para construir shaders remotamente.

## Mensagens de erro

Se o seu aplicativo tentar se conectar ao Game Studio para compilar um shader ou notificar Game Studio que ele precisa de novos shaders, mas não pode se conectar, a saída Visual Studio exibe este erro:

"[RouterClient]: Erro: Não foi possível conectar ao roteador de conexão usando o modo Connect. System.AggregateExcepção: Um ou mais erros ocorreram. ---- System.Net.Sockets.SocketException: Nenhuma conexão pode ser feita porque a máquina de destino recusou ativamente 127.0.0.1:31254"
