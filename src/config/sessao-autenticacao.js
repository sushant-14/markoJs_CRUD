const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserDao = require('../app/dao/userDao');
const db = require('./database');

module.exports = (app) => {

    // configuração da sessão e da autenticação.
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        (email, password, done) => {
            const userDao = new UserDao(db);
            userDao
              .findByEmail(email)
              .then((user) => {
                if (!user || password != user.password) {
                  return done(null, false, {
                    mensagem: 'Login e password incorretos!',
                  });
                }

                return done(null, user);
              })
              .catch((error) => done(error, false));
        }
    ));

    passport.serializeUser((user, done) => {
        const userSession = {
            nome: user.nome_completo,
            email: user.email
        };

        done(null, userSession);
    });

    passport.deserializeUser((userSession, done) => {
        done(null, userSession);
    });

    app.use(sessao({
        secret: 'nodeIgorBookstoer',
        genid: function(req) {
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());


    app.use(function (req, resp, next) {
        req.passport = passport;
        next();
    });
};