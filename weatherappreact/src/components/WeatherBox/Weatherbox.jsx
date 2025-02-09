export default function Weatherbox({ weatherData }) {

    let imgSrc = "";

    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
        const iconCode = weatherData.weather[0].icon;  // Get the icon from API response
        imgSrc = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;  // Use the correct icon for that location
    }
    return (
        <div className="absolute top-30 left-1/2 w-[70%] -translate-x-1/2 flex p-4 bg-transparent shadow-md h-[60%]">
            {weatherData ? (
                <>
                    <div className='w-1/2 p-2'>
                        <img
                            src={imgSrc}
                            alt="Weather Icon"
                            className='w-full h-full object-cover rounded-lg'
                        />
                    </div>
                    <div className='flex flex-col justify-center w-1/2 p-4'>
                        <h2 className="text-xl font-semibold">{weatherData.name}</h2>
                        <p className="text-gray-900">Temperature: {weatherData.main?.temp} °C</p>
                        <p className="text-gray-900">Humidity: {weatherData.main?.humidity}%</p>
                        <p className="text-gray-900">Wind Speed: {weatherData.wind?.speed} km/h</p>
                        <p className="text-gray-900 font-bold">{weatherData.weather[0].description}</p>
                    </div>
                </>
            ) : (
                <p className="text-gray-600">Enter a city to get weather details.</p>
            )}
        </div>
    );
}
