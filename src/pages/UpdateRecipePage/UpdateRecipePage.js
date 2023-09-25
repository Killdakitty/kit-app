import React from "react";
import { useEffect, useState } from "react";
import { editRecipe, getRecipe } from "../../utilities/recipes-api";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../UpdateRecipePage/UpdateRecipePage.module.css"

function UpdateRecipe() {
  const [formData, setFormData] = useState(null);

  const { id } = useParams();
const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecipe(id);
      console.log(data);
      setFormData(data)
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = { title:formData.title, recipe:formData.recipe };
      const updatedRecipe = await editRecipe(newData, formData._id);
      console.log(updatedRecipe);
      navigate('/allrecipes')
    } catch (error) {
      console.log("error in edit");
    }
  };

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className={styles.UpdateRecipePage}>
    <div > 
      <br/>
      <form onSubmit={handleSubmit}>
        <input
          value={formData?.title}
          name="title"
          type="text"
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //    handleChange(e)
          //     // editTodoText(todo.id, e);
          //     setShowInput(false);
          //   }
          // }}

          onChange={handleChange}
        ></input>
<br/>
        <input
          value={formData?.recipe}
          name="recipe"
          type="text"
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //    handleChange(e)

          //     // editTodoText(todo.id, e);
          //     setShowInput(false);
          //   }
          // }}
          onChange={handleChange}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
    
    
</main>
  );
}

export default UpdateRecipe;
