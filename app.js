const express           = require("express");
const app               = express();
const mongoose          = require("mongoose");
const passport          = require("passport");
const flash             = require("connect-flash");
const methodOverride    = require("method-override");
const LocalStrategy     = require("passport-local");
const bodyParser        = require("body-parser");
const User              = require("./models/user");

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));
require("dotenv").config();

 app.use(flash()); //include flash config so we can do     some messages

 var options = {
     useNewUrlParser: true
 };
  //Passort config
  app.use(require("express-session")({
      secret: "omg yes please work!",
      resave: false,
      saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());


 app.use(function (req, res, next) {
     //console.log(req.user);
     res.locals.currentUser = req.user;
     res.locals.error = req.flash("error");
     res.locals.success = req.flash("success");
     next();
 });

 mongoose.connect(process.env.DEVURL, options, function () {
    //mongoose.connection.db.dropDatabase();
});


/*

*   Route Definition Section
*   
*
*

*/
    //Tell the app where the route is.
    const indexRoute = require("./routes/index");
    const userRoute = require("./routes/user/user");


    //Tell the app, to use the route
    app.use(indexRoute);
    app.use("/user",userRoute);

    //Catchall 404 route.
    app.get("*",(req,res)=>{
        res.send("<h1>You have reached the lost lands of CRMness</h1>");
    });

app.listen(process.env.PORT || 3000,"localhost",()=>{//connect ith the environment port, or 3000 as a backup.
    console.log("CRM Online");
});