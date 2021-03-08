const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.post('login', passport.authenticate('local', { // фактически это вариация app.post (request, response)
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

passport.use(new LocalStrategy( // модульный вариант app.use где мы прописываем что будем делать в зависимости от ввода пароля и имени юзера
  {
    usernameField: 'email',
    passwordField: 'passwd'
  },
  function (username, password, done) { //в скобках значение юзернейм, полученное от датабазы
    username.findOne({username: username}, function(error, user) {
      if(error) {
        return done(error);
      }

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
    }

      if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' })
      }

      /*
      if (!user || !user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect username or password.' })
      }
      */
    })
  }
))