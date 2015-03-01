enchant();

window.onload = function(){
   var game = new Core(320, 320);

    game.fps = 10;

    game.preload("chara1.png");

    game.onload = function(){
	game.rootScene.backgroundColor = "blue";

     	bear = new Sprite(32, 32);
    	bear.image = game.assets["chara1.png"];
        bear.x = 0;
        bear.y = 0;
        bear.frame = 5;
        game.rootScene.addChild(bear);

        game.addEventListener(Event.RIGHT_BUTTON_DOWN,function(){
            bear.x = bear.x + 3; // １を3に変更。一回の移動あたり座標を3移動させる
        });
        game.addEventListener(Event.LEFT_BUTTON_DOWN,function(){
            bear.x = bear.x - 3; // １を3に変更。一回の移動あたり座標を3移動させる
        });
        game.addEventListener(Event.DOWN_BUTTON_DOWN,function(){
            bear.y = bear.y + 3; // １を3に変更。一回の移動あたり座標を3移動させる
        });
        game.addEventListener(Event.UP_BUTTON_DOWN,function(){
            bear.y = bear.y - 3; // １を3に変更。一回の移動あたり座標を3移動させる
        });
    };
    game.start();
};
