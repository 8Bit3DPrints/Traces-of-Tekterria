import { Monster } from './MonsterBase.js';

export class SylvanSprout extends Monster {
    constructor() {
        super({
            name: "Sylvan Sprout",
            level: 3,
            maxHp: 45,
            attack: 10,
            defense: 15,
            abilities: [
                { name: "Toxin Release", effect: "poison", cooldown: 10, range: 5 },
                { name: "Camouflage", effect: "stealth", cooldown: 5, range: 0 }
            ],
            lootTable: {
                "Herbal Essence": 0.4,
                "Sprout Fibers": 0.3,
                "Healing Sap": 0.2
            },
            xpValue: 50,
            environmentAffinity: ["Forested", "Lush"],
            appearanceConditions: {
                time: "day",
                weather: "misty"
            },
            strengths: ["poison resistance", "high regeneration"],
            weaknesses: ["fire", "ice"],
            visibility: [
                { weather: "sunny", terrain: ["forest"] },
                { weather: "misty", terrain: ["forest", "grassland"] }
            ],
            behaviorPatterns: ["defensive", "evasive"],
            environmentalImpact: {
                "Forested": { attackModifier: 0.8, defenseModifier: 1.2 },
                "Lush": { attackModifier: 1, defenseModifier: 1.5 }
            },
            traits: ["photosynthetic", "toxic", "camouflaging", "regenerative"]
        });
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

export default SylvanSprout;
