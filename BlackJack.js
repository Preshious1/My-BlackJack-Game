let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");

let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + "$" + player.chips

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}


function renderGame() {
    cardsEl.textContent = "Cards: "

    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?🤔";
    } else if (sum === 21) {
        message = "Whoo! You've got Blackjack!🫡";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!🤭";
        isAlive = false
    }
    messageEl.textContent = message; 
    
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === false && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card 
        cards.push(card)
        renderGame()
    }
}





















// if (sum <= 20) {
//     console.log("Do you want to draw another card?🤔");
// } else if (sum === 21) {
//     console.log("Whoo! You've got Blackjack!🫡");
//     hasBlackJack = true;
// } else {
//     console.log("You're out of the game!🤭");
//     isAlive = false
// }

// console.log(hasBlackJack)
// console.log(isAlive)









// let age = 21;

// if (age <= 20) {
//     console.log("Sorry, you cannot enter")
// } else {
//     console.log("Welcome!")
// }

// let yourAge = 120;
// if (yourAge < 100) {
//     console.log("Not eligible")
// } else if (yourAge === 100) {
//     console.log("Here is your birthday present from the king")
// } else {
//     console.log("Not eligible. You have gotten one already")
// }



// let featuredPosts = [
//     "My work experience",
//     "My education history",
//     "My licenses",
//     "My skills"
// ]
// console.log(featuredPosts[3]);
// console.log(featuredPosts.length);


// let mySelf = [
//     myName = "Chibueze",
//     age = 29,
//     like = "I love myself",
//     male = true
// ]
// console.log(mySelf[3]);
// console.log(mySelf[3]);

// let per = [ "Precious", 29, true ]
 

// let cards = [7, 10]
// cards.push(12);
// cards.pop(0);
// console.log(cards);

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// let newMessage = "Same here"
// messages.push(newMessage);
// messages.pop(newMessage)
// console.log(messages);

//        START         FINISH     STEP SIZE   
// for (let count = 3; count < 11; count += 2) {
//     console.log(count)
// }

// for (let favNumbers = 1; favNumbers < 20; favNumbers += 2) {
//     console.log(favNumbers);
// } 

// for (let steps = 10; steps < 101; steps += 10) {
//     console.log(steps)
// }


// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here",
//     "Great to hear",
//     "🥱"
// ]
// for( i = 0; i < messages.length; i += 1) {
// //for(let i = 0; i < 5; i += 1) {
//     console.log(messages[i]);
// }

// let cards = [7, 3, 9];
// for(let i = 0; i < cards.length; i ++ ) {
//     console.log(cards[i]);
// }

// let sentence = ["Hello,", "my", "name", "is", "Pete"]
// let greetingEl = document.getElementById("greeting-el")

// for(i = 0; i < sentence.length; i++) {
//     greetingEl.innerText += sentence[i] + " ";
// }


// if (sum <= 20) {
//     console.log("Do you want to draw another card?🤔");
// } else if (sum === 21) {
//     console.log("Whoo! You've got Blackjack!🫡");
//     hasBlackJack = true;
// } else {
//     console.log("You're out of the game!🤭");
//     isAlive = false
// }

// console.log(hasBlackJack)
// console.log(isAlive)









// let age = 21;

// if (age <= 20) {
//     console.log("Sorry, you cannot enter")
// } else {
//     console.log("Welcome!")
// }

// let yourAge = 120;
// if (yourAge < 100) {
//     console.log("Not eligible")
// } else if (yourAge === 100) {
//     console.log("Here is your birthday present from the king")
// } else {
//     console.log("Not eligible. You have gotten one already")
// }



// let featuredPosts = [
//     "My work experience",
//     "My education history",
//     "My licenses",
//     "My skills"
// ]
// console.log(featuredPosts[3]);
// console.log(featuredPosts.length);


// let mySelf = [
//     myName = "Chibueze",
//     age = 29,
//     like = "I love myself",
//     male = true
// ]
// console.log(mySelf[3]);
// console.log(mySelf[3]);

// let per = [ "Precious", 29, true ]
 

// let cards = [7, 10]
// cards.push(12);
// cards.pop(0);
// console.log(cards);

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// let newMessage = "Same here"
// messages.push(newMessage);
// messages.pop(newMessage)
// console.log(messages);

//        START         FINISH     STEP SIZE   
// for (let count = 3; count < 11; count += 2) {
//     console.log(count)
// }

// for (let favNumbers = 1; favNumbers < 20; favNumbers += 2) {
//     console.log(favNumbers);
// } 

// for (let steps = 10; steps < 101; steps += 10) {
//     console.log(steps)
// }


// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here",
//     "Great to hear",
//     "🥱"
// ]
// for( i = 0; i < messages.length; i += 1) {
// //for(let i = 0; i < 5; i += 1) {
//     console.log(messages[i]);
// }

// let cards = [7, 3, 9];
// for(let i = 0; i < cards.length; i ++ ) {
//     console.log(cards[i]);
// }

// let sentence = ["Hello,", "my", "name", "is", "Pete"]
// let greetingEl = document.getElementById("greeting-el")

// for(i = 0; i < sentence.length; i++) {
//     greetingEl.innerText += sentence[i] + " ";
// }

// let player1Time = 200;
// let player2Time = 150;

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//     return player1Time
// } else if (player2Time > player1Time) {
//     return player2Time
// } else {
//     return player1Time
// }
// }
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace);

// let fortuneAge = 28;
// let valAge = 30
// function getOldestMan() {
//     if (fortuneAge > valAge) {
//         return fortuneAge
//     } else if (valAge > fortuneAge) {
//         return valAge
//     } else {
//         return fortuneAge
//     }
// }
// let oldestMan = getOldestMan();
// console.log(oldestMan)

// let flooredNumber = Math.floor(12.4657)
// console.log(flooredNumber)


// let randomNumber = Math.floor(Math.random()  * 6)
// console.log(randomNumber)

//To get numbers from 1 to 6
// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1 
//     return randomNumber
// }
// console.log(rollDice());

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//         return generateCertificate()
//     }

// function generateCertificate() {
//     console.log("Generating certificate...")
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if (hasSolvedChallenge === false || hasHintsLeft === false) {
//     return showSolution();
//  }
// function showSolution() {
//     console.log("Showing the solution....")
// }


// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
// let likesDocumentaries = true;
// let likesStartups = false;

// if (likesDocumentaries === true || likesStartups === true) {
//     return recommendMovie();
// }
// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }


// let course = {
//     title: "Learn CSS grid for free",
//     level: 2,
//     length: 63,
//     creator: "Per Herald Bolgen",
//     lessons: 16,
//     isFree: true,
//     tags: ["html", "css"]
// }

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

// let airbnb = {
//     rooms: 4,
//     isNeat: true,
//     address: "Abia state",
//     electronics: ["Television", "Dstv", "Fridge","Ps5"]
// }
// console.log(airbnb.isNeat);
// console.log(airbnb.rooms);
// console.log(airbnb.address);
// console.log(airbnb["electronics"]);


// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works
// let ourPerson = ""
// let person = {
//     name: "Fortune",
//     age: 28,
//     country: "Nigeria"
// }
// function logData() {
//     console.log(person.name + " " + "is " + person.age + " years " + "and lives in " + person.country)
// }
// logData();




// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable



// let age = 45

// if (age < 6) {
//     console.log("free");
// } else if (age >= 6 && age <= 17 ) {
//     console.log("child discount");
// } else if (age >= 18 && age <= 26) {
//     console.log("student discount");
// } else if (age >= 27 && age <= 66) {
//     console.log("full price");
// } else {
//     console.log("seniro citizen discount");
// }

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// /* Use a for loop to log the following to the console:

// The 5 largest countries in the world:
// - China
// - India
// - United States
// - Indinesia
// - Pakistan
// */
// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log(" - " + largeCountries[i])
// }


// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// // You need to help me fixup the largeCountries array so that 
// // China and Pakistan are added back into their respective places

// // Use push() & pop() and their counterparts unshift() & shift()
// // Google how to use unshift() and shift()
// largeCountries.shift()
// largeCountries.pop()
// largeCountries.unshift("China")
// largeCountries.push("Pakistan")

//console.log(largeCountries)




// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// }
    

// let hands = ["rock", "paper", "scissor"]

// // Create a function that returns a random item from the array
//  function myRandomItem() {
//     let randomItem = Math.floor(Math.random() * 3)
//     return hands[randomItem]
//  }
// console.log(myRandomItem());

// let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

// let stageEl = document.getElementById("stage")
// let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function() {
//     // Challenge:
//     // When the user clicks on the "Pick Fighters" button, pick two random 
//     // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
//     let randomIndexOne = Math.floor( Math.random() * fighters.length )
//     let randomIndexTwo = Math.floor( Math.random() * fighters.length )
//     stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
// })


// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// // Create a function that puts the apples onto the appleShelf
// // and the oranges onto the orangeShelf. Use a for loop,
// // a conditional statement, and the textContent property.

// function sortFruit() {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎"
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }

// sortFruit()
