import { EnvironmentBase } from './EnvironmentBase.js';

export class CraftingBase extends EnvironmentBase {
    constructor() {
        super();
        this.materials = [];
        this.recipes = [];
        this.inventory = [];
        this.craftingQueue = [];
        this.playerSkills = {
            craftingLevel: 1,
            craftingSpeed: 1,
            craftingXP: 0,
        };
        this.environmentFactors = {};
    }

    gatherMaterials(materialName, quantity) {
        const environment = this.currentEnvironment.location; // Assuming environment is determined by location
        const material = this.materials.find(material => material.name === materialName);
        const environmentalEffect = this.adjustForEnvironment(materialName);
        const actualQuantity = quantity * environmentalEffect.gatheringMultiplier;
        if (material) {
            material.quantity += actualQuantity;
            console.log(`Gathered ${actualQuantity} units of ${materialName} under ${environment} conditions.`);
        } else {
            this.logError(`Unknown material: ${materialName}`);
        }
    }

    // Adjust addItemToInventory to handle item quality
    addItemToInventory(itemName, quantity, quality) {
        const item = this.inventory.find(item => item.name === itemName);
        if (item) {
            item.quantity += quantity;
            item.quality = quality;
        } else {
            this.inventory.push({ name: itemName, quantity, quality });
        }
        console.log(`Added ${quantity} ${itemName} of quality ${quality} to inventory.`);
    }

    // Enhanced method to handle environmental effects more dynamically
    adjustForEnvironment(itemName) {
        const { weather, timeOfDay, specialEvents } = this.currentEnvironment;
        let effects = this.environmentFactors[weather] || {};
        effects = {...effects, ...(this.environmentFactors[timeOfDay] || {})};

        specialEvents.forEach(event => {
            effects = {...effects, ...(this.environmentFactors[event] || {})};
        });

        return {
            gatheringMultiplier: effects.gatheringMultiplier || 1,
            successRateAdjustment: effects.successRate || 1,
            timeAdjustment: effects.timeMultiplier || 1,
            qualityAdjustment: effects.qualityModifiers ? (effects.qualityModifiers[itemName] || 1) : 1
        };
    }

    // Modifying the craftItem to include potential failures
    craftItem(recipeName) {
        const environment = this.currentEnvironment.location;
        const recipe = this.recipes.find(recipe => recipe.name === recipeName);
        if (!recipe) {
            this.logError(`Unknown recipe: ${recipeName}`);
            return;
        }
        const envEffects = this.adjustForEnvironment(recipeName);

        if (Math.random() > envEffects.successRateAdjustment) {
            this.logError(`Failed to craft ${recipeName} due to challenging ${environment} conditions.`);
            return;
        }

        if (!this.checkMaterials(recipe.materials)) {
            this.logError(`Not enough materials to craft ${recipeName}`);
            return;
        }

        this.consumeMaterials(recipe.materials);
        this.craftSuccess(recipe.result, recipe.craftingTime * envEffects.timeAdjustment, envEffects.qualityAdjustment);
    }

    checkMaterials(materials) {
        return materials.every(material => this.hasMaterial(material.name, material.quantity));
    }

    consumeMaterials(materials) {
        materials.forEach(material => {
            this.useMaterial(material.name, material.quantity);
        });
    }

    // Adjust craftSuccess to handle quality variations
    craftSuccess(itemName, adjustedCraftingTime, qualityAdjustment) {
        this.addItemToInventory(itemName, 1, qualityAdjustment);
        this.playerSkills.craftingLevel += 0.1;
        this.playerSkills.craftingXP += 10;
        console.log(`Crafted ${itemName} in ${adjustedCraftingTime} minutes with quality factor ${qualityAdjustment}.`);
    }

    // Method to handle environment changes dynamically
    updateEnvironmentFactors(newFactors) {
        this.environmentFactors = { ...this.environmentFactors, ...newFactors };
        console.log(`Environment factors updated: ${JSON.stringify(newFactors)}`);
    }

    // Method to simulate crafting events triggered by specific player actions or conditions
    triggerCraftingEvent(eventType, parameters) {
        switch (eventType) {
            case 'resourceScarcity':
                this.handleResourceScarcity(parameters.resource);
                break;
            case 'innovationBoost':
                this.handleInnovationBoost(parameters.recipeName);
                break;
            case 'environmentalDiscovery':
                this.updateEnvironmentFactors(parameters.newFactors);
                break;
            default:
                console.log(`Unknown crafting event type: ${eventType}`);
                break;
        }
    }

    // Reduces available materials in response to a scarcity event
    handleResourceScarcity(resource) {
        const material = this.materials.find(mat => mat.name === resource);
        if (material && material.quantity > 0) {
            material.quantity *= 0.5;  // Example: Reduces the quantity by 50%
            console.log(`Resource scarcity has affected ${resource}. Remaining quantity: ${material.quantity}`);
        }
    }

    // Temporarily boosts crafting success rates or decreases time for specific recipes
    handleInnovationBoost(recipeName) {
        const recipe = this.recipes.find(rec => rec.name === recipeName);
        if (recipe) {
            // Example modification: decrease crafting time or increase success rate temporarily
            recipe.craftingTime *= 0.8;  // 20% faster crafting as an example
            console.log(`Innovation boost applied to ${recipeName}. New crafting time: ${recipe.craftingTime} minutes`);
        }
    }

    // Method to simulate the effect of the environment on crafting quality
    applyEnvironmentalEffects() {
        // Override this method to apply crafting-specific environmental effects
        console.log(`Applying environmental effects based on current conditions: ${JSON.stringify(this.currentEnvironment)}`);
    }

    // Method to handle the player's learning curve in crafting as they become more proficient
    improveCraftingSkills(recipe) {
        if (Math.random() < 0.05) {  // Assume there's a 5% chance to learn something new each time
            this.playerSkills.craftingLevel += 0.1;
            console.log(`New crafting skills learned! New level: ${this.playerSkills.craftingLevel.toFixed(1)}`);
        }
    }
}