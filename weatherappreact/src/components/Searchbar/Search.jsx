import { useState } from "react";

export default function Search({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <div className="absolute bottom-4 left-1/2 w-[60%] -translate-x-1/3">
            <form onSubmit={handleSubmit} className="flex items-center px-4 py-2 w-[70%]">
                <input 
                    type="text"
                    className="m-4 rounded-full mx-1 px-3 py-2 w-full bg-white outline-none shadow-md"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 rounded-xl px-4 py-2 text-white">Submit</button>
            </form>
        </div>
    );
}
