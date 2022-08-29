//за допомогою методу splt() і методу join()
//написати функцію snakeToCamelCase(word),
//яка приймає ім'я змінної у форматі snake_case
//і повертає нове ім'я у форматі CamelCase

const variableName = 'this_is_some_variable_name'

const capitalze = function (word) {
    const letters = word.split('')
    letters[0] = letters[0].toUpperCase()
   
    return letters.join('')
}

const snakeToCamelCase = function (word) {
    const parts = word.split('_')
    
    for (let i = 1; i < parts.length; i += 1) { //лічильник починаємо з одиниці, щоб перше слово булотакож з маленької
        parts[i] = capitalze(parts[i]) //тут використовуємо функцію, яка повертає слово з великої літери
    }
    return parts.join('')
}

console.log(variableName)
console.log(snakeToCamelCase(variableName))

