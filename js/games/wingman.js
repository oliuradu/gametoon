export function openGame1(){
    // Hide the background
    var game_section_dom = document.querySelector("#game-section")
    game_section_dom.style.display = "none";
    // Show the modal (overlay modal with the game)
    var game_modal_dom = document.querySelector("#game1modal")
    game_modal_dom.classList.remove("close");
    // Make the close button
    var textOutput = document.querySelector("#game1text");
    document.querySelector("#game1Close").addEventListener("click", closeGame);
    // Add event listener for userinput (ENTER)
    var userInput = document.querySelector("#game1userInput");
                    userInput.addEventListener("keypress", verify);
                    userInput.style.display = "initial";
    // Lives 
    var lives_dom = document.getElementById("game1lives");
    // Variables
    var wordlist = ["Javascript","PHP","Typescript","Variable", "Array","Function","Object","Document","Loop","NodeJs","React","Angular"];
    var random_word = wordlist[Math.floor(Math.random() * wordlist.length)];
    var random_word_split = random_word.toLowerCase().split("");
    var array_to_guess = [];
    var lives = 7;
    // Add an _ into array_to_guest for each letter
    random_word_split.forEach( letter_from_word => {
        array_to_guess.push("_");
    });
    textOutput.innerHTML = `Guess the secret word <br><br> ${array_to_guess.join(" ")}`;
    checkLives();

    function verify(e){
            var keyCode = e.keyCode;
            if (keyCode == 13 && lives > 0 && userInput.value != "") {
                checkLetter(userInput.value.toLowerCase());
                textOutput.innerHTML = `Guess the secret word <br><br> ${array_to_guess.join(" ")}`;
                ///// IF WINNNEEEER 
                if(array_to_guess.indexOf("_") == -1) {
                    textOutput.innerHTML = "You won! The word was " + random_word;
                    // Add button
                    document.querySelector(".confetiGame1").classList.add("start");
                    createRestartButton();
                }
            checkLives();
            userInput.value = "";
            
        }
    }

    function checkLetter(userInput_letter){
        if(random_word_split.indexOf(userInput_letter) == -1 &&  userInput_letter != ""){
            lives--;
        }
        else{
            for (let i = 0; i < random_word_split.length; i++) {       
                if(random_word_split[i] == userInput_letter){
                    array_to_guess[i] = userInput_letter;
                }
            }
        }
    }
    // Check lives 
    function createRestartButton(){
        userInput.style.display = "none";
        textOutput.innerHTML += `<br><button id="restart">Restart</button>`;
        // Add eventlistener to button to Restart the game 
        document.getElementById("restart").addEventListener("click", restartGame);
    }
    function checkLives() {
        if(lives == 0){
            textOutput.innerHTML = "You lost! The word was " + random_word;
            createRestartButton();

        }
        document.querySelector("#game1lives").innerHTML = "";
        for(let i = 0; i < lives; i++){
            document.querySelector("#game1lives").innerHTML += `<img class="lives" src="./images/heart.svg"></img>`;
        }

    }
    // Close game
    function closeGame(){
        game_modal_dom.classList.add("close");
        game_section_dom.style.display = "block";
    }

    // Restart game

    function restartGame(){
        document.querySelector(".confetiGame1").classList.remove("start");
        userInput.removeEventListener("keypress", verify);
        openGame1();
    }
}
