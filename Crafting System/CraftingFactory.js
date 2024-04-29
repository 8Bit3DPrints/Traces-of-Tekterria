import { CraftingBase } from './CraftingBase.js';
import { SimpleGadget, AdvancedWeapon, HighTechArmor } from './CraftingItems';

export class CraftingFactory {
    static createItem(itemType, player) {
        switch (itemType) {
            case 'SimpleGadget':
                return new SimpleGadget(player);
            case 'AdvancedWeapon':
                return new AdvancedWeapon(player);
            case 'HighTechArmor':
                return new HighTechArmor(player);
            default:
                throw new Error('Unknown item type');
        }
    }
}