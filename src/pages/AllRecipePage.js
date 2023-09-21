// import { checkToken } from "../utilities/users-service";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../utilities/recipes-api";

function AllRecipePage() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchData =async ()=>{
      const data = await getAllRecipes();
      console.log(data);
      setRecipes(data);
    }
    fetchData()
  }, []);

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
              </li>
            </div>
          );
        })}
    </div>
  );
}

export default AllRecipePage;
