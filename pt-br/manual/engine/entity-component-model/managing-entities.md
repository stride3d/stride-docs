# Gerenciar entidades

[!INCLUDE [stride-studio-note](../../../includes/under-construction-note.md)]

## Visão geral

Os usuários geralmente desejam manipular componentes contidos em uma entidade específica, enquanto o motor deseja acessar os componentes por tipo (por exemplo, todos os componentes de malha ao desenhar, todos os componentes de animação ao atualizar animações, etc...):

![media/7438984.png](media/7438984.png)


O usuário adicionará entidades baseadas em componentes a um gerenciador de entidades.

O motor ou o usuário registrará processadores de entidades que podem processar entidades e/ou componentes específicos.

## Processador de Entidade

Para resolver este problema, o conceito de Processador de Entidade foi adicionado. Um Processador de Entidades acessará entidades que atendam a requisitos específicos (como, por exemplo, processar todas as entidades com o componente de malha) e processará todas elas em uma única função de atualização. Isso permite uma maior eficiência do uso do cache, pois não é necessário verificar todas as entidades/componentes muitas vezes por quadro.

Essa abordagem também resolve muitos problemas de dependências na ordem de atualização (basta ordenar corretamente as atualizações dos processadores de entidades).

Aqui estão alguns exemplos de processadores de entidades:

- @'Stride.Engine.TransformationProcessor': Calcula matrizes de transformação a partir da hierarquia e transformação local armazenada em @'Stride.Engine.TransformationComponent'.

   Como resultado, @'Stride.Engine.EntityManager' pode ser usado como um grafo de cena em vez de uma lista de entidades simples.
- @'Stride.Engine.MeshProcessor': Adiciona @'Stride.Engine.ModelComponent.Model' à renderização.
- @'Stride.Engine.LightProcessor': Coleta e atualiza luzes e as transfere para o sistema de renderização. Ele pode ocultar detalhes de implementação (renderização direta ou indireta, etc...).

## Sistema de Entidade

As Entidades são agrupadas num @'Stride.Engine.EntityManager'. Ele também contém a lista de processadores de entidade. Quando uma entidade é adicionada ou um componente de entidade é alterado, o @'Stride.Engine.EntityManager' consultará os processadores de entidades para saber se eles devem ser incluídos.

```cs
// Adiciona uma entidade:
var minhaEntidade = new Entity();
engine.EntityManager.AddEntity(minhaEntidade);
 
// Itera pelas entidades adicionadas:
foreach (var entidade in engine.EntityManager.Entities)
{
	Console.WriteLine(entidade.Name);
}
```

@'Stride.Engine.EntityManager' pode ser usado para enumerar suas próprias `Entidades (ref:{Stride.Engine.Entity})`. No entanto, é importante ressaltar que os filhos de uma determinada entidade também estarão nesta lista.

Para manipular entidades utlizando um grafo de cena, consulte a classe @'Stride.Engine.TransformationComponent'.

