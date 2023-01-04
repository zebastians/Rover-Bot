canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x= 10;
rover_y= 10;

function add() {

    background_imgTag = new Image();  // definimos una variable cono una nueva imagen en el codigo
    background_imgTag.nload = uploadBackground; //establecemos una funcion, agregando esta variable
    backgruond_imgTag.src = background_image; // cargamos la imagen en el codigo


    rover_imgTag = new Image(); // definimos otra variable con una nueva imagen
    rover_imgTag.onload = uploadrover; //establecemos una ffufncion, agreegando esta variable
    rover_imgTag.src = rover_image; //cargamos la imagen
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {

    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {

        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function left()
{
    if(rover_x >= 0)
    {
        rover_x =rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x <= 700)
    {
        rover_x =rover_x + 10;
        console.log("When right arrow is pressed, x =" + rover_x + " | y =" +rover_y);
        uploadBackground();
        uploadrover();
    }
}


function up()
{
    if(rover_y >=0)
    {
        rover_y -=10;
        console.log("When up arrow is pressed = " + rover_x + " - "+rover_y);
        uploadBackground();
        uploadwater();
        uploadrover();
    }
}

function down()
{

    if(rover_y <=500)
    {
        rover_y += 10;
        console.log("When down arrow is pressed, x = " + rover_x " | y = " +rover_y);
        uploadBackground();
        uploadwater();
        uploadrover();
    }
}

