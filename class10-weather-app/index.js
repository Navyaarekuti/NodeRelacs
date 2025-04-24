let target = "Guntur";
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location > p");
const dateField = document.querySelector(".time_location > span");
const emojiField = document.querySelector(".weather_condition img");
const conditionField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

form.addEventListener("submit", search);
//The event listener is waiting for user interaction — in this case, a form submission.

// callback funciton search
function search(event) {
    event.preventDefault(); // it prevents the default behaviour of any event
    target = searchField.value;
    fetchData(target);
  }
async function fetchData(target)
{try{
    const url = `https://api.weatherapi.com/v1/current.json?key=110ca927d89b4995856153932251704&q=${target}&aqi=yes`;
    const response = await fetch(url);
    //fetch() = used to call APIs (get or post data from servers), and returns a promise.
    console.log(response);
    const data = await response.json(); //response.json() -> returns a promise but this has the data we need
    console.log(data);
    if(data.error){
        throw new Error(data.error.message);
    }
    const currentTemp = data.current.temp_c;
    const currentCondition = data.current.condition.text;
    const locationName = data.location.name;
    const localTime = data.location.localtime;
    const conditionEmoji = data.current.condition.icon;
    console.log(
      `The current temperature in ${locationName} is ${currentTemp}°C. The weather is ${currentCondition}. Local time is ${localTime}.`
    );
    updateDOM(currentTemp, locationName, localTime, conditionEmoji, currentCondition);
  }

  catch(err){
    console.log(err)
  }
}
function updateDOM(temp, locationName, time, emoji, condition) {
  temperatureField.innerText = `${temp}°C`;
  cityField.innerText = locationName;


  dateField.innerText = time;
  emojiField.src = emoji;
  conditionField.innerText = condition;
}



fetchData(target)