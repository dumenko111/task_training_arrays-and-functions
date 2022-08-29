//пошук елементу
//написати функцію findLargestNumber(numbers),
//яка шукає найбільше число в масиві

const findLargestNumber = function (numbers) {
    let num = numbers[0] //виконуємо порівнння кожного числа з масиву з першим елементом масиву тобто numbers[0]

    for (const number of numbers) {
        if (number > num) {
            num = number
        }
    }
    return num
   


    // console.log(Math.max(...numbers))//або просто через розпилення і використовуючи метод спред
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37]))
console.log(findLargestNumber([49, 4, 83, 7, 12]))
