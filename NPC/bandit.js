class Bandit {
    constructor() {
      this.name = 'Bandit';
      this.aggression = 50; // 0-100, higher is more aggressive
    }
  
    interact(player) {
      if (this.aggression > 50) {
        console.log(`${this.name}: *draws sword* You look like you've got some gold on you...`);
      } else {
        console.log(`${this.name}: *looks around nervously* Uh, just passing through...`);
      }
    }
  
    attack() {
      this.aggression += 20; // increase aggression when attacking
    }
  }