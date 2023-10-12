# Raycasting

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

**Raycasting** traça uma linha invisível através da cena para encontrar intersectando [colliders](colliders.md). Isso é útil, por exemplo, para verificar quais objetos estão na linha de fogo de uma arma, ou estão sob o cursor do mouse quando o usuário clica.

> [!Note]
> Raycasting usa **colliders** para calcular interseções. Ele ignora entidades que não têm componente de colisão. Para mais informações, consulte [Colliders](colliders.md).

Para usar um raycast, na corrente [Simulation](xref:Stride.Physics.Simulation), use [Simulation.Raycast](xref:Stride.Physics.Simulation.Raycast(Vector3, Vector3, CollisionFilter Grupos, CollisionFilterGroupFlags, bool)).

Por exemplo, veja o projeto **Physics Sample** incluído no Stride.

## Exemplo de código

Este código envia um raycast da posição da tela do mouse:

```cs
bool estático público ScreenPositionToWorldPositionRaycast(Vector2 screenPos, CameraComponent câmera, Simulação)
(
    Matrix invViewProj = Matrix.Invert (camera.ViewProjectionMatrix);

    // Reconstrua a posição do espaço de projeção no intervalo (-1, +1).
    // Não se esqueça que Y está em coordenadas de tela, mas em espaço de projeção
    Vector3 sPos;
    sPos.X = screenPos.X * 2f - 1f;
    sPos.Y = 1f - screenPos.Y * 2f;

    // Compute o ponto próximo (start) para o raycast
    // Assume-se que tenha as mesmas coordenadas de espaço de projeção (x,y) e z = 0 (de pé no plano próximo)
    // Precisamos de desprojetá-lo para o espaço mundial
    sPos.Z = 0f;
    var vectorNear = Vector3.Transform(sPos, invViewProj);
    vectorNear /= vectorNear.W;

    // Compute o ponto distante (fim) para o raycast
    // Assume-se que tenha as mesmas coordenadas de espaço de projeção (x,y) e z = 1 (de pé no plano distante)
    // Precisamos de desprojetá-lo para o espaço mundial
    sPos.Z = 1f;
    variação Far = Vector3.Transform(sPos, invViewProj);
    vectorFar /= vectorFar.W;

    // Raycast do ponto no avião próximo ao ponto no avião distante e obter o resultado da colisão
    var result = simulação. Raycast(vectorNear.XYZ(), vectorFar.XYZ());
    resultado de retorno. Sucedida;
}
```

> [!Note]
> Existem várias maneiras de recuperar uma referência a este `Simulation` de dentro de um de seu `ScriptComponent`:
> - A maneira recomendada é através de uma referência a um componente de física, algo como `myRigidBody.Simulation` ou `myCollision. Simulação` como é o mais rápido.
> - Então através de `SceneSystem` chamando `SceneSystem.SceneInstance.GetProcessor<PhysicsProcessor>()?Simulação`.
> - Ou através de `this.GetSimulation()`, note que o `this` é necessário como é um método de extensão.

## Ver também
* [Coleiras](colliders.md)
