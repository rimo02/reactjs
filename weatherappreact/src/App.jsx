import { useState } from "react";
import "./App.css";
import Search from "./components/Searchbar/Search";
import Weatherbox from "./components/WeatherBox/Weatherbox";
import useWeather from "./hooks/getweather";
import dayImage from './assets/day.jpg'
import nightImage from './assets/night.jpeg'

function App() {
    const [city, setCity] = useState("");
    const { data } = useWeather(city);

    // Ensure data exists before accessing its properties
    const icon = data?.weather?.[0]?.icon || "01d"; // Default icon if undefined
    const img = icon.endsWith("d") ? dayImage : nightImage;

    return (
        <div
            className="bg-gray-500 min-h-screen flex flex-col justify-center items-center bg-no-repeat w-full"
            style={{ backgroundImage: `url(${img})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                width: "100vw",
                height: "100vh",

        }}
        >
            <Weatherbox weatherData={data} />
            <Search onSearch={setCity} />
        </div>
    );
}

export default App;
