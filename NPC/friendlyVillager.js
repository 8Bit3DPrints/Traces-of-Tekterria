class FriendlyVillager {
    constructor() {
      this.name = 'Villager';
      this.dialogue = ['Hello!', 'How can I help you?', 'Good day!'];
    }
  
    interact(player) {
      console.log(`${this.name}: ${this.dialogue[Math.floor(Math.random() * this.dialogue.length)]}`);
    }
  }