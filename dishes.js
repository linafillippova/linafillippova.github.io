const meals = [
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "350г",
        image: "dishes/soups/gazpacho.jpg",
        kind: "veg"
    },
    {
        keyword: "mushroom_soup",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330г",
        image: "dishes/soups/mushroom_soup.jpg",
        kind: "veg"
    },
    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330г",
        image: "dishes/soups/norwegian_soup.jpg",
        kind: "fish"
    },
    {
        keyword: "ramen",
        name: "Рамен",
        price: 375,
        category: "soup",
        count: "425г",
        image: "dishes/soups/ramen.jpg",
        kind: "meat"
    },
    {
        keyword: "chicken_soup",
        name: "Куриный суп",
        price: 330,
        category: "soup",
        count: "350г",
        image: "dishes/soups/chicken.jpg",
        kind: "meat"
    },
    {
        keyword: "tomyum",
        name: "Том ям с креветками",
        price: 650,
        category: "soup",
        count: "500г",
        image: "dishes/soups/tomyum.jpg",
        kind: "fish"
    },



    {
        keyword: "friedpotatoeswithmushrooms1",
        name: "Жареная картошка с грибами",
        price: 150,
        category: "main",
        count: "250г",
        image: "dishes/main_course/friedpotatoeswithmushrooms1.jpg",
        kind: "veg"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main",
        count: "310г",
        image: "dishes/main_course/lasagna.jpg",
        kind: "meat"
    },
    {
        keyword: "chickencutletsandmashedpotatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main",
        count: "280г",
        image: "dishes/main_course/chickencutletsandmashedpotatoes.jpg",
        kind: "meat"
    },
    {
        keyword: "fishrice",
        name: "Рыбная котлета с рисом и спаржей",
        price: 320,
        category: "main",
        count: "270г",
        image: "dishes/main_course/fishrice.jpg",
        kind: "fish"
    },
    {
        keyword: "pizza",
        name: "Пицца Маргарита",
        price: 450,
        category: "main",
        count: "470г",
        image: "dishes/main_course/pizza.jpg",
        kind: "veg"
    },
    {
        keyword: "shrimppasta",
        name: "Паста с креветками",
        price: 340,
        category: "main",
        count: "280г",
        image: "dishes/main_course/shrimppasta.jpg",
        kind: "fish"
    },



    {
        keyword: "orangejuice",
        name: "Апельсиновый сок",
        price: 120,
        category: "drink",
        count: "300мл",
        image: "dishes/beverages/orangejuice.jpg",
        kind: "cold"
    },
    {
        keyword: "applejuice",
        name: "Яблочный сок",
        price: 90,
        category: "drink",
        count: "300мл",
        image: "dishes/beverages/applejuice.jpg",
        kind: "cold"
    },
    {
        keyword: "carrotjuice",
        name: "Морковный сок",
        price: 110,
        category: "drink",
        count: "300мл",
        image: "dishes/beverages/carrotjuice.jpg",
        kind: "cold"
    },
    {
        keyword: "cappuccino",
        name: "Капучино",
        price: 180,
        category: "drink",
        count: "300мл",
        image: "dishes/beverages/cappuccino.jpg",
        kind: "hot"
    },
    {
        keyword: "greentea",
        name: "Зелёный чай",
        price: 100,
        category: "drink",
        count: "300мл",
        image: "dishes/beverages/greentea.jpg",
        kind: "hot"
    },
    {
        keyword: "blacktea",
        name: "Чёрный чай",
        price: 90,
        category: "drink",
        count: "300мл",
        image: "dishes/beverages/blacktea.jpg",
        kind: "hot"
    },



    {
        keyword: "saladwithegg",
        name: "Корейский салат с овощами и яйцом",
        price: 330,
        category: "salads_starters",
        count: "250г",
        image: "dishes/salads_starters/saladwithegg.jpg",
        kind: "veg"
    },
    {
        keyword: "caesar",
        name: "Цезарь с цыплёнком",
        price: 370,
        category: "salads_starters",
        count: "220г",
        image: "dishes/salads_starters/caesar.jpg",
        kind: "meat"
    },
    {
        keyword: "caprese",
        name: "Капрезе с моцареллой",
        price: 350,
        category: "salads_starters",
        count: "235г",
        image: "dishes/salads_starters/caprese.jpg",
        kind: "veg"
    },
    {
        keyword: "tunasalad",
        name: "Салат с тунцом",
        price: 480,
        category: "salads_starters",
        count: "250г",
        image: "dishes/salads_starters/tunasalad.jpg",
        kind: "fish"
    },
    {
        keyword: "frenchfries1",
        name: "Картофель фри с соусом Цезарь",
        price: 280,
        category: "salads_starters",
        count: "235г",
        image: "dishes/salads_starters/frenchfries1.jpg",
        kind: "veg"
    },
    {
        keyword: "frenchfries2",
        name: "Картофель фри с кетчупом",
        price: 260,
        category: "salads_starters",
        count: "235г",
        image: "dishes/salads_starters/frenchfries2.jpg",
        kind: "veg"
    },


    {
        keyword: "baklava",
        name: "Пахлава",
        price: 220,
        category: "desserts",
        count: "300г",
        image: "dishes/desserts/baklava.jpg",
        kind: "middle"
    },
    {
        keyword: "checheesecake",
        name: "Чизкейк",
        price: 240,
        category: "desserts",
        count: "125г",
        image: "dishes/desserts/checheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolatecheesecake",
        name: "Шоколадный чизкейк",
        price: 260,
        category: "desserts",
        count: "125г",
        image: "dishes/desserts/chocolatecheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolatecake",
        name: "Шоколадный торт",
        price: 270,
        category: "desserts",
        count: "140г",
        image: "dishes/desserts/chocolatecake.jpg",
        kind: "large"
    },
    {
        keyword: "donuts2",
        name: "Пончики (3 штуки)",
        price: 410,
        category: "desserts",
        count: "350г",
        image: "dishes/desserts/donuts2.jpg",
        kind: "middle"
    },
    {
        keyword: "donuts",
        name: "Пончики (6 штук)",
        price: 650,
        category: "desserts",
        count: "700г",
        image: "dishes/desserts/donuts.jpg",
        kind: "large"
    }
];
