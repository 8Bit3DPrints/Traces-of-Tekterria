import { WeatherEffects } from './WeatherEffects.js';
import { SpecialEvents } from './SpecialEvents.js';
import { TerrainEffects } from './TerrainEffects.js';
import { EnvironmentalUtilities } from './EnvironmentalUtilities.js';

export class EnvironmentManager {
    constructor(scene, map) {
        this.scene = scene;
        this.map = map;
        this.currentEnvironment = {
            location: 'wasteland',
            weather: 'clear',
            timeOfDay: 'day',
            specialEvents: []
        };
        this.playerEffects = {};
        this.environmentalUtilities = new EnvironmentalUtilities(scene, map);
    }

    /**
     * Updates the environment settings and applies relevant effects to gameplay and player.
     */
    updateEnvironment({ location, weather, timeOfDay, specialEvents = [] }) {
        this.currentEnvironment = { location, weather, timeOfDay, specialEvents };
        this.applyEnvironmentalEffects();
    }

    /**
     * Apply environmental effects that influence gameplay, player stats, visibility, and more.
     */
    applyEnvironmentalEffects() {
        this.handleWeatherEffects();
        this.handleTimeOfDayEffects();
        this.handleSpecialEvents();
        this.updatePlayerEffects();
    }

    /**
     * Handles effects based on weather conditions with futuristic and apocalyptic considerations.
     */
    handleWeatherEffects() {
        const { weather } = this.currentEnvironment;
        WeatherEffects.handleWeather(weather, this.playerEffects, this.scene);
    }

    /**
     * Manages effects based on the time of day, adjusting visibility and monster activity.
     */
    handleTimeOfDayEffects() {
        const { timeOfDay } = this.currentEnvironment;
        if (timeOfDay === 'night') {
            this.playerEffects.reducedVisibility = true;
            this.environmentalUtilities.increaseMonsterAggressiveness();
        }
    }

    /**
     * Handles special environmental events that have significant impacts on gameplay.
     */
    handleSpecialEvents() {
        const { specialEvents } = this.currentEnvironment;
        SpecialEvents.handleEvents(specialEvents, this.playerEffects, this.scene, this.map);
    }

    /**
     * Updates player effects based on the current environmental conditions, affecting health, energy, and equipment functionality.
     */
    updatePlayerEffects() {
        const { weather, timeOfDay, specialEvents } = this.currentEnvironment;

        // Reset player effects for the current update cycle
        this.playerEffects = {};

        // Environmental effects that have realistic foundations with a sci-fi twist
        switch (weather) {
            case 'toxic mist':
                this.playerEffects.healthDegeneration = true;
                this.environmentalUtilities.requireProtectiveGear('gas mask');
                break;
            case 'solar flare':
                this.playerEffects.energyBoost = true;
                this.environmentalUtilities.damageSensitiveEquipment('solar sensitive');
                break;
            case 'neutron rain':
                this.playerEffects.severeHealthDegradation = true;
                this.playerEffects.equipmentRapidAging = true;
                this.environmentalUtilities.requireProtectiveGear('neutron insulated suit');
                break;
            case 'gamma burst':
                this.playerEffects.instantHealthDegradation = true;
                this.environmentalUtilities.requireProtectiveGear('radiation shield suit');
                break;
            case 'cryogenic fog':
                this.playerEffects.dexterityDecrease = true;
                this.playerEffects.slowMovement = true;
                this.environmentalUtilities.requireProtectiveGear('thermal suit');
                break;
            // Additional weather cases
        }

        // Handling more subtle effects based on environmental extremes
        if (weather === 'extreme cold') {
            this.playerEffects.dexterityDecrease = true;
            this.environmentalUtilities.requireProtectiveGear('thermal gloves');
            this.playerEffects.staminaPreservation = true;
        } else if (weather === 'extreme heat') {
            this.playerEffects.staminaDrain = true;
            this.playerEffects.overheatRisk = true;
            this.environmentalUtilities.requireProtectiveGear('cooling vest');
        } else if (weather === 'magnetic storm') {
            this.playerEffects.navigationDisruption = true;
            this.playerEffects.electronicInterference = true;
            this.environmentalUtilities.damageSensitiveEquipment('electronic', 'extreme');
        } else if (weather === 'bio-acid hail') {
            this.playerEffects.armorCorrosion = true;
            this.playerEffects.healthDegradation = true;
            this.environmentalUtilities.requireProtectiveGear('acid-resistant armor');
        }

        // Day and night cycle effects for added realism
        if (timeOfDay === 'night') {
            this.playerEffects.reducedVisibility = true;
            this.playerEffects.enhancedStealth = true;
        } else if (timeOfDay === 'dusk' || timeOfDay === 'dawn') {
            this.playerEffects.partialVisibility = true;
            this.playerEffects.minorStealthBoost = true;
        }

        // Special events that echo real-world phenomena but with extreme consequences
        if (specialEvents.includes('ion storm')) {
            this.playerEffects.sensorMalfunction = true;
            this.environmentalUtilities.requireProtectiveGear('ion shielding suit');
        } else if (specialEvents.includes('quantum fluctuation')) {
            this.playerEffects.randomTeleportation = true;
        }
    }
}