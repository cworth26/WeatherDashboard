const cityInput = document.querySelector("#city-input");
const form = document.querySelector("#form");

const url = 'https://api.openweathermap.org/data/2.5/weather?appid=632264bfdc59ffbe3e15e5440fa9112b';
const apiKey = "632264bfdc59ffbe3e15e5440fa9112b";

console.log('HERE', cityInput, form);
function getApi(city) {
    fetch(url + "&q=" + city)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Type a city/state');
        console.log(data);
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        // Make another request to the oneCall api
        const url = "https://api.openweathermap.org/data/2.5/onecall?appid=632264bfdc59ffbe3e15e5440fa9112b";
        fetch(url + "&lat=" + lat + "&lon=" + lon)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });       
    });
       
}

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("here");
    const inputVal = cityInput.value.trim(); 
    getApi(inputVal);
});

// - () tells it to run a function