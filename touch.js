var touchEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Creating new variables for the if condition
newidth = screen.width - 70;
newheight = screen.height - 300;

if (newidth < 992) {
    //Assigning specific dimensions for touch on the canvas
    document.getElementById("myCanvas").width = newidth;
    document.getElementById("myCanvas").height = newheight;

    //Hide any body design which is overpowering the canvas
    document.body.style.overflow = "hidden";
}



color = "black";
width_of_line = 1;
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    //Addictonal Activity ends
    touchEvent = "touchstart";

    //This will begin path for touch screen
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touhes[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

canvas.addEventListener("touchup", my_touchup);

function my_touchup(e) {
    touchEvent = "touchUP";
}

canvas.addEventListener("touchleave", my_touchleave);

function my_touchleave(e) {
    touchEvent = "touchleave";
}


//Additional Activity
function Clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}