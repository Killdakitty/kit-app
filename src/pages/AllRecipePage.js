// import { checkToken } from "../utilities/users-service";
import { useEffect, useState } from "react";
import { getAllRecipes, deleteRecipe } from "../utilities/recipes-api";
import { Link, useNavigate } from "react-router-dom";

function AllRecipePage() {
  const [recipes, setRecipes] = useState(null);
  const navigate = useNavigate();
  // const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes();
      console.log(data);
      setRecipes(data);
    };
    fetchData();
  }, [recipes]);

  // function handleChange(evt) {
  //   setRecipes({ ...recipes, [evt.target.name]: evt.target.value });
  // }

  async function handleDelete(id) {
    // evt.preventDefault();
    try {
      // const newData = { title:formData.title, recipe:formData.recipe };
      const delRecipe = await deleteRecipe(id);
      const recipeCopy = [...recipes];
      const matchrecipe = recipeCopy.findIndex((recipe) => 
        recipe._id === id
      );
      recipeCopy.splice(matchrecipe, 1);
      setRecipes(recipeCopy);
      navigate("/allrecipes");
    } catch (error) {
      console.log("error in delete");
    }
  }

  // const handleCheckToken = async () => {
  //   const expDate = await checkToken();
  //   console.log(expDate);
  // };
  console.log(recipes);
  return (
    <div>
      <h1>All Recipe Page</h1>

      {recipes &&
        recipes.map((recipe) => {
          return (
            <div>
              <li>
                {recipe.title}
                <div>{recipe.recipe}</div>
                {/* <div>{recipe._id}</div> */}
                <button>
                  <Link to={`/recipes/${recipe._id}`}>Update</Link>
                </button>

                <button
                  onClick={() => {
                    handleDelete(recipe._id);
                  }}
                >
                  delete
                </button>
                {/* <button>Delete</button> */}
              </li>
            </div>
          );
        })}
    </div>
  );
}

export default AllRecipePage;
