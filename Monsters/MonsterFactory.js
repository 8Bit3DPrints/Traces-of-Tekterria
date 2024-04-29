import fs from 'fs';
import { MechanicalMonster } from './MechanicalMonsters.js';
import { BiologicalMonster } from './BiologicalMonsters.js';
import { HybridMonster } from './HybridMonsters.js';
import { MiniBoss } from './MiniBosses.js';
import { MainBoss } from './MainBosses.js';

class MonsterFactory {
    // Load monsters from specified JSON file
    static loadMonstersFromJSON(filePath) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileData);
        return data.monsters.map(monsterData => this.createMonster(monsterData));
    }

    // Create a monster instance based on type
    static createMonster(monsterData) {
        switch (monsterData.type) {
            case 'mechanical':
                return new MechanicalMonster(monsterData);
            case 'biological':
                return new BiologicalMonster(monsterData);
            case 'hybrid':
                return new HybridMonster(monsterData);
            case 'mini-boss':
                return new MiniBoss(monsterData);
            case 'main-boss':
                return new MainBoss(monsterData);
            default:
                throw new Error('Unknown monster type');
        }
    }
}

export default MonsterFactory;