import NBAJamGame from './js/game.js'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('nba-jam-game');
    const canvasBackground = document.getElementById('nba-jam-background');

    // Prevent scrolling with arrow keys
    window.addEventListener("keydown", function (e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
    new NBAJamGame(canvas, canvasBackground);
});