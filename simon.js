let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let started = false;
let lost =false;
let gameSeq=[];
let userSeq=[];
let g=0,u=0,hs = 0;
body.addEventListener("keydown",function(){
    if(started == false){
        started = true;
        gameSeq=[];
        userSeq=[];
        g=0,u=0;
        lost = false;
        generator();
    }
});
function blink(id){
    let box = document.querySelector(id);
    let bgc = box.style.backgroundColor;
    box.style.backgroundColor = "white";
    setTimeout(function(){
        box.style.backgroundColor= bgc;
    },250);
    userSeq=[];
    u=0;
}
b1.addEventListener("click",function(){
    if(started==true){
        userSeq[u]=1;
    u++;
        
        if(userSeq[u-1]!=gameSeq[u-1]){
            h3.innerText=`Score: ${g-1} \nPress Any Key To Restart`;
            started = false;
            hscore();
            body.style.backgroundColor = "red";
            setTimeout(function(){
                body.style.backgroundColor= "#fdf0d5";
            },250);
            lost=true;
        }
 
    if(lost!=true && u==g){
        generator();
    }
    }
});

b2.addEventListener("click",function(){
    if(started==true){
        userSeq[u]=2;
    u++;
        
        if(userSeq[u-1]!=gameSeq[u-1]){
            h3.innerText=`Score: ${g-1} \nPress Any Key To Restart`;
            started = false;
            hscore();
            body.style.backgroundColor = "red";
            setTimeout(function(){
                body.style.backgroundColor= "#fdf0d5";
            },250);
            lost=true;
        }
  
    if(lost!=true && u==g){
        generator();
    }
    }
});

b3.addEventListener("click",function(){
    if(started==true){
        userSeq[u]=3;
    u++;
        
        if(userSeq[u-1]!=gameSeq[u-1]){
            h3.innerText=`Score: ${g-1} \nPress Any Key To Restart`;
            started = false;
            hscore();
            body.style.backgroundColor = "red";
            setTimeout(function(){
                body.style.backgroundColor= "#fdf0d5";
            },250);
            lost=true;
        }

    if(lost!=true && u==g){
        generator();
    }
    }
});

b4.addEventListener("click",function(){
    if(started==true){
        userSeq[u]=4;
    u++;       
        if(userSeq[u-1]!=gameSeq[u-1]){
            h3.innerText=`Score: ${g-1} \nPress Any Key To Restart`;
            started = false;
            hscore();
            body.style.backgroundColor = "red";
            setTimeout(function(){
                body.style.backgroundColor= "#fdf0d5";
            },250);
            lost=true;
        }
    if(lost!=true && u==g){
        generator();
    }
    }
});

function generator(){
    h3.innerText=`Level ${g+1}`;
    gameSeq[g] = Math.floor((Math.random()*4) + 1);
    g++;
    for(let i=0;i<gameSeq.length;i++){
        let id = "#b"+gameSeq[i];
        setTimeout(function(){
            blink(id);
        },(300*(i+1)));
    }
    
}
function hscore(){
    if((g-1)>hs){
        hs=g-1;
        h4.innerText="Highest Score: "+hs;
    }
}