$(function() {
  document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    alert('cordova is ready');
}


$(document).bind("mobileinit", function(){
    if((navigator.userAgent.match(/iPhone/i)) ||(navigator.userAgent.match(/iPod/i))) {
        $.mobile.page.prototype.options.addBackBtn= true;
        $.mobile.defaultPageTransition = "slide";        
    } else if (navigator.userAgent.match(/Android/i)){
        $.mobile.defaultPageTransition = "pop";      
    }   
});





