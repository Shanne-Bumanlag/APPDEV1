function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Shanne"));

const square = (num) => num * num;

console.log(square(3));

function calculator(a, b) {
    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
        quotient: a / b
    };
}

console.log(calculator(8, 4));