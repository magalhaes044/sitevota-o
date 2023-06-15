const players = ['neymar', 'messi', 'mbappe', 'vinicius', 'haaland'];

let player1 = null;
let player2 = null;

let player1Score = 0;
let player2Score = 0;

function generateDuel() {
  if (players.length < 2) {
    alert('A votação foi concluída!');
    return;
  }

  const randomIndex1 = Math.floor(Math.random() * players.length);
  player1 = players[randomIndex1];
  players.splice(randomIndex1, 1);

  const randomIndex2 = Math.floor(Math.random() * players.length);
  player2 = players[randomIndex2];
  players.splice(randomIndex2, 1);

  const duelImages = document.querySelector('.duel-images');
  duelImages.innerHTML = `
    <img src="link_web_${player1}.jpg" alt="${player1}" class="duel-image">
    <h3 class="versus">VS</h3>
    <img src="link_web_${player2}.jpg" alt="${player2}" class="duel-image">
  `;
}

function updateScore(winner) {
  if (winner === player1) {
    player1Score++;
    document.getElementById(`${player1}-count`).innerText = player1Score;
  } else if (winner === player2) {
    player2Score++;
    document.getElementById(`${player2}-count`).innerText = player2Score;
  }
}

generateDuel();
