// Player.js

export const player = {
    health: 100,
    mana: 50,
    stamina: 50,
    location: 'Starting Island',
    inventory: {},
    moneyPouch: 0,
    skills: {
        melee: 1,
        ranged: 1,
        magic: 1,
        fishing: 1,
        mining: 1,
        scavenging: 1  // Adding a new scavenging skill
    },
    equipmentSlots: {
        helm: null,
        mask: null,  // Changing "neck" slot to "mask" for futuristic theme
        body: null,
        legs: null,
        boots: null,  // Renaming "feet" slot to "boots"
        gloves: null,
        ring1: null,
        ring2: null,
        weapon: null,  // Combining "weapon1" and "weapon2" into a single "weapon" slot
        shield: null  // Adding a new shield slot for defensive equipment
    }
};

export function checkLevelUp() {
    while (player.xp >= xpToNextLevel(player.level)) {
        player.xp -= xpToNextLevel(player.level);
        player.level++;
        levelUpRewards();
    }
}

export function xpToNextLevel(level) {
    return Math.floor(100 * Math.pow(level, 1.5));
}

export function levelUpRewards() {
    player.health += 10;  // Increase health
    player.mana += 5;     // Increase mana
    updateUI();
    alert("Congratulations! You've reached level " + player.level);
}

// Function to update player stats and display equipped items
export function updatePlayerStats() {
    console.log('Current player stats:');
    console.log(`Health: ${player.health}`);
    console.log(`Mana: ${player.mana}`);
    console.log(`Stamina: ${player.stamina}`);
    console.log(`Location: ${player.location}`);
    console.log(`Money Pouch: ${player.moneyPouch}`);
    console.log('Skills:');
    Object.keys(player.skills).forEach(skill => {
        console.log(`${skill}: ${player.skills[skill]}`);
    });
    console.log('Currently equipped items:');
    Object.keys(player.equipmentSlots).forEach(slot => {
        if (player.equipmentSlots[slot]) {
            console.log(`${slot}: ${player.equipmentSlots[slot]}`);
        }
    });

    // Call the function to update UI elements
    updateUI();
}

export function updateUI() {
    updateHealthBar(player.health);
    updateManaBar(player.mana);
    updateStaminaBar(player.stamina);
    updateMoneyPouchDisplay(player.moneyPouch);
    updateSkillsDisplay(player.skills);
    updateEquipmentDisplay(player.equipmentSlots);
    updateXpBar(player.xp, xpToNextLevel(player.level));
}

// Individual functions to update specific parts of the UI
export function updateHealthBar(health) {
    document.getElementById('health').textContent = player.health;
}

export function updateManaBar(mana) {
    document.getElementById('mana').textContent = `Mana: ${mana}`;
}

export function updateStaminaBar(stamina) {
    document.getElementById('stamina').textContent = `Stamina: ${stamina}`;
}

export function updateLocationDisplay(location) {
    const locationElement = document.getElementById('location-display');
    console.log(locationElement); // Check if the element is null
    if (locationElement) {
        locationElement.textContent = `${location}`;
    } else {
        console.error('Location display element not found');
    }
}

export function updateMoneyPouchDisplay(money) {
    document.getElementById('moneyPouch').textContent = `Money: ${money} coins`;
}

export function updateSkillsDisplay(skills) {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = ''; // Clear existing skills list
    Object.entries(skills).forEach(([skill, level]) => {
        let skillItem = document.createElement('li');
        skillItem.textContent = `${skill}: ${level}`;
        skillsList.appendChild(skillItem);
    });
}

export function updateEquipmentDisplay(equipmentSlots) {
    const equipmentList = document.getElementById('equipment-list');
    equipmentList.innerHTML = ''; // Clear existing list
    Object.entries(equipmentSlots).forEach(([slot, item]) => {
        let itemElement = document.createElement('li');
        itemElement.textContent = `${slot}: ${item}`;
        equipmentList.appendChild(itemElement);
    });
}

export function updateXpBar(currentXp, nextLevelXp) {
    const xpBarElement = document.getElementById('xp-bar');
    if (xpBarElement) {
        xpBarElement.style.width = `${(currentXp / nextLevelXp) * 100}%`;
        xpBarElement.textContent = `XP: ${currentXp} / ${nextLevelXp}`;
    } else {
        console.error('XP bar element not found');
    }
}
