const cat = require('./data/categoryDao');
const rec = require('./data/recipeDao');
const meal = require('./data/mealDao');
const format = require('./Formatter');

// Function to display help information to the user
function displayHelp() {
    console.log('Usage: node fetchData.js <command> [options]'); 
    console.log('');
    console.log('Commands:');
    console.log('  categories        Fetches and displays all meal categories.'); 
    console.log('  recipes <category>  Fetches and displays recipes for a specific category.'); 
    console.log('  meal <mealId>     Fetches and displays details for a specific meal by ID.');
    console.log('  ls                Lists available commands and their descriptions.');
    console.log('  help              Displays this help message.'); 
}

// Function to handle the command-line arguments and execute the corresponding command
async function handleArgs() {
    const args = process.argv.slice(2);
    const command = args[0];
    const value = args[1]; 

    // If no arguments or '--help' is provided, display the help message
    if (args.length === 0 || args.includes('--help')) {
        displayHelp();
        return;
    }

    // Switch case to handle different commands
    switch (command) {
        case 'help':
            displayHelp(); // Show help if 'help' command is entered
            break;

        case 'ls':
            displayHelp(); // List all commands and their descriptions
            break;

        case 'categories':
            console.log('Fetching categories...'); 
            const categories = await cat.getCategories(); 
            format.catOutput(categories); 
            break;

        case 'recipes':
            if (!value) { // Check if the category name is provided
                console.log('Please provide a category name.');
                return;
            }
            console.log(`Fetching recipes for category: ${value}`); 
            const recipes = await rec.getRecipes(value); 
            format.recOutput(recipes); 
            break;

        case 'meal':
            if (!value) { 
                console.log('Please provide a meal ID.');
                return;
            }
            console.log(`Fetching meal with ID: ${value}`); 
            const mealData = await meal.getMeal(value); 
            format.mealOutput(mealData); 
            break;

        default:
            console.log('Unknown command. Use "help" for usage information.'); // Handle unknown commands
            displayHelp(); // Display help message if command is not recognized
    }
}

// Execute the 'handleArgs' function and catch any errors that occur
handleArgs().catch(error => {
    console.error('Error:', error); // Log any errors that are thrown during execution
});