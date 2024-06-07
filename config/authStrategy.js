// require bcrypt, define the User model
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// github strategies

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username: username })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        bcrypt.compare(password, user.password)
          .then(match => {
            if (match) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Incorrect password.' });
            }
          })
          .catch(err => {
            return done(err);
          });
      })
      .catch(err => {
        console.log('Search failed:', err);
        return done(err);
      });
  }
));
  





passport.use(new GoogleStrategy({

    clientID: process.env.GOOGLE_CLIENT_ID,

    clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    callbackURL: 'http://localhost:3000/auth/google'
}),
(accessToken, refreshToken, profile, cb) => {
    User.create({ username: profile.username, firstName: profile.displayName,strategy: "Google" }); 
    console.log(profile);
    return done(null,profile);

  })


  passport.use(new GithubStrategy({

    clientID: process.env.GITHUB_CLIENT_ID,

    clientSecret: process.env.GITHUB_CLIENT_SECRET,

    callbackURL: 'http://localhost:3000/auth/github'
}),
(accessToken, refreshToken, profile, done) => {
    console.log(profile);
    return done(null,profile);

  })

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
