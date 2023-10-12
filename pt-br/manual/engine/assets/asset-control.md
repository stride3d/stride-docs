# Controle de ativos

> [!Warning]
> Esta seção está fora de data. Por enquanto, você só deve usá-lo para referência.

Até agora, todos os ativos de um pacote de jogo, e suas dependências, foram compilados como parte de seu jogo.

Começando com 1.3, compilamos apenas os ativos exigidos pelo seu jogo.

Não se preocupe, a maioria é feito automaticamente para você! Fazemos isso ao começar a coletar dependências do novo ativo Game Setting: ele faz referência ao Default Scene, e podemos facilmente detectar todas as referências de ativos necessárias (Models, Materials, Asset referenciado por seus scripts e assim por diante).

No caso de você estar carregando qualquer coisa em seu script usando o Conteúdo. Carregar, você ainda pode marcar esses ativos especificamente com “Mark as Root” no editor.

No entanto, agora recomendamos criar um campo no seu script e preenchê-lo diretamente no editor. Todas as amostras foram atualizadas para esta nova prática, então verifique-as.

## Quais ativos são compilados?

Os ativos que serão compilados e embalados em seu projeto são:

- **Activos de raiz (azul)**
   - **Automatic** para alguns tipos de ativos (i.e. Configurações do jogo, Shaders)
   - Explicit (usando "**Mark como Root**" no ativo)
- **Dependências de ativos raiz (verde)**
   - Uma vez que as configurações do jogo são coletadas, isso significa que a cena padrão e todas as suas dependências serão compiladas também (inclui Modelo, membros do campo de script apontando para outros ativos, etc...)
   - Além disso, encorajamos nossos usuários a mudar seu script do Content. Carregar (que requer "Mark as Root") para um membro de campo que você pode definir dentro do editor usando arrastar e soltar. Isso criará uma dependência implícita que forçará esse ativo a ser compilado também.
- **Tudo mais (branco)** (objetos não marcados como raiz e não referenciados direta ou indiretamente por uma raiz) **won't be packaged**

![media/26968245.png](media/26968245.png)

## "Marcar como raiz"

Uma coisa importante a entender é que "Mark as root" não faz parte do ativo, ele é armazenado no pacote "current" (o que está em negrito no Solution Explorer).

Significa que se "MyGame" é o pacote atual, se você verificar "Mark as Root" no Silver Material (parte de SharedPackage), esta informação será armazenada em MyGame. sdpkg como parte da referência ao SharedPackage.

Como resultado, você pode usar um pacote compartilhado de vários jogos, mesmo que você tenha diferentes raízes explícitas.

## Ver também

Para obter informações adicionais sobre gerenciamento de ativos, consulte [Manage Assets](../../game-studio/manage-assets.md)