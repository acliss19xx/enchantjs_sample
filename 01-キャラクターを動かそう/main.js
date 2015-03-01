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

	//右矢印キーが押されたらX座標を１ドット右に動かす
        game.addEventListener(Event.RIGHT_BUTTON_DOWN,function(){
            bear.x = bear.x + 1;
        });
	//左矢印キーが押されたらX座標を１ドット左に動かす
        game.addEventListener(Event.LEFT_BUTTON_DOWN,function(){
            bear.x = bear.x - 1;
        });
	//下矢印キーが押されたらY座標を１ドット下に動かす
        game.addEventListener(Event.DOWN_BUTTON_DOWN,function(){
            bear.y = bear.y + 1;
        });
	//上矢印キーが押されたらY座標を１ドット上に動かす
        game.addEventListener(Event.UP_BUTTON_DOWN,function(){
            bear.y = bear.y - 1;
        });
    };
    game.start();
};
