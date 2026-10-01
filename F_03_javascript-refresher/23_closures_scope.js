function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log("Count:", counter());
console.log("Count:", counter());
console.log("Count:", counter());