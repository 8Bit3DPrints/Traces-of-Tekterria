class WeatherEffects {
    static handleWeather(weather, playerEffects) {
        switch (weather) {
            case 'acid rain':
                playerEffects.corrosion = true;
                EnvironmentalUtilities.requireProtectiveGear('acid-resistant gear');
                EnvironmentalUtilities.damageExposedItems('metal', 'severe');
                break;
            // Additional weather cases
        }
    }
}
export { WeatherEffects };
