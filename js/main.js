var platform;

window.addEventListener('load', function () {
    document.addEventListener('deviceready', function () {
        alert("PhoneGap is now loaded!");
    }, false);
}, false);


$(document).bind("mobileinit", function(){
    alert('test');
    /*
    switch(platform) {
        case "Android":
            $.mobile.defaultPageTransition = "pop";
            break;
        case "iOS":
            $.mobile.page.prototype.options.addBackBtn= true;
            $.mobile.defaultPageTransition = "slide";
            break;
    }
    */
});





