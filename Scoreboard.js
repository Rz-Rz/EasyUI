export default class Scoreboard { 
  constructor(parentId) {
    this.parent = document.getElementById(parentId);
    this.scores = {player1: 0, player2: 0};
    this.init();
  }

  init() {
    this.scoreboardElement = document.createElement('div');
    this.scoreboardElement.id = 'scoreboard';
    this.scoreboardElement.innerHTML = `
    Player 1: <span id="score1">0</span> | Player 2: <span id="score2">0</span>`;
    //CSS Styles
    this.scoreboardElement.style.position = 'absolute';
    this.scoreboardElement.style.top = '10px';
    this.scoreboardElement.style.left = '50%';
    this.scoreboardElement.style.transform = 'translateX(-50%)';
    this.scoreboardElement.style.color = '#fff';
    this.scoreboardElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    this.scoreboardElement.style.padding = '10px';
    this.scoreboardElement.style.borderRadius = '5px';
    this.scoreboardElement.style.fontFamily = 'Arial, sans-serif';

    this.parent.appendChild(this.scoreboardElement);
  }

  updateScore(player, score) {
    if (this.scores[player] !== undefined){
    this.scores[player] = score; // Increment score
      const playerId = player === 'player1' ? 'score1' : 'score2';
    this.scoreboardElement.querySelector(`#${playerId}`).textContent = this.scores[player];
    } 
    else {
      console.error("Invalid player ID: ", player);
    }
  }
}
