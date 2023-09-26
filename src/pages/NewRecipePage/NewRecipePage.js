import { createRecipe } from "../../utilities/recipes-api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewRecipePage() {
  const [recipes, setRecipes] = useState({
    title: " ",
    ingridents: " ",
    recipe: " ",
  });
  const navigate = useNavigate();

  function handleChange(evt) {
    setRecipes({ ...recipes, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await createRecipe(recipes);
      navigate("/allrecipes");
    } catch {
      console.log("HandleSubmit ERROR");
    }
  }

  return (
    <div>
      <h1>New Recipe Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" onChange={handleChange} required />
        {/* 
        <label>image</label>
        <input type="image"  src="img_submit.gif" name="image" onChange={handleChange}/> */}

        <label>ingridents</label>
        <input type="text" name="ingridents" onChange={handleChange} required />

        <label>recipe</label>
        <textarea type="text" name="recipe" onChange={handleChange} required />
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}

export default NewRecipePage;
