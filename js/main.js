$(document).bind("mobileinit", function(){
    $(document).bind("deviceready", function (){
        var platform = device.platform;
        navigator.notification.alert(platform);
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

});





