# Adicionando um componente
Você pode encontrar esta amostra no projeto tutorial: **Menu** → **Adicionando um componente**

## Explicação
Este tutorial C# Beginner abrange como adicionar e remover componentes.

No tutorial anterior aprendemos como podemos recuperar componentes que já estão ligados a uma entidade através do editor. Este tutorial mostra que podemos realizar a mesma coisa por código.

Podemos adicionar o mesmo componente várias vezes à mesma entidade. Também aprendemos como remover todos os componentes do mesmo tipo novamente.

![ Adicionar um componente](media/adding-a-component.webp)


> [!Vídeo https://www.youtube.com/embed/KGuBSRyRmVo]

## Código
### AmmoComponent
Este é o AmmoComponent. Não vamos anexá-lo à entidade no editor. Em vez disso vamos adicioná-lo no script AddingAComponent.

[!code-csharp[AmmoComponent](../../../../stride/samples/Tutorials/CSharpBeginner/CSharpBeginner/CSharpBeginner.Game/Code/AmmoComponent.cs)]

### Adicionando um componente
Este script de componente, irá adicionar o script AmmoComponent à entidade. Em seguida, adicionamos outro componente (do mesmo tipo) antes de remover todos os componentes desse tipo.

Finalmente aprendemos como criar automaticamente um componente, anexá-lo à entidade e obter uma referência tudo em 1 linha de código. Isso só funciona se a entidade não tiver quaisquer componentes do dado anexado ainda.

[!code-csharp[AddingAComponent](../../../../stride/samples/Tutorials/CSharpBeginner/CSharpBeginner/CSharpBeginner.Game/Code/AddingAComponentDemo.cs)]
