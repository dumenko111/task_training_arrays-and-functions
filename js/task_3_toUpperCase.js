//за допомогою метода split() і метода jpin() написати функцію
//capitalze(word), яка приймає слово і повертає нове слово, з першим
//символом в верхньому регістрі

const lowerWorld = 'hello'

const capitalze = function (word) {
    const letters = word.split('')
    letters[0] = letters[0].toUpperCase()
   
    return letters.join('')
}


console.log(capitalze(lowerWorld))
console.log(capitalze('ukraine'))
