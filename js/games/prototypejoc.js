export function openGame1(){
    // Hide the background
    console.log("hola");
    document.querySelector("#game-section").style.display = "none";
    // Show the div
    document.querySelector("#game1modal").classList.remove("close");
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
    textOutput.innerHTML = "Guess the secret word";
    var lives = 7;
    checkLives();

    function verify(e){
        
            var keyCode = e.keyCode;
            if (keyCode == 13 && lives > 0 && userInput.value != "") {
                
                
                ///// IF WINNNEEEER 
                if(false) {
                    textOutput.innerHTML = "You won! The number was " + userInput.value;
                    // Add button
                    document.querySelector(".confetiGame1").classList.add("start");
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
        document.querySelector("#game1lives").innerHTML = "";
        for(let i = 0; i < lives; i++){
            document.querySelector("#game1lives").innerHTML += `<img class="lives" src="./images/heart.svg"></img>`;
        }

    }
    // Close game
    function closeGame(){
        document.querySelector("#game1modal").classList.add("close");
        document.querySelector("#game-section").style.display = "block";
    }

    // Restart game

    function restartGame(){
        document.querySelector(".confetiGame1").classList.remove("start");
        userInput.removeEventListener("keypress", verify);
        openGame1();
    }
}
