class TerrainEffects {
    static handleTerrainChanges(environment) {
        if (environment.specialEvents.includes('earthquake')) {
            EnvironmentalUtilities.alterGameMap('create new paths', 'destroy old paths');
        }
        // Additional terrain logic
    }
}
export { TerrainEffects };
