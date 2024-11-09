import moduleA from './a.js';

import moduleB from './b.js';
import * as bModule from './b.js';

console.log("#################################################################################################################");
console.log("# Start - main.js #");
console.log("#################################################################################################################");


console.log("$ call a.js ----------------");

console.log(moduleA.name);

console.log("--------------------------");

console.log("");
console.log("");

console.log("call b.js ----------------");

console.log(moduleB);
// console.log(moduleB()); // undefined
// console.log(moduleB.add(3, 4)); // Uncaught TypeError: moduleB.add is not a function

console.log("--------------");

console.log(bModule);
// console.log(bModule.showInfo()); // Uncaught TypeError: bModule.showInfo is not a function
console.log(bModule.add(3, 4));


console.log("--------------------------");



console.log("= End - main.js =============================================================================================");

