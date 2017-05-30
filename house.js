/**
 * Created by liudmilaezhova1 on 15/05/2017.
 */

var stage;
var roof,walls,door,sun ;

function init() {
    stage = new createjs.Stage("myFirst");
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick",tock)



    walls = new createjs.Shape();
    walls.graphics.beginFill("yellow");
    walls.graphics.drawRoundRect(0, 0, 200, 200, 5);
    walls.x=200;
    walls.y=200;

    roof = new createjs.Shape();
    roof.graphics.beginFill("red");
    roof.graphics.drawRoundRect(0, 0, 160, 160, 3);
    roof.x=300;
    roof.y=100;
    roof.rotation =45;

    door = new createjs.Shape();
    door.graphics.beginFill("grey");
    door.graphics.drawRect(0, 0, 40, 100);
    door.x=280;
    door.y=300;

    sun = new createjs.Shape();
    sun.graphics.beginFill("yellow");
    sun.graphics.drawCircle(0, 0, 30);
    sun.x=50;
    sun.y=450;
    sun.alpha=0;
    sun.sunDirection="up" ;



    stage.addChild(roof);
    stage.addChild(walls);
    stage.addChild(door);
    stage.addChild(sun);

}
function tock(e) {

    if (sun.sunDirection === "up") {
        sun.y -= 3;
        sun.alpha += 0.01;
        //console.log("rising");
        if (sun.y < 50) {
            sun.sunDirection = "down";

        }
    } else{
         sun.y+=3;
         sun.alpha -= 0.01;
         //console.log("setting");
         if(sun.y > 400){
             sun.sunDirection="up";
         }
        }
    
    stage.update(e);

}