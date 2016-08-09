var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");

var myX=200+14, myY=550,mishkaX=0,myX2=400,myY2=400,mishkaY=0,d=0,strelba=false,pX=200,pY=550,lives=3; 

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
window.addEventListener("keydown", function (args) {

    console.log(args.which);
}, false);
window.addEventListener("mouseup", function (args) {
     if(!nachalo && !restart){
      strelba=true;
     }
     if(nachalo){
       nachalo=false;
     }
     if(restart && level<=5){
       if(lose){
         lives=lives-1;
       }
       myX=200+14;
       myY=550;
       d=0;
       strelba=false;
       pX=200;
       pY=550;
       restart=false;
       win=false;
       lose=false;
       for(i=0;i<br;i++){
         topkiX[i]=0;
         topkiY[i]=0;
         otmestvaneX[i]=0;
         otmestvaneY[i]=0;
         topkiR[i]=0;
       }
       br=0;
if(level==1){
topkiX[0]=200;
topkiY[0]=200;
otmestvaneX[0]=2;
otmestvaneY[0]=2;
topkiR[0]=40;
br++;
     }
     if(level==2){
       topkiX[0]=200;
       topkiY[0]=200;
       otmestvaneX[0]=2;
       otmestvaneY[0]=2;
       topkiR[0]=80;
       br++;
     }
     if(level==3){
       topkiX[0]=200;
       topkiY[0]=200;
       otmestvaneX[0]=2;
       otmestvaneY[0]=2;
       topkiR[0]=40;
       br++;
       topkiX[1]=200;
       topkiY[1]=200;
       otmestvaneX[1]=-2;
       otmestvaneY[1]=2;
       topkiR[1]=40;
       br++;
     }
     if(level==4){
       topkiX[0]=200;
       topkiY[0]=200;
       otmestvaneX[0]=2;
       otmestvaneY[0]=2;
       topkiR[0]=80;
       br++;
       topkiX[1]=200;
       topkiY[1]=200;
       otmestvaneX[1]=-2;
       otmestvaneY[1]=2;
       topkiR[1]=80;
       br++;
     }
     if(level==5){
       topkiX[0]=200;
       topkiY[0]=200;
       otmestvaneX[0]=2;
       otmestvaneY[0]=2;
       topkiR[0]=40;
       br++;
       topkiX[1]=200;
       topkiY[1]=200;
       otmestvaneX[1]=-2;
       otmestvaneY[1]=2;
       topkiR[1]=40;
       br++;
       topkiX[2]=200;
       topkiY[2]=200;
       otmestvaneX[2]=2;
       otmestvaneY[2]=2;
       topkiR[2]=40;
       br++;
     }
     }
}, false);
window.addEventListener("mousemove", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;


}, false);
function collision (p1x,p1y,r1,p2x,p2y,r2){
d=Math.sqrt((p1x-p2x)*(p1x-p2x)+(p1y-p2y)*(p1y-p2y));
var radi=r1+r2;
   if(radi>d){
       return true;
   }else{
       return false;
   }

}
function update() {
    if(!nachalo && !restart){
     if(lives==0){
       level=1;
       restart=true;
       lives=3;
     }
     console.log(topkiX[0],topkiY[0],topkiR[0],br);
    restart=true;
    for(i=0;i<br;i++){
      if(topkiR[i]>=5){
        restart=false;
      }
    }
    if(restart){
      win=true;
      level=level+1;
    }
    pX=mishkaX;
    if(pX<1){
        pX=1;
    }
    if(pX>770){
        pX=770;
    }
    if(!strelba){
        myX=pX+14;
      }
    if(strelba){
      myY=myY-5;
    }
    if(myY-5<=0){
      strelba=false;
      myY=550;
      myX=pX+14;
    }
     for(i=0;i<br;i++){

        topkiX[i]=topkiX[i]+otmestvaneX[i];
        topkiY[i]=topkiY[i]+otmestvaneY[i];




    if(topkiX[i]+topkiR[i]>800){
      otmestvaneX[i]=-2;
    }
     if(topkiX[i]-topkiR[i]<=0){
       otmestvaneX[i]=2;
    }
    if(topkiY[i]+topkiR[i]>600){
      otmestvaneY[i]=-5;
    }else{
           otmestvaneY[i]=otmestvaneY[i]+0.04;
    }
     }
    }
    setTimeout(update, 10);
}

//--------------------------------------------Start of draw function----------------------------------------------
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
                            //-------------------------First if--------------------------When we open the game
    if(nachalo){
       context.fillStyle = "rgb(0, 0, 0)"; 
        context.font="30px Shojumaru-Regular";
       context.fillText("Click to continue", 250, 500);
       context.fillStyle = "rgb(213, 91, 11)";
        context.font="100px Shojumaru-Regular";
       context.fillText("BUBBLE", 230, 150);
       context.fillStyle = "rgb(193, 215, 46)";
        context.font="100px Shojumaru-Regular";
       context.fillText("TROUBLE", 200, 250);
    }
                            //-------------------------Second if-------------------------Restart, Win or Loose
    if(restart){
       if(level<=5){
         context.fillStyle = "rgb(0, 0, 0)";
           context.font="30px Shojumaru-Regular";
         context.fillText("Click to continue", 250, 500);
       }
       if(win ){
         context.fillStyle = "rgb(255, 0, 0)";
           context.font="100px Shojumaru-Regular";
         context.fillText("YOU WIN", 230, 100);
       }
       if(lose){
          context.fillStyle = "rgb(255, 0, 0)";
           context.font="100px Shojumaru-Regular";
         context.fillText("YOU LOSE", 170, 150);
       }
    }

                            //-------------------------Third if--------------------------When playing the game
    if(!nachalo && !restart){

        context.fill();
        context.drawImage(background,0,0,800,600);

    for(i=0;i<br;i++){

      if(collision(myX,myY,5,topkiX[i],topkiY[i],topkiR[i]) && strelba && topkiR[i]>=5){

        topkiX[br]=topkiX[i];
        topkiY[br]=topkiY[i];
        otmestvaneX[br]=-otmestvaneX[i];
        otmestvaneY[br]=-3;
        otmestvaneY[i]=-3;
        topkiR[br]=topkiR[i]/2;
        topkiR[i]=topkiR[i]/2;
        br++;
        myY=550;
        strelba=false;
      }


       context.beginPath();
        if(topkiR[i]>=5){
        context.arc(topkiX[i],topkiY[i],topkiR[i],0,2*Math.PI);
        //balls to shoot at border + color
        context.lineWidth = 3;   
        context.strokeStyle = "#C1D72E";  
        context.stroke();  
        }
        if(pX+30>topkiX[i] && pX<topkiX[i]+topkiR[i] && pY+60>topkiY[i] && pY<topkiY[i]+topkiR[i] && topkiR[i]>=5){
          restart=true;
          lose=true;
        }
          context.fill();

    }



        context.fillStyle = "#C1D72E";
        context.font="40px Verdana";
        context.fillText("LEVEL:"+level, 20, 40); // context.fillText("LEVEL:"+level, 100, 50); //shows top left //yasen 01.08
        context.fillStyle = "#C1D72E";
        context.font="40px Verdana";
        context.fillText("LIVES:"+lives, 630, 40); //context.fillText("LIVES:"+lives, 400, 50); //shows top right //yasen 01.08
        
        context.beginPath();  //new line
        context.arc(myX,myY,5,0,2*Math.PI);
        context.fillStyle="#2E2E1F";  //context.fillStyle="red";  //change color of balls //yasen 01.08
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
