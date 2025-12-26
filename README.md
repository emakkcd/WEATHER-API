# ReyMark Weather Update ☀️🌦️

A simple and interactive Weather Application built using HTML, CSS, and JavaScript, powered by the OpenWeatherMap API.  
The app allows users to search for real-time weather information by entering a city or country name.

---

## 📌 Features

- Search weather by city or country name
- Displays real-time weather data:
  - Temperature (°C)
  - Feels-like temperature
  - Weather description
  - Humidity
  - Wind speed
- Loading spinner while fetching data
- Input validation with error messages
- Reset button with disabled state handling
- Clean and responsive UI

---

## 🛠️ Technologies Used

- HTML – Structure and layout
- CSS – Styling, animations, and responsiveness
- JavaScript – API handling, logic, and interactivity
- OpenWeatherMap API – Real-time weather data

---

## 📂 Project Structure

weather-app/
│
├── weat.html # Main HTML file
├── weat.css # Styling file
├── weat.js # Weather API logic
└── README.md # Project documentation



---

## 🚀 How to Run the Project

1. Download or clone the project files.
2. Make sure all files are in the same directory:
   - `weat.html`
   - `weat.css`
   - `weat.js`
3. Open `weat.html` in any modern web browser.
4. Enter a city or country name and click Get Weather.

---

## 🔑 API Information

- API Provider: OpenWeatherMap
- Base URL: 
  `https://api.openweathermap.org/data/2.5/weather`
- Authentication: 
  API Key (required)
-Units:  
  Metric (Celsius)

### Sample API Request

https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=YOUR_API_KEY&units=metric


---

## 🧠 How It Works

- User input is validated before making an API request.
- A loading spinner appears while data is being fetched.
- Weather data is retrieved using the `fetch()` API.
- Results are dynamically displayed on the page.
- Errors are handled gracefully if the location is not found.

---

## 🎨 Design Highlights

- Gradient background for a modern look
- Card-style weather container with shadow
- Animated loading spinner
- Hover effects on buttons
- Disabled reset button until data is loaded

---

## 👤 Author

**Reymark Orlanda**  
Web Development Project (HTML, CSS, JavaScript)

---

## ⚠️ Notes

- Replace the API key in `weat.js` with your own OpenWeatherMap API key.
- This project is intended for educational purposes.

---

## 📄 License

This project is open-source and free to use for learning and educational use.

