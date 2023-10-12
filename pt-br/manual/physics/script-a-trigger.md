# Tutorial: Script um gatilho

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>

Neste tutorial, criaremos um [trigger](../physics/triggers.md) que duplica o tamanho de uma bola quando a bola passar por ela.

> [!Note]
> As capturas de tela e vídeos neste tutorial foram feitos usando uma versão anterior do Stride, então algumas partes da interface do usuário, e a caixa de céu padrão e esfera, podem parecer diferentes de sua versão.

## 1. Criar uma bola saltando

Siga as instruções no tutorial [Create a bouncing ball](create-a-bouncing-ball.md). Isso cria uma cena simples em que uma bola cai do meio do ar, atinge o chão e salta.

## 2. Definir a restituição

Para este tutorial, vamos definir a restituição do solo e da esfera para 0.9, o que torna a bola muito bouncy. Isso torna mais fácil ver o efeito do gatilho mais tarde, pois a bola vai entrar e sair da área do gatilho repetidamente.

1. Selecione a entidade **Sphere**.

2. No **Property Grid**, sob **Rigidbody**, defina o **Restitution** para *0.9*.

   ![ Restituição de segundo para uma esfera](media/physics-tutorials-rigidbody-restitution.png)

3. Selecione a entidade **Ground**.

4. No **Property Grid**, sob **Static Collider**, defina o **Restitution** para *0.9*.

   ![ Restituição de reserva para terra](media/physics-tutorials-static-collider-restitution.png)

## 3. Adicionar um gatilho

Agora vamos adicionar um gatilho entre a bola e o chão, então a bola passa por ela.

1. No **Scene Editor**, clique no botão plus branco (**Criar nova entidade**) e selecione **Empty entity**.

   ![Criar nova entidade](media/physics-tutorials-create-a-trigger-add-new-entity.png)

   Game Studio adiciona uma entidade à cena com o nome padrão **Entidade**.

2. Esta entidade será o nosso gatilho, então renomeá-lo *Trigger* para facilitar a identificação.

3. Como não precisamos que o gatilho se mova, vamos torná-lo um colisor estático. No **Property Grid**, clique em **Add component** e selecione **Static Collider**.

   ![ Adicionar componente de colisor estático](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)

4. No **Property Grid**, expanda o componente **Static Collider** para visualizar suas propriedades.

5. Selecione a caixa de seleção **Is Trigger**.

   ![Check 'Is trigger'](media/physics-tutorials-create-a-trigger-is-trigger-checkbox.png)

   Isso faz com que o colisor seja um gatilho. Isso significa que os objetos podem passar por ele, mas ainda são detectados no código.

6. Precisamos dar ao gatilho uma forma. Ao lado de **Collider Shapes**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) e selecione **Box**.

   ![ Adicionar forma de colisor](media/physics-tutorials-create-a-trigger-add-box-shape-to-a-trigger.png)

   Isso dá ao gatilho uma forma de caixa.

   ![ Adicionado gatilho](media/physics-tutorials-added-trigger-area.png)

7. Vamos fazer o gatilho uma área maior. No **Property Grid**, sob as propriedades componentes **Transform**, defina o **scale** para: *X:2, Y:2, Z:2*

   ![ Escalar um gatilho](media/physics-tutorials-create-a-trigger-scale-trigger.png)

   Isto duplica o tamanho do gatilho.

   ![ Adicionado gatilho](media/physics-tutorials-added-trigger-doubled-area.png)

## 4. Dê ao gatilho um modelo

Neste momento, o gatilho é invisível no tempo de execução. Para melhor mostrar como funciona o gatilho, vamos torná-lo uma caixa transparente. Isso não tem efeito sobre como o gatilho funciona; isso significa que podemos facilmente ver onde ele está no tempo de execução.

1. Criar um novo modelo processual ativo. Para fazer isso, no **Asset View**, clique em **Add asset** e selecione **Models > Cube**.

   ![ Adicionar um modelo asset](media/physics-tutorials-create-a-trigger-add-a-model.png)

2. Crie um novo ativo de material vazio. Para fazer isso, no **Asset View**, clique em **Add asset** e selecione **Materials > Material**.

   ![ Adicionar um ativo material](media/physics-tutorials-create-a-trigger-add-a-material-asset.png)

3. Vamos renomear o material para facilitar a identificação. Para fazer isso, clique com o botão direito do mouse, selecione **Rename** e digite um novo nome (por exemplo *Transparent*).

4. Selecione a entidade **Trigger**. No **Property Grid**, clique em **Add component** e selecione **Model**.

   ![ Adicionar um componente de modelo](media/physics-tutorials-create-a-trigger-add-a-model-component.png)

   Game Studio adiciona um componente modelo à entidade.

5. Sob **Model**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Selecione um ativo**).

   ![ Enfiar um asset up](media/physics-tutorials-pick-an-asset-up.png)

6. Selecione o modelo **Cube** que criamos na etapa 1 e clique em **OK**.

   ![Select Cube model](media/physics-tutorials-select-cube-model.png)

7. No **Property Grid**, sob **Model > Materials**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   ![Select material](media/physics-tutorials-material-asset-picker.png)

8. Selecione o material **Transparent** que criamos na etapa 2 e clique em **OK**.

   ![Select material](media/physics-tutorials-select-transparent-material.png)

9. No **Asset View**, selecione o ativo material **Transparent**.

   ![Selecionar material em Asset View](media/physics-tutorials-select-material-asset.png)

10. No **Property Grid**, sob **Misc > Transparency**, selecione **Blend**.

   ![Select Blend](media/physics-tutorials-set-blend.png)

11. Por padrão, o Alpha está definido para 1. Isso torna o material completamente opaco. Para definir a opacidade de 50%, defina o **Alpha** a 0.5.

   ![Select Blend](media/physics-tutorials-set-blend-alpha.png)

   Agora a área do gatilho será visível no tempo de execução.

## 5. Posicione o gatilho

Precisamos posicionar o gatilho entre o chão e a esfera, de modo que a bola cai através dele.

No **Property Grid**, sob **Transform**, defina o **Position** para: *X:0, Y:3, Z:0*

Agora a entidade gatilho está entre o chão e a esfera:

![ Trigger entre terra e esfera](media/physics-tutorials-create-a-trigger-trigger-between-ground-and-sphere.png)

## 6. Alterar o tamanho da esfera com o script

Se executarmos o projeto agora (**F5**), a bola cai através do gatilho, mas nada acontece.

<p>
<video autoplay loop class="responsive-video" poster="media/bouncing-ball-with-trigger-no-effect.png">
   <source src="media/bouncing-ball-with-trigger-no-effect.mp4" type="video/mp4">
</video>
</p>

Vamos escrever um script para alterar o tamanho da bola quando ela entrar no gatilho.

> [!Note]
> Para obter mais informações sobre scripts, consulte [Scripts](../scripts/index.md).

1. No **Asset View**, clique em **Add asset** e selecione **Scripts** > **Async Script**.

   ![Use um script](media/physics-tutorials-create-a-trigger-add-async-script.png)

2. No **Criar um script** diálogo, nomeie seu script *Trigger* e clique em **Criar script**.

   2a. Se o Game Studio perguntar se deseja salvar seu script, clique em **Save**.

   2b. Se o Game Studio perguntar se deseja recarregar os conjuntos, clique em **Reload**.

3. Abra o script, substitua seu conteúdo com o seguinte código e salve o arquivo:

   ```cs
   usando Stride. Motor;
   usando Stride. Física;
   usando o Sistema. Threading. Tarefas;
   usando Stride. Core.Matemática;
   
   namespace TransformTrigger
   // Você pode usar qualquer namespace que você gosta para este script.
   (
       classe pública AsyncScript
       (
           override público async Task Execute()
           (
               var trigger = Entity.Get<PhysicsComponent>();
               gatilho. Cores de processo = verdadeira;
   
               // Iniciar máquina do estado
               enquanto (Game.IsRunning)
               (
                   // 1. Aguarde que uma entidade colide com o gatilho
                   var firstCollision = await trigger. NewCollision();
   
                   var otherCollider = trigger == firstCollision. ColliderA
                       ? Primeira Colisão. ColliderB
                       : primeira Colisão. ColliderA;
                   otherCollider.Entity.Transform.Scale = novo Vector3(2.0f, 2.0f, 2.0f);
   
                   // 2. Aguarde que a entidade saia do gatilho
                   aguarde a primeira Colisão. Terminado();
   
                   otherCollider.Entity.Transform.Scale= novo Vector3(1.0f, 1.0f, 1.0f);
               }
           }
       }
   }
   ```

   Este código duplica o tamanho (escala) de qualquer entidade que entra no gatilho. Quando a entidade sai do gatilho, ela retorna ao seu tamanho original.

4. Recarregue os conjuntos.

## 7. Adicionar o script

Finalmente, vamos adicionar este script à entidade gatilho como um componente.

1. Em **Game Studio**, selecione a entidade **Trigger**.

2. No **Property Grid**, clique em **Add component** e selecione o script **Trigger**.

   ![ Adicionar componente de script para entidade](media/physics-tutorials-create-a-trigger-add-script-component-to-entity.png)

## 8. Executar o projeto

Execute o projeto (**F5**) para ver o gatilho em ação.

A bola cai através do gatilho, dobra em tamanho, sai do gatilho, e retorna ao seu tamanho normal.

<p>
<video autoplay loop class="responsive-video" poster="media/bouncing-ball-with-trigger-scaled_first_frame.png">
   <source src="media/bouncing-ball-with-trigger-scaled.mp4" type="video/mp4">
</video>
</p>

## Mais ideias

Você pode alterar o script para fazer outras alterações quando a esfera entrar no gatilho.

Por exemplo, você pode alternar o material na entidade da esfera. Este script alterna o material na entidade Esfera do **Esfera Material** para o **Ground Material** e volta novamente:

```cs
usando Stride. Motor;
usando Stride. Física;
usando o Sistema. Threading. Tarefas;
usando Stride. Core.Matemática;
usando Stride. Renderização;

namespace TransformTrigger
// Você pode usar qualquer namespace que você gosta para este script.
(
    classe pública AsyncScript
    (
        material particular1;
        material de material privado2;
    
        override público async Task Execute()
        (
            var trigger = Entity.Get<PhysicsComponent>();
            gatilho. Cores de processo = verdadeira;
            
            // Certifique-se de que os materiais são carregados 
            material1 = Content.Load<Material>("Sphere Material");
            material2 = Content.Load<Material>("Ground Material");

            // Iniciar máquina do estado
            enquanto (Game.IsRunning)
            (
                // 1. Aguarde que uma entidade colide com o gatilho
                var firstCollision = await trigger. NewCollision();

                var otherCollider = trigger == firstCollision. ColliderA
                    ? Primeira Colisão. ColliderB
                    : primeira Colisão. ColliderA;
                    
                // 2. Alterar o material na entidade
                otherCollider.Entity.Get<ModelComponent>().Materials[0] = material2;
                
                // 3. Aguarde que a entidade saia do gatilho
                aguarde a primeira Colisão. Terminado();

                // 4. Mudar o material de volta para o original
                otherCollider.Entity.Get<ModelComponent>().Materials[0] = material1;
            }
        }
        
        sobreposição pública cancel()
        (
            Content.Unload(material1);
            Content.Unload(material2);
        }
    }
}
```

<p>
<video autoplay loop class="responsive-video" poster="media/bouncing-ball-with-trigger-material_first_frame.png">
   <source src="media/bouncing-ball-with-trigger-material.mp4" type="video/mp4">
</video>
</p>

## Ver também

* [Tutorial: Criar uma bola saltando](create-a-bouncing-ball.md)
* [Coleiras](colliders.md)
* [Formas de colarinho](collider-shapes.md)
* [Scripts](../scripts/index.md)