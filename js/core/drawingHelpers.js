/**
 * Created by chrisfigueroa on 12/22/15.
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
    }
};

var circle = function () {

    this.color = "#00A";
    this.x = 220;
    this.y = 270;
    this.radius = 40;
    this.width = 32;
    this.height = 32;
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
