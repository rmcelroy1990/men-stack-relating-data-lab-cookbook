const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic will go here - will be built later on in the lab
router.get('/', (req, res) => {
    res.render('foods/index.ejs');
  });

router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
  });

    const userId = req.params.userId;
    const foodItem = req.body.food
    User.findById(userId, (err, foundUser) => {
      if (err) {
        console.log(err);
        return res.redirect('/users/' + userId + '/foods/new');
      }
      foundUser.pantry.push({ foods: foodItem });
      foundUser.save((err) => {
        if (err) {
          console.log(err);
          return res.redirect('/users/' + userId + '/foods/new');
        }
        res.redirect('/users/' + userId + '/foods');
      });
    });

User.findById(userId, (req, res) => {
    res.render('foods/edit.ejs', );
});
module.exports = router;