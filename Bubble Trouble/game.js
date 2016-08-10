var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
var context = canvas.getContext("2d");

var myX = 200 + 14,
    myY = 550,
    mouseMovementX = 0,
    mouseMovementY = 0,
    d = 0,
    shooting = false, //becames true when startGame or restartGame
<<<<<<< HEAD
    pX = 200,
    pY = 550,
    lives = 3; //number of starting lves

var startGame = true,
=======
    playerX = 200,
    playerY = 550,
    lives = 3, //number of starting lves
    crash = new Audio('fireCracker.wav'),  //Sound played when level is completed.
    ballHit=new Audio("POP.wav"), //Sound when ball is hit.
    startGame = true,
>>>>>>> master
    restartGame = false,
    level = 1, // Level of the game 1 to 5
    win = false,
    loose = false;

var ninja = new Image();
ninja.src = "./img/ninja-left.png";

var background = new Image();
background.src = "./img/game-background.jpg";


var deviationX = 2,
    deviationY = 2,
    successfulShotsCount = 0; //number of times we hit a ball

var ballsX = [],
    ballsY = [],
    i,
    deviationX = [],
    deviationY = [],
    ballsRadius = []; //Radius of the balls
ballsX[0] = 200;  //starting position of first ball X
ballsY[0] = 200;  //starting position of first ball Y
deviationX[0] = 2;
deviationY[0] = 2;
ballsRadius[0] = 40;
successfulShotsCount += 1;

//-------------------------------------------End of intro music-----------------------------------------------
var intro = document.getElementById("media");

window.addEventListener("mousedown", function (args) {

    stopIntro();

}, true);

function stopIntro() {
    intro.pause();
    intro.currentTime = 0;
}

//--------------------------------------------Start of keydown event----------------------------------------------
window.addEventListener("keydown", function (args) {

    console.log(args.which);

}, true);
//--------------------------------------------End of keydown event----------------------------------------------

//--------------------------------------------Start of mouseup event----------------------------------------------
canvas.addEventListener("mouseup", function (args) {

    if(!startGame && !restartGame){
        shooting = true;
    }
    if(startGame){
        startGame = false;
    }
    if(restartGame && level <= 5){
        if(loose){
            lives = lives - 1;
        }
        myY = 550;
        d = 0;
        shooting = false;
        playerX = 200;
        playerY = 550;
        restartGame = false;
        win = false;
        loose = false;
        for(i = 0; i < successfulShotsCount; i += 1){
            ballsX[i] = 0;
            ballsY[i] = 0;
            deviationX[i] = 0;
            deviationY[i] = 0;
            ballsRadius[i] = 0;
        }
        successfulShotsCount=0;
        if(level == 1){
            ballsX[0] = 200;
            ballsY[0] = 200;
            deviationX[0] = 2;
            deviationY[0] = 2;
            ballsRadius[0] = 40;
            successfulShotsCount += 1;
        }

        if(level == 2 ){
            ballsX[0] = 200;
            ballsY[0] = 200;
            deviationX[0] = 2;
            deviationY[0] = 2;
            ballsRadius[0] = 80;
            successfulShotsCount += 1;
        }

        if(level == 3){
            ballsX[0] = 200;
            ballsY[0] = 200;
            deviationX[0] = 2;
            deviationY[0] = 2;
            ballsRadius[0] = 40;
            successfulShotsCount += 1;
            ballsX[1] = 200;
            ballsY[1] = 200;
            deviationX[1] =- 2;
            deviationY[1] = 2;
            ballsRadius[1] = 40;
            successfulShotsCount += 1;
        }

        if(level == 4){
            ballsX[0] = 200;
            ballsY[0] = 200;
            deviationX[0] = 2;
            deviationY[0] = 2;
            ballsRadius[0] = 80;
            successfulShotsCount += 1;
            ballsX[1] = 200;
            ballsY[1] = 200;
            deviationX[1] = -2;
            deviationY[1] = 2;
            ballsRadius[1] = 80;
            successfulShotsCount += 1;
        }

        if(level == 5){
            ballsX[0] = 200;
            ballsY[0] = 200;
            deviationX[0] = 2;
            deviationY[0] = 2;
            ballsRadius[0] = 40;
            successfulShotsCount += 1;
            ballsX[1] = 200;
            ballsY[1] = 200;
            deviationX[1] = -2;
            deviationY[1] = 2;
            ballsRadius[1] = 40;
            successfulShotsCount += 1;
            ballsX[2] = 200;
            ballsY[2] = 200;
            deviationX[2] = 2;
            deviationY[2] = 2;
            ballsRadius[2] = 40;
            successfulShotsCount += 1;
        }
    }
}, false);
//--------------------------------------------End of mouseup event----------------------------------------------

//--------------------------------------------Start of mousemove event----------------------------------------------
canvas.addEventListener("mousemove", function (args) {
    mouseMovementX = args.clientX-canvas.offsetLeft;
    mouseMovementY = args.clientY-canvas.offsetTop;


}, false);

//--------------------------------------------End of mousemove event----------------------------------------------

//--------------------------------------------Start of collision function----------------------------------------------





function collision (p1x,p1y,r1,p2x,p2y,r2){
    d = Math.sqrt((p1x - p2x) * (p1x - p2x) + (p1y - p2y) * (p1y - p2y));
    var radi = r1 + r2;
    var crash = new Audio('fireCracker.wav');

    if(radi > d){
<<<<<<< HEAD
        //crash.play();
=======
        ballHit.play();
>>>>>>> master
        return true;


    }else{
        return false;
    }
}
//--------------------------------------------End of collision function----------------------------------------------

//--------------------------------------------Start of update function----------------------------------------------
function update() {
    if(!startGame && !restartGame){
        if(lives === 0){
            level = 1;
            restartGame = true;
            lives = 3;
        }
        console.log(ballsX[0],ballsY[0],ballsRadius[0],successfulShotsCount);
        restartGame = true;
        for(i = 0; i < successfulShotsCount; i += 1){
            if(ballsRadius[i] >= 5){
                restartGame = false;
            }
        }
        if(restartGame){
            win = true;
            level = level + 1;
        }
        playerX = mouseMovementX;
        if(playerX < 1){
            playerX = 1;
        }
        if(playerX > 750){
            playerX = 750;
        }
        if(!shooting){
            myX = playerX + 14;
        }
        if(shooting){
            myY = myY - 5;
        }
        if(myY - 5 <= 0){
            shooting = false;
            myY = 550;
            myX = playerX + 14;
        }
        for(i = 0; i < successfulShotsCount; i += 1){

            ballsX[i] = ballsX[i] + deviationX[i];
            ballsY[i] = ballsY[i] + deviationY[i];




            if(ballsX[i] + ballsRadius[i] > 800){
                deviationX[i] = -2;
            }
            if(ballsX[i] - ballsRadius[i] <= 0){
                deviationX[i] = 2;
            }
            if(ballsY[i] + ballsRadius[i] > 600){
                deviationY[i] = -5;
            }else{
                deviationY[i] = deviationY[i] + 0.04;
            }
        }
    }
    setTimeout(update, 10);
}
//--------------------------------------------End of update function----------------------------------------------

//--------------------------------------------Start of draw function----------------------------------------------
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
    //-------------------------First if--------------------------When we open the game
    if(startGame){
        context.fillStyle = "rgb(0, 0, 0)";
        context.font = "30px Shojumaru-Regular";
        context.fillText("Click to continue", 230, 520);
        context.fillStyle = "rgb(255, 117, 0)";
        context.font = "110px Shojumaru-Regular";
        context.fillText("BUBBLE", 70, 150);
        context.fillStyle = "rgb(204, 255, 51)";
        context.font = "100px Shojumaru-Regular";
        context.fillText("TROUBLE", 180, 210);
        context.shadowColor   = '#804000';
        context.shadowOffsetX = 3;
        context.shadowOffsetY = 3;
        context.shadowBlur    = 3;
    }
    //-------------------------Second if-------------------------Restart, Win or Loose
    if(restartGame){
        if(level <= 5){
            context.fillStyle = "rgb(0, 0, 0)";
            context.font = "30px Shojumaru-Regular";
            context.fillText("Click to continue", 230, 520);
        }
        if(win){
            context.fillStyle = "rgb(0, 0, 0)";
            context.font = "70px Shojumaru-Regular";
            context.fillText("Gongratulations", 20, 150);
            context.fillText("Next Level: " + level, 120, 250);
            crash.play();
            
        }
        if(loose){
            context.fillStyle = "rgb(0, 0, 0)";
            context.font = "100px Shojumaru-Regular";
            if (lives > 1 ){
            context.fillText("Lifes left:", 60, 150);
            context.fillText((lives - 1), 350, 250);
            }
            else{
            context.fillText("Game Over" , 60, 150);
            }
        }
    }

    //-------------------------Third if--------------------------When playing the game
    if(!startGame && !restartGame){

        context.fill();
        context.drawImage(background,0,0,800,600);

        for(i = 0; i < successfulShotsCount; i += 1){

            if(collision(myX,myY,5,ballsX[i],ballsY[i],ballsRadius[i]) && shooting && ballsRadius[i] >= 5){

                ballsX[successfulShotsCount] = ballsX[i];
                ballsY[successfulShotsCount] = ballsY[i];
                deviationX[successfulShotsCount] =- deviationX[i];
                deviationY[successfulShotsCount] =- 3;
                deviationY[i] =- 3;
                ballsRadius[successfulShotsCount] = ballsRadius[i]/2;
                ballsRadius[i] = ballsRadius[i] / 2;
                successfulShotsCount += 1;
                myY = 550;
                shooting = false;
            }


            context.beginPath();
            if(ballsRadius[i] >= 5){
                context.arc(ballsX[i],ballsY[i],ballsRadius[i],0,2*Math.PI);
                //balls to shoot at border + color
                context.lineWidth = 3;
                context.strokeStyle = "#C1D72E";
                context.stroke();
            }
            if(playerX + 30 > ballsX[i] && playerX < ballsX[i] + ballsRadius[i] && playerY + 60>ballsY[i] && playerY < ballsY[i] + ballsRadius[i] && ballsRadius[i] >= 5){
                restartGame = true;
                loose = true;
            }
            context.fill();

        }

        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur    = 0;
        context.fillStyle = "#C1D72E";
        context.font = "30px Shojumaru-Regular";
        context.fillText("LEVEL: "+level, 20, 40); // context.fillText("LEVEL:"+level, 100, 50); //shows top left //yasen 01.08
        context.fillStyle = "#C1D72E";
        context.font = "30px Shojumaru-Regular";
        context.fillText("LIVES: " +lives, 630, 40); //context.fillText("LIVES:"+lives, 400, 50); //shows top right //yasen 01.08

        context.beginPath();  //new line
        context.arc(myX,myY,5,0,2*Math.PI);
        context.fillStyle = "#2E2E1F";  //context.fillStyle="red";  //change color of balls //yasen 01.08
        context.fill();
        context.lineWidth = 7;   //new line  //yasen 01.08
        context.strokeStyle = "#C1D72E";  //green border for bigger shooting ball //yasen 01.08
        context.stroke();  //new line //yasen 01.08



        context.fill();
        context.drawImage(ninja,playerX,playerY,60,50);


    }

    requestAnimationFrame(draw);
}
//--------------------------------------------End draw function----------------------------------------------


update();
draw();