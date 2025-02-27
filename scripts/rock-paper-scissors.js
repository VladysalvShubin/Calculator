let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
}

updateScoreElement();





/*  // since null is a falsu value we can replace score==null with !score
if (!score) {
score = {
  wins:0,
  losses:0,
  ties:0
}
}*/




function pickComputerMove() {
const randomnumber = Math.random();
if (randomnumber >= 0 && randomnumber < 1 / 3) {
ComputerMove = 'rock';
} else if (randomnumber >= 1/3 && randomnumber < 2/3) {
  ComputerMove = 'paper';
} else if (randomnumber >= 2/3 && randomnumber<1){
  ComputerMove = 'scissors';
} 
return ComputerMove;
}

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}



function checkwin(playermove) {
let result = '';
computermove= pickComputerMove();

if (playermove==='rock'){
  if (computermove==='rock'){result='It is a Tie';}
  else if (computermove==='paper'){result='You Lost';}
  else if(computermove==='scissors') {result='You Won';}
} 

else if (playermove==='paper'){
  if (computermove==='rock'){result='You Won';}
  else if (computermove==='paper'){result='It is a Tie';}
  else if(computermove==='scissors') {result='You Lost';}
}

else if (playermove==='scissors'){
  if (computermove==='rock'){result='You Lost';}
  else if (computermove==='paper'){result='You Won';}
  else if(computermove==='scissors') {result='It is a Tie';}
}

if (result==='You Won'){
  score.wins++;
}else if (result==='You Lost'){
  score.losses++;
} else if (result=='It is a Tie'){
  score.ties++;
}


localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML= `You 
<img src="images/${playermove}-emoji.png" class="move-icon"> 
<img src=images/${computermove}-emoji.png class="move-icon"> 
Computer`;



}