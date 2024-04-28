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

// Initialize game objects
const gameWorld = new GameWorld();
const player = new Player();
const gameManager = new GameManager(scene, map);
const environmentManager = new EnvironmentManager(scene, map);
const environmentBase = new EnvironmentBase(gameWorld, player);

// Set up event listeners and initial updates
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

  // Add event listeners for monster interactions
  document.getElementById('chaseMonster').addEventListener('click', () => handlePlayerInteraction('chase'));
  document.getElementById('feedMonster').addEventListener('click', () => handlePlayerInteraction('feed'));
  document.getElementById('tauntMonster').addEventListener('click', () => handlePlayerInteraction('taunt'));
  document.getElementById('observeMonster').addEventListener('click', () => handlePlayerInteraction('observe'));
  document.getElementById('healMonster').addEventListener('click', () => handlePlayerInteraction('heal'));
  document.getElementById('captureMonster').addEventListener('click', () => handlePlayerInteraction('capture'));
  document.getElementById('playWithMonster').addEventListener('click', () => handlePlayerInteraction('play'));
  document.getElementById('commandMonster').addEventListener('click', () => handlePlayerInteraction('command'));
});

// Game loop function
function gameLoop() {
  // Update game state
  gameWorld.update();
  gameManager.updateGameState();

  // Apply environmental effects
  environmentManager.applyEnvironmentalEffects();

  // Render game world
  gameManager.renderGameWorld();

  // Request the next frame
  requestAnimationFrame(gameLoop);
}

// Function to apply environmental effects
function applyEnvironmentalEffects() {
  // Apply weather effects
  WeatherEffects.handleWeather(environmentManager.currentEnvironment.weather, environmentManager.playerEffects, gameWorld.scene);

  // Apply special event effects
  SpecialEvents.handleEvents(environmentManager.currentEnvironment.specialEvents, environmentManager.playerEffects, gameWorld.scene, gameWorld.map);

  // Apply terrain effects
  TerrainEffects.handleTerrainChanges(environmentManager.currentEnvironment, gameWorld.scene, gameWorld.map);

  // Log the updated state for debugging and verification purposes
  console.log('Updated Environment: ', environmentManager.currentEnvironment);
  console.log('Current Player Effects: ', environmentManager.playerEffects);
}

// Function to spawn a monster
function spawnMonster() {
  const monsterType = prompt('Enter monster type (SylvanSprout, MudlingGrub, WastelandWanderer, or random)');

  let currentMonster;

  switch (monsterType) {
    case 'SylvanSprout':
      currentMonster = new SylvanSprout({
        // Provide configuration for SylvanSprout here
      });
      break;
    case 'MudlingGrub':
      currentMonster = new MudlingGrub({
        // Provide configuration for MudlingGrub here
      });
      break;
    case 'WastelandWanderer':
      currentMonster = new WastelandWanderer({
        // Provide configuration for WastelandWanderer here
      });
      break;
    case 'random':
      currentMonster = spawnRandomMonster();
      break;
    default:
      console.log('Invalid monster type');
      break;
  }

  if (currentMonster) {
    updateMonsterStats(currentMonster);
  }
}

// Function to handle player interactions with the current monster
function handlePlayerInteraction(interactionType) {
  const currentMonster = gameWorld.getCurrentMonster();

  if (currentMonster) {
    currentMonster.reactToPlayerInteraction(interactionType, player);
    updateMonsterStats(currentMonster);
  } else {
    console.log('No monster currently spawned');
  }
}

// Start the game loop
gameLoop();