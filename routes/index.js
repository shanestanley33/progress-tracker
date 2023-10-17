const express = require('express');
const router = express.Router();
const passport = require('passport');

// This app has no "home" page, but your projects should 😀
router.get('/', function(req, res, next) {
  res.redirect('/fitnessTrackers');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/fitnessTrackers',
    failureRedirect: '/fitnessTrackers'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/fitnessTrackers');
  });
});

module.exports = router;
