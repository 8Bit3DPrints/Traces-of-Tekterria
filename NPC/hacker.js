class Hacker {
    constructor() {
      this.name = 'Hacker';
      this.skills = ['hacking', 'computer repair', 'cyber warfare'];
    }
  
    interact(player) {
      console.log(`${this.name}: *types on computer* Ah, ye look like someone who could use a good hack.`);
    }
  
    hackComputer() {
      console.log(`${this.name}: *hacks computer* Ah, ye now have access to the secure files.`);
    }
  }