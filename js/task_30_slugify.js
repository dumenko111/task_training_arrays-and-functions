//написати фкнкцію slugify(string), яка отримує строку і повертає URL-slug
//в строці тільки букви і пробіли

const title = 'Top 10 benefits of React framework'

const slugify = function (string) {
    return string.toLowerCase().split(' ').join('-')
}

console.log(slugify(title))