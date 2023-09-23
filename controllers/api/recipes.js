const Recipe = require("../../models/Recipe");

//*CREATE
async function create(req, res) {
  // console.log('[From POST handler]', req.body)
  try {
    //* creating a new user
    const recipe = await Recipe.create(req.body);
    console.log(recipe);

    res.json(recipe);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//*Edit
async function editrecipe(req, res) {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // console.log(req.recipe._id);
    console.log(recipe);

    res.json(recipe);
    // res.redirect("/allrecipes");
  } catch (e) {
    console.log(error);
    res.status(400).json(error);
  }
}
//*Delete
async function deleterecipe(req, res) {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id)
    ;
    // console.log(req.recipe._id);
    res.json("Recipe Deleted!!!");
    
    // res.redirect("/allrecipes");
  }catch (e) {
    console.log(error);
    res.status(400).json(error);
  }}


//* find all recipe
async function allrecipes(req, res) {
  try {
    const recipes = await Recipe.find({}).sort();
    console.log(recipes);
    res.status(200).json(recipes);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

//* find a recipe
async function getrecipe(req, res) {
    try {
      const recipe = await Recipe.findById(req.params.id);
      console.log(recipe);
      res.status(200).json(recipe);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  }

module.exports = {
  create,
  allrecipes,
  editrecipe,
  getrecipe,
  deleterecipe
};
