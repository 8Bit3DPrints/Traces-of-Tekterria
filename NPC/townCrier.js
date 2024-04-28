class TownCrier {
    constructor() {
      this.name = 'Town Crier';
      this.announcements = ['Hear ye, hear ye!', 'The king has declared a holiday!', 'Beware of the dragon in the nearby cave!'];
    }
  
    interact(player) {
      console.log(`${this.name}: ${this.announcements[Math.floor(Math.random() * this.announcements.length)]}`);
    }
  }