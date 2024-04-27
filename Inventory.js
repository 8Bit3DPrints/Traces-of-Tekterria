// InventoryManagement.js

import { player } from './Player.js';
import { updatePlayerStats } from './ResourceManagement.js';

// Define an object to store the player's equipped items
export const equippedItems = {
    headgear: null,
    necklace: null,
    torso: null,
    legs: null,
    boots: null,
    gloves: null,
    leftRing: null,
    rightRing: null,
    weapon: null,
    shield: null
};

// Function to handle item drops from creatures
export function handleDrops(creature) {
    const lootTable = creature.lootTable;

    // Check if the creature dropped any items
    if (lootTable) {
        // Iterate through the loot table
        for (const category in lootTable) {
            // Handle upgrade materials separately
            if (category === "upgradeMaterial") {
                // Logic to handle upgrade materials goes here
            } else {
                // Add logic to handle equipping items here
                const items = lootTable[category];
                // Check if the category is an equipable item
                if (category !== "coins") {
                    // Equip the item if it's an upgrade over the current equipped item
                    equipItem(items);
                }
            }
        }
    }
}

// Function to equip an item from the inventory
export function equipItem(item) {
    // Determine the type of item and equip it accordingly
    switch (item.type) {
        case "headgear":
            equippedItems.headgear = item;
            break;
        case "necklace":
            equippedItems.necklace = item;
            break;
        case "torso":
            equippedItems.torso = item;
            break;
        case "legs":
            equippedItems.legs = item;
            break;
        case "boots":
            equippedItems.boots = item;
            break;
        case "gloves":
            equippedItems.gloves = item;
            break;
        case "ring":
            // Check if the left ring slot is empty, then equip it there
            if (equippedItems.leftRing === null) {
                equippedItems.leftRing = item;
            }
            // Check if the right ring slot is empty, then equip it there
            else if (equippedItems.rightRing === null) {
                equippedItems.rightRing = item;
            } else {
                // Compare stats of the currently equipped ring with the new ring
                const currentRing = equippedItems.rightRing;
                const newItemStats = item.stats;
                const currentRingStats = currentRing.stats;
            
                // Calculate the total stats for the new and current rings
                const newTotalStats = newItemStats.reduce((total, stat) => total + stat.value, 0);
                const currentTotalStats = currentRingStats.reduce((total, stat) => total + stat.value, 0);
            
                // Compare total stats and equip the item with the better total stats
                if (newTotalStats > currentTotalStats) {
                    // Equip the new ring if it has better total stats
                    equippedItems.rightRing = item;
                }
            }
            break;
            case "weapon":
                if (equippedItems.weapon === null) {
                    equippedItems.weapon = item;
                } else {
                    // Compare stats of the currently equipped weapon with the new weapon
                    const currentWeapon = equippedItems.weapon;
                    const newItemStats = item.stats;
                    const currentWeaponStats = currentWeapon.stats;
            
                    // Calculate the total stats for the new and current weapons
                    const newTotalStats = newItemStats.reduce((total, stat) => total + stat.value, 0);
                    const currentTotalStats = currentWeaponStats.reduce((total, stat) => total + stat.value, 0);
            
                    // Compare total stats and equip the item with the better total stats
                    if (newTotalStats > currentTotalStats) {
                        // Equip the new weapon if it has better total stats
                        equippedItems.weapon = item;
                    }
                }
                break;
        case "shield":
            equippedItems.shield = item;
            break;
        default:
            // Handle other types of items
            break;
    }

    // Update player stats after equipping the item
    updatePlayerStats();
}
