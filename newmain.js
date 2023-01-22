// Homework 1
// let sumPositive = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; ++i) {
//         if (numbers[i] > 0) {
//             sum += numbers[i];
//         }
//     }
//     return sum;
// };
//
// let result = sumPositive([16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]);
//
// console.log(result);

// Homework 4

// let myArray = [4, -5, 0, 2, -67, 8, 10, -34 ];
//
// function getNegativeNumbers(array) {
//
//     let negatives = [];
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             negatives.push(array[i]);
//         }
//     }
//     return negatives;
//
// }
// console.log(getNegativeNumbers(myArray));



// Homework 5

// function pos(arr){
//     return arr.reduce((ret_arr, number, index) => {
//         if (number >= 0) ret_arr.push(index)
//         return ret_arr
//     }, [])
//
// }
// console.log(pos([2,3,4,-1,-2]))



// Homework 2
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4];
// let index = arr.reduce((a, b, i) => b < arr[a] ? i : a, 0);
// document.write(`Min: ${arr[index]} Position: ${index}`);


// Homework 3
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4];
// let index = arr.reduce((a, b, i) => b > arr[a] ? i : a, 0);
// document.write(`Max: ${arr[index]} Position: ${index}`);






// Homework 9

// let usserNumber=prompt("Enter your number: ")
// let usserNumber2=prompt("Enter your number: ")
// let usserNumber3=prompt("Enter your number: ")
// let usserNumber4=prompt("Enter your number: ")
// let usserNumber5=prompt("Enter your number: ")
//
//
//
// function pos(arr){
//     return arr.reduce((ret_arr, number, index) => {
//         if (number >= 0) ret_arr.push(index)
//         return ret_arr
//     }, [])
//
// }
//
// console.log(pos([usserNumber,usserNumber2,usserNumber3,usserNumber4,usserNumber5]))





// Homework 8
// const sumPositive = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; ++i) {
//         if (numbers[i] > 0) {
//             sum += numbers[i];
//         }
//     }
//     return sum;
// };
// const result = sumPositive([1, 2, 3, -4, -5, -6]);
//
// console.log(result);



// Homework 7
// function chkPair(A , size , x) {
//
//     for (i = 0; i < (size - 1); i++) {
//         for (j = (i + 1); j < size; j++) {
//
//             if (A[i] + A[j] == x) {
//                 document.write("Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")");
//
//                 return true;
//             }
//         }
//     }
//
//     return false;
// }
//
// let A = [ 0, -1, 2, -3, 1 ];
// let x = -2;
// let size = A.length;
//
// if (chkPair(A, size, x)) {
//     document.write("<br/>Valid pair exists");
// }
// else {
//     document.write("<br/>No valid pair exists for " + x);
// }




// Homework 10

// let counter=1;
// let number= [];
//
// let largest=0;
//
// while (counter <= 10){
//
//     number.push(Number(window.prompt("Enter Numbers 1-10 Number:"+counter+"."),10));
//
//     counter++;
// }
//
// Array.prototype.max = function () {
//     return Math.max.apply(Math, this);
// };
//
//
// largest = number.max();
// document.writeln("Largest number is " +largest);



// Homework 5
// const arr = [1, -1, 2, -2, 3];
// const findOddNumber = (arr = []) => {
//     let count = 0;
//     let number = arr.reduce((total, num) => {
//         if (num >= 0)
//             count++
//         else
//             count--
//         return total + num;
//     }, 0)
//     return number / Math.abs(count);
// };
// console.log(findOddNumber(arr));