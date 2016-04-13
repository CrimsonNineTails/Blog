$(".button-collapse").sideNav();

$(function () {
   var APPLICATION_ID =  "CC3979E6-F655-FD96-FF13-1FAAD8E3DE00",
       SECRET_KEY = "76B7A6FF-ACD6-07C5-FFF8-BB69AB961B00",
       VERSION = "v1";
       
   Backendless.initApp(APPLICATION_ID,SECRET_KEY, VERSION);
   
  // var user = new Backendless.User();
   //user.email = "anders.museth@gmail.com"
   //user.password = "password";
   //Backendless.UserService.register(user);
   
   var postsCollection = Backendless.Persistence.of(Posts).find();
   
  
    console.log(postsCollection);
   var wrapper = {
       posts: postsCollection.data
   };
   
      currentDate = Date.now();
      currentDate = moment(currentDate).format("ddd, MMM Do YYYY");
      countOfPostsToday = 0;
    
    for(i = 0; i < postsCollection.data.length; i++)
    {
        post = postsCollection.data[i] ;
        createdDate = moment(post.created).format("ddd, MMM Do YYYY");
        if(createdDate == currentDate)
            countOfPostsToday++;
    }
    postCount = document.getElementById("postCount");
    postCount.innerHTML = countOfPostsToday;
    Handlebars.registerHelper('format', function (time) {
        return moment(time).format("ddd, MMM Do YYYY")
    });
Handlebars.registerHelper('format', function (time) {
      return moment(time).format("dddd, MMMM Do YYYY") ;   
});
   
   var blogScript = $("#blogs-template").html();
   var blogTemplate = Handlebars.compile(blogScript);
   var blogHTML = blogTemplate(wrapper);
   
   $('.main-container').html(blogHTML);
      var blogScript = $("#today-template").html();
   var blogTemplate = Handlebars.compile(blogScript);
   var blogHTML = blogTemplate(wrapper);
   
   $('.new').html(blogHTML);
});

function Posts(args){
    args = args || "";
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}
//Handlebars.registerHelper('poststoday', function () {
//var dayAgo = (new date).getTime() - (86400000);
  // var query = {condition: "created > + dayAgo"};
   //var daylyPosts = Backendless.Persistence.of(Posts).find(query);
   //return daylyPosts.data.length;
//});