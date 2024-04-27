import { player, updatePlayerStats } from './Player.js';
import { EnvironmentManager } from './EnvironmentManager.js';
import { ResourceManager } from './ResourceManagement.js';

export class GameManager {
  constructor(scene, map) {
    this.scene = scene;
    this.map = map;
    this.environmentManager = new EnvironmentManager(scene, map);
    this.resourceManager = new ResourceManager(this.environmentManager);
    this.loadGame();
    this.resourceManager.startResourceRegeneration();
  }

  saveGame() {
    const saveData = {
      player: player,
      environment: this.environmentManager.currentEnvironment,
      resources: {
        health: player.health,
        mana: player.mana,
        stamina: player.stamina,
        equipment: player.equipment,
        inventory: player.inventory,
      },
      mapState: this.map.saveState(),
    };

    localStorage.setItem('gameData', JSON.stringify(saveData));
    console.log('Game saved!');
  }

  loadGame() {
    const savedData = localStorage.getItem('gameData');

    if (savedData) {
      const { player, environment, resources, mapState } = JSON.parse(savedData);

      Object.assign(this.player, player);
      this.environmentManager.updateEnvironment(environment);
      Object.assign(this.player, resources);
      this.map.loadState(mapState);

      updatePlayerStats();
      console.log('Game loaded!');
    } else {
      console.log('No saved game found.');
    }
  }

  startNewGame() {
    // Reset player data
    this.player = {
      health: 100,
      mana: 50,
      stamina: 50,
      equipment: [],
      inventory: {},
    };

    // Set initial environment
    this.environmentManager.updateEnvironment({
      location: 'wasteland',
      weather: 'clear',
      timeOfDay: 'day',
      specialEvents: [],
    });

    // Reset map state
    this.map.resetMap();

    updatePlayerStats();
    console.log('New game started!');
  }

  changeEnvironment(newEnvironment) {
    this.environmentManager.updateEnvironment(newEnvironment);
    this.resourceManager.updatePlayerStats();
  }

  handleGameEvent(event) {
    switch (event) {
      case 'dayNightCycle':
        this.advanceDayNightCycle();
        break;
      case 'weatherChange':
        this.changeWeather();
        break;
      case 'specialEvent':
        this.triggerSpecialEvent();
        break;
      // Add more cases for other game events
    }
  }

  advanceDayNightCycle() {
    const currentTimeOfDay = this.environmentManager.currentEnvironment.timeOfDay;
    let newTimeOfDay;

    switch (currentTimeOfDay) {
      case 'day':
        newTimeOfDay = 'dusk';
        break;
      case 'dusk':
        newTimeOfDay = 'night';
        break;
      case 'night':
        newTimeOfDay = 'dawn';
        break;
      case 'dawn':
        newTimeOfDay = 'day';
        break;
    }

    this.changeEnvironment({ timeOfDay: newTimeOfDay });
  }

  changeWeather() {
    // Implement logic to randomly select a new weather condition
    const newWeather = this.getRandomWeather();
    this.changeEnvironment({ weather: newWeather });
  }

  triggerSpecialEvent() {
    // Implement logic to randomly select and trigger a special event
    const specialEvent = this.getRandomSpecialEvent();
    this.changeEnvironment({ specialEvents: [specialEvent] });
  }

  getRandomWeather() {
    // Implement logic to randomly select a weather condition
    const weatherConditions = [
      'clear',
      'rain',
      'thunderstorm',
      'sandstorm',
      'acid rain',
      'radioactive fallout',
      // Add more weather conditions as needed
    ];

    return weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  }

  getRandomSpecialEvent() {
    // Implement logic to randomly select a special event
    const specialEvents = [
      'meteor shower',
      'earthquake',
      'alien invasion',
      'time warp',
      'resource depletion',
      // Add more special events as needed
    ];

    return specialEvents[Math.floor(Math.random() * specialEvents.length)];
  }
}