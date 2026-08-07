import readline from 'readline';
import { Animal, displayZoo } from './Animal.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const zooAnimals = [
    new Animal("Simba", "lion", "🦁"),
    new Animal("Ella", "elephant", "🐘"),
    new Animal("Zazu", "hornbill", "🐦"),
    new Animal("Baloo", "bear", "🐻")
];

const zooPath = [
    { name: "Entrance", symbol: "🚪", description: "The main entrance to the zoo." },
    { name: "Lion Den", symbol: "🦁", animal: zooAnimals[0] },
    { name: "Garden", symbol: "🌳", description: "A peaceful green garden." },
    { name: "Elephant Enclosure", symbol: "🐘", animal: zooAnimals[1] },
    { name: "Bird Aviary", symbol: "🐦", animal: zooAnimals[2] },
    { name: "Bear Pit", symbol: "🐻", animal: zooAnimals[3] },
    { name: "Food Court", symbol: "🍽️", description: "The zookeeper is preparing the animal feed..." }
];


const visitor = {
    position: 0 
};


console.log("Welcome to the JS Terminal Zoo Explorer.");
console.log("\nZoo directory");
console.table(zooAnimals);


displayZoo("JS Terminal Zoo", zooPath, visitor);

console.log(`\nYou are at: ${zooPath[visitor.position].name}`);
console.log("The main entrance to the zoo. The morning visitors are arriving.\n");
console.log("The zookeeper is preparing the animal feed...");
console.log("Visitors can continue exploring.");


zooAnimals[0].askCommand(rl, zooAnimals, visitor, zooPath);