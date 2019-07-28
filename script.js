// variables 

const kittyUrl = './kitty.png';
const puppyUrl = './puppy.png';
const squrrelUrl = './squrrel.png';
const chameleoUrl = './chameleo.png';
const birdUrl = './bird.png';
const pigletUrl = './piglet.png';
const butterflyUrl = './butterfly.png';
const fishUrl = './fish.png';


const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');
const card7 = document.getElementById('card7');
const card8 = document.getElementById('card8');
const card9 = document.getElementById('card9');
const card10 = document.getElementById('card10');
const card11 = document.getElementById('card11');
const card12 = document.getElementById('card12');
const card13 = document.getElementById('card13');
const card14 = document.getElementById('card14');
const card15 = document.getElementById('card15');
const card16 = document.getElementById('card16');

let firstCard;
let secondCard;
let pair = 0;
let startTime;
let endTime;
let globalTime = [];
let interval;

// functions

function dealCards() {
    const cardsPool = [kittyUrl, kittyUrl, puppyUrl, puppyUrl, squrrelUrl, squrrelUrl, chameleoUrl, chameleoUrl, birdUrl, birdUrl, pigletUrl, pigletUrl, butterflyUrl, butterflyUrl, fishUrl, fishUrl];

    for (i = 1; i < 17; i++) {
        let cardIndex = Math.floor(Math.random() * cardsPool.length);
        let cardId = 'card' + i;
        document.getElementById(cardId).src = cardsPool.splice(cardIndex, 1);
    }
}

function timer() {
    interval = setInterval(function(){
        let seconds = Math.floor((Date.now() - startTime)/1000);
        document.getElementById('timer').innerHTML = seconds;
    }, 1000);
}

function cardChecker(cardOne, cardTwo) {
    if (cardOne.src !== cardTwo.src) {
        setTimeout(function(){ cardOne.style.visibility = 'hidden';
        cardTwo.style.visibility = 'hidden'; }, 1000);
        firstCard = undefined;
        secondCard = undefined;

    } else if (cardOne.src === cardTwo.src) {
        cardOne.style.visibility = 'visible';
        cardTwo.style.visibility = 'visible';
        firstCard = undefined;
        secondCard = undefined;
        pair ++;
        if (pair === 8) {
            gameOver();
        }
    }
}

function isOpen(item) {
    if (item.style.visibility === 'visible') {
        return true;
    } else {
        return false;
    }
}

function gameOver() {
    endTime = Date.now();
    let gameTime = Math.floor((endTime - startTime)/1000);
    globalTime.push(gameTime);
    globalTime.sort((a,b) => a-b);
    let averageTime = Math.floor((globalTime.reduce((a,b) => a+b))/globalTime.length);
    let bestTime = globalTime[0];
    document.getElementById('heading').innerHTML = 'Good Game!';
    document.getElementById('again').innerHTML = 'Play Again?';
    document.getElementById('start').innerHTML = 'START';
    document.getElementById('timer').innerHTML = gameTime;
    document.getElementById('best').innerHTML = `${bestTime} sec`;
    document.getElementById('average').innerHTML = `${averageTime} sec`;
    clearInterval(interval);
}

function gameRound() {
    pair = 0;
    document.getElementById('timer').innerHTML = '0';
    document.getElementById('heading').innerHTML = 'Memory Game!';
    document.getElementById('again').innerHTML = 'How fast can you find all the pairs?';
    document.getElementById('start').innerHTML = 'RESET';
    for (i = 1; i < 17; i++) {
        let cardId = 'card' + i;
        document.getElementById(cardId).style.visibility = 'hidden';
    }
    dealCards();
    startTime = Date.now();
    timer();
}


// click handlers

document.getElementById('start').onclick = function () {
    gameRound();
    document.getElementById('score-card').style.display = 'block';
}


document.getElementById('card-back1').onclick = function () {
    if (isOpen(card1) === false) {
        card1.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card1;
        } else if (secondCard === undefined) {
            secondCard = card1;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
}
document.getElementById('card-back2').onclick = function () {
    if (isOpen(card2) === false) {
        card2.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card2;
        } else if (secondCard === undefined) {
            secondCard = card2;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
}
document.getElementById('card-back3').onclick = function () {
    if (isOpen(card3) === false) {
        card3.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card3;
        } else if (secondCard === undefined) {
            secondCard = card3;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
}
document.getElementById('card-back4').onclick = function () {
    if (isOpen(card4) === false) {
        card4.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card4;
        } else if (secondCard === undefined) {
            secondCard = card4;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
}
document.getElementById('card-back5').onclick = function () {
    if (isOpen(card5) === false) {
        card5.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card5;
        } else if (secondCard === undefined) {
            secondCard = card5;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
}
document.getElementById('card-back6').onclick = function () {
    if (isOpen(card6) === false) {
        card6.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card6;
        } else if (secondCard === undefined) {
            secondCard = card6;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
}
document.getElementById('card-back7').onclick = function () {
    if (isOpen(card7) === false) {
        card7.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card7;
        } else if (secondCard === undefined) {
            secondCard = card7;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
}
document.getElementById('card-back8').onclick = function () {
    if (isOpen(card8) === false) {
        card8.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card8;
        } else if (secondCard === undefined) {
            secondCard = card8;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
}
document.getElementById('card-back9').onclick = function () {
    if (isOpen(card9) === false) {
        card9.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card9;
        } else if (secondCard === undefined) {
            secondCard = card9;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
}
document.getElementById('card-back10').onclick = function () {
    if (isOpen(card10) === false) {
        card10.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card10;
        } else if (secondCard === undefined) {
            secondCard = card10;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
} 
document.getElementById('card-back11').onclick = function () {
    if (isOpen(card11) === false) {
        card11.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card11;
        } else if (secondCard === undefined) {
            secondCard = card11;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
} 
document.getElementById('card-back12').onclick = function () {
    if (isOpen(card12) === false) {
        card12.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card12;
        } else if (secondCard === undefined) {
            secondCard = card12;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
} 
document.getElementById('card-back13').onclick = function () {
    if (isOpen(card13) === false) {
        card13.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card13;
        } else if (secondCard === undefined) {
            secondCard = card13;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
} 
document.getElementById('card-back14').onclick = function () {
    if (isOpen(card14) === false) {
        card14.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card14;
        } else if (secondCard === undefined) {
            secondCard = card14;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
} 
document.getElementById('card-back15').onclick = function () {
    if (isOpen(card15) === false) {
        card15.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card15;
        } else if (secondCard === undefined) {
            secondCard = card15;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
} 
document.getElementById('card-back16').onclick = function () {
    if (isOpen(card16) === false) {
        card16.style.visibility = 'visible';
        if (firstCard === undefined) {
            firstCard = card16;
        } else if (secondCard === undefined) {
            secondCard = card16;
        }
        if (firstCard !== undefined && secondCard !== undefined) {
            cardChecker(firstCard, secondCard);
        }
    }
} 
