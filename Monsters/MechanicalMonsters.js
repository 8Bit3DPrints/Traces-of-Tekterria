import { Monster } from './MonsterBase.js';

export class MechanicalMonster extends Monster {
    constructor(name, level, maxHp, attack, defense, abilities, lootTable, xpValue) {
        super(name, level, maxHp, attack, defense, abilities, lootTable, xpValue);
        // Add common mechanical loot
        this.lootTable['nuts and bolts'] = 0.2;
        this.lootTable['small gears'] = 0.15;
    }

    // Additional methods specific to mechanical monsters can go here
}