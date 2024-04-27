// MonsterBase.js
export class Monster {
    constructor({
        name, level, maxHp, attack, defense, abilities, lootTable, xpValue,
        environmentAffinity, appearanceConditions, strengths, weaknesses,
        visibility, behaviorPatterns, environmentalImpact, traits
    }) {
        this.name = name;
        this.level = level;
        this.maxHp = maxHp;
        this.currentHp = maxHp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.lootTable = lootTable;
        this.xpValue = xpValue;
        this.environmentAffinity = environmentAffinity;
        this.appearanceConditions = appearanceConditions;
        this.strengths = strengths;
        this.weaknesses = weaknesses;
        this.visibility = visibility;
        this.behaviorPatterns = behaviorPatterns;
        this.environmentalImpact = environmentalImpact;
        this.traits = traits;
    }

    // Attacks the player, considering environment and monster health.
    attackPlayer(player, environment) {
        const adjustedStats = this.adjustStatsForEnvironment(environment);
        const damage = Math.max(adjustedStats.attack - player.defense, 0);
        player.health -= damage;
        this.applyStatusEffects(player);
        this.performAbility(player);
    }

    // Chooses and executes an ability if conditions are met.
    performAbility(player) {
        if (this.abilities.length > 0 && Math.random() < 0.5) {
            const ability = this.abilities[Math.floor(Math.random() * this.abilities.length)];
            if (player.distance <= ability.range && ability.cooldown === 0) {
                ability.execute(this, player);
                ability.cooldown = ability.maxCooldown; // Resets cooldown
            }
        }
    }

    // Adapts monster's stats based on current environmental conditions.
    adjustStatsForEnvironment(environment) {
        const effects = this.environmentalImpact[environment] || {};
        return {
            attack: this.attack * (effects.attackModifier || 1),
            defense: this.defense * (effects.defenseModifier || 1),
            speed: this.speed * (effects.speedModifier || 1)
        };
    }

    // Determines visibility based on weather, terrain, and monster's camouflage abilities.
    isVisible(weatherCondition, terrainType) {
        return this.visibility.some(condition => condition.weather === weatherCondition && condition.terrain.includes(terrainType));
    }

    // Adjusts health based on strengths and weaknesses in relation to player's attack type and environment.
    evaluateStrengthsAndWeaknesses(playerAttackType, environment) {
        if (this.weaknesses.includes(playerAttackType) || this.environmentalWeaknesses.includes(environment)) {
            this.currentHp -= 15;
        } else if (this.strengths.includes(playerAttackType) || this.environmentalStrengths.includes(environment)) {
            this.currentHp += 10;
        }
    }

    // Handles dynamic interactions with the player, modifying behaviors and stats.
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

    // Adds logic for different types of player interactions.
    handleChase() {
        // Adjust speed and aggression based on traits, and include more variables like alertness and endurance.
        if (this.behaviorPatterns.includes('evasive')) {
            this.speed *= (this.traits.includes('nimble') ? 1.2 : 1.1);
            this.aggression += (this.traits.includes('timid') ? 5 : 10);
            this.alertness += 10; // Increased alertness during a chase
            this.endurance += (this.traits.includes('stamina') ? 20 : 10); // Impact on endurance
            this.stress += 5; // Slight increase in stress during evasion
        } else if (this.traits.includes('aggressive')) {
            this.attack *= 1.1;
            this.aggression += 20; // Greater increase in aggression
            this.stress += 10; // Increased stress when aggressively responding
            this.alertness -= 5; // Decrease in alertness as focus is on aggression
            this.endurance -= 10; // Decrease in endurance due to aggressive behavior
        }
    }

    handleFeed() {
        // Adjust health and trust based on dietary preferences, and add factors like satisfaction, energy, and digestion.
        if (this.behaviorPatterns.includes('hungry') && !this.traits.includes('carnivorous')) {
            this.health += 10;
            this.trust += (this.traits.includes('timid') ? 20 : 5);
            this.satisfaction += 15; // Increase satisfaction from feeding
            this.energy += 10; // Gain energy from eating
            this.digestion = this.traits.includes('herbivore') ? 'easy' : 'hard'; // Digestive ease based on diet
        } else if (this.traits.includes('carnivorous')) {
            this.aggression += 15;
            this.satisfaction -= 10; // Decreased satisfaction when not fed meat
            this.energy -= 5; // Loss of energy
            this.trust -= 10; // Decrease in trust
            this.digestion = 'hard'; // Digestion is hard if not fed appropriately
        }
    }

    handleTaunt() {
        // Adjust defense, stress, confidence, alertness, and focus based on personality traits.
        if (this.traits.includes('stoic')) {
            this.defense *= 1.1;
            this.stress -= 5; // Reduced stress due to stoic nature
            this.confidence += 10; // Increased confidence
            this.alertness += 5; // Increased alertness
            this.focus += 10; // Increased focus
        } else if (this.behaviorPatterns.includes('aggressive')) {
            this.attack *= 1.2;
            this.defense *= 0.9;
            this.stress += 20; // Increased stress due to aggression
            this.confidence -= 5; // Decreased confidence
            this.alertness += 10; // Increased alertness in aggressive state
        } else {
            this.stress += 10;
            this.confidence -= 10; // Decreased confidence when taunted
            this.alertness -= 5; // Reduced alertness
            this.focus -= 10; // Loss of focus
        }
    }

    handleObserve() {
        // Adjust stealth, trust, curiosity, learning, and visibility based on the monster's curiosity and stealth traits.
        if (this.traits.includes('stealthy')) {
            this.stealth += 20;
            this.visibility -= 20; // Reduced visibility due to increased stealth
            this.learning += 10; // Learning from observation
            this.curiosity -= 5; // Slight reduction in curiosity after observing
            this.trust += 2; // Slight increase in trust from non-threatening observation
        } else if (this.behaviorPatterns.includes('curious')) {
            this.trust += 5;
            this.curiosity += 15; // Increased curiosity
            this.learning += 15; // Enhanced learning from observation
            this.visibility += 10; // Increased visibility due to curious behavior
            this.stealth -= 10; // Reduced stealth
        }
    }

    handleHeal() {
        // Increase health, trust, comfort, recovery speed, and well-being if monster is recovering and docile.
        if (this.behaviorPatterns.includes('recovering') && this.traits.includes('docile')) {
            this.health += 30;
            this.trust += 30;
            this.comfort += 20; // Increased comfort from healing
            this.recoverySpeed += 15; // Enhanced recovery speed
            this.wellBeing += 25; // Overall improvement in well-being
        }
    }

    handleCapture() {
        // Adjust aggression, stress, fear, control, and predictability based on the monster's wildness or docility.
        if (this.behaviorPatterns.includes('wild')) {
            this.aggression += 30;
            this.stress += 15;
            this.fear += 20; // Increased fear during capture attempts
            this.control -= 20; // Loss of control feeling
            this.predictability -= 10; // Decrease in predictability
        } else if (this.traits.includes('docile')) {
            this.stress += 20;
            this.fear += 10; // Slight increase in fear
            this.control += 5; // Slight gain in control due to docile nature
            this.predictability += 15; // Increased predictability in behavior
            this.aggression -= 10; // Decrease in aggression
        }
    }

    handlePlay() {
        // Adjust happiness, aggression, sociability, energy, and playfulness based on the monster's traits.
        if (this.traits.includes('playful')) {
            this.happiness += 20;
            this.aggression -= 10;
            this.sociability += 15; // Increase in sociability
            this.energy += 10; // Energy boost from playing
            this.playfulness += 20; // Enhancement in playfulness
        } else if (this.traits.includes('loner')) {
            this.stress += 10;
            this.sociability -= 20; // Decrease in sociability
            this.energy -= 5; // Loss of energy
            this.playfulness -= 10; // Reduction in playfulness
            this.happiness -= 5; // Slight decrease in happiness
        }
    }

    handleCommand() {
        // Adjust obedience, stress, independence, respect, and cooperation based on the monster's traits.
        if (this.traits.includes('submissive')) {
            this.obedience += 15;
            this.stress -= 10; // Reduced stress due to submissive nature
            this.independence -= 5; // Decrease in independence
            this.respect += 20; // Increased respect for the handler
            this.cooperation += 15; // Increased cooperation
        } else if (this.traits.includes('independent')) {
            this.stress += 15;
            this.independence += 10; // Increased independence
            this.respect -= 10; // Decreased respect due to resistance to commands
            this.cooperation -= 15; // Reduced cooperation
            this.obedience -= 10; // Decreased obedience
        }
    }
}