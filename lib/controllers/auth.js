var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

module.exports = {
    register: function(req, res, next) {
        var newUser = new User(req.body);
        newUser.provider = 'local';
        newUser.save(function(err) {
            if (err) return res.json(400, err);
            console.log(newUser);
            req.logIn(newUser, function(err) {
                if (err) return next(err);
                console.log(req.user);
                return res.json(200, { "role": newUser.role, "username": newUser.username });
            });
        });
    },
    
    login: function (req, res, next) {
      passport.authenticate('local', function(err, user, info) {
        var error = err || info;
        console.log(user);
        if (error) return res.json(401, error);

        req.logIn(user, function(err) {
          
          if (err) return res.send(err);
          console.log('req.user.userInfo',req.user.userInfo);
          res.json(req.user.userInfo);
        });
      })(req, res, next);
    },

    logout: function(req, res) {
        req.logout();
        res.send(200);
    }
};