var movable1 = document.getElementById('rod1');
var movable2 = document.getElementById('rod2');

var score = document.getElementById('score');
var bscore = document.getElementById('bscore');

var outer = document.getElementById('box');
console.log(outer.getBoundingClientRect());

let moveBy = 20;

let moved=0;



window.addEventListener('load', () => {
    movable1.style.position = 'relative';
    movable1.style.left = 0;
    movable1.style.top = 0;
    movable2.style.position = 'relative';
    movable2.style.left = 0;
    movable2.style.top =0;
})

window.addEventListener('keydown', (e) => {

    if ((e.keyCode === 97 || e.keyCode === 65)&& moved>=-383) {
       
    
        movable1.style.left = parseInt(movable1.style.left) - moveBy + 'px';
        movable2.style.left = parseInt(movable2.style.left) - moveBy + 'px';
        moved-=moveBy;

    }
    else if ((e.keyCode === 100 || e.keyCode === 68)&& moved<=383) {
        movable1.style.left = parseInt(movable1.style.left) + moveBy + 'px';
        movable2.style.left = parseInt(movable2.style.left) + moveBy + 'px';
        moved+=moveBy;
    }


})



var ball = document.getElementById('ball');



window.addEventListener('load', () => {
    ball.style.position='relative';
    ball.style.top=0;
    ball.style.left=0;
})

function gamestart(e){

   
    let x=0;
    let y=0;

    let vx=-6;
    let vy=3;

    var radius=10;
    
    let done=false;

    let check=false;
    if(e.keyCode!=97 && e.keyCode!=65 && e.keyCode!=100 && e.keyCode!=68){
        move();
    }

    let val=0;
    
    function move(){
        requestAnimationFrame(move);
        

        if((moved-75<=x && moved+75>=x) && (y+radius>225 || y-radius<-225))
        {
            vy*=-1;
            if(!check)
            {
                val+=1;
                score.innerText=val;
                if(parseInt(score.innerText)>=parseInt(bscore.innerText)){
                    bscore.innerText=parseInt(score.innerText);
                }
                check=true;
            }
            check=false;
        }

        else if(y+radius>245 || y-radius<-245){

            if(!done)
            {
                done=true;
                alert('game over');
            }

            ball.style.position='relative';
            ball.style.top=0;
            ball.style.left=0;
            return;
        }
        

        else if(x+radius>458 || x-radius<-458)
        {
            vx*=-1;
        }
        
        
        
        x+=vx;
        y+=vy;

        ball.style.left=x+'px';
        ball.style.top=y+'px';

       
    }
}


window.addEventListener('keydown',gamestart);





// if ((movable1.style.left >= 258 && movable1.style.right <= 796)) {
            
//}
/*window.addEventListener('load', () => {
    movable1.style.position = 'relative';
    movable1.style.left = 452;
    movable1.style.top = 101;
    movable2.style.position = 'relative';
    movable2.style.left = 452;
    movable2.style.top = 479.5208435058594;
})*/

