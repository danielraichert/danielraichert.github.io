// Function to get IP address from ipify
function getIPAddress() {
    return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip);
}

// Function to get geolocation from ip-api
function getGeolocation(ip) {
    return fetch(`https://ipapi.co/${ip}/json/`)
        .then(response => response.json());
}

// Main function to get and display geolocation
function displayGeolocation() {
    getIPAddress()
        .then(ip => {
            console.log('IP Address:', ip);
            return getGeolocation(ip);
        })
        .then(geoData => {
            console.log('Geolocation Data:', geoData);
            
            // Display the geolocation information
            const geoInfo = document.getElementById('geoInfo');
            geoInfo.innerHTML = `
                <p><strong>Country:</strong> ${geoData.country_name}</p>
                <p><strong>Region:</strong> ${geoData.region}</p>
                <p><strong>City:</strong> ${geoData.city}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            const geoInfo = document.getElementById('geoInfo');
            geoInfo.innerHTML = '<p>Unable to fetch location data.</p>';
        });
}

// Call the function when the page loads
window.onload = displayGeolocation;