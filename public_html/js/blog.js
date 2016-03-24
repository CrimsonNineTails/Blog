
$(function () {
   var APPLICATION_ID =  "CC3979E6-F655-FD96-FF13-1FAAD8E3DE00",
       SECRET_KEY = "76B7A6FF-ACD6-07C5-FFF8-BB69AB961B00",
       VERSION = "v1";
       
   Backendless.initApp(APPLICATION_ID,SECRET_KEY, VERSION);
   
  // var user = new Backendless.User();
   //user.email = "anders.museth@gmail.com"
   //user.password = "password";
   //Backendless.UserService.register(user);
   
   var dataStore = Backendless.Persistence.of(Posts);
   var post = new Posts ({title: "My First Blog Post", content:"My first blog post content", authorEmail:"email@email.com"});
   dataStore.save(post);
   
});

function Posts(args){
    args = args || "";
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}