# キネマティック剛体

[剛体](rigid-bodies.md) を、他のオブジェクトによって動かすのではなく、固有の方法で動かしたいことがあります。たとえば、エレベーターを他のオブジェクトで押したり引いたりするのではなく、`Transform` プロパティを使用してスクリプトで制御するような場合です。これが**運動学的**剛体です。

運動学的剛体は物理特性によっては動かされませんが、他のオブジェクトが衝突することはできます。たとえば、エレベーターの場合では、エレベーターの内部にあるオブジェクトが、エレベーターの床を通り抜けて落下することはありません。

![Kinematic elevator](media/rigid-bodies-kinematic-elevator.png)

## 運動学的剛体を作成する

1. 運動学的剛体にするエンティティを選択します。

2. ［Property grid］で、［Rigidbody］コンポーネントのプロパティの［Is Kinematic］を選択します。

    ![Check 'Is kinematic'](media/rigid-bodies-is-kinematic-checkbox.png)

## 運動学的剛体のスクリプトを作成する

［Is Kinematic］プロパティをスクリプトにして、特定のイベントでオンまたはオフにすることができます。たとえば、運動学的エレベーターを吊り下げているケーブルが切れた場合を想像してください。それが発生したときに、スクリプトで［Is Kinematic］プロパティを［false］に変更することができます。そうすると、エレベーターは通常の物理特性の力を受けるようになって落下します。

![Non-kinematic elevator](media/rigid-bodies-non-kinematic-elevator.png)

## 関連項目

* [剛体](rigid-bodies.md)
* [静的コライダー](static-colliders.md)
* [キャラクター](characters.md)
* [コライダーの形状](collider-shapes.md)
* [トリガー](triggers.md)
