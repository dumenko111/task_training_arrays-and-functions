//колекція курсів courses (includes, indexOf, push і т.д.)
//написати функцію для роботи з колекцією навчальних курсів courses:
////////////////////////////////
//addCources(name) - добавляє курс в кінець колекції
//removeCourse(name) - видаляє курс із колекції
//update(oldName, newName) - замінію старе ім'я на нове
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

const addCource = function (name) {
    if (courses.includes(name)) { //якщо такий курс є, виведе строку 'такий курс вже є'
        console.log('такий курс вже є')
    } else {
        return courses.push(name)
    }
}

const removeCourse = function (name) {
    const removedIndex = courses.indexOf(name)
    
    if (removedIndex === -1) return

    courses.splice(removedIndex, 1)
}

const update = function (oldName, newName) {
    const replacedIndex = courses.indexOf(oldName) //через indexOf перевіряємо чи передається в oldName елемент, який вже є у масиві
    
    if (replacedIndex === -1) //якщо indexOf не знаходить елемент він повертає значення -1, тому вказано строге порівняння
        console.log('курс з таким іменем не знайдено') 

    courses.splice(replacedIndex, 1, newName)
}


addCource('Express') //має вивести ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
console.log(courses)

addCource('CSS') //має вивести "такий курс вже є"
console.log(courses)

removeCourse('React') //має вивести ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
console.log(courses)

console.log(removeCourse('Vue')) //має вивести "курс з таким іменем не знайдено"
console.log(courses)

update('Express', 'NestJS')
console.log(courses)
