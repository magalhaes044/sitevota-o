const players = ['neymar', 'messi', 'mbappe', 'vinicius', 'haaland'];

let player1 = null;
let player2 = null;

let player1Score = 0;
let player2Score = 0;

function generateNextDuel() {
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
    <img src="link_web_${player1}.jpg" alt="${player1}" class="duel-image" onclick="vote('${player1}')">
    <img src="link_web_${player2}.jpg" alt="${player2}" class="duel-image" onclick="vote('${player2}')">
  `;
}

function vote(player) {
  if (player === player1) {
    player1Score++;
  } else if (player === player2) {
    player2Score++;
  }

  updateScores();
  generateNextDuel();
}

function updateScores() {
  const neymarCount = document.getElementById('neymar-count');
  const messiCount = document.getElementById('messi-count');
  const mbappeCount = document.getElementById('mbappe-count');
  const viniciusCount = document.getElementById('vinicius-count');
  const haalandCount = document.getElementById('haaland-count');

  neymarCount.textContent = player1Score;
  messiCount.textContent = player2Score;

  // Atualize as contagens para os outros jogadores aqui

  // Exemplo:
  // mbappeCount.textContent = player3Score;
  // viniciusCount.textContent = player4Score;
  // haalandCount.textContent = player5Score;
}

generateNextDuel();