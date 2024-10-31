function getIPAddress() {
    return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip);
}

function getGeolocation(ip) {
    return fetch(`https://ipapi.co/${ip}/json/`)
        .then(response => response.json());
}

function displayGeolocation() {
    getIPAddress()
        .then(ip => {
            console.log('IP Address:', ip);
            return getGeolocation(ip);
        })
        .then(geoData => {
            console.log('Geolocation Data:', geoData);
            
            const geoInfo = document.getElementById('geoInfo');
            geoInfo.innerHTML = `
                <p><strong>Country:</strong> ${geoData.country_name}</p>
                <p><strong>Region:</strong> ${geoData.region}</p>
                <p><strong>City:</strong> ${geoData.city}</p>
            `;

            // Dispatch the custom event
            window.dispatchEvent(new CustomEvent('geolocationFetched', { detail: geoData }));
        })
        .catch(error => {
            console.error('Error:', error);
            const geoInfo = document.getElementById('geoInfo');
            geoInfo.innerHTML = '<p>Unable to fetch location data. Ask Daniel to pay for ipify.</p>';
        });
}

window.onload = displayGeolocation;