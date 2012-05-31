$(function() {
    alert('onload');
    document.addEventListener("deviceready", onDeviceReady, true);
});

function onDeviceReady() {
    alert('please fire');
}


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

$(document).bind('pageinit', function() {
    $("#photos").bind("tap", function(e) {
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, 
                                                               destinationType: destinationType.DATA_URL });
    });
});

function onPhotoDataSuccess(imageData) {
    console.log('photo success');
}

function onFail(message) {
    alert('Failed because: ' + message);
}



