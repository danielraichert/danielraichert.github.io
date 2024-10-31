function setGliaAttribute(geoData) {
    if (typeof sm === 'undefined' || !sm.getApi) {
        console.error('Glia SDK not initialized');
        return;
    }

    const locationInfo = geoData.country_code;
    console.log('Attempting to set Glia custom attribute - location_info:', locationInfo);

    sm.getApi({version: 'v1'}).then(function(glia) {
        glia.updateInformation({
            customAttributesUpdateMethod: 'merge',
            customAttributes: {
                location_info: locationInfo
            }
        }).then(() => {
            console.log('Glia custom attribute set successfully. location_info:', locationInfo);
        }).catch(error => {
            console.error('Error setting Glia custom attribute:', error);
        });
    }).catch(error => {
        console.error('Error getting Glia API:', error);
    });
}