import { question } from "./questions.js";
export function openGame3(){
    // Hide the background
    document.querySelector("#game-section").style.display = "none";
    // Show the div
    document.querySelector("#game3modal").classList.remove("close");
    // Make the close button
    var textOutput = document.querySelector("#game3text");
    document.querySelector("#game3Close").addEventListener("click", closeGame);
    // Game variant dom
    var variante_dom = document.querySelector("#game3variante");
    //Lives
    var lives_dom = document.getElementById("game3lives");
    // Score
    var score_dom = document.getElementById("game3score");
    var score = 0;
    // Variables
    textOutput.innerHTML = "First question";
    var lives = 7;
    checkLives();


    generateQuestion();
    // Timer
    var timeLeft = 100;
    var timeInterval = setInterval( () => {
        if(timeLeft > 0){
            timeLeft -= 10;
            document.getElementById("game3time").value = timeLeft;
        }
        else if(timeLeft == 0){
            lives = 0;
            checkLives()
            clearInterval(timeInterval)
        }
    } ,1000);

    function generateQuestion () {
        

        let keys = Object.keys(question);
        let random_question_object = question[keys[ keys.length * Math.random() << 0]];
        textOutput.innerHTML = random_question_object.question;
        variante_dom.innerHTML = "";
        random_question_object.variante = shuffle(random_question_object.variante);
        // Create button for each answer
        random_question_object.variante.forEach( e => {
            variante_dom.innerHTML += `<button class="buttonvariante" value="${e}" id="id${e}">${e}<button>`;
            
            
            document.onclick = (clicked) => {

                if(clicked.target && clicked.target.classList[0] == "buttonvariante"){
                    if(clicked.target.textContent == random_question_object.answer){
                        score += timeLeft;
                        score_dom.innerHTML = `<p>Score: ${score}</p>`
                        
                        if(score > 1000){
                            Winner();
                        }
                        else{
                            timeLeft = 100;
                            generateQuestion();
                        }
                    }
                    else{
                        lives--;
                        checkLives();
                    }
                }
            }

        })

    }

    // Shuffle array 
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // IF WINNER
    function Winner() {
        if(score > 1000){
            textOutput.innerHTML = "You won!";
            // Add button
            document.querySelector(".confetiGame3").classList.add("start");
            clearInterval(timeInterval);
            createRestartButton();
        }
    }

    // Generate question

    // Check lives 
    function createRestartButton(){
        variante_dom.innerHTML = "";
        textOutput.innerHTML += `<br><button id="restart">Restart</button>`;
        // Add eventlistener to button to Restart the game 
        document.getElementById("restart").addEventListener("click", restartGame);
    }
    function checkLives() {
        if(lives == 0){
            timeLeft = 0;
            textOutput.innerHTML = "You lost!";
            createRestartButton();

        }
        document.querySelector("#game3lives").innerHTML = "";
        for(let i = 0; i < lives; i++){
            document.querySelector("#game3lives").innerHTML += `<img class="lives" src="./images/heart.svg"></img>`;
        }

    }
    // Close game
    function closeGame(){
        document.querySelector("#game3modal").classList.add("close");
        document.querySelector("#game-section").style.display = "block";
    }

    // Restart game

    function restartGame(){
        document.querySelector(".confetiGame3").classList.remove("start");
        openGame3();
    }
}
