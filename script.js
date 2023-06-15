const players = [
    { name: 'Neymar', score: 0, image: 'https://hdqwalls.com/download/neymar-jr-brazil-portraits-f1-3840x2400.jpg' },
    { name: 'Messi', score: 0, image: 'https://th.bing.com/th/id/R.8bdfc9a6588b52996117a2d2a3219e95?rik=BVLPQYw%2febS%2b4g&pid=ImgRaw&r=0' },
    { name: 'Mbappe', score: 0, image: 'https://th.bing.com/th/id/R.ea2b1b5815ae3aadfb9f5956afc28023?rik=j3wjEIX0dg2AnA&pid=ImgRaw&r=0' },
    { name: 'Vinicius Junior', score: 0, image: 'https://wallpapercave.com/wp/wp11318284.jpg' },
    { name: 'Haaland', score: 0, image: 'https://images.wallpapersden.com/image/download/hd-erling-haaland-2022_bWppbmyUmZqaraWkpJRnamtlrWZpaWU.jpg' }
  ];
  
  let currentDuel = null;
  
  function vote(playerIndex) {
    if (currentDuel !== null) {
      const duelResultText = document.querySelector('.duel-result-text');
      const winner = players[playerIndex];
      const loser = players.find((player, index) => index !== playerIndex);
      
      if (currentDuel === winner) {
        duelResultText.textContent = `Você votou corretamente! ${winner.name} é o mais bonito!`;
        winner.score++;
      } else {
        duelResultText.textContent = `Você votou no jogador errado. ${winner.name} não é o mais bonito!`;
        loser.score++;
      }
  
      currentDuel = null;
      updateScoreboard();
    }
  }
  
  function updateScoreboard() {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const scoreElement = document.getElementById(`score-${player.name.toLowerCase().replace(' ', '-')}`);
      scoreElement.textContent = player.score;
    }
  }
  
  function nextDuel() {
    if (players.length < 2) {
      const duelResultText = document.querySelector('.duel-result-text');
      duelResultText.textContent = 'A votação foi concluída!';
      return;
    }
  
    const randomIndex1 = Math.floor(Math.random() * players.length);
    const player1 = players[randomIndex1];
    players.splice(randomIndex1, 1);
  
    const randomIndex2 = Math.floor(Math.random() * players.length);
    const player2 = players[randomIndex2];
    players.splice(randomIndex2, 1);
  
    currentDuel = player1;
  
    const duelResultText = document.querySelector('.duel-result-text');
    duelResultText.textContent = '';
  
    const duelImages = document.querySelector('.duel-images');
    duelImages.innerHTML = `
      <div class="player" onclick="vote(0)">
        <img src="${player1.image}" alt="${player1.name}">
        <span class="player-name">${player1.name}</span>
      </div>
      <div class="player" onclick="vote(1)">
        <img src="${player2.image}" alt="${player2.name}">
        <span class="player-name">${player2.name}</span>
      </div>
    `;
  }
  
  nextDuel();
  