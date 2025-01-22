// Function to create output from an array of Category objects
function catOutput(categories) {
    // Check if categories is an array
    if (!Array.isArray(categories)) {
        console.error('Invalid input: categories should be an array.');
        return;
    }

    // Iterate over each Category object and handle the output
    categories.forEach(category => {
        console.log(`Category: ${category.strCategory}`);
        console.log(`Description: ${category.strCategoryDescription}`);
        console.log('--------------------------');
    });
}

// Function to create output from an array of Recipe objects
function recOutput(recipes) {
    // Check if recipes is an array
    if (!Array.isArray(recipes)) {
        console.error('Invalid input: recipes should be an array.');
        return;
    }

    // Iterate over each Recipe object and handle the output
    recipes.forEach(recipe => {
        console.log(`Recipe: ${recipe.strMeal}`);
        console.log(`Thumbnail: ${recipe.strMealThumb}`); // Use strMealThumb
        console.log(`ID: ${recipe.idMeal}`);
        console.log('--------------------------');
    });
}

// Function to create output from a Meal object
function mealOutput(meal) {
    // Check if meal is an object
    if (typeof meal !== 'object' || meal === null) {
        console.error('Invalid input: meal should be an object.');
        return;
    }

    // Print the meal information
    console.log(`Meal: ${meal.strMeal}`);
    console.log(`Instructions: ${meal.strInstructions}`);
    console.log(`Area: ${meal.strArea}`);
    console.log(`YouTube Link: ${meal.strYoutube}`); // Use strYoutube
    console.log('--------------------------');
}

module.exports = { catOutput, recOutput, mealOutput };