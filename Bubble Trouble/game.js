var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
    canvas.width = 800;
    canvas.height = 600;
var context = canvas.getContext("2d");

var myX = 200 + 14, 
    myY = 550,
    mouseMovementX = 0,
    myX2 = 400,
    myY2 = 400,
    mouseMovementY = 0,
    d = 0,
    shooting = false, //becames true when startGame or restartGame
    pX = 200,
    pY = 550,
    lives = 3; //number of starting lves

<<<<<<< HEAD
var nachalo=true,restart=false,level=1,win=false,lose=false;
var ninja=new Image(); 
ninja.src="./img/ninja-left.png";

var background = new Image(); 
background.src="./img/game-background.jpg";

var otmestvaneX=2,otmestvaneY=2,br=0;
var topkiX=[],topkiY=[],i,otmestvaneX=[],otmestvaneY=[],topkiR=[];
topkiX[0]=200;
topkiY[0]=200;
otmestvaneX[0]=2;
otmestvaneY[0]=2;
topkiR[0]=40;
br++;
=======
var startGame = true,
    restartGame = false,
    level = 1, // Level of the game 1 to 5
    win = false,
    loose = false;

var ninja = new Image();
    ninja.src = "ninja-left.png";

var background = new Image(); 
    background.src = "game-background.jpg";


var otmestvaneX = 2,
    otmestvaneY = 2,
    successfulShotsCount = 0; //number of times we hit a ball

var ballsX = [],
    ballsY = [],
    i,
    otmestvaneX = [],
    otmestvaneY = [],
    ballsRadius = []; //Radius of the balls
    ballsX[0] = 200;  //starting position of first ball X
    ballsY[0] = 200;  //starting position of first ball Y
    otmestvaneX[0] = 2;
    otmestvaneY[0] = 2;
    ballsRadius[0] = 40;
    successfulShotsCount += 1;

//--------------------------------------------Start of keydown event----------------------------------------------
>>>>>>> origin/master
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
       myX = 200 + 14;
       myY = 550;
       d = 0;
       shooting = false;
       pX = 200;
       pY = 550;
       restartGame = false;
       win = false;
       loose = false;
       for(i = 0; i < successfulShotsCount; i += 1){
         ballsX[i] = 0;
         ballsY[i] = 0;
         otmestvaneX[i] = 0;
         otmestvaneY[i] = 0;
         ballsRadius[i] = 0;
       }
       successfulShotsCount=0;
        if(level == 1){
        ballsX[0] = 200;
        ballsY[0] = 200;
        otmestvaneX[0] = 2;
        otmestvaneY[0] = 2;
        ballsRadius[0] = 40;
        successfulShotsCount += 1;
            }

     if(level == 2 ){
       ballsX[0] = 200;
       ballsY[0] = 200;
       otmestvaneX[0] = 2;
       otmestvaneY[0] = 2;
       ballsRadius[0] = 80;
       successfulShotsCount += 1;
     }

     if(level == 3){
       ballsX[0] = 200;
       ballsY[0] = 200;
       otmestvaneX[0] = 2;
       otmestvaneY[0] = 2;
       ballsRadius[0] = 40;
       successfulShotsCount += 1;
       ballsX[1] = 200;
       ballsY[1] = 200;
       otmestvaneX[1] =- 2;
       otmestvaneY[1] = 2;
       ballsRadius[1] = 40;
       successfulShotsCount += 1;
     }

     if(level == 4){
       ballsX[0] = 200;
       ballsY[0] = 200;
       otmestvaneX[0] = 2;
       otmestvaneY[0] = 2;
       ballsRadius[0] = 80;
       successfulShotsCount += 1;
       ballsX[1] = 200;
       ballsY[1] = 200;
       otmestvaneX[1] = -2;
       otmestvaneY[1] = 2;
       ballsRadius[1] = 80;
       successfulShotsCount += 1;
     }

     if(level == 5){
       ballsX[0] = 200;
       ballsY[0] = 200;
       otmestvaneX[0] = 2;
       otmestvaneY[0] = 2;
       ballsRadius[0] = 40;
       successfulShotsCount += 1;
       ballsX[1] = 200;
       ballsY[1] = 200;
       otmestvaneX[1] = -2;
       otmestvaneY[1] = 2;
       ballsRadius[1] = 40;
       successfulShotsCount += 1;
       ballsX[2] = 200;
       ballsY[2] = 200;
       otmestvaneX[2] = 2;
       otmestvaneY[2] = 2;
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
       crash.play();
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
    pX = mouseMovementX;
    if(pX < 1){
        pX = 1;
    }
    if(pX > 750){
        pX = 750;
    }
    if(!shooting){
        myX = pX + 14;
      }
    if(shooting){
      myY = myY - 5;
    }
    if(myY - 5 <= 0){
      shooting = false;
      myY = 550;
      myX = pX + 14;
    }
     for(i = 0; i < successfulShotsCount; i += 1){

        ballsX[i] = ballsX[i] + otmestvaneX[i];
        ballsY[i] = ballsY[i] + otmestvaneY[i];




    if(ballsX[i] + ballsRadius[i] > 800){
      otmestvaneX[i] = -2;
    }
     if(ballsX[i] - ballsRadius[i] <= 0){
       otmestvaneX[i] = 2;
    }
    if(ballsY[i] + ballsRadius[i] > 600){
      otmestvaneY[i] = -5;
    }else{
      otmestvaneY[i] = otmestvaneY[i] + 0.04;
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
<<<<<<< HEAD
        context.font="30px Shojumaru-Regular";
       context.fillText("Click to continue", 250, 500);
       context.fillStyle = "rgb(213, 91, 11)";
        context.font="100px Shojumaru-Regular";
       context.fillText("BUBBLE", 230, 150);
       context.fillStyle = "rgb(193, 215, 46)";
        context.font="100px Shojumaru-Regular";
       context.fillText("TROUBLE", 200, 250);
=======
    context.font = "30px Shojumaru-Regular";
       context.fillText("Click to continue", 250, 500);
       context.fillStyle = "rgb(255, 0, 0)";
        context.font = "100px Shojumaru-Regular";
       context.fillText("BUBBLE", 230, 100);
       context.fillStyle = "rgb(0, 19, 248)";
        context.font = "100px Shojumaru-Regular";
       context.fillText("TROUBLE", 200, 200);
>>>>>>> origin/master
    }
                            //-------------------------Second if-------------------------Restart, Win or Loose
    if(restartGame){
       if(level <= 5){
         context.fillStyle = "rgb(0, 0, 0)";
<<<<<<< HEAD
           context.font="30px Shojumaru-Regular";
=======
         context.font = "30px Verdana";
>>>>>>> origin/master
         context.fillText("Click to continue", 250, 500);
       }
       if(win){
         context.fillStyle = "rgb(255, 0, 0)";
<<<<<<< HEAD
           context.font="100px Shojumaru-Regular";
         context.fillText("YOU WIN", 230, 100);
       }
       if(lose){
          context.fillStyle = "rgb(255, 0, 0)";
           context.font="100px Shojumaru-Regular";
         context.fillText("YOU LOSE", 170, 150);
=======
         context.font = "100px Verdana";
         context.fillText("You Win", 150, 100);
       }
       if(loose){
          context.fillStyle = "rgb(0, 0, 0)";
         context.font = "100px Verdana";
         context.fillText("You Loose", 150, 100);
>>>>>>> origin/master
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
        otmestvaneX[successfulShotsCount] =- otmestvaneX[i];
        otmestvaneY[successfulShotsCount] =- 3;
        otmestvaneY[i] =- 3;
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
        if(pX + 30 > ballsX[i] && pX < ballsX[i] + ballsRadius[i] && pY + 60>ballsY[i] && pY < ballsY[i] + ballsRadius[i] && ballsRadius[i] >= 5){
          restartGame = true;
          loose = true;
        }
          context.fill();

    }



        context.fillStyle = "#C1D72E";
        context.font = "40px Verdana";
        context.fillText("LEVEL:"+level, 20, 40); // context.fillText("LEVEL:"+level, 100, 50); //shows top left //yasen 01.08
        context.fillStyle = "#C1D72E";
        context.font = "40px Verdana";
        context.fillText("LIVES:" +lives, 630, 40); //context.fillText("LIVES:"+lives, 400, 50); //shows top right //yasen 01.08
        
        context.beginPath();  //new line
        context.arc(myX,myY,5,0,2*Math.PI);
        context.fillStyle = "#2E2E1F";  //context.fillStyle="red";  //change color of balls //yasen 01.08
        context.fill();
        context.lineWidth = 7;   //new line  //yasen 01.08
        context.strokeStyle = "#C1D72E";  //green border for bigger shooting ball //yasen 01.08
        context.stroke();  //new line //yasen 01.08
        
       

        context.fill();
        context.drawImage(ninja,pX,pY,60,50); 

         
    }

    requestAnimationFrame(draw);
}
//--------------------------------------------End draw function----------------------------------------------


update();
draw();
