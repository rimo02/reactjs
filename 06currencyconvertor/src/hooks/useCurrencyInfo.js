import { useEffect, useState } from "react";


// creating your custom hooks
function useCurrencyInfo(currency) {

    const [data, setData] = useState({});
    useEffect(() => {
        console.log("Fetching data for:", currency);
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res[currency]) {
                    setData(res[currency]);
                    console.log("Fetched data:", res[currency]); // Debugging here
                }
            });
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;