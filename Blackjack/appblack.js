//Implementar preguntar nombre, y dar uno por defecto -- mirar tamaño y tal
//Adaptar el número de "chips" que se pierden/ganan
//RETO- Añadir jugador dos y preguntar
let askName = window.prompt("What's your name?");
if (askName == null) {
    askName = "Player 1"
}
if (askName.length > 20) {
    alert("Your name was too long. Using default name.");
    askName = "Player"
}
let player = {
    Name: askName,
    Chips: 100,
    playChips: function(){
        Chips = Chips
    }
}
/*let player2 = {
    Name: "Player 2",
    Chips: 100,
    playChips: function(){
        Chips = Chips
    }
}*/
let allCards = []
let handCards = 0
let allCardsDealer = 0
let card1Dealer = 0
let card2Dealer = 0
let card3Dealer = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageWelcome = document.getElementById("message-welcome")
let end = document.getElementById("result")
let sumCards = document.getElementById("sumcards")
let cardValue = document.getElementById("cardvalue")

let player1ID = document.getElementById("player1")
player1ID.textContent = player.Name + ": $" +player.Chips
let player2ID = document.getElementById("player2")
player2ID.textContent = "Dealer cards: " +0

function Stay(){
   // end.textContent = "asdadsads"
    if(card1Dealer<10){
        card2Dealer = getRandomCard()
        card3Dealer = getRandomCard()
            player2ID.textContent = "Dealer cards: "+ card1Dealer+ " " +card2Dealer +" "+card3Dealer
            allCardsDealer = card1Dealer+card2Dealer+card3Dealer
    }
    else{
        card2Dealer = getRandomCard()
        player2ID.textContent = "Dealer cards: "+ card1Dealer+ " " +card2Dealer
        allCardsDealer = card1Dealer+card2Dealer+card3Dealer
    }
    Winner()
    Restart()
    
}
function Winner(){
    /*let valorTotal;

    for(let i;i<allCards.length;i++){
    valorTotal = valorTotal+allCards[i]
    }*/
    
    if (handCards > 21) {
        end.textContent = "You lose!"
    }
    else if (allCardsDealer > 21) {
        player.Chips = player.Chips +20;
        end.textContent = "You won!"
    }
    else if (handCards === allCardsDealer) {
        player.Chips = player.Chips +10;
        end.textContent = "Tie!"
    }
    else if (handCards> allCardsDealer) {
        player.Chips = player.Chips +20;
        end.textContent = "You won!"
    }
    else if (handCards < allCardsDealer) {
        end.textContent = "You lose!"
    }
}
function Restart(){
    allCards = 0
    handCards = 0
    allCardsDealer = 0
    card1Dealer = 0
    card2Dealer = 0
    card3Dealer =0
    hasBlackJack = false
    isAlive = false
    message = ""
}
function getRandomCard() {
    let num = Math.ceil(Math.random() * 13);
    if (num === 1) {
        num = 11;
    }
    else if (num > 10) {
        num = 10
    }
    return num
}


function startGame() {
    end.textContent =""
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    allCards = [firstCard, secondCard]
    handCards = firstCard + secondCard
    card1Dealer = getRandomCard()
    player.Chips = player.Chips -10
    player1ID.textContent = player.Name + ": $" +player.Chips
    player2ID.textContent = "Dealer cards: " +card1Dealer
    play()
}

function play() {
    cardvalue.textContent = "Cards: "
    for (let i = 0; i < allCards.length; i++) {
        cardvalue.textContent += allCards[i] + " "
    }
    sumCards.textContent = "Sum: " + handCards

    if (handCards <= 20) {
        message = "Would you like to draw a new card?"
    } else if (handCards === 21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        message = "More than 21 points, sorry pal"
        isAlive = false
    }
    
    console.log(message);
    messageWelcome.textContent = message;

}
function drawCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        handCards += card
        allCards.push(card)
        play()
    }
}