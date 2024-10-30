document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    const signupButton = document.querySelector('.btn-signup');

    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuButton.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Glia integration
    if (typeof salemove !== 'undefined') {
        var engagementRequest = salemove.requestEngagement('text');

        engagementRequest.engagementPromise.then(function(engagement) {
            // Add click event listener to the Sign Up button
            signupButton.addEventListener('click', function() {
                engagement.recordEvent({message: 'Sign Up button clicked'})
                    .then(() => {
                        console.log('Event recorded successfully');
                    })
                    .catch((error) => {
                        console.error('Failed to record event:', error);
                    });
            });
        }).catch(function(error) {
            console.error('Failed to request engagement:', error);
        });
    } else {
        console.warn('Glia SDK not loaded');
    }
});