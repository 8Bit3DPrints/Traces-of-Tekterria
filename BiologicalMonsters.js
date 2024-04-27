import { Monster } from './MonsterBase.js';

export class BiologicalMonster extends Monster {
    constructor(name, level, maxHp, attack, defense, abilities, lootTable, xpValue) {
        super(name, level, maxHp, attack, defense, abilities, lootTable, xpValue);
        // Add common biological loot
        this.lootTable['organic material'] = 0.25;
        this.lootTable['mutated tissue'] = 0.15;
    }

    // Additional biological-specific methods can be added here
    regenerate() {
        // Biological monsters might regenerate health over time
        this.currentHp += 5;
    }
}
