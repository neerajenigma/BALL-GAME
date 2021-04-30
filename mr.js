flag=1;
score1=0;
start=1;
lvll=1;
c=0;
x=1;
y=1;
t=11;
z=1;
d=0;
speed=5;
board=559;
p=document.getElementById('moving_area');
document.addEventListener("keydown",function(fg){
    if(start==1){move();start=0;}
    if(z==1){
    if(fg.keyCode==37){if(board>=10){board=board-10;document.getElementById("board").style.left=board;}}
    if(fg.keyCode==39){if(board<=590){board=board+10;document.getElementById("board").style.left=board;}}
}});

function move(){
    if(t==11){t=t-1;d=setInterval(move,speed);}

    if(x==690){if(flag==1){flag=3;}else{flag=4;}}
    else if(x==0){if(flag==3){flag=1;}else{flag=2;}}
    if(y==440){if(x+50>=board && x+10<=board+150){
        c=c+1;
        score1=score1+lvll;
        if(c==10){
            c=0;
            lvll=lvll+1;
            document.getElementById("lvl").innerText=`LEVEL: ${lvll}`;
            clearInterval(d);
            d=setInterval(move,speed-(.1*speed))
        }
        document.getElementById("sc").innerText=`SCORE: ${score1}`;
        if(flag==1){flag=2;}else{flag=4;}}}


    if(y==445){z=0;}
    if(y==552){
        clearInterval(d);
        alert(`GAME OVER YOUR SCORE:${score1}`);
        start=1;
        score1=0;
        flag=1;
        speed=5;
        lvll=1;
        c=0;
        t=11;
        x=1;
        y=1;
        document.getElementById("sc").innerText=`SCORE: ${score1}`;
        document.getElementById("lvl").innerText=`LEVEL: ${lvll}`;
        z=1;
    }
    else if(y==0){if(flag==2){flag=1;}else{flag=3;}}

    if(flag==1){x+=1;y+=1;}
    else if(flag==2){x+=1;y-=1;}
    else if(flag==3){x-=1;y+=1;}
    else if(flag==4){x-=1;y-=1;}
    p.style.top=`${y}px`;
    p.style.left=`${x}px`;
}

