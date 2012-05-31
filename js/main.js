window.addEventListener('load', function () {
    document.addEventListener('deviceready', function () {
        alert("PhoneGap is now loaded!");
    }, false);
}, false);


$(document).bind("mobileinit", function(){
    if((navigator.userAgent.match(/iPhone/i)) ||(navigator.userAgent.match(/iPod/i))) {
        // use the softkey back button
        $.mobile.page.prototype.options.addBackBtn= true;

        // make slide the default trasition
        $.mobile.defaultPageTransition = "slide";      
        
        // use support for better scrolling on iOS
        $.mobile.touchOverflowEnabled = true;
    } else if (navigator.userAgent.match(/Android/i)){
        // make Android transition the pop effect
        $.mobile.defaultPageTransition = "pop";      
    }   
});





