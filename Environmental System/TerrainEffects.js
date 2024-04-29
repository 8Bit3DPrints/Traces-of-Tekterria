import { Howl, Howler } from 'howler';

class TerrainEffects {
  static handleTerrainChanges(environment, scene, map) {
    if (environment.specialEvents.includes('earthquake')) {
      EnvironmentalUtilities.alterGameMap('create new paths', 'destroy old paths', map);
      this.createEarthquakeEffect(scene, map);
      this.playEarthquakeSound();
    }

    if (environment.weather === 'acid rain') {
      EnvironmentalUtilities.damageTerrainObjects('metal', 'severe', map);
    }

    if (environment.weather === 'radioactive fallout') {
      EnvironmentalUtilities.contaminateTerrainObjects('organic', 'high', map);
    }

    if (environment.weather === 'volcanic eruption') {
      EnvironmentalUtilities.damageTerrainObjects('all', 'moderate', map);
      this.createVolcanicTerrainEffect(scene, map);
    }

    if (environment.weather === 'blizzard') {
      EnvironmentalUtilities.freezeTerrainObjects('all', 'low', map);
      this.createSnowTerrainEffect(scene, map);
    }

    if (environment.weather === 'thunderstorm') {
      EnvironmentalUtilities.damageTerrainObjects('tall structures', 'severe', map);
      this.createLightningStrikeEffect(scene, map);
    }

    // Additional terrain logic
  }

  static createEarthquakeEffect(scene, map) {
    // Screen shake effect
    scene.cameras.main.shake(500, 0.01);

    // Create terrain cracks
    const terrainCrackTexture = scene.textures.get('terrain-crack');
    const crackEmitter = scene.add.particles('terrain-crack').createEmitter({
      speed: { min: 50, max: 150 },
      angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0.5 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 2000, max: 4000 },
      blendMode: 'NORMAL',
      frequency: 100,
      maxParticles: 5000,
    });

    // Update terrain tiles
    map.createEarthquakeCracks();
  }

  static playEarthquakeSound() {
    const earthquakeSound = new Howl({
      src: ['assets/earthquake.mp3'],
      volume: 0.8,
    });
    earthquakeSound.play();
  }

  static createVolcanicTerrainEffect(scene, map) {
    // Create lava flows
    const lavaTexture = scene.textures.get('lava');
    const lavaEmitter = scene.add.particles('lava').createEmitter({
      speed: { min: 50, max: 150 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.8, end: 0.4 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 3000, max: 5000 },
      blendMode: 'NORMAL',
      frequency: 200,
      maxParticles: 10000,
    });

    // Update terrain tiles
    map.createLavaFlows();
  }

  static createSnowTerrainEffect(scene, map) {
    // Create snow drifts
    const snowDriftTexture = scene.textures.get('snow-drift');
    const snowDriftEmitter = scene.add.particles('snow-drift').createEmitter({
      speed: { min: 50, max: 100 },
      angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0.5 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 5000, max: 10000 },
      blendMode: 'NORMAL',
      frequency: 50,
      maxParticles: 3000,
    });

    // Update terrain tiles
    map.createSnowDrifts();
  }

  static createLightningStrikeEffect(scene, map) {
    // Create lightning strikes
    const lightningTexture = scene.textures.get('lightning');
    const lightningEmitter = scene.add.particles('lightning').createEmitter({
      speed: { min: 200, max: 500 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.8, end: 0.2 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 100, max: 300 },
      blendMode: 'ADD',
      frequency: 500,
      maxParticles: 1000,
    });

    // Update terrain tiles
    map.createLightningStrikes();
  }
}

export { TerrainEffects };