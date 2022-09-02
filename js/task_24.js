//колекція карток
//метод splice()
// видалити // добавити // оновити //

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
]

//видалення (по індексу), метод indexOf()

const cardToRemove = 'Карточка-3'
const indexDelete = cards.indexOf(cardToRemove)//дізнаюся індекс карточки 3
console.log(indexDelete)
cards.splice(indexDelete, 1) //видаляю карточку 3
console.log(cards)



//додавання по індексу

const cardToInsert = 'Карточка-6'
const index = 3
cards.splice(index, 0, cardToInsert)
console.log(cards)

//оновлення по індексу

const cardToUpdate = 'Карточка-4'
const deleteIndex = cards.indexOf(cardToUpdate)//дізнаюся індекс карточки 3
console.log(deleteIndex)
cards.splice(deleteIndex, 1, 'Оновлена карточка-4')
console.log(cards)
