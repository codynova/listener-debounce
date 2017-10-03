var mobileBreakpoint = 768;
var isMobile;

document.addEventListener('DOMContentLoaded', function() {
    var windowWidth = window.innerWidth;
    isMobile = windowWidth < mobileBreakpoint ? true : false;
    windowResizeDebounce();
});

function windowResizeDebounce() {
    var resizeTimer;
    window.addEventListener('resize', function (e) {
        var windowWidth = window.innerWidth;
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
            var wasMobile = isMobile;
            isMobile = windowWidth < mobileBreakpoint ? true : false;
            if (wasMobile !== isMobile) {
                // Screen transitioned between desktop and mobile breakpoint
                // Do stuff here
            }
        }, 250);
    });
}