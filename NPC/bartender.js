class Bartender {
    constructor() {
      this.name = 'Bartender';
      this.drinks = ['ale', 'mead', 'water'];
      this.prices = [5, 10, 0];
    }
  
    interact(player) {
      console.log(`${this.name}: What can I get for ye?`);
    }
  
    serveDrink(drink) {
      if (this.drinks.includes(drink)) {
        console.log(`${this.name}: Ah, ye want a ${drink}? That'll be ${this.prices[this.drinks.indexOf(drink)]} gold.`);
      } else {
        console.log(`${this.name}: Sorry, we don't have that drink.`);
      }
    }
  }