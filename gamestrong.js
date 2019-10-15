//applying the conditions of the game: How to win? 
//One player against the dealer

/*
How to win against the dealer? -- Winning/Objective  
1) If player one's first two cards summed to 21, he wins
     unless the dealer has a blackjack (This is one condition concatnetaed with &&) 
2) If player one's cards are greater than the dealer's cards and not exceeding 21, then he wins 
3) If If dealer's cards > 21 -- let him draw more cards until he is "busted"
*/

/*
Terminology:
A) A soft hand (one that has an ace of 11 -- knowing that it won't bust)
    otherwise = a hard hand 
B) A "Push": If the player and dealer both have the same total(not counting blackjacks), the player neither loses nor wins 
*/
/*
How to play? -- Procedure/Mechanism 
1)Players ared dealt two cards including the dealer
2)Dealer's cards are one up(exposed) and one down(hidden)
3)The value of cards are their pip values (2 - 10):
    Face cards(Jack, Queen, King) - 10 pts 
    Aces(1 || 10)
Once all the players have completed their hands, it is the dealer’s turn.
The dealer hand will not be completed if all players have either busted or received blackjacks. 
The dealer then reveals the hidden card and must hit until the cards total 17 or more points.
(At most tables the dealer also hits on a "soft" 17, i.e. a hand containing an ace and one or more other cards totaling six.)
*/



// let cards =[
//     {
//         "SPADE": [2, 3, 4, 5, 6, 7, 8, 9, 10, "KING", "QUEEN", "JACK", "ACE"]
//     },
//     {
//         "HEARTS": [2, 3, 4, 5, 6, 7, 8, 9, 10, "KING", "QUEEN", "JACK", "ACE"]
//     },
//     {
//         "CLUB": [2, 3, 4, 5, 6, 7, 8, 9, 10, "KING", "QUEEN", "JACK", "ACE"]
//     },
//     {
//         "DIAMOND": [2, 3, 4, 5, 6, 7, 8, 9, 10, "KING", "QUEEN", "JACK", "ACE"]
//     }
        

// ];


// let player = [
//     {
//         "player_1":[player]
//     },
//     {
//         "player_2":[]
//     }

// ];


// //to buy chips 
// let bank ;



// //1. shuffle
// //2. deal

// let dealersShoe = function(){

// };





// //dealer and player functions 

// let playerHand = function(){

//     let hit = function(){
//     };

//     let stand = function(){
    
//     };

//     let surrender = function(){

//     };

//     let split = function(){

//     };

//     let doubleDown = function(){

//     };

// };





// //to get the values of each key 
// console.log(Object.values(cards[0]));
// //to get access the main keys -- to reach the key only 



var deck = [];
var suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
var values = ["A","2", "3", "4", "5", "6", "7", "8", "9", "K", "Q", "J"];

let getDeck = function(){
    let deck_ = new Array();

    for(var i = 0; i < suits.length; i++){
        for(let j = 0; j < values.length; j++){
            let card = {
                Value: values[j], Suit: suits[i]
            }
            deck_.push(card);
        }
    }
    return deck_;
};

// console.log(getDeck);
let shuffle = function(inputDeck){
    let input = [...inputDeck]
    for(var i = 0; i < 100; i++){
        var place1 = (Math.floor(Math.random() * input.length));
        var place2 = (Math.floor(Math.random() * input.length)); 
        var temp = input[place1];

        input[place1] = input[place2];
        input[place2] = temp;

    }
    return input;
   
};


//console.log(getDeck());
console.log(shuffle(getDeck()));
// shuffle(getDeck)
//var players = [];


let craetePlayers = function(num){
    var playerArr = [];
    var hand = [];
    for(var i = 1; i <= num; i++){
        var player = {
            name: 'Player' + i, ID: i, Hand: hand}
            playerArr.push(player);
    }
    return playerArr;
};

console.log(craetePlayers(3));

