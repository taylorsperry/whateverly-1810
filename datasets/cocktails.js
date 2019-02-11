const cocktails = [
  { "name": "Bloody Mary",
    "liquor": ["Vodka"],
    "mixers": ["Tomato Juice"],
    "garnishes": ["Worcestershire Sauce", "Horseradish", "Tabasco", "Salt", "Pepper", "Lemon Juice", "Celery", "Lemon"],
    "glass": "Highball",
    "ice": true },
  { "name": "Old-Fashioned",
    "liquor": ["Bourbon", "Rye"],
    "mixers": ["Bitters"],
    "garnishes": ["Sugar Cube", "Orange"],
    "glass": "Rocks",
    "ice" : true },
  { "name": "Rum Punch",
    "liquor": ["Dark Rum", "Coconut Rum"],
    "mixers": ["Pineapple Juice", "Orange Juice", "Lime Juice"],
    "garnishes": ["Cherry", "Orange"],
    "glass": "Highball",
    "ice" : true },
  { "name": "Margarita",
    "liquor": ["Tequila", "Triple Sec"],
    "mixers": null,
    "garnishes": ["Lime", "Salt"],
    "glass": "Margarita",
    "ice": true },
  { "name": "Daiquiri",
    "liquor": ["Light Rum"],
    "mixers": ["Lime Juice"],
    "garnishes": ["Simple Syrup"],
    "glass": "Margarita", 
    "ice": true },
  { "name": "Martini",
    "liquor": ["Gin", "Vodka"],
    "mixers": ["Olive Juice"],
    "garnishes": ["Olive"],
    "glass": "Martini",
    "ice": false },
  { "name": "Manhattan",
    "liquor": ["Bourbon", "Rye"],
    "mixers": ["Bitters", "Sweet Vermouth"],
    "garnishes": ["Cherry", "Orange"],
    "glass": "Cocktail",
    "ice": false },
  { "name": "Mimosa",
    "liquor": ["Champagne"],
    "mixers": ["Orange Juice", "Cointreau"],
    "garnishes": ["Mint"],
    "glass": "Champagne Flute",
    "ice": false },
  { "name": "Mojito",
    "liquor": ["White Rum"],
    "mixers": ["Lime Juice", "Club Soda"],
    "garnishes": ["Mint", "Sugar", "Lime"],
    "glass": "Rocks",
    "ice": true },
  { "name": "Boulevardier",
    "liquor": ["Bourbon", "Campari"],
    "mixers": ["Sweet Vermouth"],
    "garnishes": ["Orange"],
    "glass": "Cocktail",
    "ice": false },
  { "name": "Paloma",
    "liquor": ["Tequila"],
    "mixers": ["Grapefruit Juice", "Lime Juice", "Club Soda"],
    "garnishes": ["Lime", "Salt"],
    "glass": "Highball",
    "ice": true },
  { "name": "Pina Colada",
    "liquor": ["Golden Rum"],
    "mixers": ["Pineapple Juice", "Coconut Cream"],
    "garnishes": ["Pineapple", "Cherry"],
    "glass": "Highball",
    "ice": true },
  { "name": "Dark and Stormy",
    "liquor": ["Dark Rum"],
    "mixers": ["Lime Juice", "Ginger Beer"],
    "garnishes": ["Simple Syrup"],
    "glass": "Highball",
    "ice": true },
  { "name": "Moscow Mule",
    "liquor": ["Vodka"],
    "mixers": ["Lime Juice", "Ginger Beer"],
    "garnishes": ["Lime"],
    "glass": "Copper Mug",
    "ice": true },
  { "name": "White Russian",
    "liquor": ["Kahlua", "Vodka"],
    "mixers": ["Heavy Cream"],
    "garnishes": null,
    "glass": "Old-Fashioned",
    "ice": true },
  { "name": "Cuba Libre",
    "liquor": ["Rum", "Gin"],
    "mixers": ["Coca-Cola", "Bitters", "Club Soda"],
    "garnishes": ["Lime"],
    "glass": "Highball",
    "ice": true },
  { "name": "Long Island Iced Tea",
    "liquor": ["Vodka", "Gin", "White Rum", "Tequila", "Cointreau", "Dark Beer"],
    "mixers": ["Sour Mix", "Coca-Cola", "Lemon Juice"],
    "garnishes": null,
    "glass": "Highball",
    "ice": true },
  { "name": "Vodka Soda",
    "liquor": ["Vodka"],
    "mixers": ["Club Soda"],
    "garnishes": ["Lime"],
    "glass": "Highball",
    "ice": true },
  { "name": "Gin and Tonic",
    "liquor": ["Gin"],
    "mixers": ["Tonic"],
    "garnishes": ["Lime"],
    "glass": "Highball",
    "ice": true },
  { "name": "Cosmopolitan",
    "liquor": ["Vodka", "Triple Sec"],
    "mixers": ["Lime Juice", "Cranberry Juice", "Club Soda"],
    "garnishes": ["Orange"],
    "glass": "Martini",
    "ice": false },
  { "name": "Southside Fizz",
    "liquor": ["Gin"],
    "mixers": ["Lemon Juice", "Club Soda"],
    "garnishes": ["Mint", "Simple Syrup"],
    "glass": "Highball",
    "ice": true },
  { "name": "Tom Collins",
    "liquor": ["Gin"],
    "mixers": ["Lemon Juice", "Club Soda"],
    "garnishes": ["Lemon", "Simple Syrup"],
    "glass": "Highball",
    "ice": true },
  { "name": "Thai Basil Bliss",
    "liquor": ["Tequila"],
    "mixers": ["Lime Juice", "Club Soda"],
    "garnishes": ["Basil Leaves", "Pineapple", "Simple Syrup"],
    "glass": "Cocktail",
    "ice": true },
  { "name": "Brass Monkey",
    "liquor": ["Dark Rum", "Vodka"],
    "mixers": ["Orange Juice"],
    "garnishes": null,
    "glass": "Highball",
    "ice": true },
  { "name": "Americano",
    "liquor": ["Campari"],
    "mixers": ["Club Soda", "Sweet Vermouth"],
    "garnishes": ["Orange", "Lemon"],
    "glass": "Cocktail",
    "ice": true },
  { "name": "Mai Tai",
    "liquor": ["Dark Rum", "White Rum", "Orange Curacao", "Pernod"],
    "mixers": ["Club Soda", "Lime Juice", "Bitters"],
    "garnishes": ["Pineapple", "Cherry", "Mint"],
    "glass": "Cocktail",
    "ice": true },
  { "name": "French 75",
    "liquor": ["Cognac", "Sparkling Wine"],
    "mixers": ["Lemon Juice"],
    "garnishes": ["Simple Syrup"],
    "glass": "Martini",
    "ice": false },
  { "name": "Pisco Sour",
    "liquor": ["Pisco"],
    "mixers": ["Lime Juice", "Bitters"],
    "garnishes": ["Simple Syrup", "Egg White"],
    "glass": "Cocktail",
    "ice": false },
  { "name": "Caiparinha",
    "liquor": ["Cachaca"],
    "mixers": ["Lime Juice", "Bitters"],
    "garnishes": ["Lime", "Sugar"],
    "glass": "Cocktail",
    "ice": true },
  { "name": "Mint Julep",
    "liquor": ["Bourbon"],
    "mixers": ["Seltzer"],
    "garnishes": ["Mint", "Sugar"],
    "glass": "Cocktail",
    "ice": true },
  { "name": "Sidecar",
    "liquor": ["Cognac"],
    "mixers": ["Lemon Juice", "Cointreau"],
    "garnishes": ["Lemon"],
    "glass": "Cocktail",
    "ice": true }
]

const homebar = [
  { "barware": ["Ice Bag", "Bar Spoon", "Muddler", "Jigger", "Cocktail Shaker", "Strainer", "Ice Cube Trays"],
    "glassware": [{"Short Glass": 6}, {"Tall Glass": 6}, {"Stem Glass": 12}],
    "liquor": ["Tequila", "Bourbon", "Vodka", "Gin", "Rye", "Dark Rum", "Light Rum", "Red Wine", "White Wine", "Cognac"],
    "mixers": ["Cointreau", "Red Vermouth", "White Vermouth", "Bitters"],
    "garnishes": ["Lemon", "Lime", "Orange", "Olive", "Cherry"],
    "ice": "One pound per guest",
    "napkins": true }
]