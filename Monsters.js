// Monsters.js
import { player, checkLevelUp } from "./Player.js";

export let currentMonster = null;

// Example structure for a monster
class Monster {
    constructor(name, level, maxHp, attack, defense, abilities, lootTable) {
        this.name = name;
        this.level = level;
        this.maxHp = maxHp;
        this.currentHp = maxHp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;  // Special attacks or effects
        this.lootTable = lootTable;  // Potential drops upon defeat
    }

    attackPlayer(player) {
        // Basic attack logic (can be overridden by special monsters)
        const damage = this.attack - player.defense;
        player.currentHp -= damage > 0 ? damage : 0;
    }

    useAbility(abilityId, target) {
        // Logic for monster using a special ability
        this.abilities[abilityId].execute(this, target);
    }
}

export const creatures = [
    // Tier 1: Levels 1-10
    new Monster("Rusty Scavenger", 3, 35, 5, 4, [{"id": "rusty swipe", "execute": (monster, target) => {
        const damage = monster.attack - target.defense;
        target.currentHp -= damage > 0 ? damage : 0;
    }}], {"coins": 80, "commonLoot": ["rusty wrench", "old battery", "broken gear"], "upgradeMaterial": {"rusty bolt": 0.2, "scrap shard": 0.1}}),
    new Monster("Scrapyard Scorpion", 7, 45, 9, 6, [{"id": "venomous sting", "execute": (monster, target) => {
        // Inflict poison damage over time
    }}], {"coins": 130, "commonLoot": ["scorpion claw", "metallic venom", "junk metal"], "upgradeMaterial": {"scrap shard": 0.2, "toxic gland": 0.1}}),
    new Monster("Tainted Pigeon", 9, 35, 11, 3, [{"id": "radioactive droppings", "execute": (monster, target) => {
        // Inflict radiation damage to the player
    }}], {"coins": 180, "uncommonLoot": ["tainted feather", "radioactive droppings", "pigeon beak"], "upgradeMaterial": {"toxic feather": 0.2, "rusty bolt": 0.1}}),
    new Monster("Rubble Raptor", 11, 55, 13, 9, [{"id": "rock barrage", "execute": (monster, target) => {
        // Hurl rocks at the player, causing damage
    }}], {"coins": 220, "uncommonLoot": ["rubble claw", "broken circuitry", "metallic scales"], "upgradeMaterial": {"rubble shard": 0.2, "scrap shard": 0.1}}),
    new Monster("Molded Mutt", 12, 70, 12, 8, [{"id": "toxic bite", "execute": (monster, target) => {
        // Bite the player, inflicting poison
    }}], {"coins": 250, "rareLoot": ["molded fur", "mutant bone", "salvaged collar"], "upgradeMaterial": {"mutant bone": 0.2, "toxic gland": 0.1}}),
    // Add more Tier 1 monsters here...
    new Monster("Mechanical Mouse", 4, 30, 7, 3, [{"id": "electroshock", "execute": (monster, target) => {
        // Emit an electric shock, stunning the player momentarily
    }}], {"coins": 100, "commonLoot": ["mechanical cheese", "copper wire", "bolt"], "upgradeMaterial": {"mechanical spring": 0.2, "rusty bolt": 0.1}}),
    new Monster("Rusty Golem", 6, 60, 10, 12, [{"id": "rusty slam", "execute": (monster, target) => {
        // Slam the ground, causing tremors and dealing damage
    }}], {"coins": 150, "commonLoot": ["rusty plate", "cracked gemstone", "ancient cog"], "upgradeMaterial": {"rusty plate": 0.2, "scrap shard": 0.1}}),
    new Monster("Toxic Beetle", 8, 40, 15, 5, [{"id": "acidic spray", "execute": (monster, target) => {
        // Spray acid at the player, causing corrosion
    }}], {"coins": 200, "uncommonLoot": ["toxic shell", "acidic gland", "beetle horn"], "upgradeMaterial": {"acidic gland": 0.2, "toxic feather": 0.1}}),
    new Monster("Junkyard Guardian", 10, 80, 20, 15, [{"id": "junkyard smash", "execute": (monster, target) => {
        // Smash the player with a junkyard object, dealing heavy damage
    }}], {"coins": 250, "rareLoot": ["junkyard helm", "scrap shield", "broken sword"], "upgradeMaterial": {"junkyard scrap": 0.2, "rusty plate": 0.1}}),
    new Monster("Rogue Robot", 2, 25, 8, 6, [{"id": "overload", "execute": (monster, target) => {
        // Overload circuits, causing electrical damage
    }}], {"coins": 70, "commonLoot": ["robotic arm", "defective battery", "broken circuit"], "upgradeMaterial": {"defective battery": 0.2, "mechanical spring": 0.1}}),

    // Tier 2: Levels 11-30
    new Monster("Radioactive Ghoul", 15, 120, 15, 10, [], {"coins": 300, "uncommonLoot": ["ghoul flesh", "radioactive sample", "irradiated bone"]}),
    new Monster("Cyber Hound", 20, 150, 25, 20, [], {"coins": 450, "rareLoot": ["mechanical bone", "enhanced sensor", "cybernetic implant"]}),
    new Monster("Desert Marauder", 25, 200, 30, 25, [], {"coins": 600, "rareLoot": ["raider axe", "desert camo gear", "bandit mask"]}),
    new Monster("Ghoul Sniper", 15, 120, 20, 15, [], {"coins": 350, "uncommonLoot": ["sniper scope", "ghoul tooth", "serrated blade"]}),
    new Monster("Mechanical Scavenger", 20, 180, 25, 20, [], {"coins": 500, "rareLoot": ["servo motor", "high-tech gadget", "scavenger's tool"]}),
    new Monster("Sand Serpent", 25, 200, 30, 25, [], {"coins": 650, "rareLoot": ["serpent scale", "sand pearl", "sunstone"]}),
    new Monster("Crash Survivor", 30, 250, 35, 30, [], {"coins": 800, "epicLoot": ["survival gear", "reinforced armor", "crash beacon"]}),
    new Monster("Toxic Wanderer", 30, 220, 40, 25, [], {"coins": 900, "epicLoot": ["toxic mask", "hazard suit", "biohazard container"]}),
    new Monster("Rust Reaver", 17, 140, 18, 12, [], {"coins": 400, "uncommonLoot": ["rusty blade", "scrap armor", "corroded gear"]}),
    new Monster("Circuit Breaker", 22, 160, 22, 18, [], {"coins": 550, "rareLoot": ["circuit breaker", "power conduit", "overcharged battery"]}),
    new Monster("Wasteland Wraith", 27, 190, 28, 23, [], {"coins": 700, "rareLoot": ["wraith essence", "ethereal shard", "haunted gear"]}),
    new Monster("Nuclear Nomad", 28, 200, 32, 28, [], {"coins": 750, "epicLoot": ["nuclear core", "radiation-proof cloak", "wanderer's map"]}),
    new Monster("Molten Marauder", 30, 240, 35, 30, [], {"coins": 850, "epicLoot": ["molten blade", "lava-proof armor", "firebrand insignia"]}),

    // Tier 3: Levels 31-50
    new Monster("Automaton Sentry", 35, 300, 40, 35, [], {"coins": 800, "rareLoot": ["sentry core", "advanced circuitry", "mechanical servo"]}),
    new Monster("Toxic Behemoth", 40, 450, 50, 40, [], {"coins": 1000, "epicLoot": ["toxic heart", "contaminated armor", "mutant gland"]}),
    new Monster("Wasteland Dragon", 50, 600, 60, 50, [], {"coins": 1500, "epicLoot": ["dragon scale", "molten core", "ancient relic"]}),
    new Monster("Steel Viper", 35, 300, 45, 40, [], {"coins": 1000, "epicLoot": ["metal fang", "viper circuit", "venomous sac"]}),
    new Monster("Radiant Phantom", 40, 350, 50, 45, [], {"coins": 1150, "legendaryLoot": ["phantom essence", "radiant ore", "ethereal crystal"]}),
    new Monster("Cyber Witch", 45, 400, 55, 50, [], {"coins": 1300, "legendaryLoot": ["witch's codec", "magic motherboard", "digital spellbook"]}),
    new Monster("Molten Hulk", 50, 450, 60, 55, [], {"coins": 1450, "legendaryLoot": ["molten core", "hulk's armor", "inferno gem"]}),
    new Monster("Echo Bat", 50, 300, 65, 40, [], {"coins": 1600, "mythicLoot": ["echo crystal", "sonic wing", "bat's echo"]}),
    new Monster("Rogue Mechanic", 38, 320, 48, 38, [], {"coins": 900, "epicLoot": ["mechanic's toolkit", "rogue chip", "stolen schematic"]}),
    new Monster("Toxic Titan", 42, 500, 55, 45, [], {"coins": 1100, "epicLoot": ["toxic titan essence", "corrupted armor plate", "radioactive heart"]}),
    new Monster("Phoenix Vanguard", 48, 550, 58, 50, [], {"coins": 1250, "legendaryLoot": ["phoenix feather", "eternal flame", "sacred ash"]}),
    new Monster("Doomsday Drone", 55, 600, 65, 55, [], {"coins": 1400, "legendaryLoot": ["doomsday core", "apocalypse battery", "cataclysmic module"]}),
    new Monster("Nuclear Nightmare", 58, 650, 70, 60, [], {"coins": 1550, "legendaryLoot": ["nuclear nightmare essence", "mutant reactor", "irradiated scale"]}),

    // Tier 4: Levels 51-70
    new Monster("Rogue AI", 55, 700, 70, 60, [], {"coins": 2000, "epicLoot": ["AI chip", "rogue software", "cybernetic interface"]}),
    new Monster("Nuclear Phantom", 65, 850, 85, 75, [], {"coins": 2500, "legendaryLoot": ["phantom essence", "nuclear shard", "ghostly reactor"]}),
    new Monster("Quantum Shade", 55, 700, 70, 65, [], {"coins": 1800, "mythicLoot": ["quantum shard", "shade cloak", "time-warp crystal"]}),
    new Monster("Nuclear Minotaur", 60, 850, 80, 70, [], {"coins": 2000, "mythicLoot": ["nuclear horn", "reactor core", "atomic armor"]}),
    new Monster("Storm Drone", 65, 900, 85, 75, [], {"coins": 2200, "mythicLoot": ["storm battery", "climate controller", "thundercore capacitor"]}),
    new Monster("Mirror Fiend", 70, 950, 90, 80, [], {"coins": 2400, "mythicLoot": ["mirror skin", "fiend's reflection", "illusory blade"]}),
    new Monster("Grave Warden", 70, 1000, 95, 85, [], {"coins": 2600, "mythicLoot": ["warden's key", "spectral chain", "ethereal cloak"]}),
    new Monster("Omega Sentinel", 62, 800, 75, 70, [], {"coins": 2300, "legendaryLoot": ["omega core", "sentinel module", "energy shield"]}),
    new Monster("Apocalyptic Annihilator", 67, 950, 90, 80, [], {"coins": 2700, "legendaryLoot": ["apocalyptic essence", "annihilation core", "cataclysmic blade"]}),
    new Monster("Chrono Colossus", 72, 1100, 100, 90, [], {"coins": 3000, "artifactLoot": ["chrono crystal", "colossal gear", "time-warping hammer"]}),
    new Monster("Celestial Sentinel", 75, 1200, 110, 100, [], {"coins": 3300, "artifactLoot": ["celestial shard", "sentinel's heart", "divine shield"]}),
    new Monster("Void Vanguard", 78, 1300, 120, 110, [], {"coins": 3600, "artifactLoot": ["void essence", "vanguard blade", "abyssal armor"]}),

    // Tier 5: Levels 71-99
    new Monster("Apocalypse Bringer", 80, 1000, 100, 90, [], {"coins": 3000, "legendaryLoot": ["bringer's heart", "doom crystal", "apocalyptic essence"]}),
    new Monster("Quantum Reaper", 99, 1500, 150, 120, [{"id": "timeWarp", "execute": (monster, target) => {
        const damage = monster.attack * 2 - target.defense;
        target.currentHp -= damage > 0 ? damage : 0;
    }}], {"coins": 5000, "mythicLoot": ["reaper's scythe", "quantum orb", "void essence"]}),
    new Monster("Dimensional Behemoth", 75, 700, 150, 130, [], {"coins": 2500, "mythicLoot": ["dimensional scale", "rift crystal", "cosmic fragment"]}),
    new Monster("Cosmic Seraph", 80, 800, 160, 140, [], {"coins": 3000, "mythicLoot": ["celestial feather", "cosmic essence", "stellar relic"]}),
    new Monster("Oblivion Stalker", 85, 900, 170, 150, [], {"coins": 3500, "legendaryLoot": ["obliteration blade", "shadow cloak", "void shard"]}),
    new Monster("Time Weaver", 90, 1000, 180, 160, [], {"coins": 4000, "legendaryLoot": ["time crystal", "ancient gear", "chronal artifact"]}),
    new Monster("Celestial Arbiter", 99, 1500, 200, 180, [], {"coins": 5000, "artifactLoot": ["celestial hammer", "judgment scroll", "divine relic"]}),
    new Monster("Eternal Guardian", 85, 1200, 175, 155, [], {"coins": 4000, "artifactLoot": ["eternal essence", "guardian's shield", "eternity shard"]}),
    new Monster("Void Conqueror", 88, 1300, 180, 160, [], {"coins": 4500, "artifactLoot": ["void essence", "conqueror's blade", "abyssal heart"]}),
    new Monster("Cosmic Conduit", 92, 1400, 185, 165, [], {"coins": 4800, "artifactLoot": ["cosmic essence", "conduit staff", "stardust core"]}),
    new Monster("Primordial Titan", 95, 1500, 190, 170, [], {"coins": 5200, "artifactLoot": ["primordial essence", "titanic hammer", "chaos orb"]}),
    new Monster("Omega Overlord", 99, 2000, 200, 200, [], {"coins": 6000, "artifactLoot": ["omega essence", "overlord's crown", "supreme relic"]}),
];

// Main Bosses for specific levels with unique mechanics and high value loot
export const mainBosses = [
    new Monster("Dragon King", 50, 1000, 80, 60, [{"id": "fireBreath", "execute": (monster, target) => {
        const damage = monster.attack * 2 - target.defense;
        target.currentHp -= damage > 0 ? damage : 0;
    }}], {"coins": 5000, "epicLoot": ["Dragon Armor", "Dragon Sword"]}),
    // Additional main bosses
];

export function spawnRandomMonster() {
    console.log('Spawning new monster. Current monster before spawn:', currentMonster);
    currentMonster = creatures[Math.floor(Math.random() * creatures.length)];
    currentMonster.currentHp = currentMonster.maxHp;
    console.log('New monster spawned:', currentMonster);
}

export function updateMonsterStats() {
    const monsterStatsDiv = document.getElementById('monster-stats');

    if (!currentMonster) {
        console.log("No current monster to update.");
        monsterStatsDiv.style.display = 'none'; // Hide monster stats if no monster is present
        return;
    }

    console.log("Updating monster stats for:", currentMonster.name);
    // Displaying basic monster stats
    document.getElementById('monster-name').textContent = currentMonster.name;
    document.getElementById('monster-hp').textContent = `HP: ${currentMonster.currentHp} / ${currentMonster.maxHp}`;
    document.getElementById('monster-level').textContent = `Level: ${currentMonster.level}`;
    document.getElementById('monster-attack').textContent = `Attack: ${currentMonster.attack}`;
    document.getElementById('monster-defense').textContent = `Defense: ${currentMonster.defense}`;

    // Displaying abilities
    const abilitiesElement = document.getElementById('monster-abilities');
    abilitiesElement.innerHTML = ''; // Clear existing list
    currentMonster.abilities.forEach(ability => {
        let li = document.createElement('li');
        li.textContent = ability.id + " - " + ability.execute.toString();
        abilitiesElement.appendChild(li);
    });

    // Displaying loot table
    const lootElement = document.getElementById('monster-loot');
    lootElement.innerHTML = ''; // Clear existing list
    Object.entries(currentMonster.lootTable).forEach(([item, chance]) => {
        let li = document.createElement('li');
        li.textContent = `${item}: ${chance * 100}% chance`;
        lootElement.appendChild(li);
    });

    // Ensure the monster stats UI is visible when there is a current monster
    monsterStatsDiv.style.display = 'block';
}


export function defeatCurrentMonster() {
    if (currentMonster) {
        console.log(`Defeating monster: ${currentMonster.name}`);
        player.xp += currentMonster.xpValue; // Ensure this line is correct and `xpValue` is defined
        checkLevelUp();
        currentMonster = null;
        updateMonsterStats(); // Optionally clear the monster UI here
    } else {
        console.log("No current monster to defeat.");
    }
}

