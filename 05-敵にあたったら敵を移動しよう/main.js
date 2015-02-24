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

        enemy = new Sprite(32,32);
        enemy.image = game.assets["chara1.png"];
        enemy.x = 200;
        enemy.y = 200;
        enemy.frame = 10;
        game.rootScene.addChild(enemy);

	//毎フレームのたびに敵とあたっているかチェック
        game.addEventListener(Event.ENTER_FRAME,function(){
            //敵とあたったら
            if(bear.intersect(enemy)){
                //ランダムに移動する。
                enemy.x = Math.floor(Math.random() * (320-enemy.width));
                enemy.y = Math.floor(Math.random() * (320-enemy.width)); 
            }
        });

        game.addEventListener(Event.RIGHT_BUTTON_DOWN,function(){
            if(bear.x < game.width - bear.width){
                bear.x = bear.x + 3;
            }
        });
        game.addEventListener(Event.LEFT_BUTTON_DOWN,function(){
            if(bear.x > 0){
                bear.x = bear.x - 3;
            }
        });
        game.addEventListener(Event.DOWN_BUTTON_DOWN,function(){
            if(bear.y < game.height - bear.height){
                bear.y = bear.y + 3;
            }
        });
        game.addEventListener(Event.UP_BUTTON_DOWN,function(){
            if(bear.y > 0){
                bear.y = bear.y - 3;
            }
        });
    };
    game.start();
};
