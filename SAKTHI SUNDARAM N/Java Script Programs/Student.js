const readline = require("readline");

class Student {
    
    constructor(name, rollNumber, age, marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.age = age;
        this.marks = marks;
    }

    
    displayDetails() {
        console.log("\nStudent Details:");
        console.log(`Name       : ${this.name}`);
        console.log(`Roll Number: ${this.rollNumber}`);
        console.log(`Age        : ${this.age}`);
        console.log(`Marks      : ${this.marks}`);
    }

    
    getResult() {
        if (this.marks >= 40) {
            return "Pass";
        }

        return "Fail";
    }
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter student name: ", (name) => {
    input.question("Enter roll number: ", (rollNumber) => {
        input.question("Enter age: ", (ageInput) => {
            input.question("Enter marks: ", (marksInput) => {

                const age = Number(ageInput);
                const marks = Number(marksInput);

                if (
                    Number.isNaN(age) ||
                    Number.isNaN(marks)
                ) {
                    console.log("Please enter valid numeric values.");
                    input.close();
                    return;
                }

                const student = new Student(
                    name,
                    rollNumber,
                    age,
                    marks
                );

                student.displayDetails();
                console.log(`Result     : ${student.getResult()}`);

                input.close();
            });
        });
    });
});