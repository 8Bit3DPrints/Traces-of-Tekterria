class Wizard {
    constructor() {
      this.name = 'Wizard';
      this.spells = ['fireball', 'heal', 'teleport'];
    }
  
    interact(player) {
      console.log(`${this.name}: Ah, a brave adventurer! What magic can I assist you with today?`);
    }
  
    castSpell(spell) {
      if (this.spells.includes(spell)) {
        console.log(`${this.name}: *waves staff* ${spell}!`);
      } else {
        console.log(`${this.name}: Sorry, I don't know that spell.`);
      }
    }
  }