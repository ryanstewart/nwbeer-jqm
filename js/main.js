var platform;

alert('does this get called');
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    alert('cordova is ready');
}


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





