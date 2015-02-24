enchant();

window.onload = function(){
   var game = new Core(320, 320);

    game.fps = 30;

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
            //キャラクターのX座標がゲーム画面の右端じゃなければ、3マス移動する
            if(bear.x < game.width - bear.width){
                bear.x = bear.x + 3;
            }
        });
        game.addEventListener(Event.LEFT_BUTTON_DOWN,function(){
            //キャラクターのX座標がゲーム画面の左端じゃなければ、3マス移動する
            if(bear.x > 0){
                bear.x = bear.x - 3;
            }
        });
        game.addEventListener(Event.DOWN_BUTTON_DOWN,function(){
            //キャラクターのY座標がゲーム画面の下端じゃなければ、3マス移動する
            if(bear.y < game.height - bear.height){
                bear.y = bear.y + 3;
            }
        });
        game.addEventListener(Event.UP_BUTTON_DOWN,function(){
            //キャラクターのY座標がゲーム画面の上端じゃなければ、3マス移動する
            if(bear.y > 0){
                bear.y = bear.y - 3;
            }
        });
    };
    game.start();
};
