function Sierpinski() {
    if(window.innerWidth <= window.innerHeight) {
        this.w = window.innerWidth * .95;
         this.h = Math.sqrt(3) / 2 * this.w;
    }
    else {
        this.h = window.innerHeight * .95;
        this.w = this.h *2 / Math.sqrt(3);
    }

    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.maxDepth = 10;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
}

Sierpinski.prototype.drawSierpinski= function(depth)
{
    this.context.clearRect(0, 0, this.w, this.h);

    var x0 = 0, y0 = this.h - 1;
    var x1 = this.w, y1 = this.h - 1;
    var x2 = this.w/2, y2 = 0;

    this.context.fillStyle = "#9CFF00";
    this.drawTriangle(x0, y0, x1, y1, x2, y2);

    this.context.fillStyle = "#333";
    if (depth > this.maxDepth) { 
        depth = this.maxDepth;
    }
    this.removeCenter(x0, y0, x1, y1, x2, y2, depth);    
};


Sierpinski.prototype.drawTriangle = function(x0, y0, x1, y1, x2, y2) {
    this.context.beginPath();
    this.context.moveTo(x0, y0);
    this.context.lineTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.lineTo(x0, y0);
    this.context.fill();
};


Sierpinski.prototype.removeCenter = function(x0, y0, x1, y1, x2, y2, depth) {
    if (depth > 0) {

        var x01 = (x0 + x1)/2, y01 = (y0 + y1)/2;
        var x02 = (x0 + x2)/2, y02 = (y0 + y2)/2;
        var x12 = (x1 + x2)/2, y12 = (y1 + y2)/2;

        this.drawTriangle(x01, y01, x02, y02, x12, y12);
        if (depth > 1) {
 
            this.removeCenter(x0, y0, x01, y01, x02, y02, depth - 1);
            this.removeCenter(x01, y01, x1, y1, x12, y12, depth - 1);
            this.removeCenter(x02, y02, x12, y12, x2, y2, depth - 1);
        }
    }
};
