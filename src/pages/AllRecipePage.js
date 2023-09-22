// import { checkToken } from "../utilities/users-service";
import { useEffect, useState } from "react";
import { getAllRecipes, editRecipe } from "../utilities/recipes-api";
import { Link } from "react-router-dom";

function AllRecipePage() {
  const [recipes, setRecipes] = useState(null);
  const [showInput, setShowInput] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes();
      console.log(data);
      setRecipes(data);
    };
    fetchData();
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
                <button>
<Link to={`/recipes/${recipe._id}`} >Update</Link></button>

<button>delete</button>
                {/* <button>Delete</button> */}
              </li>
            </div>
          );
        })}
    </div>
  );
}

export default AllRecipePage;

// import {useState} from 'react';

// function Todo(props){
//     const {todo, completeTodo, editTodoText,deleteTodo}=props;
//     const [showInput, setShowInput]= useState(false);
//     return(
// <div>
//     {/* todo text with the on click */}
// <li onClick={()=>setShowInput(!showInput)}>{todo.text}</li>
// {/* edit text input */}
// <input type="text"
// onKeyDown={(e)=>{
//     if (e.key === "Enter"){
//         editTodoText(todo.id, e);
//         setShowInput(false);
//     }}
//     }
// //if show input is true, then show  block, else none
// style={{display: showInput ? "block": "none", backgroundColor:'blue'}} />

// {/* ceheck input  */}
// <label>
//     Completed
//     <input type="checkbox"
//      checked={todo.completed}
//      onChange={()=> completeTodo(todo.id)}
//      />
// {/* delete button */}
// </label>
// <button onClick={()=>deleteTodo(todo.id)}> Delete</button>

// </div>

//     );
// }

// export default Todo;
