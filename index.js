// Question 64
function MergeStringAndNumber(str, num) {
    let finalstring = str + num;
    return `Your given string ${str} and given number is ${num}\n So the final string is ${finalstring}`;
}
console.log(MergeStringAndNumber("Age is ", 20));
// Question 65
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(`The remainder of 5 and 4 is ${remainder(5, 4)}`);
// Question 66
const CheckBothTrue = (bool1, bool2) => {
    if (bool1 === true && bool2 === true) {
        return true;
    }
    else {
        return false;
    }
};
console.log(CheckBothTrue(false, false));
export {};
// Shortcut Method
// function checkBothTrue(val1: boolean, val2: boolean): boolean {
//     // Only says true if both val1 and val2 are true
//     return val1 && val2;
// }
// // Trying it with true and false
// console.log(checkBothTrue(true, false));
