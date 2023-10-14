# Controle de assets

> [!Warning]
> Esta seção está desatualizada. Por hora, você deve usá-la apenas como referência.

Todos os assets de um pacote de jogo e suas dependências eram compilados como parte do seu jogo.

A partir da versão 1.3, apenas os assets necessários para o seu jogo são compilados.

Não se preocupe, a maior parte deste processo é feito automaticamente para você! As dependências são coletadas a partir do novo asset de Configuração de Jogo: ele faz referência à Cena Padrão, e podemos facilmente identificar todas as dependencias necessárias dos assets (como modelos, materiais e assets referenciados por seus scripts, entre outras coisas).

Caso você esteja carregando algo em seu script usando Content.Load, ainda é possível marcar esses assets especificamente como Marcar como Raiz no editor.

No entanto, agora recomendamos criar um campo em seu script e preenchê-lo diretamente no editor. Todos os exemplos foram atualizados para seguir essa nova prática, portanto, fique à vontade para consultá-los.

## Quais assets são compilados?

Os assets que serão compilados e empacotados em seu projeto são:

- **Assets raiz (azul)**
   - **Automático** para alguns tipos de assets (i.e. Configurações de jogo, Shaders)
   - Explicito (usando **Marcar como raiz** no asset)
- **Dependências de assets raiz (verde)**
   - Uma vez que as Configurações de Jogo são coletadas, isso significa que a Cena Padrão e todas as suas dependências também serão compiladas (incluindo Modelos, membros de campos de Script que apontam para outros assets, etc...).
   - Além disso, encorajamos nossos usuários a mudar seus scripts de Content.Load (que requerem **Marcar como raiz**) para um membro de campo que pode ser definido no editor usando o recurso arrastar e soltar. Isso criará uma dependência implícita que forçará a compilação desse asset também.
- **Todo o resto (branco)** (objetos não marcados como raiz e não são referenciados direta ou indiretamente por um objeto raiz) **não será incluído no pacote**

![media/26968245.png](media/26968245.png)

## Marcar como raiz

Uma coisa importante a entender é que **Marcar como raiz** não faz parte do asset em si e é armazenado no pacote **atual** (em negrito no Gerenciador de Soluções).

Isso significa que se **MeuJogo** for o pacote atual e você marcar **Marcar como raiz** no Material Prateado (parte do SharedPackage), essa informação será armazenada no arquivo MeuJogo.sdpkg como parte da referência ao SharedPackage.

Como resultado, você pode usar um pacote compartilhado em vários jogos, mesmo que tenha raízes explícitas diferentes.

## Veja também

Para mais informações sobre gerenciamento de assets, consulte [Gerenciador de assets](../../game-studio/manage-assets.md)