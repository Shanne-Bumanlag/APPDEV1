// 1. Equality & Emptiness
console.log("5" == 5);  // true (type coercion)
console.log("5" === 5); // false (strict check)

let unsetVariable;
let emptyValue = null;
console.log("Unset variable:", unsetVariable); // undefined
console.log("Explicitly empty:", emptyValue);     // null

// 2. 'this' in Regular vs Arrow Functions
const profile = {
  username: "Alex",
  showRegular: function () {
    console.log("Regular function this.username:", this.username);
  },
  showArrow: () => {
    console.log("Arrow function this.username:", this.username);
  },
};

profile.showRegular(); // Outputs: Alex
profile.showArrow();   // Outputs: undefined (borrows scope from outer context)

// 3. Reference vs Copy
const originalList = ["Task 1", "Task 2"];

// Reference Copy (modifying linkedList changes originalList)
const linkedList = originalList;
linkedList.push("Task 3");
console.log("Original after reference push:", originalList); // ["Task 1", "Task 2", "Task 3"]

// Spread Copy (independent copy)
const clonedList = [...originalList];
clonedList.push("Task 4");
console.log("Original after spread push:", originalList);    // ["Task 1", "Task 2", "Task 3"]
console.log("Cloned list:", clonedList);                      // ["Task 1", "Task 2", "Task 3", "Task 4"]