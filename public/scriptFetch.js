// Client Side JavaScript - calls the geolocation and createVideo()

// MODULE 02 ep13 working with Fetch

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        const root = document.createElement('p');
        const mood = document.createElement('div');
        const date = document.createElement('div');
        const geo = document.createElement('div');


        mood.textContent = `mood: ${item.mood}`;
        geo.textContent = `${item.lat}°, ${item.lon}°`;
        const dateString = new Date(item.timestamp).toLocaleDateString();
        date.textContent = dateString;

        root.append(mood, geo, date);
        document.body.append(root);

    }

    console.log(data);
};

// MODULE 02 ep14 saving Images and base64 encoding
// use webcam and P5.js library