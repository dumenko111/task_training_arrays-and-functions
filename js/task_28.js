//нваисати функцію findSmallestNumber(numbers) для пошуку самого
//маленького числа в масиві. При умові що всі числа унікальні (не повторяються)

const numbers = [51, 18, 13, 24, 7, 85, 19]
let smallestNumber = numbers[0]

// const findSmallestNumber = function (numbers) {
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number
//         }
//     }
//     return smallestNumber
// }

// console.log(findSmallestNumber(numbers))




//////через спред///////////
console.log('Саме найменше число в масиві =',((Math.min(...numbers))))




