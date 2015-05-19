enchant();

window.onload = function(){
   var game = new Core(320, 320);

    game.fps = 10;

    game.preload("chara1.png");

    game.onload = function(){
        game.rootScene.backgroundColor = "blue";
        //バーチャルパッドの生成
        var pad = new Pad();
        pad.x   = 0;
        pad.y   = 220;
        game.rootScene.addChild(pad);

    	bear = new Sprite(32, 32);
    	bear.image = game.assets["chara1.png"];
        bear.x = 0;
        bear.y = 0;
        bear.frame = 5;
        game.rootScene.addChild(bear);

    };
    game.start();
};