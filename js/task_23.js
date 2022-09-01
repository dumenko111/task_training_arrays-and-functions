//написати скріпт, який підрахує суму двох масивів

const arrayOne = [5, 10, 15, 20]
const arrayTwo = [10, 20, 30]
let total = 0

const twoArrays = arrayOne.concat(arrayTwo)

for (const twoArray of twoArrays) {
    total += twoArray
}

console.log(total)
