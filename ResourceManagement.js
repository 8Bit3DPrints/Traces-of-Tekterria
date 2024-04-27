import { player, updateUI } from './Player.js';

export function updatePlayerStats() {
    // Update player stats in the UI
}

export function updateEquipmentDisplay() {
    // Update the equipment display logic
    console.log('Updating equipment display...');
}

export function updateInventoryDisplay() {
    // Assuming you have a way to access the inventory and an element to display it
    const inventoryElement = document.getElementById('inventory');
    inventoryElement.innerHTML = ''; // Clear existing inventory display

    Object.keys(player.inventory).forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.textContent = `${item}: ${player.inventory[item]}`;
        inventoryElement.appendChild(itemElement);
    });

    console.log('Inventory display updated');
}

export function regenerateResources() {
    // Example regeneration logic
    player.health = Math.min(player.health + 10, 100);  // Assuming 100 is the max health
    player.mana = Math.min(player.mana + 5, 50);        // Assuming 50 is the max mana
    player.stamina = Math.min(player.stamina + 5, 50);  // Assuming 50 is the max stamina

    // Call update function to reflect these changes in the UI
    updateUI();
}

setInterval(regenerateResources, 100); // Adjust interval as needed
