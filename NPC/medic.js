class Medic {
    constructor() {
      this.name = 'Medic';
      this.skills = ['first aid', 'surgery', 'medicine'];
    }
  
    interact(player) {
      console.log(`${this.name}: *looks at player's wounds* Ah, ye look like ye could use some medical attention.`);
    }
  
    healPlayer() {
      console.log(`${this.name}: *heals player* Ah, ye should be feeling better now.`);
    }
  }