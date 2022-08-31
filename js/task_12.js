//СТРІЛОЧНІ ФУНКЦІЇ (implicit return) = (неявне повернення)
//виконати рефакторинг (замінити оголошення функції на стрілочну)

// function mult(x, y, z) { //СТАНДАРТНО ОГОЛОШЕНА
//     return x * y * z
// }

const mult = (x, y, z) =>   x * y * z  //неявне повернення


console.log(mult(1, 2, 3))
console.log(mult(2, 3, 4))