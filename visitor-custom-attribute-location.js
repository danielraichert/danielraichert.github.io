function setGliaAttribute(geoData) {
    sm.getApi({version: 'v1'}).then(function(glia) {
        glia.updateInformation({
            customAttributesUpdateMethod: 'merge',
            customAttributes: {
                location_info: geoData.country_code
            }
        }).then(() => {
            console.log('Glia custom attribute set successfully');
        }).catch(error => {
            console.error('Error setting Glia custom attribute:', error);
        });
    });
}

window.addEventListener('geolocationFetched', function(event) {
    setGliaAttribute(event.detail);
});