import { WeatherEffects } from './WeatherEffects.js';
import { SpecialEvents } from './SpecialEvents.js';
import { TerrainEffects } from './TerrainEffects.js';

export class EnvironmentBase {
  constructor(scene, map) {
    this.scene = scene;
    this.map = map;
    this.currentEnvironment = {
      location: 'wasteland', // The default starting location in a post-apocalyptic world
      weather: 'clear', // Initial weather condition
      timeOfDay: 'day', // Initial time of day
      specialEvents: [] // Array to hold any ongoing special environmental events
    };
    this.playerEffects = {};
    this.environmentalUtilities = new EnvironmentalUtilities(scene, map);
  }

  /**
   * Updates the environmental settings based on input and triggers the effect application.
   * @param {Object} envConfig - Contains location, weather, timeOfDay, and special events.
   */
  updateEnvironment(envConfig) {
    // Update the current environment settings from provided configuration
    this.currentEnvironment = { ...this.currentEnvironment, ...envConfig };

    // Apply the effects of the updated environment
    this.applyEnvironmentalEffects();
  }

  /**
   * Applies environmental effects by delegating to specific modules based on the current settings.
   */
  applyEnvironmentalEffects() {
    // Delegate to specific modules to handle detailed environmental effects
    WeatherEffects.handleWeather(this.currentEnvironment.weather, this.playerEffects, this.scene);
    SpecialEvents.handleEvents(this.currentEnvironment.specialEvents, this.playerEffects, this.scene, this.map);
    TerrainEffects.handleTerrainChanges(this.currentEnvironment, this.scene, this.map);

    // Log the current environmental state and effects
    console.log("Updated Environment: ", this.currentEnvironment);
    console.log("Current Player Effects: ", this.playerEffects);
  }
}