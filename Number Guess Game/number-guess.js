const lowOrHi=document.getElementById('lowOrHi')
const form =document.querySelector('form')
const userInput = document.querySelector('#answer');
let totalGuessCount=0;
let correct=Math.floor((Math.random()*100)+1)


let playGame=true;
function validGuess(g){
if(g<1||g>100||isNaN(g))
{
    lowOrHi.innerHTML="Please Enter a valid number"
    return false;
}
else
{
    if(totalGuessCount>10)
        {
            playGame=false;
            return false;
        }
    else
        return true;
}
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(!playGame)
        return;

    let answer=parseInt(userInput.value)
    if(!(validGuess(answer)))
    {
        userInput.value=''
        return;
    }
    totalGuessCount++;
    document.querySelector('#guess-count').innerHTML=totalGuessCount
    document.querySelector('#guess-remaining').innerHTML=10-totalGuessCount
    if(answer==correct)
    {
        lowOrHi.innerHTML="Congratulations! The answer is Correct"
        playGame=false;
        console.log("Congratulations! You Won")
        endGame();
    }
    else if(totalGuessCount>=10)
    {
        lowOrHi.innerHTML=`Game Over! The Random Number was ${correct}`
        playGame=false;
        endGame();
    }
    else if (answer>correct)
    {
        lowOrHi.innerHTML="The Guess is too high"
    }
    else
    {
        lowOrHi.innerHTML="The Guess is too low" 
    }
    userInput.value='';
})

function endGame(){
    playGame=false;
    userInput.disabled=true;
    const p=document.createElement('p')
    p.classList.add('button');
    p.innerHTML=`<button id="newGameBtn" style="background-color: black; color: #fff">Start New Game</button>`
    lowOrHi.appendChild(p);
    document.querySelector('#newGameBtn').addEventListener('click',function(){
        newGame();
    })
}
function newGame(){
    correct=Math.floor((Math.random()*100)+1)
    totalGuessCount=0;
    document.querySelector('#guess-count').innerHTML=totalGuessCount
    document.querySelector('#guess-remaining').innerHTML=10-totalGuessCount
    lowOrHi.innerHTML='';
    userInput.disabled=false;
    playGame=true;

}