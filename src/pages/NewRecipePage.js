import { createRecipe } from "../utilities/recipes-api";
import { useState } from "react";

function NewRecipePage() {
  const [recipes, setRecipes] = useState({
    title: " ",
    recipe: " ",
  });

  function handleChange(evt) {
    setRecipes({ ...recipes, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await createRecipe(recipes);
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

        <label>recipe</label>
        <input type="text" name="recipe" onChange={handleChange} required />
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}

export default NewRecipePage;
