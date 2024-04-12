document.addEventListener('DOMContentLoaded', function() {
    const foods = [
        {
            name: "Pepperoni Pizza (click on the image to see in detail)",
            img: "image/pizza.jpeg",
            ingredients: ["1 can (8 oz each) Hunt's® Tomato Sauce-No Salt Added", 
                        "1/4 cup grated Parmesan cheese", 
                        "1/4 teaspoon dried oregano", 
                        "1 prebaked thin pizza crust (12-inch)", 
                        "1 cup shredded part-skim mozzarella cheese", 
                        "1/3 cup sliced pepperoni"],
            instructions: [
                "Preheat oven to 450°F. Combine tomato sauce, Parmesan cheese and oregano in small bowl; spread tomato sauce evenly over crust. Sprinkle pizza with mozzarella cheese; top with pepperoni.",
                "Place on ungreased pizza pan. Bake 12 to 15 minutes or until edges of crust are browned lightly and cheese melts. Cut pizza into 6 slices.",
        
            ]
        },
        {
            
            name: "Sphaghetti (click on the image to see in detail)",
            img: "image/sphaghetti.jpeg",
            ingredients: [
                "1 medium yellow onion",
                "3 cloves garlic",
                "1 tablespoon olive oil",
                "1 pound lean ground beef",
                "1 1/2 teaspoons kosher salt, divided",
                "1/2 teaspoon dried oregano",
                "1/4 teaspoon freshly ground black pepper",
                "1/4 teaspoon red pepper flakes (optional)",
                "1 (28-ounce) can crushed tomatoes",
                "1 pound dried spaghetti",
                "2 teaspoons balsamic vinegar",
                "Freshly grated Parmesan cheese, for serving"
            ],
            instructions: [
                "Finely chop 1 medium yellow onion and mince 3 garlic cloves.",
                "Heat 1 tablespoon olive oil in a large high-sided skillet over medium-high heat until shimmering.",
                "Add the onion, garlic, lean ground beef, 1 teaspoon of the kosher salt, dried oregano, black pepper, and red pepper flakes (if using).",
                "Cook, breaking the beef into small pieces with a wooden spoon, until the beef is cooked through, about 5 to 7 minutes.",
                "Carefully pour in the can of crushed tomatoes and season with the remaining 1/2 teaspoon kosher salt.",
                "Bring to a boil, then reduce the heat to medium-low and gently simmer uncovered until the sauce is slightly thickened, about 20 minutes.",
                "Meanwhile, bring a large pot of salted water to a boil. Add the spaghetti and cook for 1 minute less than the package instructions for al dente, about 9 minutes.",
                "Reserve 1 cup of the pasta cooking water and drain the spaghetti.",
                "Return the pasta to the pot. Add the sauce, reserved pasta cooking water, and balsamic vinegar.",
                "Toss to combine and bring to a simmer over medium heat, tossing continuously, until the sauce coats the pasta and everything is evenly combined, 1 to 2 minutes.",
                "Serve in bowls topped with lots of grated Parmesan cheese."
            ]
        },
        {
            name: "Hamburger (click on the image to see in detail)",
            img: "image/hamburger.jpeg", // Placeholder for the image path
            ingredients: [
                "1 large egg",
                "½ teaspoon salt",
                "½ teaspoon ground black pepper",
                "1 pound ground beef",
                "½ cup fine dry bread crumbs"
            ],
            instructions: [
                "Preheat an outdoor grill for high heat and lightly oil the grate.",
                "Whisk together the egg, salt, and pepper in a medium bowl.",
                "Add the ground beef and bread crumbs and mix with your hands or a fork until well blended.",
                "Form into four 3/4-inch-thick patties.",
                "Place patties on the preheated grill. Cover and cook 6 to 8 minutes per side, or to desired doneness.",
                "An instant-read thermometer inserted into the center should read at least 160 degrees F (70 degrees C)."
            ]
        },
        {
            name: "Homemade Fried Rice (click on the image to see in detail)",
            img: "image/fried_rice.jpeg", // Ensure you have an appropriate image or placeholder
            ingredients: [
                "Day-old cooked rice",
                "Eggs",
                "Toasted sesame oil",
                "Vegetable oil",
                "Coconut aminos",
                "Soy sauce (or GF tamari for a gluten-free option)",
                "Salt",
                "Carrots",
                "Onion",
                "Garlic",
                "Peas",
                "Green onions"
            ],
            instructions: [
                "Season the eggs by whisking them with a bit of sesame oil, coconut aminos, and salt.",
                "Cook the veggies: Stir-fry the carrots in a large saucepan or wok. A few minutes later, add the onions, and right at the end, add the garlic. Set them aside.",
                "Cook the eggs: Quickly stir-fry (scramble) the eggs in a bit of vegetable oil until just set. Add them to your bowl of carrots and onions.",
                "Fry the rice: Spread it in a solid, even layer in the hot pan. Let the rice fry undisturbed for a few minutes, then toss it around and let it fry again. Repeat this process about four times.",
                "Bring it all together: Add carrots, eggs, peas (add frozen directly into the pan), green onions, and a bit more coconut aminos and soy sauce. If it still needs salt, add to taste.",
                "Serve the fried rice alongside tangy, crisp hot and sour cabbage and some fiery Chinese green beans for a complete meal."
            ]
        },
        {
            name: "Beef Taco (click on the image to see in detail)",
            img: "image/beef_taco.jpeg", // Placeholder for the image path; replace with actual image path if available
            ingredients: [
                "1 pound lean (at least 80%) ground beef",
                "1 cup thick & chunky salsa",
                "10 taco shells from 1 box (4.6 oz) Old El Paso™ Crunchy Taco Shells (12 Count)",
                "1/2 head lettuce, shredded",
                "1 medium tomato, chopped (3/4 cup)",
                "1 cup shredded Cheddar cheese (4 ounces)"
            ],
            instructions: [
                "Cook beef in a 10-inch skillet over medium heat 8 to 10 minutes, stirring occasionally, until brown; drain.",
                "Stir salsa into beef. Heat to boiling, stirring constantly; reduce heat to medium-low. Cook 5 minutes, stirring occasionally. Pour beef mixture into a large serving bowl.",
                "Heat taco shells as directed on the package.",
                "Serve taco shells with beef mixture, lettuce, tomato, and cheese."
            ]
        }
        

            
    ];

    const foodList = document.getElementById('foodList');
    const ingredientsList = document.getElementById('ingredientsList');
    const ingredientsUl = document.getElementById('ingredients');

    foods.forEach((food, index) => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        const img = document.createElement('img');
        img.src = food.img;
        img.alt = food.name;
        img.style.cursor = 'pointer';

        const foodName = document.createElement('p');
        foodName.textContent = food.name;

        foodItem.appendChild(img);
        foodItem.appendChild(foodName);
        foodItem.onclick = () => displayIngredients(food.ingredients, food.name, food.instructions);
        
        foodList.appendChild(foodItem);
    });

    function displayIngredients(ingredients, foodName, instructions) {
        ingredientsUl.innerHTML = ''; // Clear current ingredients
        const header = document.createElement('h3');
        header.textContent = 'Ingredients';
        ingredientsUl.appendChild(header);

        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsUl.appendChild(li);
        });

        const instructionsHeader = document.createElement('h3');
        instructionsHeader.textContent = 'Instructions';
        ingredientsUl.appendChild(instructionsHeader);

        const instructionsList = document.createElement('ul');
        instructions.forEach(step => {
            const stepItem = document.createElement('li');
            stepItem.textContent = step;
            instructionsList.appendChild(stepItem);
        });
        ingredientsUl.appendChild(instructionsList);

        foodList.style.display = 'none';
        ingredientsList.style.display = 'block';
        document.getElementById('ingredientsList').querySelector('h2').textContent = `${foodName} Ingredients and Instructions`;
    }

    window.backToList = function() {
        ingredientsList.style.display = 'none';
        foodList.style.display = 'block';
    };
});






