import EnvironmentBase from './EnvironmentBase.js';
import { WeatherEffects } from './WeatherEffects.js';
import { SpecialEvents } from './SpecialEvents.js';
import { TerrainEffects } from './TerrainEffects.js';
import { EnvironmentalUtilities } from './EnvironmentalUtilities.js';
import { GameWorld } from './GameWorld.js';
import { Player } from './Player.js';
import { saveGame, loadGame } from './GameManagement.js';
import { attack } from './Combat.js';
import { updatePlayerStats, updateInventoryDisplay, updateEquipmentDisplay } from './ResourceManagement.js';
import { regenerateResources } from './ResourceManagement.js';
import { EnvironmentManager } from './EnvironmentManager.js';
import { GameManager } from './GameManagement.js';
import { SylvanSprout, MudlingGrub, WastelandWanderer } from './BiologicalMonsters.js';
import { Monster } from './MonsterBase.js';
import { creatures, mainBosses, spawnRandomMonster, updateMonsterStats, defeatCurrentMonster } from './Monsters.js';
import { environmentManager } from './EnvironmentManager.js';


const gameWorld = new GameWorld();
const player = new Player();
const gameManager = new GameManager(scene, map);
const environmentManager = new EnvironmentManager(scene, map);
const environmentBase = new EnvironmentBase(gameWorld, player);

document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to buttons using their IDs
    document.getElementById('saveGame').addEventListener('click', saveGame);
    document.getElementById('loadGame').addEventListener('click', loadGame);
    document.getElementById('meleeAttack').addEventListener('click', () => attack('melee'));
    document.getElementById('rangedAttack').addEventListener('click', () => attack('ranged'));
    document.getElementById('magicAttack').addEventListener('click', () => attack('magic'));
  
    // Initial updates when the game loads
    updatePlayerStats();
    updateInventoryDisplay();
    updateEquipmentDisplay();
  
    // Set up event listeners for environmental changes
    document.getElementById('changeWeather').addEventListener('change', (event) => {
      const weather = event.target.value;
      environmentManager.updateEnvironment({ weather });
    });
  
    document.getElementById('triggerSpecialEvent').addEventListener('click', (event) => {
      const specialEvent = event.target.value;
      environmentManager.updateEnvironment({ specialEvents: [specialEvent] });
    });

    document.getElementById('changeWeather').addEventListener('change', (event) => {
        const weather = event.target.value;
        environmentManager.updateEnvironment({ weather });
    });

    document.getElementById('triggerSpecialEvent').addEventListener('click', (event) => {
        const specialEvent = event.target.value;
        environmentManager.updateEnvironment({ specialEvents: [specialEvent] });
    });
    });

  function gameLoop() {
    // Update game state
    gameWorld.update();
  
    // Apply environmental effects
    environmentManager.applyEnvironmentalEffects();
  
    // Render game world
    gameWorld.render();
  
    // Request the next frame
    requestAnimationFrame(gameLoop);
  }
  
  // Start the game loop
  gameLoop();

  applyEnvironmentalEffects(); {
    // Apply weather effects
    WeatherEffects.handleWeather(this.currentEnvironment.weather, this.playerEffects, gameWorld.scene);
  
    // Apply special event effects
    SpecialEvents.handleEvents(this.currentEnvironment.specialEvents, this.playerEffects, gameWorld.scene, gameWorld.map);
  
    // Apply terrain effects
    TerrainEffects.handleTerrainChanges(this.currentEnvironment, gameWorld.scene, gameWorld.map);
  
    // Log the updated state for debugging and verification purposes
    console.log('Updated Environment: ', this.currentEnvironment);
    console.log('Current Player Effects: ', this.playerEffects);
  }