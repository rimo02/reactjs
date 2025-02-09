import { useState, useEffect } from "react";
function useWeather(city) {
    const [data, setData] = useState(null);
    const api = import.meta.env.VITE_APP_API_KEY;
    console.log(api);

    useEffect(() => {
        if (!city || !api) return;

        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
                );



                if (!res.ok) {
                    throw new Error("Failed to fetch weather data");
                }

                const weatherData = await res.json();
                setData(weatherData);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setData(null);
            }
        };

        fetchWeather();
    }, [city, api]);

    return { data };
}

export default useWeather;
