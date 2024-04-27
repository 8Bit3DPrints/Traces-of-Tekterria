// GameManagement.js
import { player, updatePlayerStats } from './Player.js';

export function saveGame() {
    localStorage.setItem('playerData', JSON.stringify(player));
    console.log('Game saved!');
}

export function loadGame() {
    let savedData = localStorage.getItem('playerData');
    if (savedData) {
        Object.assign(player, JSON.parse(savedData));
        updatePlayerStats();
        console.log('Game loaded!');
    } else {
        console.log('No saved game found.');
    }
}