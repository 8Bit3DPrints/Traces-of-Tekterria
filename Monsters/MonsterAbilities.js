export const monsterAbilities = {
    'electricShock': (monster, target) => {
        const damage = monster.attack - target.defense;
        target.health -= damage > 0 ? damage : 0;
    },
    'toxicSpray': (monster, target) => {
        // Additional damage or status effects
    }
};