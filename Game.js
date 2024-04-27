import { saveGame, loadGame } from './GameManagement.js';
import { attack } from './Combat.js';
import { updatePlayerStats, updateInventoryDisplay, updateEquipmentDisplay } from './ResourceManagement.js';
import { regenerateResources } from './ResourceManagement.js';

document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to buttons using their IDs
    document.getElementById('saveGame').addEventListener('click', saveGame);
    document.getElementById('loadGame').addEventListener('click', loadGame);
    document.getElementById('meleeAttack').addEventListener('click', () => attack('melee'));
    document.getElementById('rangedAttack').addEventListener('click', () => attack('ranged'));
    document.getElementById('magicAttack').addEventListener('click', () => attack('magic'));

    // Initial updates when the game loads
    updatePlayerStats(); // Initial call to update stats
    updateInventoryDisplay(); // Initial inventory update
    updateEquipmentDisplay(); // Initial equipment update
});

