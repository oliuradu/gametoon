export function openGame2(){
    // Hide the background
    document.querySelector("#game-section").style.display = "none";
    // Show the div
    document.querySelector("#game2modal").classList.remove("close");
    // Make the close button
    var textOutput = document.querySelector("#game2text");
    document.querySelector("#game2Close").addEventListener("click", closeGame);
    // Add event listener for userinput (ENTER)
    var userInput = document.querySelector("#game2userInput");
                    userInput.addEventListener("keypress", verify);
                    userInput.style.display = "initial";
/////////////////////////////////////////////////////////////////////////////////
    var lives_dom = document.getElementById("game2lives");
    var score_dom = document.getElementById("game2score");

    textOutput.innerHTML = "1 + 1";
    var number1,number2,number3,number4,mathsymbol,answer;
    var lives = 7;
    var score = 0;
    checkLives();
    var timeLeft = 100;
    // CLOCK
    var gameStarted = false;

    var timeInterval = setInterval( () => {
        if(gameStarted == true && timeLeft > 0){
            timeLeft -= 10;
            document.getElementById("game2time").value = timeLeft;
        }
        else if(timeLeft == 0){
            gameStarted = false;
            lives = 0;
            checkLives()
            clearInterval(timeInterval)
        }
    } ,1000);

    function verify(e){
            var keyCode = e.keyCode;
            if (keyCode == 13 && lives > 0 && userInput.value != "") {
                // Start the game after the user insert data 
                if(userInput.value == 2 && gameStarted == false){
                     gameStarted = true;
                     generateMathProblem();
                     lives++;
                 }
                 if(Number(userInput.value) == answer){
                     score += (timeLeft / 10); 
                     timeLeft = 100;
                     score_dom.innerHTML = "Score: " + score;
                     generateMathProblem();

                 }
                 else {
                     lives--;
                 }

                 if(userInput )
                ///// IF WINNNEEEER 
                if(score > 100) {
                    textOutput.innerHTML = "You won! You are pretty clever";
                    // Add button
                    document.querySelector(".confetiGame2").classList.add("start");
                    clearInterval(timeInterval);
                    createRestartButton();
                }
            checkLives();
            userInput.value = "";
            
        }
    }
    function generateMathProblem(){
        if(score < 50){
            mathsymbol = "+"
            number1 = Math.floor(Math.random() * 10);
            number2 = Math.floor(Math.random() * 10);
            answer = number1 + number2;
            textOutput.innerHTML = `${number1} ${mathsymbol} ${number2}`;
        }
        else if(score < 100){
            mathsymbol = "+"
            number1 = Math.floor(Math.random() * 10);
            number2 = Math.floor(Math.random() * 10);
            number3 = Math.floor(Math.random() * 10);
            number1 = Number(`${number1}${number2}`);
            answer = number1 + number3;
            textOutput.innerHTML = `${number1} ${mathsymbol} ${number3}`;
        }
        else if(score < 200){
            mathsymbol = "*"
            number1 = Math.floor(Math.random() * 10);
            number2 = Math.floor(Math.random() * 10);
            number3 = Math.floor(Math.random() * 10);
            answer = number1 * number3;
            textOutput.innerHTML = `${number1} ${mathsymbol} ${number3}`;
        }
        else if(score < 300){
            mathsymbol = "+"
            number1 = Math.floor(Math.random() * 10);
            number2 = Math.floor(Math.random() * 10);
            number3 = Math.floor(Math.random() * 10);
            number4 = Math.floor(Math.random() * 10);
            number1 = Number(`${number1}${number2}`);
            number3 = Number(`${number3}${number4}`);
            answer = number1 + number3;
            textOutput.innerHTML = `${number1} ${mathsymbol} ${number3}`;
        }
        else if(score < 500){
            mathsymbol = "*"
            number1 = Math.floor(Math.random() * 10);
            number2 = Math.floor(Math.random() * 10);
            number3 = Math.floor(Math.random() * 10);
            number4 = Math.floor(Math.random() * 10);
            number1 = Number(`${number1}${number2}`);
            number3 = Number(`${number3}${number4}`);
            answer = number1 * number3;
            textOutput.innerHTML = `${number1} ${mathsymbol} ${number3}`;
        }
    }
    function createRestartButton(){
        userInput.style.display = "none";
        textOutput.innerHTML += `<br><button id="restart">Restart</button>`;
        // Add eventlistener to button to Restart the game 
        document.getElementById("restart").addEventListener("click", restartGame);
    }
    // Check lives 
    function checkLives() {
        if(lives == 0){
            textOutput.innerHTML = "You lost! The answer was " + answer;
            createRestartButton();

        }
        document.querySelector("#game2lives").innerHTML = "";
        for(let i = 0; i < lives; i++){
            document.querySelector("#game2lives").innerHTML += `<img class="lives" src="./images/heart.svg"></img>`;
        }

    }
    // Close game
    function closeGame(){
        document.querySelector("#game2modal").classList.add("close");
        document.querySelector("#game-section").style.display = "block";
    }

    // Restart game

    function restartGame(){
        document.querySelector(".confetiGame2").classList.remove("start");
        userInput.removeEventListener("keypress", verify);
        openGame2();
    }
}
