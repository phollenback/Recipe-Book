const axios = require('axios');

// Recipe constructor
function Recipe(strMeal, strMealThumb, idMeal) {
    this.strMeal = strMeal;
    this.strMealThumb = strMealThumb; 
    this.idMeal = idMeal;
}

// Function to fetch recipes by category from the API
async function getRecipes(category) {
    console.log('in getRecipes');

    const getUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;

    try {
        // Get the recipes list with axios using the given endpoint
        const response = await axios.get(getUrl);
        
        // Map the response to create a list of recipes using the Recipe constructor
        const recipes = response.data.meals.map(meal => 
            new Recipe(meal.strMeal, meal.strMealThumb, meal.idMeal) 
        );
        
        // Return the recipes
        return recipes;

    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
}

module.exports = { getRecipes };