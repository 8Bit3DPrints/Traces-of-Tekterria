    function updateGameEnvironment(location, weather, timeOfDay) {
        const body = document.getElementById('game-body');
        const locationDisplay = document.getElementById('location-display');
        const weatherDisplay = document.getElementById('weather-display');
        const timeDayDisplay = document.getElementById('time-day-display');
    
        // Update classes for dynamic CSS styling
        body.className = `${location} ${timeOfDay} ${weather}`;
    
        // Update the display texts
        locationDisplay.textContent = `Location: ${capitalizeFirstLetter(location)}`;
        weatherDisplay.textContent = `Weather: ${capitalizeFirstLetter(weather)}`;
        timeDayDisplay.textContent = `Time of Day: ${capitalizeFirstLetter(timeOfDay)}`;
    }
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
