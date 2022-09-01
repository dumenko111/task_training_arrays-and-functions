//написати скріпт, який заміняє регістр кожного символу в строці
//на протилежний.
//наприклад, якщо строка "JavaScript", то на виході має получитися "jAVAsCRIPT"

const string = 'JavaScript'

let reverseString = ''
const letters = string.split('')


// for (const letter of letters) {
//     if (letter === letter.toLowerCase()) {
//         // console.log(letter)
//         reverseString += letter.toUpperCase()
//     } else {
//         reverseString += letter.toLowerCase()
//     }
//     }
//     console.log(reverseString)

///////////ч/з ТЕРНАРНИК//////////
for (const letter of letters) {
    reverseString += letter === letter.toLowerCase() ?
        letter.toUpperCase() :
        letter.toLowerCase()
    } 
    console.log(reverseString)