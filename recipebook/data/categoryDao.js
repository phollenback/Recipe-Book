const axios = require('axios');

// Add a 'Category' constructor with the strCategory and strCategoryDescription attributes
function Category(strCategory, strCategoryDescription) {
    this.strCategory = strCategory;
    this.strCategoryDescription = strCategoryDescription;
}

// Function to fetch categories from the API
async function getCategories() {
    try {
        // Get the categories list with axios using the given endpoint
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        
        // Map the response to create a list of categories using the Category constructor
        const categories = response.data.categories.map(category => 
            new Category(category.strCategory, category.strCategoryDescription)
        );
        //console.log(categories)
        // Return the categories
        return categories;

    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

module.exports = { getCategories };