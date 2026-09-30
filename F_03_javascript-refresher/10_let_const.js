// 1. Reassigning let
let currentCity = "Manila";
console.log("Initial city:", currentCity);

currentCity = "Cebu"; // Allowed
console.log("Updated city:", currentCity);

// 2. Constants with const
const maxUsers = 100;
console.log("Max users allowed:", maxUsers);

// Reassigning a const variable throws an error:
try {
  maxUsers = 150; // Will fail!
} catch (error) {
  console.log("Error caught when reassigning const:", error.message);
}

// 3. Demonstrating var vs let scope
if (true) {
  var legacyVar = "I leak outside block scope";
  let scopedLet = "I stay inside block scope";
}

console.log("Legacy var outside block:", legacyVar);

try {
  console.log(scopedLet); // ReferenceError
} catch (error) {
  console.log("Error accessing scoped let outside block:", error.message);
}