function setGliaAttribute(geoData) {
    if (typeof sm === 'undefined' || !sm.getApi) {
        console.error('Glia SDK not initialized');
        return;
    }

    sm.getApi({version: 'v1'}).then(function(glia) {
        glia.updateInformation({
            customAttributesUpdateMethod: 'merge',
            customAttributes: {
                location_info: geoData.country_code
            }
        }).then(() => {
            console.log(`Glia custom attribute set successfully: ${geoData.country_code}`);
        }).catch(error => {
            console.error('Error setting Glia custom attribute:', error);
        });
    }).catch(error => {
        console.error('Error getting Glia API:', error);
    });
}

window.addEventListener('geolocationFetched', function(event) {
    setGliaAttribute(event.detail);
});