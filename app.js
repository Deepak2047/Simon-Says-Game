let gameseq=[];
let userseq=[];


let colors=["green","red","orange","blue"];
let started=false;
let level=0;
let highScore=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});

function levelUp() {
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*4);
    let rC = colors[randomIdx];
    let rbtn = document.querySelector(`.${rC}`);
    gameseq.push(rC);
    gamebtn(rbtn);
};

function gamebtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
};

function flashUser(btn) {
  btn.classList.add("Userflash");
  setTimeout(function () {
    btn.classList.remove("Userflash");
  }, 250);
};

function btnPressed() {
    let btn=this;
    flashUser(btn);
  let  userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
};

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPressed);
};

function checkAns(idx) {
    //let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(level>highScore){
            highScore=level;
            let h = document.querySelector("#h");
            h.innerHTML = `Your Highest Score ${highScore}`;
        }
        h3.innerHTML=`Game Over!, Your score was <b>${level}</b><br> Press any key to start the game `;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function () {
             document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
};

function reset() {
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
};

