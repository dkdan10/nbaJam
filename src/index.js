import NBAJamGame from './js/game.js'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('nba-jam-game');
    new NBAJamGame(canvas);
});
