# Modelo de Entidade-Componente

[! INCLUÍDO [stride-studio-note](../../../includes/under-construction-note.md)]

# Visão geral

@'Stride.Engine.Entity' é a classe base para objetos que são gerenciados pelo motor de alto nível.

Para melhorar a flexibilidade, a entidade é baseada em componentes: pode conter tantos componentes conforme necessário, contendo dados e/ou lógica.




![media/7438980.png](media/7438980.png)




A @'Stride.Engine.Entitycomponent' está ligada à sua entidade (ou seja, um componente não pode ser adicionado a duas entidades ao mesmo tempo).

# Como criar uma entidade e alguns componentes

```cs
// Criar entidade
var myEntity = novo Entity();
 
// Criar um componente modelo (para que o modelo seja renderizado)
modelo de var Componente = novo ModelComponent { Model = model };
myEntity. Set(ModelComponent. Key, modelComponent);

// Definir posição da entidade
myEntity.Transformation.Translation = new Vector3(100.0f, 100.0f, 0,0f);
 
// Adicionar entidade à cena; a partir de agora em seu modelo será renderizado
Entities.Add (myEntity);
```


