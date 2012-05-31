$(document).bind("mobileinit", function(){
    $.mobile.defaultPageTransition = "slide";
    $.mobile.page.prototype.options.addBackBtn= true;
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


$(document).bind("deviceready", function (){
    platform = device.platform;



});


