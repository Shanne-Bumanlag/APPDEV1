function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Shanne"));

const square = (num) => num * num;

console.log(square(6));

function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}

console.log(calculator(8, 4));