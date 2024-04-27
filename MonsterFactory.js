import { MechanicalMonster } from './MechanicalMonsters.js';
import { BiologicalMonster } from './BiologicalMonsters.js';
import { HybridMonster } from './HybridMonsters.js';

export function spawnMonster(type) {
    switch (type) {
        case 'mechanical':
            return new MechanicalMonster("Rogue Robot", 2, 25, 8, 6, [], {"defective battery": 0.2}, 100);
        case 'biological':
            return new BiologicalMonster("Radioactive Ghoul", 15, 120, 15, 10, [], {"ghoul flesh": 0.3}, 300);
        case 'hybrid':
            return new HybridMonster("Cybernetic Vampire", 20, 150, 20, 15, [], {}, 400);
        default:
            throw new Error('Unknown monster type');
    }
}
