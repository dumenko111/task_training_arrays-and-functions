// 1задачка
//написати функцію add для складання довільної к-сті аргументів (чисел)
//операція ...rest

// const add = function (...args) {
//     let total = 0
//     for (const arg of args) {
//         total += arg
//     }
//     return total
// }

// console.log(add(1, 2, 3))
// console.log(add(1, 2, 3, 4, 5, 6))

// 2 задачка
//написати функцію filterNumbers(array [number1, ...]) яка
//-першим аргументом приймає масив чисел, після першого аргументу може бути довільна к-сть інших аргументів, які будуть числами
//-функція повинна повернути новий масив, в якому будуть тільки ті аргументи (числа), які співпадають

const filterNumbers = function (array, ...args) {
    const uniqueElement = []

    for (const element of array) {
        if (args.includes(element))
            uniqueElement.push(element)
    }
    return uniqueElement
}

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)) // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)) // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)) // [200]
