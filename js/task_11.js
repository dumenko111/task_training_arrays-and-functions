//СТРІЛОЧНІ ФУНКЦІЇ
//виконати рефакторинг - замінити оголошення функції на стрілочну

// function checkNumbers(a, b) { //стандартно
//   if (a > b) {
//     return `число ${a} більше ${b}`
//   }
//   return `число ${b} більше ${a}`
// }

const checkNumbers = (a, b) => {
  if (a > b) {
    return `число ${a} більше ${b}`
  }
  return `число ${b} більше ${a}`
}

console.log(checkNumbers(3, 21))
console.log(checkNumbers(300, 9))