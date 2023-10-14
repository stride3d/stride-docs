# Introdução ao ECS (Sistema de Entidades e Componentes)

# Problema
> `Cachorro` é uma subclasse de `Animal`.

Esse exemplo é frequentemente usado como um exemplo de herança
em introduções à programação. No entanto, quando as coisas se tornam mais complexas,
surgem problemas:
- `Cachorro` e `Peixe` podem nadar, então criamos uma classe intermediária `AnimaisQueNadam`.
- `Abelha` e `Passaro` podem voar, então criamos outra classe intermediária `AnimaisQueVoam`.
- O que fazemos agora com o <g id="1">Pato</g2>, que pode fazer ambas as coisas?</g>

Temos o mesmo problema nos jogos eletrônicos.  
Inimigos podem andar, atirar, voar — mas nem todos podem fazer tudo.  
Até algo básico como pontos de vida não são universais, pois alguns inimigos são indestrutíveis.

# Solução


> O sistema de entidades e componentes (ECS) é um padrão arquitetônico de software usado principalmente no desenvolvimento de jogos eletrônicos para a representação de objetos no mundo do jogo. Um ECS reúne entidades compostas de componentes de dados, com sistemas que operam nos componentes das entidades.  
> _-[Wikipedia](https://en.wikipedia.org/wiki/Entity_component_system)_


A ideia geral de um ECS é que uma entidade — um "objeto" em seu mundo virtual —__
na verdade, não faça muita coisa. Ela, basicamente, apenas uma "coleção de componentes".

A seleção de componentes em uma entidade decide o que ela faz.
Uma entidade com um componente de colisão pode colidir, uma entidade com um componente de som pode fazer barulho, etc.

## Opiniões divergentes

Para o trecho "Sistema" do termo, existem duas interpretações:

A) "Sistema de Entidade e Componente"  
...no qual os componentes contêm os dados de que precisam e também a funcionalidade que opera com esses dados.

B) "Entidade, Componente, Sistema"  
...no qual um componente contém apenas dados, enquanto uma terceira parte — o sistema —
contém a funcionalidade.

O Stride permite trabalhar de ambas as maneiras. A) pode ser alcançada usando
[scripts](https://doc.stride3d.net/latest/en/manual/scripts/index.html)
enquanto o uso da abordagem B) é descrito nesta seção do manual.

### Qual escolher?

![media/ecs-choice.jpg](media/ecs-choice.jpg)
