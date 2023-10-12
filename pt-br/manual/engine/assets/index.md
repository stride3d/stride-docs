# Gerenciador de ativos

> [!Warning]
> Esta seção está fora de data. Por enquanto, você só deve usá-lo para referência.

# Activos

Depois de criar seus ativos no Game Studio, @'Stride.Core.Serialization.Assets.AssetManager' é a classe responsável por carregar, descarregar e salvar ativos.

## Criando

Você geralmente cria ativos diretamente no Game Studio.

Sua URL corresponderá ao nome (incluindo pasta) no Game Studio.

Exemplos de URLs:

- cavaleiro (usuário importa cavaleiro. fbx diretamente na pasta de ativos principal)
- level1/room1 (o usuário cria nível1 e sala de importação1.fbx dentro)

Para mais informações, consulte [Ativos](../../game-studio/assets.md) para mais detalhes.

## A carregar

Carregar um ativo deve ser feito com a ajuda de @'Stride. Core.Serialization.Assets.AssetManager' classe:

```cs
// Carregar um ativo diretamente de um arquivo:
var texture = Content.Load<Texture>("texture1");

// Carregar um recurso de cena
var scene = Content.Load<Scene>("scenes/scene1");
 
// Carregar um ativo de Entidade
var entity = Content.Load<Entity>("entity1");
```

Note que carregar um ativo que já foi carregado apenas incrementar o contador de referência e não recarregar o ativo.

## Descarregamento

Descarregamento também é feito usando a classe AssetManager:

```cs
 Asset.Unload (asset);
```


## Tempo de vida dos ativos

Carga de ativos e descarga estão trabalhando em pares. Para cada chamada para "carga", espera-se uma chamada correspondente para "descarga".

Um ativo é realmente carregado apenas durante a primeira chamada para "carga". Todas as chamadas subsequentes só resultam em um incremento de referência de ativos.

Um ativo é realmente descarregar somente quando o número de chamada para descarregar corresponde ao número de chamada da carga.

O @'Stride.Core.Serialization.Assets.AssetManager. O método Get' retorna a referência a um ativo carregado, mas não incrementa o contador de referência de ativos.

```cs
 var firstReference = Content.Load<Texture>("MyTexture"); // carregar o ativo e aumentar o contador de referência (contagem de ref = 1)
 
// a textura pode ser usada aqui
 
var secondReference = Content.Load<Texture>("MyTexture"); // só aumentar o contador de referência (contagem de ref = 2)
 
// a textura ainda pode ser usada aqui
 
Asset.Unload(firstReference); // diminuem o contador de referência (ref count = 1)
 
// a textura ainda pode ser usada aqui
 
Asset.Get<Texture>("MyTexture"); // retornar o ativo carregado sem aumentar o contador de referência (contagem de ref = 1)
 
// a textura ainda pode ser usada aqui
Asset.Unload(secondReference); // diminuem o contador de referência e descarreguem o ativo (contagem de retorno = 0)
 
// A textura foi descarregada, não pode ser usada aqui mais.
```


