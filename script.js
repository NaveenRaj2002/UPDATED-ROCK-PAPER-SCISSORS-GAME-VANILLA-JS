
const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
  let rpc = ["Rock", "Paper", "Scissors"]
  return rpc[Math.floor(Math.random() * rpc.length)]
}


function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice == computerChoice) {
    score = 0
  }
  else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1
  }
  else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1
  }
  else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1
  }
  else {
    score = -1
  }

  return score
}


function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result")
  const handsDiv = document.getElementById("hands")
  const playerScoreDiv = document.getElementById("player-score")
  if (score === -1) {
    resultDiv.innerText = "You Lose!"
  }
  else if (score === 0) {
    resultDiv.innerText = "It's a tie!"
  }
  else {
    resultDiv.innerText = "You Won!"
  }

  handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  playerScoreDiv.innerText = `👱score --> ${totalScore["playerScore"]}, 🤖score --> ${totalScore["computerScore"]}`
}


function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice()
  let score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  if (score === -1) {
    totalScore['computerScore'] += 1
  }
  else if (score === 1) {
    totalScore['computerScore'] -= 1
  }
  showResult(score, playerChoice, computerChoice)
}


function playGame() {
  
  let rpsButtons = document.querySelectorAll(".rpsButton")
  
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  const endGameBtn = document.getElementById("endGameButton")
  endGameBtn.onclick = () => endGame(totalScore)
  
  
}


function endGame(totalScore) {
  totalScore["playerScore"] = 0
  totalScore["computerScore"] = 0
  const resultDiv = document.getElementById("result")
  const handsDiv = document.getElementById("hands")
  const playerScoreDiv = document.getElementById("player-score")

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()