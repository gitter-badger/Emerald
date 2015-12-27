/**
 * Created by chrisfigueroa on 12/22/15.
 */

///////////////////////////
//// Engine Specific
///////////////////////////

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

///////////////////////////
//// End of Engine Specific
///////////////////////////


/**
 * Set all the main update game loop. Called once per frame
 * @function
 * @param {function} update function - the function called once per frame
 */
function setUpdateFunctionLoop(newUpdateFunction) {

    gamePostUpdateSignal.started.add(newUpdateFunction);

}

/**
 * Set all the draw loop
 * @function
 * @param {function} draw function - function called after update
 */
function setDrawFunctionLoop (newDrawFunction) {

    gameDrawSignal.started.add(newDrawFunction);

}

/**
 * Set all the post update function
 * @function
 * @param {function} postupdate - function called after draw. For clean up
 */
function setPostUpdateLoop (newPostUpdateFunction) {

    gamePostUpdateSignal.started.add(newPostUpdateFunction);

}


/**
 * Set all the game loop functions at once
 * @function
 * @param {function} update function - the function called once per frame
 * @param {function} draw function - function called after update
 * @param {function} postupdate - function called after draw. For clean up
 */
function setGameLoopFunctions(updatefunction, drawfunction, postupdatefunction) {

    gameUpdateSignal.started.add(updatefunction);
    gameDrawSignal.started.add(drawfunction);
    gamePostUpdateSignal.started.add(postupdatefunction);

}


/**
 * delta time - Is updated before Update is called
 * @variable
 */
var deltaTime;

/**
 * the canvas object that draws our game
 * @variable
 */
var gamecanvas;

/**
 * the game object that will create a canvas on the default HTML file
 * @constructor
 * @param {string} title - The title of the game.
 * @param {int} width - The width of the game canvas
 * @param {int} height - The height of the game canvas
 * @param {function} Setup OnComplete Callback
 */
function Game (gamename, width, height, callback) {

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
    callback();
}

//change the canvas background color
var setGameBackgroundColor = function (colorcode) {

    document.getElementById(gamecanvas.id).style.background = colorcode;
}

/**
 * change the game fps. Defaults to 60
 * @variable
 */
var gameFPS = 60;

/**
 * sets the FPS to whatever value listed
 * @function
 */
function setGameFPS (fpsvalue) {
    gameFPS = fpsvalue;
    console.log('FPS set to: ' + fpsvalue);
}

/**
 * resets the FPS to the default 60fps
 * @function
 */
function resetGameFPS () {
    gameFPS = 60;
    console.log('FPS returned to 60');
}

/**
 * The main gameloop that calls all the functions specified in a specifc order
 * @function
 */
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

//call the game loop so you can draw,render,up game entities on screen
gameloop();

/**
 * clear the canvas so we can draw objects moving
 * @function
 */
function clearCanvas()
{
    var c = document.getElementById(gamecanvas.id).getContext("2d");
    c.clearRect(0, 0, gamecanvas.width, gamecanvas.height);

}
