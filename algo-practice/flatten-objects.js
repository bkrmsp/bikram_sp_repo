//ALGO TO FLATTEN A NESTED OBJECT TO SINGLE LEVEL OBJECT
var output = {};
function flattenObject(input, keyName) {
    let keys = Object.keys(input);
    for (let key of keys) {
        let newKey = `${ keyName }_${ key }`;
        if (typeof key === 'object')
            flattenObject(input[key], newKey);
        else
            output[newKey] = input[key];
    }
}

let user = {
    name: "Vishal",
    address: {
        primary: {
            house: "109",
            street: {
                main: "21",
                cross: "32"
            }
        }
    }
};

flattenObject(user, Object.name(user));
console.log(output);