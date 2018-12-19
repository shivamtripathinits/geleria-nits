var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy=require("passport-local"),
    feeds  = require("./models/feeds"),
    Comment     = require("./models/comment"),
    User        = require("./models/user");
    // seedDB      = require("./seeds");
    
mongoose.connect("mongodb://shivam:shivam3898@ds011705.mlab.com:11705/shivam",{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
// seedDB();

app.use(require("express-session")({
	secret:"shivam389",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all feeds
app.get("/feeds",isLoggedIn, function(req, res){
    // Get all feeds from DB
    feeds.find({}, function(err, allfeeds){
       if(err){
           console.log(err);
       } else {
          res.render("feeds/index",{feeds:allfeeds});
       }
    });
});

//CREATE - add new feeds to DB
app.post("/feeds", function(req, res){
    // get data from form and add to feeds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newfeeds = {name: name, image: image, description: desc}
    // Create a new feeds and save to DB
    feeds.create(newfeeds, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to feeds page
            res.redirect("/feeds");
        }
    });
});

//NEW - show form to create new feeds
app.get("/feeds/new",isLoggedIn, function(req, res){
   res.render("feeds/new"); 
});

// SHOW - shows more info about one feeds
app.get("/feeds/:id",isLoggedIn, function(req, res){
    //find the feeds with provided ID
    feeds.findById(req.params.id).populate("comments").exec(function(err, foundfeeds){
        if(err){
            console.log(err);
        } else {
            foundfeeds.author.id = req.user._id;
               foundfeeds.author.username = req.user.username;
               //save comment
               foundfeeds.save();
            //render show template with that feeds
            res.render("feeds/show", {feeds: foundfeeds});
        }
    });
});


// ====================
// COMMENTS ROUTES
// ====================

app.get("/feeds/:id/comments/new",isLoggedIn,function(req, res){
    // find feeds by id
    feeds.findById(req.params.id, function(err, feeds){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {feeds: feeds});
        }
    })
});

app.post("/feeds/:id/comments", function(req, res){
   //lookup feeds using ID
   feeds.findById(req.params.id, function(err, feeds){
       if(err){
           console.log(err);
           res.redirect("/feeds");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               comment.save();
               feeds.comments.push(comment);
               feeds.save();
               res.redirect('/feeds/' + feeds._id);
           }
        });
       }
   });
   //create new comment
   //connect new comment to feeds
   //redirect feeds show page
});


//delete karo
app.post("/feeds/:id", function(req, res){
   feeds.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/feeds");
      } else {
          res.redirect("/feeds");
      }
   });
});



// Authentication

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
	return next();
}
res.redirect("/login");
}


app.get("/register",function(req,res){
    res.render("register");
});
app.post("/register",function(req,res){
    User.register(new User({username: req.body.username}),req.body.password,function(err,user){
	if(err){
	res.render(err);
	res.redirect('/register');
}
passport.authenticate("local")(req,res,function(){
	res.redirect("/feeds");
})
})
});

app.get("/login",function(req,res){
    res.render("login");
});

app.post("/login",passport.authenticate("local",{
    successRedirect:"/feeds",
    failureRedirect:"/login"
}),function(req,res){
});

app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
});


















app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});