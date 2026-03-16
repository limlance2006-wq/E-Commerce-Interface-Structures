// Problem 1: The Strict Type Checker
function checkVariable(input) {
    return typeof input;
}

// Problem 2: Secure ID Generator

function generateIDs(count) {
    let ids = [];

    for (let i = 0; i < count; i++) {
        // skip number 5
        if (i === 5) {
            continue;
        }

        ids.push("ID-" + i);
    }

    return ids;
}


// Problem 3: The Functional Sum

function calculateTotal() {
    let numbers = Array.from(arguments);
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (typeof numbers[i] !== "number") {
            throw new TypeError("All inputs must be numbers");
        }

        total += numbers[i];
    }

    return total;
}


// Problem 4: Leaderboard Filter

function getTopScorers(playerList) {
    let topPlayers = [];

    for (let i = 0; i < playerList.length; i++) {
        if (playerList[i].score) {
            topPlayers.push(playerList[i].name);
        }
    }

    return topPlayers.join(", ");
}


// Problem 5: Private Inventory

class Item {

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.discount = 0.1; 
    }

    getFinalPrice() {
        return this.price - (this.price * this.discount);
    }
}


// Problem 6: Robust Division

function safeDivide(a, b) {
    try {

        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;

    } catch (error) {
        return error.message;

    } finally {
        console.log("Operation attempted");
    }
}


// Test Cases
console.log("=== Problem 1: Type Checker ===");
console.log(checkVariable("hello"));      
console.log(checkVariable(42));           
console.log(checkVariable(true));         
console.log(checkVariable(undefined));    
console.log(checkVariable(null));         
console.log(checkVariable({}));         


console.log("\n=== Problem 2: ID Generator ===");
console.log(generateIDs(7)); 



console.log("\n=== Problem 3: Functional Sum ===");
console.log(calculateTotal(1, 2, 3, 4));  
console.log(calculateTotal(10, 20));      


try {
    calculateTotal(1, "2", 3);
} catch (error) {
    console.log(error.message);
}


console.log("\n=== Problem 4: Leaderboard Filter ===");

const players = [
    { name: "Alice", score: 10 },
    { name: "Bob", score: 5 },
    { name: "Charlie", score: 9 },
    { name: "Donna", score: 7 },
    { name: "Marce", score: 12 },
    { name: "Lance", score: 3 },
    { name: "Cielo", score: 15 },
    { name: "Christian", score: 6 },
    { name: "Edmer", score: 11 },
    { name: "Charizze", score: 4 }
];

console.log(getTopScorers(players)); 


console.log("\n=== Problem 5: Private Inventory ===");

const item = new Item("Fila T-Shirt", 1000);

console.log("Item:", item.name);
console.log("Original Price:", item.price);
console.log("Discount:", item.discount * 100 + "%");
console.log("Final Price:", item.getFinalPrice());


console.log("\n=== Problem 6: Robust Division ===");

console.log(safeDivide(10, 2)); 
console.log(safeDivide(10, 0)); 