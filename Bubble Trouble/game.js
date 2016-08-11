var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) { setTimeout (callback, 1000 / 30); },

    canvas = document.getElementById("canvas-id");
context = canvas.getContext("2d");

var shurikenX = 200 + 14,
    shurikenY = 550,
    mouseMovementX = 0,
    mouseMovementY = 0,
    d = 0,
    shooting = false, //becames true when startGame or restartGame
    playerX = 200,
    playerY = 550,
    lives = 3, //number of starting lves
    crash = new Audio("./audio/fireCracker.wav"),  //Sound played when level is completed.
    ballHit=new Audio("./audio/POP.wav"), //Sound when ball is hit.
    GameOver=new Audio("./audio/Violin.mp3"),
    startGame = true,
    restartGame = false,
    level = 1, // Level of the game 1 to 5
    win = false,
    lose = false,
    shurikenSpeed=5,
    mid=400,
    deviationX = 2,
    deviationY = 2,
    successfulShotsCount = 0, //number of times we hit a ball

    ballsX = [],
    ballsY = [],
    i,
    deviationX = [],
    deviationY = [],
    ballsRadius = []; //Radius of the balls
ballsX[0] = 200,  //starting position of first ball X
    ballsY[0] = 200,  //starting position of first ball Y
    deviationX[0] = 2,
    deviationY[0] = 2,
    ballsRadius[0] = 40,
    successfulShotsCount += 1;
var rightNinja=new Image();
rightNinja.src="./img/ninja-right.png";
var leftNinja=new Image();
leftNinja.src="./img/ninja-left.png";
var ninja=leftNinja;
//var ninja = new Image();
//ninja.src = "./img/ninja-left.png";

var background = new Image();
background.src = "./img/game-background.jpg";

var intro = document.getElementById("media"); //audio tag
var clicksCounter = 0; //this variable is used to diplay/hide popup instructions alert 
var alertPopup = document.getElementById("alert"); //popup instructions alert 

//--------------------------------------------Start of keydown event----------------------------------------------
window.addEventListener("keydown", function (args) {
    //display instructions if key "i" is pressed
    if ( args.keyCode === 32 ) {
        clicksCounter += 1;
        if(clicksCounter === 1) {
            alertPopup.className += alertPopup.className ? "hidden" : "";
        }else if(clicksCounter > 1){
            alertPopup.className = "hidden";
        }     
    }
    console.log(args.which);
}, true);
//--------------------------------------------End of keydown event----------------------------------------------

//--------------------------------------Start of mouseup event-----------------------------------------------
window.addEventListener("mousedown", function() {
    alertPopup.className = "hidden";
    stopIntro(); //calls a fuction to stop the intro music
});   

//----------------------------------------End of mouseup event----------------------------------------------

//--------------------------------------------Start of mouseup event----------------------------------------------
canvas.addEventListener("mouseup", function (args) {
    if(!startGame && !restartGame){
        shooting = true;
    }
    if(startGame){
        startGame = false;
    }
    if(restartGame && level <= 5){
        if(lose){
            lives = lives - 1;
        }
        shurikenY = 550,
        d = 0;
        shooting = false;
        playerX = 200;
        playerY = 550;
        restartGame = false;
        win = false;
        lose = false;
        for(i = 0; i < successfulShotsCount; i += 1){
            ballsX[i] = 0;
            ballsY[i] = 0;
            deviationX[i] = 0;
            deviationY[i] = 0;
            ballsRadius[i] = 0;
        }
        successfulShotsCount=0;
        if(level == 1){
            // ballsX[0] = 200;
            // ballsY[0] = 200;
            // deviationX[0] = 2;
            // deviationY[0] = 2;
            ballsRadius[0] = 40;
            successfulShotsCount += 1;
        }

        if(level == 2 ){
            // ballsX[0] = 200;
            // ballsY[0] = 200;
            // deviationX[0] = 2;
            // deviationY[0] = 2;
            ballsRadius[0] = 80;
            successfulShotsCount += 1;
        }

        if(level == 3){
            // ballsX[0] = 200;
            // ballsY[0] = 200;
            // deviationX[0] = 2;
            // deviationY[0] = 2;
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
            // ballsX[0] = 200;
            // ballsY[0] = 200;
            // deviationX[0] = 2;
            // deviationY[0] = 2;
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
            // ballsX[0] = 200;
            // ballsY[0] = 200;
            // deviationX[0] = 2;
            // deviationY[0] = 2;
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
    if(mouseMovementX>mid) {
      ninja=leftNinja;
    }
    else {
      ninja=rightNinja;
    }


}, false);

//--------------------------------------------End of mousemove event----------------------------------------------

//--------------------------------------------Start of collision function----------------------------------------------





function collision (p1x,p1y,r1,p2x,p2y,r2){
    d = Math.sqrt((p1x - p2x) * (p1x - p2x) + (p1y - p2y) * (p1y - p2y));
    var radi = r1 + r2;


    if(radi > d){
        ballHit.play();
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
          if(ninja==leftNinja) {
            shurikenX = playerX + 14;
          }
          else {
            shurikenX=playerX+40;
          }
        }
        if(shooting){
            shurikenY = shurikenY - shurikenSpeed;
        }
        if(shurikenY - 5 <= 0){
            shooting = false;
            shurikenY = 550;
            if(ninja==leftNinja) {
            shurikenX = playerX + 14;
          }
          else {
            shurikenx=playerX+40;
          }
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
        context.fillStyle = "rgb(0, 0, 0)";
        context.font = "19px Shojumaru-Regular";
        context.fillText("Hit space for instructions", 234, 440);
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
        if(lose){
            context.fillStyle = "rgb(0, 0, 0)";
            context.font = "100px Shojumaru-Regular";
            if (lives > 1 ){
                context.fillText("Lifes left:", 60, 150);
                context.fillText((lives - 1), 350, 250);
            }
            else{
                context.fillText("Game Over" , 60, 150);
                GameOver.play();
            }
        }
    }

    //-------------------------Third if--------------------------When playing the game
    if(!startGame && !restartGame){

        context.fill();
        context.drawImage(background,0,0,800,600);

        for(i = 0; i < successfulShotsCount; i += 1){

            if(collision(shurikenX,shurikenY,5,ballsX[i],ballsY[i],ballsRadius[i]) && shooting && ballsRadius[i] >= 5){

                ballsX[successfulShotsCount] = ballsX[i];
                ballsY[successfulShotsCount] = ballsY[i];
                deviationX[successfulShotsCount] =- deviationX[i];
                deviationY[successfulShotsCount] =- 3;
                deviationY[i] =- 3;
                ballsRadius[successfulShotsCount] = ballsRadius[i]/2;
                ballsRadius[i] = ballsRadius[i] / 2;
                successfulShotsCount += 1;
                shurikenY = 550;
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
                lose = true;
            }
            context.fill();

        }

        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur    = 0;
        context.fillStyle = "#C1D72E";
        context.font = "30px Shojumaru-Regular";
        context.fillText("LEVEL: "+level, 20, 40);
        context.fillStyle = "#C1D72E";
        context.font = "30px Shojumaru-Regular";
        context.fillText("LIVES: " +lives, 630, 40);

        //(canvas, x of center, y of center, radius, number of points, fraction of radius for inset)

        function star(r, p, m)
        {
            context.save();
            context.beginPath();
            context.translate(shurikenX, shurikenY);
            context.moveTo(0,0-r);
            for (var i = 0; i < p; i++)
            {
                context.rotate(Math.PI / p);
                context.lineTo(0, 0 - (r*m));
                context.rotate(Math.PI / p);
                context.lineTo(0, 0 - r);
            }
            context.restore();
        }
        star(10,4,0.5);

        context.fillStyle = "#2E2E1F";
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = "#C1D72E";
        context.stroke();


        context.fill();
        context.drawImage(ninja,playerX,playerY,60,50);


    }

    requestAnimationFrame(draw);
}
//--------------------------------------------End draw function----------------------------------------------

//-------------------------------------------Start of intro music-----------------------------------------------

function stopIntro() {
    intro.pause();
    intro.currentTime = 0;
}

//-------------------------------------------End of intro music-----------------------------------------------
update();
draw();
