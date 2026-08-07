// คลาสแม่ (Animal)
class Animal {
    constructor(name, species, age, sound) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.sound = sound;
        this.hunger = 50;
    }

    speak() {
        console.log(`${this.name} the ${this.species} makes a sound: ${this.sound}`);
    }

    eat() {
        this.hunger -= 10;
        console.log(`${this.name} the ${this.species} ate. Hunger level is now ${this.hunger}.`);
    }
}


class Dog extends Animal {
    constructor(name, age, sound) {
        super(name, "Dog", age, sound);
    }
}


class Cat extends Animal {
    constructor(name, age, sound) {
        super(name, "Cat", age, sound);
    }
}


class Bird extends Animal {
    constructor(name, age, sound, color) {
        super(name, "Bird", age, sound);
        this.color = color;
    }

    fly() {
        console.log(`${this.name} the ${this.color} bird spreads its wings and flies away to the sky!`);
    }
}


const cat = new Cat("SomO", 7, "Meow");
const dog = new Dog("Panda", 5, "Bark");
const bird = new Bird("Jib", 3, "Chirp", "GreenBlue");

console.log("=== Story Begins ===\n");

console.log("[Chapter One]");
cat.speak();
console.log(`${cat.name} walks over to greet ${dog.name}, but ${dog.name} ignores her and stays silent...`);

console.log("\n[Chapter Two]");
dog.speak();
console.log(`${dog.name} turns around to talk to ${bird.name} instead, but ${bird.name} also stays silent and doesn't reply...`);

console.log("To be continue")