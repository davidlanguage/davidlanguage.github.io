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
let changeplayer = true;
let allCards = []
let handCards = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageWelcome = document.getElementById("message-welcome")
let sumCards = document.getElementById("sumcards")
let cardValue = document.getElementById("cardvalue")

let player1ID = document.getElementById("player1")
player1ID.textContent = player.Name + ": $" +player.Chips
let player2ID = document.getElementById("player2")
player2ID.textContent = player2.Name + ": $" +player2.Chips

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
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    allCards = [firstCard, secondCard]
    handCards = firstCard + secondCard
    player.Chips = player.Chips -10
    player1ID.textContent = player.Name + ": $" +player.Chips
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
        player.Chips = player.Chips +50
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