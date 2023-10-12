# Pacotes de ativos

> [!Warning]
> Esta seção está fora de data. Por enquanto, você só deve usá-lo para referência.

Um pacote de ativos permite empacotar ativos em um único arquivo que pode ser baixado no jogo em um momento específico.

Permite a criação de conteúdo **Downloadable (DLC)**.

Regras básicas:

- Um projeto pode gerar vários pacotes.
- Um pacote é criado a partir de vários seletores **assets** (Curentemente, apenas o `PathSelector` e `TagSelector` são suportados)
- Um pacote pode ter dependências para outros pacotes
- Cada pacote refere-se implicitamente `default` bundle, onde cada ativo que não deve ir em um pacote específico será embalado
- Uma vez que um pacote é implantado no jogo, todos os ativos deste pacote e todas as suas dependências são acessíveis
- Resolução do pacote é feito através de um callback assíncrono que permite que você baixe o pacote, e será chamado uma vez por dependência (semelhante ao evento AssemblyResolve).

# Criar um pacote

> [!Note]
> Criar atualmente requer alguns passos manuais (isto é, edição `sdpkg` à mão).

Abra o arquivo `sdprj` do executável do jogo e adicione a seguinte configuração:

Exemplo:

- Um pacote chamado `MyBundleName` incorporará ativos com tags `MyTag1` e `MyTag2`
- Um pacote chamado `MyBundleName2` incorporará ativos com tags `MyTag3` e `MyTag4`. Este pacote tem uma dependência de `MyBundleName`
- Há também um `PathSelector` que segue a convenção de filtragem `.gitignore`.



```cs
Pacotes:
 - Nome: MyBundleName
   Seletores:
    -TagSelector
      Etiquetas: 
        - MyTag1
        - MyTag2
 - Nome: MyBundleName2
   Dependências:
    - MyBundleName
   Seletores:
    -TagSelector
      Etiquetas: 
        - MyTag3
        - MyTag4
    -PathSelector
      Caminhos:
        - pasta1/
        - /folder2/
        - *
        - pasta3/*.xml
```


> [!Note]
>
> As dependências de ativos são automaticamente colocadas no pacote mais apropriado.
>
> O processo atual funciona dessa forma:
>
> - Encontre ativos que correspondam a Tag Selectors específicos ("raiz" de ativos de pacotes).
> - Enumerate ativos que são dependentes desses ativos de pacotes "raiz" e colocá-los no mesmo pacote do que seu "raiz" ativo.
>    - Exceto se já acessível através de uma das dependências do pacote (ou seja, um pacote dependente compartilhado ou pacote padrão).
> - Coloque tudo o resto no pacote padrão.
>
> Note que:
>
> - Os ativos compartilhados podem ser duplicados se não forem especificamente colocados em pacotes comuns ou padrão, mas isso é pretendido (ou seja, se o usuário deseja distribuir 2 DLC separados que precisam de ativos comuns, mas precisam ser auto-suficientes).
> - Cada pacote depende implicitamente do pacote padrão.
>
>

# Carregar um pacote no tempo de execução

O pacote de carga é feito através de `ObjectDatabase.LoadBundle(string bundleName) (ref:{Stride.Core.Storage.ObjectDatabase.LoadBundle})`:

```cs
// Pacote de carga
Assets.DatabaseFileProvider.ObjectDatabase.LoadBundle("MyBundleName2");
 
// Carga de ativos especificados
var texture = Assets.Load<Texture2D>("AssetContainedInMyBundleName2");
```


# Seletores

Os seletores ajudam a decidir quais ativos são armazenados em um pacote específico.

## Tag selector

Selecione ativos com base em uma lista de tags anexadas em cada ativo.

Propriedades:

- Etiquetas: Lista de Tags. Qualquer ativo que contenha pelo menos uma das tags será incluído.

## Seletor de caminho

Selecione ativos com base em seu caminho.

Padrões .gitignore padrão são suportados (exceto! (negado), # (comments) e \[0-9\] (groups)).

Propriedades:

- Caminhos: Lista de filtros. Qualquer ativo cuja URL corresponde a um do filtro será incluído.



