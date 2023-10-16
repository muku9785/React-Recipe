// Import the necessary React component
import React from "react";

// Define a functional component called Recipe that accepts props
const Recipe = ({ title, calories, Ingredientlines, image }) => {
  return (
    <div className="container list-group-item active">
      <h1>{title}</h1> {/* Display the title of the recipe */}
      <p>
        {" "}
        <strong>Calories = </strong> {calories} {/* Display the calories */}
      </p>
     
      <p>
        <strong>Ingredient Line = </strong>
        {Ingredientlines} {/* Display the list of ingredient lines */}
      </p>
      <img src={image} /> {/* Display an image of the recipe */}
    </div>
  );
};

// Export the Recipe component for use in other parts of the application
export default Recipe;
