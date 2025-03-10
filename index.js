const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Hello: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    const recipeOne = {
      "title": "Curry Chicken",
      "level": "Easy Peasy",
      "ingredients": [
        "Two chicken breasts",
        "5 tablespoons honey",
        "1/3 cup soy sauce (such as Silver Swan®)",
        "1/4 cup Asian (toasted) sesame oil",
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
        "salt ,pepper and curry",
        
      ],
      "cuisine": "Asian Fusion",
      "dishType": "main_course",
      "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      "duration": 40,
      "creator": "Chef Taha"
    }
    // Run your code here, after you have insured that the connection was made

  return Recipe.create(recipeOne)
  })
  .then((addedRecipeOne)=>{
    console.log(addedRecipeOne)
    return Recipe.insertMany(data)

  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
