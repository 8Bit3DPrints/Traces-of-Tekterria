import { Howl, Howler } from 'howler';

class SpecialEvents {
  static handleEvents(events, playerEffects, scene, map) {
    events.forEach(event => {
      switch (event) {
        case 'meteor shower':
          EnvironmentalUtilities.boostMineralAppearance('rare minerals', 200, map);
          this.createMeteorShowerEffect(scene, map);
          this.playMeteorShowerSound();
          break;
        case 'sandstorm':
          playerEffects.visibility = 'low';
          EnvironmentalUtilities.requireProtectiveGear('goggles');
          this.createSandstormEffect(scene);
          this.playSandstormSound();
          break;
        case 'electrical storm':
          playerEffects.electricalDisruption = true;
          EnvironmentalUtilities.requireProtectiveGear('faraday cage');
          this.createLightningEffect(scene);
          this.playThunderSound();
          break;
        case 'viral outbreak':
          playerEffects.infection = true;
          EnvironmentalUtilities.requireProtectiveGear('hazmat suit');
          this.createViralParticles(scene);
          this.playCoughingSound();
          break;
        case 'alien invasion':
          EnvironmentalUtilities.spawnEnemies('aliens', 'high', map);
          this.createUFOEffect(scene);
          this.playAlienSound();
          break;
        case 'time warp':
          EnvironmentalUtilities.alterGameMap('shift terrain', 'randomize obstacles', map);
          this.createTimeWarpEffect(scene);
          this.playTimeWarpSound();
          break;
        case 'resource depletion':
          EnvironmentalUtilities.reduceMineralAppearance('all minerals', 75, map);
          this.createResourceDepletionEffect(scene);
          break;
        // Additional event cases
      }
    });
  }

  static createMeteorShowerEffect(scene, map) {
    const meteorTexture = scene.textures.get('meteor');
    const meteorEmitter = scene.add.particles('meteor').createEmitter({
      speed: { min: 300, max: 600 },
      angle: { min: -90, max: 90 },
      scale: { start: 1, end: 0.5 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 500, max: 1000 },
      blendMode: 'NORMAL',
      frequency: 100,
      maxParticles: 2000,
    });

    // Update terrain tiles
    map.createMeteorCraters();
  }

  static playMeteorShowerSound() {
    const meteorShowerSound = new Howl({
      src: ['assets/meteor-shower.mp3'],
      volume: 0.7,
    });
    meteorShowerSound.play();
  }

  static createSandstormEffect(scene) {
    // Sandstorm effect already handled in WeatherEffects.js
  }

  static playSandstormSound() {
    // Sandstorm sound already handled in WeatherEffects.js
  }

  static createLightningEffect(scene) {
    // Lightning effect already handled in TerrainEffects.js
  }

  static playThunderSound() {
    // Thunder sound already handled in WeatherEffects.js
  }

  static createViralParticles(scene) {
    const virusTexture = scene.textures.get('virus');
    const virusEmitter = scene.add.particles('virus').createEmitter({
      speed: { min: 50, max: 150 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.3, end: 0.1 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 2000, max: 4000 },
      blendMode: 'NORMAL',
      frequency: 100,
      maxParticles: 5000,
    });
  }

  static playCoughingSound() {
    const coughingSound = new Howl({
      src: ['assets/coughing.mp3'],
      volume: 0.5,
    });
    coughingSound.play();
  }

  static createUFOEffect(scene) {
    const ufoTexture = scene.textures.get('ufo');
    const ufoEmitter = scene.add.particles('ufo').createEmitter({
      speed: { min: 100, max: 200 },
      angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0.5 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 1000, max: 2000 },
      blendMode: 'NORMAL',
      frequency: 50,
      maxParticles: 1000,
    });
  }

  static playAlienSound() {
    const alienSound = new Howl({
      src: ['assets/alien-sound.mp3'],
      volume: 0.6,
    });
    alienSound.play();
  }

  static createTimeWarpEffect(scene) {
    const timeWarpTexture = scene.textures.get('time-warp');
    const timeWarpEmitter = scene.add.particles('time-warp').createEmitter({
      speed: { min: 200, max: 400 },
      angle: { min: 0, max: 360 },
      scale: { start: 1.5, end: 0.5 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 1000, max: 2000 },
      blendMode: 'ADD',
      frequency: 100,
      maxParticles: 3000,
    });
  }

  static playTimeWarpSound() {
    const timeWarpSound = new Howl({
      src: ['assets/time-warp.mp3'],
      volume: 0.7,
    });
    timeWarpSound.play();
  }

  static createResourceDepletionEffect(scene) {
    const resourceDepletionTexture = scene.textures.get('resource-depletion');
    const resourceDepletionEmitter = scene.add.particles('resource-depletion').createEmitter({
      speed: { min: 100, max: 200 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.8, end: 0.4 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 2000, max: 3000 },
      blendMode: 'NORMAL',
      frequency: 150,
      maxParticles: 5000,
    });
  }
}

export { SpecialEvents };