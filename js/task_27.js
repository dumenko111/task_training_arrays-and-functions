//написати функцію findLogin(allLogins, login) для пошуку логіна
//якщо логіна немає, вивести повідомлення "Користувача [логін] не знайдено"
//якщо знайшли логін, вивеси повідомлення "Користувач [логін] знайдено"

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n']


// const findLogin = function (allLogins, loginToFind) {

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return  `Користувач ${loginToFind} знайдений`
//         }
//     }
//     return `Користувача ${loginToFind} не знайдено`
// }

//////ЧЕРЕЗ ТЕРНАРНИК///////////

const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind) ?
        `Користувач ${loginToFind} знайдений` :
        `Користувача ${loginToFind} не знайдено`
}

console.log(findLogin(logins, 'avocod3r'))
console.log(findLogin(logins, 'k1widab3st'))
console.log(findLogin(logins, 'jam4l'))
console.log(findLogin(logins, 'poly1scute'))
console.log(findLogin(logins, 'aj4xth3m4n'))

