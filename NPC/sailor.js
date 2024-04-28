class Sailor {
    constructor() {
      this.name = 'Sailor';
      this.destinations = ['nearby island', 'distant land', 'mysterious sea'];
    }
  
    interact(player) {
      console.log(`${this.name}: Welcome aboard! Where would ye like to sail?`);
    }
  
    sailTo(destination) {
      if (this.destinations.includes(destination)) {
        console.log(`${this.name}: Ah, ye want to sail to ${destination}? That'll be a grand adventure!`);
      } else {
        console.log(`${this.name}: Sorry, I don't know the way to that place.`);
      }
    }
  }