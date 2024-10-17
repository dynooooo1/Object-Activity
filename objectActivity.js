// Task 1: Create an object called 'car' with properties: type, model, and color.
const car = {
    type: "Honda",  // Initial type is Honda
    model: "Civic",  // Model is Civic
    color: "black"  // Set color to black from the beginning
};

// Task 2: Use typeof to check the type of the object and log it to the console.
console.log(typeof car);  // Expected output: "object"

// Task 3: Update the type property to "Toyota" and log the updated object.
car.type = "Toyota";
console.log(car);  // Expected output: { type: "Toyota", model: "Civic", color: "black" }

// Task 4: Add a new property 'wheels' with the value 4 and log the updated object.
car.wheels = 4;
console.log(car);  // Expected output: { type: "Toyota", model: "Civic", color: "black", wheels: 4 }
