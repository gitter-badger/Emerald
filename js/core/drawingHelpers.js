/**
 * Created by chrisfigueroa on 12/22/15.
 */


/**
 * Draw a sprite on the screen
 * @function
 */
var sprite = function () {

    //the file location
    this.src = "";
    //x coordinate in the canvas
    this.x = 220;
    //y coordinate in the canvas
    this.y = 270;
    //width of the sprite
    this.width = 32;
    //height of the image
    this.height = 32;

    this.draw = function () {

        var c = document.getElementById(gamecanvas.id);
        var ctx = c.getContext("2d");
        var img = new Image();
        img.src = this.src;
        ctx.drawImage( img, this.x, this.y, this.width, this.height);

    }
}


/**
 * Draws a Rectangle on screen
 * @function
 */
var rect = function () {

    this.color = "#00A";
    this.x = 220;
    this.y = 270;
    this.width = 32;
    this.height = 32;

    this.draw = function() {
        var c = document.getElementById(gamecanvas.id);
        var ctx = c.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
};


/**
 * Draws a circle on screen
 * @function
 */
var circle = function () {

    this.color = "#00A";
    this.x = 220;
    this.y = 270;
    this.radius = 40;
    this.width = this.radius / 2;
    this.height = this.radius / 2;

    this.draw = function() {
        var c = document.getElementById(gamecanvas.id);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    }
};


/**
 * Draws a line on screen
 * @function
 */
var line = function () {

    this.startPosx = 0;
    this.startPosy = 0;

    this.color = "#000000";

    var lines = [];

     var line = function (x,y) {
        this.x = x;
        this.y = y;
    };

    this.addline = function (x,y) {
        lines.push(new line(x,y));
    }



    this.draw = function () {

        var canvas = document.getElementById(gamecanvas.id);
        var ctx = canvas.getContext("2d");

        ctx.moveTo(this.startPosx, this.startPosy);

        if(lines.length == null)
        {
            console.error('create a new line with addline(x,y); ');
        }
        else
        {
            for (i = 0; i < lines.length; i++) {
                ctx.lineTo(lines[i].x, lines[i].y);
            }
        }

        ctx.strokeStyle = this.color;
        ctx.stroke();

    }

}

