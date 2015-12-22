/**
 * Created by chrisfigueroa on 12/22/15.
 */


//STEP ONE
//create a new game object
//give it a width and height
var mygame = new Game("My First Game In Emerald", 800,600);

//STEP THREE
//tell emerald which methods to call for the game logic
setGameLoopFunctions(update, draw, postupdate);


//called once per frame
function update()
{
    console.log('update: ' + deltaTime);
}

//called once per frame after update
function draw()
{
    console.log('draw');
}

//called once per frame after draw
function postupdate()
{
    console.log('postupdate');
}

//call the game loop so you can draw,render,up game entities on screen
//gameloop();