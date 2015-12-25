/**
 * Created by chrisfigueroa on 12/22/15.
 */

//draw a sprite on the screen
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

//create a rectangle
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
    }
};

//create a circle
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
