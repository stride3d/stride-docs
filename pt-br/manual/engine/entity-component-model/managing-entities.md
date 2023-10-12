# Gerenciar entidades

[! INCLUÍDO [stride-studio-note](../../../includes/under-construction-note.md)]

## Visão geral

O usuário geralmente quer manipular o Component contido em uma entidade específica, enquanto o motor quer acessar o componente por tipos (ou seja, todo o Componente de malha durante o desenho, todos os componentes de animação ao atualizar animações, etc...):

![media/7438984.png](media/7438984.png)


O usuário adicionará entidades baseadas em componentes em um gerenciador de entidades.

Motor ou usuário registra processadores de entidades que podem processar entidades e/ou componentes específicos.

## Processador de Entidade

Para resolver este problema, o conceito de Processador de Entidade foi adicionado. Um Processador de Entidade acessará Entidades que correspondem a requisitos específicos (ou seja, processar todas as entidades com o MeshComponent) e processará todas elas em uma única função de atualização. Isso permite maior eficiência e facilidade de cache, pois não há necessidade de verificar cada entidade / componentes muitas vezes por quadro.

Esta abordagem também resolve muitos problemas de dependência de pedidos de atualização (apenas precisa encomendar as atualizações de processadores de entidade corretamente).

Aqui estão alguns exemplos de processadores de entidades:

- @'Stride.Engine.TransformationProcessor': Matrizes de transformação completas da hierarquia e transformação local armazenadas em @'Stride.Engine.TransformationComponent'.

   Como resultado, @'Stride. Motor. EntityManager' pode ser usado como um cenário hierárquico em vez de uma lista de entidades simples.
- @'Stride.Engine.MeshProcessor': Adicionar @'Stride.Engine.ModelComponent.Model' para renderização.
- @'Stride.Engine.LightProcessor': Recolhe e atualize luzes e transfira-as para o sistema de renderização. Ele pode ocultar detalhes de implementação (renderização diferida ou encaminhada, etc...)

## Sistema de Entidade

A Entidade é agrupada em um @'Stride. Motor.EntityManager'. Ele também contém a lista de processadores de entidade. Quando uma entidade é adicionada ou um componente de entidade muda, ela perguntará aos processadores de entidade se eles devem ser incluídos.

```cs
// Adicionar uma entidade:
var myEntity = novo Entity();
motor. EntityManager.AddEntity (myEntity);
 
// Iterar através de entidades adicionadas:
foreach (entidade naval no motor. EntityManager.Entities)
(
	Console.WriteLine (entidade.Nome);
}
```

@'Stride.Engine.EntityManager' pode ser usado para enumerar seus `Entities (ref:{Stride.Engine.Entity})`. Note que as crianças de uma determinada entidade também estarão nesta lista.

Para manipular entidades como cenário, consulte a classe @'Stride.Engine.TransformationComponent'.

