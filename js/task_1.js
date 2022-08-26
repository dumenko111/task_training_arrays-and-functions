//створити масив з елементами "Джаз" і "Блюз"

const styles = ['Джаз', 'Блюз']
console.log(styles)

//добавити рок в кінець масиву

styles.push('Рок')
console.log(styles)

//замінити елемент в середині масиву на "класика"
//код для заміни середнього елементу в середині повинен працювати
//на масиві будь якої довжини
const middleElementIndex = Math.ceil(styles.length / 2) - 1
styles.splice(middleElementIndex, 1, 'Класика')//метод splice(з якого елементу починаємо, к-сть елементів,)
console.log(styles)

//видалити перший елемент і вивести його в консоль

const deleteFirstItems = styles.shift()
console.log(styles)
console.log(deleteFirstItems)//виведе в консоль тільки видалений елемент "Джаз"

//вставити "Реп" і "Метал" в початок масиву

styles.unshift('Реп', 'Метал') //через unshift
// styles.splice('Реп', 'Метал')
console.log(styles)