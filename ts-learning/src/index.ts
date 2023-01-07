

let age = 30;
// logValue();
function logValue() {
    console.log(age);
}
console.log(age);

const circ = (a: number) => {
    return a * 20;
}

console.log(circ(5));

let numbers: (string | number)[] = [];
numbers.push(4);
numbers.push('hello')
console.log(numbers)
console.log(typeof (age))

let obj: {
    name: string,
    age: number
};

obj = {
    name: 'hello',
    age: 20
}

let stringList: object | string = {};
console.log(typeof (stringList))