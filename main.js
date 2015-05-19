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

        bear.addEventListener(Event.ENTER_FRAME,function(){
          //this.frame  bear.frameのこと
          //this.age    bear.ageのこと ageはキャラクターが表示されてからのフレーム数
          //3フレームたったら画像を変更する
          this.frame = (this.age % 3) + 5;
        });
        
        game.addEventListener(Event.ENTER_FRAME, function(e){
            var input = game.input;

            //自機キャラクターの移動
            if (input.left){
                //キャラクターのX座標がゲーム画面の左端じゃなければ、3マス移動する
                if(bear.x > 0){
                    bear.x = bear.x - 3;
                }
            }
            if (input.right){
                //キャラクターのX座標がゲーム画面の右端じゃなければ、3マス移動する
                if(bear.x < game.width - bear.width){
                    bear.x = bear.x + 3;
                }
            }
            if (input.up){
                //キャラクターのY座標がゲーム画面の上端じゃなければ、3マス移動する
                if(bear.y > 0){
                    bear.y = bear.y - 3;
                }
            }
            if (input.down){
                //キャラクターのY座標がゲーム画面の下端じゃなければ、3マス移動する
                if(bear.y < game.height - bear.height){
                    bear.y = bear.y + 3;
                }
            }
        });
    };
    game.start();
};