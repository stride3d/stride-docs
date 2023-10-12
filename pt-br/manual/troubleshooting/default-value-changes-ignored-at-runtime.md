# Mudanças de valor padrão ignoradas no tempo de execução

Quando você adiciona um script ao seu projeto como componente, o Game Studio lista suas variáveis públicas na Grade de Propriedade. Estes são os valores usados no tempo de execução.

No entanto, se você alterar o valor padrão no script, o Game Studio não atualiza o componente com o novo valor.

Por exemplo, imagine que você tenha um script com a variável `SpeedFactor` com um valor padrão de `5.0f`. Você adiciona o script ao projeto como um componente. Agora, no script, você muda o valor padrão da variável `SpeedFactor` para `6.0f`, salve o script e execute o projeto. Game Studio não atualiza o componente com as alterações do script, então a velocidade `SpeedFactor` valor ainda é `5.0f`.

## Fixação

No seu projeto, exclua e re-adicione o componente de script.

Alternativamente, se você quiser que o Game Studio atualize os valores nas propriedades do componente depois de alterá-los no script, você pode fazer isso com código adicional. Você precisa adicionar uma nova linha de código para cada propriedade que você deseja que isso se aplique.

1. Adicionar `usando System.ComponentModel` na parte superior do script.

2. Acima da variável que você deseja atualizar, adicione ``[DefaultValue()]``. Por exemplo, se a variável for `SpeedFactor`, use:

```cs
[Valor padrão (6,0f)]
float público SpeedFactor { get; set; } = 6.0f;
```

Quando você alterar o valor, atualize tanto o `SpeedFactor` e o `DefaultValue` para o mesmo valor.

> [!Note]
> Isto não funciona em ambas as direções. Se você definir um valor diferente do `DefaultValue` no Property Grid, Game Studio salva o valor no ativo e substitui o valor padrão no tempo de execução.