/**
 * Created by chrisfigueroa on 12/22/15.
 */


//STEP ONE
//create a new game object
//give it a width and height
var mygame = new Game("My First Game In Emerald", 800,600);

//STEP TWO
//tell emerald which methods to call for the game logic
setGameLoopFunctions(update, draw, postupdate);

setGameBackgroundColor('#000000');

//create the left hand size paddle
var leftPaddle = new rect();
leftPaddle.height = 100;
leftPaddle.width = 30;
leftPaddle.x = 10;
leftPaddle.y = 250;
leftPaddle.color = '#FFFFFF';

//create the ball
var ball = new circle();
ball.x = gamecanvas.width/2;
ball.y = gamecanvas.height/2;
ball.radius = 10;
ball.color = '#FFFFFF';


//called once per frame
function update()
{
    if (Key.isDown(Key.DOWN)) {
        leftPaddle.y += 5;
        //console.log('down ' + leftPaddle.y);
    }

    if (Key.isDown(Key.UP)) {
        leftPaddle.y -= 5;
        //console.log('up ' + leftPaddle.y);
    }

    //clamp the player movement
    if(leftPaddle.y < 10)
    {
        leftPaddle.y = 10;
    }
    else if(leftPaddle.y > 490)
    {
        leftPaddle.y = 490;
    }

    //console.log('update: ' + deltaTime);
}

//called once per frame after update
function draw()
{
    //draw the left paddle
    leftPaddle.draw();
    //draw the ball
    ball.draw();

}

//called once per frame after draw
function postupdate()
{
    //console.log('postupdate');
}

//call the game loop so you can draw,render,up game entities on screen
gameloop();