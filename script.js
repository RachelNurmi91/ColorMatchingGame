 const COLORS_ARRAY=["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    COLORS_ARRAY.sort();
    const targetIndex = Math.floor((Math.random()*COLORS_ARRAY.length));
    const target = COLORS_ARRAY[targetIndex];
    //Console Log for Debugging
    console.log(target);


document.getElementById("submitGuess").addEventListener("click", guessingGame)

function guessingGame() {
    let userGuess = document.getElementById("userGuess").value;
    let correct = document.createTextNode("Correct! Good Guess.");
    let lower = document.createTextNode("Incorrect!\n\nHint: The first letter of your guess is alphabetically lower than that of the correct answer.");
    let higher = document.createTextNode("Incorrect!\n\nHint: The first letter of your guess is alphabetically higher than that of the correct answer.");
    let incorrect = document.createTextNode("That is not a valid choice.");
    let color1 = "#fff";
    let color2 = userGuess;
    let gradient = "linear-gradient(45deg"+","+color1+","+color2+")"; 
    
    //Console Log for Debugging
    console.log(userGuess);

    if (COLORS_ARRAY.includes(userGuess) == false) {
        document.getElementById("p-response").appendChild(incorrect);
    } else if (userGuess < target ) {
        document.getElementById("p-response").appendChild(lower);
    } else if (userGuess > target) {
        document.getElementById("p-response").appendChild(higher);
    } else {
        document.getElementById("p-response").appendChild(correct);
        document.body.style.backgroundImage = gradient;
    }
}