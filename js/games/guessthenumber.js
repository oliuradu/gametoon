export function openGame0(){
    // Hide the background
    document.querySelector("#game-section").style.display = "none";
    // Show the div
    document.querySelector("#game0modal").classList.remove("close");
    // Make the close button
    var textOutput = document.querySelector("#game0text");
    document.querySelector("#game0Close").addEventListener("click", closeGame);
    // Add event listener for userinput (ENTER)
    var userInput = document.querySelector("#game0userInput");
                    userInput.addEventListener("keypress", verify);
                    userInput.style.display = "initial";
    // Lives 
    var lives_dom = document.getElementById("game0lives");
    // Variables
    var user_number_max_selected  = 100;
    textOutput.innerHTML = "Guess the secret number";
    var randomNumber = Math.floor(Math.random() * user_number_max_selected);
    var margin_of_error = 3;
    var lives = 7;
    checkLives();

    function verify(e){
        
            var keyCode = e.keyCode;
            if (keyCode == 13 && lives > 0 && userInput.value != "") {
                if(Number(userInput.value) + margin_of_error > randomNumber  && userInput.value < randomNumber){
                    textOutput.innerHTML = "You are close but is not " + userInput.value;
                    lives--;
                }
                else if (Number(userInput.value) - margin_of_error < randomNumber  && userInput.value > randomNumber){
                    textOutput.innerHTML = "You are close but is not " + userInput.value;
                    lives--;
                }
                else if(userInput.value > randomNumber){
                    textOutput.innerHTML = "The number is smaller than " + userInput.value;
                    lives--;
                }     
                else if(userInput.value < randomNumber){
                    textOutput.innerHTML = "The number is bigger than " + userInput.value;
                    lives--;
                }
                else {
                    textOutput.innerHTML = "You won! The number was " + userInput.value;
                    // Add button
                    document.querySelector(".confetiGame0").classList.add("start");
                    createRestartButton();
                }
            checkLives();
            userInput.value = "";
            
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
            textOutput.innerHTML = "You lost! The number was " + randomNumber;
            createRestartButton();

        }
        document.querySelector("#game0lives").innerHTML = "";
        for(let i = 0; i < lives; i++){
            document.querySelector("#game0lives").innerHTML += `<img class="lives" src="./images/heart.svg"></img>`;
        }

    }
    // Close game
    function closeGame(){
        document.querySelector("#game0modal").classList.add("close");
        document.querySelector("#game-section").style.display = "block";
    }

    // Restart game

    function restartGame(){
        document.querySelector(".confetiGame0").classList.remove("start");
        userInput.removeEventListener("keypress", verify);
        openGame0();
    }
}

