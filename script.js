







//*  a side bar *//
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}

//* sign up form open function*//
function formopen(){
    document.getElementById("id01").style.display='block'
}



//*footer section copyriht *//
document.getElementById("year").textContent = new Date().getFullYear();


//*result area & herosection input file*//

// Trigger file input when button is clicked
document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('photoInput').click();
});

// Handle file input change and show photo preview
document.getElementById('photoInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('photoPreview');

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
});


//* disease and plant information section*//

// document.getElementById('plantname').innerHTML="plant = tomato"
// document.getElementById('plantdisease').innerHTML="disease = feaver"
// document.getElementById("plantkingdom").innerHTML="kingdom = nokia"




//* API section *//

// API key

const apiKey = 'fa96bea40e1bbdb6b5f04fd827778081';

// Function to get weather data
async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Unable to retrieve weather data.");
    }
}

// Function to display weather information
function displayWeather(data) {
    const weatherCard = document.getElementById('weatherCard');
    weatherCard.classList.remove('hidden');
    weatherCard.style.transform = 'translateY(0)';
    weatherCard.style.opacity = '1';


    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = `${data.main.temp} °C`;
    document.getElementById('humidity').textContent = `${data.main.humidity} %`;
    document.getElementById('windSpeed').textContent = `${data.wind.speed} m/s`;
    document.getElementById('weatherDescription').textContent = data.weather[0].description;
}

// Event listener for button click
document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});


// login form design

 

