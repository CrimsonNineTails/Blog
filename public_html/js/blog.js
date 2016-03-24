
$(function () {
   var APPLICATION_ID =  "CC3979E6-F655-FD96-FF13-1FAAD8E3DE00",
       SECRET_KEY = "76B7A6FF-ACD6-07C5-FFF8-BB69AB961B00",
       VERSION = "v1";
       
   Backendless.initApp(APPLICATION_ID,SECRET_KEY, VERSION);
   
   var user = new Backendless.user();
   user.email = "anders.museth@gmail.com"
   user.password = "password";
   Backendless.userService.register(sure);
   
});