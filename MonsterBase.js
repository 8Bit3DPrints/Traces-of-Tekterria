export class Monster {
    constructor({
        name, level, maxHp, attack, defense, abilities, lootTable, xpValue,
        environmentAffinity, appearanceConditions, strengths, weaknesses,
        visibility, behaviorPatterns, environmentalImpact, traits
    }) {
        // Initialize monster properties
        this.name = name;
        this.level = level;
        this.maxHp = maxHp;
        this.currentHp = maxHp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities; // Abilities for combat and interactions
        this.lootTable = lootTable; // Potential loot drop configuration
        this.xpValue = xpValue; // XP provided to player on defeat
        this.environmentAffinity = environmentAffinity; // Preferred environments
        this.appearanceConditions = appearanceConditions; // Conditions influencing appearance
        this.strengths = strengths; // Defensive strengths
        this.weaknesses = weaknesses; // Susceptibilities
        this.visibility = visibility; // Factors affecting visibility
        this.behaviorPatterns = behaviorPatterns; // Defines behavioral responses
        this.environmentalImpact = environmentalImpact; // Environmental effects on stats
        this.traits = traits; // Unique traits affecting various interactions
    }

    /**
     * Attacks the player, adjusting the attack based on environment and monster's current health.
     */
    attackPlayer(player, environment) {
        const adjustedStats = this.adjustStatsForEnvironment(environment);
        const damage = Math.max(adjustedStats.attack - player.defense, 0);
        player.health -= damage;
        this.applyStatusEffects(player); // Potential status effects application
        this.performAbility(player); // Execute a random ability if conditions are met
    }

    /**
     * Chooses and executes an ability based on the monster's and player's state and proximity.
     */
    performAbility(player) {
        if (this.abilities.length > 0 && Math.random() < 0.5) {
            const ability = this.abilities[Math.floor(Math.random() * this.abilities.length)];
            if (player.distance <= ability.range) {
                ability.execute(this, player);
            }
        }
    }

    /**
     * Adapts monster's stats according to the current environmental conditions.
     */
    adjustStatsForEnvironment(environment) {
        const effects = this.environmentalImpact[environment] || {};
        return {
            attack: this.attack * (effects.attackModifier || 1),
            defense: this.defense * (effects.defenseModifier || 1),
            speed: this.speed * (effects.speedModifier || 1)
        };
    }

    /**
     * Determines visibility based on weather and terrain, affected by monster's camouflage abilities.
     */
    isVisible(weatherCondition, terrainType) {
        return this.visibility.some(condition => condition.weather === weatherCondition && condition.terrain.includes(terrainType));
    }

    /**
     * Adjusts health according to the monster's strengths and weaknesses in relation to player's attack type.
     */
    evaluateStrengthsAndWeaknesses(playerAttackType, environment) {
        if (this.weaknesses.includes(playerAttackType) || this.environmentalWeaknesses.includes(environment)) {
            this.currentHp -= 15;
        } else if (this.strengths.includes(playerAttackType) || this.environmentalStrengths.includes(environment)) {
            this.currentHp += 10;
        }
    }

    /**
     * Handles different types of interactions with the player, modifying behaviors and stats dynamically.
     */
    reactToPlayerInteraction(interactionType, player) {
        switch (interactionType) {
            case 'chase': this.handleChase(); break;
            case 'feed': this.handleFeed(); break;
            case 'taunt': this.handleTaunt(); break;
            case 'observe': this.handleObserve(); break;
            case 'heal': this.handleHeal(); break;
            case 'capture': this.handleCapture(); break;
            case 'play': this.handlePlay(); break;
            case 'command': this.handleCommand(); break;
            default: console.error('Unrecognized interaction type:', interactionType); break;
        }
    }

// Handling when a monster is chased by the player
handleChase() {
    if (this.behaviorPatterns.includes('evasive')) {
        this.speed *= (this.traits.includes('nimble') ? 1.2 : 1.1);
        this.aggression += (this.traits.includes('timid') ? 5 : 10);
    } else if (this.traits.includes('aggressive')) {
        this.attack *= 1.1;
    }
}

// Handling when a monster is fed by the player
handleFeed() {
    if (this.behaviorPatterns.includes('hungry') && !this.traits.includes('carnivorous')) {
        this.health += 10;
        this.trust += (this.traits.includes('timid') ? 20 : 5);
    } else if (this.traits.includes('carnivorous')) {
        this.aggression += 15;
    }
}

// Handling when a monster is taunted by the player
handleTaunt() {
    if (this.traits.includes('stoic')) {
        this.defense *= 1.1;
    } else if (this.behaviorPatterns.includes('aggressive')) {
        this.attack *= 1.2;
        this.defense *= 0.9;
    } else {
        this.stress += 10;
    }
}

// Handling when a monster is observed by the player
handleObserve() {
    if (this.traits.includes('stealthy')) {
        this.stealth += 20;
    } else if (this.behaviorPatterns.includes('curious')) {
        this.trust += 5;
    }
}

// Handling when a monster is healed by the player
handleHeal() {
    if (this.behaviorPatterns.includes('recovering') && this.traits.includes('docile')) {
        this.health += 30;
        this.trust += 30;
    }
}

// Handling when a monster is attempted to be captured by the player
handleCapture() {
    if (this.behaviorPatterns.includes('wild')) {
        this.aggression += 30;
    } else if (this.traits.includes('docile')) {
        this.stress += 20;
    }
}

// Handling when a monster is played with by the player
handlePlay() {
    if (this.traits.includes('playful')) {
        this.happiness += 20;
        this.aggression -= 10;
    } else if (this.traits.includes('loner')) {
        this.stress += 10;
    }
}

// Handling when a monster is commanded by the player
handleCommand() {
    if (this.traits.includes('submissive')) {
        this.obedience += 15;
    } else if (this.traits.includes('independent')) {
        this.stress += 15;
    }
}

}
