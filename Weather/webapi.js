async function getTemp(cityName) {
    try {
        let apiUri = `http://api.weatherapi.com/v1/current.json?key=110ca927d89b4995856153932251704&q=${cityName}&aqi=no`;
        const res = await fetch(apiUri);
        const jsonData = await res.json();
        //console.log(res,jsonData)
        //console.log(jsonData)
        return jsonData;  // This returns a Promise that resolves with the weather data.
    } catch (err) {
        console.log("Error", err);
    }
}

//getTemp("Pune")

const data = getTemp("Ohio"); // data is a Promise
// Using .then() to consume the returned Promise and log the result
data.then(result => {
    console.log(result);  // This will log the weather data after the Promise resolves
});
