# Controle de assets

> [!Warning]
> Esta seção está desatualizada. Recomendamos utilizá-la apenas como referência.

Todos os assets de um pacote de jogo e suas dependências, até a versão 1.3, eram compilados como parte do seu jogo.

A partir da versão 1.3, apenas os assets necessários para o seu jogo são compilados.

Não se preocupe, a maior parte deste processo é feito automaticamente para você! As dependências são coletadas a partir do novo asset de Configuração de Jogo `GameSettings`: ele faz referência à Cena Padrão, e podemos facilmente identificar todas as dependencias necessárias dos assets (como modelos, materiais e assets referenciados por seus scripts, entre outras coisas).

Caso você esteja carregando algo em seu script usando `Content.Load`, ainda é possível marcar esses assets especificamente utilizando **Marcar como Raiz** no editor.

Porém, recomendamos que você crie um campo em seu script e o preencha diretamente no editor. Todos os exemplos foram atualizados para seguir essa nova prática. Fique à vontade para consultá-los.

## Quais assets são compilados?

Os assets que serão compilados e empacotados em seu projeto são:

- **Assets raiz (azul)**
   - **Automático** para alguns tipos de assets (ex.: Configurações de jogo `GameSettings`, Shaders)
   - Explicito (usando **Marcar como raiz** no asset)
- **Dependências de assets raiz (verde)**
   - Uma vez que as Configurações de Jogo são coletadas, a Cena Padrão e todas as suas dependências também serão compiladas (incluindo modelos, membros de campos de script que apontam para outros assets, etc...).
   - Além disso, encorajamos nossos usuários a mudar seus scripts que utilizem `Content.Load` (os quais necessitam **Marcar como raiz**) para um membro de campo que pode ser definido no editor usando o recurso arrastar e soltar. Isso criará uma dependência implícita que forçará a compilação desse asset.
- **Outros assets (branco)** (Objetos não marcados como raiz e não referenciados direta ou indiretamente por um objeto raiz) **não serão incluídos no pacote**.

![media/26968245.png](media/26968245.png)

## Marcar como raiz

Uma coisa importante a entender é que **Marcar como raiz** não faz parte do asset em si e é armazenado no pacote **atual** (em negrito no Gerenciador de Soluções).

Isso significa que se **MeuJogo** for o pacote atual e você o **Marcar como raiz** no Material Prateado (parte do **SharedPackage**), essa informação será armazenada no arquivo `MeuJogo.sdpkg` como parte da referência ao **SharedPackage**.

Como resultado, você pode usar um pacote compartilhado em vários jogos, mesmo que tenha raízes explícitamente diferentes.

## Veja também

Para mais informações sobre gerenciamento de assets, consulte [Gerenciar assets](../../game-studio/manage-assets.md)