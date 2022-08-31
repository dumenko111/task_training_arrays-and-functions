//підрахувати загаль суму покупок в корзині

const cart = [54, 28, 105, 70, 92, 17, 12]
let total = 0

for (const n of cart) {
    total += n
    console.log(n)
}
console.log(`Total -`, total)

/////////////////////////////////////////////////////
//додаємо податок 20% до кожного елементу масиву

const numbers = [54, 28, 105, 70, 92, 17, 12]
let sum = 0

for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = Math.round(numbers[i] * 1.2)
    //додаємо 20%(1.1) до кожного елементу масиву
    console.log(numbers[i])
    sum += numbers[i]
}
console.log(`Сума чисел з податком - `, sum)