import { MechanicalMonster } from './MechanicalMonsters.js';
import { BiologicalMonster } from './BiologicalMonsters.js';

export class HybridMonster extends Monster {
    constructor(name, level, maxHp, attack, defense, abilities, lootTable, xpValue) {
        super(name, level, maxHp, attack, defense, abilities, lootTable, xpValue);
        // Combine loot from both types
        this.lootTable = {...lootTable, ...this.combineLoot()};
    }

    combineLoot() {
        // Example: Combining loot mechanics from both biological and mechanical
        return {
            'nuts and bolts': 0.1,
            'small gears': 0.1,
            'organic material': 0.2,
            'mutated tissue': 0.2
        };
    }

    // Hybrid-specific abilities can be added here
    adaptability() {
        // Ability that allows changing defense or attack based on the player's actions
    }
}
