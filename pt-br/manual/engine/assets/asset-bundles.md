# Conjunto de asset (Bundles)

> [!Warning]
> Esta seção está desatualizada. Por hora, você deve usá-la apenas como referência.

Um conjunto de assets permite empacotar assets num único arquivo que pode ser baixado no jogo num momento específico.

Isso possibilita a criação de **Conteúdo para Download (DLC)**.

Regras básicas:

- Um projeto pode gerar vários pacotes.
- Um conjunto é criado a partir de diversos **seletores de assets** (atualmente, apenas `PathSelector` e `TagSelector` são suportados).
- Um conjunto pode ter dependências de outros conjuntos
- Cada conjunto faz referência implicitamente ao conjunto padrão, onde cada asset que não deve ser incluído num conjunto específico será empacotado.``
- Uma vez que um conjunto é adicionado no jogo, todos os assets desse conjunto e todas as suas dependências se tornam acessíveis
- A resolução de conjuntos é realizada por meio de uma funções de retorno de chamada assíncrona que permite o download do conjunto e será executada uma vez por dependência (similar ao evento AssemblyResolve).

# Criar um pacote

> [!Note]
> A criação atualmente requer alguns passos manuais (ou seja, editar `sdpkg` manualmente).

Abra o arquivo `sdprj` do executável do jogo e adicione a seguinte configuração:

Exemplo:

- Um conjunto chamado `MeuConjunto1` incorporará assets com as tags `MinhaTag1` e `MinhaTag2`.
- Um conjunto chamado `MeuConjunto2` incorporará assets com as tags`MinhaTag3` e `MinhaTag4`. Este conjunto tem uma dependência com `MeuConjunto1`
- Há também um `PathSelector` que segue a convenção de filtragem `.gitignore`.



```cs
Bundles:
 - Name: MeuConjunto1
   Selectors:
    - !TagSelector
      Tags: 
        - MinhaTag1
        - MinhaTag1
 - Name: MeuConjunto2
   Dependencies:
    - MeuConjunto1
   Selectors:
    - !TagSelector
      Tags: 
        - MinhaTag3
        - MinhaTag4
    - !PathSelector
      Paths:
        - pasta1/
        - /pasta2/
        - *.bin
        - pasta3/*.xml
```


> [!Note]
>
> As dependências de assets são automaticamente colocadas no pacote mais apropriado
>
> O processo atual funciona da seguinte maneira:
>
> - Encontre assets que correspondam aos Seletores de Tag específicos (as "raízes" dos assets do conjunto).
> - Enumere os assets que dependem dessas raízes e coloque-os no mesmo conjunto que elas.
>    - A menos que já sejam acessíveis por meio de uma das dependências do pacote (como um pacote dependente compartilhado ou o pacote padrão).
> - Coloque todo o resto no conjunto padrão.
>
> No entanto, é importante ressaltar que:
>
> - Os assets compartilhados podem ser duplicados se não forem especificamente colocados no conjunto compartilhado ou no conjunto padrão, mas isso é intencional (por exemplo, se o usuário desejar distribuir dois DLCs separados que necessitam de assets comuns, mas também precisam ser independentes).
> - Cada conjunto depende implicitamente do conjunto padrão.
>
>

# Carregar um conjunto em tempo de execução

O carregamento de conjuntos é feito através de `ObjectDatabase.LoadBundle(string bundleName) (ref:{Stride.Core.Storage.ObjectDatabase.LoadBundle})`:

```cs
// Carregar o conjunto
Assets.DatabaseFileProvider.ObjectDatabase.LoadBundle("MeuConjunto1");
 
// Carregar um asset específico
var texture = Assets.Load<Texture2D>("AssetContidoNoMeuConjunto2");
```


# Seletores

Os seletores ajudam a decidir quais assets são armazenados em um conjunto específico.

## Seletores de Tag

Seleciona assets com base em uma lista de tags anexadas a cada asset.

Propriedades:

- Tags: Lista de Tags. Qualquer asset que contenha pelo menos uma das tags será incluído.

## Seletor de caminho

Selecione assets com base em seu caminho.

Padrões convencionais do .gitignore são suportados (exceto ! (negar), # (comentários) e \[0-9\] (grupos)).

Propriedades:

- Caminhos: Lista de filtros. Qualquer asset cuja URL corresponda a um dos filtros será incluído.



