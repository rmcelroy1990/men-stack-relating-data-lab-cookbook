// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');

// router logic will go here - will be built later on in the lab
router.get('/', async (req, res) => {
    res.render('recipes/index.ejs');
  });
  
router.get('/recipes/new', async (req, res) => {
    res.render('recipes/new.ejs')
});

// In controllers/recipes.js, within the create route


router.post('/', async (req, res) => {
    try {
      const newRecipe = new Recipe(req.body);
      newRecipe.owner = req.session.user._id;
      await newRecipe.save();
      // Redirect to recipe index or show page
    } catch (error) {
      // Handle errors
    }
  });
// Example of an access control check
if (recipe.owner.equals(req.session.user._id)) {
    // Proceed with edit or delete operation
  } else {
    // Redirect or show an error message
  }
    
module.exports = router;
