//написати скріпт, який підраховує суму всіх парних чисел в масиві

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]
let total = 0

for (const number of numbers) {
  console.log(number)

  if (number % 2 === 0) {
    console.log(`Парне ${number}`)
    total += number
  }
 
}
console.log(`Total`, total)


