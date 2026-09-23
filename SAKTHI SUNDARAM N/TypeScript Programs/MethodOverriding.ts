import * as readline from "readline";

class Animal {

    constructor(protected name: string) {}

    
    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {

    
    override makeSound(): void {
        console.log(`${this.name} says: Woof! Woof!`);
    }
}


class Cat extends Animal {

    
    override makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
}


function displayAnimalSound(animal: Animal): void {
    animal.makeSound();
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Dog");
console.log("2. Cat");

input.question("Enter your choice: ", (choice: string) => {

    input.question("Enter animal name: ", (animalName: string) => {

        let selectedAnimal: Animal;

        if (choice === "1") {
            selectedAnimal = new Dog(animalName);
        } else if (choice === "2") {
            selectedAnimal = new Cat(animalName);
        } else {
            console.log("Invalid choice.");
            input.close();
            return;
        }

        displayAnimalSound(selectedAnimal);

        input.close();
    });
});
