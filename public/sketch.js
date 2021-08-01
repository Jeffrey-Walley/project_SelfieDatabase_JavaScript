// MODULE 02 ep14 // sketch.js is typical for the p5.js library
function setup() {
    noCanvas();
    const video = createCapture(VIDEO);
    video.size(480, 480);
    let lat, lon;
    const button = document.getElementById('submit');

    // when you press the button the data is sent to the server
    button.addEventListener('click', async event => {
        const mood = document.getElementById('mood').value;
        video.loadPixels(); // alerts P5.js that you want to use the video's canvas (not loaded by default)
        const image64 = video.canvas.toDataURL(); // take image, convert it to base64 to transmit
        const data = { lat, lon, mood, image64 };
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
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat, lon);
            document.getElementById('latitude').textContent = lat;
            document.getElementById('longitude').textContent = lon;
        });
    } else {
        console.log('geolocation not available');
    }
}

// image.src = item.image64; // base64 image in the database 'item'