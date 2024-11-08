/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


import "./CommonUI-Debug.js";

import util from "./CommonUI-Util.js";

import "./CommonUI-Admin.js";

import "./CommonUI-Blog.js";


console.log("#################################################################################################################");
console.log("# Start - CommonUI.js #");
console.log("#################################################################################################################");

let bEnableDebug = true;

const moduleEnum = {
    Admin: 'Admin',
    Blog: 'Blog',
};


let a = 123;
let b = "str";

console.log(util.typeUtils.isNumber(a));
console.log(util.typeUtils.isNumber(b));

console.log(util.typeUtils.isString(a));
console.log(util.typeUtils.isString(b));

console.log("= End - CommonUI.js =============================================================================================");

