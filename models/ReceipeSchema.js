const recipe = require('./ReceipeSchema')
const Schema = require('mongoose').Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true }, 
  author: String,
  image:  String,
  recipe: { type:String, required: true },
  category: { type: Schema.Types.ObjectId},
  description: String,
 
}, {
  timestamps: true
});

module.exports = recipeSchema;