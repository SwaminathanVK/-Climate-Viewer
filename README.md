
🌤️ React Weather App
A responsive React.js weather application that fetches and displays real-time weather data using the OpenWeatherMap API. It features theme toggling (light/dark mode) and city-based weather search with context management.

📸 Screenshot
<img width="1919" height="892" alt="image" src="https://github.com/user-attachments/assets/9b13ad1d-649f-4356-a0ad-272a59f55a0b" />
public/screenshot.png

🚀 Features
🌎 Search weather by city name

☀️ Real-time weather data (temperature, humidity, wind speed, description)

🌗 Theme toggle (Light/Dark) using ThemeContext

☁️ Weather data managed with WeatherContext

🎯 Responsive design with Bootstrap styling

🔐 Environment variable handling for secure API key usage

🛠️ Tech Stack
React.js (Vite)

Bootstrap 5

Context API (ThemeContext + WeatherContext)

Axios for API requests

OpenWeatherMap API

📂 Folder Structure
src/
│
├── components/
│   └── WeatherCard.jsx
│
├── context/
│   ├── ThemeContext.jsx
│   └── WeatherContext.jsx
│
├── App.jsx
└── main.jsx

⚙️ Setup Instructions
Clone the repository

git clone https://github.com/your-username/react-weather-app.git
cd react-weather-app

Install dependencies

npm install

Get OpenWeatherMap API Key

Sign up at https://openweathermap.org/api

Generate your API key

Configure .env file
Create a .env file in the root:

VITE_WEATHER_API_KEY=your_api_key_here
Run the app
npm run dev

📦 Deployment
To build the app for production:

npm run build
You can then deploy the dist folder to platforms like:

 - Vercel
 - Netlify

GitHub Pages

👨‍💻 Author
Swaminathan VK

GitHub: SwaminathanVK

LinkedIn: swaminathan-vk
