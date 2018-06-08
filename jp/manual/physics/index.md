# 物理特性

![Physics in Xenko](media/physics-index-physics-in-xenko.png)

Xenko は、重力や衝突といった現実世界の物理特性をシミュレートします。このセクションでは、物理特性コンポーネントの動作方法、プロジェクトへの追加方法、スクリプトでの使用方法を説明します。

## このセクションの内容

* [コライダー](colliders.md): コライダー コンポーネントをエンティティに追加することで、物理特性を作成します
    * [静的コライダー](static-colliders.md): 動かないコライダーです
    * [剛体](rigid-bodies.md): 動くオブジェクトであり、重力や衝突によって影響を受けます
    * [運動学的剛体](kinematic-rigid-bodies.md): スクリプトによって制御される物理オブジェクトです
    * [キャラクター](characters.md): キャラクターのコライダーです (プレイヤー キャラクターや NPC など)
    * [コライダーの形状](collider-shapes.md): コライダー コンポーネントの形状を定義します
    * [トリガー](triggers.md): トリガーを使用して通過するオブジェクトを検出します
    * [制約](constraints.md): 魅力的で現実的な物理特性を作成します
* [レイキャスティング](raycasting.md): 交差するオブジェクトをトレースします
* [シミュレーション](simulation.md): Xenko が物理特性を制御する方法です

### チュートリアル

* [跳ね返るボールを作成する](create-a-bouncing-ball.md): 静的コライダー コンポーネントと剛体コンポーネントを使用して、床で跳ね返るボールを作成します
* [トリガーをスクリプトにする](script-a-trigger.md): ボールが通過するときにボールのサイズを 2 倍にするトリガーを作成します

## その他の参照情報

Xenko では、オープンソースの [Bullet Physics](http://bulletphysics.org/wordpress/) エンジンが使用されています。詳細については、[Bullet のユーザー マニュアル](https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf)を参照してください。
