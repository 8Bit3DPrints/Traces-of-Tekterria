class Mutant {
    constructor() {
      this.name = 'Mutant';
      this.mutations = ['extra arms', 'glowing eyes', 'sharp teeth'];
    }
  
    interact(player) {
      console.log(`${this.name}: *growls* Ye look like a tasty snack.`);
    }
  
    attack() {
      console.log(`${this.name}: *attacks player*`);
    }
  }