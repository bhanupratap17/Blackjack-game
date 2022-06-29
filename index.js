 // let randomNum1 = Math.floor(Math.random()*20);
 //  let randomNum2 = Math.floor(Math.random()*20);

let firstCard = 0
let secondCard = 0;
let cards = [firstCard ,secondCard];
let sum = firstCard +secondCard;
let hasBlackJack = false;
let isAlive = false;
let message =  " ";


let messageEl = document.getElementById("message_el");

let sum_El = document.getElementById("sum_el");

let card_El = document.getElementById("card_el");

let player={
    name: "Bhanupratap",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;


function startGame(){
   firstCard = getRandomNumber();
   secondCard = getRandomNumber();
   cards = [firstCard ,secondCard];
   sum = firstCard +secondCard;
  renderGame();
}


function getRandomNumber(){
let getRandomNumber =  Math.floor( Math.random()*13 )+1;
if(getRandomNumber > 10){
  return 10;
}else if(getRandomNumber === 1){
  return 11;
}else{
  return getRandomNumber;
}
  }


function  renderGame(){
    card_El.textContent = "Cards : ";
  for(var i = 0;i<cards.length;i++){
    card_El.textContent += cards[i]+ " ";
  }
  sum_El.textContent = "Sum : "+sum;
    if (sum <= 20){
         message = "Do you want to draw a new card?";
         isAlive = true;
      }else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
      }
      else{
         message = "You're out of the game!";
         isAlive = false;
}
    messageEl.textContent = message;
}


 function newCard(){
   if(isAlive === true && hasBlackJack === false){
     let card = getRandomNumber();
     sum += card;
     cards.push(getRandomNumber());
    renderGame();
   }
 }
