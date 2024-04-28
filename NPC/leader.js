class Leader {
    constructor() {
      this.name = 'Leader';
      this.skills = ['leadership', 'strategy', 'diplomacy'];
    }
  
    interact(player) {
      console.log(`${this.name}: *looks at player* Ah, ye look like someone who could be a valuable ally.`);
    }
  
    recruitPlayer() {
      console.log(`${this.name}: *recruits player* Welcome to our faction! We could use someone with your skills.`);
    }
  }