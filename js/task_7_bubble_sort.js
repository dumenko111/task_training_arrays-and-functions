//сортування масиву з циклом
//повернути відсортовану копію масиву не міняючи вихідного файлу
//BUBBLE_SORT -сортування пузирьком або сортування простими обмінами - один з найпростіших видів сортування
//він використовується для сортування масивів не великих розмірів. Суть алгоритму в тому, що здійснюється декілька проходів по масиву
//і кожного разу два сусудні елементи попарно порівнюються. Якщо вони знаходяться в правильному порядку, то нічого не відбувається, в іншому випадку
//вони міняються місцями

const arr = ['HTML', 'JavaScript', 'Algol', 'CSS', 'Basic']

const sortStringArray = function (stringArray) {
    const sortedArray = stringArray.slice(0)

    for (let i = sortedArray.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                const temp = sortedArray[j]
                sortedArray[j] = sortedArray[j + 1]
                sortedArray[j + 1] = temp
            }
        }
    }
    return sortedArray
}

console.log(arr)
console.log(sortStringArray(arr))