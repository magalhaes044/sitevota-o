let neymarCount = 0;
let messiCount = 0;
let mbappeCount = 0;
let haalandCount = 0;

function vote(player1, player2) {
  const random = Math.random();
  if (random < 0.5) {
    updateScore(player1);
  } else {
    updateScore(player2);
  }
}

function updateScore(player) {
  switch (player) {
    case 'neymar':
      neymarCount++;
      document.getElementById('neymar-count').innerText = neymarCount;
      break;
    case 'messi':
      messiCount++;
      document.getElementById('messi-count').innerText = messiCount;
      break;
    case 'mbappe':
      mbappeCount++;
      document.getElementById('mbappe-count').innerText = mbappeCount;
      break;
    case 'haaland':
      haalandCount++;
      document.getElementById('haaland-count').innerText = haalandCount;
      break;
    default:
      break;
  }
}
