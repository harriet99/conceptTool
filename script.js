document.getElementById('generate').addEventListener('click', generatePhrase);

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePhrase() {
    const fusionDishes = [
        "Chili Chocolate Mole Enchiladas",
        "Wasabi Pea Risotto",
        "Mango Chutney Bruschetta",
        "Tandoori Shrimp Tacos",
        "Za'atar Spiced Bagels",
        "Jerk Chicken Sushi Rolls",
        "Matcha Green Tea Pancakes",
        "Miso Glazed Roast Vegetables",
        "Garam Masala Pumpkin Soup",
        "Harissa Roasted Nuts"
    ];
    const exoticIngredients = [
        "Lemongrass",
        "Dragon Fruit",
        "Star Anise",
        "Bergamot Orange",
        "Saffron",
        "Finger Limes",
        "Juniper Berries",
        "Hibiscus Flowers",
        "Morel Mushrooms",
        "Pink Peppercorns"
    ];
    const cookingTechniques = [
        "Cedar Plank Grilling",
        "Salt Crust Baking",
        "Hay Smoking",
        "Pickling with Exotic Vinegars",
        "Agave Nectar Glazing",
        "Sous-vide in Herbal Infusions",
        "Panko Crusting",
        "Foam Infusing",
        "Aromatic Herb Steaming",
        "Pistachio Crust Encasing"
    ];    
    
    const dish = getRandomElement(fusionDishes);
    const ingredient = getRandomElement(exoticIngredients);
    const technique = getRandomElement(cookingTechniques);

    const phrase = `${dish} with ${ingredient} and ${technique}.`;
    document.getElementById('fusion-phrase').textContent = phrase;
}
