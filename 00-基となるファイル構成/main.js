enchant();

window.onload = function(){
   var game = new Core(320, 320);

    game.fps = 10;

    game.preload("chara1.png");

    game.onload = function(){
	game.rootScene.backgroundColor = "blue";

    }
    game.start();
};
