let favoriteFoods = ["Chicken", "Pizza", "Fries"];

favoriteFoods.push("Matcha");

favoriteFoods.shift();

for (const food of favoriteFoods) {
    console.log(food);
}

const messages = favoriteFoods.map(food => `I like ${food}`);

console.log(messages);