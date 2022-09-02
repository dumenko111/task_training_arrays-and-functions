//написати функцію calculateTotalPrice(items)
//яка приймає і повертає масив цін (числа) і повертає їхню суму

let total = 0

const calculateTotalPrice = function (items) {
    for (const item of items) {
        total += item
    } return total
}


console.log(calculateTotalPrice([1, 2, 3])) //6
console.log(calculateTotalPrice([5,10,15,20])) //50
console.log(calculateTotalPrice([100,200,300])) //600
