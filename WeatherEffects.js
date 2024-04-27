import { ParticleEmitter } from 'phaser';
import { Howl, Howler } from 'howler';

class WeatherEffects {
  static handleWeather(weather, playerEffects, scene) {
    switch (weather) {
      case 'acid rain':
        playerEffects.corrosion = true;
        EnvironmentalUtilities.requireProtectiveGear('acid-resistant gear');
        EnvironmentalUtilities.damageExposedItems('metal', 'severe');
        this.createAcidRainParticles(scene);
        this.playAcidRainSound();
        break;
      case 'radioactive fallout':
        playerEffects.radiation = true;
        EnvironmentalUtilities.requireProtectiveGear('hazmat suit');
        EnvironmentalUtilities.damageExposedItems('organic', 'severe');
        this.createRadiationParticles(scene);
        this.playGeigerSound();
        break;
      case 'toxic smog':
        playerEffects.toxicity = true;
        EnvironmentalUtilities.requireProtectiveGear('gas mask');
        EnvironmentalUtilities.damageExposedItems('all', 'moderate');
        this.createSmogOverlay(scene);
        this.playWindSound();
        break;
      case 'solar flare':
        playerEffects.electricalDisruption = true;
        EnvironmentalUtilities.requireProtectiveGear('faraday cage');
        EnvironmentalUtilities.damageExposedItems('electronics', 'severe');
        this.createSolarFlareEffect(scene);
        this.playSolarFlareSound();
        break;
      case 'electromagnetic storm':
        playerEffects.electricalDisruption = true;
        EnvironmentalUtilities.requireProtectiveGear('faraday cage');
        EnvironmentalUtilities.damageExposedItems('electronics', 'moderate');
        this.createEMPEffect(scene);
        this.playEMPSound();
        break;
      case 'volcanic eruption':
        playerEffects.visibility = 'low';
        EnvironmentalUtilities.requireProtectiveGear('respirator');
        EnvironmentalUtilities.damageExposedItems('organic', 'severe');
        this.createVolcanicAshParticles(scene);
        this.playVolcanoSound();
        break;
      case 'blizzard':
        playerEffects.visibility = 'low';
        playerEffects.mobility = 'impaired';
        EnvironmentalUtilities.requireProtectiveGear('thermal suit');
        EnvironmentalUtilities.damageExposedItems('all', 'moderate');
        this.createSnowParticles(scene);
        this.playWindSound();
        break;
      // Additional weather cases
    }
  }

  static createAcidRainParticles(scene) {
    const acidRainTexture = scene.textures.get('acid-rain-particle');
    const acidRainEmitter = scene.add.particles('acid-rain-particle').createEmitter({
      speed: { min: 100, max: 200 },
      angle: { min: 180, max: 360 },
      scale: { start: 0.5, end: 0.2 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 500, max: 1000 },
      blendMode: 'NORMAL',
      frequency: 100,
      maxParticles: 10000,
    });
  }

  static playAcidRainSound() {
    const acidRainSound = new Howl({
      src: ['assets/acid-rain.mp3'],
      loop: true,
      volume: 0.5,
    });
    acidRainSound.play();
  }

  static createRadiationParticles(scene) {
    const radiationTexture = scene.textures.get('radiation-particle');
    const radiationEmitter = scene.add.particles('radiation-particle').createEmitter({
      speed: { min: 50, max: 150 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.3, end: 0.1 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 1000, max: 2000 },
      blendMode: 'ADD',
      frequency: 50,
      maxParticles: 5000,
    });
  }

  static playGeigerSound() {
    const geigerSound = new Howl({
      src: ['assets/geiger-counter.mp3'],
      loop: true,
      volume: 0.3,
    });
    geigerSound.play();
  }

  static createSmogOverlay(scene) {
    const smogOverlay = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x888888, 0.5);
    smogOverlay.setOrigin(0, 0);
  }

  static playWindSound() {
    const windSound = new Howl({
      src: ['assets/wind.mp3'],
      loop: true,
      volume: 0.4,
    });
    windSound.play();
  }

  static createSolarFlareEffect(scene) {
    const solarFlareTexture = scene.textures.get('solar-flare');
    const solarFlareEmitter = scene.add.particles('solar-flare').createEmitter({
      speed: { min: 100, max: 300 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.8, end: 0.2 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 500, max: 1000 },
      blendMode: 'ADD',
      frequency: 200,
      maxParticles: 10000,
    });
  }

  static playSolarFlareSound() {
    const solarFlareSound = new Howl({
      src: ['assets/solar-flare.mp3'],
      volume: 0.7,
    });
    solarFlareSound.play();
  }

  static createEMPEffect(scene) {
    const empTexture = scene.textures.get('emp-particle');
    const empEmitter = scene.add.particles('emp-particle').createEmitter({
      speed: { min: 200, max: 500 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.6, end: 0.2 },
      alpha: { start: 1, end: 0 },
      lifespan: { min: 500, max: 1000 },
      blendMode: 'ADD',
      frequency: 100,
      maxParticles: 5000,
    });
  }

  static playEMPSound() {
    const empSound = new Howl({
      src: ['assets/emp.mp3'],
      volume: 0.8,
    });
    empSound.play();
  }

  static createVolcanicAshParticles(scene) {
    const ashTexture = scene.textures.get('volcanic-ash');
    const ashEmitter = scene.add.particles('volcanic-ash').createEmitter({
      speed: { min: 50, max: 150 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.5, end: 0.2 },
      alpha: { start: 0.8, end: 0 },
      lifespan: { min: 2000, max: 4000 },
      blendMode: 'NORMAL',
      frequency: 200,
      maxParticles: 20000,
    });
  }

  static playVolcanoSound() {
    const volcanoSound = new Howl({
      src: ['assets/volcano.mp3'],
      loop: true,
      volume: 0.6,
    });
    volcanoSound.play();
  }
  
  static createSnowParticles(scene) {
    const snowTexture = scene.textures.get('snow-particle');
    const snowEmitter = scene.add.particles('snow-particle').createEmitter({
      speed: { min: 50, max: 150 },
      angle: { min: -90, max: 90 },
      scale: { start: 0.3, end: 0.1 },
      alpha: { start: 0.6, end: 0 },
      lifespan: { min: 1000, max: 2000 },
      blendMode: 'NORMAL',
      frequency: 100,
      maxParticles: 10000,
    });
  }
  
  static createSandstormEffect(scene) {
    const sandTexture = scene.textures.get('sand-particle');
    const sandEmitter = scene.add.particles('sand-particle').createEmitter({
      speed: { min: 100, max: 300 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.6, end: 0.2 },
      alpha: { start: 0.8, end: 0 },
      lifespan: { min: 1000, max: 2000 },
      blendMode: 'NORMAL',
      frequency: 300,
      maxParticles: 15000,
    });
  }
  
  static playSandstormSound() {
    const sandstormSound = new Howl({
      src: ['assets/sandstorm.mp3'],
      loop: true,
      volume: 0.5,
    });
    sandstormSound.play();
  }
  
  static createThunderStormEffect(scene) {
    const cloudTexture = scene.textures.get('cloud');
    const cloudEmitter = scene.add.particles('cloud').createEmitter({
      speed: { min: 50, max: 100 },
      angle: { min: 0, max: 360 },
      scale: { start: 1.5, end: 2.5 },
      alpha: { start: 0.6, end: 0 },
      lifespan: { min: 3000, max: 5000 },
      blendMode: 'NORMAL',
      frequency: 50,
      maxParticles: 2000,
    });
  
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
  }
  
  static playThunderSound() {
    const thunderSound = new Howl({
      src: ['assets/thunder.mp3'],
      volume: 0.7,
    });
    thunderSound.play();
    }
}