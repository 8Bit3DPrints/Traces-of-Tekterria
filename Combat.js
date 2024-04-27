//Combat.js
import { player, updatePlayerStats, updateUI, updateHealthBar, updateManaBar, updateStaminaBar, updateSkillsDisplay, updateEquipmentDisplay, updateLocationDisplay } from './Player.js';
import { currentMonster, creatures, updateMonsterStats, spawnRandomMonster, defeatCurrentMonster } from './Monsters.js';

export function attack(type) {
    const monsterStatsDiv = document.getElementById('monster-stats');

    if (!currentMonster) {
        spawnRandomMonster();
        monsterStatsDiv.classList.add('visible');
    }

    updateMonsterStats();  // Always update stats when a monster is present

    if (player.stamina < 10) {
        console.log('Not enough stamina');
        return;
    }

    player.stamina -= 10;
    let damage = calculateDamage(type);
    currentMonster.currentHp -= damage;
    console.log(`You hit the ${currentMonster.name} for ${damage} damage!`);

    if (currentMonster.currentHp <= 0) {
        console.log(`You defeated the ${currentMonster.name}!`);
        handleDrops(currentMonster);
        defeatCurrentMonster(); // This should handle setting currentMonster to null and updating the UI
        updatePlayerStats();
        updateUI(); // This should refresh all player-related UI components
        monsterStatsDiv.classList.remove('visible'); // Hide monster stats UI
    } else {
        handleMonsterAttack();
    }

    updatePlayerStats();
    updateUI(); // Ensure player stats are updated after each attack cycle
}

function calculateDamage(attackType) {
    let baseDamage = Math.floor(Math.random() * 10 + 5);
    return baseDamage + (player.skills[attackType] || 0);
}

function handleMonsterAttack() {
    const monsterStatsDiv = document.getElementById('monster-stats');

    // Early exit if there's no current monster to attack
    if (!currentMonster) {
        monsterStatsDiv.classList.remove('visible');  // Ensure stats are not visible if no monster
        return;
    }
    
    // Make monster stats visible if a monster is present
    monsterStatsDiv.classList.add('visible');

    // Calculate damage that the monster does to the player
    let monsterDamage = Math.floor(Math.random() * 5 + 3);
    player.health -= monsterDamage;
    console.log(`The ${currentMonster.name} hits you back! You lose ${monsterDamage} health.`);
    updateHealthBar(player.health);  // Assumes updateHealthBar is defined and updates the UI
    updatePlayerStats();  // Update all player stats UI

    // Check if player health has dropped to zero or below
    if (player.health <= 0) {
        console.log('You have died. Returning to town to recover.');
        player.health = 100; // Reset player's health
        player.location = 'town'; // Move player back to town
        currentMonster = null; // There's no current monster anymore

        // Update the UI to reflect that there's no monster and player is in town
        monsterStatsDiv.classList.remove('visible');
        document.getElementById('monster-stats').style.display = 'none';
        updateLocationDisplay(player.location);  // Assuming you have a function to update location display
    }
}

function handleDrops(monster) {
    // Assuming monster can be null when this is called
    if (!monster) return;

    // Example logic for handling drops
    for (const [loot, quantity] of Object.entries(monster.lootTable)) {
        if (loot === 'coins') {
            player.moneyPouch += quantity;
            console.log(`You found ${quantity} coins on the ${monster.name}.`);
        } else {
            let dropChance = Math.random();
            if (dropChance < 0.5) {
                // Add the item to player's inventory or display it as loot
                console.log(`You looted ${loot} from the ${monster.name}.`);
            }
        }
    }
}
