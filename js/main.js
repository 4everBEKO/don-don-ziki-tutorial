window.addEventListener('DOMContentLoaded', () => {
  const choises = document.querySelectorAll('.choice'),
        score = document.getElementById('score'),
        modal = document.querySelector('.modal'),
        result = document.getElementById('result'),
        restart = document.getElementById('restart');

  scoreBoard = {
    player: 0,
    computer: 0
  };

  //PlayGame
  function play(event) {
    restart.style.display = 'inline-block'
    const playerChoise = event.target.id
    const computerChoise = getComputerChoise()
    const winner = getWinner(playerChoise, computerChoise)
    showWinner(winner, computerChoise)
  }

  //GetComputeChoise
  function getComputerChoise() {
    const rand = Math.random()
    if(rand < 0.34) {
      return 'rock'
    } else if(rand <= 0.67) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }

  //GetWinner
  function getWinner(p, c) {
    if(p === c) {
      return 'draw'
    } else if(p === 'rock') {
      if(c === 'paper') {
        return 'computer'
      } else {
        return 'player'
      }
    } else if(p === 'paper') {
      if(c === 'scissors') {
        return 'computer'
      } else {
        return 'player'
      }
    } else if(p === 'scissors') {
      if(c === 'rock') {
        return 'computer'
      } else {
        return 'player'
      }
    }
  }

  //ShowWinner 
  function showWinner(winner, computerChoise) {
    if(winner === 'player') {
      scoreBoard.player++
      result.innerHTML = `
      <h1 class="text-win">You win</h1>
      <i class="fas fa-hand-${computerChoise} fa-10x"></i>
      <p>Computer choise <strong>${computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)}</strong></p>
      `
    } else if(winner === 'computer') {
      scoreBoard.computer++
      result.innerHTML = `
      <h1 class="text-lose">You lose</h1>
      <i class="fas fa-hand-${computerChoise} fa-10x"></i>
      <p>Computer choise <strong>${computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)}</strong></p>
      `
    } else {
      result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerChoise} fa-10x"></i>
        <p>Computer choise <strong>${computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)}</strong></p>
      `
    }

    score.innerHTML = `
    <p> Player: ${scoreBoard.player}</p>
    <p> Computer: ${scoreBoard.computer}</p>
    `

    modal.style.display = 'block'
  }

  //RestartGame
  function restartGame() {
    scoreBoard.player = 0
    scoreBoard.computer = 0
    score.innerHTML = `
    <p> Player: ${scoreBoard.player}</p>
    <p> Computer: ${scoreBoard.computer}</p>
    `
  }

  //ClearModal
  function clearModal(event) {
    if(event.target == modal) {
      modal.style.display = 'none'
    }
  }

  //EventListener
  choises.forEach(choise => choise.addEventListener('click', play))
  window.addEventListener('click', clearModal)
  restart.addEventListener('click', restartGame)

})