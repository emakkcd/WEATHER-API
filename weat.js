const apiKey = "0b7c0cab813db022d045a739849f8b12";

function getWeather() {
    const cityInput = document.getElementById("city");
    const city = cityInput.value.trim();
    const result = document.getElementById("result");
    const resetBtn = document.getElementById("resetBtn");
    const loader = document.getElementById("loader");

    // Validation
    if (city === "") {
        result.innerHTML = "<p class='error'>⚠️ Please enter a city or country name.</p>";
        cityInput.focus();
        return;
    }

    // Show loader
    loader.style.display = "block";
    result.innerHTML = "";
    resetBtn.disabled = true;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Not found");
            return response.json();
        })
        .then(data => {
            loader.style.display = "none";

            result.innerHTML = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;

            resetBtn.disabled = false;
        })
        .catch(() => {
            loader.style.display = "none";
            result.innerHTML = "<p class='error'>❌ City or country not found.</p>";
        });
}

function resetWeather() {
    document.getElementById("city").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("resetBtn").disabled = true;
}
