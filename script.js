

const options = ["Rock", "Paper", "scissors"];

const generateRandomResponse = () => (Math.random() * 10).toFixed(0) % 3

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playerScoreContainer = document.querySelector("#player h1");
const ComputerScoreContainer = document.querySelector("#computer h1");
const messageBox = document.querySelector("#message-box h1");

let playerScore = 0, ComputerScore = 0;


rock.addEventListener("click", () => game(0))
paper.addEventListener("click", () => game(1))
scissor.addEventListener("click", () => game(2))


const game = (option) => {
    const computerResponse = generateRandomResponse();
    switch (option) {
        case 0:
            switch (computerResponse) {
                case 0:
                    console.log("Draw");
                    messageBox.innerHTML = "It is a tie!";
                    break;
                case 1:
                    console.log("Computer Wins!");
                    messageBox.innerHTML =  "computer wins!";
                    ComputerScore++;
                    ComputerScoreContainer.innerHTML = ComputerScore;
                    break;
                case 2:
                    console.log("You Win!");
                    messageBox.innerHTML = "you win!!";
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    break;
                default:
                    break;
            }
            break;
        case 1:
            switch (computerResponse) {
                case 0:
                    console.log("You Win!");
                    messageBox.innerHTML = "you win!!";
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    break;
                case 1:
                    console.log("Draw");
                    messageBox.innerHTML = "It is a tie!";
                    break;
                case 2:
                    console.log("Computer Wins!");
                    messageBox.innerHTML = "Computer wins!!";
                    ComputerScore++;
                    ComputerScoreContainer.innerHTML = ComputerScore;
                    break;
                default:
                    break;
            }
            break;
        case 2:
            switch (computerResponse) {
                case 0:
                    console.log("Computer Wins!");
                    messageBox.innerHTML = "Computer wins!!";
                    ComputerScore++;
                    ComputerScoreContainer.innerHTML = ComputerScore;
                    break;
                case 1:
                    console.log("You win!");
                    messageBox.innerHTML = "you win!!";
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    break;
                case 2:
                    console.log("Draw");
                    messageBox.innerHTML = "It is a tie!";
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

}