//ПОШУК НАЙДОВШОГО СЛОВА
//написати функцію findLongestWord(string), яка приймає
//строку, яка складається зі слів з пробілами і повертає найдовше слово

const findLongestWord = function (string) {
    const words = string.split(' ') //трансформуємо строку в масив строк
    let longestWord = string[0] //використовуємо в змінній перший елемент з нульовим індексом
    // console.log(longestWord)

    for (const word of words) { //перебираємо масив слів
        if (word.length > longestWord.length)
            longestWord = word
    }
    console.log(longestWord)

}

findLongestWord('The quick brown fox jumped over the lazy dog')
findLongestWord('Google do a roll')
findLongestWord('May the force be with you')