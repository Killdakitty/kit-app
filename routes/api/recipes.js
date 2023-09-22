const express = require('express');
const router=express.Router();
const recipesCtrl = require('../../controllers/api/recipes');
const ensureLoggedIn=require('../../config/ensureLoggedIn')


//POST
router.post('/', recipesCtrl.create)

//GET /api/recipes/allrecipe
router.get('/', recipesCtrl.allrecipes)

//GET /api/recipes/get
// router.get('/allrecipes', recipesCtrl.index)
router.put('/:id', recipesCtrl.editrecipe)


//GET
router.get('/:id', recipesCtrl.getrecipe)


module.exports=router