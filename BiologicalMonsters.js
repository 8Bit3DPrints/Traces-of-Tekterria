import { Monster } from './MonsterBase.js';

export class SylvanSprout extends Monster {
    constructor(config) {
        super(config); // Initialize all config attributes
    }

    handleChase() {
        if (this.traits.includes("evasive")) {
            this.speed *= 1.2;
            this.stress += 20; // Increases stress significantly when chased
        } else {
            this.aggression += 10; // Increases aggression if not evasive
            this.stress += 10;
        }
    }

    handleFeed(foodType) {
        if (foodType === "meat" && this.traits.includes("photosynthetic")) {
            this.health -= 5; // Takes damage from inappropriate food
            this.trust -= 10; // Loses trust
            this.aggression += 5; // Becomes slightly aggressive
        } else if (foodType === "plant" && this.traits.includes("photosynthetic")) {
            this.health += 10; // Gains health from proper nutrition
            this.trust += 10; // Gains trust
            this.satisfaction += 20; // Feels highly satisfied
        }
    }

    handleTaunt() {
        if (this.traits.includes("stoic")) {
            this.defense *= 1.1; // Stoic nature boosts defense
            this.stress -= 10; // Lowers stress due to stoic trait
        } else {
            this.aggression += 5; // Increases aggression if taunted
            this.stress += 15; // Increases stress significantly
        }
    }

    handleObserve() {
        if (this.traits.includes("camouflaging") && this.visibility.some(v => v.weather === "misty")) {
            this.stealth += 20; // Increases stealth in misty conditions
            this.curiosity -= 10; // Decreases curiosity, more focused on hiding
        } else {
            this.curiosity += 20; // Increases curiosity if not camouflaging
            this.trust += 5; // Slightly increases trust when observed calmly
        }
    }

    handleHeal(amount) {
        if (this.traits.includes("regenerative")) {
            this.currentHp += amount;
            this.comfort += 10; // Feels comfort from healing in natural habitat
        } else {
            this.stress += 10; // Stress increases if healing is ineffective
            this.comfort -= 5; // Comfort decreases due to ineffective healing
        }
    }

    handleCapture() {
        if (this.traits.includes("photosynthetic") && this.strengths.includes("high regeneration")) {
            this.stress += 30; // High stress from capture attempt
            this.fear += 20; // High fear
        } else {
            this.aggression += 15; // Increases aggression as a defensive mechanism
            this.control -= 10; // Feels a loss of control
        }
    }

    handlePlay() {
        if (this.traits.includes("playful")) {
            this.happiness += 30;
            this.energy += 10; // Boosts energy from enjoyable play
        } else {
            this.stress += 15; // Increases stress if play is unwelcome
            this.energy -= 5; // Decreases energy from unwelcome play
        }
    }

    handleCommand(command) {
        if (command === "stay" && this.traits.includes("submissive")) {
            this.obedience += 20; // High obedience to the stay command
            this.respect += 10; // Gains respect from following commands
        } else {
            this.obedience -= 10; // Low obedience if not submissive
            this.stress += 20; // Stress increases from command resistance
        }
    }
}

export class MudlingGrub extends Monster {
    constructor(config) {
        super(config);
    }

    handleFeed(foodType) {
        if (foodType === "organic matter" && this.environmentAffinity.includes("Swamp")) {
            this.health += 10;
            this.trust += 10;
            this.satisfaction += 20;
        } else {
            this.health -= 10;
            this.trust -= 20;
            this.aggression += 10; // Reacts negatively to unsuitable food
        }
    }

    handleChase() {
        if (this.traits.includes("camouflaging")) {
            this.speed *= 0.8; // Slows down but increases camouflage
            this.stress += 30; // High stress from being chased
        } else {
            this.aggression += 20; // Increases aggression if unable to camouflage
            this.stress += 15;
        }
    }

    handleTaunt() {
        if (this.traits.includes("amphibious")) {
            this.defense *= 1.1; // Improves defense thanks to amphibious resilience
            this.stress -= 10; // Reduces stress due to its calm nature
        } else {
            this.aggression += 25; // Significantly increases aggression when taunted
            this.stress += 25; // Also significantly increases stress
            if (this.environmentAffinity.includes("Swamp")) {
                this.speed *= 0.9; // Slightly reduces speed as it prepares to defend itself
            }
        }
    }

    handleObserve() {
        if (this.visibility.some(v => v.weather === "rainy")) {
            this.stealth += 25; // Enhances stealth in its favored condition
            this.curiosity -= 5;
        } else {
            this.curiosity += 15;
            this.trust -= 5; // Slightly distrustful when observed in less ideal conditions
        }
    }

    handleHeal(amount) {
        if (this.traits.includes("regenerative")) {
            this.currentHp += amount;
            this.comfort += 20;
        } else {
            this.stress += 20; // High stress if unable to regenerate effectively
            this.comfort -= 10;
        }
    }

    handleCapture() {
        this.fear += 30; // Very high fear response
        this.stress += 25;
        if (this.traits.includes("regenerative")) {
            this.aggression -= 10; // Slightly less aggressive due to its regenerative confidence
        } else {
            this.aggression += 20;
        }
    }

    handlePlay() {
        if (this.traits.includes("amphibious")) {
            this.happiness += 15; // Enjoys playing in moist conditions
            this.energy += 10;
        } else {
            this.stress += 25; // High stress from inappropriate play
            this.energy -= 10;
        }
    }

    handleCommand(command) {
        if (command === "hide" && this.traits.includes("camouflaging")) {
            this.obedience += 25;
            this.respect += 15;
        } else {
            this.obedience -= 15;
            this.stress += 25;
        }
    }
}

export class WastelandWanderer extends Monster {
    constructor(config) {
        super(config);
    }
    
    handleFeed(foodType) {
        if (foodType === "canned food") {
            this.health += 20;
            this.trust += 20;
            this.satisfaction += 30;
        } else {
            this.health -= 10;
            this.trust -= 10;
            this.aggression += 10; // Reacts negatively to non-preferred food
        }
    }

    handleChase() {
        this.speed *= 1.2; // Increases speed significantly when chased
        this.stress += 30; // Very high stress from being chased
        if (!this.environmentAffinity.includes("Wasteland")) {
            this.aggression += 15; // Increases aggression if chased outside its comfort zone
            this.energy -= 10; // Decreases energy due to adverse conditions
        }
    }

    handleTaunt() {
        this.aggression += 30; // Extremely aggressive response to taunts
        this.stress += 20; // Increases stress
        if (this.environmentAffinity.includes("Wasteland")) {
            this.defense *= 1.2; // Boosts defense in familiar terrain
        } else {
            this.defense *= 0.9; // Defense suffers outside of preferred environment
        }
    }

    handleObserve() {
        if (this.traits.includes("survivalist")) {
            this.stealth += 20; // Increases stealth to avoid detection
            this.trust -= 10; // Distrust increases when observed
        } else {
            this.curiosity += 20;
            this.trust += 10;
        }
    }

    handleHeal(amount) {
        if (this.strengths.includes("high endurance")) {
            this.currentHp += amount * 1.5; // Enhanced healing thanks to high endurance
            this.comfort += 20; // Increases comfort significantly
        } else {
            this.currentHp += amount;
            this.comfort += 10; // Normal comfort increase from healing
            this.stress -= 5; // Slightly reduces stress due to effective healing
            if (this.weaknesses.includes("extreme temperatures") && this.currentEnvironment === "Extreme") {
                this.currentHp += amount * 0.5; // Less effective healing under extreme conditions
                this.stress += 15; // Increases stress in harsh conditions
            }
        }
    }

    handleCapture() {
        this.fear += 40; // Extremely fearful of capture
        this.stress += 30;
        this.aggression += 20; // Reacts with high aggression to escape
    }

    handlePlay() {
        if (this.traits.includes("loner")) {
            this.happiness -= 10; // Decreases happiness, prefers to be alone
            this.stress += 20;
        } else {
            this.happiness += 20;
            this.energy += 10;
        }
    }

    handleCommand(command) {
        if (command === "scout" && this.traits.includes("survivalist")) {
            this.obedience += 30; // Very obedient to survival-related commands
            this.respect += 20;
        } else {
            this.obedience -= 20;
            this.stress += 30;
        }
    }
}

export { SylvanSprout, MudlingGrub, WastelandWanderer };