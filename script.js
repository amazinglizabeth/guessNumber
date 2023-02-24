'use strict';
/*
//DOM SELECTOR AND MANIPULATION
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = 'correct Number!'); 

console.log(document.querySelector('.number').textContent = 15);
console.log(document.querySelector('.score').textContent = 10); 

(document.querySelector('.guess').value = 20);
console.log(document.querySelector('.guess').value); 
*/

//EVENT LISTENER
let number = Math.trunc(Math.random()*20) +1;
let score = 20
let highScore = 0
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess);

    //when there is no imput
    if(!guess){
         displayMessage('No number!');

     //when guess is correct
    }else if(guess==number){
         if (score > 1){
              displayMessage('Correct number!');
              document.querySelector('.number').textContent = number;
              highScore++;
             document.querySelector('.highscore').textContent = highScore ;
          //manipulating css
             document.querySelector('body').style.backgroundColor = '#60b347';
             document.querySelector('.number').style.width = '30rem';
             document.querySelector('.check').disabled = true;
           };
//when guess is wrong
    }else if (guess !== number){
        if (score > 1){
             document.querySelector('.message').textContent = guess > number ?'Too high!'
             : 'Too low!'
             score--;
             document.querySelector('.score').textContent = score;
            }else{
             displayMessage('You lost the game!');
             document.querySelector('.score').textContent = 0;
            };
    }
  });
/*
     //when guess is greater than the answer
    }else if(guess > number){
     if (score > 1){
     document.querySelector('.message').textContent = 'Too high!';
     score--;
     document.querySelector('.score').textContent = score;
    }else{
     document.querySelector('.message').textContent = 'You lost the game!';
     document.querySelector('.score').textContent = 0;
    }

    //when guess is lesser than the answer
    }else if(guess < number){
        if(score >1){
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    */


document.querySelector('.again').addEventListener('click',function(){
     if (score >1){
        document.querySelector('.check').disabled = false;
         number = Math.trunc(Math.random()*20) +1; 

         document.querySelector('body').style.backgroundColor = 'rgb(81, 131, 154)';
         document.querySelector('.guess').value = '';
         displayMessage('Start guessing...');
         document.querySelector('.number').textContent = '?';
         document.querySelector('.number').style.width = '15rem';
    } else{
         displayMessage('RELOAD THE PAGE!');
         document.querySelector('body').style.backgroundColor = 'red';
    };
});