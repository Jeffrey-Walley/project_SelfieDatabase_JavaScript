// Module 02 ep10 - using GeoLocation API
// GeoLocating the client using Navigator.geolocation   



// MODULE 02 ep11 - posting with fetch() <fetch can POST as well as GET>
// send data from client to server 
//   (working with Routing in the Express local server, JSON parsing)

let lat, lon;
const button = document.getElementById('submit');
button.addEventListener('click', async event => {
    const data = { lat, lon };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
});

if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;
    });
} else {
    console.log('geolocation not available');
}
/* above we have data that we have aquired from the API and we are hosting it
  on our local server */

// MODULE 02 ep12 - Node NeDB and Database
// Database is for persistence

// MODULE 02 ep13 - Querying Data from the Database