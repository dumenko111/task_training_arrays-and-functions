//написати скріпт пошуку логіна
//якщо логіна немає, вивести повідомлення "Користувач [логін] не знайдено"
//якщо знайшли логін, вивести повідмлення  "Користувач [логін] знайдено"

//спочатку через for, потім ч/з for of, потім ч/з тернарник з методом includes

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n']
const loginToFind = 'poly1scute'
let message = `Користувач ${loginToFind} не знайдено`

/////////ЧЕРЕЗ FOR///////////////////
// for (let i = 0; i < logins.length; i += 1) {
//     // console.log(logins[i])

//     if (logins[i] === loginToFind) {
//         message = `Користувач ${loginToFind} знайдено`
//         break
//     }

// } console.log(message)

/////////ЧЕРЕЗ FOR OF///////////////////
// for (const login of logins) {
//   if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайдено`
//         break
//     } 

// } console.log(message)

////////////ч/з тернарник з методом includes///////////
message = logins.includes(loginToFind) ?
    `Користувач ${loginToFind} знайдено` :
    `Користувач ${loginToFind} не знайдено`
    
console.log(message)