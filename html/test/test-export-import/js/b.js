export let testA = {
    name: "b.js - name",
};


export let foo = ()=>{
    console.log("I'm b.js foo()");
};

let bar = ()=>{
    console.log("I'm b.js foo()");
};
export {bar};


export function add(a, b) {
    console.log("I'm b.js add");
    return a + b;
};

export function subtract(a, b) {
    console.log("I'm b.js subtract");
    return a - b;
};
export function multiply(a, b) {
    console.log("I'm b.js multiply");
    return a * b;
};

export function divide(a, b) {
    console.log("I'm b.js divide");
    return a / b;
};


function showInfo() {
    console.log("I'm b.js showInfo()");
}
export default showInfo;