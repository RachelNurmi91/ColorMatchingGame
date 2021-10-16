 const COLORS_ARRAY=["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    COLORS_ARRAY.sort();
    const targetIndex = Math.floor((Math.random()*COLORS_ARRAY.length));
    const target = COLORS_ARRAY[targetIndex];
    //Console Log for Debugging
    console.log(target);


document.getElementById("submitGuess").addEventListener("click", guessingGame)

function guessingGame() {
    let userInput = document.getElementById("userGuess").value;
    let userGuess = userInput.toLowerCase();
    let paragraph = document.getElementById("p-response");
    let color1 = "#fff";
    let color2 = userGuess;
    let gradient = "linear-gradient(45deg"+","+color1+","+color2+")"; 
    
    //Console Log for Debugging
    console.log(userGuess);


    if (COLORS_ARRAY.includes(userGuess) == false) {
        paragraph.innerHTML = "That is not a valid choice.";
    } else if (userGuess < target ) {
        paragraph.innerHTML = "Incorrect!<br>\
        Hint: The first letter of your guess is alphabetically LOWER than that of the correct answer.";
    } else if (userGuess > target) {
        paragraph.innerHTML = "Incorrect!<br>\
        Hint: The first letter of your guess is alphabetically HIGHER than that of the correct answer.";
    } else {
        paragraph.innerHTML = "Correct! Good Guess.";
        document.body.style.backgroundImage = gradient;
        document.getElementById("submitGuess").removeEventListener("click", guessingGame)
    }

    
}
