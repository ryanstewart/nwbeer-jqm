var platform;

function init() {
    document.addEventListener("deviceready",onDeviceReady);
}

onDeviceReady(e) {
    platform = device.platform;
    navigator.notification.alert(platform);
}

$(document).bind("mobileinit", function(){
    alert('test');
    switch(platform) {
        case "Android":
            $.mobile.defaultPageTransition = "pop";
            break;
        case "iOS":
            $.mobile.page.prototype.options.addBackBtn= true;
            $.mobile.defaultPageTransition = "slide";
            break;
    }
});





