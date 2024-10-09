class Person{

    //Private Fields
    #name;
    #age;
    #occupation;
    #dreamjob

    constructor(name, age, occupation, dreamjob){
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
        this.#dreamjob = dreamjob;

    }

    //Getters
    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get occupation(){
        return this.#occupation;
    }
    get dreamjob(){
        return this.#dreamjob;
    }


    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Dream Job: " + this.#dreamjob);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
            <strong>Dream Job:</strong> ${this.#dreamjob}
        `;
    }
}

class Student extends Person {
    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.course = this.course;
    }

    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("Course: " + this.course);
    }

    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>Major:</strong> ${this.course}`;
    }
}

// Creating an instance of the Student class
const studentOne = new Student('Mark Lester', 19, 'Student', 'B.S.I.T');

// Calling methods
studentOne.displayInfo();