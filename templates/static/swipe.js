document.addEventListener('DOMContentLoaded', (event) => {
    const swipeArea = document.getElementById('swipeArea');

    const SwipeDirection = Object.freeze({
        UP: 'up',
        DOWN: 'down',
        LEFT: 'left',
        RIGHT: 'right'
    });
    let gesture = undefined;

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    swipeArea.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
        console.log(touchstartX, touchstartY);
    }, false);

    swipeArea.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const diffX = touchendX - touchstartX;
        const diffY = touchendY - touchstartY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Horizontal Swipe
            if (diffX > 0) {
                gesture = SwipeDirection.RIGHT
                console.log('Swiped right');
            } else {
                console.log('Swiped left');
            }
        } else {
            // Vertical Swipe
            if (diffY > 0) {
                console.log('Swiped down');
            } else {
                console.log('Swiped up');
            }
        }
    }
});
