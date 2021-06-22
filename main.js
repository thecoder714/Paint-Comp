//define variables

canvas = document.getElementById("draw");
ctx = canvas.getContext("2d");
var mouseEvent, color, radius, width;

//add listeners

canvas.addEventListener("mousedown" , my_mousedown);
canvas.addEventListener("mouseup" , my_mouseup);
canvas.addEventListener("mouseleave" , my_mouseleave);
canvas.addEventListener("mousemove" , my_mousemove);

//define mouse events

function my_mousedown(e) {
    mouseEvent = "mousedown";
    radius = document.getElementById("circradius").value;
    width = document.getElementById("linewidth").value;

    curX = e.clientX - canvas.offsetLeft;
    curY = e.clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(curX,curY,radius,0, 2 * Math.PI);
        ctx.stroke();
}

function my_mouseup() {
    mouseEvent = "mouseup";
}

function my_mouseleave() {
    mouseEvent = "mouseleave";
}

function my_mousemove(e) {
    mouseEvent = "mousemove";
    radius = document.getElementById("circradius").value;
    width = document.getElementById("linewidth").value;
    
    curX = e.clientX - canvas.offsetLeft;
    curY = e.clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(curX,curY,radius,0,2 * Math.PI);
        ctx.stroke();
}

