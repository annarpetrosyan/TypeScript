"use strict";
/*
Functions (type) ================ 3
 */
// const myName: string = 'Anna';
// const myAge: number = 27;
//
// function getMyName(): string {
//     return myName;
// }
//
// function getMyAge(): number{
//     return myAge;
// }
//
// console.log(getMyName());
// console.log(getMyAge());
//
// function getMyAge(age: number, prefix: string): string {
//     return prefix + age;
// }
//
// // console.log(40, 'Test');
//
// function consoleLog(str: string): void {
//     console.log(str);
// }
//
// consoleLog('Test');
var testFund = function () { return 1 + 1; };
var testFund2 = function () {
    return 1 + 1;
};
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(sum(10, 3));
