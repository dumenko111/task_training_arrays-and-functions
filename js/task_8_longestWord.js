//ПОШУК НАЙДОВШОГО СЛОВА
//написати функцію findLongestWord(string), яка приймає
//строку, яка складається зі слів з пробілами і повертає найдовше слово

const findLongestWord = function (string) {
    string = string.split(' ')
    let longestWord = string[0]
    console.log(longestWord)

    for (const str of string) {
        

        if (longestWord > str.length)
            
        console.log(str) 
    }
    
}

findLongestWord('The quick brown fox jumped over the lazy dog')
findLongestWord('Google do a roll')
findLongestWord('May the force be with you')