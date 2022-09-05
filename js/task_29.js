//напиши функцію changeCase(string) яка міняє регістр
//кожного символу в строці на протилежний.
//наприклад, якщо строка 'JavaScript', то на виході має вийти 'jAVAsCRIPT'





const changeCase = function (string) {
    const letters = string.split('')
    let invertedString = ''
    
    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase()//на кожній ітерації перевіряємо чи символ дорівнює маленькому регістру

        invertedString += isInLowerCase ? //якщо малий регістр true, то запишиться у великому рігістрі 
            letter.toUpperCase() :
            letter.toLowerCase()
    }
    return invertedString
}

console.log(changeCase('JavaScript'))