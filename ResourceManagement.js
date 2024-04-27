import { player, updateUI } from './Player.js';
import { EnvironmentManager } from './EnvironmentManager.js';

export class ResourceManager {
  constructor(environmentManager) {
    this.environmentManager = environmentManager;
    this.player = player;
  }

  updatePlayerStats() {
    // Apply environmental effects on player stats
    const { playerEffects } = this.environmentManager.currentEnvironment;
    Object.entries(playerEffects).forEach(([effect, value]) => {
      if (value === true) {
        this.applyEnvironmentalEffect(effect);
      }
    });

    // Update player stats in the UI
    updateUI();
  }

  updateEquipmentDisplay() {
    // Update the equipment display logic
    console.log('Updating equipment display...');
    // Add your equipment display logic here
  }

  updateInventoryDisplay() {
    // Assuming you have a way to access the inventory and an element to display it
    const inventoryElement = document.getElementById('inventory');
    inventoryElement.innerHTML = '';

    // Clear existing inventory display
    Object.keys(this.player.inventory).forEach(item => {
      let itemElement = document.createElement('div');
      itemElement.textContent = `${item}: ${this.player.inventory[item]}`;
      inventoryElement.appendChild(itemElement);
    });

    console.log('Inventory display updated');
  }

  regenerateResources() {
    // Environmental effects on resource regeneration
    const { playerEffects } = this.environmentManager.currentEnvironment;
    let healthRegen = 10;
    let manaRegen = 5;
    let staminaRegen = 5;

    if (playerEffects.staminaPreservation) {
      staminaRegen *= 1.5; // 50% increased stamina regeneration
    }

    if (playerEffects.energyBoost) {
      manaRegen *= 2; // 100% increased mana regeneration
    }

    // Resource regeneration logic
    this.player.health = Math.min(this.player.health + healthRegen, 100); // Assuming 100 is the max health
    this.player.mana = Math.min(this.player.mana + manaRegen, 50); // Assuming 50 is the max mana
    this.player.stamina = Math.min(this.player.stamina + staminaRegen, 50); // Assuming 50 is the max stamina

    // Call update function to reflect these changes in the UI
    updateUI();
  }

  applyEnvironmentalEffect(effect) {
    // Apply environmental effects on player stats
    switch (effect) {
      case 'healthDegeneration':
        this.player.health = Math.max(this.player.health - 5, 0); // Reduce health by 5 (adjust as needed)
        break;
      case 'severeHealthDegradation':
        this.player.health = Math.max(this.player.health - 10, 0); // Reduce health by 10 (adjust as needed)
        break;
      case 'instantHealthDegradation':
        this.player.health = Math.max(this.player.health - 25, 0); // Reduce health by 25 (adjust as needed)
        break;
      case 'dexterityDecrease':
        this.player.dexterity *= 0.8; // Reduce dexterity by 20% (adjust as needed)
        break;
      case 'slowMovement':
        this.player.movementSpeed *= 0.5; // Reduce movement speed by 50% (adjust as needed)
        break;
      case 'staminaDrain':
        this.player.stamina = Math.max(this.player.stamina - 2, 0); // Reduce stamina by 2 (adjust as needed)
        break;
      case 'overheatRisk':
        this.player.health = Math.max(this.player.health - 2, 0); // Reduce health by 2 (adjust as needed)
        break;
      case 'equipmentRapidAging':
        this.player.equipment.forEach(item => {
          item.durability -= 10; // Reduce equipment durability by 10 (adjust as needed)
        });
        break;
      // Add more cases for other environmental effects
    }
  }

  startResourceRegeneration() {
    setInterval(() => {
      this.regenerateResources();
    }, 1000); // Adjust interval as needed (1 second in this example)
  }
}

// Example usage
const environmentManager = new EnvironmentManager(/* pass scene and map objects */);
const resourceManager = new ResourceManager(environmentManager);

// Start resource regeneration
resourceManager.startResourceRegeneration();