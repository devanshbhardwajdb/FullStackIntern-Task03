### README File

---

## Weather Forecast Dashboard

### Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/weather-forecast-dashboard.git
   cd weather-forecast-dashboard
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file in the root directory and add:
   ```
   NEXT_PUBLIC_API_KEY=your_weatherapi_key_here
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

### Overview

This Weather Forecast Dashboard provides:

- **Current Weather**: Displays current weather information for a specified city, including temperature, humidity, wind speed, and conditions.
- **5-Day Forecast**: Shows the weather forecast for the next five days.
- **Unit Toggle**: Switch between Celsius and Fahrenheit.

Error handling is managed with `react-toastify`, which displays an error message if an invalid city name is entered. 

Components include `IndexPage` for main functionality, `WeatherCard` for current weather details, and `ForecastCard` for the 5-day forecast.

---

Feel free to adjust the details as needed!