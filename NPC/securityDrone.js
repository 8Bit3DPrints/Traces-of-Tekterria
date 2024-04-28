class SecurityDrone {
    constructor() {
      this.name = 'Security Drone';
    }
  
    interact(player) {
      console.log(`${this.name}: *scans player* Ye are not authorized to be here. Leave immediately.`);
    }
  
    attack() {
      console.log(`${this.name}: *attacks player*`);
    }
  }