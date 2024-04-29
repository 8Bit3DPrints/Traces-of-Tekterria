export class CraftingBase {
    constructor() {
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

    gatherMaterials(materialName, quantity, environment) {
        const material = this.materials.find(material => material.name === materialName);
        const environmentalEffect = this.adjustForEnvironment(environment, materialName);
        const actualQuantity = quantity * environmentalEffect.gatheringMultiplier;
        if (material) {
            material.quantity += actualQuantity;
            console.log(`Gathered ${actualQuantity} units of ${materialName} in ${environment} environment.`);
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
    adjustForEnvironment(environment, recipeName) {
        const effects = this.environmentFactors[environment] || {};
        const tempAdjustments = {
            successRateAdjustment: effects.successRate || 1,
            timeAdjustment: effects.craftingTimeMultiplier || 1,
            qualityAdjustment: effects.qualityModifiers ? (effects.qualityModifiers[recipeName] || 1) : 1
        };

        // Adding negative outcomes based on environment
        if (effects.harshConditions && Math.random() < 0.1) {  // Assuming a 10% chance of harsh conditions affecting crafting
            tempAdjustments.successRateAdjustment *= 0.5; // Halving the success rate due to harsh conditions
            console.log("Harsh environmental conditions have made crafting more difficult.");
        }

        return tempAdjustments;
    }

    // Modifying the craftItem to include potential failures
    craftItem(recipeName, environment) {
        const recipe = this.recipes.find(recipe => recipe.name === recipeName);
        if (!recipe) {
            this.logError(`Unknown recipe: ${recipeName}`);
            return;
        }
        const envEffects = this.adjustForEnvironment(environment, recipeName);

        if (Math.random() > envEffects.successRateAdjustment) { // Crafting may fail based on adjusted success rate
            this.logError(`Failed to craft ${recipeName} due to environmental factors.`);
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
    applyEnvironmentalEffects(itemName, environment) {
        const qualityModifiers = this.environmentFactors[environment]?.qualityModifiers || {};
        const qualityBonus = qualityModifiers[itemName] || 0;
        console.log(`Crafted ${itemName} with a quality bonus of ${qualityBonus} in the ${environment} environment.`);
    }

    // Method to handle the player's learning curve in crafting as they become more proficient
    improveCraftingSkills(recipe) {
        if (Math.random() < 0.05) {  // Assume there's a 5% chance to learn something new each time
            this.playerSkills.craftingLevel += 0.1;
            console.log(`New crafting skills learned! New level: ${this.playerSkills.craftingLevel.toFixed(1)}`);
        }
    }
}