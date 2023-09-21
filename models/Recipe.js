const mongoose = require('mongoose');

const recipeSchema = require('./ReceipeSchema');

module.exports = mongoose.model('recipe', recipeSchema);