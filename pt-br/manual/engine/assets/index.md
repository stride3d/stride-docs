# Gerenciador de assets

> [!Warning]
> Esta seção está desatualizada. Recomendamos utilizá-la apenas como referência.

# Assets

Depois de criar seus assets no Game Studio, @'Stride.Core.Serialization.Assets.AssetManager' é a classe responsável por carregar, descarregar e salvar um assets.

## Criação

Normalmente, você cria assets diretamente no Game Studio.

Sua URL corresponderá ao nome (incluindo a pasta) no Game Studio.

Exemplos de URLs:

- **cavaleiro** (o usuário importa cavaleiro.fbx diretamente na pasta de assets principal)
- **nivel/sala** (o usuário cria a pasta **nivel** e importa o arquivo **sala.fbx** dentro dela)

Para mais informações, consulte [Assets](../../game-studio/assets.md).

## Carregamento

O carregamento de um asset deve ser feito utilizando a classe @'Stride.Core.Serialization.Assets.AssetManager':

```cs
// Carregar um asset diretamente de um arquivo:
var textura = Content.Load<Texture>("textura1");

// Carregar um asset de uma cena:
var cena = Content.Load<Scene>("cenas/cena1");
 
// Carregar um asset de uma entidade:
var entidade = Content.Load<Entity>("entidade1");
```

No entanto, é importante ressaltar que ao carregar um asset que já tenha sido carregado, isso apenas incrementará o contador de referência e não recarregará novamente o asset.

## Descarregamento

O descarregamento também é feito utilizando a classe **AssetManager**:

```cs
 Asset.Unload(asset);
```


## Tempo de vida do asset

O carregamento e o descarregamento de um asset funciona em pares. À cada execução para **carregar**, uma execução correspondente para **descarregar** é esperada.

Um asset é realmente carregado apenas durante a primeira execução. Todas as execuções subsequentes resultam apenas no incremento da referência ao asset.

Um asset é realmente descarregado apenas quando o número de execuções para **descarregar** corresponde ao número de execuções para **carregar**.

O método @'Stride.Core.Serialization.Assets.AssetManager.Get' retorna a referência a um asset carregado, mas não incrementa o contador da referência ao asset.

```cs
 var primeiraReferencia = Content.Load<Texture>("MinhaTextura"); // carrega o asset e incrementa o contador da referência (contagem da referência = 1)
 
// a textura pode ser usada aqui
 
var segundaReferencia = Content.Load<Texture>("MinhaTextura"); // apenas incrementa o contador da referência (contagem da referência = 2)
 
// a textura ainda pode ser usada aqui
 
Asset.Unload(primeiraReferencia); // decrementa o contador da referência (contagem da referência = 1)
 
// a textura ainda pode ser usada aqui
 
Asset.Get<Texture>("MinhaTextura"); // retorna o asset carregado sem incrementar o contador da referência (contagem da referência = 1)
 
// a textura ainda pode ser usada aqui
Asset.Unload(segundaReferencia); // decrementa o contador da referência e descarrega o asset (contagem da referência = 0)
 
// A textura foi descarregada e não pode mais ser usada.
```


