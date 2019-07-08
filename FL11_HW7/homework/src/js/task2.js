// Your code goes here
let dialogMessages={
   'entry_invitation':'Do you want to play a game?', 
   'cancel_game':'You did not become a billionaire, but can.',
   'make_choose_1':'Choose a roulette pocket number from ',
   'make_choose_2':' to ',
   'left_attempts':'Attempts left: ',
   'total_prize':'Total prize: ',
   'possible_prize':'Possible prize on current attempt: ',
   'guess_number_1':'Congratulation, you won!   Your prize is: ',
   'guess_number_2':'. Do you want to continue?',
   'not_guess_number':'Thank you for your participation. Your prize is: ',
   'play_again':'Do you want to play again?'
}
let roulettePocketNumber;
let totalPrize=0;
let firstPrize=100;
let prizes=new Array();
const countOfAttempts=3;
let leftAttempts;
let minRange=0;
const baseMaxRange=8;
let maxRange=baseMaxRange;
let continueGame=true;
let playerNumber;
let cr='\n';
let currency='$';
let showInfo;
const baseWinRatio=1;
let winRatio=baseWinRatio;
const halfDiv=2;
const rangeStep=4;
let playerWinRound=false;
//Play game
let start=confirm(dialogMessages['entry_invitation']);
if (!start){
    alert(dialogMessages['cancel_game']);
} else{
    while (continueGame){
        //Initialize prizes array using winner ratio (x2 increase after each winning)  
        prizes[0]=firstPrize*winRatio;
        for (let i=1;i<countOfAttempts;i++){
            prizes[i]=prizes[i-1]/halfDiv;
        }
        //'Round' roulette  
        roulettePocketNumber=Math.floor(minRange + Math.random() * (maxRange + 1 - minRange));
        //User get's 3 attempts to guess number
        for (let i=0;i<countOfAttempts;i++){       
            leftAttempts=countOfAttempts-i;
            showInfo='';
            showInfo+=dialogMessages['make_choose_1']+minRange+dialogMessages['make_choose_2']+maxRange+cr;
            showInfo+=dialogMessages['left_attempts']+leftAttempts+cr+dialogMessages['total_prize']+totalPrize+currency;
            showInfo+=cr+dialogMessages['possible_prize']+prizes[i]+currency;
            playerNumber=+prompt(showInfo);
        //If user are guessing
            if(playerNumber===roulettePocketNumber){
               totalPrize+=prizes[i];
               playerWinRound=true;
               continueGame=confirm(dialogMessages['guess_number_1']+prizes[i]+dialogMessages['guess_number_2']);
               break;
            }
        }
        //If user are not guessing at 3 attempts
        if (!playerWinRound) {
            alert(dialogMessages['not_guess_number']+totalPrize+currency);
            continueGame=confirm(dialogMessages['play_again']);    
        }
        if (continueGame){
                  if (playerWinRound) {
                      winRatio+=winRatio;
                      maxRange+=rangeStep;
                      playerWinRound=false;
                    }else {
                        winRatio=baseWinRatio;
                        maxRange=baseMaxRange;
                        totalPrize-=totalPrize;
                    }
        }else {
                continueGame=false;
            }
    }
}