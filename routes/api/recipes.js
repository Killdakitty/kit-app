const express = require('express');
const router=express.Router();
const recipesCtrl = require('../../controllers/api/recipes');
const ensureLoggedIn=require('../../config/ensureLoggedIn')


//POST
router.post('/', recipesCtrl.create)

//GET /api/recipes/history
router.get('/', recipesCtrl.history)

//GET /api/recipes/get
// router.get('/allrecipes', recipesCtrl.index)



module.exports=router