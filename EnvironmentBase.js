// Import necessary modules for environmental management
import { WeatherEffects } from './WeatherEffects.js';
import { TimeOfDayEffects } from './TimeOfDayEffects.js';
import { SpecialEvents } from './SpecialEvents.js';
import { TerrainEffects } from './TerrainEffects.js';
import { EnvironmentalUtilities } from './EnvironmentalUtilities.js';

export class EnvironmentBase {
    constructor(scene, map) {
        this.scene = scene; // Represents the graphical scene context
        this.map = map; // Represents the game map details
        this.currentEnvironment = {
            location: 'wasteland', // Default starting location
            weather: 'clear', // Default initial weather condition
            timeOfDay: 'day', // Default initial time of day
            specialEvents: [] // Container for any ongoing special environmental events
        };
        this.playerEffects = {}; // Object to store the current effects on the player due to the environment
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
        // Apply weather effects
        WeatherEffects.handleWeather(this.currentEnvironment.weather, this.playerEffects);
        // Apply time of day effects
        TimeOfDayEffects.handleTimeOfDay(this.currentEnvironment.timeOfDay, this.playerEffects);
        // Handle special events that may affect the environment
        SpecialEvents.handleEvents(this.currentEnvironment.specialEvents, this.playerEffects);
        // Adjust terrain based on the current location settings
        TerrainEffects.handleTerrainChanges(this.currentEnvironment);

        // Log the updated state for debugging and verification purposes
        console.log("Updated Environment: ", this.currentEnvironment);
        console.log("Current Player Effects: ", this.playerEffects);
    }
}

export default EnvironmentBase;