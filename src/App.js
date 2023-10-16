import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

function App() {
  // Define API credentials
  const APP_ID = "6da60cdb";
  const APP_KEY = "1a920e5b28e2cbaff40820d6207cf2a8";

  // Define state variables using the useState hook
  const [recipes, setRecipes] = useState([]); // Stores the list of recipes
  const [search, setSearch] = useState(""); // Stores the search query
  const [quary, setQuary] = useState("chicken"); // Stores the query used for fetching recipes

  // Use the useEffect hook to fetch recipes when the query changes
  useEffect(() => {
    getRecipe();
  }, [quary]);

  // Function to fetch recipes from the Edamam API
  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${quary}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  // Event handler for input change in the search bar
  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  // Event handler for submitting the search form
  const getSearch = (e) => {
    e.preventDefault();
    setQuary(search);
  };
  return (
    <>
      <div className="allRecipe">
        {/* Search form */}
        <form onSubmit={getSearch} className="search-form">
          <input className="searchBar" type="text" value={search} onChange={searchChange} />
          <button className="btn btn-secondary" type="submit">search</button>

          {/* Mapping and rendering recipes using the Recipe component */}
          {recipes.map((recipe) => (
            <Recipe
              title={recipe.recipe.label}
              calories={Math.round(recipe.recipe.calories)}
              Ingredientlines={recipe.recipe.ingredientLines}
          
              image={recipe.recipe.image}
            />
          ))}
        </form>
      </div>
    </>
  );
}

export default App;
