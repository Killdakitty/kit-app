const Recipe = require('../../models/Recipe')




async function create(req, res) {
    // console.log('[From POST handler]', req.body)
    try {
        //* creating a new user
        const recipe = await Recipe.create(req.body);
        console.log(recipe);


        res.json(recipe);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

async function history(req,res){
    try{
const recipes = await Recipe
.find({})
.sort();
console.log(recipes);
res.status(200).json(recipes)
    }catch(e){
res.status(400).json({msg: e.message})
    }
}

module.exports = {
    create, history
   
}