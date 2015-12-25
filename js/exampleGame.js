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

//create the ball
var ball = new circle();
ball.x = gamecanvas.width/2;
ball.y = gamecanvas.height/2;
ball.radius = 10;
ball.color = '#FFFFFF';
var ballyVel = 3.00;
var ballxVel = 2.50;

//create the left hand size paddle
var leftPaddle = new rect();
leftPaddle.height = 100;
leftPaddle.width = 30;
leftPaddle.x = 10;
leftPaddle.y = 250;
leftPaddle.color = '#FFFFFF';

//create the right hand side paddle
var rightPaddle = new rect();
rightPaddle.height = 100;
rightPaddle.width = 30;
rightPaddle.x = 760;
rightPaddle.y = 250;
rightPaddle.color = '#FFFFFF';

//called once per frame
function update()
{

    //ball collision detection
    ballCollisionWithPaddles();
    //ball movement logic
    ballMovement();
    //left paddle keyboard control
    leftPaddleMovement();
    //right paddle keyboard controls
    rightPaddleMovement();


    //console.log('update: ' + deltaTime);
}

function ballCollisionWithPaddles()
{

    //check if the leftpaddle and the ball collided
    if(abcollision(ball, leftPaddle))
    {
        //hit the leftpaddle. Now change direction
        console.log('hit left paddle');
        ballxVel = -ballxVel;
    }

    if(abcollision(rightPaddle, ball))
    {
        //hit the right paddle. Now change direction
        console.log('hit right paddle');
        ballxVel = -ballxVel;
    }
}


function ballMovement()
{
    ball.x += ballxVel;
    ball.y += ballyVel;

    if(ball.y == gamecanvas.height)
    {
        // When the ball hits the top or bottom of the screen
        ballyVel = -ballyVel;
    }
    else if(ball.y == gamecanvas.height - gamecanvas.height)
    {
        ballyVel = -ballyVel;
    }

    if(ball.x == gamecanvas.width)
    {

        ballxVel = -ballxVel;
    }
    else if(ball.x == gamecanvas.height - gamecanvas.height)
    {
        ballxVel = -ballxVel;
    }
}

function rightPaddleMovement ()
{
    if (Key.isDown(Key.DOWN))
    {
        rightPaddle.y += 5;
        //console.log('down ' + leftPaddle.y);
    }

    if (Key.isDown(Key.UP))
    {
        rightPaddle.y -= 5;
        //console.log('up ' + leftPaddle.y);
    }

    //clamp the player movement
    if(rightPaddle.y < 10)
    {
        rightPaddle.y = 10;
    }
    else if(rightPaddle.y > 490)
    {
        rightPaddle.y = 490;
    }

}

function leftPaddleMovement ()
{
    if (Key.isDown(Key.S)) {
        leftPaddle.y += 5;
        //console.log('down ' + leftPaddle.y);
    }

    if (Key.isDown(Key.W)) {
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

}

//called once per frame after update
function draw()
{
    //draw the paddles
    leftPaddle.draw();
    rightPaddle.draw();
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