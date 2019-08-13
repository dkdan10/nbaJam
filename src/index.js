import NBAJamGame from './js/game.js'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('nba-jam-game');
    const game = new NBAJamGame(canvas);
});