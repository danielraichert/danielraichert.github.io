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

    // Wait for the Glia SDK to be ready
    if (typeof salemove !== 'undefined') {
        salemove.on('ready', function() {
            // Request an engagement
            var engagementRequest = salemove.requestEngagement('text');
            
            engagementRequest.engagementPromise.then(function(engagement) {
                // Add click event listener to the Signup button
                signupButton.addEventListener('click', function() {
                    // Record the event when the Signup button is clicked
                    engagement.recordEvent({message: 'Signup button clicked'})
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
        });
    } else {
        console.error('Glia SDK not found');
    }
});