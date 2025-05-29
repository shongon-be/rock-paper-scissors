// Cache DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const conputerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const actionMessage_p = document.getElementById("action-message");
const scissors_div = document.getElementById("scissors");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");

function getComputerChoice() {
    const choices = ['scissors', 'rock', 'paper'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

function convertToWord(letter) {
    if (letter === 'rock') return 'Búa';
    if (letter === 'paper') return "Bao";
    return "Kéo";
}

function win(user, comp) {
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    conputerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)} thắng ${convertToWord(comp)}. Hay lắm nhaaaa 😉`;
    userChoice_div.classList.add('win-glow');

    setTimeout(() => userChoice_div.classList.remove('win-glow'),400);

    actionMessage_p.innerHTML = "Bạn ra cái gì? Tôi ra cái 👊"
};

function lose(user, comp) {
    const userChoice_div = document.getElementById(user);
    computerScore++;
    conputerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(user)} thua ${convertToWord(comp)}. Gà chưaaaa! 🤪`;
   userChoice_div.classList.add('lose-glow');

    setTimeout(() => userChoice_div.classList.remove('lose-glow'),400);

    actionMessage_p.innerHTML = "Bạn ra cái gì? Tôi ra cái 🖐"
};

function draw(user, comp) {
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `Huề thôi. Chưa tài đâu! 😏 `;
    userChoice_div.classList.add('draw-glow');
    setTimeout(() => userChoice_div.classList.remove('draw-glow'),400);
    actionMessage_p.innerHTML = "Bạn ra cái gì? Tôi ra cái ✌"
};

function game(userChoice) {
    const computeChoice = getComputerChoice();

    switch (userChoice + computeChoice) {
        // User wins.
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            win(userChoice, computeChoice);
            break;
        // User loses.
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, computeChoice);
            break;
        // The game is draw.
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            draw(userChoice, computeChoice);
            break;
    }
}

function main() {
    scissors_div.addEventListener('click',() => game("scissors"));
    rock_div.addEventListener('click',() => game("rock"));
    paper_div.addEventListener('click',() => game("paper"));
};

main();