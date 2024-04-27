class EnvironmentalUtilities {
    /**
     * Prompts the player to equip protective gear or find shelter to mitigate environmental effects.
     * This function now considers multiple solutions including finding natural shelters or using environment-specific utilities.
     */
    static requireProtectiveGear(item, alternatives) {
        console.log(`Equip ${item} or use one of the following alternatives to mitigate environmental effects: ${alternatives.join(', ')}.`);
    }

    /**
     * Inflicts damage on exposed items with options for players to take preventive actions such as applying protective coatings or using repair kits.
     */
    static damageExposedItems(material, severity, preventiveMeasures) {
        console.log(`Exposure to environment causing ${severity} damage to ${material} items. Consider using: ${preventiveMeasures.join(', ')} to protect your gear.`);
    }

    /**
     * Enhances the appearance rates of minerals and offers players tips on how to efficiently gather them, including using specialized tools or abilities.
     */
    static boostMineralAppearance(mineralType, increasePercentage, gatheringTips) {
        console.log(`Increase in ${mineralType} appearance by ${increasePercentage}%. Use ${gatheringTips.join(', ')} for efficient collection.`);
    }

    /**
     * Alters the game map dynamically in response to environmental changes and suggests ways players can navigate or utilize the new terrain.
     */
    static alterGameMap(action1, action2, navigationTips) {
        console.log(`Terrain changes: ${action1} and ${action2}. Navigate effectively by ${navigationTips.join(', ')}.`);
    }

    // Example of an additional utility method:
    /**
     * Adapt to severe weather conditions by implementing engineering projects or temporary shelters.
     */
    static implementEngineeringSolutions(solutionOptions) {
        console.log(`Implement one of these engineering solutions to adapt: ${solutionOptions.join(', ')}.`);
    }
}

export { EnvironmentalUtilities };