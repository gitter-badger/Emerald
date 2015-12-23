/**
 * Created by chrisfigueroa on 12/22/15.
 */

//Signal globals
var Signal = signals.Signal;
var mySignal = new Signal();

//custom global DRAW object that dispatch signals
var gameDrawSignal = {
    started : new Signal(), //past tense is the recommended signal naming convention
    stopped : new Signal()
};

//custom global UPDATE object that dispatch signals
var gameUpdateSignal = {
    started : new Signal(), //past tense is the recommended signal naming convention
    stopped : new Signal()
};

//custom global POSTUPDATE object that dispatches signals
var gamePostUpdateSignal = {
    started : new Signal(), //past tense is the recommended signal naming convention
    stopped : new Signal()
};

//set the update loop with the function passed.
//will override currently set function passed. If any.
function setUpdateFunctionLoop(newUpdateFunction) {

    gamePostUpdateSignal.started.add(newUpdateFunction);

}

//set the draw loop with the function passed.
//will override currently set function passed. If any.
function setDrawFunctionLoop (newDrawFunction) {

    gameDrawSignal.started.add(newDrawFunction);

}

//set the PostUpdate loop with the function passed.
//will override currently set function passed. If any.
function setPostUpdateLoop (newPostUpdateFunction) {

    gamePostUpdateSignal.started.add(newPostUpdateFunction);

}


//Set all the game loop functions: UpdateFunction, DrawFunction, PostUpdateFunction
function setGameLoopFunctions(updatefunction, drawfunction, postupdatefunction) {

    gameUpdateSignal.started.add(updatefunction);
    gameDrawSignal.started.add(drawfunction);
    gamePostUpdateSignal.started.add(postupdatefunction);

}

//delta time - Is updated before Update is called
var deltaTime;

//the canvas object that draws our game
var gamecanvas;

//the game object that will create a canvas on the default HTML file
function Game (gamename, width, height) {

    ///create a title tag
    var title = document.createElement('h3');
    title.id = 'title';
    //create a text node to display the name
    var t = document.createTextNode(gamename);
    title.appendChild(t);
    document.body.appendChild(title);

    //create the canvas element
    gamecanvas = document.createElement('canvas');
    gamecanvas.id     = "gamecanvas";
    gamecanvas.width  = width;
    gamecanvas.height = height;
    gamecanvas.style.position = "absolute";
    gamecanvas.style.border   = "1px solid";
    document.body.appendChild(gamecanvas);
    console.log('Created Game Canvas');

}

//change the canvas background color
var setGameBackgroundColor = function (colorcode) {

    document.getElementById(gamecanvas.id).style.background = colorcode;
}

//change the game fps. Defaults to 60
var gameFPS = 60;

//sets the FPS to whatever value listed
function setGameFPS (fpsvalue) {
    gameFPS = fpsvalue;
    console.log('FPS set to: ' + fpsvalue);
}

//resets the FPS to the default 60fps
function resetGameFPS () {
    gameFPS = 60;
    console.log('FPS returned to 60');
}

//the game loop that will update and draw your game objects
function gameloop () {
    setInterval(function() {

        //find the following functions. If they exist call them?
        deltaTime = new Date().getTime();
        gameUpdateSignal.started.dispatch();
        //clear the canvas before the draw phase
        clearCanvas();
        gameDrawSignal.started.dispatch();
        gamePostUpdateSignal.started.dispatch();

    }, 1000/gameFPS);
}

///clear the canvas so we can draw objects moving
function clearCanvas()
{
    var c = document.getElementById(gamecanvas.id).getContext("2d");
    c.clearRect(0, 0, gamecanvas.width, gamecanvas.height);

}
