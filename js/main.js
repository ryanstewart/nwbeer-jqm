$(document).bind("mobileinit", function(){
    $.mobile.defaultPageTransition = "slide";
    $.mobile.page.prototype.options.addBackBtn= true;
    $(document).bind("deviceready", function (){
        var platform = device.platform;
        navigator.alert(platform);
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





