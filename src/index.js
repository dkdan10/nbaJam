import NBAJamGame from './js/game.js'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('nba-jam-game');
    const backgroundCanvas = document.getElementById('nba-jam-background');

    new NBAJamGame(canvas, backgroundCanvas);
});
