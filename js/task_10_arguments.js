//ПСЕВДОМАСИВ ARGUMENTS
//написати функцію calculateAverage(), яка приймає довільну
//к-сть аргументів і повертає середньо арефметичне значення від загальної суми чисел
//всі аргументи будуть тільки часлами

function calculateAverage() {
  let total = 0

  for (let i = 0; i < arguments.length; i += 1) {
    total += arguments[i]
  }
  return total / arguments.length //виводимо середне ареф
}

console.log(calculateAverage(1, 2, 3, 4))
console.log(calculateAverage(14, 8, 2))
console.log(calculateAverage(27, 43, 2, 8, 36))
