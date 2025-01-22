const axios = require('axios');

// Meal constructor
function Meal(strMeal, strInstructions, strArea, strYoutube) {
    this.strMeal = strMeal;
    this.strInstructions = strInstructions;
    this.strArea = strArea;
    this.strYoutube = strYoutube; 
}

// Function to fetch a meal by its ID from the API
async function getMeal(mealId) {
    console.log('in getMeal');

    const getUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId;

    try {
        // Get the meal details with axios using the given endpoint
        const response = await axios.get(getUrl);
        
        // Extract the meal details from the response
        const mealData = response.data.meals[0];
        
        // Create a new Meal instance using the Meal constructor
        const meal = new Meal(
            mealData.strMeal, 
            mealData.strInstructions, 
            mealData.strArea,
            mealData.strYoutube // Change from strMealThumb to strYoutube
        );
        
        // Return the meal instance
        return meal;

    } catch (error) {
        console.error('Error fetching meal:', error);
        return null;
    }
}

module.exports = { getMeal };