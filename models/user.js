const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  foods: {
    type: String,
    required: true,
  }
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: {
    type: [foodSchema], // Array of food items
  }
  recipe: {
    name: String,
    instructions: String,
    owner: ObjectId
    ingredients: [ObjectId]
    
  ingredient: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
