# Programação e prioridades

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Stride não executa scripts simultaneamente; eles executam um de cada vez. Onde os scripts dependem uns dos outros, você deve ter certeza de que eles funcionam na ordem correta, dando-lhes prioridades.

Prioridades aplicam-se a todos os tipos de scripts. Isso significa que, por exemplo, [synchronous e assíncronos scripts](types-of-script.md) não têm listas de prioridade separadas. Ambos se juntam à mesma fila.

Os scripts com números de prioridade mais baixos têm prioridades mais altas. Por exemplo, um script com prioridade 1 é executado antes de um script com prioridade 2, e um script com prioridade -1 é executado antes de um script com prioridade 1. Por padrão, os scripts têm uma prioridade de 0.

Se os scripts têm a mesma prioridade, a ordem em que Stride os executa não é determinística. Você pode dar scripts a mesma prioridade se você não se importa em qual ordem eles funcionam.

> [!Note]
> Atualmente, não há como ver uma lista de prioridades em um só lugar. Você tem que definir cada prioridade de cada script individualmente nas propriedades do componente de script.

## Definir uma prioridade de script

As prioridades não são definidas nos próprios scripts. Em vez disso, eles são definidos nas propriedades do componente de script na entidade a que o script é anexado.

1. Anexar o script a uma entidade. Para obter informações sobre como fazer isso, veja [Use um script](use-a-script.md).

2. Com a entidade selecionada, no **Property Grid**, sob as propriedades do componente **script**, defina o **Priority** você quer que o script tenha.

   ![Set script prioridade](media/set-script-priority.png)

## Ver também

* [Tipos de script](types-of-script.md)
* [Criar um script](create-a-script.md)
* [Use um script](use-a-script.md)
* [Propriedades e campos públicos](public-properties-and-fields.md)
* [Eventos](events.md)
* [Depuração](debugging.md)
* [Variáveis de pré-processamento](preprocessor-variables.md)